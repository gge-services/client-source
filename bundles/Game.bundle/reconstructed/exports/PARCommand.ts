import { BasicDialogHandler } from "../../../ggs.dll/reconstructed/exports/BasicDialogHandler";
import { castAs } from "../../../ggs.dll/reconstructed/exports/castAs";
import { CastleCommand } from "./CastleCommand";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleModel } from "./CastleModel";
import { CastlePaymentRewardSpecialOfferFinishDialog } from "./CastlePaymentRewardSpecialOfferFinishDialog";
import { CastlePaymentRewardSpecialOfferFinishDialogProperties } from "./CastlePaymentRewardSpecialOfferFinishDialogProperties";
import { CastleTieredPrimeDayRewardDialog } from "./CastleTieredPrimeDayRewardDialog";
import { CastleTieredPrimeDayRewardProperties } from "./CastleTieredPrimeDayRewardProperties";
import { ClientConstSF } from "./ClientConstSF";
import { CollectableManager } from "./CollectableManager";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { EventConst } from "../../../ggs.dll/reconstructed/exports/EventConst";
export class PARCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_PAYMENT_REWARD;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        if (parsedResponse != null) {
          for (var __s9local1 = 0, __s9local2 = parsedResponse; __s9local1 < __s9local2.length; __s9local1++) {
            var __s9local3 = __s9local2[__s9local1];
            if (__s9local3 !== undefined) {
              var __s9local4 = castAs(CastleModel.specialEventData.getActiveEventByEventId(EventConst.EVENTTYPE_TIERED_PRIME_DAY), "TieredPaymentrewardEventVO");
              if (__s9local4) {
                __s9local4.boughtC2 = __s9local3.BC2;
              }
              var __s9local5 = CastleModel.primeDayData.getPrimeDayXMLNodeByID(__s9local3.ST);
              if (__s9local5 && __s9local5.isMultiTiered) {
                var __s9local6 = CollectableManager.parser.s2cParamList.createList(__s9local3.RW);
                var __s9local7 = new CastleTieredPrimeDayRewardProperties(__s9local6);
                CastleDialogHandler.getInstance().registerDefaultDialogs(CastleTieredPrimeDayRewardDialog, __s9local7, true, BasicDialogHandler.PRIORITY_HIGH);
              } else {
                CastleDialogHandler.getInstance().registerDefaultDialogs(CastlePaymentRewardSpecialOfferFinishDialog, new CastlePaymentRewardSpecialOfferFinishDialogProperties(__s9local3), true, BasicDialogHandler.PRIORITY_HIGH);
              }
            }
          }
        }
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
