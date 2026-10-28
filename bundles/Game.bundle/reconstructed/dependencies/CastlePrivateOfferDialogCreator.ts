import { CastleChestDialog } from "./CastleChestDialog";
import { CastleDungeonTreasureChestDialog } from "./CastleDungeonTreasureChestDialog";
import { CastleDungeonTreasureChestOpenDialog } from "./CastleDungeonTreasureChestOpenDialog";
import { CastleKongregateNotificationDialog } from "./CastleKongregateNotificationDialog";
import { CastleKongregateRatingDialog } from "./CastleKongregateRatingDialog";
import { CastleMultiChestDialog } from "./CastleMultiChestDialog";
import { CastlePaymentRewardSpecialOfferFinishDialog } from "./CastlePaymentRewardSpecialOfferFinishDialog";
import { CastlePOFurysBladeMessageDialog } from "./CastlePOFurysBladeMessageDialog";
import { CastlePrimeDayPODialog } from "./CastlePrimeDayPODialog";
import { CastlePrimeDayPOSMSDialog } from "./CastlePrimeDayPOSMSDialog";
import { CastlePrimeSaleDialog } from "./CastlePrimeSaleDialog";
import { CastlePrivateBestsellerShopDialog } from "./CastlePrivateBestsellerShopDialog";
import { CastlePrivateOfferBrandDialog } from "./CastlePrivateOfferBrandDialog";
import { CastlePrivateOfferCoinmineDialog } from "./CastlePrivateOfferCoinmineDialog";
import { CastlePrivateOfferCoinmineDoneDialog } from "./CastlePrivateOfferCoinmineDoneDialog";
import { CastlePrivateOfferDecorationDialog } from "./CastlePrivateOfferDecorationDialog";
import { CastlePrivateOfferDecorationFinishDialog } from "./CastlePrivateOfferDecorationFinishDialog";
import { CastlePrivateOfferPremiumSmsDialog } from "./CastlePrivateOfferPremiumSmsDialog";
import { CastlePrivateOfferRubymineDialog } from "./CastlePrivateOfferRubymineDialog";
import { CastlePrivateOfferRubymineDoneDialog } from "./CastlePrivateOfferRubymineDoneDialog";
import { CastlePrivateOfferTimeChallengeDialog } from "./CastlePrivateOfferTimeChallengeDialog";
import { CastlePrivateOfferTimeChallengeFinishDialog } from "./CastlePrivateOfferTimeChallengeFinishDialog";
import { CastlePrivateOfferTutorialCompletedDialog } from "./CastlePrivateOfferTutorialCompletedDialog";
import { CastlePrivatePrimeDayOfferDynamicDialog } from "./CastlePrivatePrimeDayOfferDynamicDialog";
import { CastlePrivatePrimeTimeOfferDialog } from "./CastlePrivatePrimeTimeOfferDialog";
import { CastleResourceMerchantEventDialog } from "./CastleResourceMerchantEventDialog";
import { CastleTreasureChestDialog } from "./CastleTreasureChestDialog";
import { CastleTreasureChestOpenDialog } from "./CastleTreasureChestOpenDialog";
import { CastleWhaleChestFinishDialog } from "./CastleWhaleChestFinishDialog";
import { ClientConstOffer } from "./ClientConstOffer";
import { PrivateOfferFailedStandardDialog } from "./PrivateOfferFailedStandardDialog";
import { PrivateOfferStateEnum } from "./PrivateOfferStateEnum";
export class CastlePrivateOfferDialogCreator {
  static getPrivateOfferDialogClass(argument0) {
    switch (argument0) {
      case CastleDungeonTreasureChestDialog.NAME:
        return CastleDungeonTreasureChestDialog;
      case CastleDungeonTreasureChestOpenDialog.NAME:
        return CastleDungeonTreasureChestOpenDialog;
      case CastleKongregateNotificationDialog.NAME:
        return CastleKongregateNotificationDialog;
      case CastleKongregateRatingDialog.NAME:
        return CastleKongregateRatingDialog;
      case CastleMultiChestDialog.NAME:
        return CastleMultiChestDialog;
      case CastlePrivateOfferBrandDialog.NAME:
        return CastlePrivateOfferBrandDialog;
      case CastlePrivateOfferCoinmineDialog.NAME:
        return CastlePrivateOfferCoinmineDialog;
      case CastlePrivateOfferCoinmineDoneDialog.NAME:
        return CastlePrivateOfferCoinmineDoneDialog;
      case CastlePrivateOfferDecorationDialog.NAME:
        return CastlePrivateOfferDecorationDialog;
      case CastlePrivateOfferDecorationFinishDialog.NAME:
        return CastlePrivateOfferDecorationFinishDialog;
      case CastlePrivateOfferPremiumSmsDialog.NAME:
        return CastlePrivateOfferPremiumSmsDialog;
      case CastlePrivateOfferRubymineDialog.NAME:
        return CastlePrivateOfferRubymineDialog;
      case CastlePrivateOfferRubymineDoneDialog.NAME:
        return CastlePrivateOfferRubymineDoneDialog;
      case CastlePrivateOfferTimeChallengeDialog.NAME:
        return CastlePrivateOfferTimeChallengeDialog;
      case CastlePrivateOfferTimeChallengeFinishDialog.NAME:
        return CastlePrivateOfferTimeChallengeFinishDialog;
      case CastlePrivateOfferTutorialCompletedDialog.NAME:
        return CastlePrivateOfferTutorialCompletedDialog;
      case PrivateOfferFailedStandardDialog.NAME:
        return PrivateOfferFailedStandardDialog;
      case CastlePrivatePrimeTimeOfferDialog.NAME:
        return CastlePrivatePrimeTimeOfferDialog;
      case CastleWhaleChestFinishDialog.NAME:
        return CastleWhaleChestFinishDialog;
      case CastlePrimeDayPODialog.NAME:
        return CastlePrimeDayPODialog;
      case CastlePrimeDayPOSMSDialog.NAME:
        return CastlePrimeDayPOSMSDialog;
      case CastlePrimeSaleDialog.NAME:
        return CastlePrimeSaleDialog;
      case CastleWhaleChestFinishDialog.PO_NAME:
        return CastleWhaleChestFinishDialog;
      case CastleChestDialog.NAME:
        return CastleChestDialog;
      case CastleTreasureChestDialog.NAME:
        return CastleTreasureChestDialog;
      case CastleTreasureChestOpenDialog.NAME:
        return CastleTreasureChestOpenDialog;
      case CastlePaymentRewardSpecialOfferFinishDialog.NAME:
        return CastlePaymentRewardSpecialOfferFinishDialog;
      case CastleResourceMerchantEventDialog.NAME:
        return CastleResourceMerchantEventDialog;
      case CastlePrivatePrimeDayOfferDynamicDialog.OFFER_NAME:
        return CastlePrivatePrimeDayOfferDynamicDialog;
      case CastlePOFurysBladeMessageDialog.OFFER_NAME:
        return CastlePOFurysBladeMessageDialog;
      case CastlePrivateBestsellerShopDialog.OFFER_NAME:
        return CastlePrivateBestsellerShopDialog;
    }
    return null;
  }
  static getPrivateOfferDialogName(argument0) {
    var __s8local0;
    var __s8local1 = argument0.getDescriptionByName(ClientConstOffer.VISUAL_COMPONENT_CONTAINER);
    if (PrivateOfferStateEnum.isFailedState(argument0.offerState) && __s8local1.visuals.get(ClientConstOffer.OFFER_VISUAL_FAILED_DIALOG) !== undefined) {
      __s8local0 = __s8local1.visuals.get(ClientConstOffer.OFFER_VISUAL_FAILED_DIALOG).dialogName;
    } else {
      switch (argument0.offerState) {
        case PrivateOfferStateEnum.QUEST_PENDING:
          if (__s8local1.visuals.get(ClientConstOffer.OFFER_VISUAL_QUEST_ACCEPT_DIALOG) !== undefined) {
            __s8local0 = __s8local1.visuals.get(ClientConstOffer.OFFER_VISUAL_QUEST_ACCEPT_DIALOG).dialogName;
          }
          break;
        case PrivateOfferStateEnum.QUEST_STARTED:
          if (__s8local1.visuals.get(ClientConstOffer.OFFER_VISUAL_QUEST_DIALOG) !== undefined) {
            __s8local0 = __s8local1.visuals.get(ClientConstOffer.OFFER_VISUAL_QUEST_DIALOG).dialogName;
          }
          break;
        case PrivateOfferStateEnum.OFFER_READY:
        case PrivateOfferStateEnum.OFFER_PENDING:
          if (__s8local1.visuals.get(ClientConstOffer.OFFER_VISUAL_OFFER_DIALOG) !== undefined) {
            __s8local0 = __s8local1.visuals.get(ClientConstOffer.OFFER_VISUAL_OFFER_DIALOG).dialogName;
          } else if (__s8local1.visuals.get(ClientConstOffer.OFFER_VISUAL_QUEST_DIALOG) !== undefined) {
            __s8local0 = __s8local1.visuals.get(ClientConstOffer.OFFER_VISUAL_QUEST_DIALOG).dialogName;
          }
          break;
        case PrivateOfferStateEnum.OFFER_SUCCEEDED:
        case PrivateOfferStateEnum.ITERATION_SUCCEEDED:
          if (__s8local1.visuals.get(ClientConstOffer.OFFER_VISUAL_FINISH_DIALOG) !== undefined) {
            __s8local0 = __s8local1.visuals.get(ClientConstOffer.OFFER_VISUAL_FINISH_DIALOG).dialogName;
          }
          break;
        default:
          console.log("DO NOT SHOW IN THIS STATE");
      }
    }
    return __s8local0;
  }
}
