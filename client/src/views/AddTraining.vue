<template>
  <div>
    <h1>Add training data</h1>
    <h3 style="text-align:left; padding:10px; margin:auto; width:75%">
      Add a training
    </h3>
    <div class="container">
      <div class="mt-1">
        <div class="jumbotron bg-light border col-md-10 offset-md-1 shadow-sm">
          <div class="row">
            <div class="form-group col-md-2">
              <InputFieldDate
                label="Date"
                v-model="date"
                @keydown="dateKeydown($event)"
              />
            </div>
            <div class="form-group col-md-2">
              <InputFieldTime
                label="Started at"
                v-model="startTime"
                @keydown="timeKeydown($event)"
              />
            </div>
            <div class="form-group col-md-2">
              <InputFieldTime
                label="Finished at"
                v-model="endTime"
                @keydown="timeKeydown($event)"
              />
            </div>
            <div class="form-group col-md-2">
              <InputFieldTrainingChoice
                label="Training type"
                selectDefault="Choose type"
                v-model="selectedTraining"
              />
            </div>
            <div class="form-group col-md-4">
              <InputFieldText
                label="Comment"
                placeholder="Enter comment"
                v-model="text"
                @keydown="textKeydown($event)"
              />
            </div>
          </div>
          <div v-for="(exercise, index) in exercises" :key="index">
            <div class="form-group col-md-auto">
              <ExerciseFieldRow />
            </div>
            <div class="form-group col-md-auto">
              <button
                class="btn btn-secondary btn-sm float-right"
                title="Click to remove an exercise"
                @click="removeExercise(index)"
              >
                &nbsp;Remove exercise
              </button>
            </div>
          </div>
          <br />
          <button
            class="btn btn-secondary float-right"
            title="Click to add an exercise"
            @click="addExercise"
          >
            &nbsp;Add exercise
          </button>
        </div>
      </div>
    </div>
    <button type="submit" class="btn btn-primary" @click="addTrainig">
      Add training
    </button>
  </div>
</template>

<script>
// import components
import InputFieldDate from "@/components/InputFieldDate.vue";
import InputFieldTime from "@/components/InputFieldTime.vue";
import InputFieldTrainingChoice from "@/components/InputFieldTrainingChoice.vue";
import InputFieldText from "@/components/InputFieldText.vue";
import ExerciseFieldRow from "@/components/ExerciseFieldRow.vue";
// import services
import AddTrainingService from "@/services/AddTrainingService.js";

export default {
  components: {
    InputFieldDate,
    InputFieldTime,
    InputFieldTrainingChoice,
    InputFieldText,
    ExerciseFieldRow
  },
  data: function() {
    return {
      date: "",
      startTime: "",
      endTime: "",
      selectedTraining: "",
      text: "",
      exercises: []
    };
  },
  methods: {
    addExercise: function() {
      var nExercise = (this.exercises.length + 1).toString();
      this.exercises.push({ exerciseNumber: nExercise });
    },
    removeExercise: function(index) {
      this.exercises.splice(index, 1);
    },
    async addTrainig() {
      const response = await AddTrainingService.addTraining({
        // TODO: figure out why this.date is always empty
        /*date: this.date,
        startTime: this.startTime,
        endTime: this.endTime*/
        date: "13.09.2020",
        startTime: "07:00",
        endTime: "06:00"
      });
      console.log(response.data);
    }
  }
};
</script>
