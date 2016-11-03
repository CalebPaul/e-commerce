import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(project) {
      var params = {
         current_amount: this.get('current_amount'),
         detail: this.get('detail'),
         email: this.get('email'),
         funded: this.get('funded'),
         goal_amount: this.get('goal_amount'),
         goal_date: this.get('goal_date'),
         image: this.get('image'),
         location: this.get('location'),
         name: this.get('name'),
         owner: this.get('owner')
      };
      this.sendAction('save', params, project);
    },
    save() {
      var params = {
         current_amount: this.get('current_amount'),
         detail: this.get('detail'),
         email: this.get('email'),
         funded: this.get('funded'),
         goal_amount: this.get('goal_amount'),
         goal_date: this.get('goal_date'),
         image: this.get('image'),
         location: this.get('location'),
         name: this.get('name'),
         owner: this.get('owner')
      };
      this.sendAction('save', params);
    },
    delete(project) {
      if(confirm("Are you sure you want to delete this project?")) {
        this.sendAction('delete', project);
      }
    }
  }
});
