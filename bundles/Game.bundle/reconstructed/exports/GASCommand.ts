import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
export class GASCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_GET_PREDEFINED_ATTACK_SETUP;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(__s9param0, __s9param1) {
    switch (__s9param0) {
      case ERROR.ALL_OK:
        try {
          var __s9local0 = JSON.parse(__s9param1[1]);
          CastleModel.fightPresetData.parsePresets(__s9local0);
        } catch (__s13local0) {}
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  }
}
