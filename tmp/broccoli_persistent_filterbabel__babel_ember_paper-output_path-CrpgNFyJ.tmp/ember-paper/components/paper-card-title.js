define('ember-paper/components/paper-card-title', ['exports', 'ember', 'ember-paper/templates/components/paper-card-title'], function (exports, _ember, _paperCardTitle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Component = _ember.default.Component;
  exports.default = Component.extend({
    layout: _paperCardTitle.default,
    tagName: 'md-card-title'
  });
});