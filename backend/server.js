const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();

connectDB();
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}))

// load route
app.use("/api/post",require("./routes/postRoutes"));
app.use("/api/users",require("./routes/userRoutes"));


const port = process.env.PORT || 3000;


app.listen(port,console.log(`app is running at port ${port}`));