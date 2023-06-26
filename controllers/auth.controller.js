// User Registration and Authentication
//    - Implement user model
//    - Implement user registration
//    - Implement user login

const jwt = require("jsonwebtoken");
const User = require("../models/User")
const { hashPassword, comparePassword } = require("../utils/bcrypt.util.js");
const { mg } = require("../utils/mailgun.util.js")
const { where } = require("sequelize")

async function register(req, res) {
    try {
    // Database already Unique
    // Add another layer to check if user with the same email already exist
    const userExist = await User.findOne({
        where: {
            email: req.body.email,
        },
    });

    if (userExist) throw "Sorry, the provided email is already registered. Please choose a different email address.";

    // Create user using data from request body.
    // Request body must contain all required fields defined in User model.
    const hashPassword = hashPassword(req.body.password);
    const user = await User.create({
        ...req.body,
        password: hashPassword,
    })

    // Create verification token with email
    const token = jwt.sign(
        {
            email: user.email
        },
        process.env.SECRET_KEY,
        {
            expiresIn: "1h"
        }
    )

    // Email data
    const data = {
        from: "mailgun@" + process.env.MAILGUN_DOMAIN,
        to: user.email,
        subject: "Verify Your Account",
        html: `
        Please click on this link to verify your account:
        <a href="https://${req.header('Host')}/auth/verify?token=${token}">Verify Account</a>
        <br>
        <p>This verification link expires in 1 hour</p>
        `
    }

    // Send email to user with verify link
    await mg.messages.create(process.env.MAILGUN_DOMAIN, data)

    // Send email sent message
    res.send({
        message: "Email verification link sent to user's email"
    })

    // Send created user as response.
    res.json(user);
    } catch (error) {
    // If there is any error, send error as response.
    res.status(500).json({error: error});
    }
}

async function login(req, res) {
    try {
    // Get user input
    const { email, password } = req.body;

    // Validate user input
    if (!email && !password) {
        // This will go to the catch block
        throw "Mandatory field not fulfilled, please provide your email and password"
    }

    // Validate if user exists
    const matchingPwd = comparePassword(password, user.password);

    if(!matchingPwd) throw "Invalid login credentials"

    // Generate JWT
    const token = jwt.sign(
        { id: user.id, email: user.email},
        process.env.SECRET_KEY,
        {
            expiresIn: "2h",
            algorithm: "HS256"
        }
    );

    res.status(200).json({accessToken: token})
    
    } catch (error) {
        res.status(500).json({error: error})
    }
}

module.exports = {
    register,
    login
}
