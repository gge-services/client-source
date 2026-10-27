import { BasicController } from "../../../ggs.dll/reconstructed/exports/BasicController";
import { BasicLostPasswordCommand } from "../../../ggs.dll/reconstructed/exports/BasicLostPasswordCommand";
import { BasicStandardOkDialogProperties } from "../../../ggs.dll/reconstructed/exports/BasicStandardOkDialogProperties";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleLayoutManager } from "./CastleLayoutManager";
import { CastleStandardOkDialog } from "./CastleStandardOkDialog";
import { CommandController } from "../../../ggs.dll/reconstructed/exports/CommandController";
import { EnvGlobalsHandler } from "../../../ggs.dll/reconstructed/exports/EnvGlobalsHandler";
import { Localize } from "../../../ggs.dll/reconstructed/exports/Localize";
import { ServerErrorVO } from "../../../ggs.dll/reconstructed/exports/ServerErrorVO";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class CastleLostPasswordCommand extends BasicLostPasswordCommand {
  constructor(argument0 = false) {
    super(argument0);
    this.ALL_OK1 = 0;
    this.GENERAL_ERROR1 = 1;
    this.PLAYER_NOT_FOUND1 = 2;
  }
  execute(argument0 = null) {
    this.errorCode1 = argument0;
    switch (this.errorCode1) {
      case this.ALL_OK1:
        this.all_ok();
        break;
      case this.GENERAL_ERROR1:
        this.general_error();
        break;
      case this.PLAYER_NOT_FOUND1:
        this.player_not_found();
        break;
      default:
        CommandController.instance.executeCommand(BasicController.COMMAND_HANDLE_SERVER_ERROR, new ServerErrorVO(this.errorCode1, [], "lpp"));
    }
  }
  all_ok() {
    super.all_ok();
    (() => {
      const sourceObject = EnvGlobalsHandler.globals;
      const sourceKey = "isFirstVisit";
      const previousValue = sourceObject[sourceKey];
      return previousValue ? sourceObject[sourceKey] = false : previousValue;
    })();
    CastleDialogHandler.getInstance().registerDialogs(CastleStandardOkDialog, new BasicStandardOkDialogProperties("", Localize.text("generic_change_password_copy_send")));
  }
  general_error() {
    super.general_error();
    CastleDialogHandler.getInstance().registerDialogs(CastleStandardOkDialog, new BasicStandardOkDialogProperties(Localize.text("generic_alert_information"), Localize.text("errorCode_1")));
  }
  player_not_found() {
    super.player_not_found();
    CastleDialogHandler.getInstance().registerDialogs(CastleStandardOkDialog, new BasicStandardOkDialogProperties(Localize.text("generic_alert_information"), Localize.text("errorCode_21")));
  }
  get layoutManager() {
    return CastleLayoutManager.getInstance();
  }
}
classImplementsInterfaces(CastleLostPasswordCommand, "ISimpleCommand");
