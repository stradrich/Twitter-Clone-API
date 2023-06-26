const User = require("../models/User.js");
const { hashPassword } = require("../utils/bcrypt.util.js")

async function getAllUsers(req, res) {
    try {
        // Find all users (without pagination)
        const users = await User.findAll()

        // Send all users as response
        res.json(users)
    } catch (error) {
        res.status(500).json({error: error})
    }
}

async function getUserById(req, res) {
    try {
        
    } catch (error) {
        res.status(500).json({error: error})
    }
}

async function updateUser(req, res) {
    try {
        
    } catch (error) {
        res.status(500).json({error: error})
    }
}

async function deleteUser(req, res) {
    try {
        
    } catch (error) {
        res.status(500).json({error: error})
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
}