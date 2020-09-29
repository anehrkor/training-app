const exerciseTypeMapping = {
  /* eslint-disable */
  // Leg day
  "SQAT": "Squat",
  "DEADLIFT": "Deadlift",
  "LEG_EXTENSION_SINGLE": "Leg extension single",
  "LEG_CURL_SINGLE": "Leg curl single",
  "HACK_SQUAT": "Hack squat",
  "SEATED_CALF_RAISE": "Seated calf raise",
  "ROMANIAN_DEADLIFT": "Romanian deadlift",
  "STANDING_CALF_RAISE": "Standing calf raise",
  "INCLINE_LEG_PRESS": "Incline leg press",
  "SEATED_LEG_PRESS": "Seated leg press",
  // Pull day
  "MACHINE_LAT_PULLDOWN_SINGLE": "Machine lat pulldown single",
  "MACHINE_ROW_SINGLE": "Machine row single",
  "TOWER_LAT_PULLDOWN": "Tower lat pulldown",
  "TOWER_ROW": "Tower row",
  "CABLE_ROW": "Cable row",
  "CABLE_EZBAR_SHRUGS": "Cable EZ bar shrugs",
  "CABLE_EZBAR_BICEP_CURL": "Cable EZ bar bicep curl",
  "CABLE_BICEP_CURL_SINGLE": "Cable biceps curl single",
  "CABLE_REAR_DELTS": "Cable rear delts",
  "EZBAR_BICEP_CURL": "EZ bar bicep curl",
  "DUMBBELL_REAR_DELTS": "Dumbbell rear delts",
  "CABLE_SHRUGS_SINGLE": "Cable shrugs single",
  "MACHINE_REAR_DELTS": "Machine rear delts",
  "LAT_PULLOVER": "Lat pullover",
  // Push day
  "INCLINE_DUMBBELL_BENCH_PRESS": "Incline dumbbell bench press",
  "DUMBBELL_BENCH_PRESS": "Dumbbell bench press",
  "INCLINE_DUMBBELL_FLIES": "Incline dumbbell flies",
  "DUMBBELL_SHOULDER_PRESS": "Dumbbell shoulder press",
  "CABLE_EZBAR_TRICEP_PUSHDOWN": "Cable EZ bar tricep pushdown",
  "DUMBBELL_LATERAL_RAISE": "Dumbbell lateral raise",
  "CABLE_TRICEP_KICKBACK": "Cable tricep kickback",
  "DIPS": "Dips",
  "SEATED_BARBELL_OVERHEAD_PRESS": "Seated barbell overhead press",
  "CABLE_TRICEP_OVERHEAD_PUSHUP": "Cable tricep overhead pushup",
  "CABLE_DECLINE_FLIES": "Cable decline flies",
  "PLATE_SQUEEZE": "Plate squeeze",
  "CABLE_CRUNCH": "Cable crunch"
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
  },
  mapStringToExerciseType: function(input) {
    const output = input.toUpperCase().replace(/ /g, "_");
    return output;
  }
};
