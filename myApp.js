require("dotenv").config();
var express = require('express');
var app = express();

console.log("Hello World")

const absolutePath = __dirname + "/views/index.html";
const middlewarePath = __dirname + "/public";
const reqObj = {
  "message": "Hello json"
}
const upperReqObj = {
  "message": "HELLO JSON"
}
const eg = process.env.MESSAGE_STYLE
console.log("eg")

// console.log(middlewarePath)
// console.log(process.env.MESSAGE_STYLE)
// console.log(process.env);

app.use("/public",express.static(middlewarePath))

  app.get("/json", function(req, res) {
    // res.sendFile(absolutePath);
    eg === "uppercase" ? res.json(upperReqObj) : res.json(reqObj)
  });


































 module.exports = app;
