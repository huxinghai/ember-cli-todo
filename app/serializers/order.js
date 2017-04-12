import DS from 'ember-data';
import Application from "./application";

export default Application.extend(DS.EmbeddedRecordsMixin, {
  primaryKey: "order_no",
  attrs: {
    product: {serialize: false, deserialize: 'records'}
  },
  normalizeResponse(store, primaryModelClass, payload, id, requestType){
    let{ code, data, msg } =  payload
    payload[Ember.String.pluralize(primaryModelClass.modelName)] = data.rows
    payload["meta"] = {total_pages: data.total_pages, total_count: data.total_count, page: data.page}
    
    delete payload.data
    delete payload.code  
    delete payload.msg
    return this._super(...arguments)
  }

});