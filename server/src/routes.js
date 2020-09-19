const TrainingController = require("./controllers/TrainingController");
const ExerciseController = require("./controllers/ExerciseController");

module.exports = (app) => {
  app.get("/getTrainingTypes", TrainingController.getTrainingTypes);

  app.post("/addTrainingType", TrainingController.addTrainingType);

  app.get("/getExerciseTypes", ExerciseController.getExerciseTypes);

  app.post("/addExerciseType", ExerciseController.addExerciseType);

  app.post("/addTraining", TrainingController.addTraining);
}
