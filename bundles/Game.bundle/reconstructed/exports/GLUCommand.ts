import { BasicController } from "../../../ggs.dll/reconstructed/exports/BasicController";
import { BasicDialogHandler } from "../../../ggs.dll/reconstructed/exports/BasicDialogHandler";
import { C2SGetLoginBonusVO } from "./C2SGetLoginBonusVO";
import { CastleCommand } from "./CastleCommand";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleLevelUpDialog } from "./CastleLevelUpDialog";
import { CastleLevelUpDialogProperties } from "./CastleLevelUpDialogProperties";
import { CastleModel } from "./CastleModel";
import { CastleUserDataEvent } from "./CastleUserDataEvent";
import { ClientConstCastle } from "./ClientConstCastle";
import { ClientConstSF } from "./ClientConstSF";
import { CommandController } from "../../../ggs.dll/reconstructed/exports/CommandController";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { GamesightEventConstants } from "./GamesightEventConstants";
import { GameSightPayloadVO } from "./GameSightPayloadVO";
import { int } from "../../../ggs.dll/reconstructed/exports/int";
export class GLUCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_LEVEL_UP;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleModel.currencyData.parseGCU(parsedResponse.gcu);
        CastleModel.userData.parse_GXP(parsedResponse.gxp);
        var __s9local1 = int(parsedResponse.L);
        var __s9local2 = !!parsedResponse.LL && parsedResponse.LL == 1;
        if (__s9local1 <= 10 || __s9local1 == 20 || __s9local1 == 30) {
          CommandController.instance.executeCommand(BasicController.GTM_CALL_GGS_TRACK_EVENT, "level" + __s9local1);
        }
        if (ClientConstCastle.hasReachedSpecificLevel(__s9local1)) {
          CommandController.instance.executeCommand(BasicController.GAMESIGHT_CALL_GGS_TRACK_EVENT, new GameSightPayloadVO(GamesightEventConstants.LEVEL_COMPLETE_ + (__s9local1 - 1)));
        }
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleLevelUpDialog, new CastleLevelUpDialogProperties(__s9local1, __s9local2), true, BasicDialogHandler.PRIORITY_LOW);
        CastleModel.userData.levelUpInSession = true;
        this.controller.dispatchEvent(new CastleUserDataEvent(CastleUserDataEvent.LEVEL_UP));
        CastleModel.smartfoxClient.sendCommandVO(new C2SGetLoginBonusVO());
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
