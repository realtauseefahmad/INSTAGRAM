require("dotenv").config()
const express = require('express');
const postRouter = express.Router();
const postcontroller = require("../controllers/post.controller")
const multer = require("multer")
const upload = multer({ storage: multer.memoryStorage() })
const identifyUser = require("../middlewares/auth.middleware")



postRouter.post("/", upload.single("image"),identifyUser, postcontroller.createPostController)

postRouter.get("/",identifyUser, postcontroller.getPostController)

postRouter.get("/details/:postId",identifyUser, postcontroller.getPostDetailsConroller)

module.exports = postRouter