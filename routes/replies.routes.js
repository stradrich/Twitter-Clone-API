// route for get all replies of the tweet id ✅
// route for create a reply to the tweet id ✅
// route for update  a reply of the tweet id ✅
// route for delete reply from the tweet id ✅


const express = require('express')
const router = express.Router()
const repliesController = require('../controllers/replies.controller')

router.get('/tweet/:tweetId/reply', repliesController.getReplies)
router.post('/tweets/:tweetId/reply',repliesController.createReply)
router.put('/tweet/:tweetId/reply/:id',repliesController.updateReply)
router.delete('/tweet/:tweetId/reply/:id', repliesController.deleteReply)

module.exports = router;