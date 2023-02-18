import Joi from 'joi';

const nameValidation = (name: string): Joi.StringSchema<string> => {
  return Joi.string()
    .required()
    .min(1)
    .max(50)
    .pattern(/^[a-zA-Z\s-']+$/)
    .messages({
      'string.pattern.base': `${name} must only contain alphabets and hyphens, apostrophe and whitespace`
    });
};

const userSchema = Joi.object({
  firstName: nameValidation('First name'),
  lastName: nameValidation('Last name'),
  otherNames: Joi.string()
    .min(1)
    .max(50)
    .allow('')
    .pattern(/^[a-zA-Z\s-']+$/)
    .messages({
      'string.pattern.base':
        'Other names must only contain alphabets and hyphens, apostrophe and whitespace'
    }),
  userTypeId: Joi.number().required(),
  email: Joi.string().email().required(),
  password: Joi.string()
    .required()
    .min(8)
    .pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/)
    .messages({
      'string.pattern.base':
        'Password must be at least 8 characters, inlude at lease one number, ' +
        'special character, upper and lower case alphabets'
    })
});

export { userSchema };
