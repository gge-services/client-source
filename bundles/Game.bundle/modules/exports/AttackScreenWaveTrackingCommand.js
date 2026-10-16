Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_ClientConstTracking = require("gge-module:export_ClientConstTracking");
var __dep_export_AttackScreenWaveTrackingEvent = require("gge-module:export_AttackScreenWaveTrackingEvent");
var __s0local0 = function (__s1param0) {
  function AttackScreenWaveTrackingCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AttackScreenWaveTrackingCommand, __s1param0);
  AttackScreenWaveTrackingCommand.prototype.execute = function (__s5param0) {
    if (!__dep_exact_9e901e8e2483a22f.TrackingCache.getInstance().getEvent(__dep_export_ClientConstTracking.ClientConstTracking.ATTACK_SCREEN_TRACKING_ID)) {
      __dep_exact_9e901e8e2483a22f.TrackingCache.getInstance().cacheEvent(__dep_export_ClientConstTracking.ClientConstTracking.ATTACK_SCREEN_TRACKING_ID, new __dep_export_AttackScreenWaveTrackingEvent.AttackScreenWaveTrackingEvent(__dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.referrer));
    }
    var __s5local0 = __dep_exact_9e901e8e2483a22f.TrackingCache.getInstance().getEvent(__dep_export_ClientConstTracking.ClientConstTracking.ATTACK_SCREEN_TRACKING_ID);
    __s5local0.playerId = __dep_exact_9e901e8e2483a22f.BasicModel.userData.playerID;
    __s5local0.date = Math.round(new Date().time / 1000);
    __s5local0.numberWaves = __s5param0[0];
    __s5local0.actionType = __s5param0[1];
    __dep_exact_9e901e8e2483a22f.TrackingCache.getInstance().sendEvent(__dep_export_ClientConstTracking.ClientConstTracking.ATTACK_SCREEN_TRACKING_ID);
  };
  return AttackScreenWaveTrackingCommand;
}(__dep_exact_9e901e8e2483a22f.SimpleCommand);
exports.AttackScreenWaveTrackingCommand = __s0local0;
