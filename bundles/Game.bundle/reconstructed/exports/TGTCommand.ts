import { BasicStandardOkDialogProperties } from "../../../ggs.dll/reconstructed/exports/BasicStandardOkDialogProperties";
import { CastleCommand } from "./CastleCommand";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleModel } from "./CastleModel";
import { CastleStandardOkDialog } from "./CastleStandardOkDialog";
import { CastleTreasureMapEvent } from "./CastleTreasureMapEvent";
import { ClientConstSF } from "./ClientConstSF";
import { EnvGlobalsHandler } from "../../../ggs.dll/reconstructed/exports/EnvGlobalsHandler";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { Localize } from "../../../ggs.dll/reconstructed/exports/Localize";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class TGTCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_TREASUREMAP_GOODS_TRANSFER;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleModel.treasureMapData.parse_TMP(parsedResponse.tmp);
        break;
      case ERROR.NOT_ENOUGH_RESOURCES:
        var __s9local1 = Localize.text("generic_alert_information");
        var __s9local2 = Localize.text("errorCode_" + statusCode) + (EnvGlobalsHandler.globals.isTest || EnvGlobalsHandler.globals.isLocal ? " (" + this.cmdId + ")" : "");
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleStandardOkDialog, new BasicStandardOkDialogProperties(__s9local1, __s9local2));
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    CastleModel.treasureMapData.dispatchEvent(new CastleTreasureMapEvent(CastleTreasureMapEvent.RESOURCE_TRANSFER_DATA_UPDATED, null));
    return true;
  }
}
classImplementsInterfaces(TGTCommand, "IExecCommand");
