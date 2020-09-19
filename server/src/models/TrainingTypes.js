module.exports = (sequelize, DataTypes) => {
  const TrainingTypes = sequelize.define("TrainingTypes", {
    trainingType: {
      type: DataTypes.STRING,
      unique: true
    }
  });

  /* Is this even needed?
  TrainingTypes.associate = models => {
    TrainingTypes.hasMany(models.ExerciseTypes, { onDelete: "CASCADE" });
  }
  */

  return TrainingTypes;
};
