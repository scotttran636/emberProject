import Controller from '@ember/controller';
import { match, and, gte, not } from '@ember/object/computed';

export default Controller.extend({

  isValidEmail: match('emailAddress', /^.+@.+\..+$/),
  isMessageEnoughLong: gte('message.length', 5),

  isValid: and('isValidEmail', 'isMessageEnoughLong'),
  isDisabled: not('isValid'),

  actions: {
    sendMessage() {
      var email = this.get('emailAddress');
      var message = this.get('message');

      alert('Sending your message in progress... ');

      var responseMessage = 'To: ' + email + ', Message: ' + message;
      this.set('responseMessage', responseMessage);
      this.set('emailAddress', '');
      this.set('message', '');
    }
  }
});
