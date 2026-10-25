import { AttackDialog } from "./AttackDialog";
import { CastleAttackDialogProperties } from "./CastleAttackDialogProperties";
import { CastleCommand } from "./CastleCommand";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class ABICommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_ATTACK_INFO_BOSSDUNGEON;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleModel.otherPlayerData.parseOwnerInfoArray(parsedResponse.gaa.OI);
        var __s9local1 = CastleModel.attackData.parse_ABI(parsedResponse);
        CastleDialogHandler.getInstance().registerDefaultDialogs(AttackDialog, new CastleAttackDialogProperties(__s9local1));
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
classImplementsInterfaces(ABICommand, "IExecCommand");
