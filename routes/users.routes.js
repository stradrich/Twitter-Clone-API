const express  = require('express')
const router = express.Router()
const usersController = require('../controllers/users.controller')

router.get('/users', usersController.getAllUsers )
router.get('/users/:id', usersController.getUserById)
router.post('/users',usersController.createUser )
router.put('/users/:id',usersController.updateUser)
router.delete('/users/:id',usersController.deleteUser)


module.exports = router