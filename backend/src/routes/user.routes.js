const express = require("express")
const userController = require("../controllers/user.controller")
const identifyUser = require("../middlewares/auth.middleware")
const checkPendingFollowRequest = require("../middlewares/followrequest.middleware")

const userRouter = express.Router();

//**
// * @route post /api/users/follow/: userid
// * @description follow a user 
// *  @access private
//  */
userRouter.post("/follow/:username",identifyUser, userController.followUserController)


userRouter.post("/unfollow/:username", identifyUser, userController.unfollowUserController)


userRouter.post("/follow/:username/accept", identifyUser, checkPendingFollowRequest, userController.acceptFollowRequestController)

userRouter.post("/follow/:username/reject", identifyUser, checkPendingFollowRequest, userController.rejectFollowRequestController)

module.exports = userRouter