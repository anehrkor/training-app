<template>
  <div>
    <h1>Add training data</h1>
    <div class="py-md-3">
      <h3 style="text-align:left; padding:10px; margin:auto; width:75%">
        Add a training
      </h3>
      <div class="add-training p-3 border bg-light" style="overflow: hidden">
        <div class="row">
          <div class="form-group col-md-3">
            <InputFieldDate
              label="Date"
              v-model="date"
              @keydown="dateKeydown($event)"
            />
          </div>
          <div class="form-group col-md-3">
            <InputFieldTime
              label="Start"
              v-model="time"
              @keydown="timeKeydown($event)"
            />
          </div>
          <div class="form-group col-md-3">
            <InputFieldTime
              label="Finish"
              v-model="time"
              @keydown="timeKeydown($event)"
            />
          </div>
          <div class="form-group col-md-3">
            <InputFieldTrainingChoice
              label="Training type"
              selectDefault="Choose type"
              v-model="choices"
            />
          </div>
          <div class="form-group col-md-3">
            <InputFieldText
              label="Comment"
              placeholder="Enter comment"
              v-model="text"
              @keydown="textKeydown($event)"
            />
          </div>
        </div>
        <!-- Work in progress -->
        <div style="float:left">
          <button type="button" class="btn btn-secondary">
            Add exercise
          </button>
        </div>
        <div style="float:left">
          <ExerciseFieldRow />
        </div>
        <!-- -->
        <div style="float:right">
          <button type="submit" class="btn btn-primary">
            Add training
          </button>
        </div>
      </div>
    </div>
    <h3 style="text-align:left; padding:10px; margin:auto; width:75%">
      Add a new training type
    </h3>
    <div class="set-training-type p-3 border bg-light">
      A form to add a new training type will be added here.
    </div>
  </div>
</template>

<script>
import InputFieldDate from "@/components/InputFieldDate.vue";
import InputFieldTime from "@/components/InputFieldTime.vue";
import InputFieldText from "@/components/InputFieldText.vue";
import InputFieldTrainingChoice from "@/components/InputFieldTrainingChoice.vue";
import ExerciseFieldRow from "@/components/ExerciseFieldRow.vue";
export default {
  components: {
    InputFieldDate,
    InputFieldTime,
    InputFieldText,
    InputFieldTrainingChoice,
    ExerciseFieldRow
  },
  data: function() {
    return {
      date: "",
      time: "",
      text: "",
      choices: []
    };
  }
};
</script>

<style scoped>
.add-training {
  margin: auto;
  width: 75%;
}
.set-training-type {
  margin: auto;
  width: 75%;
}
</style>
