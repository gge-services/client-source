Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_TrackingEventIds = require("gge-module:class_TrackingEventIds");
var __dep_class_TrackingCache = require("gge-module:class_TrackingCache");
var __dep_class_BasicTrackingCommand = require("gge-module:class_BasicTrackingCommand");
var __dep_class_BasicModel = require("gge-module:class_BasicModel");
var __s0local0 = function (__s1param0) {
  function BrowserStateFullscreenTrackingCommand() {
    var __s3local0 = __s1param0 !== null && __s1param0.apply(this, arguments) || this;
    __s3local0.loginDone = false;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BrowserStateFullscreenTrackingCommand, __s1param0);
  BrowserStateFullscreenTrackingCommand.prototype.execute = function (__s5param0 = null) {
    if (!this.loginDone) {
      this.track();
      window.addEventListener("resize", this.bindFunction(this.onResize), false);
      this.loginDone = true;
    }
  };
  BrowserStateFullscreenTrackingCommand.prototype.track = function () {
    __dep_class_TrackingCache.TrackingCache.getInstance().getEvent(__dep_class_TrackingEventIds.TrackingEventIds.BROWSER_STATE).playerId = __dep_class_BasicModel.BasicModel.userData.playerID;
    __dep_class_TrackingCache.TrackingCache.getInstance().sendEvent(__dep_class_TrackingEventIds.TrackingEventIds.BROWSER_STATE);
  };
  BrowserStateFullscreenTrackingCommand.prototype.onResize = function () {
    if (this.delayer) {
      clearTimeout(this.delayer);
    }
    this.delayer = setTimeout(this.bindFunction(this.onCheckIfFullscreenChanged), 100);
  };
  BrowserStateFullscreenTrackingCommand.prototype.onCheckIfFullscreenChanged = function () {
    var __s13local0 = window.document;
    var __s13local1 = !!__s13local0.fullscreenElement || !!__s13local0.webkitFullscreenElement || !!__s13local0.mozFullScreenElement || !!__s13local0.msFullscreenElement;
    var __s13local2 = window.screen.width;
    var __s13local3 = window.screen.height;
    var __s13local4 = __s13local0.body ? Math.max(__s13local0.body.clientWidth, window.innerWidth) : window.innerWidth;
    var __s13local5 = __s13local0.body ? Math.max(__s13local0.body.clientHeight, window.innerHeight) : window.innerHeight;
    if (__s13local0.fullscreen || __s13local1 || __s13local2 === __s13local4 && __s13local3 === __s13local5) {
      this.track();
      window.removeEventListener("resize", this.bindFunction(this.onResize), false);
    }
  };
  return BrowserStateFullscreenTrackingCommand;
}(__dep_class_BasicTrackingCommand.BasicTrackingCommand);
exports.BrowserStateFullscreenTrackingCommand = __s0local0;
