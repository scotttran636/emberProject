'use strict';

module.exports = function(environment) {
  let ENV = {

    // Firebase database
    contentSecurityPolicy: { 'connect-src': "'self' https://auth.firebase.com wss://*.firebaseio.com" },
    firebase: "https://emberproj-4664d.firebaseio.com",
    firebase: {
      apiKey: "AIzaSyD9Khq7sSLjXJjzC9HbZfib_neKUkWHWIA",
      authDomain: "emberproj-4664d.firebaseapp.com",
      databaseURL: "https://emberproj-4664d.firebaseio.com",
      projectId: "emberproj-4664d",
      storageBucket: "emberproj-4664d.appspot.com",
      messagingSenderId: "959873026852"
    },

    torii: {
      sessionServiceName: 'session'
    },

    modulePrefix: 'proj2',
    environment:environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
