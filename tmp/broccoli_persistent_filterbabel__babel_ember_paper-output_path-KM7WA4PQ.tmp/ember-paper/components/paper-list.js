define('ember-paper/components/paper-list', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Component = _ember.default.Component;
  exports.default = Component.extend({
    tagName: 'md-list',
    classNames: ['md-default-theme']
  });
});