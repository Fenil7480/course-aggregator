// import mongoose from "mongoose";
// import { connect } from "mongoose";
const express = require("express");
const app = express();
app.use(express.json());
var mongoose = require("mongoose");

const dbURI =
  "mongodb+srv://admin:admin@saniyacluster.xrzit.mongodb.net/CourseDB?retryWrites=true&w=majority";
mongoose.connect(dbURI, { dbName: "CourseDB" });
//ishu added
require('./models/coursesSchema');

// CONNECTION EVENTS
mongoose.connection.on("connected", function () {
  console.log("Connected to databse successfully!");
});
mongoose.connection.on("error", function (err) {
  console.log("Mongoose connection error: " + err);
});

//Ishu added
const apiRouter= require('./routes/index');
app.use('/api', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,PUT');
  next();
 });
 app.use('/api', apiRouter);
app.listen(4000, console.log("Server started"));
