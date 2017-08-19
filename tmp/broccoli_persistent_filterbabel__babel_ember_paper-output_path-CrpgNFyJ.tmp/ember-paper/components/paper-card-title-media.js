define('ember-paper/components/paper-card-title-media', ['exports', 'ember', 'ember-paper/templates/components/paper-card-title-media'], function (exports, _ember, _paperCardTitleMedia) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Component = _ember.default.Component;
  exports.default = Component.extend({
    layout: _paperCardTitleMedia.default,
    tagName: 'md-card-title-media',
    size: 'md'
  });
});