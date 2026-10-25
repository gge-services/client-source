import { CastleBasicController } from "./CastleBasicController";
import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { GachaEvent } from "./GachaEvent";
export class CFCCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_GACHA_FREECHEST;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        var __s7local1 = parsedResponse.EID;
        var __s7local2 = CastleModel.specialEventData.getActiveEventByEventId(__s7local1);
        if (__s7local2) {
          __s7local2.parseGachaEvent(parsedResponse);
          CastleBasicController.getInstance().dispatchEvent(new GachaEvent(GachaEvent.SPIN, __s7local2));
        }
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
