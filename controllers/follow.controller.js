const Follow = require("../models/Follow")

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
            followerId: parseInt(req.body.userId)
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
        const follower = req.user.id
        const following = req.params.followingId

        console.log(`follower:`,follower);
        console.log(`following:`,following);


        const follow = await Follow.destroy({
            where: {
                followerId: follower,
                followingId: following
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