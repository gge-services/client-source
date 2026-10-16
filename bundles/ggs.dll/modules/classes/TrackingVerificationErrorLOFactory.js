Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_ExternalLoggingConstants = require("gge-module:class_ExternalLoggingConstants");
var __s0local0 = function (__s1param0) {
  function TrackingVerificationErrorLOFactory(__s3param0, __s3param1, __s3param2) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._subErrorId = __s3param0;
    __s3local0._trackingCase = __s3param1;
    __s3local0._missingEvents = __s3param2;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(TrackingVerificationErrorLOFactory, __s1param0);
  TrackingVerificationErrorLOFactory.prototype.create = function () {
    var __s5local0 = __s1param0.prototype.create.call(this);
    __s5local0.logData.set(__dep_class_ExternalLoggingConstants.ExternalLoggingConstants.PARAM_LOG_EVENT_ID, TrackingVerificationErrorLOFactory.TRACKING_VERIFICATION_ERROR.toString());
    __s5local0.logData.set(TrackingVerificationErrorLOFactory.PARAM_TRACKING_CASE, this._trackingCase);
    __s5local0.logData.set(TrackingVerificationErrorLOFactory.PARAM_MISSING_EVENTS, this._missingEvents);
    return __s5local0;
  };
  TrackingVerificationErrorLOFactory.TRACKING_EVENTS_MISSING_ERROR = 8001;
  TrackingVerificationErrorLOFactory.TRACKING_VERIFICATION_ERROR = 8;
  TrackingVerificationErrorLOFactory.PARAM_MISSING_EVENTS = "listOfFaultyEvents";
  TrackingVerificationErrorLOFactory.PARAM_TRACKING_CASE = "trackingCase";
  return TrackingVerificationErrorLOFactory;
}(require("gge-module:class_BasicLogObjectFactory").BasicLogObjectFactory);
exports.TrackingVerificationErrorLOFactory = __s0local0;
