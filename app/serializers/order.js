import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  primaryKey: "order_no",
  attrs: {
    product: {serialize: false, deserialize: 'records'}
  },
  extract(store, primaryModelClass, payload, id, requestType){
    let{ code, data, msg } =  payload
    payload[Ember.String.pluralize(primaryModelClass.modelName)] = data.rows
    payload["meta"] = {total_pages: data.total_pages, total_count: data.total_count, page: data.page}
    delete payload.data  
    return this._super(...arguments)
  }

});