import mongoose from "mongoose";
import { Schema, model, models } from "mongoose";

const coursesSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  technology: [],
  price: {
    type: Double,
    required: true,
  },
  Desription: String,
  Author: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  rating: Double,
});

const Courses = models.Courses || model("Courses", coursesSchema);
export default Courses;
