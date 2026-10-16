Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_TrackingEventIds = require("gge-module:class_TrackingEventIds");
var __dep_class_TrackingVerifier = require("gge-module:class_TrackingVerifier");
var __dep_class_TrackingLoader = require("gge-module:class_TrackingLoader");
var __dep_class_ImpressionTrackingEvent = require("gge-module:class_ImpressionTrackingEvent");
var __dep_class_ConnectionTrackingEvent = require("gge-module:class_ConnectionTrackingEvent");
var __dep_class_ABTestTimeoutTrackingEvent = require("gge-module:class_ABTestTimeoutTrackingEvent");
var __dep_class_WorldAssignmentTrackingEvent = require("gge-module:class_WorldAssignmentTrackingEvent");
var __dep_class_ProfilingTrackingEvent = require("gge-module:class_ProfilingTrackingEvent");
var __dep_class_GamePaymentShopClickEvent = require("gge-module:class_GamePaymentShopClickEvent");
var __dep_class_DesktopDeviceInformationTrackingEvent = require("gge-module:class_DesktopDeviceInformationTrackingEvent");
var __dep_class_ShopCheckoutTrackingEvent = require("gge-module:class_ShopCheckoutTrackingEvent");
var __dep_class_InGamePerformanceEvent = require("gge-module:class_InGamePerformanceEvent");
var __dep_class_InvitationTrackingEvent = require("gge-module:class_InvitationTrackingEvent");
var __dep_class_FacebookConnectionTrackingEvent = require("gge-module:class_FacebookConnectionTrackingEvent");
var __dep_class_FacebookUserDataTrackingEvent = require("gge-module:class_FacebookUserDataTrackingEvent");
var __dep_class_ShopLoadedTrackingEvent = require("gge-module:class_ShopLoadedTrackingEvent");
var __dep_class_ShopBackButtonTrackingEvent = require("gge-module:class_ShopBackButtonTrackingEvent");
var __dep_class_AssetLoadingSpeedTrackingEvent = require("gge-module:class_AssetLoadingSpeedTrackingEvent");
var __dep_class_TrackingConstants = require("gge-module:class_TrackingConstants");
var __dep_export_CSSMouseCursor = require("gge-module:export_CSSMouseCursor");
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __dep_class_BasicModel = require("gge-module:class_BasicModel");
var __dep_export_AllianceCreate = require("gge-module:export_AllianceCreate");
var __dep_export__extend = require("gge-module:export__extend");
var __dep_class_DeviceId = require("gge-module:class_DeviceId");
var __dep_export_ConnectionType = require("gge-module:export_ConnectionType");
var __dep_exact_7fea326698a8c76f = require("gge-module:exact_7fea326698a8c76f");
var __dep_class_BrowserStateFullscreenTrackingEvent = require("gge-module:class_BrowserStateFullscreenTrackingEvent");
var __dep_export_FacebookUserEmailTrackingEvent = require("gge-module:export_FacebookUserEmailTrackingEvent");
var __s0local0 = __dep_export_LoggerConfigurator.getLogger("Tracking.TrackingCache");
var __s0local1 = function () {
  function TrackingCache(__s3param0 = new __dep_class_TrackingVerifier.TrackingVerifier(), __s3param1 = new Map()) {
    this._trackingVerifier = __s3param0;
    this._currentCache = __s3param1;
    this._gameId = 0;
    this._referrer = "";
    this._accountId = "";
    this._networkId = 0;
    this._distributorId = 0;
    this._language = "";
    this._isInitialized = false;
    this.validateTests = false;
  }
  TrackingCache.getInstance = function () {
    TrackingCache.trackingCache ||= new TrackingCache();
    return TrackingCache.trackingCache;
  };
  TrackingCache.prototype.init = function (__s7param0, __s7param1, __s7param2, __s7param3, __s7param4) {
    this._gameId = __s7param0;
    this._networkId = __s7param1;
    this._referrer = __s7param2;
    this._language = __s7param4;
    this._accountId = __s7param3;
    this._currentCache.set(__dep_class_TrackingEventIds.TrackingEventIds.IMPRESSION, new __dep_class_ImpressionTrackingEvent.ImpressionTrackingEvent(__s7param2));
    this._currentCache.set(__dep_class_TrackingEventIds.TrackingEventIds.CONNECTION, new __dep_class_ConnectionTrackingEvent.ConnectionTrackingEvent(__s7param2));
    this._currentCache.set(__dep_class_TrackingEventIds.TrackingEventIds.AB_TEST_TIMEOUT_TRACKING, new __dep_class_ABTestTimeoutTrackingEvent.ABTestTimeoutTrackingEvent(__s7param2));
    this._currentCache.set(__dep_class_TrackingEventIds.TrackingEventIds.WORLD_ASSIGNMENT, new __dep_class_WorldAssignmentTrackingEvent.WorldAssignmentTrackingEvent(__s7param2));
    this._currentCache.set(__dep_class_TrackingEventIds.TrackingEventIds.PROFILING, new __dep_class_ProfilingTrackingEvent.ProfilingTrackingEvent(__s7param2));
    this._currentCache.set(__dep_class_TrackingEventIds.TrackingEventIds.GAME_PAYMENT_SHOP_CLICK, new __dep_class_GamePaymentShopClickEvent.GamePaymentShopClickEvent(__s7param2));
    this._currentCache.set(__dep_class_TrackingEventIds.TrackingEventIds.DESKTOP_DEVICE_INFORMATION, new __dep_class_DesktopDeviceInformationTrackingEvent.DesktopDeviceInformationTrackingEvent(__s7param2));
    this._currentCache.set(__dep_class_TrackingEventIds.TrackingEventIds.BROWSER_STATE, new __dep_class_BrowserStateFullscreenTrackingEvent.BrowserStateFullscreenTrackingEvent(__s7param2));
    this._currentCache.set(__dep_class_TrackingEventIds.TrackingEventIds.SHOP_CHECKOUT, new __dep_class_ShopCheckoutTrackingEvent.ShopCheckoutTrackingEvent(__s7param2));
    this._currentCache.set(__dep_class_TrackingEventIds.TrackingEventIds.IN_GAME_PERFORMANCE, new __dep_class_InGamePerformanceEvent.InGamePerformanceEvent(__s7param2));
    this._currentCache.set(__dep_class_TrackingEventIds.TrackingEventIds.INVITATION, new __dep_class_InvitationTrackingEvent.InvitationTrackingEvent(__s7param2));
    this._currentCache.set(__dep_class_TrackingEventIds.TrackingEventIds.FACEBOOK_CONNECTION, new __dep_class_FacebookConnectionTrackingEvent.FacebookConnectionTrackingEvent(__s7param2));
    this._currentCache.set(__dep_class_TrackingEventIds.TrackingEventIds.FACEBOOK_USER_DATA, new __dep_class_FacebookUserDataTrackingEvent.FacebookUserDataTrackingEvent(__s7param2));
    this._currentCache.set(__dep_class_TrackingEventIds.TrackingEventIds.FACBOOK_USER_EMAIL, new __dep_export_FacebookUserEmailTrackingEvent.FacebookUserEmailTrackingEvent(__s7param2));
    this._currentCache.set(__dep_class_TrackingEventIds.TrackingEventIds.SHOP_LOADED, new __dep_class_ShopLoadedTrackingEvent.ShopLoadedTrackingEvent(__s7param2));
    this._currentCache.set(__dep_class_TrackingEventIds.TrackingEventIds.SHOP_BACK_BUTTON, new __dep_class_ShopBackButtonTrackingEvent.ShopBackButtonTrackingEvent(__s7param2));
    this._currentCache.set(__dep_class_TrackingEventIds.TrackingEventIds.ASSETS_LOADING_SPEED, new __dep_class_AssetLoadingSpeedTrackingEvent.AssetLoadingSpeedTrackingEvent(__s7param2));
    this._isInitialized = true;
  };
  TrackingCache.prototype.cacheEvent = function (__s9param0, __s9param1) {
    this._currentCache.set(__s9param0, __s9param1);
  };
  TrackingCache.prototype.getEvent = function (__s11param0) {
    return this._currentCache.get(__s11param0);
  };
  TrackingCache.prototype.getAllEvents = function () {
    return Array.from(this._currentCache.keys());
  };
  TrackingCache.prototype.sendEvent = function (__s15param0) {
    if (!this.isInitialized) {
      __s0local0.warn("tracking cache is not initalized");
      return false;
    }
    var __s15local0 = this.prepareEvent(__s15param0);
    var __s15local1 = JSON.stringify(__s15local0);
    if (this.validateTests) {
      var __s15local2 = __dep_export_AllianceCreate.validateTrackingEvent(__s15local0);
      var __s15local3 = __s15local2.success ? this.testServer + "events" : this.testServer + "events/invalid?reason=" + encodeURIComponent(__s15local2.message);
      new __dep_class_TrackingLoader.TrackingLoader(new __dep_export_CSSMouseCursor.URLRequest(__s15local3, __s15local1, "POST"));
    }
    new __dep_class_TrackingLoader.TrackingLoader(new __dep_export_CSSMouseCursor.URLRequest(__dep_class_TrackingConstants.TrackingConstants.JSON_TRACKING_URL, __s15local1, "POST"));
    this._trackingVerifier.keepEvent(__s15param0);
    return true;
  };
  Object.defineProperty(TrackingCache.prototype, "currentInstance", {
    get: function () {
      return __dep_class_BasicModel.BasicModel.instanceProxy.selectedInstanceVO;
    },
    enumerable: true,
    configurable: true
  });
  TrackingCache.prototype.prepareEvent = function (__s21param0) {
    var __s21local0 = this._currentCache.get(__s21param0).getVars();
    if (__s21local0.eventId) {
      if (__s21param0 !== __s21local0.eventId) {
        __s0local0.warn("Expected event with with eventId " + __s21param0 + ", but found " + __s21local0.eventId);
      }
    } else {
      __s21local0.eventId = __s21param0;
      __s0local0.warn("assigning ID to tracking event ", __s21param0);
    }
    __s21local0.gameId = this._gameId;
    __s21local0.networkId = this._networkId;
    __s21local0.accountId = this._accountId;
    if (__s21local0.hasOwnProperty("playerId") && __dep_export__extend.isNullOrUndefined(__s21local0.playerId) || __s21local0.playerId == 0) {
      __s0local0.warn("we are sending an event without playerID", __s21local0);
    }
    if (this.currentInstance) {
      __s21local0.instanceId = this.currentInstance.instanceId;
      __s21local0.zoneId = this.currentInstance.zoneId;
    } else {
      __s0local0.warn("sending tracking " + __s21param0 + " but currentInstance is null will try to use networkCookie");
      __s21local0.zoneId = __dep_class_BasicModel.BasicModel.networkCookie.zoneId || 0;
      __s21local0.instanceId = __dep_class_BasicModel.BasicModel.networkCookie.instanceId || -1;
    }
    __s21local0.lang = this._language;
    this.fixMissingValues(__s21local0);
    __s21local0.html5 = 1;
    return __s21local0;
  };
  TrackingCache.prototype.fixMissingValues = function (__s29param0) {
    function __s29local0(__s31param0, __s31param1) {
      if (__s29param0.hasOwnProperty(__s31param0) && __dep_export__extend.isNullOrUndefined(__s29param0[__s31param0]) || __s29param0[__s31param0] == 0) {
        __s0local0.warn("event " + __s29param0.eventId + ": autofilling property " + __s31param0 + " with default value " + __s31param1);
        __s29param0[__s31param0] = __s31param1;
      }
    }
    __s29local0("storeId", __dep_exact_7fea326698a8c76f.StoreId.WEB);
    __s29local0("deviceId", __dep_class_DeviceId.DeviceId.DESKTOP);
    __s29local0("connectionType", __dep_export_ConnectionType.ConnectionType.LAN);
  };
  Object.defineProperty(TrackingCache.prototype, "isInitialized", {
    get: function () {
      return this._isInitialized;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TrackingCache.prototype, "trackingVerifier", {
    get: function () {
      return this._trackingVerifier;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TrackingCache.prototype, "networkId", {
    set: function (__s38param0) {
      this._networkId = __s38param0;
    },
    enumerable: true,
    configurable: true
  });
  TrackingCache.prototype.useTestValidationServer = function (__s40param0, __s40param1 = __dep_class_TrackingConstants.TrackingConstants.TEST_TRACKING_SERVER) {
    this.validateTests = __s40param0;
    this.testServer = __s40param1;
  };
  TrackingCache.VERSION = "$Id$";
  return TrackingCache;
}();
exports.TrackingCache = __s0local1;
