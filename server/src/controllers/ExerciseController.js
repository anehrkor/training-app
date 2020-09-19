module.exports = {    
  getExerciseTypes(req, res) {
    /* TODO:
    - response must depend on training type
    - add connection to data base
    */
    if (req.body.trainingType != null) {
      console.log(req.body.trainingType);
    }
    res.send(["Bench press", "Bendover row", "Squat"]);
  },
  addExerciseType(req, res) {
    /*
    - add field requirement
    - send complete response to data base
    */
    res.send({
      message: `Added exercise type ${req.body.exerciseType}.`,
    });
  }
};
