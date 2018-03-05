# easy-joi

[![Beerpay](https://beerpay.io/jamrizzi/easy-joi/badge.svg?style=beer-square)](https://beerpay.io/jamrizzi/easy-joi)
[![Beerpay](https://beerpay.io/jamrizzi/easy-joi/make-wish.svg?style=flat-square)](https://beerpay.io/jamrizzi/easy-joi?focus=wish)
[![GitHub stars](https://img.shields.io/github/stars/jamrizzi/easy-joi.svg?style=social&label=Stars)](https://github.com/jamrizzi/easy-joi)

Easy helper functions for joi

Please &#9733; this repo if you found it useful &#9733; &#9733; &#9733;


## Features

* Promise based validation
* Boolean validation


## Installation

```sh
npm install --save easy-joi
```


## Dependencies

* [NodeJS](https://nodejs.org)
* [Joi](https://github.com/hapijs/joi)


## Usage

```sh
import validate, { isValid } from 'easy-joi';

async function() {
  console.log(await isValid('email@example.com', joi.string().email())); // true
  console.log(await isValid('i am not an email', joi.string().email())); // false
  
  console.log(await validate('email@example.com', joi.string().email(), 'email')); // email@example.com
  console.log(await validate('i am not an email', joi.string().email(), 'email')); // throws error
}();
```


## Support

Submit an [issue](https://github.com/jamrizzi/easy-joi/issues/new)


## Contributing

Review the [guidelines for contributing](https://github.com/jamrizzi/easy-joi/blob/master/CONTRIBUTING.md)


## License

[MIT License](https://github.com/jamrizzi/easy-joi/blob/master/LICENSE)

[Jam Risser](https://jam.jamrizzi.com) &copy; 2018


## Changelog

Review the [changelog](https://github.com/jamrizzi/easy-joi/blob/master/CHANGELOG.md)


## Credits

* [Jam Risser](https://jam.jamrizzi.com) - Author


## Support on Beerpay (actually, I drink coffee)

A ridiculous amount of coffee :coffee: :coffee: :coffee: was consumed in the process of building this project.

[Add some fuel](https://beerpay.io/jamrizzi/easy-joi) if you'd like to keep me going!

[![Beerpay](https://beerpay.io/jamrizzi/easy-joi/badge.svg?style=beer-square)](https://beerpay.io/jamrizzi/easy-joi)
[![Beerpay](https://beerpay.io/jamrizzi/easy-joi/make-wish.svg?style=flat-square)](https://beerpay.io/jamrizzi/easy-joi?focus=wish)
