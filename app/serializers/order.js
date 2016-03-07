import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  primaryKey: "order_no",
  extract(store, primaryModelClass, payload, id, requestType) {
    payload.orders = payload.data.list
    return this._super(...arguments);
  }
});