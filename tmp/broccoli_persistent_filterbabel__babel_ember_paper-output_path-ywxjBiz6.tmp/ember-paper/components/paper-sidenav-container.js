define('ember-paper/components/paper-sidenav-container', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Component = _ember.default.Component,
      htmlSafe = _ember.default.String.htmlSafe;
  exports.default = Component.extend({
    classNames: ['flex', 'layout-row'],
    attributeBindings: ['style'],
    style: htmlSafe('overflow: hidden')
  });
});