import Ember from 'ember';

export default Ember.Controller.extend({

  users: Ember.computed(function() {
    return this.get('store').findAll('user');
  }),

  tasktypes: Ember.computed(function() {
    return this.get('store').findAll('tasktype');
  }),

    actions: {

  addUser(userName){
       const us = this.store.createRecord('user', {
         name: userName
       });
       us.save();
     },

    addTaskType(taskTypeName){
       const tt = this.store.createRecord('tasktype', {
         name: taskTypeName
       });
       tt.save();
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
