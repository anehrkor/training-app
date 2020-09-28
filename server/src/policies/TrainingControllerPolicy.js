const Joi = require("joi");

module.exports = {
  addTrainingType(req, res, next) {
    const schema = Joi.object({
      trainingType: Joi.string().pattern(new RegExp("^[a-zA-Z_]+$")).required()
    });

    const { error } = schema.validate(req.body);

    if (error) {
      switch (error.details[0].context.key) {
        case "trainingType":
          if (error.details[0].message.includes("is required")) {
            res.status(400).send({
              error: "No training type provided."
            });
            break;
          } else {
            res.status(400).send({
              error: "Invalid training type provided: only alphabetic characters and the underscore character are allowed."
            });
            break;
          }
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
      ordering: Joi.string().pattern(new RegExp("^[0-9]+$")).required(),
      weight: Joi.string().pattern(new RegExp("^[0-9,.]+$")).required(),
      reps: Joi.string().pattern(new RegExp("^[0-9]+$")).required()
    });
    const exerciseSchema = Joi.object({
      exerciseType: Joi.string().pattern(new RegExp("^[a-zA-Z_]+$")).required(),
      ordering: Joi.string().pattern(new RegExp("^[0-9]+$")).required(),
      comment: Joi.string().pattern(new RegExp("^[a-zA-Z0-9_:.!?'\"&()/;öäüß-\\s]+$")).allow(""),
      sets: Joi.array().items(setSchema)
    });
    const schema = Joi.object({
      date: Joi.string().pattern(new RegExp("^(0[1-9]|[12][0-9]|3[01])\\.(0[1-9]|1[012])\\.(\\d{4})$")).required(),
      startTime: Joi.string().pattern(new RegExp("^([0-1][0-9]|[2][0-3]):([0-5][0-9])$")).required(),
      endTime: Joi.string().pattern(new RegExp("^([0-1][0-9]|[2][0-3]):([0-5][0-9])$")).required(),
      trainingType: Joi.string().pattern(new RegExp("^[a-zA-Z_]+$")).required(),
      comment: Joi.string().pattern(new RegExp("^[a-zA-Z0-9_:.!?'\"&()/;öäüß-\\s]+$")).allow(""),
      exercises: Joi.array().items(exerciseSchema)
    });

    const { error } = schema.validate(req.body);

    if (error) {
      console.log(error);
      switch (error.details[0].context.key) {
        case "date":
          if (error.details[0].message.includes("is required")) {
            res.status(400).send({
              error: "No date provided."
            });
            break;
          } else {
            res.status(400).send({
              error: "Invalid date provided: the date must be entered in the form DD.MM.YYYY."
            });
            break;
          }
        case "startTime":
          if (error.details[0].message.includes("is required")) {
            res.status(400).send({
              error:
                "No start time provided."
            });
            break;
          } else {
            res.status(400).send({
              error:
                "Invalid start time provided: the time must be entered in the form hh:mm."
            });
            break;
          }
        case "endTime":
          if (error.details[0].message.includes("is required")) {
            res.status(400).send({
              error:
                "No end time provided."
            });
            break;
          } else {
            res.status(400).send({
              error:
                "Invalid end time provided: the time must be entered in the form hh:mm."
            });
            break;
          }
        case "trainingType":
          if (error.details[0].message.includes("is required")) {
            res.status(400).send({
              error:
                "No training type provided."
            });
            break;
          } else {
            res.status(400).send({
              error:
                "Invalid training type provided: only alphabetic characters and the underscore character are allowed."
            });
            break;
          }
        case "comment":
          res.status(400).send({
            error: "Invalid characters entered into the comment field."
          });
          break;
        case "exerciseType":
          if (error.details[0].message.includes("is required")) {
            res.status(400).send({
              error:
                "No exercise type provided."
            });
            break;
          } else {
            res.status(400).send({
              error:
                "Invalid exercise type provided: only alphabetic characters and the underscore character are allowed."
            });
            break;
          }
        case "ordering":
          if (error.details[0].message.includes("is required")) {
            res.status(400).send({
              error: "No ordering provided."
            });
            break;
          } else {
            res.status(400).send({
              error: "Invalid ordering provided: only integers are allowed."
            });
            break;
          }
        case "weight":
          if (error.details[0].message.includes("is required")) {
            res.status(400).send({
              error: "No weight provided."
            });
            break;
          } else {
            res.status(400).send({
              error: "Invalid weight provided: only numbers, the full stop and comma characters are allowed."
            });
            break;
          }
        case "reps":
          if (error.details[0].message.includes("is required")) {
            res.status(400).send({
              error: "No reps provided."
            });
            break;
          } else {
            res.status(400).send({
              error: "Invalid reps provided: only integers are allowed."
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
  }
};
