const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const Students = require("./routes/Students");

const app = express();

/* Middleware */
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/student", Students);

app.use("/public", express.static(path.join(__dirname, "../public")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

const port = 3001;

app.listen(port, () => {
  console.log("Listening on port:", port);
});
