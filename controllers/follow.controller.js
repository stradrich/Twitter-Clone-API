const Follow = require("../models/Follow.js")

async function getAllFollowers(req, res) {
    try {
        const followers = await Follow.findAll({
            where: {
                followingId: parseInt(req.params.userId)
            }
        })

        // Send all followers as response
        return res.json(followers)
    } catch (error) {
        res.status(500).json({error: error})
    }
}

async function getAllFollowings(req, res) {
    try {
        const followings = await Follow.findAll({
            where: {
                followersId: parseInt(req.params.userId)
            }
        })

        // Send all followings as response
        return res.json(followings)
    } catch (error) {
        res.status(500).json({error: error})
    }
}

module.exports = {
    getAllFollowers,
    getAllFollowings
}