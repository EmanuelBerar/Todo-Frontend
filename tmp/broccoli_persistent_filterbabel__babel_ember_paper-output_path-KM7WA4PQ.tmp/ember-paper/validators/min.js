define('ember-paper/validators/min', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.min = min;
  var isEmpty = _ember.default.isEmpty;
  function min(value, min) {
    return isEmpty(min) || isEmpty(value) || parseFloat(value) >= parseFloat(min);
  }

  exports.default = {
    param: 'min',
    message: 'Must be at least %@.',
    validate: min
  };
});