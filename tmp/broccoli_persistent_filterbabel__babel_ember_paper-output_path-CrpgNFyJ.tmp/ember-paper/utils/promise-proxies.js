define('ember-paper/utils/promise-proxies', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.PromiseObject = exports.PromiseArray = undefined;
  exports.promiseObject = promiseObject;
  exports.promiseArray = promiseArray;
  var Promise = _ember.default.RSVP.Promise,
      ArrayProxy = _ember.default.ArrayProxy,
      ObjectProxy = _ember.default.ObjectProxy,
      PromiseProxyMixin = _ember.default.PromiseProxyMixin;


  // See http://emberjs.com/api/data/classes/DS.PromiseArray.html
  var PromiseArray = exports.PromiseArray = ArrayProxy.extend(PromiseProxyMixin);
  // See http://emberjs.com/api/data/classes/DS.PromiseObject.html
  var PromiseObject = exports.PromiseObject = ObjectProxy.extend(PromiseProxyMixin);

  function promiseObject(promise, label) {
    return PromiseObject.create({
      promise: Promise.resolve(promise, label)
    });
  }

  function promiseArray(promise, label) {
    return PromiseArray.create({
      promise: Promise.resolve(promise, label)
    });
  }
});