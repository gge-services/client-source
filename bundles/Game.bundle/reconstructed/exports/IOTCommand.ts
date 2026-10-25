import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
export class IOTCommand extends CastleCommand {
  constructor(...args) {
    super();
  }
  get cmdId() {
    return ClientConstSF.S2C_INFO_ON_TITLES;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(__s9param0, __s9param1) {
    if (__s9param0 == ERROR.ALL_OK) {
      var __s9local0 = JSON.parse(__s9param1[1]);
      CastleModel.titleData.parseIOT(__s9local0);
    }
    return false;
  }
}
