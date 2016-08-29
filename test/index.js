import {assert} from 'chai';
import {snakeCase, union, flatten, without} from 'lodash';
import Bcp47 from '../src';
import tagTypes from './assets/tags_types';
const tags = flatten(Object.keys(tagTypes).map(key => { return tagTypes[key]; }));

describe('bcp47', () => {
  describe('initialisation', () => {
    it('should be a function', () => {
      assert.typeOf(Bcp47, 'function', 'expected bcp47 to be a function');
    });

    it('should have correct attributes', () => {
      const bcp = Bcp47();
      assert.typeOf(bcp.pattern, 'regexp', 'expected bcp47.pattern to be a regex pattern');
      assert.typeOf(bcp.validate, 'function', 'expected bcp47.validate to be a function');
    });
  });

  describe('validate', () => {
    it('should return true on correct formatted bcp47 locale string', () => {
      const bcp = Bcp47();
      tags.forEach(tag => {
        assert(bcp.validate(tag), `expected "${tag}" to validate`);
      });
    });

    it('should return false on incorrect formatted bcp47 locale string', () => {
      const bcp = Bcp47();
      const modTags = without(tags, 'yue'); // remove single language from test
      const malformedTags = union([undefined, null, '', 2, true], modTags.map(tag => { return snakeCase(tag); }));
      malformedTags.forEach(tag => {
        assert.notOk(bcp.validate(tag), `expected "${tag}" to fail validate`);
      });
    });
  });
});
