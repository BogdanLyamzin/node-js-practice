const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());

const {postsApi} = require("./api");

app.use("/api/posts", postsApi);

const {DB_HOST} = process.env;
const PORT = process.env.PORT || 3000;

mongoose.connect(DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(()=> {
    app.listen(PORT, ()=> console.log("Server running"))
})