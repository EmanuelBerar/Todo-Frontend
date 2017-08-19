define('ember-paper/components/paper-sidenav', ['exports', 'ember', 'ember-paper/templates/components/paper-sidenav'], function (exports, _ember, _paperSidenav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Component = _ember.default.Component,
      computed = _ember.default.computed;
  exports.default = Component.extend({
    layout: _paperSidenav.default,
    tagName: '',

    name: 'default',
    position: 'left',
    lockedOpen: 'gt-sm',
    open: false,
    closed: computed.not('open'),
    closeOnClick: true,

    actions: {
      onToggle: function onToggle() {
        this.sendAction.apply(this, ['onToggle'].concat(Array.prototype.slice.call(arguments)));
      },
      onBackdropTap: function onBackdropTap() {
        this.sendAction('onToggle', false);
      }
    }
  });
});