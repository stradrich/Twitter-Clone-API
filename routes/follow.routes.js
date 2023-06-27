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

router.delete(
    '/follow/:userId', 
    verifyToken,
    checkRole(['user', 'admin']),
    followController.deleteFollow
)

module.exports = router;