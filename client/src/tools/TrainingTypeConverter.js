const trainingTypeMapping = {
  /* eslint-disable */
  "LEG_DAY": "Leg day",
  "PULL_DAY": "Pull day",
  "PUSH_DAY": "Push day",
  /* eslint-enable */
};

export default {
  mapTrainingTypeToString: function(input) {
    var output = [];
    for (var inputIndex = 0; inputIndex < input.length; inputIndex++) {
      var inputType = input[inputIndex];
      var outputType = trainingTypeMapping[inputType];
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
