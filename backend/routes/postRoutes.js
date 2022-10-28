const express = require("express");
const router = express.Router();

router.get("/",(req,res) => {
    res.status(200).json({
        statusCode: 200,
        message: "Post route"
    })
});

module.exports = router;