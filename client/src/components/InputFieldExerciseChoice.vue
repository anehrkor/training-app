<template>
  <form>
    <label for="exercise-choice">{{ label }}</label>
    <p>
      <select @change="onChange($event)">
        <option value="">{{ selectDefault }}</option>
        <option
          v-for="exerciseChoice in exerciseChoices"
          :key="exerciseChoice"
          >{{ exerciseChoice }}</option
        >
      </select>
    </p>
  </form>
</template>

<script>
// import services
import AddTrainingService from "@/services/AddTrainingService.js";

export default {
  name: "input-field-exercise-choice",
  props: {
    label: { type: String, required: false, default: "" },
    selectDefault: { type: String, required: false, default: "" }
  },
  data: function() {
    return {
      exerciseChoices: [],
      selectedExercise: ""
    };
  },
  mounted() {
    this.loadExercises();
  },
  methods: {
    async loadExercises() {
      const response = await AddTrainingService.getExerciseTypes();
      this.exerciseChoices = response.data;
    },
    onChange(event) {
      this.selectedExercise = event.target.value;
      this.$emit("selected:exercise", this.selectedExercise);
    }
  }
};
</script>
