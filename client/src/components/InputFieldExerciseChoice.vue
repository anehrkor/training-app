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
// import converter
import MapExerciseTypeToString from "@/tools/ExerciseTypeConverter.js";

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
  created() {
    this.loadExercises();
  },
  methods: {
    async loadExercises() {
      // TODO: check if training type has been selected already and then provide it as argument to GET method
      const response = await AddTrainingService.getExerciseTypes();
      const responseTranslation = MapExerciseTypeToString.mapExerciseTypeToString(
        response.data
      );
      this.exerciseChoices = responseTranslation;
    },
    onChange(event) {
      this.selectedExercise = event.target.value;
      this.$emit("selected:exercise", this.selectedExercise);
    }
  }
};
</script>
