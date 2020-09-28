module.exports = (sequelize, DataTypes) => {
  const ExerciseTypes = sequelize.define("ExerciseTypes", {
    exerciseType: {
      type: DataTypes.STRING,
      unique: true,
      primaryKey: true
    }
  });

  ExerciseTypes.associate = function(models) {
    ExerciseTypes.belongsTo(models.TrainingTypes, {
      onDelete: "CASCADE"
    });
  }

  return ExerciseTypes;
};
