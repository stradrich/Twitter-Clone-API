// route for get all replies of the tweet id ✅
// route for create a reply to the tweet id ✅
// route for update  a reply of the tweet id ✅
// route for delete reply from the tweet id ✅


const express = require('express')
const router = express.Router()
const repliesController = require('../controllers/replies.controller')

router.get('/tweet/:id/reply', repliesController.getReplies)
router.post('/tweets/:id/reply',repliesController.createReply)
router.put('/tweet/:id/reply/:replyid')
router.delete('/tweet/:id/reply/:replyid')

module.exports = router;