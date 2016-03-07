import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('products', function() {
    this.route('new');
    this.route('show', {path: "/:id"});
  });
  this.route('orders', function() {});
});

export default Router;
