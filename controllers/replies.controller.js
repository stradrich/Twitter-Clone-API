// get all replies of the tweet id ✅
// create a reply to the tweet id ✅
// update  a reply of the tweet id ✅
// delete reply from the tweet id ✅




const Reply = require('../models/Replies')

async function getReplies(req,res){
    try {
        const replies = await Reply.findAll({
            where: {
                tweetId: parseInt(req.params.tweetId)
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

        const reply = await Reply.create({
            ...req.body,
        tweetId: parseInt(req.params.tweetId)})

        res.json(reply);

    } catch (error) {
        res.status(500).json({error:error})
    }
}

async function updateReply (req, res){
    
try {
    const reply = await Reply.update(
        ...req.body,{
            where:{
                id: parseInt(req.params.id)
            }}
    )

    res.json(reply);
    
} catch (error) {
      res.status(500).json({error:error})
}}

async function deleteReply(req,res){
    try {
       const reply = await Reply.destroy({
        where:
        {
            id: parseInt(req.params.id)
        }
       }) 
    } catch (error) {
        res.status(500).json({error:error})
    }
}


module.exports = {
    getReplies,
    createReply,
    updateReply,
    deleteReply
}
    
