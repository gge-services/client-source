import { C2SIsoUpgradeObjectVO } from "./C2SIsoUpgradeObjectVO";
import { CastleCommand } from "./CastleCommand";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleModel } from "./CastleModel";
import { CastleSkipBuildingDialog } from "./CastleSkipBuildingDialog";
import { CastleSkipBuildingDialogProperties } from "./CastleSkipBuildingDialogProperties";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class EUPCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_UPGRADE_OBJECT;
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
          CastleModel.areaData.activeArea.updater.parseEUP(__s9local0);
        }
        CastleModel.currencyData.parseGCU(__s9local0.gcu);
        break;
      case ERROR.NO_FREE_CONSTRUCTION_SLOT:
        __s9local0 = JSON.parse(__s9param1[1]);
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleSkipBuildingDialog, new CastleSkipBuildingDialogProperties(new C2SIsoUpgradeObjectVO(__s9local0.OID, __s9local0.PO), __s9local0.WID));
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  }
}
classImplementsInterfaces(EUPCommand, "IExecCommand");
