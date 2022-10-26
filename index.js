const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());
const courses = require("./data/majors.json");
const courses_detail = require("./data/details.json");

app.get("/", (req, res) => {
  res.send("courses");
});
app.get("/courses_detail/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourse = courses_detail.find((c) => c.id === id);
  res.send(selectedCourse);
});

app.get("/courses_detail", (req, res) => {
  res.send(courses_detail);
});
app.get("/courses-type", (req, res) => {
  res.send(courses);
});
app.listen(port, () => {
  console.log("running server on", port);
});
