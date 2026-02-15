require("dotenv").config()
const express = require('express');
const postRouter = express.Router();
const postcontroller = require("../controllers/post.controller")
const multer = require("multer")
const upload = multer({ storage: multer.memoryStorage() })

postRouter.post("/", upload.single("image"), postcontroller.createPostController)

postRouter.get("/", postcontroller.getPostController)

postRouter.get("/details/:postId", postcontroller.getPostDetailsConroller)

module.exports = postRouter