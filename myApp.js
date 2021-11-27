var express = require('express');
var app = express();

console.log("Hello World")

const absolutePath = __dirname + "/views/index.html";
const middlewarePath = __dirname + "/public";
const reqObj = {
  "message": "Hello json"
}

// console.log(middlewarePath)

app.use("/public",express.static(middlewarePath))

  app.get("/json", function(req, res) {
    // res.sendFile(absolutePath);
    res.json(reqObj)
  });


































 module.exports = app;
