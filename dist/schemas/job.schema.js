import joi from "joi";
export var JobSchema = joi.object({
    position: joi.string().required(),
    company: joi.string().required(),
    salary: joi.number().required()
});
export var idSchema = joi.string().pattern(new RegExp('^[1-9][0-9]*$'));
