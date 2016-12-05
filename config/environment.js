/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'library-app',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    var ENV = {
      locationType: 'auto',
      // ...
      firebase: {
        apiKey: 'AIzaSyDEa2dHCaobuIjJ8xYQQwn69OTO8-_gURY',
        authDomain: 'emberlibrary-e9358.firebaseapp.com',
        databaseURL: 'https://emberlibrary-e9358.firebaseio.com/',
        storageBucket: 'emberlibrary-e9358.appspot.com',
      },


      // if using ember-cli-content-security-policy
      contentSecurityPolicy: {
        'script-src': "'self' 'unsafe-eval' apis.google.com",
        'frame-src': "'self' https://*.firebaseapp.com",
        'connect-src': "'self' wss://*.firebaseio.com https://*.googleapis.com"
      },
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
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_TRANSITIONS = true;
    ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
