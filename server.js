const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const serveStatic = require("serve-static");
const path = require("path");

const app = express();

// configure to use cors and body-parser
app.use(cors());
app.use(bodyParser.json());

//here we are configuring dist to serve app files
app.use("/", serveStatic(path.join(__dirname, "/dist")));

// this * route is to serve project on different page routes except root `/`
app.get(/.*/, function(req, res) {
  res.sendFile(path.join(__dirname, "/dist/index.html"));
});

const port = process.env.PORT || 8080;
app.listen(port);
console.log(`app is listening on port: ${port}`);
