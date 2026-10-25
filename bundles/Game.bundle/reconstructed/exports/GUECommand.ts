import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { GeneralsEvent } from "./GeneralsEvent";
export class GUECommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.C2S_GENERAL_UNLOCK;
  }
  executeCommand(__s7param0, __s7param1) {
    switch (__s7param0) {
      case ERROR.ALL_OK:
        CastleModel.generalsData.dispatchEvent(new GeneralsEvent(GeneralsEvent.GENERAL_UNLOCKED));
        break;
      default:
        this.showErrorDialog(__s7param0, __s7param1);
    }
    return false;
  }
}
