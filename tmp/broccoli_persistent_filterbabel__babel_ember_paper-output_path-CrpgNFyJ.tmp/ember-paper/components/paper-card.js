define('ember-paper/components/paper-card', ['exports', 'ember', 'ember-paper/templates/components/paper-card'], function (exports, _ember, _paperCard) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Component = _ember.default.Component;
  exports.default = Component.extend({
    layout: _paperCard.default,
    tagName: 'md-card'
  });
});