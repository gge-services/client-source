import { CastleCommand } from "./CastleCommand";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleMailGiftDialog } from "./CastleMailGiftDialog";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
export class LVBCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_EMAIL_VERIFIED_POPUP;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(__s9param0, __s9param1) {
    switch (__s9param0) {
      case ERROR.ALL_OK:
        CastleModel.userData.userValidatedEmail();
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleMailGiftDialog);
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  }
}
