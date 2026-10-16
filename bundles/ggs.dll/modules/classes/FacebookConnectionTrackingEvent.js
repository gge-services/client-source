Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_BasicTrackingEvent = require("gge-module:class_BasicTrackingEvent");
var __dep_export_AllianceCreate = require("gge-module:export_AllianceCreate");
var __s0local0 = function (__s1param0) {
  function FacebookConnectionTrackingEvent(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(FacebookConnectionTrackingEvent, __s1param0);
  FacebookConnectionTrackingEvent.prototype.getVars = function () {
    return {
      eventId: __dep_export_AllianceCreate.FacebookConnection.ID,
      facebook_connection_state: this.facebookExternalState,
      game_level: this.gameLevel,
      playerId: this.playerId,
      timestamp: this.timestamp,
      user_external_id: this.facebookId
    };
  };
  return FacebookConnectionTrackingEvent;
}(__dep_class_BasicTrackingEvent.BasicTrackingEvent);
exports.FacebookConnectionTrackingEvent = __s0local0;
