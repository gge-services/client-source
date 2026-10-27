import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class EEQCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_EQUIP_EQUIPMENT;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(argument0, argument1) {
    switch (argument0) {
      case ERROR.ALL_OK:
        CastleModel.equipData.parse_EEQ();
        break;
      default:
        CastleModel.equipData.error_EEQ(argument0);
    }
    return false;
  }
}
classImplementsInterfaces(EEQCommand, "IExecCommand");
