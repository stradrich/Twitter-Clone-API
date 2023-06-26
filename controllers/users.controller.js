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
        //find user by id
        const user = await User.findByPk(parseInt(req.params.id))

        res.json(user)
    } catch (error) {
        res.status(500).json({error: error})
    }
}


async function createUser(req,res){
try {
    const user = await User.create({
        ...req.body})
        res.json(user)
} catch (error) {
    res.status(500).json({error:error})
}

}

async function updateUser(req, res) {
    try {
        // TODO: Implement update user
    } catch (error) {
        res.status(500).json({error: error})
    }
}

async function deleteUser(req, res) {
    try {
        // TODO: implement delete user
    } catch (error) {
        res.status(500).json({error: error})
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}