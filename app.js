// Imports
const express = require("express");
const app = express();
const path = require("path");

// load global variables
require("dotenv").config();
const PORT = process.env.PORT || 8080; 

// setup ejs as a template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// to parse the form data into the req.body
app.use(express.urlencoded({ extended: true }));
// middleware
indexRouter = require("./routes/indexRouter");
newRouter = require("./routes/newRouter");

// which middleware function to use for which req path
app.use("/", indexRouter);
app.use("/new", newRouter);

app.listen(PORT, () => {
  console.log(`Server started at localhost:${PORT}`);
});
