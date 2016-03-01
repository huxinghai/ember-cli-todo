/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'todo',
    environment: environment,
    baseURL: '/',
    locationType: 'hash',
    contentSecurityPolicy: {
      'connect-src': "'self' * localhost:3000",
      'img-src': "'self' * data:",
      'style-src': "'self' 'unsafe-inline'"
    },
    EmberENV: {
      FEATURES: {
      }
    },
    APP: {
    }
  };

  ENV.apiHost = "http://localhost:3000";
  ENV.apiNamespace = "/api/v1";

  if (environment === 'development') {
  }

  if (environment === 'test') {
    ENV.baseURL = '/';
    ENV.locationType = 'none';
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
  }

  return ENV;
};
