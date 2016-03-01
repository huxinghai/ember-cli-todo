/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });
  app.import('vendor/bootstrap/css/bootstrap.min.css');
  app.import('vendor/css/AdminLTE.css');
  app.import('vendor/css/_all-skins.min.css');
  app.import('vendor/css/font-awesome.css');
  ["FontAwesome.otf","fontawesome-webfont.eot","fontawesome-webfont.svg","fontawesome-webfont.ttf","fontawesome-webfont.woff","fontawesome-webfont.woff2"].map(function(f){
    var path = "vendor/fonts/" + f
    app.import(path, {destDir: 'fonts'});
  })

  app.import('vendor/plugins/jquery-ui.min.js');
  app.import('vendor/bootstrap/js/bootstrap.min.js');
  app.import('vendor/js/app.js');
  return app.toTree();
};
