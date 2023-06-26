const express = require('express')
const router = express.Router()
const tweetController = require('../controllers/tweets.controller')

router.post('/tweets', tweetController.createTweet)
router.get('/feed', tweetController.getAllTweets)
router.get('/users/:id/tweets', tweetController.getTweetById)

module.exports = router;