import Controller from '@ember/controller';
import { match, not, gte, and } from '@ember/object/computed';
import Ember from 'ember';

export default Ember.Controller.extend({
  isValidEmail: match('email', /^.+@.+\..+$/),
  isPasswordEnoughLong: gte('password.length', 4),

  isValid: and('isValidEmail', 'isPasswordEnoughLong'),
  isDisabled: not('isValid'),

  actions: {

    signIn(provider) {
      let controller = this;
      this.get('session').open('firebase', {
        provider: provider,
        email: this.get('email') || '',
        password: this.get('password') || '',
      }).then(() => {
        controller.set('email', null);
        controller.set('password', null);
      }, (error) => {
        console.log(error);
      });
    }
  }
  //   session: Ember.inject.service(),
  // beforeModel: function() {
  //   return this.get('session').fetch().catch(function() {});
  // },
  // actions: {
  //   signIn: function(provider) {
  //     this.get('session').open('firebase', { provider: provider}).then(function(data) {
  //       console.log(data.currentUser);
  //     });
  //   },
  //   signOut: function() {
  //     this.get('session').close();
  //   }
  // }
//     login: function() {
//   let { email, password } = this.getProperties('userEmail', 'userPassword');
//   this.get('session').open('firebase', {
//     provider: 'password',
//     email: email,
//     password: password,
//   });
//   this.transitionToRoute('protected');
// },
// },
    //     signIn: function() {
    //         this.get('session').authenticate('authenticator:firebase', {
    //             'email': this.get('email'),
    //             'password': this.get('password')
    //         }).then(function() {
    //             this.transitionToRoute('index');
    //         }.bind(this));
    //     },
    //     logout: function() {
    //         this.get('session').invalidate().then(function() {
    //             this.transitionToRoute('index');
    //         }.bind(this));
    //     }
    // }
});
