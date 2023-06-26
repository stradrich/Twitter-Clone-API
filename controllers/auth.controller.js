// User Registration and Authentication
//    - Implement user model
//    - Implement user registration
//    - Implement user login

const jwt = require("jsonwebtoken");
const User = require("../models/User")
const { hashPassword, comparePassword, hashPassword } = require("../utils/bcrypt.util.js");

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
    
    } catch (error) {
        
    }
}

module.exports = {
    register,
    login
}
