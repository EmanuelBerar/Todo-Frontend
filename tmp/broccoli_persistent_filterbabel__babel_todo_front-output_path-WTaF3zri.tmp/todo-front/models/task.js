define('todo-front/models/task', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    description: _emberData.default.attr(),
    status: _emberData.default.attr(),
    user: _emberData.default.belongsTo('user'),
    tasktype: _emberData.default.belongsTo('tasktype')
  });
});