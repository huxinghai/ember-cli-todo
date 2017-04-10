import Ember from 'ember';

export default Ember.Route.extend({
  breadCrumb: {
    title: "查看"
  },
  model(params){
    return this.store.findRecord("product", params.id)
  },
  setupController(controller, model){
    controller.set("model", model)
  }
});
