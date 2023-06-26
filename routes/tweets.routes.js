const express = require('express')
const router = express.Router()
const tweetController = require('../controllers/tweets.controller')

// Remove /tweets since the index.js is already using the prefix
router.post('/', tweetController.createTweet)

router.get('/feed', tweetController.getAllTweets)

// TODO: Change :id into :userId
router.get('/users/:userId/tweets', tweetController.getTweetById)

// TODO: Implement update and delete tweet.
module.exports = router;