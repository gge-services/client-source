import { CastleCommand } from "./CastleCommand";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleModel } from "./CastleModel";
import { CastleTitleAchievedDialog } from "./CastleTitleAchievedDialog";
import { CastleTitleAchievedDialogProperties } from "./CastleTitleAchievedDialogProperties";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { int } from "../../../ggs.dll/reconstructed/exports/int";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class UFPCommand extends CastleCommand {
  constructor() {
    super();
  }
  get cmdId() {
    return ClientConstSF.S2C_USER_FACTION_POINTS;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleModel.titleData.parseUFP(parsedResponse);
        var __s9local1 = int(parsedResponse.NHT);
        if (__s9local1 > 0) {
          var __s9local2 = CastleModel.titleData.getTitleByTitleID(__s9local1);
          var __s9local3 = CastleModel.titleData.getHighestTitleEverHeldByThisUser(__s9local2.titleSystem);
          var __s9local4 = false;
          if (__s9local3 != null) {
            __s9local4 = __s9local2.orderInSystem <= __s9local3.orderInSystem;
          }
          CastleDialogHandler.getInstance().registerDefaultDialogs(CastleTitleAchievedDialog, new CastleTitleAchievedDialogProperties(__s9local2, __s9local4));
        }
        return true;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
classImplementsInterfaces(UFPCommand, "IExecCommand");
