import {assert} from 'chai';
import {snakeCase} from 'lodash';
import {validate, pattern} from '../src';
import tagTypes from './assets/tags_types';

describe('bcp47', () => {
  describe('initialisation', () => {
    it('validate should be a function', () => {
      assert.typeOf(validate, 'function', 'expected validate to be a function');
    });

    it('pattern should be a regex', () => {
      assert.typeOf(pattern, 'regexp', 'expected pattern to be a regex pattern');
    });
  });

  describe('validate', () => {
    const tagKeys = Object.keys(tagTypes);

    it('should return false on non string type', () => {
      const nonStringTypes = [undefined, null, '', 2, true, {}, []];
      nonStringTypes.forEach(tag => {
        assert.notOk(validate(tag), `expected "${tag}" to fail validate`);
      });
    });

    tagKeys.forEach(key => {
      describe(`accept valid ${key} types`, () => {
        tagTypes[key].forEach(tag => {
          it(`should return true on "${tag}" format`, () => {
            assert(validate(tag), `expected "${tag}" to validate`);
          });
        });
      });
    });

    tagKeys.forEach(key => {
      describe(`reject invalid ${key} types`, () => {
        tagTypes[key].forEach(tag => {
          const invalidTag = snakeCase(tag);
          if (invalidTag === tag) return; // some keys will not invalidate - i.e single language keys
          it(`should return false on "${invalidTag}" format`, () => {
            assert.notOk(validate(invalidTag), `expected "${invalidTag}" to fail validation`);
          });
        });
      });
    });
  });
});
