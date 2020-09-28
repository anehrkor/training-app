const { ExerciseTypes, TrainingTypes } = require("../models");

module.exports = {
  async getExerciseTypes(req, res) {
    
    var exerciseTypesResponse = [];
    const providedTrainingType = req.body.trainingType != null ? req.body.trainingType : "NO_TRAINING_TYPE_PROVIDED";

    try {
      // Check if a training type was provided in the request body and default to findAll otherwise
      const exerciseTypes = providedTrainingType != "NO_TRAINING_TYPE_PROVIDED" ? await ExerciseTypes.findAll({
        where: {
          TrainingTypeTrainingType: providedTrainingType,
        }
      }) : await ExerciseTypes.findAll();
      if (exerciseTypes != null) {
        for (
          var exerciseTypeIndex = 0;
          exerciseTypeIndex < exerciseTypes.length;
          exerciseTypeIndex++
        ) {
          exerciseTypesResponse.push(
            exerciseTypes[exerciseTypeIndex].dataValues.exerciseType
          );
        }
      }
      if (exerciseTypesResponse.length > 0) {
        res.send(exerciseTypesResponse);
      } else {
        res.status(400).send({
          error: "There are no exercise types available.",
          exerciseTypesResponse
        });
      }
    } catch (error) {
      res.status(500).send({
        error: "Exercise types could not be retrieved.",
        exerciseTypesResponse
      });
    }
  },
  async addExerciseType(req, res) {
    // check if trainingType exists
    try {
      const providedTrainingType = await TrainingTypes.findOne({
        where: {
          trainingType: req.body.trainingType,
        }
      });
      if (providedTrainingType != null) {
        // create exercise type for training type already existing within the data base
        try {
          const exerciseType = await ExerciseTypes.create({
            exerciseType: req.body.exerciseType,
            TrainingTypeTrainingType: req.body.trainingType
          });
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
