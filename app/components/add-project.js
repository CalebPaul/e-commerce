import Ember from 'ember';

export default Ember.Component.extend({
  formShow: false,

  actions: {
    showAddForm() {
      this.set('formShow', true);
    },

    save() {
      var params = {
         current_amount: 0,
         detail: this.get('detail'),
         email: this.get('email'),
         funded: false,
         goal_amount: this.get('goal_amount'),
         goal_date: this.get('goal_date'),
         image: this.get('image'),
         location: this.get('location'),
         name: this.get('name'),
         owner: this.get('owner')
      };
      this.sendAction('save', params);
    }


  }
});
