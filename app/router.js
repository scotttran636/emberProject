import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('cart');
  this.route('checkout');
  this.route('thankyou');
  this.route('home');
  this.route('register');
  this.route('productpage');
  this.route('creditcard');
});

export default Router;
