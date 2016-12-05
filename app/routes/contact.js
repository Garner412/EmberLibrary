import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('contact');
  },

  actions: {

    saveLibrary(newContact) {
      newContact.save().then(() => this.transitionTo('contact'));
    },

    willTransition() {
      this.controller.get('model').rollbackAttributes();
    }
  }

});
