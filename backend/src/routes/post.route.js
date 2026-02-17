require("dotenv").config()
const express = require('express');
const postRouter = express.Router();
const postcontroller = require("../controllers/post.controller")
const multer = require("multer")
const upload = multer({ storage: multer.memoryStorage() })
const identifyUser = require("../middlewares/auth.middleware")



postRouter.post("/", upload.single("image"),identifyUser, postcontroller.createPostController)

/**
 * @route get /api/posts/
 * @description get all posts 
 *  @access private
 */

postRouter.get("/",identifyUser, postcontroller.getPostController)

/**
 * @route get /api/posts/details/:postId
 * @description get post details 
 *  @access private
 */
postRouter.get("/details/:postId",identifyUser, postcontroller.getPostDetailsConroller)

/**
 * @route post /api/posts/like/:postId
 * @description like a post with the id provided in the params 
 */
postRouter.post("/like/:postId",identifyUser, postcontroller.likePostController)




module.exports = postRouter