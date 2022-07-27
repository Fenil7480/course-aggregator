// import mongoose from "mongoose";
// import { connect } from "mongoose";
const express = require("express");
const app = express();
app.use(express.json());
var mongoose = require("mongoose");

const dbURI =
  "mongodb+srv://admin:admin@saniyacluster.xrzit.mongodb.net/CourseDB?retryWrites=true&w=majority";
mongoose.connect(dbURI, { dbName: "CourseDB" });

// CONNECTION EVENTS
mongoose.connection.on("connected", function () {
  console.log("Connected to databse successfully!");
});
mongoose.connection.on("error", function (err) {
  console.log("Mongoose connection error: " + err);
});

app.listen(3000, console.log("Server started"));
