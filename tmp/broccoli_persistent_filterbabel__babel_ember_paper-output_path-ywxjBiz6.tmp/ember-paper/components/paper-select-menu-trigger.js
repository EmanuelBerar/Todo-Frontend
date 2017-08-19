define('ember-paper/components/paper-select-menu-trigger', ['exports', 'ember', 'ember-basic-dropdown/components/basic-dropdown/trigger'], function (exports, _ember, _trigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var computed = _ember.default.computed;
  exports.default = _trigger.default.extend({
    tagName: 'md-select',
    attributeBindings: ['disabledAttr:disabled', 'required'],
    disabledAttr: computed('disabled', function () {
      return this.get('disabled') ? 'disabled' : null;
    })
  });
});