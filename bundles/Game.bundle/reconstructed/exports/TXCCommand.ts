import { CastleCommand } from "./CastleCommand";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleGetTaxDialog } from "./CastleGetTaxDialog";
import { CastleGetTaxDialogProperties } from "./CastleGetTaxDialogProperties";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { int } from "../../../ggs.dll/reconstructed/exports/int";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class TXCCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_COLLECT_TAX;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleModel.currencyData.parseGCU(parsedResponse.gcu);
        CastleModel.taxData.parse_TXI(parsedResponse.txi);
        var __s9local1 = int(parsedResponse.CT);
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleGetTaxDialog, new CastleGetTaxDialogProperties(__s9local1));
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
classImplementsInterfaces(TXCCommand, "IExecCommand");
