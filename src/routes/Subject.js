const express = require("express");
const router = express.Router();

const createSubject = require("../services/createSubject");

router.post("/add", async (req, res) => {
  const { subjectcode, subjectdescription, schedule, subjectid } = req.body;

  const results = await createSubject(
    subjectcode,
    subjectdescription,
    schedule,
    subjectid
  );

  if (results) {
    res.status(200).send({
      status: results,
      message: "Subject Created",
    });
  } else {
    res.send({
      status: results,
      message: "Subject Not Created",
    });
  }
});

module.exports = router;
