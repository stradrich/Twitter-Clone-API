const express = require('express')
const router = express.Router()
const likesController = require('../controllers/likes.controller')

router.get('/:id/likes', likesController.getAllLikes)
router.post('/:tweetId/like', likesController.createLike)
router.delete('/:tweetId/like/:id', likesController.deleteLike)

module.exports = router;