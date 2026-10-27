import { BasicStandardOkDialogProperties } from "../../../ggs.dll/reconstructed/exports/BasicStandardOkDialogProperties";
import { CastleCommand } from "./CastleCommand";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { ClientConstSF } from "./ClientConstSF";
import { CommKeys } from "../../../ggs.dll/reconstructed/exports/CommKeys";
import { DarkOkDialog } from "./DarkOkDialog";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { PlayerConst } from "../../../ggs.dll/reconstructed/exports/PlayerConst";
export class RSMCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_RESEND_MAIL;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        if (JSON.parse(responseFields[1])[CommKeys.RESEND_MAIL_ACTION_TYPE] == PlayerConst.RESEND_MAIL_ACCOUNT_VERIFICATION) {
          CastleDialogHandler.getInstance().registerDefaultDialogs(DarkOkDialog, new BasicStandardOkDialogProperties("attention", "dialog_options_newEmail_verificationSentAgain_desc"));
        }
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
