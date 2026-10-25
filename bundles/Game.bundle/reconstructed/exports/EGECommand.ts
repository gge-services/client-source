import { C2SGetEquipmentInventory } from "./C2SGetEquipmentInventory";
import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
export class EGECommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_EXTRACT_GEM;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(__s9param0, __s9param1) {
    switch (__s9param0) {
      case ERROR.ALL_OK:
        CastleModel.gemData.gemExtractionSuccess();
        CastleModel.smartfoxClient.sendCommandVO(new C2SGetEquipmentInventory());
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  }
}
