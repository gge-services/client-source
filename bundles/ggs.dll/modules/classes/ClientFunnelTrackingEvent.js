Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_export_AllianceCreate = require("gge-module:export_AllianceCreate");
var __dep_class_BasicModel = require("gge-module:class_BasicModel");
var __dep_exact_6fa490d8c1ec56fc = require("gge-module:exact_6fa490d8c1ec56fc");
var __dep_class_EnvGlobalsHandler = require("gge-module:class_EnvGlobalsHandler");
var __s0local0 = function (__s1param0) {
  function ClientFunnelTrackingEvent() {
    var __s3local0 = __s1param0 !== null && __s1param0.apply(this, arguments) || this;
    __s3local0.stage = "";
    __s3local0.gamestate_name = "";
    __s3local0.playerId = -1;
    __s3local0.account_hash = "TestHash";
    __s3local0.gamestate_count_session = 1;
    __s3local0.session_count = 0;
    __s3local0.media_partner_id = -1;
    __s3local0.website_id = -1;
    __s3local0.session_type_name = "UNKNOWN";
    __s3local0.device_language_code = "";
    __s3local0.client_version = "";
    __s3local0.store_id = 0;
    __s3local0.platform_id = 0;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(ClientFunnelTrackingEvent, __s1param0);
  ClientFunnelTrackingEvent.prototype.getVars = function () {
    var __s5local0 = {
      eventId: __dep_export_AllianceCreate.ClientFunnel.ID,
      event_mapping_version: 2,
      playerId: __dep_class_BasicModel.BasicModel.userData ? __dep_class_BasicModel.BasicModel.userData.playerID : -1,
      client_timestamp: __dep_exact_6fa490d8c1ec56fc.int(new Date().getTime() / 1000),
      account_hash: this.account_hash,
      device_id: 1,
      platform_id: __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.platformId,
      device_language_code: this.device_language_code,
      session_type_name: this.session_type_name,
      session_count: this.session_count,
      gamestate_name: this.gamestate_name,
      gamestate_count_session: this.gamestate_count_session++,
      session_length_ms: __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.sessionLength * 1000,
      client_version: this.client_version,
      client_language_code: __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.currentCountryLanguageCode ? __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.currentCountryLanguageCode : "UNKNOWN",
      referrer_name: this.referrer.substr(0, 99),
      is_html5: 1
    };
    __s5local0.user_agent = navigator.userAgent || "Not available";
    if (this.website_id >= 0) {
      __s5local0.website_id = this.website_id;
    }
    if (this.media_partner_id > 0) {
      __s5local0.media_partner_id = this.media_partner_id;
    }
    return __s5local0;
  };
  return ClientFunnelTrackingEvent;
}(require("gge-module:class_BasicTrackingEvent").BasicTrackingEvent);
exports.ClientFunnelTrackingEvent = __s0local0;
