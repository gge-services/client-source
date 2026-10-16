Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function () {
  function GlobalServerPreviousRunInfoVO() {}
  GlobalServerPreviousRunInfoVO.prototype.parseParams = function (__s5param0) {
    if (__s5param0.TS) {
      this.tempServerTimeStamp = new Date();
      this.tempServerTimeStamp.setTime(__dep_export_CachedTimer.CachedTimer.getCachedTimer() - __s5param0.TS.ET * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC);
      this.tempServerSettingVO = __dep_export_CastleModel.CastleModel.tempServerData.getConfigVOByID(__s5param0.TS.TSID);
    }
    if (__s5param0.ABG) {
      this.abgServerTimeStamp = new Date();
      this.abgServerTimeStamp.setTime(__dep_export_CachedTimer.CachedTimer.getCachedTimer() - __s5param0.ABG.ET * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC);
      this.abgServerSettingVO = __dep_export_CastleModel.CastleModel.allianceBattlegroundData.getConfigVOByID(__s5param0.ABG.TSID);
    }
  };
  return GlobalServerPreviousRunInfoVO;
}();
exports.GlobalServerPreviousRunInfoVO = __s0local0;
