import joi from 'joi';

async function validate(value, schema, name) {
  return new Promise((resolve, reject) => {
    if (name) {
      return joi.validate(
        {
          [name]: value
        },
        joi.object({
          [name]: schema
        }),
        (err, value) => {
          if (err) {
            err.message = err.details[0].message;
            return reject(err);
          }
          return resolve(value[name]);
        }
      );
    }
    return joi.validate(value, schema, (err, value) => {
      if (err) return reject(err);
      return resolve(value);
    });
  });
}

export const isValid = (value, schema) => {
  return validate(value, schema)
    .then(() => true)
    .catch(() => false);
};

export default validate;
