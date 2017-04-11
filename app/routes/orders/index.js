import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.query("order", params)
  }, 
  setupController(controller, model){
    controller.set("model", model)
  }
});
