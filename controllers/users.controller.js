const User = require("../models/User.js");
const { hashPassword } = require("../utils/bcrypt.util.js");

async function getAllUsers(req, res) {
  try {
    // Find all users (without pagination)
    const users = await User.findAll();

    // Send all users as response
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

async function getUserById(req, res) {
  try {
    // Find user by id
    const user = await User.findByPk(parseInt(req.params.id));

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

async function createUser(req, res) {
  try {
    const user = await User.create({
      ...req.body,
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

async function updateUser(req, res) {
  try {
    // User can only update their own profile
    // TESTING

    const user = await User.findByPk(parseInt(req.params.id))
    console.log("Update User", user)

    if(user.id !== req.user.id) {
      console.log("Cannot update other people's profile")
    }

    // if(req.body.id !== req.user.id) {
    //   throw "Cannot update other people's profile"
    // } else {
    //   const hashedPassword = hashPassword(req.body.password);
    //   const user = await User.update(
    //     {
    //       ...req.body,
    //       password: hashedPassword,
    //     },
    //     {
    //       where: {
    //         id: parseInt(req.params.id),
    //       },
    //     }
    //   );
  
    //   // Send updated user as response
    //   res.json(user);
    // }

  } catch (error) {
    res.status(500).json({ error: error });
  }
}

async function deleteUser(req, res) {
  try {
    // User can only delete their own profile
    // TESTING

    const user = await User.findByPk(parseInt(req.params.id))
    console.log("Delete User: ", user)

    if(user.id !== req.user.id) {
      console.log("Cannot delete other people's profile")
    }

    // if (req.body.id !== req.user.id) {
    //   throw "Cannot delete other people"
    // } else {
    //   const user = await User.destroy({
    //     where: {
    //       id: parseInt(req.params.id),
    //     },
    //   });
    //   // Send deleted user as response
    //   res.json(user);
    // }

  } catch (error) {
    res.status(500).json({ error: error });
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
