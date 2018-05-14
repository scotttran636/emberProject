import Controller from '@ember/controller';
import { match, not, gte, and } from '@ember/object/computed';
import { inject } from '@ember/service';

export default Controller.extend({

  isValidEmail: match('userEmail', /^.+@.+\..+$/),
  isPasswordEnoughLong: gte('userPassword.length', 4),

  isValid: and('isValidEmail', 'isPasswordEnoughLong'),
  isDisabled: not('isValid'),

  firebaseApp: inject.service(),

  // isValidEmail: match('emailAddress', /^.+@.+\..+$/),
  // isUsernameEnoughLong: gte('username.length', 4),
  // isPasswordEnoughLong: gte('password.length', 4),
  //
  // isValid: and('isValidEmail', 'isUsernameEnoughLong'),
  // isValid2: and('isValid', 'isPasswordEnoughLong'),
  // isDisabled: not('isValid2'),
  //
  // actions: {
  //   saveUser() {
  //     var email = this.get('emailAddress');
  //     var username = this.get('username');
  //     var password = this.get('password');
  //
  //     var newUser = this.store.createRecord('user', {
  //       username: username,
  //       password: password,
  //       email: email
  //     });
  //     newUser.save();
  //     alert('Your account has been created!');
  //     var responseMessage = 'An email has been sent to: ' + email;
  //     this.set('responseMessage', responseMessage);
  //     this.set('emailAddress', '');
  //     this.set('username', '');
  //     this.set('password', '');
  //   }
  // }
  //
  actions: {
//     signUp() {
//       let controller = this;
//       this.get('firebase').createUser({
//         email: this.get('email') || '',
//         password: this.get('password') || '',
//       }, (error, data) => {
//         if (error) {
//           console.log(error);
//         } else {
//           controller.set('email', null);
//           controller.set('password', null);
//         }
//       });
//     }
//   }
// });
    signUp() {

      let { email, password } = this.getProperties('userEmail', 'userPassword');
      const auth = this.get('firebaseApp').auth();
      auth.createUserWithEmailAndPassword(email, password).then((userResponse) => {
        const user = this.store.createRecord('user', {
          id: userResponse.uid,
          email: userResponse.email
        })
        return user.save().then(() => {
          alert('Your account has been created!');
          this.set('userEmail', '');
          this.set('userPassword', '');
          this.transitionTo('index');
        });
      });


    }
  }
});
