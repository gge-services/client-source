import { CastleCommand } from "./CastleCommand";
import { CastleDailyLoginBonusDialog } from "./CastleDailyLoginBonusDialog";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class ALBCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_GET_LOGIN_BONUS;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleModel.loginBonusData.parseALB(parsedResponse);
        if (CastleModel.loginBonusData.hasAnythingToCollect && !CastleModel.loginBonusData.preventDialogPopup) {
          CastleDialogHandler.getInstance().registerDefaultDialogs(CastleDailyLoginBonusDialog);
        }
        CastleModel.loginBonusData.preventDialogPopup = false;
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
classImplementsInterfaces(ALBCommand, "IExecCommand");
