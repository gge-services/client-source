import { CastleBasicController } from "./CastleBasicController";
import { CastleCommand } from "./CastleCommand";
import { CastleEquipmentEvent } from "./CastleEquipmentEvent";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
export class ERECommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_ENCHANT_RELIC_ITEM_EVENT;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleBasicController.getInstance().dispatchEvent(new CastleEquipmentEvent(CastleEquipmentEvent.RELIC_UPGRADE_RECEIVED, [parsedResponse.E]));
        break;
      case ERROR.ENCHANTING_FAILED:
        CastleBasicController.getInstance().dispatchEvent(new CastleEquipmentEvent(CastleEquipmentEvent.RELIC_UPGRADE_RECEIVED, []));
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
        CastleBasicController.getInstance().dispatchEvent(new CastleEquipmentEvent(CastleEquipmentEvent.RELIC_UPGRADE_RECEIVED, []));
    }
    return false;
  }
}
