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
              <InputFieldDate label="Date" @entered:date="enterDate" />
            </div>
            <div class="form-group col-md-2">
              <InputFieldTime
                label="Started at"
                @entered:time="enterStartTime"
              />
            </div>
            <div class="form-group col-md-2">
              <InputFieldTime
                label="Finished at"
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
    <br />
    <h3 style="text-align:left; padding:10px; margin:auto; width:75%">
      Add a new training or exercise type
    </h3>
    <div class="container">
      <div class="mt-1">
        <div class="jumbotron bg-light border col-md-10 offset-md-1 shadow-sm">
          <div class="row">
            <div class="form-group col-md-8">
              <InputFieldType
                placeholder="Enter training type"
                @entered:type="enterNewTrainingType"
              />
            </div>
            <div class="form-group col-md-4">
              <button
                class="btn btn-secondary btn-sm float-right"
                title="Click to add new training type"
                @click="addTrainingType"
              >
                &nbsp;Add training type
              </button>
            </div>
          </div>
          <div class="row">
            <div class="form-group col-md-4">
              <InputFieldType
                placeholder="Enter exercise type"
                @entered:type="enterNewExerciseType"
              />
            </div>
            <div class="form-group col-md-4">
              <InputFieldTrainingChoice
                label="Training type"
                selectDefault="Choose type"
                @selected:training="selectNewExerciseTrainingType"
              />
            </div>
            <div class="form-group col-md-4">
              <button
                class="btn btn-secondary btn-sm float-right"
                title="Click to add new exercise type"
                @click="addExerciseType"
              >
                &nbsp;Add exercise type
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import components
import InputFieldDate from "@/components/InputFieldDate.vue";
import InputFieldTime from "@/components/InputFieldTime.vue";
import InputFieldTrainingChoice from "@/components/InputFieldTrainingChoice.vue";
import InputFieldText from "@/components/InputFieldText.vue";
import ExerciseFieldRow from "@/components/ExerciseFieldRow.vue";
import InputFieldType from "@/components/InputFieldType.vue";
// import services
import AddTrainingService from "@/services/AddTrainingService.js";
// import converter
import MapTrainingTypeToString from "@/tools/TrainingTypeConverter.js";
import MapExerciseTypeToString from "@/tools/ExerciseTypeConverter.js";

export default {
  components: {
    InputFieldDate,
    InputFieldTime,
    InputFieldTrainingChoice,
    InputFieldText,
    ExerciseFieldRow,
    InputFieldType
  },
  data: function() {
    return {
      date: "",
      startTime: "",
      endTime: "",
      training: "",
      trainingComment: "",
      exercises: [],
      newTrainingType: "",
      newExerciseType: "",
      newExerciseTypeTrainingType: ""
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
    enterNewTrainingType(enteredTrainingType) {
      this.newTrainingType = enteredTrainingType;
    },
    enterNewExerciseType(enteredExerciseType) {
      this.newExerciseType = enteredExerciseType;
    },
    selectNewExerciseTrainingType(selectedTraining) {
      this.newExerciseTypeTrainingType = selectedTraining;
    },
    async addTrainig() {
      try {
        const response = await AddTrainingService.addTraining({
          date: this.date,
          startTime: this.startTime,
          endTime: this.endTime,
          training: this.training,
          trainingComment: this.trainingComment
        });
        console.log(response.data);
      } catch (error) {
        console.log(error, "\nCould not add training to database.");
      }
    },
    // TODO: training type selector must be updated after successfull addition of new training type
    async addTrainingType() {
      const translatedNewTrainingType = MapTrainingTypeToString.mapStringToTrainingType(
        this.newTrainingType
      );
      try {
        const response = await AddTrainingService.addTrainingType({
          trainingType: translatedNewTrainingType
        });
        console.log(response.data);
      } catch (error) {
        console.log(
          error,
          `\nCould not add new training type '${this.newTrainingType}' to database.`
        );
      }
    },
    // TODO: exercise type selector must be updated after successfull addition of new exercise type
    async addExerciseType() {
      const translatedNewExerciseType = MapExerciseTypeToString.mapStringToExerciseType(
        this.newExerciseType
      );
      try {
        const response = await AddTrainingService.addExerciseType(
          translatedNewExerciseType,
          this.newExerciseTypeTrainingType
        );
        console.log(response.data);
      } catch (error) {
        console.log(
          error,
          `\nCould not add new exercise type '${this.newExerciseType}' for training type '${this.newExerciseTypeTrainingType}' to database.`
        );
      }
    }
  }
};
</script>
