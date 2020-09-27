import Api from "@/services/api";

export default {
  getTrainingTypes: function() {
    return Api().get("getTrainingTypes");
  },
  addTrainingType: function(trainingType) {
    return Api().post("addTrainingType", trainingType);
  },
  getExerciseTypes: function(trainingType) {
    return Api().get("getExerciseTypes", trainingType);
  },
  addExerciseType: function(exerciseType, trainingType) {
    return Api().post("addExerciseType", { exerciseType, trainingType });
  },
  addTraining: function(training) {
    return Api().post("addTraining", training);
  }
};
