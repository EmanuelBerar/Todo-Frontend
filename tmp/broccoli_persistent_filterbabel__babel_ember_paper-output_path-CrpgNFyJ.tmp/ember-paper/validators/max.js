define('ember-paper/validators/max', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.max = max;
  var isEmpty = _ember.default.isEmpty;
  function max(value, max) {
    return isEmpty(max) || isEmpty(value) || parseFloat(value) <= parseFloat(max);
  }

  exports.default = {
    param: 'max',
    message: 'Must be less than %@.',
    validate: max
  };
});