import { BasicController } from "../../../ggs.dll/reconstructed/exports/BasicController";
import { BasicLayoutManager } from "../../../ggs.dll/reconstructed/exports/BasicLayoutManager";
import { BasicStandardOkDialogProperties } from "../../../ggs.dll/reconstructed/exports/BasicStandardOkDialogProperties";
import { CastleCommand } from "./CastleCommand";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleModel } from "./CastleModel";
import { CastleStandardOkDialog } from "./CastleStandardOkDialog";
import { ClientConstSF } from "./ClientConstSF";
import { CommandController } from "../../../ggs.dll/reconstructed/exports/CommandController";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { ExternalLog } from "../../../ggs.dll/reconstructed/exports/ExternalLog";
import { IngameClientCommands } from "./IngameClientCommands";
import { Localize } from "../../../ggs.dll/reconstructed/exports/Localize";
import { VCKCommandOkEvent } from "./VCKCommandOkEvent";
import { VersionErrorLOFactory } from "../../../ggs.dll/reconstructed/exports/VersionErrorLOFactory";
export class VCKLegacyCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_VERSION_CHECK;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(__s9param0, __s9param1) {
    this.env.buildNumberServer = __s9param1[1];
    switch (__s9param0) {
      case ERROR.ALL_OK:
        this.layoutManager.showServerAndClientVersion();
        this.controller.dispatchEvent(new VCKCommandOkEvent(VCKCommandOkEvent.VCK_OK));
        if (this.env.accessKey != "" || this.env.pln != "" && this.env.sig != "" && !this.env.isFacebook) {
          CommandController.instance.executeCommand(BasicController.COMMAND_LOGIN);
          CommandController.instance.executeCommand(IngameClientCommands.INIT_EQUIPMENT_FAVORITES);
        } else {
          if (this.layoutManager.currentState == BasicLayoutManager.STATE_STARTSCREEN) {
            return true;
          }
          if (CastleModel.smartfoxClient.userForcedDisconnect || CastleModel.localData.readLoginDataUsername() == null || CastleModel.localData.readLoginDataUsername() == "" || CastleModel.localData.readLoginDataLoginToken() == null || CastleModel.localData.readLoginDataLoginToken() == "") {
            this.layoutManager.state = BasicLayoutManager.STATE_STARTSCREEN;
          } else {
            CastleModel.userData.userName = CastleModel.localData.readLoginDataUsername();
            CastleModel.userData.loginToken = CastleModel.localData.readLoginDataLoginToken();
            CommandController.instance.executeCommand(BasicController.COMMAND_LOGIN);
            CommandController.instance.executeCommand(IngameClientCommands.INIT_EQUIPMENT_FAVORITES);
          }
        }
        return true;
      case ERROR.GENERAL_ERROR:
      case ERROR.INVALID_PARAMETER_VALUE:
        CastleDialogHandler.getInstance().registerDialogs(CastleStandardOkDialog, new BasicStandardOkDialogProperties(Localize.text("generic_versioncheck_error"), Localize.text("generic_versioncheck_errorcode_1")));
        this.logError(__s9param0);
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
        this.logError(__s9param0);
    }
    return false;
  }
  logError(__s17param0) {
    ExternalLog.logger.log(new VersionErrorLOFactory(VersionErrorLOFactory.OLD_CLIENT_VERSION_ERROR, this.env.buildNumberServer));
  }
}
