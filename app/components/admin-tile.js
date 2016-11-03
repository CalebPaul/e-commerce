import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(params, project) {
  
      this.sendAction('update', params, project);
    },

    delete(project) {
      if(confirm("Are you sure you want to delete this project?")) {
        this.sendAction('delete', project);
      }
    }
  }
});
