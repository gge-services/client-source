import { CastleAllianceGiftCollectedDialog } from "./CastleAllianceGiftCollectedDialog";
import { CastleAllianceGiftCollectedDialogProperties } from "./CastleAllianceGiftCollectedDialogProperties";
import { CastleCommand } from "./CastleCommand";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
export class AGCCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_ALLIANCE_GIFT_COLLECT;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        var __s9local1 = CastleModel.allianceGiftData.parse_AGC(parsedResponse);
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleAllianceGiftCollectedDialog, new CastleAllianceGiftCollectedDialogProperties(__s9local1));
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
