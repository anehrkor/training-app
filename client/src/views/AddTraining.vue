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
                @keydown="dateKeydown($event)"
                @entered:date="enterDate"
              />
            </div>
            <div class="form-group col-md-2">
              <InputFieldTime
                label="Started at"
                @keydown="timeKeydown($event)"
                @entered:time="enterStartTime"
              />
            </div>
            <div class="form-group col-md-2">
              <InputFieldTime
                label="Finished at"
                @keydown="timeKeydown($event)"
                @entered:time="enterEndTime"
              />
            </div>
            <div class="form-group col-md-2">
              <InputFieldTrainingChoice
                label="Training type"
                selectDefault="Choose type"
                @selected:training="selectTraining"
              />
            </div>
            <div class="form-group col-md-4">
              <InputFieldText
                label="Comment"
                placeholder="Enter comment"
                @keydown="textKeydown($event)"
                @entered:text="enterTrainingComment"
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
      training: "",
      trainingComment: "",
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
    enterDate(enteredDate) {
      this.date = enteredDate;
    },
    enterStartTime(enteredTime) {
      this.startTime = enteredTime;
    },
    enterEndTime(enteredTime) {
      this.endTime = enteredTime;
    },
    selectTraining(selectedTraining) {
      this.training = selectedTraining;
    },
    enterTrainingComment(enteredTrainingComment) {
      this.trainingComment = enteredTrainingComment;
    },
    async addTrainig() {
      const response = await AddTrainingService.addTraining({
        date: this.date,
        startTime: this.startTime,
        endTime: this.endTime,
        training: this.training,
        trainingComment: this.trainingComment
      });
      console.log(response.data);
    }
  }
};
</script>
