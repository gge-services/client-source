Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_CSSMouseCursor = require("gge-module:export_CSSMouseCursor");
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __dep_exact_6fa490d8c1ec56fc = require("gge-module:exact_6fa490d8c1ec56fc");
var __dep_class_ClientFunnelTrackingEvent = require("gge-module:class_ClientFunnelTrackingEvent");
var __dep_class_EnvGlobalsHandler = require("gge-module:class_EnvGlobalsHandler");
var __dep_class_SessionTypes = require("gge-module:class_SessionTypes");
var __dep_class_TrackingEventIds = require("gge-module:class_TrackingEventIds");
var __dep_class_TrackingCache = require("gge-module:class_TrackingCache");
var __dep_class_ClientFunnelGameStates = require("gge-module:class_ClientFunnelGameStates");
var __dep_class_ClientFunnelPlayTimeController = require("gge-module:class_ClientFunnelPlayTimeController");
var __s0local0 = __dep_export_LoggerConfigurator.getLogger("Tracking.ClientFunnelTrackingController");
var __s0local1 = function () {
  function ClientFunnelTrackingController(__s3param0) {
    this.env = __s3param0;
    var __s3local0;
    var __s3local1 = new __dep_class_ClientFunnelTrackingEvent.ClientFunnelTrackingEvent(this.env.referrer);
    __s3local1.client_version = this.env.buildNumberGame;
    __s3local1.device_language_code = __dep_export_CSSMouseCursor.Capabilities.language;
    __s3local1.account_hash = this.env.accountId;
    __s3local1.session_count = __dep_exact_6fa490d8c1ec56fc.int(this.env.accountCookie.sessionCount);
    __s3local1.website_id = parseInt(this.env.urlVariables.extendedWebsiteID);
    __s3local1.media_partner_id = parseInt(this.env.campainVars.extendedPartnerID);
    __s3local1.platform_id = __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.platformId;
    switch (this.env.accountCookie.sessionType) {
      case __dep_class_SessionTypes.SessionTypes.FIRST_SESSION:
        __s3local0 = "FIRST_SESSION";
        break;
      case __dep_class_SessionTypes.SessionTypes.FIRST_SESSION_AFTER_UPDATE:
        __s3local0 = "FIRST_SESSION_AFTER_UPDATE";
        break;
      case __dep_class_SessionTypes.SessionTypes.REGULAR_SESSION:
      default:
        __s3local0 = "REGULAR_SESSION";
    }
    __s3local1.session_type_name = __s3local0;
    __dep_class_TrackingCache.TrackingCache.getInstance().cacheEvent(__dep_class_TrackingEventIds.TrackingEventIds.CLIENT_FUNNEL, __s3local1);
  }
  ClientFunnelTrackingController.getInstance = function () {
    ClientFunnelTrackingController.instance ||= new ClientFunnelTrackingController(__dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals);
    return ClientFunnelTrackingController.instance;
  };
  Object.defineProperty(ClientFunnelTrackingController.prototype, "stage", {
    set: function (__s8param0) {
      this._playTimeController ||= new __dep_class_ClientFunnelPlayTimeController.ClientFunnelPlayTimeController(__s8param0, this.trackState);
    },
    enumerable: true,
    configurable: true
  });
  ClientFunnelTrackingController.prototype.dispose = function () {
    if (this._playTimeController) {
      this._playTimeController.dispose();
    }
  };
  ClientFunnelTrackingController.prototype.trackState = function (__s13param0) {
    try {
      var __s13local0 = __dep_export_CSSMouseCursor.castAs(__dep_class_TrackingCache.TrackingCache.getInstance().getEvent(__dep_class_TrackingEventIds.TrackingEventIds.CLIENT_FUNNEL), "ClientFunnelTrackingEvent");
      if (!__s13local0) {
        __s0local0.warn("ClientFunnelTrackingevent couldn't be found (TODO HTML5)");
        return;
      }
      if (__dep_class_ClientFunnelGameStates.ClientFunnelGameStates.FIRST_SESSION_ONLY.indexOf(__s13param0) > -1 && __s13local0.session_count === 1) {
        return;
      }
      __s13local0.gamestate_name = __s13param0;
      __dep_class_TrackingCache.TrackingCache.getInstance().sendEvent(__dep_class_TrackingEventIds.TrackingEventIds.CLIENT_FUNNEL);
      __s0local0.debug("CLIENT FUNNEL TRACKING STEP: " + __s13param0);
      if (__s13param0 === __dep_class_ClientFunnelGameStates.ClientFunnelGameStates.GAME_PLAYABLE) {
        this._playTimeController.start();
      }
    } catch (__s19local0) {
      __s0local0.error("ClientFunnelTrackingController.trackState: Error tracking event \"" + __s13param0 + "\"");
    }
  };
  return ClientFunnelTrackingController;
}();
exports.ClientFunnelTrackingController = __s0local1;
