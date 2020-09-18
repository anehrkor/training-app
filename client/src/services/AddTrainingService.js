import Api from "@/services/api";

export default {
  getTrainingTypes: function() {
    return Api().get("getTrainingTypes");
  },
  getExerciseTypes: function() {
    return Api().get("getExerciseTypes");
  },
  addTraining: function(training) {
    return Api().post("addTraining", training);
  }
};
