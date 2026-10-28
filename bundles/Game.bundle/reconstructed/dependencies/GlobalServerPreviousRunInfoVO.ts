import { CachedTimer } from "./CachedTimer";
import { CastleModel } from "./CastleModel";
import { ClientConstTime } from "./ClientConstTime";
export class GlobalServerPreviousRunInfoVO {
  abgServerSettingVO: any;
  abgServerTimeStamp: any;
  tempServerSettingVO: any;
  tempServerTimeStamp: any;

  parseParams(argument0) {
    if (argument0.TS) {
      this.tempServerTimeStamp = new Date();
      this.tempServerTimeStamp.setTime(CachedTimer.getCachedTimer() - argument0.TS.ET * ClientConstTime.SEC_2_MILLISEC);
      this.tempServerSettingVO = CastleModel.tempServerData.getConfigVOByID(argument0.TS.TSID);
    }
    if (argument0.ABG) {
      this.abgServerTimeStamp = new Date();
      this.abgServerTimeStamp.setTime(CachedTimer.getCachedTimer() - argument0.ABG.ET * ClientConstTime.SEC_2_MILLISEC);
      this.abgServerSettingVO = CastleModel.allianceBattlegroundData.getConfigVOByID(argument0.ABG.TSID);
    }
  }
}
