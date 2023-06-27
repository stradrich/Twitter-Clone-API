const express = require('express')
const router = express.Router()
const repliesController = require('../controllers/replies.controller')

router.get('/:tweetId/reply', repliesController.getReplies)
router.post('/:tweetId/reply',repliesController.createReply)
router.put('/:tweetId/reply/:id',repliesController.updateReply)
router.delete('/:tweetId/reply/:id', repliesController.deleteReply)

module.exports = router;