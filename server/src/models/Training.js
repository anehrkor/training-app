module.exports = (sequelize, DataTypes) => {
  const Training = sequelize.define("Training", {
    date: {
      type: DataTypes.STRING,
      unique: true,
    },
    startTime: {
      type: DataTypes.STRING,
      unique: true
    },
    endTime: {
      type: DataTypes.STRING,
      unique: true
    },
    comment: {
      type: DataTypes.STRING,
      unique: true,
    }
  });

  Training.associate = function (models) {
    Training.hasOne(models.TrainingTypes, {
      //foreignKey: "",
      //as: "",
      onDelete: "CASCADE",
    });
    Training.hasMany(models.Exercise, {
      //foreignKey: "",
      //as: "",
      onDelete: "CASCADE",
    });
  };

  return Training;
};
