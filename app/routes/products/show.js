import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord("product", params.id)
  },
  setupController(controller, model){
    controller.set("model", model)
  }
});
