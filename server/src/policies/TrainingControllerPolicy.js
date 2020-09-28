const Joi = require("joi");

module.exports = {
  addTrainingType(req, res, next) {
    const schema = Joi.object({
      trainingType: Joi.string().pattern(new RegExp("^[a-zA-Z_]+$"))
    });

    const { error } = schema.validate(req.body);

    if (error) {
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
  },
  addTraining(req, res, next) {
    const setSchema = Joi.object({
      ordering: Joi.string().pattern(new RegExp("^[0-9]+$")),
      weight: Joi.string().pattern(new RegExp("^[0-9,.]+$")),
      reps: Joi.string().pattern(new RegExp("^[0-9]+$"))
    });
    const exerciseSchema = Joi.object({
      exerciseType: Joi.string().pattern(new RegExp("^[a-zA-Z_]+$")),
      ordering: Joi.string().pattern(new RegExp("^[0-9]+$")),
      comment: Joi.string().pattern(new RegExp("^[a-zA-Z0-9_:.!?'\"&()/;öäüß-\\s]+$")).allow(""),
      sets: Joi.array().items(setSchema)
    });
    const schema = Joi.object({
      date: Joi.string().pattern(new RegExp("^(0[1-9]|[12][0-9]|3[01])\\.(0[1-9]|1[012])\\.(\\d{4})$")),
      startTime: Joi.string().pattern(new RegExp("^([0-1][0-9]|[2][0-3]):([0-5][0-9])$")),
      endTime: Joi.string().pattern(new RegExp("^([0-1][0-9]|[2][0-3]):([0-5][0-9])$")),
      trainingType: Joi.string().pattern(new RegExp("^[a-zA-Z_]+$")),
      comment: Joi.string().pattern(new RegExp("^[a-zA-Z0-9_:.!?'\"&()/;öäüß-\\s]+$")).allow(""),
      exercises: Joi.array().items(exerciseSchema)
    });

    const { error } = schema.validate(req.body);

    if (error) {
      console.log(error);
      switch (error.details[0].context.key) {
        case "date":
          res.status(400).send({
            error: "Invalid date provided: the date must be entered in the form DD.MM.YYYY."
          });
          break;
        case "startTime":
          res.status(400).send({
            error: "Invalid start time provided: the time must be entered in the form hh:mm."
          });
          break;
        case "endTime":
          res.status(400).send({
            error: "Invalid end time provided: the time must be entered in the form hh:mm."
          });
          break;
        case "trainingType":
          res.status(400).send({
            error: "Invalid training type provided: only alphabetic characters and the underscore character are allowed."
          });
          break;
        case "comment":
          res.status(400).send({
            error: "Invalid characters entered into the comment field."
          });
          break;
        case "exerciseType":
          res.status(400).send({
            error: "Invalid exercise type provided: only alphabetic characters and the underscore character are allowed."
          });
          break;
        case "ordering":
          res.status(400).send({
            error: "Invalid ordering provided: only numbers are allowed."
          });
          break;
        case "weight":
          res.status(400).send({
            error: "Invalid weight provided."
          });
          break;
        case "reps":
          res.status(400).send({
            error: "Invalid reps provided."
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
  }
};
