const express = require("express");
const { getPost, createNewPost,deletePost } = require("../controller/postController");
const protect = require("../middleware/authHandler");
const router = express.Router();

router.route("/").get(getPost).post(protect,createNewPost);
router.delete("/:id",protect,deletePost)

module.exports = router;