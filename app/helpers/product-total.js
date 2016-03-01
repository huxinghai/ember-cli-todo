import Ember from "ember"

export default Ember.Helper.helper((args) => {
  var price = args[0],
    amount = args[1];

    return price * amount
})