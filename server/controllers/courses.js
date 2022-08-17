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
  const Courseslug = req.params.Courseslug;

  console.log('slug',req.params);
  if (req.params.Courseslug) {
    Coursedetails.findOneAndDelete({slug:Courseslug}).exec((err, coursedata) => {
      console.log('data',coursedata);
      if (err) {
        res.status(404).json(err);
        return;
      }
      res.status(204).json(coursedata);
    });
  } else {
    res.status(404).json({ message: "No Courseslug" });
  }
};

const updatecourses=function(req,res)
{
  const Courseslug = req.params.Courseslug;
  console.log('slug Update: ', req.params, Courseslug);
    Coursedetails.findOne({slug:Courseslug})
        .exec((err, coursedata) => {
            console.log("coursedata: ", coursedata);
            if (!coursedata) {
                res
                    .status(404)
                    .json({
                        "message": "courseslug not found"
                    });
                return;
            }
           
            coursedata.title = req.body.title;
            coursedata.price = req.body.price;
            coursedata.author=req.body.author;
            coursedata.url=req.body.url;

            //console.log("Updated data:", coursedata);
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
