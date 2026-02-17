const followModel = require("../models/follow.model")

async function checkPendingFollowRequest(req, res, next) {
    const followeeUsername = req.user.username
    const followerUsername = req.params.username

    const followRequest = await followModel.findOne({
        follower: followerUsername,
        followee: followeeUsername,
        status: "pending"
    })

    if (!followRequest) {
        return res.status(404).json({
            message: "no pending follow request found"
        })
    }

    req.followRequest = followRequest
    next()
}

module.exports = checkPendingFollowRequest
