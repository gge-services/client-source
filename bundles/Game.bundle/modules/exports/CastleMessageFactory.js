Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __s0local0 = function () {
  function CastleMessageFactory() {}
  CastleMessageFactory.parseMessage = function (__s5param0, __s5param1) {
    var __s5local0;
    switch (parseInt(__s5param0[1])) {
      case __dep_exact_26a421b704832cff.MessageConst.MESSAGE_TYPE_PLAYER_GIFT:
        __s5local0 = new __dep_export_MessagePlayerGift.MessagePlayerGift();
        break;
      case __dep_exact_26a421b704832cff.MessageConst.MESSAGE_TYPE_ATTACK_COUNT_THRESHOLD:
        __s5local0 = new __dep_export_MessageAttackTheasholdVO.MessageAttackTheasholdVO();
        break;
      case __dep_exact_26a421b704832cff.MessageConst.MESSAGE_TYPE_USER_IN:
      case __dep_exact_26a421b704832cff.MessageConst.MESSAGE_TYPE_USER_OUT:
      case __dep_exact_26a421b704832cff.MessageConst.MESSAGE_TYPE_ALLIANCE_NEWSLETTER:
        __s5local0 = new __dep_export_MessageUserVO.MessageUserVO();
        break;
      case __dep_exact_26a421b704832cff.MessageConst.MESSAGE_TYPE_SPY_PLAYER:
        __s5local0 = new __dep_export_MessageSpyPlayerVO.MessageSpyPlayerVO();
        break;
      case __dep_exact_26a421b704832cff.MessageConst.MESSAGE_TYPE_PATCH_NOTES:
        __s5local0 = new __dep_export_MessageChangelistVO.MessageChangelistVO();
        break;
      case __dep_exact_26a421b704832cff.MessageConst.MESSAGE_TYPE_SPY_NPC:
        __s5local0 = new __dep_export_MessageSpyNpcVO.MessageSpyNpcVO();
        break;
      case __dep_exact_26a421b704832cff.MessageConst.MESSAGE_TYPE_CONQUERABLE_AREA:
        __s5local0 = new __dep_export_MessageConquerableAreaVO.MessageConquerableAreaVO();
        break;
      case __dep_exact_26a421b704832cff.MessageConst.MESSAGE_TYPE_BATTLE_LOG:
        __s5local0 = new __dep_export_MessageBattleLogVO.MessageBattleLogVO();
        break;
      case __dep_exact_26a421b704832cff.MessageConst.MESSAGE_TYPE_ALLIANCE_REQUEST:
        __s5local0 = new __dep_export_MessageAllianceRequestVO.MessageAllianceRequestVO();
        break;
      case __dep_exact_26a421b704832cff.MessageConst.MESSAGE_TYPE_ALLIANCE_WAR:
        __s5local0 = new __dep_export_MessageAllianceWarVO.MessageAllianceWarVO();
        break;
      case __dep_exact_26a421b704832cff.MessageConst.MESSAGE_TYPE_ALLIANCE_BOOKMARK:
        __s5local0 = new __dep_export_MessageAllianceBookmarkVO.MessageAllianceBookmarkVO();
        break;
      case __dep_exact_26a421b704832cff.MessageConst.MESSAGE_TYPE_ATTACK_CANCELLED:
        __s5local0 = new __dep_export_MessageAttackCancelledVO.MessageAttackCancelledVO();
        break;
      case __dep_exact_26a421b704832cff.MessageConst.MESSAGE_TYPE_SPY_CANCELLED:
        __s5local0 = new __dep_export_MessageSpyCancelledVO.MessageSpyCancelledVO();
        break;
      case __dep_exact_26a421b704832cff.MessageConst.MESSAGE_TYPE_STARVE_INFO:
      case __dep_exact_26a421b704832cff.MessageConst.MESSAGE_TYPE_STARVE_VILLAGE_LOST:
      case __dep_exact_26a421b704832cff.MessageConst.MESSAGE_TYPE_STARVE_ISLE_RESOURCE_LOST:
        __s5local0 = new __dep_export_MessageStarveInfoVO.MessageStarveInfoVO();
        break;
      case __dep_exact_26a421b704832cff.MessageConst.MESSAGE_TYPE_BUILDING_DISABLED:
        __s5local0 = new __dep_export_MessageBuildingDisabledInfoVO.MessageBuildingDisabledInfoVO();
        break;
      case __dep_exact_26a421b704832cff.MessageConst.MESSAGE_TYPE_MARKET_CARRIAGE_ARRIVED:
        __s5local0 = new __dep_export_MessageMarketCarriageArrivedVO.MessageMarketCarriageArrivedVO();
        break;
      case __dep_exact_26a421b704832cff.MessageConst.MESSAGE_TYPE_ABO:
        __s5local0 = new __dep_export_MessageAboVO.MessageAboVO();
        break;
      case __dep_exact_26a421b704832cff.MessageConst.MESSAGE_TYPE_PAYMENT_DOPPLER:
        __s5local0 = new __dep_export_MessagePaymentDopplerVO.MessagePaymentDopplerVO();
        break;
      case __dep_exact_26a421b704832cff.MessageConst.MESSAGE_TYPE_REBUY:
        __s5local0 = new __dep_export_MessageRebuyVO.MessageRebuyVO();
        break;
      case __dep_exact_26a421b704832cff.MessageConst.MESSAGE_TYPE_SPECIAL_EVENT:
        __s5local0 = new __dep_export_MessageSpecialEventVO.MessageSpecialEventVO();
        break;
      case __dep_exact_26a421b704832cff.MessageConst.MESSAGE_TYPE_TOURNAMENT_OVER:
        __s5local0 = new __dep_export_MessageTournamentOverVO.MessageTournamentOverVO();
        break;
      case __dep_exact_26a421b704832cff.MessageConst.MESSAGE_TYPE_ISLAND_KINGDOM_TITLE:
        __s5local0 = new __dep_export_MessageEilandTitleVO.MessageEilandTitleVO();
        break;
      case __dep_exact_26a421b704832cff.MessageConst.MESSAGE_TYPE_ISLAND_KINGDOM_REWARD:
        __s5local0 = new __dep_export_MessageEilandRewardVO.MessageEilandRewardVO();
        break;
      case __dep_exact_26a421b704832cff.MessageConst.MESSAGE_RUIN_INFO:
        __s5local0 = new __dep_export_MessageRuinInfoVO.MessageRuinInfoVO();
        break;
      case __dep_exact_26a421b704832cff.MessageConst.MESSAGE_TYPE_THANKY_YOU_PACKAGE:
        __s5local0 = new __dep_export_MessageThankYouPackageVO.MessageThankYouPackageVO();
        break;
      case __dep_exact_26a421b704832cff.MessageConst.MESSAGE_TYPE_HIGHSCORE_BONUS:
        __s5local0 = new __dep_export_MessageHighscoreBonusVO.MessageHighscoreBonusVO();
        break;
      case __dep_exact_26a421b704832cff.MessageConst.MESSAGE_TYPE_PRIVATE_OFFER:
        __s5local0 = new __dep_export_MessagePrivateOfferVO.MessagePrivateOfferVO();
        break;
      case __dep_exact_26a421b704832cff.MessageConst.MESSAGE_TYPE_EVENT_ANNOUNCEMENT:
        __s5local0 = new __dep_export_MessageEventAnnouncementVO.MessageEventAnnouncementVO();
        break;
      case __dep_exact_26a421b704832cff.MessageConst.MESSAGE_TYPE_USER_SURVEY:
        __s5local0 = new __dep_export_MessageUserSurveyVO.MessageUserSurveyVO();
        break;
      case __dep_exact_26a421b704832cff.MessageConst.MESSAGE_TYPE_TEXT_ID:
        __s5local0 = new __dep_export_CastleMessageInfoVO.CastleMessageInfoVO();
        break;
      case __dep_exact_26a421b704832cff.MessageConst.MESSAGE_TYPE_SUBSCRIPTION:
        __s5local0 = new __dep_export_MessageSubscriptionVO.MessageSubscriptionVO();
        break;
      case __dep_exact_26a421b704832cff.MessageConst.MESSAGE_TYPE_SYSTEM:
        __s5local0 = new __dep_export_MessageSystemVO.MessageSystemVO();
        break;
      case __dep_exact_26a421b704832cff.MessageConst.MESSAGE_TYPE_POPUP:
        __s5local0 = new __dep_export_MessagePopupVO.MessagePopupVO();
        break;
      case __dep_exact_26a421b704832cff.MessageConst.MESSAGE_TYPE_DOWNTIME_STATUS:
        __s5local0 = new __dep_export_MessageDowntimeStatusVO.MessageDowntimeStatusVO();
        break;
      case __dep_exact_26a421b704832cff.MessageConst.MESSAGE_TYPE_ATTACK_ADVISOR_FAILURE:
        __s5local0 = new __dep_export_MessageAdvisorFailureVO.MessageAdvisorFailureVO();
        break;
      case __dep_exact_26a421b704832cff.MessageConst.MESSAGE_TYPE_ATTACK_ADVISOR_SUMMARY:
        __s5local0 = new __dep_export_MessageAdvisorSummaryVO.MessageAdvisorSummaryVO();
        break;
      case __dep_exact_26a421b704832cff.MessageConst.MESSAGE_TYPE_DIVISION_CHANGE:
        __s5local0 = new __dep_export_MessageDivisionChangeVO.MessageDivisionChangeVO();
        break;
      default:
        __s5local0 = new __dep_export_MessageUserVO.MessageUserVO();
    }
    __s5local0.loadFromParamArray(__s5param0, __s5param1);
    return __s5local0;
  };
  return CastleMessageFactory;
}();
exports.CastleMessageFactory = __s0local0;
var __dep_export_CastleMessageInfoVO = require("gge-module:export_CastleMessageInfoVO");
var __dep_export_MessageAboVO = require("gge-module:export_MessageAboVO");
var __dep_export_MessageAdvisorFailureVO = require("gge-module:export_MessageAdvisorFailureVO");
var __dep_export_MessageAdvisorSummaryVO = require("gge-module:export_MessageAdvisorSummaryVO");
var __dep_export_MessageAllianceBookmarkVO = require("gge-module:export_MessageAllianceBookmarkVO");
var __dep_export_MessageAllianceRequestVO = require("gge-module:export_MessageAllianceRequestVO");
var __dep_export_MessageAllianceWarVO = require("gge-module:export_MessageAllianceWarVO");
var __dep_export_MessageAttackCancelledVO = require("gge-module:export_MessageAttackCancelledVO");
var __dep_export_MessageAttackTheasholdVO = require("gge-module:export_MessageAttackTheasholdVO");
var __dep_export_MessageBattleLogVO = require("gge-module:export_MessageBattleLogVO");
var __dep_export_MessageChangelistVO = require("gge-module:export_MessageChangelistVO");
var __dep_export_MessageConquerableAreaVO = require("gge-module:export_MessageConquerableAreaVO");
var __dep_export_MessageDivisionChangeVO = require("gge-module:export_MessageDivisionChangeVO");
var __dep_export_MessageEilandRewardVO = require("gge-module:export_MessageEilandRewardVO");
var __dep_export_MessageEilandTitleVO = require("gge-module:export_MessageEilandTitleVO");
var __dep_export_MessageEventAnnouncementVO = require("gge-module:export_MessageEventAnnouncementVO");
var __dep_export_MessageHighscoreBonusVO = require("gge-module:export_MessageHighscoreBonusVO");
var __dep_export_MessageMarketCarriageArrivedVO = require("gge-module:export_MessageMarketCarriageArrivedVO");
var __dep_export_MessagePaymentDopplerVO = require("gge-module:export_MessagePaymentDopplerVO");
var __dep_export_MessagePlayerGift = require("gge-module:export_MessagePlayerGift");
var __dep_export_MessagePrivateOfferVO = require("gge-module:export_MessagePrivateOfferVO");
var __dep_export_MessageRebuyVO = require("gge-module:export_MessageRebuyVO");
var __dep_export_MessageRuinInfoVO = require("gge-module:export_MessageRuinInfoVO");
var __dep_export_MessageSpecialEventVO = require("gge-module:export_MessageSpecialEventVO");
var __dep_export_MessageSpyCancelledVO = require("gge-module:export_MessageSpyCancelledVO");
var __dep_export_MessageSpyNpcVO = require("gge-module:export_MessageSpyNpcVO");
var __dep_export_MessageSpyPlayerVO = require("gge-module:export_MessageSpyPlayerVO");
var __dep_export_MessageStarveInfoVO = require("gge-module:export_MessageStarveInfoVO");
var __dep_export_MessageSubscriptionVO = require("gge-module:export_MessageSubscriptionVO");
var __dep_export_MessageThankYouPackageVO = require("gge-module:export_MessageThankYouPackageVO");
var __dep_export_MessageTournamentOverVO = require("gge-module:export_MessageTournamentOverVO");
var __dep_export_MessageUserSurveyVO = require("gge-module:export_MessageUserSurveyVO");
var __dep_export_MessageUserVO = require("gge-module:export_MessageUserVO");
var __dep_export_MessageSystemVO = require("gge-module:export_MessageSystemVO");
var __dep_export_MessageBuildingDisabledInfoVO = require("gge-module:export_MessageBuildingDisabledInfoVO");
var __dep_export_MessagePopupVO = require("gge-module:export_MessagePopupVO");
var __dep_export_MessageDowntimeStatusVO = require("gge-module:export_MessageDowntimeStatusVO");
