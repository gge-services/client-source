import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { EventConst } from "../../../ggs.dll/reconstructed/exports/EventConst";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class FGBCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_GET_FACTION_BALANCE;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        if (parsedResponse) {
          var __s9local1 = CastleModel.specialEventData.getActiveEventByEventId(EventConst.EVENTTYPE_FACTION);
          if (__s9local1) {
            __s9local1.parse_FGB(parsedResponse);
          }
        }
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
classImplementsInterfaces(FGBCommand, "IExecCommand");
