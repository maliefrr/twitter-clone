const express = require("express");
const dotenv = require("dotenv").config();


const app = express();

// load route

const port = process.env.PORT || 3000;


app.listen(port,console.log(`app is running at port ${port}`));