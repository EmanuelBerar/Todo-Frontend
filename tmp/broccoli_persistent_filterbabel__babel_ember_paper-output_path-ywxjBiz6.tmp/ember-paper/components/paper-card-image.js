define('ember-paper/components/paper-card-image', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Component = _ember.default.Component;
  exports.default = Component.extend({
    tagName: 'img',
    classNames: ['md-card-image'],
    attributeBindings: ['src', 'title', 'alt']
  });
});