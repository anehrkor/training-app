module.exports = (sequelize, DataTypes) => {
  const ExerciseTypes = sequelize.define("ExerciseTypes", {
    exerciseType: {
      type: DataTypes.STRING,
      unique: true,
    },
    trainingType: {
      type: DataTypes.STRING,
      unique: true,
    }
  });

  ExerciseTypes.associate = function(models) {
    ExerciseTypes.belongsTo(models.TrainingTypes, {
      //foreignKey: "",
      //as: "",
      onDelete: "CASCADE"
    })
  }

  return ExerciseTypes;
};
