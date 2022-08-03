const express = require("express");
const router = express.Router();
// require("../models/coursesSchema");
const ctrlcourses = require("../controllers/courses");

// food
router.get("/courses", ctrlcourses.getcourses);
router.post("/courses", ctrlcourses.createcourses);

// router.get('/courses/:courseid', ctrlcourses.getsinglecourses);

router.delete("/courses/:courseid", ctrlcourses.deletecourses);
router.put("/courses/:courseid", ctrlcourses.updatecourses);
module.exports = router;
