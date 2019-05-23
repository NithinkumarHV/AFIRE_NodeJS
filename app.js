const express = require("express");
const ejs = require("ejs");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  require("express-session")({
    secret: "I'm Nithin",
    resave: false,
    saveUninitialized: false
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/Com", (req, res) => {
  res.render("Committe");
});

app.get("/Ace", (req, res) => {
  res.render("AcademicExperts");
});

app.get("/Ioe", (req, res) => {
  res.render("IndustryExperts");
});

app.get("/E", (req, res) => {
  res.render("Entreprenuers");
});

const port = 3000;

app.listen(port, () => console.log(`Server started on port ${port}`));
