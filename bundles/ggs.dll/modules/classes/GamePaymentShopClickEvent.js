Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_BasicTrackingEvent = require("gge-module:class_BasicTrackingEvent");
var __dep_export_AllianceCreate = require("gge-module:export_AllianceCreate");
var __s0local0 = function (__s1param0) {
  function GamePaymentShopClickEvent(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(GamePaymentShopClickEvent, __s1param0);
  GamePaymentShopClickEvent.prototype.getVars = function () {
    return {
      clickSourceId: this.clickSourceId,
      connectionType: this.connectionType,
      deviceId: this.deviceId,
      eventId: __dep_export_AllianceCreate.GamePaymentshopClick.ID,
      event_mapping_version: 2,
      playerId: this.playerId,
      sessionId: parseInt(this.sessionId, 10),
      storeId: this.storeId
    };
  };
  return GamePaymentShopClickEvent;
}(__dep_class_BasicTrackingEvent.BasicTrackingEvent);
exports.GamePaymentShopClickEvent = __s0local0;
