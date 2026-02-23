require("dotenv").config()
const express = require('express');
const postRouter = express.Router();
const postController = require("../controllers/post.controller")
const multer = require("multer")
const upload = multer({ storage: multer.memoryStorage() })
const identifyUser = require("../middlewares/auth.middleware")



postRouter.post("/", upload.single("image"), identifyUser, postController.createPostController)

/**
 * @route get /api/posts/
 * @description get all posts 
 *  @access private
 */

postRouter.get("/", identifyUser, postController.getPostController)

/**
 * @route get /api/posts/details/:postId
 * @description get post details 
 *  @access private
 */
postRouter.get("/details/:postId", identifyUser, postController.getPostDetailsConroller)

/**
 * @route post /api/posts/like/:postId
 * @description like a post with the id provided in the params 
 */
postRouter.post("/like/:postId", identifyUser, postController.likePostController)

/**
 * @route get /api/posts/feed
 * @description get all the post created in the db
 * @access private
 */
postRouter.get("/feed", identifyUser, postController.getFeedController)


module.exports = postRouter