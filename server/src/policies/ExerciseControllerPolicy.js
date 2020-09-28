const Joi = require("joi");

module.exports = {
  addExerciseType(req, res, next) {
    const schema = Joi.object({
      exerciseType: Joi.string().pattern(new RegExp("^[a-zA-Z_]+$")).required(),
      trainingType: Joi.string().pattern(new RegExp("^[a-zA-Z_]+$")).required()
    });

    const { error } = schema.validate(req.body);

    if (error) {
      switch (error.details[0].context.key) {
        case "exerciseType":
          if (error.details[0].message.includes("is required")) {
            res.status(400).send({
              error: "No exercise type provided."
            });
            break;
          } else {
            res.status(400).send({
              error:
                "Invalid exercise type provided: only alphabetic characters and the underscore character are allowed."
            });
            break;
          }
        case "trainingType":
          if (error.details[0].message.includes("is required")) {
            res.status(400).send({
              error: "No training type provided."
            })
            break;
          } else {
            res.status(400).send({
              error:
                "Invalid training type provided: only alphabetic characters and the underscore character are allowed."
            });
            break;
          }
        default:
          res.status(400).send({
            error: "A validation error occurred."
          });
          break;
      }
    } else {
      next();
    }
  },
  getExerciseTypes(req, res, next) {
    const schema = Joi.object({
      trainingType: Joi.string().pattern(new RegExp("^[a-zA-Z_]+$"))
    });

    if (req.body.trainingType != null) {
      const { error } = schema.validate(req.body);

      if (error) {
        switch (error.details[0].context.key) {
          case "trainingType":
            res.status(400).send({
              error:
                "Invalid training type provided: only alphabetic characters and the underscore character are allowed."
            });
            break;
          default:
            res.status(400).send({
              error: "A validation error occurred."
            });
            break;
        }
      } else {
        next();
      }
    } else {
      next();
    }
  }
};
