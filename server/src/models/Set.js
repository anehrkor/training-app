module.exports = (sequelize, DataTypes) => {
  const Set = sequelize.define("Set", {
    ordering: {
      type: DataTypes.INTEGER,
      unique: true,
    },
    weight: {
      type: DataTypes.DECIMAL,
      unique: true
    },
    reps: {
      type: DataTypes.INTEGER,
      unique: true
    }
  });

  Set.associate = function (models) {
    Set.belongsTo(models.Exercise, {
      //foreignKey: "",
      //as: "",
      onDelete: "CASCADE"
    });
  };

  return Set;
};
