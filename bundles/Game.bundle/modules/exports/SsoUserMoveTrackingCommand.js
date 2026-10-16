Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_ClientConstTracking = require("gge-module:export_ClientConstTracking");
var __dep_export_SsoUserMoveTrackingEvent = require("gge-module:export_SsoUserMoveTrackingEvent");
var __s0local0 = function (__s1param0) {
  function SsoUserMoveTrackingCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SsoUserMoveTrackingCommand, __s1param0);
  SsoUserMoveTrackingCommand.prototype.execute = function (__s5param0) {
    if (!__dep_exact_9e901e8e2483a22f.TrackingCache.getInstance().getEvent(__dep_export_ClientConstTracking.ClientConstTracking.SSO_USER_MOVE_TRACKING_ID)) {
      __dep_exact_9e901e8e2483a22f.TrackingCache.getInstance().cacheEvent(__dep_export_ClientConstTracking.ClientConstTracking.SSO_USER_MOVE_TRACKING_ID, new __dep_export_SsoUserMoveTrackingEvent.SsoUserMoveTrackingEvent(__dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.referrer));
    }
    var __s5local0 = __dep_exact_9e901e8e2483a22f.TrackingCache.getInstance().getEvent(__dep_export_ClientConstTracking.ClientConstTracking.SSO_USER_MOVE_TRACKING_ID);
    __s5local0.playerId = __dep_exact_9e901e8e2483a22f.BasicModel.userData.playerID;
    __s5local0.date = Math.round(new Date().time / 1000);
    __s5local0.actionType = __s5param0[0];
    __s5local0.login_method = __dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.loginIsKeyBased ? __dep_export_SsoUserMoveTrackingEvent.SsoUserMoveTrackingEvent.LOGIN_WITH_SSO : __dep_export_SsoUserMoveTrackingEvent.SsoUserMoveTrackingEvent.LOGIN_WITH_PASSWORD;
    __dep_exact_9e901e8e2483a22f.TrackingCache.getInstance().sendEvent(__dep_export_ClientConstTracking.ClientConstTracking.SSO_USER_MOVE_TRACKING_ID);
  };
  return SsoUserMoveTrackingCommand;
}(__dep_exact_9e901e8e2483a22f.SimpleCommand);
exports.SsoUserMoveTrackingCommand = __s0local0;
