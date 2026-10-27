import { CastleCommand } from "./CastleCommand";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleEquipmentMerchantEventIncomingDialog } from "./CastleEquipmentMerchantEventIncomingDialog";
import { CastleEquipmentMerchantEventIncomingDialogProperties } from "./CastleEquipmentMerchantEventIncomingDialogProperties";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class BGMCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_BOUGHT_GEM;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleModel.equipData.parse_ESL(parsedResponse.esl);
        CastleModel.gemData.parse_ESL(parsedResponse.esl);
        var __s9local1 = new CastleEquipmentMerchantEventIncomingDialogProperties();
        __s9local1.inventory = BGMCommand.parseGemInventory(parsedResponse.GEM);
        __s9local1.packageID = parseInt(parsedResponse.PID);
        __s9local1.fromEventID = parseInt(parsedResponse.TID);
        __s9local1.fromBuyType = parseInt(parsedResponse.BT);
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleEquipmentMerchantEventIncomingDialog, __s9local1);
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
  static parseGemInventory(argument0) {
    if (!argument0) {
      return null;
    }
    var __s12local0 = [];
    if (argument0 != null) {
      for (var __s12local1 = 0, __s12local2 = argument0; __s12local1 < __s12local2.length; __s12local1++) {
        var __s12local3 = __s12local2[__s12local1];
        if (__s12local3 !== undefined) {
          var __s12local4 = CastleModel.gemData.getGemVO(parseInt(__s12local3));
          __s12local0.push(__s12local4);
        }
      }
    }
    return __s12local0;
  }
}
classImplementsInterfaces(BGMCommand, "IExecCommand");
