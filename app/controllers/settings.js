import Ember from 'ember';

export default Ember.Controller.extend({

  users: Ember.computed(function() {
    return this.get('store').findAll('user');
  }),

  tasktypes: Ember.computed(function() {
    return this.get('store').findAll('tasktype');
  }),

  newUser: null,
  newTaskType: null,

  actions: {

  addUser(newUser){
       const us = this.store.createRecord('user', {
         name: newUser
       });
       us.save();
       this.set('newUser', '');
     },

  addTaskType(newTaskType){
       const tt = this.store.createRecord('tasktype', {
         name: newTaskType
       });
       tt.save();
       this.set('newTaskType', '');
     },
   deleteuser(userid) {
      let store = this.get('store');
      store.findRecord('user', userid, { backgroundReload: false }).then(function(user) {
      user.deleteRecord();
      user.get('isDeleted');
      user.save();
      });
    },

  deletetasktype(tasktypeid) {
      let store = this.get('store');
      store.findRecord('tasktype', tasktypeid, { backgroundReload: false }).then(function(tasktype) {
      tasktype.deleteRecord();
      tasktype.get('isDeleted');
      tasktype.save();
      });
    }
  }
});
