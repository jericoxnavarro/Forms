const express = require("express");
const router = express.Router();

const createStudent = require("../services/createStudent");

router.post("/add", async (req, res) => {
  const {
    fname,
    mname,
    lname,
    number,
    address,
    course,
    college,
    section,
    studentid,
  } = req.body;

  const results = await createStudent(
    fname,
    mname,
    lname,
    number,
    address,
    course,
    college,
    section,
    studentid
  );

  if (results) {
    res.status(200).send({
      status: results,
      message: "Student Created",
    });
  } else {
    res.send({
      status: results,
      message: "Student Not Created",
    });
  }
});

module.exports = router;
