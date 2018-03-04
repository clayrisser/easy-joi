import joi from 'joi';

async function validate(value, schema) {
  return new Promise((resolve, reject) => {
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
