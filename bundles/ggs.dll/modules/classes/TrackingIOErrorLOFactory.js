Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __s0local0 = function (__s1param0) {
  function TrackingIOErrorLOFactory(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param1, __s3param2) || this;
    __s3local0._eventId = __s3param3;
    __s3local0._eventData = __s3param4;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(TrackingIOErrorLOFactory, __s1param0);
  TrackingIOErrorLOFactory.prototype.create = function () {
    var __s5local0 = __s1param0.prototype.create.call(this);
    __s5local0.logData.set(TrackingIOErrorLOFactory.PARAM_REQUEST_DATA, this._eventId.toString());
    __s5local0.logData.set(TrackingIOErrorLOFactory.PARAM_EVENT_DATA, this._eventData);
    return __s5local0;
  };
  TrackingIOErrorLOFactory.PARAM_REQUEST_DATA = "requestData";
  TrackingIOErrorLOFactory.PARAM_EVENT_DATA = "eventData";
  return TrackingIOErrorLOFactory;
}(require("gge-module:class_IOErrorLOFactory").IOErrorLOFactory);
exports.TrackingIOErrorLOFactory = __s0local0;
