const Joi = require("joi");

module.exports = {
  addTrainingType(req, res, next) {
    const schema = Joi.object({
      trainingType: Joi.string().pattern(new RegExp("^[a-zA-Z_]+$")),
    });

    const { error } = schema.validate(req.body);

    if (error) {
      console.log(error);
      switch (error.details[0].context.key) {
        case "trainingType":
          res.status(400).send({
            error: "Invalid training type provided: only alphabetic characters and the underscore character are allowed.",
          });
          break;
        default:
          res.status(400).send({
            error: "An error occurred."
          });
          break;
      }
    } else {
      next();
    }
  }
};
