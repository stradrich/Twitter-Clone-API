const express = require('express')
const router = express.Router()
const likesController = require('../controllers/likes.controller')
const { verifyToken, checkRole } = require('../middlewares/auth.middleware')

router.get('/:tweetId/likes', likesController.getAllLikes)

router.post(
    '/:tweetId/like', 
    verifyToken,
    checkRole(['user', 'admin']),
    likesController.createLike
)

router.delete(
    '/:tweetId/like/:likeId',
    verifyToken,
    checkRole(['user', 'admin']),
    likesController.deleteLike
)

module.exports = router;