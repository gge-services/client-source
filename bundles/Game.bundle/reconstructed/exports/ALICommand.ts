import { AttackDialog } from "./AttackDialog";
import { CastleAttackDialogProperties } from "./CastleAttackDialogProperties";
import { CastleCommand } from "./CastleCommand";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
export class ALICommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_ATTACK_INFO_LANDMARK;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        var __s9local1 = CastleModel.attackData.parse_ALI(parsedResponse);
        CastleDialogHandler.getInstance().registerDefaultDialogs(AttackDialog, new CastleAttackDialogProperties(__s9local1));
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
