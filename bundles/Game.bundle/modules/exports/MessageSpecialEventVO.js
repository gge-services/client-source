Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_3 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ABGHelper = require("gge-module:export_ABGHelper");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_TempServerHelper = require("gge-module:export_TempServerHelper");
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleResetLaboratoryDialogProperties = require("gge-module:export_CastleResetLaboratoryDialogProperties");
var __dep_export_CastleResetMonumentDialogProperties = require("gge-module:export_CastleResetMonumentDialogProperties");
var __dep_export_CastleVIPMessageDialogProperties = require("gge-module:export_CastleVIPMessageDialogProperties");
var __dep_export_CastleAlchemistRetirementDialogProperties = require("gge-module:export_CastleAlchemistRetirementDialogProperties");
var __dep_export_CastleAwardDialogProperties = require("gge-module:export_CastleAwardDialogProperties");
var __dep_export_CastleNewServerAnnounceDialogProperties = require("gge-module:export_CastleNewServerAnnounceDialogProperties");
var __dep_export_CastleMessageTipDialogProperties = require("gge-module:export_CastleMessageTipDialogProperties");
var __dep_export_AllianceRaidEventStartDialog = require("gge-module:export_AllianceRaidEventStartDialog");
var __dep_export_AllianceMobilizationEventStartDialog = require("gge-module:export_AllianceMobilizationEventStartDialog");
var __dep_export_AllianceMobilizationEventStartDialogProperties = require("gge-module:export_AllianceMobilizationEventStartDialogProperties");
var __dep_export_EventStarterAnnouncementDialog = require("gge-module:export_EventStarterAnnouncementDialog");
var __dep_export_EventStarterAnnouncementDialogProperties = require("gge-module:export_EventStarterAnnouncementDialogProperties");
var __dep_export_CastleFactionDialogProperties = require("gge-module:export_CastleFactionDialogProperties");
var __dep_export_CastleFactionEventLMSDialogProperties = require("gge-module:export_CastleFactionEventLMSDialogProperties");
var __dep_export_LongTermPointEventSkin = require("gge-module:export_LongTermPointEventSkin");
var __dep_export_CastleSeasonEventTeaserDialogProperties = require("gge-module:export_CastleSeasonEventTeaserDialogProperties");
var __dep_export_CastleWorldCupFinisherProperties = require("gge-module:export_CastleWorldCupFinisherProperties");
var __dep_export_CastleTempServerMultiplierDialogProperties = require("gge-module:export_CastleTempServerMultiplierDialogProperties");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_DialogInfoVO = require("gge-module:export_DialogInfoVO");
var __dep_export_AMessageVO = require("gge-module:export_AMessageVO");
var __s0local0 = function (__s1param0) {
  function MessageSpecialEventVO() {
    var __s3local0 = this;
    __s3local0._subtypeEvent = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(MessageSpecialEventVO, __s1param0);
  MessageSpecialEventVO.prototype.parseMessageHeader = function (__s5param0) {
    var __s5local0 = __s5param0.split(__dep_exact_26a421b704832cff_1.MessageConst.SUBTYPE_META_DATA_SPLITTER);
    var __s5local1 = __s5local0[0].split("+");
    this._subtypeEvent = parseInt(__s5local1[0]);
    if (this._subtypeEvent == __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_WORLD_CUP) {
      __s5local1.shift();
      this._additionalInformation = __s5local1;
    } else if (__s5local0.length > 1) {
      this._additionalInformation = __s5local0[1].split("+");
    }
  };
  MessageSpecialEventVO.prototype.parseSubject = function () {
    switch (this._subtypeEvent) {
      case __dep_exact_26a421b704832cff_1.MessageConst.MESSAGE_TYPE_PLAYER_GIFT:
        return __dep_exact_92d05af59ee2ff30.Localize.text("message_header_giftTrader_obtainedGift");
      case __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_BAEM_AWARD:
        return __dep_exact_92d05af59ee2ff30.Localize.text("bam_award_title");
      case __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_BAEM_AWARD_FINAL:
        return __dep_exact_92d05af59ee2ff30.Localize.text("bam_award_final_title");
      case __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_EUROPEAN_AWARD:
        return __dep_exact_92d05af59ee2ff30.Localize.text("european_games_award_title");
      case __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_EGA_100_RUBIES:
        return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_EGAevent_message_won_title");
      case __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_EGA_500_RUBIES_FORUM:
        return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_EGAevent_message_title");
      case __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_GAMEX_AWARD:
      case __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_MMO_OF_THE_YEAR_AWARD:
        return __dep_exact_92d05af59ee2ff30.Localize.text("bam_award_title");
      case __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_TURKEY_MESSAGE:
        return __dep_exact_92d05af59ee2ff30.Localize.text("turkish_paysteaser_title");
      case __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_EMPIRE_DEALS_DAYS_MESSAGE:
        return __dep_exact_92d05af59ee2ff30.Localize.text("empireDealsDays_message_header");
      case __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_TERMS_AND_CONDITIONS:
        return __dep_exact_92d05af59ee2ff30.Localize.text("general_tcmailing_subject");
      case __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_SPECIAL_EVENT_START:
        return this.eventStartSubject();
      case __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_UNDERWORLD:
        return __dep_exact_92d05af59ee2ff30.Localize.text("message_header_underworld_start");
      case __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_THORNKING:
        return __dep_exact_92d05af59ee2ff30.Localize.text("message_header_thornking_start");
      case __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_FACTION_LAST_CAMP_DESTROYED:
        return __dep_exact_92d05af59ee2ff30.Localize.text("faction_message_lostlastCamp_title");
      case __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_FACTION_LAST_MAN_STANDING_BEGAN_FOR_FACTION:
        switch (parseInt(this._additionalInformation[0])) {
          case __dep_exact_26a421b704832cff_2.FactionConst.BLUE_FACTION:
            return __dep_exact_92d05af59ee2ff30.Localize.text("message_lms_started_blue");
          case __dep_exact_26a421b704832cff_2.FactionConst.RED_FACTION:
            return __dep_exact_92d05af59ee2ff30.Localize.text("message_lms_started_red");
        }
        return "";
      case __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_VIP_INFORMATION:
        return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_VipBonus_message_header_v2", [parseInt(this._additionalInformation[0])]);
      case __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_WORLD_CUP:
        return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_worldCup");
      case __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_MONUMENT:
        return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_monument_resetMessage_title");
      case __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_LABORATORY:
        return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_laboratory_resetMessage_title");
      case __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_KINGSTOWER:
      case __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_METROPOLIS:
        return __dep_exact_92d05af59ee2ff30.Localize.text(__dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("dialog_message_resetKingstower_title"));
      case __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_HOSPITAL_CAPACITY_EXCEEDED:
        return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_messageTip_title_13");
      case __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_WAR_OF_EMPIRES_1:
      case __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_WAR_OF_EMPIRES_2:
      case __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_WAR_OF_EMPIRES_3:
      case __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_WAR_OF_EMPIRES_REWARD_1:
      case __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_WAR_OF_EMPIRES_REWARD_2:
      case __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_WAR_OF_EMPIRES_REWARD_3:
        return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_messageTip_title_" + this._subtypeEvent);
      case __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_ANNOUNCE_INSTANCE:
        return __dep_exact_92d05af59ee2ff30.Localize.text("mail_newServer_header");
      case __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_FAIR_PLAY_MESSAGE:
        return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_fairplayMessage_header");
      case __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_ALCHEMIST_RETIREMENT:
        return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_alchemistRetirement_title");
      case __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_SPECIAL_EVENT_UPDATE:
        if (this._additionalInformation.length > 0 && this._additionalInformation[0] == __dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_TEMPSERVER_MULTIPLIER) {
          return __dep_exact_92d05af59ee2ff30.Localize.text("message_header_outerrealms_start");
        } else {
          return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_shapeshifterDaily_mailHeader");
        }
      case __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_TREASURE_MAP_PIECE_FOUND:
        return __dep_exact_92d05af59ee2ff30.Localize.text("message_header_mapPiece");
      default:
        return this._subject;
    }
  };
  MessageSpecialEventVO.prototype.eventStartSubject = function () {
    var __s15local0 = parseInt(this._additionalInformation[0]);
    switch (__s15local0) {
      case __dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_CRUSADE_UNDERWORLD:
        return __dep_exact_92d05af59ee2ff30.Localize.text("message_header_underworld_start");
      case __dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_CRUSADE_SEAQUEEN:
        return __dep_exact_92d05af59ee2ff30.Localize.text("message_header_seaqueen_start");
      case __dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE:
        return __dep_exact_92d05af59ee2ff30.Localize.text("message_header_invasion_start");
      case __dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_ISLAND_KINGDOM:
        return __dep_exact_92d05af59ee2ff30.Localize.text("message_eiland_reset_header");
      case __dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_ALIEN_INVASION_ALLIANCE:
        return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_alienInvasion_message_header");
      case __dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_RED_ALIEN_INVASION_ALLIANCE:
        return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_redAlienInvasion_message_header");
      case __dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_SAMURAI_INVASION:
        return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_samuraiInvasion_message_header");
      case __dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_FACTION_INVASION:
        return __dep_exact_92d05af59ee2ff30.Localize.text("message_header_berimondInvasion_start");
      case __dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_KINGDOMS_LEAGUE:
        return __dep_exact_92d05af59ee2ff30.Localize.text("message_header_seasonLeague_start");
      case __dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_TEMPSERVER:
        return __dep_exact_92d05af59ee2ff30.Localize.text("message_header_tempServer_start");
      case __dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_ALLIANCE_BATTLEGROUND:
        return __dep_exact_92d05af59ee2ff30.Localize.text("event_title_113");
      case __dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_DONATION:
        return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_startDonationEvent_title");
      case __dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_CRUSADE_THORNKING:
        return __dep_exact_92d05af59ee2ff30.Localize.text("message_header_thornking_start");
      case __dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_FACTION:
        return __dep_exact_92d05af59ee2ff30.Localize.text("event_title_3");
      case __dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_LONGTERM_POINT_EVENT:
        return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_longPointsEvent_eventcamp_header_" + __dep_export_LongTermPointEventSkin.LongTermPointEventSkin.getTypeById(parseInt(this._additionalInformation[1])).name);
      case __dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_ALLIANCE_RAID:
        return __dep_exact_92d05af59ee2ff30.Localize.text("message_header_are_start");
      case __dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_ALLIANCE_MOBILISATION:
        return __dep_exact_92d05af59ee2ff30.Localize.text("message_header_ame_start");
      default:
        return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_event_announcement_header_" + __s15local0);
    }
  };
  MessageSpecialEventVO.prototype.parseSender = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text("system");
  };
  Object.defineProperty(MessageSpecialEventVO.prototype, "dialogInfo", {
    get: function () {
      switch (this._subtypeEvent) {
        case __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_FACTION_LAST_MAN_STANDING_BEGAN_FOR_FACTION:
          var __s20local0 = parseInt(this._additionalInformation[0]);
          var __s20local1 = parseInt(this._additionalInformation[1]);
          return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleFactionEventLMSDialog.CastleFactionEventLMSDialog, new __dep_export_CastleFactionEventLMSDialogProperties.CastleFactionEventLMSDialogProperties(__s20local0, __s20local1));
        case __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_FACTION_LAST_CAMP_DESTROYED:
          var __s20local2 = parseInt(this._additionalInformation[0]);
          return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleFactionEventLostLastCampDialog.CastleFactionEventLostLastCampDialog, new __dep_export_CastleFactionDialogProperties.CastleFactionDialogProperties(__s20local2));
        case __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_BAEM_AWARD:
        case __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_BAEM_AWARD_FINAL:
        case __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_EUROPEAN_AWARD:
        case __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_GAMEX_AWARD:
        case __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_MMO_OF_THE_YEAR_AWARD:
          return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleAwardDialog.CastleAwardDialog, new __dep_export_CastleAwardDialogProperties.CastleAwardDialogProperties(this));
        case __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_EGA_100_RUBIES:
        case __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_EGA_150_RUBIES:
          return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleAwardWithRewardWinDialog.CastleAwardWithRewardWinDialog);
        case __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_EGA_500_RUBIES_FORUM:
          return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleAwardWithRewardDialog.CastleAwardWithRewardDialog);
        case __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_TURKEY_MESSAGE:
          return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleIngameMessageTurkeyDialog.CastleIngameMessageTurkeyDialog);
        case __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_EMPIRE_DEALS_DAYS_MESSAGE:
          return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleIngameMessageDealsDayDialog.CastleIngameMessageDealsDayDialog);
        case __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_TERMS_AND_CONDITIONS:
          return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleTermsAndConditionsChangedDialog.CastleTermsAndConditionsChangedDialog);
        case __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_VIP_INFORMATION:
          var __s20local3 = parseInt(this._additionalInformation[0]);
          return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleVIPMessageDialog.CastleVIPMessageDialog, new __dep_export_CastleVIPMessageDialogProperties.CastleVIPMessageDialogProperties(__s20local3));
        case __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_WORLD_CUP:
          return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleWorldCupFinisher.CastleWorldCupFinisher, new __dep_export_CastleWorldCupFinisherProperties.CastleWorldCupFinisherProperties(this._additionalInformation));
        case __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_SPECIAL_EVENT_START:
          return this.dialogInfoSpecialEventStart();
        case __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_SPECIAL_EVENT_UPDATE:
          if (this._additionalInformation.length > 0 && this._additionalInformation[0] == __dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_TEMPSERVER_MULTIPLIER) {
            return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleTempServerMultiplierDialog.CastleTempServerMultiplierDialog, new __dep_export_CastleTempServerMultiplierDialogProperties.CastleTempServerMultiplierDialogProperties(this._additionalInformation[1], this._additionalInformation[2]));
          }
          break;
        case __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_UNDERWORLD:
          if (__dep_export_CastleModel.CastleModel.specialEventData.isEventActive(__dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_CRUSADE_UNDERWORLD)) {
            return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleUnderworldEventTeaserDialog.CastleUnderworldEventTeaserDialog, new __dep_export_CastleSeasonEventTeaserDialogProperties.CastleSeasonEventTeaserDialogProperties(this._subtypeEvent));
          } else {
            return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_information"), __dep_exact_92d05af59ee2ff30.Localize.text("alert_eventendet")));
          }
        case __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_THORNKING:
          if (__dep_export_CastleModel.CastleModel.specialEventData.isEventActive(__dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_CRUSADE_THORNKING)) {
            return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleThornkingEventTeaserDialog.CastleThornkingEventTeaserDialog, new __dep_export_CastleSeasonEventTeaserDialogProperties.CastleSeasonEventTeaserDialogProperties(__dep_exact_26a421b704832cff.TreasureMapsConst.MAP_ID_THORNKING_HARD));
          } else {
            return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_information"), __dep_exact_92d05af59ee2ff30.Localize.text("alert_eventendet")));
          }
        case __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_HOSPITAL_CAPACITY_EXCEEDED:
          return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleMessageTipDialog.CastleMessageTipDialog, new __dep_export_CastleMessageTipDialogProperties.CastleMessageTipDialogProperties(null, 13, 5));
        case __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_WAR_OF_EMPIRES_1:
        case __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_WAR_OF_EMPIRES_2:
        case __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_WAR_OF_EMPIRES_3:
        case __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_WAR_OF_EMPIRES_REWARD_1:
        case __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_WAR_OF_EMPIRES_REWARD_2:
        case __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_WAR_OF_EMPIRES_REWARD_3:
          return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleMessageTipDialog.CastleMessageTipDialog, new __dep_export_CastleMessageTipDialogProperties.CastleMessageTipDialogProperties(null, this._subtypeEvent, 6));
        case __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_MONUMENT:
          return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleResetLandmarkMessageDialog.CastleResetLandmarkMessageDialog, new __dep_export_CastleResetMonumentDialogProperties.CastleResetMonumentDialogProperties());
        case __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_LABORATORY:
          return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleResetLandmarkMessageDialog.CastleResetLandmarkMessageDialog, new __dep_export_CastleResetLaboratoryDialogProperties.CastleResetLaboratoryDialogProperties());
        case __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_METROPOLIS:
        case __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_KINGSTOWER:
          return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("dialog_message_resetKingstower_title"), __dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("dialog_message_resetKingstower_desc")));
        case __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_ANNOUNCE_INSTANCE:
          return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleNewServerAnnounceDialog.CastleNewServerAnnounceDialog, new __dep_export_CastleNewServerAnnounceDialogProperties.CastleNewServerAnnounceDialogProperties(__dep_exact_f855840627e6e145.int(this._additionalInformation[0]), __dep_exact_f855840627e6e145.int(this._additionalInformation[1]), __dep_exact_f855840627e6e145.int(this._additionalInformation[2])));
        case __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_FAIR_PLAY_MESSAGE:
          return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleFairPlayDialog.CastleFairPlayDialog);
        case __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_ALCHEMIST_RETIREMENT:
          var __s20local4 = this._additionalInformation.slice(0, 4);
          var __s20local5 = __dep_exact_f855840627e6e145.int(this._additionalInformation[4]);
          return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleAlchemistRetirementDialog.CastleAlchemistRetirementDialog, new __dep_export_CastleAlchemistRetirementDialogProperties.CastleAlchemistRetirementDialogProperties(__s20local4, __s20local5));
        case __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_TREASURE_MAP_PIECE_FOUND:
          return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleTreasureFoundPieceDialog.CastleTreasureFoundPieceDialog);
      }
      return null;
    },
    set: function (__s28param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AMessageVO.AMessageVO.prototype, "dialogInfo").set.call(this, __s28param0);
    },
    enumerable: true,
    configurable: true
  });
  MessageSpecialEventVO.prototype.dialogInfoSpecialEventStart = function () {
    var __s30local0 = parseInt(this._additionalInformation[0]);
    switch (__s30local0) {
      case __dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_ISLAND_KINGDOM:
        return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleStormIslandsStartTeaserDialog.CastleStormIslandsStartTeaserDialog, new __dep_export_CastleStormIslandsStartTeaserDialogProperties.CastleStormIslandsStartTeaserDialogProperties(this));
    }
    if (!__dep_export_CastleModel.CastleModel.specialEventData.isEventActive(__s30local0)) {
      return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_information"), __dep_exact_92d05af59ee2ff30.Localize.text("alert_eventendet")));
    }
    switch (__s30local0) {
      case __dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_CRUSADE_UNDERWORLD:
        return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleUnderworldEventTeaserDialog.CastleUnderworldEventTeaserDialog, new __dep_export_CastleSeasonEventTeaserDialogProperties.CastleSeasonEventTeaserDialogProperties(this._subtypeEvent));
      case __dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_CRUSADE_SEAQUEEN:
        return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleSeaQueenEventTeaserDialog.CastleSeaQueenEventTeaserDialog);
      case __dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE:
        return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleAllianceNomadInvasionEventTeaserDialog.CastleAllianceNomadInvasionEventTeaserDialog);
      case __dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_ALIEN_INVASION_ALLIANCE:
        return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleAllianceAlienInvasionEventTeaserDialog.CastleAllianceAlienInvasionEventTeaserDialog);
      case __dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_RED_ALIEN_INVASION_ALLIANCE:
        return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleRedAllianceAlienInvasionEventTeaserDialog.CastleRedAllianceAlienInvasionEventTeaserDialog);
      case __dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_SAMURAI_INVASION:
        return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleSamuraiInvasionEventTeaserDialog.CastleSamuraiInvasionEventTeaserDialog);
      case __dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_FACTION_INVASION:
        return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleFactionInvasionEventTeaserDialog.CastleFactionInvasionEventTeaserDialog);
      case __dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_TEMPSERVER:
        if (__dep_export_TempServerHelper.TempServerHelper.tmpServerEvent) {
          return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleTempServerStartDialog.CastleTempServerStartDialog);
        }
        break;
      case __dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_ALLIANCE_BATTLEGROUND:
        if (__dep_export_ABGHelper.ABGHelper.abgEvent) {
          return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleAllianceBattlegroundMessageDialog.CastleAllianceBattlegroundMessageDialog);
        }
        break;
      case __dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_KINGDOMS_LEAGUE:
        return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_SeasonLeagueStartDialog.SeasonLeagueStartDialog);
      case __dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_FACTION:
        return new __dep_export_DialogInfoVO.DialogInfoVO(null, null, __dep_export_IngameClientCommands.IngameClientCommands.OPEN_FACTION_EVENT_MAIN_DIALOG);
      case __dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_LONGTERM_POINT_EVENT:
        return new __dep_export_DialogInfoVO.DialogInfoVO(null, null, __dep_export_IngameClientCommands.IngameClientCommands.OPEN_LONGTERM_POINT_EVENT_DIALOG);
      case __dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_ALLIANCE_RAID:
        return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_AllianceRaidEventStartDialog.AllianceRaidEventStartDialog);
      case __dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_ALLIANCE_MOBILISATION:
        return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_AllianceMobilizationEventStartDialog.AllianceMobilizationEventStartDialog, new __dep_export_AllianceMobilizationEventStartDialogProperties.AllianceMobilizationEventStartDialogProperties(__s30local0));
      default:
        return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_EventStarterAnnouncementDialog.EventStarterAnnouncementDialog, new __dep_export_EventStarterAnnouncementDialogProperties.EventStarterAnnouncementDialogProperties(-1, __s30local0));
    }
  };
  Object.defineProperty(MessageSpecialEventVO.prototype, "additionalIconName", {
    get: function () {
      if (this.subtypeEvent == __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_SPECIAL_EVENT_START || this.subtypeEvent == __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_SPECIAL_EVENT_END) {
        switch (parseInt(this._additionalInformation[0])) {
          case __dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_CRUSADE_THORNKING:
            return "CastleMessageIconsThornking";
          case __dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_CRUSADE_UNDERWORLD:
            return "CastleMessageIconsUnderworld";
          case __dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_CRUSADE_SEAQUEEN:
            return "CastleMessageIconsSeaQueen";
          case __dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_NOMADINVASION:
          case __dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE:
            return "CastleMessageIconsNomad";
          case __dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_ALIEN_INVASION_ALLIANCE:
            return "CastleMessageIconsAlien";
          case __dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_RED_ALIEN_INVASION_ALLIANCE:
            return "CastleMessageIconsRedAlien";
          case __dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_SAMURAI_INVASION:
            return "CastleMessageIconsSamurai";
          case __dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_FACTION_INVASION:
            return "CastleMessageIconsFactionInvasion";
          case __dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_ISLAND_KINGDOM:
            return "CastleMessageIconsEiland";
          case __dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_TEMPSERVER:
            return "CastleMessageIconsTempServer";
          case __dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_ALLIANCE_BATTLEGROUND:
            return "CastleMessageIconsAllianceBattleground";
          case __dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_KINGDOMS_LEAGUE:
            return "CastleMessageIconsSeasonLeague";
          case __dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_DONATION:
            return "CastleMessageIconsDonationEvent";
          case __dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_DECO_GACHA:
            return "CastleMessageIconsDistrictGacha";
          case __dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_CHRISTMAS_GACHA:
            return "CastleMessageIconsChristmasGacha";
          case __dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_SUMMER_GACHA:
            return "CastleMessageIconsSummerGacha";
          case __dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_HALLOWEEN_GACHA:
            return "CastleMessageIconsHalloweenGacha";
          case __dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_EASTER_GACHA:
            return "CastleMessageIconsEasterGacha";
          case __dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_ANNIVERSARY_GACHA:
            return "CastleMessageIconsAnniversaryGacha";
          case __dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_CARNIVAL_GACHA:
            return "CastleMessageIconsCarnivalGacha";
          case __dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_FACTION:
            return "CastleMessageIconsFaction";
          case __dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_LONGTERM_POINT_EVENT:
            if (__dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.isItemAssetVersioned("CastleMessageIconsLTPE_" + __dep_export_LongTermPointEventSkin.LongTermPointEventSkin.getTypeById(parseInt(this._additionalInformation[1])).assetName)) {
              return "CastleMessageIconsLTPE_" + __dep_export_LongTermPointEventSkin.LongTermPointEventSkin.getTypeById(parseInt(this._additionalInformation[1])).assetName;
            } else {
              return "";
            }
          case __dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_ALLIANCE_RAID:
            return "CastleMessageIconsAllianceRaid";
          case __dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_ALLIANCE_MOBILISATION:
            return "CastleMessageIconsAllianceMobilization";
        }
      } else {
        if (this.subtypeEvent == __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_FAIR_PLAY_MESSAGE) {
          return "CastleMessageIconsFairPlay";
        }
        if (this.subtypeEvent == __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_SPECIAL_EVENT_UPDATE) {
          if (parseInt(this._additionalInformation[0]) == __dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_TEMPSERVER_MULTIPLIER) {
            return "CastleMessageIconsTempServer";
          } else {
            return "CastleMessageIconsShapeshifter";
          }
        }
        if (this._subtypeEvent == __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_VIP_INFORMATION) {
          return "CastleMessageIconsVIP";
        }
        if (this._subtypeEvent == __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_TREASURE_MAP_PIECE_FOUND) {
          return "CastleMessageIconsTreasureMap";
        }
      }
      return "";
    },
    set: function (__s50param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AMessageVO.AMessageVO.prototype, "additionalIconName").set.call(this, __s50param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageSpecialEventVO.prototype, "isVisible", {
    get: function () {
      return this.subtypeEvent != __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_SPECIAL_EVENT_START && this.subtypeEvent != __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_SPECIAL_EVENT_END || parseInt(this._additionalInformation[0]) != __dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_TEMPSERVER && parseInt(this._additionalInformation[0]) != __dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_ALLIANCE_BATTLEGROUND || !this.isOnExcludedNetwork(__dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.networkId) && !__dep_export_ClientConstABTests.ClientConstABTests.isOnPolishServerInstance && !__dep_export_ClientConstABTests.ClientConstABTests.isOnKoreanServerInstance;
    },
    enumerable: true,
    configurable: true
  });
  MessageSpecialEventVO.prototype.isOnExcludedNetwork = function (__s54param0) {
    return __s54param0 == __dep_exact_9e901e8e2483a22f.GoodgamePartners.NETWORK_MEINVZ || __s54param0 == __dep_exact_9e901e8e2483a22f.GoodgamePartners.NETWORK_NASZAKLASA || __s54param0 == __dep_exact_9e901e8e2483a22f.GoodgamePartners.NETWORK_SPIL_JETZTSPIELEN || __s54param0 == __dep_exact_9e901e8e2483a22f.GoodgamePartners.NETWORK_SPIL_AGAME || __s54param0 == __dep_exact_9e901e8e2483a22f.GoodgamePartners.NETWORK_SPIL_OURGAMES_RU || __s54param0 == __dep_exact_9e901e8e2483a22f.GoodgamePartners.NETWORK_SPIELAFFE || __s54param0 == __dep_exact_9e901e8e2483a22f.GoodgamePartners.NETWORK_KRALOYUN || __s54param0 == __dep_exact_9e901e8e2483a22f.GoodgamePartners.NETWORK_ONE_LT || __s54param0 == __dep_exact_9e901e8e2483a22f.GoodgamePartners.NETWORK_KONGREGATE || __s54param0 == __dep_exact_9e901e8e2483a22f.GoodgamePartners.NETWORK_SPIL_HYVES || __s54param0 == __dep_exact_9e901e8e2483a22f.GoodgamePartners.NETWORK_KANOBU || __s54param0 == __dep_exact_9e901e8e2483a22f.GoodgamePartners.NETWORK_DRAUGAS_LT || __s54param0 == 81;
  };
  Object.defineProperty(MessageSpecialEventVO.prototype, "subtypeEvent", {
    get: function () {
      return this._subtypeEvent;
    },
    enumerable: true,
    configurable: true
  });
  MessageSpecialEventVO.prototype.canBeArchived = function () {
    return __s1param0.prototype.canBeArchived.call(this) && this.subtypeEvent != __dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_USER_SURVEY;
  };
  Object.defineProperty(MessageSpecialEventVO.prototype, "additionalInformation", {
    get: function () {
      return this._additionalInformation;
    },
    enumerable: true,
    configurable: true
  });
  return MessageSpecialEventVO;
}(__dep_export_AMessageVO.AMessageVO);
exports.MessageSpecialEventVO = __s0local0;
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
var __dep_export_CastleResetLandmarkMessageDialog = require("gge-module:export_CastleResetLandmarkMessageDialog");
var __dep_export_CastleVIPMessageDialog = require("gge-module:export_CastleVIPMessageDialog");
var __dep_export_CastleAlchemistRetirementDialog = require("gge-module:export_CastleAlchemistRetirementDialog");
var __dep_export_CastleAwardDialog = require("gge-module:export_CastleAwardDialog");
var __dep_export_CastleAwardWithRewardDialog = require("gge-module:export_CastleAwardWithRewardDialog");
var __dep_export_CastleAwardWithRewardWinDialog = require("gge-module:export_CastleAwardWithRewardWinDialog");
var __dep_export_CastleFairPlayDialog = require("gge-module:export_CastleFairPlayDialog");
var __dep_export_CastleIngameMessageDealsDayDialog = require("gge-module:export_CastleIngameMessageDealsDayDialog");
var __dep_export_CastleIngameMessageTurkeyDialog = require("gge-module:export_CastleIngameMessageTurkeyDialog");
var __dep_export_CastleNewServerAnnounceDialog = require("gge-module:export_CastleNewServerAnnounceDialog");
var __dep_export_CastleTermsAndConditionsChangedDialog = require("gge-module:export_CastleTermsAndConditionsChangedDialog");
var __dep_export_CastleMessageTipDialog = require("gge-module:export_CastleMessageTipDialog");
var __dep_export_SeasonLeagueStartDialog = require("gge-module:export_SeasonLeagueStartDialog");
var __dep_export_CastleAllianceAlienInvasionEventTeaserDialog = require("gge-module:export_CastleAllianceAlienInvasionEventTeaserDialog");
var __dep_export_CastleRedAllianceAlienInvasionEventTeaserDialog = require("gge-module:export_CastleRedAllianceAlienInvasionEventTeaserDialog");
var __dep_export_CastleFactionEventLMSDialog = require("gge-module:export_CastleFactionEventLMSDialog");
var __dep_export_CastleFactionEventLostLastCampDialog = require("gge-module:export_CastleFactionEventLostLastCampDialog");
var __dep_export_CastleFactionInvasionEventTeaserDialog = require("gge-module:export_CastleFactionInvasionEventTeaserDialog");
var __dep_export_CastleAllianceNomadInvasionEventTeaserDialog = require("gge-module:export_CastleAllianceNomadInvasionEventTeaserDialog");
var __dep_export_CastleSamuraiInvasionEventTeaserDialog = require("gge-module:export_CastleSamuraiInvasionEventTeaserDialog");
var __dep_export_CastleSeaQueenEventTeaserDialog = require("gge-module:export_CastleSeaQueenEventTeaserDialog");
var __dep_export_CastleThornkingEventTeaserDialog = require("gge-module:export_CastleThornkingEventTeaserDialog");
var __dep_export_CastleUnderworldEventTeaserDialog = require("gge-module:export_CastleUnderworldEventTeaserDialog");
var __dep_export_CastleWorldCupFinisher = require("gge-module:export_CastleWorldCupFinisher");
var __dep_export_CastleTempServerMultiplierDialog = require("gge-module:export_CastleTempServerMultiplierDialog");
var __dep_export_CastleTempServerStartDialog = require("gge-module:export_CastleTempServerStartDialog");
var __dep_export_CastleAllianceBattlegroundMessageDialog = require("gge-module:export_CastleAllianceBattlegroundMessageDialog");
var __dep_export_CastleTreasureFoundPieceDialog = require("gge-module:export_CastleTreasureFoundPieceDialog");
var __dep_export_CastleStormIslandsStartTeaserDialogProperties = require("gge-module:export_CastleStormIslandsStartTeaserDialogProperties");
var __dep_export_CastleStormIslandsStartTeaserDialog = require("gge-module:export_CastleStormIslandsStartTeaserDialog");
var __dep_export_ClientConstABTests = require("gge-module:export_ClientConstABTests");
