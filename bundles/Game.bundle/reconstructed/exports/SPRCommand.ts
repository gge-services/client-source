import { BasicDialogHandler } from "../../../ggs.dll/reconstructed/exports/BasicDialogHandler";
import { castAs } from "../../../ggs.dll/reconstructed/exports/castAs";
import { CastleCommand } from "./CastleCommand";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleModel } from "./CastleModel";
import { CastlePaymentRewardSpecialOfferFinishDialog } from "./CastlePaymentRewardSpecialOfferFinishDialog";
import { CastleShoppingCartPrimeDayFinishDialogProperties } from "./CastleShoppingCartPrimeDayFinishDialogProperties";
import { ClientConstSF } from "./ClientConstSF";
import { CollectableList } from "./CollectableList";
import { CommKeys } from "../../../ggs.dll/reconstructed/exports/CommKeys";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { EventConst } from "../../../ggs.dll/reconstructed/exports/EventConst";
import { ShoppingCartConst } from "../../../ggs.dll/reconstructed/exports/ShoppingCartConst";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class SPRCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_SHOPPING_CART_REWARD;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        var __s9local1 = castAs(CastleModel.specialEventData.getActiveEventByEventId(EventConst.EVENTTYPE_SHOPPING_CART_PRIMEDAY), "ShoppingCartPrimeSaleEventVO");
        if (__s9local1) {
          var __s9local2 = __s9local1.rewardCount;
          __s9local1.c2Payed = parsedResponse[CommKeys.PAYED_C2];
          __s9local1.cartsPaid = __s9local1.rewardCount - __s9local2;
        }
        var __s9local3 = parsedResponse[CommKeys.SHOPPING_CART];
        if (!__s9local3 || __s9local3.length < ShoppingCartConst.SHOPPING_CART_SIZE) {
          break;
        }
        var __s9local4 = new CollectableList();
        var __s9local5 = undefined;
        for (var __s9local6 = 0; __s9local6 < __s9local3.length; __s9local6++) {
          (__s9local5 = CastleModel.shoppingCartPrimeDayData.getNodeByOption(__s9local3[__s9local6]).item.clone()).amount *= __s9local1 ? __s9local1.cartsPaid : 1;
          __s9local4.addItem(__s9local5);
        }
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastlePaymentRewardSpecialOfferFinishDialog, new CastleShoppingCartPrimeDayFinishDialogProperties(__s9local4, __s9local1), true, BasicDialogHandler.PRIORITY_HIGH);
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return true;
  }
}
classImplementsInterfaces(SPRCommand, "IExecCommand");
