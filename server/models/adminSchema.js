import mongoose from "mongoose";
import { Schema, model, models } from "mongoose";

// const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: String,
  firstName: {
    type: String,
    required: true,
  },
});

module.exports =
  mongoose.models.adminSchema || mongoose.model("Admin", adminSchema);
