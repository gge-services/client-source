import { CastleChangelistRewardsEvent } from "./CastleChangelistRewardsEvent";
import { CastleCommand } from "./CastleCommand";
import { ClientConstSF } from "./ClientConstSF";
import { CollectableManager } from "./CollectableManager";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class GPNCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_GET_PATCH_NOTE_REWARDS;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        var __s9local1 = CollectableManager.parser.s2cParamObject.createList(parsedResponse.R);
        this.controller.dispatchEvent(new CastleChangelistRewardsEvent(CastleChangelistRewardsEvent.DATA_UPDATED, __s9local1));
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
classImplementsInterfaces(GPNCommand, "IExecCommand");
