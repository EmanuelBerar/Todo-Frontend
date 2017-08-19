define('todo-front/controllers/home', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Controller.extend({
    tasks: _ember.default.computed(function () {
      return this.get('store').findAll('task');
    }),

    todoTasks: _ember.default.computed('tasks.length', function () {
      return this.get('tasks').filterBy('status', 'todo');
    }),
    progressTasks: _ember.default.computed('tasks.length', function () {
      return this.get('tasks').filterBy('status', 'progress');
    }),
    doneTasks: _ember.default.computed('tasks.length', function () {
      return this.get('tasks').filterBy('status', 'done');
    }),

    users: _ember.default.computed(function () {
      return this.get('store').findAll('user');
    }),

    tasktypes: _ember.default.computed(function () {
      return this.get('store').findAll('tasktype');
    }),

    isShowingModal: false,

    actions: {
      deleteTask: function deleteTask(taskid) {
        var store = this.get('store');
        store.findRecord('task', taskid, { backgroundReload: false }).then(function (task) {
          task.destroyRecord();
        });
      },
      addTask: function addTask(taskDescription, userId, tasktypeId) {
        var store = this.get('store');
        var u = this.store.createRecord('task', {
          description: taskDescription,
          status: "todo",
          user: this.store.peekRecord('user', userId),
          tasktype: this.store.peekRecord('tasktype', tasktypeId)
        });
        u.save();
      },
      updateTask: function updateTask() {
        this.store.find('task', 19).then(function (record) {
          record.set('status', 'progress');
          record.save();
        });
      },


      toggleModal: function toggleModal() {
        this.toggleProperty('isShowingModal');
      }

    }
  });
});