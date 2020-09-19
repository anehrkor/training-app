module.exports = (sequelize, DataTypes) => {
  return sequelize.define("TrainingTypes", {
    trainingType: {
      type: DataTypes.STRING,
      unique: true
    }
  });
};
