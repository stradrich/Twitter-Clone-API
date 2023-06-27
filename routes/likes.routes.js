const express = require('express')
const router = express.Router()
const likesController = require('../controllers/likes.controller')

router.get('/tweets/:id/likes', likesController.getAllLikes)
router.post('/tweets/:tweetId/like', likesController.createLike)
router.delete('/tweet/:id/like/:id', likesController.deleteLike)

module.exports = router;