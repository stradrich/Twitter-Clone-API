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

module.exports = {
    getAllFollowers
}