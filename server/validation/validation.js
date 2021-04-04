// Validation
const Joi = require('joi');


// Registeration Logic
const registerValidation = data => {
    const schema = Joi.object({
        name: Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),
    });
    return schema.validate(data);
};

const loginValidation = data => {
    const schema = Joi.object({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),
    });
    return schema.validate(data);
};


const notesValidation = data => {
    const schema = Joi.object({
        heading: Joi.string().min(1).required(),
        description: Joi.string().min(1).required(),
        like: Joi.number()
    });
    return schema.validate(data);
}

module.exports.notesValidation = notesValidation;
module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;