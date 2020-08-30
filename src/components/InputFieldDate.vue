<template>
  <form class="input-field-date">
    <label for="input-field-date-label">{{ label }}</label>
    <input
      type="text"
      :placeholder="placeholder"
      v-model="date"
      maxlength="10"
    />
  </form>
</template>

<script>
export default {
  name: "input-field-date",
  props: {
    label: { type: String, required: false, default: "Date" },
    placeholder: { type: String, required: false, default: "Enter date" }
  },
  data: function() {
    return {
      date: ""
    };
  },
  watch: {
    date(val) {
      this.date = val.replace(/\W/g, "");
    }
  },
  methods: {
    // taken from https://stackoverflow.com/questions/50566430/vue-js-how-to-restrict-special-characters-in-an-input-field
    dateKeydown(e) {
      if (/^\W$/.test(e.key)) {
        e.preventDefault();
      }
    }
  }
};
</script>
