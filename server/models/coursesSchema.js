// import mongoose from "mongoose";
// <<<<<<< HEAD
import { Schema, model, models } from "mongoose";
// =======
// import { Schema, model, models } from "mongoose";
const mongoose = require("mongoose");
// >>>>>>> e199d9e6ed7ab0f9b17485bef96793c57fc0a617

const mongoose = require("mongoose");

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
  Author: {
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
