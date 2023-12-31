// User Registration and Authentication
//    - Implement user model
//    - Implement user registration
//    - Implement user login

const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { hashPassword, comparePassword } = require("../utils/bcrypt.util.js");
const { mg } = require("../utils/mailgun.util.js");
const { where } = require("sequelize");

async function register(req, res) {
  try {
    // Database already Unique
    // Add another layer to check if user with the same email already exist
    const userExist = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (userExist) {
      throw "User already exists";
    }

    // Create user using data from request body.
    // Request body must contain all required fields defined in User model.
    const hashedPassword = hashPassword(req.body.password);
    const user = await User.create({
      ...req.body,
      password: hashedPassword,
    });

    // Create verification token with email
    const token = jwt.sign(
      {
        email: user.email,
      },
      process.env.SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );
    console.log(token);

    // Email data
    // const data = {
    //     from: "mailgun@" + process.env.MAILGUN_DOMAIN,
    //     to: user.email,
    //     subject: "Verify Your Account",
    //     html: `
    //     Please click on this link to verify your account:
    //     <a href="https://${req.header('Host')}/auth/verify?token=${token}">Verify Account</a>
    //     <br>
    //     <p>This verification link expires in 1 hour</p>
    //     `
    // }

    const data = {
      from: "mailgun@" + process.env.MAILGUN_DOMAIN,
      to: user.email,
      subject: "Verify Your Account",
      html: `Your token is ${token}`,
    };

    // Send email to user with verify link
    await mg.messages.create(process.env.MAILGUN_DOMAIN, data);

    // Send email sent message
    res.json({
      message: "Email verification link sent to user's email",
      user
    });

    // Send created user as response.
    // res.json(user);
    // res.status(200).json({ message: "User registered successfully" });
  } catch (error) {
    // If there is any error, send error as response.
    res.status(500).json({ error: error });
  }
}

async function verifyEmail(req, res) {
  try {
    // Get verification token from req body
    const { verificationToken } = req.body;
    console.log(verificationToken)

    if (!verificationToken) throw "Invalid verification token";

    // Verify & decode token & get user id
    const decoded = jwt.verify(verificationToken, process.env.SECRET_KEY);
    console.log(`decoded: `, decoded);

    const user = await User.findOne({
        where:{
            email: decoded.email
        }
    })

    // Update user to verified
    await User.update(
      {
        isVerified: true,
      },
      {
        where: {
          email: decoded.email,
        },
      }
    );
    console.log("checkpoint 3");

    // Send success message
    res.send({
      message: "Account verified",
    });

    // Prepare email data
    const data = {
      from: "mailgun@" + process.env.MAILGUN_DOMAIN,
      to: user.email,
      subject: "Account Verified",
      html: `
            <h3>Your account is now verified</h3>
            `,
    };
    console.log("checkpoint 4");

    // Send email to user
    await mg.messages.create(process.env.MAILGUN_DOMAIN, data);
    
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

async function login(req, res) {
  try {
    // Get user input
    const { email, password } = req.body;

    // Validate user input
    if (!email && !password) {
      // This will go to the catch block
      throw "Email and password are required";
    }

    const user = await User.findOne({
        where:{
            email: email
        }
    })

    if(!user) throw `User does not exist. Please sign up.`
    
    // Validate if user password
    const matchingPwd = comparePassword(password, user.password);

    if (!matchingPwd) throw "Invalid login credentials";

    // Generate JWT
    const token = jwt.sign(
      { id: user.id, email: user.email, role:user.role },
      process.env.SECRET_KEY,
      {
        // expiresIn: "2h",
        algorithm: "HS256",
      }
    );

    res.status(200).json({ accessToken: token });
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

module.exports = {
  register,
  verifyEmail,
  login,
};
