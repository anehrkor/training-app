import Api from "@/services/api";

export default {
  getTrainingTypes: function() {
    return Api().get("getTrainingTypes");
  },
  addTrainingType: function(trainingType) {
    return Api().post("addTrainingType", trainingType);
  },
  getExerciseTypes: function() {
    return Api().get("getExerciseTypes");
  },
  addExerciseType: function(exerciseType) {
    return Api().post("addExerciseType", exerciseType);
  },
  addTraining: function(training) {
    return Api().post("addTraining", training);
  }
};
