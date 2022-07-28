const mongoose = require("mongoose");
// require("../models/coursesSchema");
const Coursedetails = mongoose.model("Courses");
const getcourses = function (req, res) {
  Coursedetails.find().exec(function (err, coursedata) {
    if (err) {
      res.status(404).json(err);
      return;
    }
    res.status(200).json(coursedata);
  });
};

const createcourses = function (req, res) {
  Coursedetails.create(req.body, (err, coursedata) => {
    if (err) {
      res.status(404).json(err);
      return;
    }
    res.status(201).json(coursedata);
  });
};
const deletecourses = function (req, res) {
  const courseid = req.params.courseid;
  if (courseid) {
    Coursedetails.findByIdAndRemove(courseid).exec((err, coursedata) => {
      if (err) {
        res.status(404).json(err);
        return;
      }
      res.status(204).json(null);
    });
  } else {
    res.status(404).json({ message: "No Courseid" });
  }
};
module.exports = {
  getcourses,
  createcourses,
  deletecourses,
};
