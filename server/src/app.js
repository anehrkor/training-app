const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

// TODO: add connection to data base
app.get("/getTrainingTypes", (req, res) => {
  res.send([
    "Push day",
    "Pull day",
    "Leg day"
  ]);
});

/* TODO:
- response must depend on training type
- add connection to data base
*/
app.get("/getExerciseTypes", (req, res) => {
  res.send([
    "Bench press",
    "Bendover row",
    "Squat"
  ]);
});

app.post("/addTraining", (req, res) => {
  /* TODO:
  - add field requirements
  - add field validations
  - send complete response to data base
  */
  if (req.body.excercises != null) {
    for (var i = 0; i < req.body.excercises.length; i++) {
      console.log(req.body.excercises[i].excerciseType);
    }
  }
  res.send({
    message: `Your ${req.body.training} training on ${req.body.date} from ${req.body.startTime} to ${req.body.endTime} was saved.`
  });
});

app.listen(process.env.PORT || 8081);
