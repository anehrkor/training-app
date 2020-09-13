const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

app.post("/addTraining", (req, res) => {
  /* TODO:
  - add field requirements
  - add field validations
  */
  res.send({
    message: `Your training from ${req.body.date} was saved.`
  });
});

app.listen(process.env.PORT || 8081);
