import { CastleCommand } from "./CastleCommand";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleModel } from "./CastleModel";
import { CastleRelocateRuinDialog } from "./CastleRelocateRuinDialog";
import { CastleRelocateRuinDialogProperties } from "./CastleRelocateRuinDialogProperties";
import { CastleWorldmapEvent } from "./CastleWorldmapEvent";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { int } from "../../../ggs.dll/reconstructed/exports/int";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class RUICommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_RUIN_INFO;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        var __s9local1 = int(parsedResponse.ART);
        var __s9local2 = int(parsedResponse.PX);
        var __s9local3 = int(parsedResponse.PY);
        CastleModel.worldmapData.dispatchEvent(new CastleWorldmapEvent(CastleWorldmapEvent.CLICK_RUIN, [null, __s9local1]));
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleRelocateRuinDialog, new CastleRelocateRuinDialogProperties(__s9local2, __s9local3, __s9local1, true));
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
classImplementsInterfaces(RUICommand, "IExecCommand");
