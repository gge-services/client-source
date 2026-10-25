import { BasicController } from "../../../ggs.dll/reconstructed/exports/BasicController";
import { BasicErrorConstants } from "../../../ggs.dll/reconstructed/exports/BasicErrorConstants";
import { BasicStandardOkDialogProperties } from "../../../ggs.dll/reconstructed/exports/BasicStandardOkDialogProperties";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleLayoutManager } from "./CastleLayoutManager";
import { CastleModel } from "./CastleModel";
import { CastleStandardOkDialog } from "./CastleStandardOkDialog";
import { CastleWorldSelectionDialog } from "./CastleWorldSelectionDialog";
import { CommandController } from "../../../ggs.dll/reconstructed/exports/CommandController";
import { Localize } from "../../../ggs.dll/reconstructed/exports/Localize";
import { ServerErrorVO } from "../../../ggs.dll/reconstructed/exports/ServerErrorVO";
import { VCKCommand } from "../../../ggs.dll/reconstructed/exports/VCKCommand";
export class CastleVCKCommand extends VCKCommand {
  executeCommand(__s5param0, __s5param1) {
    this.env.buildNumberServer = __s5param1[1];
    this.env.versionInformation.buildNumberServer = __s5param1[1];
    if (__s5param0 == BasicErrorConstants.ALL_OK) {
      this.handleAllOk();
    } else if (__s5param0 == VCKCommand.VERSION_TOO_LOW) {
      this.handleVersionToLow();
      this.logError(__s5param0);
    } else if (__s5param0 == VCKCommand.VERSION_TOO_HIGH) {
      this.handleVersionToHigh();
      this.logError(__s5param0);
    } else {
      CommandController.instance.executeCommand(BasicController.COMMAND_HANDLE_SERVER_ERROR, new ServerErrorVO(__s5param0, __s5param1, this.cmdId));
      this.logError(__s5param0);
    }
    return false;
  }
  handleVersionToLow() {
    this.handleVersionError();
  }
  handleVersionToHigh() {
    this.handleVersionError();
  }
  handleVersionError() {
    if (CastleModel.userData.connectToSpecialServer) {
      CastleModel.userData.resetConnectToFlags();
    }
    if (this.env.isTest) {
      CastleDialogHandler.getInstance().registerDialogs(CastleStandardOkDialog, new BasicStandardOkDialogProperties(Localize.text("generic_versioncheck_error"), Localize.text("generic_versioncheck_errorcode_1"), this.bindFunction(this.openWorldSelectionDialog)));
    } else {
      CastleDialogHandler.getInstance().registerDialogs(CastleStandardOkDialog, new BasicStandardOkDialogProperties(Localize.text("generic_versioncheck_error"), Localize.text("generic_versioncheck_errorcode_1")));
    }
  }
  openWorldSelectionDialog(__s20param0 = null) {
    CastleDialogHandler.getInstance().registerDialogs(CastleWorldSelectionDialog);
  }
  get layoutManager() {
    return CastleLayoutManager.getInstance();
  }
}
