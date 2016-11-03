import Ember from 'ember';

export default Ember.Component.extend({
    wishlist: Ember.inject.service(),

    actions: {
      removeFromWishlist(item) {
        if(confirm("Sre you sure you want to remove this project?")) {
            this.get('wishlist').remove(item);
        }
    }
  }
});
