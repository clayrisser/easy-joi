import joi from 'joi';
import validate, { isValid } from '../src';

async function isEmail(email) {
  const schema = joi.string().email();
  console.log(await isValid(email, schema));
  console.log(await validate(email, schema, 'email'));
}

async function main() {
  await isEmail('email@example.com').catch(err => {
    console.error(err.message);
  });
  await isEmail('emailexample.com').catch(err => {
    console.error(err.message);
  });
}

main();
