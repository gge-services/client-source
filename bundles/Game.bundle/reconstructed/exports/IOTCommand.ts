import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class IOTCommand extends CastleCommand {
  constructor() {
    super();
  }
  get cmdId() {
    return ClientConstSF.S2C_INFO_ON_TITLES;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(argument0, argument1) {
    if (argument0 == ERROR.ALL_OK) {
      var __s9local0 = JSON.parse(argument1[1]);
      CastleModel.titleData.parseIOT(__s9local0);
    }
    return false;
  }
}
classImplementsInterfaces(IOTCommand, "IExecCommand");
