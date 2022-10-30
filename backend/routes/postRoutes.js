const express = require("express");
const { getPost, createNewPost,deletePost } = require("../controller/postController");
const router = express.Router();

router.route("/").get(getPost).post(createNewPost);
router.delete("/:id",deletePost)

module.exports = router;