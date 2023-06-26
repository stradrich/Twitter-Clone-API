const Reply = require('../models/Replies')

async function getReplies(req,res){
    try {
        const replies = await Reply.findAll({
            where: {
                tweet_id: parseInt(req.params.id)
            }
        })
        res.json(replies)
    } catch (error) {
        res.status(500).json({error:error})
    }
}


async function createReply (req, res){

    try {
        // create reply using data from request body
        // request body must contain all required fields defined in Replies model

        const reply = await Reply.create(req.body)

        res.json(reply);

    } catch (error) {
        res.status(500).json({error:error})
    }
}

async function updateReply (req, res){
    
try {

    
} catch (error) {
    
}}


module.exports = [
    createReply,
    updateReply,
]