import Ember from 'ember';
import ProductObject from "../../objects/product"

export default Ember.Controller.extend({

  init: function(){
    this.obj = ProductObject.create()
  },
  amountTotal: Ember.computed("obj.price", "obj.amount", function(){
    return this.obj.get("price") * this.obj.get("amount")
  }),
  actions: {
    create: function(){
      var me = this,
        model = this.store.createRecord("product", {
          name: this.obj.get("name"),
          price: this.obj.get("price"),
          amount: this.obj.get("amount")
        });

      model.save().then(function(){
        me.transitionToRoute("/products");
      }, function(err){
        console.error(error)
      })
    }
  }
});
