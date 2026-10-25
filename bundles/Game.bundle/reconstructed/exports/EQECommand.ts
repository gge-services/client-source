import { CastleCommand } from "./CastleCommand";
import { CastleEquipmentEvent } from "./CastleEquipmentEvent";
import { CastleEquipmentFactory } from "./CastleEquipmentFactory";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
export class EQECommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.C2S_ENCHANT_EQUIPMENT_EVENT;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        this.controller.dispatchEvent(new CastleEquipmentEvent(CastleEquipmentEvent.EQUIPMENT_ENCHANTED, this.parse_equipment(parsedResponse.E)));
        break;
      case ERROR.ENCHANTING_FAILED:
        this.controller.dispatchEvent(new CastleEquipmentEvent(CastleEquipmentEvent.EQUIPMENT_ENCHANTING_FAILED, null));
        break;
      default:
        this.controller.dispatchEvent(new CastleEquipmentEvent(CastleEquipmentEvent.EQUIPMENT_ENCHANTING_INVALID));
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
  parse_equipment(__s12param0) {
    if (!__s12param0) {
      return null;
    }
    var __s12local0 = [];
    var __s12local1 = CastleEquipmentFactory.createEquipmentVO(__s12param0);
    __s12local0.push(__s12local1);
    return __s12local0;
  }
}
