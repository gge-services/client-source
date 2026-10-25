import { CastleCommand } from "./CastleCommand";
import { CastleDeleteAccountDialog } from "./CastleDeleteAccountDialog";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
export class PSDCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_PLAYER_SCHEDULED_DELETION;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleModel.deleteAccountData.remainingTimeTillDeleteTimeStamp = Number(parsedResponse.D);
        if (CastleModel.deleteAccountData.isAccountDeletionStarted) {
          CastleDialogHandler.getInstance().registerDefaultDialogs(CastleDeleteAccountDialog);
        }
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
