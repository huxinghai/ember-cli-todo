import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    page: { refreshModel: true },
    limit: { refreshModel: true }
  },
  model(params){
    return this.store.query("product", params)
  },
  setupController(controller, model){
    controller.set("model", model)
  }
});
