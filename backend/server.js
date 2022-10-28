const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();

connectDB();
const app = express();

// load route
app.use("/api/post",require("./routes/postRoutes"))


const port = process.env.PORT || 3000;


app.listen(port,console.log(`app is running at port ${port}`));