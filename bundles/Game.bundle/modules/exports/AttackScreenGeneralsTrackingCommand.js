Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_ClientConstTracking = require("gge-module:export_ClientConstTracking");
var __dep_export_AttackScreenGeneralsTrackingEvent = require("gge-module:export_AttackScreenGeneralsTrackingEvent");
var __s0local0 = function (__s1param0) {
  function AttackScreenGeneralsTrackingCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AttackScreenGeneralsTrackingCommand, __s1param0);
  AttackScreenGeneralsTrackingCommand.prototype.execute = function (__s5param0) {
    if (!__dep_exact_9e901e8e2483a22f.TrackingCache.getInstance().getEvent(__dep_export_ClientConstTracking.ClientConstTracking.GENERALS_ATTACK_SCREEN)) {
      __dep_exact_9e901e8e2483a22f.TrackingCache.getInstance().cacheEvent(__dep_export_ClientConstTracking.ClientConstTracking.GENERALS_ATTACK_SCREEN, new __dep_export_AttackScreenGeneralsTrackingEvent.AttackScreenGeneralsTrackingEvent(__dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.referrer));
    }
    var __s5local0 = __dep_exact_9e901e8e2483a22f.TrackingCache.getInstance().getEvent(__dep_export_ClientConstTracking.ClientConstTracking.GENERALS_ATTACK_SCREEN);
    __s5local0.playerId = __dep_exact_9e901e8e2483a22f.BasicModel.userData.playerID;
    __s5local0.sessionEnd = Math.round(new Date().time / 1000);
    __s5local0.sessionStart = __s5param0[0];
    __s5local0.details = __s5param0[1];
    __s5local0.attackLaunched = __s5param0[2];
    __dep_exact_9e901e8e2483a22f.TrackingCache.getInstance().sendEvent(__dep_export_ClientConstTracking.ClientConstTracking.GENERALS_ATTACK_SCREEN);
  };
  return AttackScreenGeneralsTrackingCommand;
}(__dep_exact_9e901e8e2483a22f.SimpleCommand);
exports.AttackScreenGeneralsTrackingCommand = __s0local0;
