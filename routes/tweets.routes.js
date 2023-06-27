const express = require('express')
const router = express.Router()
const tweetController = require('../controllers/tweets.controller')

router.get('/feed', tweetController.getAllTweets)
router.get('/users/:userId/tweets', tweetController.getTweetById)
router.post('/', tweetController.createTweet)
router.put('/:id', tweetController.updateTweet)
router.delete('/:id', tweetController.deleteTweet)

module.exports = router;