//

const Follow = require("../models/Follow")

// TODO: Rename this to getUserFollowers
async function getUserFollowers(req, res) {
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

// TODO: Rename this to getUserFollowings
async function getUserFollowings(req, res) {
    try {
        const followings = await Follow.findAll({
            where: {
                followerId: parseInt(req.params.userId)
            }
        })

        // Send all followings as response
        return res.json(followings)
    } catch (error) {
        res.status(500).json({error: error})
    }
}

// Follow user
async function createFollow(req, res) {
    try {
        const follow = await Follow.create({
            ...req.body,
            followerId: parseInt(req.params.userId)
        })

        // Send follow as response
        res.json(follow)
    } catch (error) {
        res.status(500).json({error: error})
    }
}

// Unfollow user
async function deleteFollow(req, res) {
    try {
        const Follow = await Follow.destroy({
            where: {
                id: parseInt(req.params.id)
            }
        })

        // Send unfollow as response
        res.json(follow)
    } catch (error) {
        res.status(500).json({error: error})
    }
}

module.exports = {
    getUserFollowers,
    getUserFollowings,
    createFollow,
    deleteFollow
}