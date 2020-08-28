<template>
  <div>
    <h1>Add training data</h1>
    <div class="py-md-3">
      <h3 style="text-align:left; padding:10px; margin:auto; width:75%">
        Add a training
      </h3>
      <div class="add-training p-3 border bg-light">
        <form class="p-3">
          <div class="form-row">
            <div class="form-col px-md-2" style="width:15%">
              <label for="inputDate">Date</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter date..."
              />
            </div>
            <div class="form-col px-md-2" style="width:15%">
              <label for="inputStartTime">Started at</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter time..."
              />
            </div>
            <div class="form-col px-md-2" style="width:15%">
              <label for="inputEndTime">Finished at</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter time..."
              />
            </div>
            <div class="form-col px-md-2" style="width:15%">
              <label for="inputType">Training type</label>
              <select id="inputType" class="form-control">
                <option selected>Choose type...</option>
                <option>Push day</option>
                <option>Pull day</option>
                <option>Leg day</option>
              </select>
            </div>
            <div class="form-col px-md-2" style="width:40%">
              <label for="inputComment">Comment</label>
              <textarea
                class="form-control"
                placeholder="Enter comment..."
              ></textarea>
            </div>
          </div>
          <div class="form-row">
            <button type="submit" class="btn btn-primary">
              Add training
            </button>
          </div>
        </form>
      </div>
    </div>
    <h3 style="text-align:left; padding:10px; margin:auto; width:75%">
      Add a new training type
    </h3>
    <div class="set-training-type p-3 border bg-light">
      A form to add a new training type will be added here.
    </div>
    <BaseInputField v-model="date" label="Date" placeholder="Enter date" />
    <BaseInputField v-model="time" label="Time" placeholder="Enter time" />
  </div>
</template>

<script>
import BaseInputField from "../components/BaseInputField.vue";

export default {
  name: "base-input-field-test",
  components: { BaseInputField }
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
