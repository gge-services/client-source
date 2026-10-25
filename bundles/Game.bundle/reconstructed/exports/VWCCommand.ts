import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { EventConst } from "../../../ggs.dll/reconstructed/exports/EventConst";
export class VWCCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_VOTE_WORLD_CUP;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        if (parsedResponse) {
          var __s9local1 = CastleModel.specialEventData.getActiveEventByEventId(EventConst.EVENTTYPE_WORLD_CUP);
          if (__s9local1 && parsedResponse) {
            __s9local1.parse_VWC(parsedResponse);
          }
        }
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
