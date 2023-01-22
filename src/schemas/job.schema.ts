import joi from "joi";

export const JobSchema = joi.object({
    position: joi.string().required(),
    company: joi.string().required(),
    salary: joi.number().required()
});

export const idSchema = joi.string().pattern(new RegExp('^[1-9][0-9]*$'));