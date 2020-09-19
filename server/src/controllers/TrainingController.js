const { TrainingTypes } = require("../models");

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
      res.send(trainingTypesResponse);
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
