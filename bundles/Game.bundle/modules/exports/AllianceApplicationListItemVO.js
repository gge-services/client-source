Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function AllianceApplicationListItemVO() {
    this.playerID = 0;
    this.distance = 0;
    this.applicationArivalTimestamp = 0;
  }
  AllianceApplicationListItemVO.prototype.parseItem = function (__s5param0) {
    this.playerID = __dep_exact_f855840627e6e145.int(__s5param0.PID);
    this.distance = __dep_exact_f855840627e6e145.int(__s5param0.D);
    this.applicationText = __dep_exact_9e901e8e2483a22f.TextValide.parseChatJSONMessage(__s5param0.AT);
    this.applicationArivalTimestamp = __dep_exact_f855840627e6e145.int(__dep_export_CachedTimer.CachedTimer.getCachedTimer() - __s5param0.AA * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC);
    this.playerOwnerInfo = __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnerInfoVO(this.playerID);
  };
  AllianceApplicationListItemVO.prototype.getApplicationDateString = function () {
    var __s7local0 = __dep_exact_f855840627e6e145.int((__dep_export_CachedTimer.CachedTimer.getCachedTimer() - this.applicationArivalTimestamp) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC);
    return __dep_exact_9e901e8e2483a22f_1.TimeStringHelper.getTimeToString(__s7local0, __dep_exact_9e901e8e2483a22f_1.TimeStringHelper.ONE_TIME_FORMAT, __dep_exact_92d05af59ee2ff30.Localize.text, false, true);
  };
  return AllianceApplicationListItemVO;
}();
exports.AllianceApplicationListItemVO = __s0local0;
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
