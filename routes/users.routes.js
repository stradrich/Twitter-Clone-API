const express  = require('express')
const router = express.Router()
const usersController = require('../controllers/users.controller')
const { verifyToken, checkRole } = require("../middlewares/auth.middleware.js")

router.get('/', usersController.getAllUsers)
router.get('/:userId', usersController.getUserById)

router.post(
    '/',
    verifyToken,
    checkRole(['admin']),
    usersController.createUser
)

router.put(
    '/:userId',
    verifyToken,
    checkRole(['user', 'admin']),
    usersController.updateUser
)

router.delete(
    '/:userId',
    verifyToken,
    checkRole(['user', 'admin']),
    usersController.deleteUser
)

module.exports = router