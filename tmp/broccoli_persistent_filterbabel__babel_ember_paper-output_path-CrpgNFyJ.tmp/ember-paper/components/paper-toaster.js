define('ember-paper/components/paper-toaster', ['exports', 'ember', 'ember-paper/templates/components/paper-toaster'], function (exports, _ember, _paperToaster) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var computed = _ember.default.computed,
      inject = _ember.default.inject,
      Component = _ember.default.Component;
  exports.default = Component.extend({
    layout: _paperToaster.default,
    tagName: '',
    paperToaster: inject.service(),
    activeToast: computed.reads('paperToaster.activeToast'),

    onClose: function onClose(toast) {
      this.get('paperToaster').cancelToast(toast);
    }
  });
});