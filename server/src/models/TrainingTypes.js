module.exports = (sequelize, DataTypes) => {
  const TrainingTypes = sequelize.define("TrainingTypes", {
    trainingType: {
      type: DataTypes.STRING,
      unique: true,
      primaryKey: true
    }
  });

  TrainingTypes.associate = function(models) {
    TrainingTypes.hasMany(models.ExerciseTypes, {
      onDelete: "CASCADE"
    });
  }

  return TrainingTypes;
};
