const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const Students = require("./src/routes/Students");
const Instructor = require("./src/routes/Instructor");
const Subject = require("./src/routes/Subject");
const Grades = require("./src/routes/Grades");
const getindex = require("./src/routes/getindex");

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/src/views"));

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/student", Students);
app.use("/instructor", Instructor);
app.use("/subject", Subject);
app.use("/grade", Grades);
app.use("/", getindex);

app.use("/public", express.static(path.join(__dirname, "/public")));

const port = 3001;

app.listen(port, () => {
  console.log("Listening on port:", port);
});
