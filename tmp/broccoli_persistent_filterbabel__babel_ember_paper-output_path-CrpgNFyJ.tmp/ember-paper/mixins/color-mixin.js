define('ember-paper/mixins/color-mixin', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Mixin = _ember.default.Mixin;
  exports.default = Mixin.create({
    classNameBindings: ['warn:md-warn', 'accent:md-accent', 'primary:md-primary']
  });
});