const express  = require('express')
const router = expess.Router()
const usersController = require('../controllers/users.controller')

router.get('/users', usersController.getAllUsers )
router.get('/users/:id', usersController.getUserById)
router.put('/users/:id',usersController.updateUser)
router.delete('/users/:id',usersController.deleteUser)


module.exports = router