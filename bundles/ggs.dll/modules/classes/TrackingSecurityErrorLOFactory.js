Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __s0local0 = function (__s1param0) {
  function TrackingSecurityErrorLOFactory(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param1, __s3param2) || this;
    __s3local0._eventId = __s3param3;
    __s3local0._eventData = __s3param4;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(TrackingSecurityErrorLOFactory, __s1param0);
  TrackingSecurityErrorLOFactory.prototype.create = function () {
    var __s5local0 = __s1param0.prototype.create.call(this);
    __s5local0.logData.set(TrackingSecurityErrorLOFactory.PARAM_REQUEST_DATA, this._eventId.toString());
    __s5local0.logData.set(TrackingSecurityErrorLOFactory.PARAM_EVENT_DATA, this._eventData);
    return __s5local0;
  };
  TrackingSecurityErrorLOFactory.PARAM_REQUEST_DATA = "requestData";
  TrackingSecurityErrorLOFactory.PARAM_EVENT_DATA = "eventData";
  return TrackingSecurityErrorLOFactory;
}(require("gge-module:class_SecurityErrorLOFactory").SecurityErrorLOFactory);
exports.TrackingSecurityErrorLOFactory = __s0local0;
