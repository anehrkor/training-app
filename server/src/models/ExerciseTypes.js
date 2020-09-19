module.exports = (sequelize, DataTypes) => { // TODO: implement relation to training type
  return sequelize.define("ExerciseTypes", {
    exerciseType: {
      type: DataTypes.STRING,
      unique: true,
    },
  });
};
