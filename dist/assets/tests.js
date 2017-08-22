'use strict';

define('todo-front/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/home.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/home.js should pass ESLint\n\n47:11 - \'store\' is assigned a value but never used. (no-unused-vars)');
  });

  QUnit.test('controllers/settings.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/settings.js should pass ESLint\n\n');
  });

  QUnit.test('models/task.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/task.js should pass ESLint\n\n');
  });

  QUnit.test('models/tasktype.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/tasktype.js should pass ESLint\n\n');
  });

  QUnit.test('models/user.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/user.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/home.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/home.js should pass ESLint\n\n');
  });

  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });

  QUnit.test('routes/settings.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/settings.js should pass ESLint\n\n');
  });
});
define('todo-front/tests/helpers/data-transfer', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var c = _ember.default.Object.extend({
    getData: function getData() {
      return this.get('payload');
    },

    setData: function setData(dataType, payload) {
      this.set("data", { dataType: dataType, payload: payload });
    }
  });

  c.reopenClass({
    makeMockEvent: function makeMockEvent(payload) {
      var transfer = this.create({ payload: payload });
      var res = { dataTransfer: transfer };
      res.originalEvent = res;
      res.originalEvent.preventDefault = function () {
        console.log('prevent default');
      };
      res.originalEvent.stopPropagation = function () {
        console.log('stop propagation');
      };
      return res;
    },

    createDomEvent: function createDomEvent(type) {
      var event = document.createEvent("CustomEvent");
      event.initCustomEvent(type, true, true, null);
      event.dataTransfer = {
        data: {},
        setData: function setData(type, val) {
          this.data[type] = val;
        },
        getData: function getData(type) {
          return this.data[type];
        }
      };
      return event;
    }
  });

  exports.default = c;
});
define('todo-front/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    _ember.default.run(application, 'destroy');
  }
});
define('todo-front/tests/helpers/drag-drop', ['exports', 'ember-native-dom-helpers', 'todo-front/tests/helpers/mock-event'], function (exports, _emberNativeDomHelpers, _mockEvent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.drag = undefined;

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  var dragOver = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(dropSelector, moves) {
      var _this = this;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              moves = moves || [[{ clientX: 1, clientY: 1 }, dropSelector]];
              return _context2.abrupt('return', moves.forEach(function () {
                var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee(_ref2) {
                  var _ref4 = _slicedToArray(_ref2, 2),
                      position = _ref4[0],
                      selector = _ref4[1];

                  var event;
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          event = new _mockEvent.default(position);
                          _context.next = 3;
                          return (0, _emberNativeDomHelpers.triggerEvent)(selector || dropSelector, 'dragover', event);

                        case 3:
                        case 'end':
                          return _context.stop();
                      }
                    }
                  }, _callee, _this);
                }));

                return function (_x3) {
                  return _ref3.apply(this, arguments);
                };
              }()));

            case 2:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    return function dragOver(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  var drop = function () {
    var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(dragHandle, dragEvent, options) {
      var dropSelector, location, dragOverMoves, dropElement, event;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              dropSelector = options.drop, location = options.location, dragOverMoves = options.dragOverMoves;
              _context3.next = 3;
              return (0, _emberNativeDomHelpers.find)(dropSelector);

            case 3:
              dropElement = _context3.sent;

              if (dropElement) {
                _context3.next = 6;
                break;
              }

              throw 'There are no drop targets by the given selector: \'' + dropSelector + '\'';

            case 6:
              _context3.next = 8;
              return dragOver(dropSelector, dragOverMoves);

            case 8:
              if (!options.beforeDrop) {
                _context3.next = 11;
                break;
              }

              _context3.next = 11;
              return options.beforeDrop.call();

            case 11:
              event = new _mockEvent.default().useDataTransferData(dragEvent);
              _context3.next = 14;
              return (0, _emberNativeDomHelpers.triggerEvent)(dropSelector, 'drop', event);

            case 14:
              _context3.next = 16;
              return (0, _emberNativeDomHelpers.triggerEvent)(dragHandle, 'dragend', location);

            case 16:
              return _context3.abrupt('return', _context3.sent);

            case 17:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    return function drop(_x4, _x5, _x6) {
      return _ref5.apply(this, arguments);
    };
  }();

  var drag = exports.drag = function () {
    var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(cssPath) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var dragEvent;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              dragEvent = new _mockEvent.default();
              _context4.next = 3;
              return (0, _emberNativeDomHelpers.triggerEvent)(cssPath, 'mouseover');

            case 3:
              _context4.next = 5;
              return (0, _emberNativeDomHelpers.triggerEvent)(cssPath, 'dragstart', dragEvent);

            case 5:
              if (!options.afterDrag) {
                _context4.next = 8;
                break;
              }

              _context4.next = 8;
              return options.afterDrag.call();

            case 8:
              if (!options.drop) {
                _context4.next = 11;
                break;
              }

              _context4.next = 11;
              return drop(cssPath, dragEvent, options);

            case 11:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    return function drag(_x8) {
      return _ref6.apply(this, arguments);
    };
  }();
});
define('todo-front/tests/helpers/ember-basic-dropdown', ['exports', 'ember-basic-dropdown/test-support/helpers', 'ember-native-dom-helpers'], function (exports, _helpers, _emberNativeDomHelpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.nativeClick = exports.fireKeydown = exports.tapTrigger = exports.clickTrigger = exports.nativeTap = undefined;
  Object.defineProperty(exports, 'nativeTap', {
    enumerable: true,
    get: function () {
      return _helpers.nativeTap;
    }
  });
  Object.defineProperty(exports, 'clickTrigger', {
    enumerable: true,
    get: function () {
      return _helpers.clickTrigger;
    }
  });
  Object.defineProperty(exports, 'tapTrigger', {
    enumerable: true,
    get: function () {
      return _helpers.tapTrigger;
    }
  });
  Object.defineProperty(exports, 'fireKeydown', {
    enumerable: true,
    get: function () {
      return _helpers.fireKeydown;
    }
  });
  exports.default = _helpers.default;
  var nativeClick = exports.nativeClick = _emberNativeDomHelpers.click;
});
define('todo-front/tests/helpers/ember-drag-drop', ['exports', 'ember', 'todo-front/tests/helpers/data-transfer'], function (exports, _ember, _dataTransfer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.drag = drag;
  var $ = _ember.default.$;


  function drop($dragHandle, dropCssPath, dragEvent) {
    var $dropTarget = $(dropCssPath);

    if ($dropTarget.length === 0) {
      throw 'There are no drop targets by the given selector: \'' + dropCssPath + '\'';
    }

    _ember.default.run(function () {
      triggerEvent($dropTarget, 'dragover', _dataTransfer.default.makeMockEvent());
    });

    _ember.default.run(function () {
      triggerEvent($dropTarget, 'drop', _dataTransfer.default.makeMockEvent(dragEvent.dataTransfer.get('data.payload')));
    });

    _ember.default.run(function () {
      triggerEvent($dragHandle, 'dragend', _dataTransfer.default.makeMockEvent());
    });
  }

  function drag(cssPath) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var dragEvent = _dataTransfer.default.makeMockEvent();
    var $dragHandle = $(cssPath);

    _ember.default.run(function () {
      triggerEvent($dragHandle, 'mouseover');
    });

    _ember.default.run(function () {
      triggerEvent($dragHandle, 'dragstart', dragEvent);
    });

    andThen(function () {
      if (options.beforeDrop) {
        options.beforeDrop.call();
      }
    });

    andThen(function () {
      if (options.drop) {
        drop($dragHandle, options.drop, dragEvent);
      }
    });
  }
});
define('todo-front/tests/helpers/ember-power-select', ['exports', 'ember-power-select/test-support/helpers'], function (exports, _helpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.selectChoose = exports.touchTrigger = exports.nativeTouch = exports.clickTrigger = exports.typeInSearch = exports.triggerKeydown = exports.nativeMouseUp = exports.nativeMouseDown = exports.findContains = undefined;
  Object.defineProperty(exports, 'findContains', {
    enumerable: true,
    get: function () {
      return _helpers.findContains;
    }
  });
  Object.defineProperty(exports, 'nativeMouseDown', {
    enumerable: true,
    get: function () {
      return _helpers.nativeMouseDown;
    }
  });
  Object.defineProperty(exports, 'nativeMouseUp', {
    enumerable: true,
    get: function () {
      return _helpers.nativeMouseUp;
    }
  });
  Object.defineProperty(exports, 'triggerKeydown', {
    enumerable: true,
    get: function () {
      return _helpers.triggerKeydown;
    }
  });
  Object.defineProperty(exports, 'typeInSearch', {
    enumerable: true,
    get: function () {
      return _helpers.typeInSearch;
    }
  });
  Object.defineProperty(exports, 'clickTrigger', {
    enumerable: true,
    get: function () {
      return _helpers.clickTrigger;
    }
  });
  Object.defineProperty(exports, 'nativeTouch', {
    enumerable: true,
    get: function () {
      return _helpers.nativeTouch;
    }
  });
  Object.defineProperty(exports, 'touchTrigger', {
    enumerable: true,
    get: function () {
      return _helpers.touchTrigger;
    }
  });
  Object.defineProperty(exports, 'selectChoose', {
    enumerable: true,
    get: function () {
      return _helpers.selectChoose;
    }
  });
  exports.default = _helpers.default;
});
define('todo-front/tests/helpers/mock-event', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.createDomEvent = createDomEvent;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var DataTransfer = function () {
    function DataTransfer() {
      _classCallCheck(this, DataTransfer);

      this.data = {};
    }

    _createClass(DataTransfer, [{
      key: 'setData',
      value: function setData(type, value) {
        this.data[type] = value;
        return this;
      }
    }, {
      key: 'getData',
      value: function getData() {
        var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Text";

        return this.data[type];
      }
    }, {
      key: 'setDragImage',
      value: function setDragImage() {}
    }]);

    return DataTransfer;
  }();

  var MockEvent = function () {
    function MockEvent() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, MockEvent);

      this.dataTransfer = new DataTransfer();
      this.dataTransfer.setData('Text', options.dataTransferData);
      this.originalEvent = this;
      this.setProperties(options);
    }

    _createClass(MockEvent, [{
      key: 'useDataTransferData',
      value: function useDataTransferData(otherEvent) {
        this.dataTransfer.setData('Text', otherEvent.dataTransfer.getData());
        return this;
      }
    }, {
      key: 'setProperties',
      value: function setProperties(props) {
        for (var prop in props) {
          this[prop] = props[prop];
        }
        return this;
      }
    }, {
      key: 'preventDefault',
      value: function preventDefault() {}
    }, {
      key: 'stopPropagation',
      value: function stopPropagation() {}
    }]);

    return MockEvent;
  }();

  exports.default = MockEvent;
  function createDomEvent(type) {
    var event = document.createEvent("CustomEvent");
    event.initCustomEvent(type, true, true, null);
    event.dataTransfer = new DataTransfer();
    return event;
  }
});
define('todo-front/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'todo-front/tests/helpers/start-app', 'todo-front/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };

  var resolve = _ember.default.RSVP.resolve;
});
define('todo-front/tests/helpers/resolver', ['exports', 'todo-front/resolver', 'todo-front/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('todo-front/tests/helpers/start-app', ['exports', 'ember', 'todo-front/app', 'todo-front/config/environment'], function (exports, _ember, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = _ember.default.merge({}, _environment.default.APP);
    attributes = _ember.default.merge(attributes, attrs); // use defaults, but you can override;

    return _ember.default.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('todo-front/tests/test-helper', ['todo-front/tests/helpers/resolver', 'ember-qunit', 'ember-cli-qunit'], function (_resolver, _emberQunit, _emberCliQunit) {
  'use strict';

  (0, _emberQunit.setResolver)(_resolver.default);
  (0, _emberCliQunit.start)();
});
define('todo-front/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/adapters/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/home-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/home-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/task-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/task-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/user-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/user-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/home-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/home-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/settings-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/settings-test.js should pass ESLint\n\n');
  });
});
define('todo-front/tests/unit/adapters/application-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('adapter:application', 'Unit | Adapter | application', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('todo-front/tests/unit/controllers/home-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:home', 'Unit | Controller | home', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('todo-front/tests/unit/models/task-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('task', 'Unit | Model | task', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('todo-front/tests/unit/models/user-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('user', 'Unit | Model | user', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('todo-front/tests/unit/routes/home-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:home', 'Unit | Route | home', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('todo-front/tests/unit/routes/index-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('todo-front/tests/unit/routes/settings-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:settings', 'Unit | Route | settings', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
require('todo-front/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
