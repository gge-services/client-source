import { CastleCommand } from "./CastleCommand";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleMailGiftDialog } from "./CastleMailGiftDialog";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class LVBCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_EMAIL_VERIFIED_POPUP;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        CastleModel.userData.userValidatedEmail();
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleMailGiftDialog);
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
classImplementsInterfaces(LVBCommand, "IExecCommand");
