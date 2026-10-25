import { BasicDialogHandler } from "../../../ggs.dll/reconstructed/exports/BasicDialogHandler";
import { CastleAchievementData } from "./CastleAchievementData";
import { CastleAchievementLevelUpDialog } from "./CastleAchievementLevelUpDialog";
import { CastleAchievementLevelUpDialogProperties } from "./CastleAchievementLevelUpDialogProperties";
import { CastleAchievementPopupDialog } from "./CastleAchievementPopupDialog";
import { CastleAchievementPopupDialogProperties } from "./CastleAchievementPopupDialogProperties";
import { CastleCommand } from "./CastleCommand";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleIngameMessageHandler } from "./CastleIngameMessageHandler";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { int } from "../../../ggs.dll/reconstructed/exports/int";
export class VFICommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_ACHIEVEMENT_FINISHED;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    return super.executeCommand(statusCode, responseFields);
  }
  exec(__s11param0) {
    var __s11local0 = int(__s11param0[0]);
    var __s11local1 = __s11param0[1];
    switch (__s11local0) {
      case ERROR.ALL_OK:
        this.paramObj = JSON.parse(__s11local1[1]);
        if (CastleModel.userData) {
          CastleModel.currencyData.parseGCU(this.paramObj.gcu);
        }
        if (this.paramObj.grc != null && CastleModel.areaData.activeArea != null) {
          CastleModel.areaData.activeArea.updater.parseGRC(this.paramObj.grc);
        }
        if (CastleModel.castleAchievementData.getAchievementByID(this.paramObj.AID).achievementSerieVO.achievementSeriesID == CastleAchievementData.MAIN_ACHIEVMENT_SERIESID) {
          CastleDialogHandler.getInstance().registerDefaultDialogs(CastleAchievementLevelUpDialog, new CastleAchievementLevelUpDialogProperties(this.paramObj.AID), true, BasicDialogHandler.PRIORITY_LOW);
        } else {
          CastleIngameMessageHandler.getInstance().registerMessage(CastleAchievementPopupDialog, new CastleAchievementPopupDialogProperties(this.paramObj.AID), true, BasicDialogHandler.PRIORITY_MIDDLE);
        }
        break;
      default:
        this.showErrorDialog(__s11local0, __s11local1);
    }
  }
}
