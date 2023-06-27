const Like = require('../models/Likes')

async function getAllLikes(req, res) {
    try {
        const likes = await Like.findAll({
            where: {
                tweetId: parseInt(req.params.tweetId)
            }
        })
        
        // Send all likes as response
        res.json(likes)
    } catch (error) {
        res.status(500).json({error: error})
    }
}

async function createLike(req, res){

    try {
        //create like using data from request body
        //Request body must contain all required fields defined in Likes model.
        const like = await Like.create({
            ...req.body,
            tweetId: parseInt(req.params.tweetId)
        });

        res.json(like);
    } catch (error) {
        res.status(500).json({error:error})
    }
}
// async function updateLike(req, res){

//     try {
//         //create like using data from request body
//         //Request body must contain all required fields defined in Likes model.
//         const like = await Like.update(req.body, {
//             where:{
//                 id: parseInt(req.params.id)
//             }
//         })

//         res.json(like)
     
//     } catch (error) {
//         res.status(500).json({error:error})
//     }
// }

async function deleteLike(req,res){
    try {
        const like = await Like.destroy({
            where:{
                id: parseInt(req.params.id)
            }
        })

        res.json(like)

    } catch (error) {
        res.status(500).json({error:error})
    }
}


module.exports = {
    getAllLikes,
    createLike,
    deleteLike

}