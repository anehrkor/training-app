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
    async loadExercises(trainingType) {
      try {
        const response =
          trainingType != null
            ? await AddTrainingService.getExerciseTypes(trainingType)
            : await AddTrainingService.getExerciseTypes();
        const responseTranslation = MapExerciseTypeToString.mapExerciseTypeToString(
          response.data
        );
        this.exerciseChoices = responseTranslation;
      } catch (error) {
        console.log(error, "\nCould not load exercise types from database.");
      }
    },
    onChange(event) {
      this.selectedExercise = event.target.value;
      this.$emit("selected:exercise", this.selectedExercise);
    }
  }
};
</script>
