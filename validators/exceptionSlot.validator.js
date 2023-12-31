const Joi = require("joi");
const CONST = require("../const");

const exceptionSlotSchema = Joi.object({
  from: Joi.date().required().messages({
    "any.required": `${CONST.FROM_TIME}`,
  }),
  to: Joi.date().required().messages({
    "any.required": `${CONST.TO_TIME}`,
  }),
  user_id: Joi.number().greater(0),
  title: Joi.string().required().messages({
    "any.required": `${CONST.TITLE_REQUIRED}`,
  }),
});

module.exports = {
  exceptionSlotSchema
};
