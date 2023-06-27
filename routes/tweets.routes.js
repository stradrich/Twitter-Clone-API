const express = require('express')
const router = express.Router()
const tweetController = require('../controllers/tweets.controller')
const { verifyToken, checkRole } = require('../middlewares/auth.middleware')

router.get('/feed', tweetController.getAllTweets)
router.get('/users/:userId/tweets', tweetController.getTweetById)

router.post(
    '/',
    verifyToken,
    checkRole('user', 'admin'),
    tweetController.createTweet
)

router.put(
    '/:tweetId', 
    verifyToken,
    checkRole(['user', 'admin']),
    tweetController.updateTweet
)

router.delete(
    '/:tweetId',
    verifyToken,
    checkRole(['user', 'admin']),
    tweetController.deleteTweet
)

module.exports = router;