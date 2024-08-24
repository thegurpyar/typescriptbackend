import Joi from 'joi';

const userSchema = Joi.object({
  name: Joi.string().required().min(2).max(50),
  email: Joi.string().required().email()
});

const validateUser = (data: any) => {
  return userSchema.validate(data);
};




export {validateUser}