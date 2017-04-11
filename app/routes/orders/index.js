import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.query("order", params).then((m) => {
      return m
    }, (err) => {
      debugger
      console.error(err.errors)
    })
  }, 
  setupController(controller, model){
    controller.set("model", model)
  }
});
