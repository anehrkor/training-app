module.exports = (sequelize, DataTypes) => {
  const Set = sequelize.define("Set", {
    setId: {
      type: DataTypes.STRING,
      unique: true,
      primaryKey: true,
    },
    ordering: {
      type: DataTypes.INTEGER,
    },
    weight: {
      type: DataTypes.DECIMAL,
    },
    reps: {
      type: DataTypes.INTEGER,
    }
  });

  Set.associate = function (models) {
    Set.belongsTo(models.Exercise, {
      onDelete: "CASCADE"
    });
  };

  return Set;
};
