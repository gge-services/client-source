import { CastleBasicController } from "./CastleBasicController";
import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { GachaEvent } from "./GachaEvent";
export class DGECommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_GACHA_SPIN;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        var __s7local1 = parsedResponse.ID;
        var __s7local2 = CastleModel.gachaData.getGachaVOByID(__s7local1);
        var __s7local3 = __s7local2 ? CastleModel.specialEventData.getActiveEventByEventId(__s7local2.eventID) : null;
        if (__s7local3) {
          __s7local3.parseGachaEvent(parsedResponse);
          CastleBasicController.getInstance().dispatchEvent(new GachaEvent(GachaEvent.SPIN, __s7local3, parsedResponse.LTR));
        }
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
        CastleBasicController.getInstance().dispatchEvent(new GachaEvent(GachaEvent.SPIN_ANIMATION_COMPLETE, null));
    }
    return false;
  }
}
