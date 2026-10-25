import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class NECCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_GET_NEXT_EXPIRING_CONSTRUCTION_ITEM_EVENT;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleModel.constructionItemData.parse_NEC(parsedResponse);
        if (parsedResponse.CI && CastleModel.areaData.activeArea) {
          CastleModel.areaData.activeArea.updater.parseConstructionItems(parsedResponse.CI);
        }
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
classImplementsInterfaces(NECCommand, "IExecCommand");
