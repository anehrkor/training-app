const { TrainingTypes, Training, Exercise, Set } = require("../models");

module.exports = {
  async getTrainingTypes(req, res) {
    var trainingTypesResponse = [];
    try {
      const trainingTypes = await TrainingTypes.findAll();
      if (trainingTypes != null) {
        for (
          var trainingTypeIndex = 0;
          trainingTypeIndex < trainingTypes.length;
          trainingTypeIndex++
        ) {
          trainingTypesResponse.push(
            trainingTypes[trainingTypeIndex].dataValues.trainingType
          );
        }
        trainingTypesResponse.sort();
      }
      if (trainingTypesResponse.length > 0) {
        res.send(trainingTypesResponse);
      } else {
        res.status(400).send({
          error: "There are no training types available.",
          trainingTypesResponse
        });
      }
    } catch (error) {
      res.status(500).send({
        error: "Training types could not be retrieved.",
        trainingTypesResponse
      });
    }
  },
  async addTrainingType(req, res) {
    /*
    - add field requirement
    - send complete response to data base
    */
    try {
      const trainingType = await TrainingTypes.create(req.body);
      res.send(trainingType);
    } catch (error) {
      res.status(400).send({
        error: "This training type already exists."
      });
      res.status(500).send({
        error: "A technical error occurred."
      });
    }
  },
  async addTraining(req, res) {
    /* TODO:
    - add field requirements
    - add field validations
    */
    try {
      const providedTrainingType = await TrainingTypes.findOne({
        where: {
          trainingType: req.body.trainingType
        }
      });
      if (providedTrainingType != null) {
        try {
          const trainingId =
            req.body.date + "_" + req.body.startTime + "_" + req.body.endTime;
          const training = await Training.create({
            trainingId: trainingId,
            date: req.body.date,
            startTime: req.body.startTime,
            endTime: req.body.endTime,
            trainingType: req.body.trainingType,
            comment: req.body.comment
          });
          var exercisesArray = [];
          for (var exerciseIndex = 0; exerciseIndex < req.body.exercises.length; exerciseIndex++) {
            const exerciseId = trainingId + "_" + req.body.exercises[exerciseIndex].ordering;
            const exercise = await Exercise.create({
              exerciseId: exerciseId,
              exerciseType: req.body.exercises[exerciseIndex].exerciseType,
              ordering: req.body.exercises[exerciseIndex].ordering,
              comment: req.body.exercises[exerciseIndex].comment,
              TrainingTrainingId: trainingId
            });
            exercisesArray.push(exercise);
            var setsArray = [];
            for (var setIndex = 0; setIndex < req.body.exercises[exerciseIndex].sets.length; setIndex++) {
              const setId = exerciseId + "_" + req.body.exercises[exerciseIndex].sets[setIndex].ordering;
              const set = await Set.create({
                setId: setId,
                ordering: req.body.exercises[exerciseIndex].sets[setIndex].ordering,
                weight: req.body.exercises[exerciseIndex].sets[setIndex].weight,
                reps: req.body.exercises[exerciseIndex].sets[setIndex].reps,
                ExerciseExerciseId: exerciseId
              });
              setsArray.push(set);
            }
          }
          res.send({ training, exercisesArray, setsArray });
        } catch (error) {
          res.status(500).send({
            error: "A technical error occurred.",
          });
        }
      } else {
        const nonMatchingTrainingType = req.body.trainingType;
        res.status(400).send({
          error: "The provided training type does not exist.",
          nonMatchingTrainingType
        });
      }
    } catch (error) {
      res.status(500).send({
        error: "A technical error occurred."
      });
    }
  }
};
