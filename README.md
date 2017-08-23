# bcp47

[![Build Status](https://travis-ci.org/SafetyCulture/bcp47.svg?branch=master)](https://travis-ci.org/SafetyCulture/bcp47)
[![Coverage Status](https://coveralls.io/repos/github/SafetyCulture/bcp47/badge.svg)](https://coveralls.io/github/SafetyCulture/bcp47)

Simple validator for BCP47 locale tags

Helpful resources: 
* http://www.w3.org/International/questions/qa-choosing-language-tags
* https://tools.ietf.org/html/bcp47
* http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry

# Usage

## Install
```sh
$ npm i @safetyculture/bcp47 --save
```

## Importing
```js
import {validate, pattern} from 'bcp47';
```

# Properties

## pattern
A regular expression for validating locale strings

```js
// use with third party validation tools
Joi.string().regex(pattern)

// or just regex
pattern.test(locale);
```

# Methods

## validate(`locale`) => Boolean
Validate a given locale string.
- `locale`. Example `en-US`

```js
validate('en-US'); // true
validate('en_US'); // false
```
