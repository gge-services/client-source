import { C2SGetCastleListVO } from "./C2SGetCastleListVO";
import { CastleCommand } from "./CastleCommand";
import { CastleLayoutManager } from "./CastleLayoutManager";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { int } from "../../../ggs.dll/reconstructed/exports/int";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
const __s0local0 = createjs.Point;
export class GRICommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_GET_RELOCATION_INFO;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        if (int(parsedResponse.JM) == 1 && (this.layoutManager.currentState == CastleLayoutManager.STATE_WORLDMAP || this.layoutManager.currentState == CastleLayoutManager.STATE_WORLDMAP_RELOCATION)) {
          var __s9local1 = CastleModel.worldmapData.getAreaVEByXY(new __s0local0(parsedResponse.OX, parsedResponse.OY), true);
          this.layoutManager.hideAllIngameUIComponents();
          if (__s9local1) {
            this.layoutManager.hideAllIngameUIComponents();
            __s9local1.remove();
            __s9local1.removeNameMC();
          }
          var __s9local2 = CastleModel.worldmapData.areaTiles.getVOForAreaByXY(parsedResponse.OX, parsedResponse.OY);
          if (__s9local2) {
            __s9local2.resetVO();
          }
        }
        CastleModel.userData.parse_GRI(parsedResponse);
        CastleModel.smartfoxClient.sendCommandVO(new C2SGetCastleListVO(CastleModel.userData.playerID));
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
classImplementsInterfaces(GRICommand, "IExecCommand");
