const TrainingController = require("./controllers/TrainingController");
const TrainingControllerPolicy = require("./policies/TrainingControllerPolicy");
const ExerciseController = require("./controllers/ExerciseController");
const ExerciseControllerPolicy = require("./policies/ExerciseControllerPolicy");

module.exports = (app) => {
  app.get("/getTrainingTypes", TrainingController.getTrainingTypes);

  app.post("/addTrainingType", TrainingControllerPolicy.addTrainingType, TrainingController.addTrainingType);

  app.get("/getExerciseTypes", ExerciseControllerPolicy.addExerciseType, ExerciseController.getExerciseTypes);

  app.post("/addExerciseType", ExerciseController.addExerciseType);

  app.post("/addTraining", TrainingController.addTraining);
}
