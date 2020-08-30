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
    <InputFieldDate
      label="Date"
      placeholder="Enter date"
      v-model="date"
      @keydown="dateKeydown($event)"
    />
    <InputFieldTime
      label="Time"
      placeholder="Enter time"
      v-model="time"
      @keydown="timeKeydown($event)"
    />
    <InputFieldText
      label="Comment"
      placeholder="Enter text"
      v-model="text"
      @keydown="textKeydown($event)"
    />
  </div>
</template>

<script>
import InputFieldDate from "@/components/InputFieldDate.vue";
import InputFieldTime from "@/components/InputFieldTime.vue";
import InputFieldText from "@/components/InputFieldText.vue";
export default {
  components: { InputFieldDate, InputFieldTime, InputFieldText },
  data: function() {
    return {
      date: "",
      time: "",
      text: ""
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
