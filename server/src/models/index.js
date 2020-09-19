const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const config = require("../config/config");
//const TrainingTypes = require("./TrainingTypes");
//const ExerciseTypes = require("./ExerciseTypes");
const db = {};

const sequelize = new Sequelize(
  config.db.database,
  config.db.username,
  config.db.password,
  config.db.options
);

fs
  .readdirSync(__dirname)
  .filter((file) => file !== "index.js")
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
    db[model.name] = model
  });

/* Is this even needed?
const models = {
  TrainingTypes,
  ExerciseTypes
};

Object.keys(models).forEach(key => {
  if ("associate" in models[key]) {
    models[key].associate(models);
  }
});
*/

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
