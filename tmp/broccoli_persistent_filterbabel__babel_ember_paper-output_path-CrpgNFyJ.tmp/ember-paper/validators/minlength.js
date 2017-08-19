define('ember-paper/validators/minlength', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.minlength = minlength;
  var isEmpty = _ember.default.isEmpty,
      isNone = _ember.default.isNone;
  function minlength(value, minlength) {
    return isEmpty(minlength) || isNone(value) || ('' + value).length >= parseInt(minlength, 10);
  }

  exports.default = {
    param: 'minlength',
    message: 'Must have at least %@ characters.',
    validate: minlength
  };
});