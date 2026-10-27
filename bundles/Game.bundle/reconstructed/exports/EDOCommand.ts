import { C2SIsoDisassembleObjectVO } from "./C2SIsoDisassembleObjectVO";
import { CastleCommand } from "./CastleCommand";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleModel } from "./CastleModel";
import { CastleSkipBuildingDialog } from "./CastleSkipBuildingDialog";
import { CastleSkipBuildingDialogProperties } from "./CastleSkipBuildingDialogProperties";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class EDOCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_DISASSEMBLE_OBJECT;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    var __s9local0;
    switch (statusCode) {
      case ERROR.ALL_OK:
        __s9local0 = JSON.parse(responseFields[1]);
        CastleModel.areaData.activeArea.updater.parseEDO(__s9local0);
        break;
      case ERROR.NO_FREE_CONSTRUCTION_SLOT:
        __s9local0 = JSON.parse(responseFields[1]);
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleSkipBuildingDialog, new CastleSkipBuildingDialogProperties(new C2SIsoDisassembleObjectVO(__s9local0.OID), __s9local0.WID));
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
classImplementsInterfaces(EDOCommand, "IExecCommand");
