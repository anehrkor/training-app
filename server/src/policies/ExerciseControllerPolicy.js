const Joi = require("joi");

module.exports = {
  addExerciseType(req, res, next) {
    const schema = Joi.object({
      exerciseType: Joi.string().pattern(new RegExp("^[a-zA-Z_]+$")),
      trainingType: Joi.string().pattern(new RegExp("^[a-zA-Z_]+$")),
    });

    const { error } = schema.validate(req.body);

    if (error) {
      switch (error.details[0].context.key) {
        case "exerciseType":
          res.status(400).send({
            error: "Invalid exercise type provided: only alphabetic characters and the underscore character are allowed."
          });
          break;
        case "trainingType":
          res.status(400).send({
            error: "Invalid training type provided: only alphabetic characters and the underscore character are allowed."
          })
          break;
        default:
          res.status(400).send({
            error: "An error occurred.",
          });
          break;
      }
    } else {
      next();
    }
  },
};
