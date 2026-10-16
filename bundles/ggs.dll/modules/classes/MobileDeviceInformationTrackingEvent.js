Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __s0local0 = function (__s1param0) {
  function MobileDeviceInformationTrackingEvent(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.playerId = -1;
    __s3local0.accountID = "-1";
    __s3local0.context3DProfile = MobileDeviceInformationTrackingEvent.STAGE3D_NOT_SUPPORTED;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(MobileDeviceInformationTrackingEvent, __s1param0);
  MobileDeviceInformationTrackingEvent.prototype.getVars = function () {
    var __s5local0 = {
      playerId: this.playerId,
      var_1: this.trackType,
      var_2: this.accountID,
      var_3: this.store,
      var_4: this.deviceID,
      var_data: this.deviceInfo
    };
    return __s5local0;
  };
  MobileDeviceInformationTrackingEvent.STAGE3D_NOT_SUPPORTED = "stage3DNotSupported";
  MobileDeviceInformationTrackingEvent.TYPE_REGISTER = 1;
  MobileDeviceInformationTrackingEvent.TYPE_LOGIN = 2;
  MobileDeviceInformationTrackingEvent.TYPE_INSTALL = 3;
  return MobileDeviceInformationTrackingEvent;
}(require("gge-module:class_BasicTrackingEvent").BasicTrackingEvent);
exports.MobileDeviceInformationTrackingEvent = __s0local0;
