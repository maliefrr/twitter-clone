const express = require("express");
const { userRegister, login, getUserProfile } = require("../controller/userController");
const protect = require("../middleware/authHandler");
const router = express.Router();

router.post("/register",userRegister);
router.post("/login",login);
router.get("/me",protect,getUserProfile);


module.exports = router;