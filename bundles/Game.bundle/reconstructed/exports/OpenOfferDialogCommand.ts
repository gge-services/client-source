import { BasicDialogHandler } from "../../../ggs.dll/reconstructed/exports/BasicDialogHandler";
import { BasicModel } from "../../../ggs.dll/reconstructed/exports/BasicModel";
import { castAs } from "../../../ggs.dll/reconstructed/exports/castAs";
import { CastleDialogConsts } from "./CastleDialogConsts";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleGlobalOfferData } from "./CastleGlobalOfferData";
import { CastleLayoutManager } from "./CastleLayoutManager";
import { CastleModel } from "./CastleModel";
import { CastleOfferDialogProperties } from "./CastleOfferDialogProperties";
import { CastlePrivatePrimeTimeOfferDialog } from "./CastlePrivatePrimeTimeOfferDialog";
import { CastleSpecialIngameOfferDialog } from "./CastleSpecialIngameOfferDialog";
import { CastleTimelessSpecialOfferDialog } from "./CastleTimelessSpecialOfferDialog";
import { ClientConstLevelRestrictions } from "./ClientConstLevelRestrictions";
import { EventConst } from "../../../ggs.dll/reconstructed/exports/EventConst";
import { ModernPrimeTimeDialog } from "./ModernPrimeTimeDialog";
import { PaymentPopupDialogInfoVO } from "./PaymentPopupDialogInfoVO";
import { PrimeTimeSkinDialog } from "./PrimeTimeSkinDialog";
import { SimpleCommand } from "../../../ggs.dll/reconstructed/exports/SimpleCommand";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class OpenOfferDialogCommand extends SimpleCommand {
  execute(argument0 = null) {
    var __s5local0 = castAs(argument0, "GlobalOfferVO");
    if (__s5local0 && BasicModel.sessionData.loggedIn) {
      var __s5local1;
      var __s5local2 = new CastleOfferDialogProperties(__s5local0);
      switch (__s5local0.offerType) {
        case CastleGlobalOfferData.EVENT_SPECIALINGAMEOFFER:
          CastleDialogHandler.getInstance().registerDefaultDialogs(CastleSpecialIngameOfferDialog, new CastleOfferDialogProperties(__s5local0), true, BasicDialogHandler.PRIORITY_LOW);
          break;
        case CastleGlobalOfferData.EVENT_SPECIALOFFER:
          if (CastleModel.userData.userLevel >= ClientConstLevelRestrictions.MIN_LEVEL_PRIMETIME) {
            if (__s5local0.isTimeless) {
              __s5local1 = new PaymentPopupDialogInfoVO(CastleTimelessSpecialOfferDialog, __s5local2, CastleDialogConsts.DIALOG_TYPE_PAYMENT_PRIME_TIME, true, BasicDialogHandler.PRIORITY_MIDDLE);
            } else {
              var __s5local3 = CastleModel.specialEventData.getActiveEventByEventId(EventConst.EVENTTYPE_PRIME_TIME_SKIN);
              __s5local1 = !!__s5local3 && BasicModel.basicLoaderData.isItemAssetVersioned("PrimeTimeDialog_" + __s5local3.skinName) ? new PaymentPopupDialogInfoVO(PrimeTimeSkinDialog, __s5local2, CastleDialogConsts.DIALOG_TYPE_PAYMENT_PRIME_TIME, true, BasicDialogHandler.PRIORITY_MIDDLE) : new PaymentPopupDialogInfoVO(ModernPrimeTimeDialog, __s5local2, CastleDialogConsts.DIALOG_TYPE_PAYMENT_PRIME_TIME, true, BasicDialogHandler.PRIORITY_MIDDLE);
            }
          }
          break;
        case CastleGlobalOfferData.PRIME_TIME:
          __s5local1 = __s5local0.isTimeless ? new PaymentPopupDialogInfoVO(CastleTimelessSpecialOfferDialog, __s5local2, CastleDialogConsts.DIALOG_TYPE_PAYMENT_PRIME_TIME, true, BasicDialogHandler.PRIORITY_MIDDLE) : new PaymentPopupDialogInfoVO(CastlePrivatePrimeTimeOfferDialog, __s5local2, CastleDialogConsts.DIALOG_TYPE_PAYMENT_PRIVATE_PRIME_TIME);
      }
      if (__s5local1 && !CastleLayoutManager.getInstance().isDialogVisibleByName(__s5local1.dialogClass)) {
        CastleDialogHandler.getInstance().registerDialogsWithType(__s5local1.dialogClass, __s5local1.properties, __s5local1.blockDialogs, __s5local1.priority, 0, __s5local1.type);
      }
    }
  }
}
classImplementsInterfaces(OpenOfferDialogCommand, "ISimpleCommand");
