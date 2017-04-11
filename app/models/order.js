import DS from 'ember-data';

const { attr, belongsTo } = DS;

export default DS.Model.extend({
  order_status: attr(),
  pay_status: attr(),
  amount: attr(),
  order_no: attr(),
  product: belongsTo("product")
});
