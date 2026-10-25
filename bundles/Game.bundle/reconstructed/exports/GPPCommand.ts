import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { CastleResourceMerchantEventBuyDialog } from "./CastleResourceMerchantEventBuyDialog";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class GPPCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_GET_PACKAGE_PRICE;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleModel.eventPackageData.getPackagePrice(parsedResponse);
        break;
      default:
        this.layoutManager.hideDialog(CastleResourceMerchantEventBuyDialog);
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
classImplementsInterfaces(GPPCommand, "IExecCommand");
