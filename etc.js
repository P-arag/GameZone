const express = require("express");
const app = express();

require("dotenv/config");
const mongoose = require("mongoose");

const password = encodeURIComponent(process.env.DB_PASS);
console.log("Yo");
mongoose
  .connect(process.env.DB_CONNECTION.replace("$$$", password), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log("Connected to database"));
