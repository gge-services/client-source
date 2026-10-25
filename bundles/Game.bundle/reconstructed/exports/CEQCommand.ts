import { CastleCommand } from "./CastleCommand";
import { CastleEquipmentEvent } from "./CastleEquipmentEvent";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class CEQCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_CRAFT_EQUIPMENT;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleModel.equipData.parse_CEQ(parsedResponse);
        CastleModel.equipData.parse_ESL(parsedResponse.esl);
        CastleModel.gemData.parse_ESL(parsedResponse.esl);
        break;
      default:
        this.controller.dispatchEvent(new CastleEquipmentEvent(CastleEquipmentEvent.EQUIPMENT_CRAFTED_FAILED));
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
classImplementsInterfaces(CEQCommand, "IExecCommand");
