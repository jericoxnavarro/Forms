const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const mysql = require("mysql");

  const dbConfig = {
    host: "localhost",
    user: "root",
    password: "",
    database: "unp_db",
    debug: false,
    multipleStatements: true,
  };

  const DB = mysql.createConnection(dbConfig);
  const query = `SELECT * FROM students;SELECT * FROM subjects;SELECT * FROM instructors;SELECT * FROM grades`;

  DB.connect();
  DB.query(query, [4, 3, 2, 1], function (error, results, fields) {
    if (error) {
      throw error;
    }
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
    console.log(results[3]);
    res.render("pages/index", {
      student: results[0],
      subject: results[1],
      instructor: results[2],
    });
  });
  connection.end();
});

module.exports = router;
