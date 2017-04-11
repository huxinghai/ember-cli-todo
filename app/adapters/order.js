import Application from "./application";

export default Application.extend({
  handleResponse(status, headers, payload){
    if(!this.isSuccess(status) || !this.isSuccess(payload.code)) {
      return new DS.InvalidError(DS.errorsHashToArray(payload.msg));
    } else {
      return this._super(...arguments);
    }
  }
})