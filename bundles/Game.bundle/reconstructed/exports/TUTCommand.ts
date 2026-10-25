import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { CastleTreasureMapEvent } from "./CastleTreasureMapEvent";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class TUTCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_TREASUREMAP_UNIT_TRANSFER;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleModel.treasureMapData.parse_TMP(parsedResponse.tmp);
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    CastleModel.treasureMapData.dispatchEvent(new CastleTreasureMapEvent(CastleTreasureMapEvent.UNIT_TRANSFER_DATA_UPDATED, null));
    return true;
  }
}
classImplementsInterfaces(TUTCommand, "IExecCommand");
