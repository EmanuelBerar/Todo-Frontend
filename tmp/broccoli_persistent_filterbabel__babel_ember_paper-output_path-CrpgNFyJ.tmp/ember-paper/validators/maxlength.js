define('ember-paper/validators/maxlength', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.maxlength = maxlength;
  var isEmpty = _ember.default.isEmpty,
      isNone = _ember.default.isNone;
  function maxlength(value, maxlength) {
    return isEmpty(maxlength) || isNone(value) || ('' + value).length <= parseInt(maxlength, 10);
  }

  exports.default = {
    param: 'maxlength',
    message: 'Must not exceed %@ characters.',
    validate: maxlength
  };
});