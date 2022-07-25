import mongoose from "mongoose";
import { Schema, model, models } from "mongoose";

const adminSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: String,
  firstName: {
    type: String,
    required: true,
  },
});
