import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('project');
  },
  actions: {
    update(params, project) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          project.set(key, params[key]);
        }
      });
      project.save();
      this.transitionTo('admin');
    },
    save(params) {
      var newProject = this.store.createRecord('project', params);
      newProject.save();
      this.transitionTo('admin');
    },
    delete(project) {
      project.destroyRecord();
      this.transitionTo('admin');
    }
  }
});
