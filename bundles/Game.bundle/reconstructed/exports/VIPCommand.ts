import { CastleCommand } from "./CastleCommand";
import { CastleLayoutManager } from "./CastleLayoutManager";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { int } from "../../../ggs.dll/reconstructed/exports/int";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class VIPCommand extends CastleCommand {
  executeCommand(statusCode, responseFields) {
    return super.executeCommand(statusCode, responseFields);
  }
  exec(commandResponse) {
    var __s7local0 = int(commandResponse[0]);
    var __s7local1 = commandResponse[1];
    switch (__s7local0) {
      case ERROR.ALL_OK:
        var __s7local2 = JSON.parse(__s7local1[1]);
        CastleModel.vipData.parse_VIP(__s7local2);
        if (CastleLayoutManager.getInstance().worldmapScreen && CastleLayoutManager.getInstance().worldmapScreen.renderer) {
          CastleLayoutManager.getInstance().worldmapScreen.renderer.invalidateMap();
          CastleLayoutManager.getInstance().worldmapScreen.renderer.clearMapobjects(false);
        }
        break;
      default:
        this.showErrorDialog(__s7local0, __s7local1);
    }
  }
  get cmdId() {
    return ClientConstSF.S2C_VIP_INFO_EVENT;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
}
classImplementsInterfaces(VIPCommand, "IExecCommand");
