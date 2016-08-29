# bcp47
Module for interacting with bcp-47 locale language tags
[![Build status](https://badge.buildkite.com/3bdd7b8c474a53b120d71ee9472042042659359be492bb5bfe.svg)](https://buildkite.com/safetyculture/bcp47)

Helpful resources: 
    - http://www.w3.org/International/questions/qa-choosing-language-tags
    - https://tools.ietf.org/html/bcp47
    - http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry

# Usage

## Install
```sh
$ npm i @safetyculture/bcp47 --save
```

## Setting up Strowger service url
```js
import bcp47 from 'bcp47');
const bcp = bcp47();
bcp.validate('en-US');
```

# Properties

## pattern
A regular expression for validating locale strings

# Methods

## validate(`locale`) => Boolean
Validate a given locale string.
- `locale`. Example `en-US`