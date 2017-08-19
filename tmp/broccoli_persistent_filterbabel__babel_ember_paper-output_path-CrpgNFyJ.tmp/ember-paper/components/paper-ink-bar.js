define('ember-paper/components/paper-ink-bar', ['exports', 'ember', 'ember-paper/templates/components/paper-nav-ink-bar'], function (exports, _ember, _paperNavInkBar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var computed = _ember.default.computed,
      Component = _ember.default.Component,
      htmlSafe = _ember.default.String.htmlSafe;
  exports.default = Component.extend({
    layout: _paperNavInkBar.default,

    tagName: 'md-ink-bar',

    attributeBindings: ['style'],
    classNameBindings: ['movingRight:md-right:md-left'],

    style: computed('left', 'right', function () {
      return htmlSafe('left: ' + this.get('left') + 'px; right: ' + this.get('right') + 'px;');
    })
  });
});