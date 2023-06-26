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

module.exports = {
    getAllTweets
}