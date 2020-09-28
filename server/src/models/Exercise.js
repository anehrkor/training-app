module.exports = (sequelize, DataTypes) => {
  const Exercise = sequelize.define("Exercise", {
    ordering: {
      type: DataTypes.INTEGER,
      unique: true,
    },
    comment: {
      type: DataTypes.STRING,
      unique: true
    }
  });

  Exercise.associate = function (models) {
    Exercise.hasOne(models.ExerciseTypes, {
      //foreignKey: "",
      //as: "",
      onDelete: "CASCADE"
    });
    Exercise.hasMany(models.Set, {
      //foreignKey: "",
      //as: "",
      onDelete: "CASCADE"
    });
    Exercise.belongsTo(models.Training, {
      //foreignKey: "",
      //as: "",
      onDelete: "CASCADE"
    });
  };

  return Exercise;
};
