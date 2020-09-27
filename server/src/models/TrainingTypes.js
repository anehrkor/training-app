module.exports = (sequelize, DataTypes) => {
  const TrainingTypes = sequelize.define("TrainingTypes", {
    trainingType: {
      type: DataTypes.STRING,
      unique: true
    }
  });

  TrainingTypes.associate = function(models) {
    TrainingTypes.hasMany(models.ExerciseTypes, {
      //foreignKey: "",
      //as: "",
      onDelete: "CASCADE"
    });
  }

  return TrainingTypes;
};
