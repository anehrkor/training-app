module.exports = (sequelize, DataTypes) => {
  const Exercise = sequelize.define("Exercise", {
    exerciseId: {
      type: DataTypes.STRING,
      unique: true,
      primaryKey: true
    },
    exerciseType: {
      type: DataTypes.STRING
    },
    ordering: {
      type: DataTypes.INTEGER
    },
    comment: {
      type: DataTypes.STRING
    }
  });

  Exercise.associate = function (models) {
    Exercise.hasMany(models.Set, {
      onDelete: "CASCADE"
    });
    Exercise.belongsTo(models.Training, {
      onDelete: "CASCADE"
    });
  };

  return Exercise;
};
