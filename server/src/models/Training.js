module.exports = (sequelize, DataTypes) => {
  const Training = sequelize.define("Training", {
    trainingId: {
      type: DataTypes.STRING,
      unique: true,
      primaryKey: true
    },
    date: {
      type: DataTypes.STRING
    },
    startTime: {
      type: DataTypes.STRING
    },
    endTime: {
      type: DataTypes.STRING
    },
    trainingType: {
      type: DataTypes.STRING
    },
    comment: {
      type: DataTypes.STRING
    }
  });

  Training.associate = function (models) {
    Training.hasMany(models.Exercise, {
      onDelete: "CASCADE",
    });
  };

  return Training;
};
