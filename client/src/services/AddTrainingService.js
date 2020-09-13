import Api from "@/services/api";

export default {
  addTraining: function(training) {
    return Api().post("addTraining", training);
  }
};
