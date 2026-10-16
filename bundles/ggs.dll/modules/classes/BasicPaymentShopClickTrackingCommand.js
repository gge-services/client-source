Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_DeviceId = require("gge-module:class_DeviceId");
var __dep_class_BasicTrackingCommand = require("gge-module:class_BasicTrackingCommand");
var __dep_class_BasicModel = require("gge-module:class_BasicModel");
var __dep_class_TrackingCache = require("gge-module:class_TrackingCache");
var __dep_class_TrackingEventIds = require("gge-module:class_TrackingEventIds");
var __dep_class_EnvGlobalsHandler = require("gge-module:class_EnvGlobalsHandler");
var __s0local0 = function (__s1param0) {
  function BasicPaymentShopClickTrackingCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicPaymentShopClickTrackingCommand, __s1param0);
  BasicPaymentShopClickTrackingCommand.prototype.execute = function (__s5param0 = null) {
    if (this.commandIsAllowed) {
      var __s5local0 = __s5param0;
      var __s5local1 = __dep_class_TrackingCache.TrackingCache.getInstance().getEvent(__dep_class_TrackingEventIds.TrackingEventIds.GAME_PAYMENT_SHOP_CLICK);
      __s5local1.sessionId = __s5local0.sessionId.toString();
      __s5local1.date = (__s5local0.sessionId / 1000).toFixed();
      __s5local1.clickSourceId = __s5local0.clickSourceId;
      __s5local1.playerId = __dep_class_BasicModel.BasicModel.userData.playerID;
      __s5local1.deviceId = __dep_class_DeviceId.DeviceId.DESKTOP;
      __s5local1.storeId = __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.storeId;
      __dep_class_TrackingCache.TrackingCache.getInstance().sendEvent(__dep_class_TrackingEventIds.TrackingEventIds.GAME_PAYMENT_SHOP_CLICK);
    }
  };
  return BasicPaymentShopClickTrackingCommand;
}(__dep_class_BasicTrackingCommand.BasicTrackingCommand);
exports.BasicPaymentShopClickTrackingCommand = __s0local0;
