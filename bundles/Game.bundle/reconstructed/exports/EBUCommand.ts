import { C2SIsoBuyObjectVO } from "./C2SIsoBuyObjectVO";
import { CastleCommand } from "./CastleCommand";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleModel } from "./CastleModel";
import { CastleSkipBuildingDialog } from "./CastleSkipBuildingDialog";
import { CastleSkipBuildingDialogProperties } from "./CastleSkipBuildingDialogProperties";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { IsoEvent } from "./IsoEvent";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class EBUCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_BUY_OBJECT;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(__s9param0, __s9param1) {
    var __s9local0;
    switch (__s9param0) {
      case ERROR.ALL_OK:
        __s9local0 = JSON.parse(__s9param1[1]);
        if (CastleModel.areaData.activeArea) {
          CastleModel.areaData.activeArea.updater.parseEBU(__s9local0);
        }
        CastleModel.currencyData.parseGCU(__s9local0.gcu);
        CastleModel.decoStorage.parseSIN(__s9local0.sin);
        if (CastleModel.areaData.activeArea) {
          CastleModel.areaData.activeArea.updater.parseCBX(__s9local0.fbe, false);
        }
        break;
      case ERROR.NO_FREE_CONSTRUCTION_SLOT:
        __s9local0 = JSON.parse(__s9param1[1]);
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleSkipBuildingDialog, new CastleSkipBuildingDialogProperties(new C2SIsoBuyObjectVO(__s9local0.WID, __s9local0.X, __s9local0.Y, __s9local0.R, __s9local0.PO, false, __s9local0.DOID), __s9local0.WID));
        break;
      case ERROR.INVALID_POSITION:
        this.controller.dispatchEvent(new IsoEvent(IsoEvent.ON_DRAG_INVALID));
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  }
}
classImplementsInterfaces(EBUCommand, "IExecCommand");
