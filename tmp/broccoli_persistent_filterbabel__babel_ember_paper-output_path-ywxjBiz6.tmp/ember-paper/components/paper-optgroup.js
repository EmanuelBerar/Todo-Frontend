define('ember-paper/components/paper-optgroup', ['exports', 'ember', 'ember-paper/templates/components/paper-optgroup'], function (exports, _ember, _paperOptgroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Component = _ember.default.Component;
  exports.default = Component.extend({
    layout: _paperOptgroup.default,
    tagName: 'md-optgroup',
    attributeBindings: ['label']
  });
});