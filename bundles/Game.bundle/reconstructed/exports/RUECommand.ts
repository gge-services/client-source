import { CastleCommand } from "./CastleCommand";
import { CastleMilitaryDataEvent } from "./CastleMilitaryDataEvent";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
export class RUECommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_RECEIVED_UNIT;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(__s9param0, __s9param1) {
    var __s9local0;
    switch (__s9param0) {
      case ERROR.ALL_OK:
        __s9local0 = JSON.parse(__s9param1[1]);
        CastleModel.militaryData.parse_rue(__s9local0);
        CastleModel.userCastleListDetailed.parse_rue(__s9local0);
        this.controller.dispatchEvent(new CastleMilitaryDataEvent(CastleMilitaryDataEvent.UNIT_UPDATED, [__s9local0]));
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  }
}
