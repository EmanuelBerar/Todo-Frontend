define('ember-paper/components/paper-grid-tile-footer', ['exports', 'ember', 'ember-paper/templates/components/paper-grid-tile-footer'], function (exports, _ember, _paperGridTileFooter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Component = _ember.default.Component;
  exports.default = Component.extend({
    layout: _paperGridTileFooter.default,
    tagName: 'md-grid-tile-footer'
  });
});