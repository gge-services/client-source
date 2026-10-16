Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __s0local0 = function (__s1param0) {
  function MobileLoginTimeTrackingEvent(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(MobileLoginTimeTrackingEvent, __s1param0);
  MobileLoginTimeTrackingEvent.prototype.getVars = function () {
    var __s5local0 = {
      gameId: this.gameId,
      networkId: this.networkId,
      instanceId: this.instanceID,
      playerId: this.playerID,
      var_1: this.accountID,
      var_2: this.deviceId,
      var_3: this.storeId,
      var_4: this.loginTime,
      var_5: this.downloadRate,
      var_6: this.downloadContentSizeExternal,
      var_7: this.downloadContentSizeLocal
    };
    __s5local0.var_data = this.connectionType + ";" + this.downloadContentAmountExternal + ";" + this.downloadContentAmountLocal + ";" + String(this.sessionType) + ";" + String(this.loginTimeMs);
    return __s5local0;
  };
  MobileLoginTimeTrackingEvent.IS_FIRST_USER = 1;
  MobileLoginTimeTrackingEvent.IS_FIRST_APP_START_AFTER_UPDATE = 2;
  MobileLoginTimeTrackingEvent.IS_REGULAR_USER = 3;
  return MobileLoginTimeTrackingEvent;
}(require("gge-module:class_BasicTrackingEvent").BasicTrackingEvent);
exports.MobileLoginTimeTrackingEvent = __s0local0;
