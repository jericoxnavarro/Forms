const express = require("express");
const router = express.Router();

const createGrade = require("../services/createGrade");

router.post("/add", async (req, res) => {
  const {
    studentid,
    subjectid,
    instructorid,
    midterm,
    final,
    remarks,
    semester,
    schoolyear,
  } = req.body;

  const results = await createGrade(
    studentid,
    subjectid,
    instructorid,
    midterm,
    final,
    remarks,
    semester,
    schoolyear
  );

  if (results) {
    res.status(200).send({
      status: results,
      message: "Grade Created",
    });
  } else {
    res.send({
      status: results,
      message: "Grade Not Created",
    });
  }
});

module.exports = router;
