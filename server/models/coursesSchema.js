// import mongoose from "mongoose";
// import { Schema, model, models } from "mongoose";
const mongoose = require("mongoose");

// const mongoose = require("mongoose");

const coursesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  technology: [],
  price: {
    type: Number,
    required: true,
  },
  Description: String,
  author: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  rating: Number,
  slug: String,
});

// module.exports = mongoose.models.Courses || model("Courses", coursesSchema);
mongoose.model("Courses", coursesSchema);
