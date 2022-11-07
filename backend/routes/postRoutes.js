const express = require("express");
const { getPost, createNewPost,deletePost, updatePost } = require("../controller/postController");
const protect = require("../middleware/authHandler");
const router = express.Router();

router.route("/").get(getPost).post(protect,createNewPost);
router.put("/:id",protect,updatePost)
router.delete("/:id",protect,deletePost)

module.exports = router;