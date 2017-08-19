define('ember-native-dom-helpers/scroll-to', ['exports', 'ember-native-dom-helpers/-private/get-element-with-assert', 'ember-test-helpers/wait'], function (exports, _getElementWithAssert, _wait) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.scrollTo = scrollTo;
  var RSVP = Ember.RSVP;


  var rAF = window.requestAnimationFrame || function (cb) {
    setTimeout(cb, 17);
  };

  /*
    Triggers a paint (and therefore flushes any queued up scroll events).
  
    @method triggerFlushWithPromise
    @return {RSVP.Promise}
    @private
  */
  function waitForScrollEvent() {
    var waitForEvent = new RSVP.Promise(function (resolve) {
      rAF(resolve);
    });
    return waitForEvent.then(function () {
      return (0, _wait.default)();
    });
  }

  /*
    Scrolls DOM element or selector to the given coordinates (if the DOM element is currently overflowed).
    The promise resolves after the scroll event has been triggered.
    @method scrollTo
    @param {String|HTMLElement} selector
    @param {Number} x
    @param {Number} y
    @return {RSVP.Promise}
    @public
  */
  function scrollTo(selector, x, y) {
    var el = (0, _getElementWithAssert.default)(selector);
    el.scrollTop = y;
    el.scrollLeft = x;
    return waitForScrollEvent();
  }
});