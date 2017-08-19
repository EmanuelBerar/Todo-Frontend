define('ember-paper/components/paper-card-header-headline', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Component = _ember.default.Component;
  exports.default = Component.extend({
    tagName: 'span',
    classNames: ['md-headline']
  });
});