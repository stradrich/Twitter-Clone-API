const express = require('express')
const router = express.Router()
const repliesController = require('../controllers/replies.controller')
const { verifyToken, checkRole } = require('../middlewares/auth.middleware')

router.get('/:tweetId/reply', repliesController.getReplies)

router.post(
    '/:tweetId/reply',
    verifyToken,
    checkRole(['user', 'admin']),
    repliesController.createReply
)

router.put(
    '/:tweetId/reply/:replyId',
    verifyToken,
    checkRole(['user', 'admin']),
    repliesController.updateReply
)

router.delete(
    '/:tweetId/reply/:replyId', 
    verifyToken,
    checkRole(['user', 'admin']),
    repliesController.deleteReply
)

module.exports = router;