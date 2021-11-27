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

// console.log(middlewarePath)
console.log(process.env.MESSAGE_STYLE)

app.use("/public",express.static(middlewarePath))

  app.get("/json", function(req, res) {
    // res.sendFile(absolutePath);
    process.env.MESSAGE_STYLE === "uppercase"
      ? res.json(upperReqObj)
      : res.json(reqObj)
  });


































 module.exports = app;
