//modules
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// express and port
var app = express();
var PORT = 7979 || process.env.PORT;

// body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// index and startup
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});
//missing: store ahmeds (or anyone elses) picture on the server and serve it up only if a match is made
//app.get("/match?name, function(req,res)"){res.send(name.picture)}
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
