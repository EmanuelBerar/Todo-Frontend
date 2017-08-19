define('ember-paper/mixins/parent-mixin', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Mixin = _ember.default.Mixin,
      computed = _ember.default.computed,
      A = _ember.default.A;
  exports.default = Mixin.create({
    childComponents: computed(function () {
      return A();
    }),

    register: function register(child) {
      this.get('childComponents').pushObject(child);
    },
    unregister: function unregister(child) {
      this.get('childComponents').removeObject(child);
    }
  });
});