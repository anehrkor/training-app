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
            <div class="form-group col-md-3">
              <InputFieldDate
                label="Date"
                v-model="date"
                @keydown="dateKeydown($event)"
              />
            </div>
            <div class="form-group col-md-3">
              <InputFieldTime
                label="Started at"
                v-model="time"
                @keydown="timeKeydown($event)"
              />
            </div>
            <div class="form-group col-md-3">
              <InputFieldTime
                label="Finished at"
                v-model="time"
                @keydown="timeKeydown($event)"
              />
            </div>
            <div class="form-group col-md-3">
              <InputFieldTrainingChoice
                label="Training type"
                selectDefault="Choose type"
                v-model="trainingChoices"
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
          <br />
          <button
            class="btn btn-secondary float-right"
            title="Click to add an exercise"
          >
            &nbsp;Add More Data
          </button>
        </div>
      </div>
    </div>
    <button type="submit" class="btn btn-primary">
      Add training
    </button>
  </div>
</template>

<script>
import InputFieldDate from "@/components/InputFieldDate.vue";
import InputFieldTime from "@/components/InputFieldTime.vue";
import InputFieldTrainingChoice from "@/components/InputFieldTrainingChoice.vue";
import InputFieldText from "@/components/InputFieldText.vue";
export default {
  components: {
    InputFieldDate,
    InputFieldTime,
    InputFieldTrainingChoice,
    InputFieldText
  },
  data: function() {
    return {
      date: "",
      time: "",
      trainingChoices: [],
      text: ""
    };
  }
};
</script>
