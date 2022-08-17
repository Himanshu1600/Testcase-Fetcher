const express = require("express");
const https = require("https");
const fs = require("fs");
const app = express();

const port = 10000;

const path = "D:/c++_codes";


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/", (req, res) => {
  const data = req.body;
  //   console.log(data);
  let inputs = "";

  let tests = data.tests;
  inputs += String(tests.length) + "\n";
  //console.log(tests);
  tests.forEach((test) => {
    inputs += test.input;
  });

  // console.log(typeof inputs);
  fs.writeFile(path + "/input1.txt", inputs, "utf8", (e) => {
    if (e) console.log(e);
  });

  console.log("tests parsed");
});

app.listen(port, (req, res) => {
  console.log(`server is listening on ${port}`);
});
