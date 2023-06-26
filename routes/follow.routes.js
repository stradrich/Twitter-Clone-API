const express = require('express')
const router = express.Router()
const followController = require('../controllers/follow.controller')

router.get('users/:userId/followers', followController.getAllFollowers)
router.get('users/:userId/following', followController.getAllFollowings)
router.post('/follow', followController.createFollow)
router.delete('/follow/:id', followController.deleteFollow)

module.exports = router;