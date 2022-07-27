import mongoose from "mongoose";
import { Schema, model, models } from "mongoose";

// const mongoose = require("mongoose");

const coursesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  technology: [],
  price: {
    type: Double,
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
  rating: Double,
  slug: String,
});

module.exports = mongoose.models.Courses || model("Courses", coursesSchema);
