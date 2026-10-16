Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __s0local0 = function (__s1param0) {
  function CastlePostPostAttackFactionDialogProperties(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.armyArrivedTimeStamp = NaN;
    __s3local0.armySize = 0;
    __s3local0.armyArrivedTimeStamp = __s3param0 * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC + __dep_export_CachedTimer.CachedTimer.getCachedTimer();
    __s3local0.armySize = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePostPostAttackFactionDialogProperties, __s1param0);
  return CastlePostPostAttackFactionDialogProperties;
}(__dep_exact_9e901e8e2483a22f.BasicProperties);
exports.CastlePostPostAttackFactionDialogProperties = __s0local0;
