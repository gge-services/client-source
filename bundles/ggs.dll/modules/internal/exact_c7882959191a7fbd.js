Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_AllianceCreate = require("gge-module:export_AllianceCreate");
exports.validateTrackingEvent = function validateTrackingEvent(__s1param0) {
  var __s1local0;
  switch (__s1param0.eventId) {
    case __dep_export_AllianceCreate.AllianceCreate.ID:
      __s1local0 = __dep_export_AllianceCreate.AllianceCreate.validateEvent;
      break;
    case __dep_export_AllianceCreate.AllianceDiplomacy.ID:
      __s1local0 = __dep_export_AllianceCreate.AllianceDiplomacy.validateEvent;
      break;
    case __dep_export_AllianceCreate.AllianceDelete.ID:
      __s1local0 = __dep_export_AllianceCreate.AllianceDelete.validateEvent;
      break;
    case __dep_export_AllianceCreate.AllianceMemberChange.ID:
      __s1local0 = __dep_export_AllianceCreate.AllianceMemberChange.validateEvent;
      break;
    case __dep_export_AllianceCreate.AlliancePayment.ID:
      __s1local0 = __dep_export_AllianceCreate.AlliancePayment.validateEvent;
      break;
    case __dep_export_AllianceCreate.AreaRuin.ID:
      __s1local0 = __dep_export_AllianceCreate.AreaRuin.validateEvent;
      break;
    case __dep_export_AllianceCreate.AreaAbandon.ID:
      __s1local0 = __dep_export_AllianceCreate.AreaAbandon.validateEvent;
      break;
    case __dep_export_AllianceCreate.AreaRelocate.ID:
      __s1local0 = __dep_export_AllianceCreate.AreaRelocate.validateEvent;
      break;
    case __dep_export_AllianceCreate.BattleMeta.ID:
      __s1local0 = __dep_export_AllianceCreate.BattleMeta.validateEvent;
      break;
    case __dep_export_AllianceCreate.BattleShadow.ID:
      __s1local0 = __dep_export_AllianceCreate.BattleShadow.validateEvent;
      break;
    case __dep_export_AllianceCreate.ColossusDepositEvent.ID:
      __s1local0 = __dep_export_AllianceCreate.ColossusDepositEvent.validateEvent;
      break;
    case __dep_export_AllianceCreate.CraftingEquipment.ID:
      __s1local0 = __dep_export_AllianceCreate.CraftingEquipment.validateEvent;
      break;
    case __dep_export_AllianceCreate.CrusadeDungeon.ID:
      __s1local0 = __dep_export_AllianceCreate.CrusadeDungeon.validateEvent;
      break;
    case __dep_export_AllianceCreate.DailyQuests.ID:
      __s1local0 = __dep_export_AllianceCreate.DailyQuests.validateEvent;
      break;
    case __dep_export_AllianceCreate.DisassembleRubyBuilding.ID:
      __s1local0 = __dep_export_AllianceCreate.DisassembleRubyBuilding.validateEvent;
      break;
    case __dep_export_AllianceCreate.FinishedEvents.ID:
      __s1local0 = __dep_export_AllianceCreate.FinishedEvents.validateEvent;
      break;
    case __dep_export_AllianceCreate.GlobalFactionState.ID:
      __s1local0 = __dep_export_AllianceCreate.GlobalFactionState.validateEvent;
      break;
    case __dep_export_AllianceCreate.LongTermPointEventTotalPoints.ID:
      __s1local0 = __dep_export_AllianceCreate.LongTermPointEventTotalPoints.validateEvent;
      break;
    case __dep_export_AllianceCreate.LuckyWheelSpin.ID:
      __s1local0 = __dep_export_AllianceCreate.LuckyWheelSpin.validateEvent;
      break;
    case __dep_export_AllianceCreate.MessageSent.ID:
      __s1local0 = __dep_export_AllianceCreate.MessageSent.validateEvent;
      break;
    case __dep_export_AllianceCreate.MinuteSkips.ID:
      __s1local0 = __dep_export_AllianceCreate.MinuteSkips.validateEvent;
      break;
    case __dep_export_AllianceCreate.PaymentRewardGrant.ID:
      __s1local0 = __dep_export_AllianceCreate.PaymentRewardGrant.validateEvent;
      break;
    case __dep_export_AllianceCreate.PlayerVIP.ID:
      __s1local0 = __dep_export_AllianceCreate.PlayerVIP.validateEvent;
      break;
    case __dep_export_AllianceCreate.PrimeDaySeen.ID:
      __s1local0 = __dep_export_AllianceCreate.PrimeDaySeen.validateEvent;
      break;
    case __dep_export_AllianceCreate.ResourcesOnLogout.ID:
      __s1local0 = __dep_export_AllianceCreate.ResourcesOnLogout.validateEvent;
      break;
    case __dep_export_AllianceCreate.SentPlayerGift.ID:
      __s1local0 = __dep_export_AllianceCreate.SentPlayerGift.validateEvent;
      break;
    case __dep_export_AllianceCreate.Sabotage.ID:
      __s1local0 = __dep_export_AllianceCreate.Sabotage.validateEvent;
      break;
    case __dep_export_AllianceCreate.UnitsDismissed.ID:
      __s1local0 = __dep_export_AllianceCreate.UnitsDismissed.validateEvent;
      break;
    case __dep_export_AllianceCreate.UnitsStarving.ID:
      __s1local0 = __dep_export_AllianceCreate.UnitsStarving.validateEvent;
      break;
    case __dep_export_AllianceCreate.WishingWellCoins.ID:
      __s1local0 = __dep_export_AllianceCreate.WishingWellCoins.validateEvent;
      break;
    case __dep_export_AllianceCreate.ClientFunnel.ID:
      __s1local0 = __dep_export_AllianceCreate.ClientFunnel.validateEvent;
      break;
    case __dep_export_AllianceCreate.GuestRegistration.ID:
      __s1local0 = __dep_export_AllianceCreate.GuestRegistration.validateEvent;
      break;
    case __dep_export_AllianceCreate.MvTestDisplay.ID:
      __s1local0 = __dep_export_AllianceCreate.MvTestDisplay.validateEvent;
      break;
    case __dep_export_AllianceCreate.Connection.ID:
      __s1local0 = __dep_export_AllianceCreate.Connection.validateEvent;
      break;
    case __dep_export_AllianceCreate.MvTestConversion.ID:
      __s1local0 = __dep_export_AllianceCreate.MvTestConversion.validateEvent;
      break;
    case __dep_export_AllianceCreate.ForumRegistration.ID:
      __s1local0 = __dep_export_AllianceCreate.ForumRegistration.validateEvent;
      break;
    case __dep_export_AllianceCreate.ClientLoad.ID:
      __s1local0 = __dep_export_AllianceCreate.ClientLoad.validateEvent;
      break;
    case __dep_export_AllianceCreate.WorldAssignment.ID:
      __s1local0 = __dep_export_AllianceCreate.WorldAssignment.validateEvent;
      break;
    case __dep_export_AllianceCreate.Profiling.ID:
      __s1local0 = __dep_export_AllianceCreate.Profiling.validateEvent;
      break;
    case __dep_export_AllianceCreate.GamePaymentshopClick.ID:
      __s1local0 = __dep_export_AllianceCreate.GamePaymentshopClick.validateEvent;
      break;
    case __dep_export_AllianceCreate.Impression.ID:
      __s1local0 = __dep_export_AllianceCreate.Impression.validateEvent;
      break;
    case __dep_export_AllianceCreate.RUMPerformance.ID:
      __s1local0 = __dep_export_AllianceCreate.RUMPerformance.validateEvent;
      break;
    case __dep_export_AllianceCreate.LPJourney.ID:
      __s1local0 = __dep_export_AllianceCreate.LPJourney.validateEvent;
      break;
    case __dep_export_AllianceCreate.InGamePerformance.ID:
      __s1local0 = __dep_export_AllianceCreate.InGamePerformance.validateEvent;
      break;
    case __dep_export_AllianceCreate.Invitation.ID:
      __s1local0 = __dep_export_AllianceCreate.Invitation.validateEvent;
      break;
    case __dep_export_AllianceCreate.FacebookConnection.ID:
      __s1local0 = __dep_export_AllianceCreate.FacebookConnection.validateEvent;
      break;
    default:
      return {
        success: false,
        message: "No validator for given event."
      };
  }
  return __s1local0(__s1param0);
};
