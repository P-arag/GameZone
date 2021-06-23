const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
require("dotenv/config");
const mongoose = require("mongoose");

const indexRoutes = require("./routes/index");

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");

app.use(expressLayouts);
app.use(express.static("public"));

console.log("Yo");
mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (err) => console.error(err));
db.once("open", () => console.log("Connected to Mongoose"));

//console.log(process.env.DB_CONNECTION);
app.use("/", indexRoutes);

app.listen(process.env.PORT || 3001);
