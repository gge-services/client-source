import { BasicStandardOkDialogProperties } from "../../../ggs.dll/reconstructed/exports/BasicStandardOkDialogProperties";
import { BasicStandardYesNoDialogProperties } from "../../../ggs.dll/reconstructed/exports/BasicStandardYesNoDialogProperties";
import { CastleCommand } from "./CastleCommand";
import { CastleDialogConsts } from "./CastleDialogConsts";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleFacebookEvent } from "./CastleFacebookEvent";
import { CastleModel } from "./CastleModel";
import { CastleStandardOkDialog } from "./CastleStandardOkDialog";
import { CastleStandardYesNoDialog } from "./CastleStandardYesNoDialog";
import { ClientConstSF } from "./ClientConstSF";
import { CommandController } from "../../../ggs.dll/reconstructed/exports/CommandController";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { IngameClientCommands } from "./IngameClientCommands";
import { Localize } from "../../../ggs.dll/reconstructed/exports/Localize";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class FCSCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_MAP_FACEBOOK;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleModel.userData.parse_FCS(parsedResponse);
        this.controller.dispatchEvent(new CastleFacebookEvent(CastleFacebookEvent.FACEBOOK_MAPPING_UPDATED));
        break;
      case ERROR.FACEBOOK_MAPPING_NOT_ESTABLISHED:
        this.facebookAccMappedToDifferentPlayer();
        break;
      case ERROR.FACEBOOK_WRONG_USER_ID:
        this.resetFacebookPlayerData();
        this.couldNotMapPlayer();
        break;
      default:
        CastleModel.userData.resetFacebookData();
        this.controller.dispatchEvent(new CastleFacebookEvent(CastleFacebookEvent.FACEBOOK_MAPPING_ERROR));
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
  resetFacebookPlayerData(__s12param0 = null) {
    CastleModel.userData.resetFacebookData();
    this.controller.dispatchEvent(new CastleFacebookEvent(CastleFacebookEvent.FACEBOOK_MAPPING_ERROR));
  }
  facebookAccMappedToDifferentPlayer() {
    CastleDialogHandler.getInstance().registerDialogsWithType(CastleStandardYesNoDialog, new BasicStandardYesNoDialogProperties(Localize.text("dialog_fbAlreadyUsed_header"), Localize.text("dialog_fbAlreadyUsed_desc"), this.bindFunction(this.onSwitchToFacebookAccount), this.bindFunction(this.resetFacebookPlayerData)), true, CastleDialogConsts.PRIORITY_TOP, 0, CastleDialogConsts.DIALOG_TYPE_MODAL);
  }
  onSwitchToFacebookAccount(__s16param0 = null) {
    CommandController.instance.executeCommand(IngameClientCommands.SWITCH_TO_CACHED_FACEBOOK_ACCOUNT);
  }
  couldNotMapPlayer() {
    CastleDialogHandler.getInstance().registerDialogsWithType(CastleStandardOkDialog, new BasicStandardOkDialogProperties(Localize.text("dialog_fbAlreadyUsed_header"), Localize.text("dialog_facebookPlayerAccountAlreadyLinked_desc")), false, CastleDialogConsts.PRIORITY_LOW, 0, CastleDialogConsts.DIALOG_TYPE_MODAL);
  }
}
classImplementsInterfaces(FCSCommand, "IExecCommand");
