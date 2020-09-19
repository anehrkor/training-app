const { ExerciseTypes, TrainingTypes } = require("../models");

module.exports = {    
  async getExerciseTypes(req, res) {
    /* TODO:
    - response must depend on training type
    */
    var exerciseTypesResponse = [];
    try {
      const exerciseTypes = await ExerciseTypes.findAll();
      console.log(exerciseTypes);
      if (exerciseTypes != null) {
        for (
          var exerciseTypeIndex = 0;
          exerciseTypeIndex < exerciseTypes.length;
          exerciseTypeIndex++
        ) {
          exerciseTypesResponse.push(
            ExerciseTypes[exerciseTypeIndex].dataValues.exerciseType
          );
        }
      }
      res.send(exerciseTypesResponse);
    } catch (error) {
      res.status(500).send({
        error: "Exercise types could not be retrieved.",
        exerciseTypesResponse
      });
    }
  },
  async addExerciseType(req, res) {
    /*
    - add field requirement
    - send complete response to data base
    */
    // check if trainingType exists
    try {
      const providedTrainingType = await TrainingTypes.findOne({
        where: {
          trainingType: req.body.trainingType,
        },
      });
      if (providedTrainingType != null) {
        // create exercise type for training type already existing within the data base
        try {
          const exerciseType = await ExerciseTypes.create(req.body); // TODO: find out why this is not working
          res.send({ exerciseType, providedTrainingType });
        } catch (error) {
          res.status(500).send({
            error: "A technical error occurred.",
          });
        }
      } else {
        // return error
        res.status(400).send({
          error: "The training type provided is unknown.",
        });
      }
    } catch (error) {
      res.status(500).send({
        error: "A technical error occurred.",
      });
    }
  }
};
