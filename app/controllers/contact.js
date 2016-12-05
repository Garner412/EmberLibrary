import Ember from 'ember';

export default Ember.Controller.extend({

  isValidEmail: Ember.computed.match('model.email', /^.+@.+\..+$/),
  isMessageEnoughLong: Ember.computed.gte('model.message.length', 5),

  isValid: Ember.computed.and('isValidEmail', 'isMessageEnoughLong'),

  actions: {
    sendMessage: function() {
      var email = this.get('model.email');
      var message = this.get('model.message');

      var newContact = this.store.createRecord('contact', {
        email: email,
        message: message
      });

      newContact.save().then(() => {
      var responseMessage = 'From: ' + email + ', Message: ' + message;
      this.set('responseMessage', responseMessage);
      this.set('model.email', '');
      this.set('model.message', '');
      });
    }
  }
});