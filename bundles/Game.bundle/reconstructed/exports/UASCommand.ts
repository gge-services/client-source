import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class UASCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_UNLOCK_PREDEFINED_ATTACK_SETUP;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(__s9param0, __s9param1) {
    switch (__s9param0) {
      case ERROR.ALL_OK:
        CastleModel.fightPresetData.handleSuccessfullyUnlocked();
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  }
}
classImplementsInterfaces(UASCommand, "IExecCommand");
