define('ember-paper/components/paper-card-media', ['exports', 'ember', 'ember-paper/templates/components/paper-card-media'], function (exports, _ember, _paperCardMedia) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Component = _ember.default.Component;
  exports.default = Component.extend({
    layout: _paperCardMedia.default,
    tagName: '',
    size: 'md'
  });
});