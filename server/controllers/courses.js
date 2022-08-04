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
  console.log(courseid);
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

const updatecourses=function(req,res)
{
    if (!req.params.courseid) {
        res
            .status(404)
            .json({
                "message": "Not found, Courseid is required"
            });
        return;
    }
    Coursedetails.findById(req.params.courseid)
        .exec((err, coursedata) => {
            if (!coursedata) {
                res
                    .status(404)
                    .json({
                        "message": "Courseid not found"
                    });
                return;
            }
            // coursedata.name = req.body.name;
            // coursedata.Quantity = req.body.Quantity;
            // coursedata.Color = req.body.Color;
            coursedata.title = req.body.title;
            coursedata.price = req.body.price;
            coursedata.Author=req.body.Author;
            coursedata.url=req.body.url;

            // coursedata.Color = req.body.Color;
            coursedata.save((err, coursedata) => {
                if (err) {
                    res
                        .status(404)
                        .json(err);
                } else {
                    res
                        .status(200)
                        .json(coursedata);
                }
            });
        });
};
module.exports = {
  getcourses,
  createcourses,
  deletecourses,
  updatecourses
};
