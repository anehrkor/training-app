module.exports = {
  getTrainingTypes(req, res) {
    // TODO: add connection to data base
    res.send(["Push day", "Pull day", "Leg day"]);
  },
  addTrainingType(req, res) {
    /*
    - add field requirement
    - add field validation
    - send complete response to data base
    */
    res.send({
      message: `Added training type ${req.body.trainingType}.`,
    });
  },
  addTraining(req, res) {
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
      message: `Your ${req.body.training} training on ${req.body.date} from ${req.body.startTime} to ${req.body.endTime} was saved.`,
    });
  }
};
