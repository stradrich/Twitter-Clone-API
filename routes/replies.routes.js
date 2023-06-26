const express = require('express')
const router = express.Router()
const repliesController = require('../controllers/replies.controller')

router.post('/tweets/:id/reply')

module.exports = router;