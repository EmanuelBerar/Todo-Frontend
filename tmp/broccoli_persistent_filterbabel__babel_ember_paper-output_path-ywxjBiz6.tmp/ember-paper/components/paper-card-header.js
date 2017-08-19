define('ember-paper/components/paper-card-header', ['exports', 'ember', 'ember-paper/templates/components/paper-card-header'], function (exports, _ember, _paperCardHeader) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Component = _ember.default.Component;
  exports.default = Component.extend({
    layout: _paperCardHeader.default,
    tagName: 'md-card-header'
  });
});