Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_TrackingEventIds = require("gge-module:class_TrackingEventIds");
var __dep_class_BasicTrackingEvent = require("gge-module:class_BasicTrackingEvent");
var __dep_class_EnvGlobalsHandler = require("gge-module:class_EnvGlobalsHandler");
var __dep_class_BasicModel = require("gge-module:class_BasicModel");
var __s0local0 = function (__s1param0) {
  function BrowserStateFullscreenTrackingEvent(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.playerId = 0;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BrowserStateFullscreenTrackingEvent, __s1param0);
  BrowserStateFullscreenTrackingEvent.prototype.getVars = function () {
    var __s5local0 = window.document;
    var __s5local1 = !!__s5local0.fullscreenElement || !!__s5local0.webkitFullscreenElement || !!__s5local0.mozFullScreenElement || !!__s5local0.msFullscreenElement;
    var __s5local2 = {
      eventId: __dep_class_TrackingEventIds.TrackingEventIds.BROWSER_STATE,
      event_mapping_version: 2,
      playerId: this.playerId
    };
    __s5local2.sessionId = this.getUniqueIdForDayAndPlayer();
    var __s5local3 = window.screen.width;
    var __s5local4 = window.screen.height;
    var __s5local5 = __s5local0.body ? Math.max(__s5local0.body.clientWidth, window.innerWidth) : window.innerWidth;
    var __s5local6 = __s5local0.body ? Math.max(__s5local0.body.clientHeight, window.innerHeight) : window.innerHeight;
    __s5local2.browser_state = __s5local0.fullscreen || __s5local1 || __s5local3 === __s5local5 && __s5local4 === __s5local6 ? BrowserStateFullscreenTrackingEvent.BROWSER_STATE_FULLSCREEN : BrowserStateFullscreenTrackingEvent.BROWSER_STATE_WINDOWED;
    __s5local2.full_screen_state = __s5local1 ? BrowserStateFullscreenTrackingEvent.BROWSER_STATE_FULLSCREEN : BrowserStateFullscreenTrackingEvent.BROWSER_STATE_WINDOWED;
    return __s5local2;
  };
  BrowserStateFullscreenTrackingEvent.prototype.getUniqueIdForDayAndPlayer = function () {
    var __s7local0 = new Date();
    var __s7local1 = new Date(__s7local0.getFullYear(), __s7local0.getMonth(), __s7local0.getDate());
    var __s7local2 = Math.round(__s7local1.time / 10000000);
    var __s7local3 = __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals;
    var __s7local4 = this.playerId;
    var __s7local5 = __dep_class_BasicModel.BasicModel.instanceProxy.selectedInstanceVO.zoneId;
    return parseInt(__s7local2 + "" + __s7local3.gameId + __s7local5 + __s7local4);
  };
  BrowserStateFullscreenTrackingEvent.BROWSER_STATE_WINDOWED = 1;
  BrowserStateFullscreenTrackingEvent.BROWSER_STATE_FULLSCREEN = 2;
  return BrowserStateFullscreenTrackingEvent;
}(__dep_class_BasicTrackingEvent.BasicTrackingEvent);
exports.BrowserStateFullscreenTrackingEvent = __s0local0;
