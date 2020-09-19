module.exports = (sequelize, DataTypes) => { // TODO: implement relation to training type
  const ExerciseTypes = sequelize.define("ExerciseTypes", {
    exerciseType: {
      type: DataTypes.STRING,
      unique: true,
    },
    trainingType: {
      type: DataTypes.STRING,
      unique: true,
    },
  });

  /* Is this even needed?
  ExerciseTypes.associate = models => {
    ExerciseTypes.belongsTo(models.TrainingTypes);
  }
  */

  return ExerciseTypes;
};
