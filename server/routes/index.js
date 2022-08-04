const express = require("express");
const router = express.Router();
const ctrlcourses = require("../controllers/courses");

router.get("/courses", ctrlcourses.getcourses);
router.post("/courses", ctrlcourses.createcourses);
router.delete("/courses/:Courseslug", ctrlcourses.deletecourses);
router.put("/courses/:Courseslug", ctrlcourses.updatecourses);
module.exports = router;
