import { AMessageSpyVO } from "./AMessageSpyVO";
import { castAs } from "../../../ggs.dll/reconstructed/exports/castAs";
import { CastleCommand } from "./CastleCommand";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleModel } from "./CastleModel";
import { CastleSpyinfoDetailsDialog } from "./CastleSpyinfoDetailsDialog";
import { CastleSpyinfoDetailsDialogProperties } from "./CastleSpyinfoDetailsDialogProperties";
import { CastleSpyLogVO } from "./CastleSpyLogVO";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class SSUCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_SPY_SPY_UNITS;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        var __s9local1 = new CastleSpyLogVO();
        __s9local1.parseSpyLog(parsedResponse);
        var __s9local2 = castAs(CastleModel.worldmapData.areaTiles.getVOForAreaByXY(__s9local1.areaPosX, __s9local1.areaPosY), "InteractiveMapobjectVO");
        if (__s9local2) {
          __s9local1.mapobjectVO = __s9local2;
        }
        var __s9local3 = new AMessageSpyVO();
        __s9local3.forwarded = false;
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleSpyinfoDetailsDialog, new CastleSpyinfoDetailsDialogProperties(__s9local1, __s9local3, null));
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
classImplementsInterfaces(SSUCommand, "IExecCommand");
