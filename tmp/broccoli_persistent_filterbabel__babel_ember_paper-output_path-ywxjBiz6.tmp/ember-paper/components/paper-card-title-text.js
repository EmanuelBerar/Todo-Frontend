define('ember-paper/components/paper-card-title-text', ['exports', 'ember', 'ember-paper/templates/components/paper-card-title-text'], function (exports, _ember, _paperCardTitleText) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Component = _ember.default.Component;
  exports.default = Component.extend({
    layout: _paperCardTitleText.default,
    tagName: 'md-card-title-text'
  });
});