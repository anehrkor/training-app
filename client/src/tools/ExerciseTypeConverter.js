const exerciseTypeMapping = {
  /* eslint-disable */
  "BENCH_PRESS": "Bench press",
  "SEATED_ROW": "Seated row",
  "SQAT": "Squat",
  /* eslint-enable */
};

export default {
  mapExerciseTypeToString: function(input) {
    var output = [];
    for (var inputIndex = 0; inputIndex < input.length; inputIndex++) {
      var inputType = input[inputIndex];
      var outputType = exerciseTypeMapping[inputType];
      // If there is no transaltion for a given input, leave the input as is
      if (outputType != null) {
        output.push(outputType);
      } else {
        output.push(inputType);
      }
    }
    return output;
  }
};
