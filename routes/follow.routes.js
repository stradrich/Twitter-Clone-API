const express = require('express')
const router = express.Router()
const followController = require('../controllers/follow.controller')

router.get('/:userId/followers', followController.getUserFollowers)
router.get('/:userId/following', followController.getUserFollowings)
router.post('/follow', followController.createFollow)
router.delete('/follow/:id', followController.deleteFollow)

module.exports = router;