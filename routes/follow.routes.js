const express = require('express')
const router = express.Router()
const followController = require('../controllers/follow.controller')
const { verifyToken, checkRole } = require('../middlewares/auth.middleware')

router.get(
    '/:userId/followers', 
    verifyToken,
    checkRole(['user', 'admin']),
    followController.getUserFollowers
)

router.get(
    '/:userId/following',
    verifyToken,
    checkRole(['user', 'admin']),
    followController.getUserFollowings
)

router.post(
    '/follow', 
    verifyToken,
    checkRole(['user', 'admin']),
    followController.createFollow
)

// NOTE: find other userId to replace to followingId incase of error
router.delete(
    '/follow/:followingId', 
    verifyToken,
    checkRole(['user', 'admin']),
    followController.deleteFollow
)

module.exports = router;