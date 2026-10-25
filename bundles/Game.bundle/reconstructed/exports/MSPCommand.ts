import { CastleCommand } from "./CastleCommand";
import { CastlePopUpHelper } from "./CastlePopUpHelper";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { int } from "../../../ggs.dll/reconstructed/exports/int";
export class MSPCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_SHOW_POPUP;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    return super.executeCommand(statusCode, responseFields);
  }
  exec(__s11param0) {
    var __s11local0 = int(__s11param0[0]);
    var __s11local1 = __s11param0[1];
    if (__s11local0 == ERROR.ALL_OK) {
      var __s11local2 = JSON.parse(__s11local1[1]);
      CastlePopUpHelper.displayPopUps(__s11local2);
    } else {
      this.showErrorDialog(__s11local0, __s11local1);
    }
  }
}
