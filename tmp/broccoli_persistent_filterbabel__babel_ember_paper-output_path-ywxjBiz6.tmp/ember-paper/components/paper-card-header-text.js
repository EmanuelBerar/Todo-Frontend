define('ember-paper/components/paper-card-header-text', ['exports', 'ember', 'ember-paper/templates/components/paper-card-header-text'], function (exports, _ember, _paperCardHeaderText) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Component = _ember.default.Component;
  exports.default = Component.extend({
    layout: _paperCardHeaderText.default,
    tagName: 'md-card-header-text'
  });
});