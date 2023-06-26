const Tweet = require("../models/Tweets.js")

async function getAllTweets(req, res) {
    try {
        // Find all tweets (without pagination)
        const tweets = await Tweet.findAll()

        // Send all tasks as response
        res.json(tweets)
    } catch (error) {
        res.status(500).json({error: error})
    }
}

async function getTweetById(req, res) {

}

async function createTweet(req, res) {
    try {
        // Create tweet using data from req body
        const tweet = await Tweet.create(req.body)

        // Send created tweet as response
        res.json(tweet)
    } catch (error) {
        res.status(500).json({error: error})
    }
}

async function deleteTweet(req, res) {

}

module.exports = {
    getAllTweets,
    getTweetById,
    createTweet,
    deleteTweet
}