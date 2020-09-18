<template>
  <form>
    <label for="training-choice">{{ label }}</label>
    <p>
      <select @change="onChange($event)">
        <option value="">{{ selectDefault }}</option>
        <option v-for="trainingChoice in trainingChoices" :key="trainingChoice">
          {{ trainingChoice }}
        </option>
      </select>
    </p>
  </form>
</template>

<script>
// import services
import AddTrainingService from "@/services/AddTrainingService.js";

export default {
  name: "input-field-training-choice",
  props: {
    label: { type: String, required: false, default: "" },
    selectDefault: { type: String, required: false, default: "" }
  },
  data: function() {
    return {
      trainingChoices: [],
      selectedTraining: ""
    };
  },
  mounted() {
    this.loadTrainingTypes();
  },
  methods: {
    async loadTrainingTypes() {
      const response = await AddTrainingService.getTrainingTypes();
      this.trainingChoices = response.data;
    },
    onChange(event) {
      this.selectedTraining = event.target.value;
      this.$emit("selected:training", this.selectedTraining);
    }
  }
};
</script>
