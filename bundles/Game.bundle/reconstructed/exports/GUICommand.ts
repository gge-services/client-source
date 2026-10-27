import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { int } from "../../../ggs.dll/reconstructed/exports/int";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class GUICommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_GET_UNIT_INVENTORY;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  exec(argument0) {
    var __s9local0 = int(argument0[0]);
    var __s9local1 = argument0[1];
    switch (__s9local0) {
      case ERROR.ALL_OK:
        var __s9local2 = JSON.parse(__s9local1[1]);
        CastleModel.militaryData.parse_GUI(__s9local2);
        break;
      case ERROR.NOT_IN_OWNED_CASTLE:
    }
  }
}
classImplementsInterfaces(GUICommand, "IExecCommand");
