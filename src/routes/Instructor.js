const express = require("express");
const router = express.Router();

const createInstructor = require("../services/createInstructor");

router.post("/add", async (req, res) => {
  const { fname, lname, college, instructorid } = req.body;

  const results = await createInstructor(fname, lname, college, instructorid);

  if (results) {
    res.status(200).send({
      status: results,
      message: "Instructor Created",
    });
  } else {
    res.send({
      status: results,
      message: "Instructor Not Created",
    });
  }
});

module.exports = router;
