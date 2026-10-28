import { ALeagueTypeScoreEventVO } from "./ALeagueTypeScoreEventVO";
import { AllianceMobilizationEventDialog } from "./AllianceMobilizationEventDialog";
import { AllianceMobilizationEventDialogProperties } from "./AllianceMobilizationEventDialogProperties";
import { AllianceMobilizationEventStartDialog } from "./AllianceMobilizationEventStartDialog";
import { AllianceMobilizationEventStartDialogProperties } from "./AllianceMobilizationEventStartDialogProperties";
import { AllianceQuestEvent } from "./AllianceQuestEvent";
import { AllianceQuestSlotVO } from "./AllianceQuestSlotVO";
import { AScoreEventVO } from "./AScoreEventVO";
import { BasicModel } from "../../../ggs.dll/reconstructed/exports/BasicModel";
import { BuyPackagesEventVO } from "./BuyPackagesEventVO";
import { C2SAllianceQuestStatusVO } from "./C2SAllianceQuestStatusVO";
import { C2SCancelActiveAllianceQuestVO } from "./C2SCancelActiveAllianceQuestVO";
import { C2SCompleteAllianceQuestVO } from "./C2SCompleteAllianceQuestVO";
import { C2SRerollAllianceQuestVO } from "./C2SRerollAllianceQuestVO";
import { C2SSkipCooldownAllianceQuestVO } from "./C2SSkipCooldownAllianceQuestVO";
import { C2SStartAllianceQuestVO } from "./C2SStartAllianceQuestVO";
import { CastleBasicController } from "./CastleBasicController";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleGoodgameExternalClip } from "./CastleGoodgameExternalClip";
import { CastleModel } from "./CastleModel";
import { CollectableEnum } from "./CollectableEnum";
import { int } from "../../../ggs.dll/reconstructed/exports/int";
export class AllianceMobilizationEventEventVO extends AScoreEventVO {
  _divisionRoundID: any;
  _divisionRoundVO: any;
  _leagueID: any;
  _participants: any;
  _questSlots: any;
  _subDivisionId: any;
  alliancescoreEventVO: any;
  allianceScoreEventVOs: any;
  scoreEventVO: any;

  constructor() {
    super();
    this.allianceScoreEventVOs = [];
    this._questSlots = [];
    this._participants = 0;
    this._subDivisionId = 0;
    this.scoreEventVO = new ALeagueTypeScoreEventVO();
    this.alliancescoreEventVO = new ALeagueTypeScoreEventVO();
    this.buyPackagesEventVO = new BuyPackagesEventVO();
  }
  parseData(argument0, argument1, argument2) {
    super.parseData(argument0, argument1, argument2);
    var __s5local0 = int(argument2.A.LID);
    var __s5local1 = int(argument2.RSID);
    this._subDivisionId = int(argument2.A.SDI);
    this._leagueID = __s5local0;
    argument2.SP.LID = __s5local0;
    argument2.SP.RSID = __s5local1;
    argument2.A.LID = __s5local0;
    argument2.A.RSID = __s5local1;
    this._divisionRoundID = int(argument2.DRI);
    this._divisionRoundVO = CastleModel.divisionData.getDivisionRoundByID(this._divisionRoundID);
    this.scoreEventVO = new ALeagueTypeScoreEventVO();
    this.scoreEventVO.eventId = this.eventId;
    this.scoreEventVO.parseData(argument0, argument1, argument2.SP);
    this.allianceScoreEventVOs = [];
    for (var __s5local2 = 1; __s5local2 <= this.getMaxLeagueID(); __s5local2++) {
      var __s5local3 = new ALeagueTypeScoreEventVO(1);
      __s5local3.eventId = this.eventId;
      argument2.A.LID = __s5local2;
      __s5local3.parseData(argument0, argument1, argument2.A);
      __s5local3.isAllianceRewardScore = true;
      this.allianceScoreEventVOs.push(__s5local3);
    }
    this.alliancescoreEventVO = this.allianceScoreEventVOs[__s5local0 - 1];
    this.buyPackagesEventVO.parseData(argument0, argument1, argument2);
  }
  get eventPackagesVO() {
    return this.buyPackagesEventVO;
  }
  get scoreBarVO() {
    return this.scoreEventVO;
  }
  get allianceBarVO() {
    return this.alliancescoreEventVO;
  }
  get eventBuildingWOD() {
    return AllianceMobilizationEventEventVO.EVENT_BUILDING_WOD;
  }
  get eventBuildingNameId() {
    return "event_title_129";
  }
  openDialog(argument0 = true) {
    if (CastleModel.localData.readPlayerValue(AllianceMobilizationEventEventVO.SEEN_EVENT_KEY) == 1) {
      CastleDialogHandler.getInstance().registerDefaultDialogs(AllianceMobilizationEventDialog, new AllianceMobilizationEventDialogProperties(AllianceMobilizationEventDialog.TAB_QUESTS, this.eventId));
      CastleModel.localData.savePlayerValue(AllianceMobilizationEventEventVO.SEEN_EVENT_KEY, 1, this._endTimestamp);
    } else {
      CastleDialogHandler.getInstance().registerDefaultDialogs(AllianceMobilizationEventStartDialog, new AllianceMobilizationEventStartDialogProperties(this.eventId));
    }
  }
  get ownRank() {
    return this.scoreEventVO.ownRank;
  }
  get ownPoints() {
    return this.scoreEventVO.ownPoints;
  }
  hasRewards() {
    return true;
  }
  getRewards(argument0) {
    if (argument0) {
      return this.alliancescoreEventVO.rewardLists;
    } else {
      return this.scoreEventVO.rewardLists;
    }
  }
  getRank(argument0) {
    return int(argument0 ? this.alliancescoreEventVO.ownRank : this.scoreEventVO.ownRank);
  }
  getScore(argument0) {
    return int(argument0 ? this.alliancescoreEventVO.ownPoints : this.scoreEventVO.ownPoints);
  }
  setRankAndPoints(argument0, argument1, argument2) {
    this.scoreEventVO.setRankAndPoints([argument0[0]], [argument1[0]], null);
    this.alliancescoreEventVO.setRankAndPoints([argument0[1]], [argument1[1]], null);
  }
  isPlayerQualifiedForAllianceRewards() {
    return this.scoreEventVO.isPlayerQualifiedForAllianceRewards;
  }
  allianceRewardThresholdPoints() {
    return this.scoreEventVO.allianceRewardThresholdPoints;
  }
  parseQuestSlots(argument0) {
    var __s43local0 = this;
    if (argument0) {
      this._questSlots = [];
      var __s43local1 = 0;
      argument0.forEach(function (__s46param0) {
        var __s46local0 = new AllianceQuestSlotVO();
        __s46local0.fillFromParams(__s43local1, __s46param0);
        __s46local0.eventID = __s43local0.eventId;
        __s43local0._questSlots.push(__s46local0);
        __s43local1++;
      });
      CastleBasicController.getInstance().dispatchEvent(new AllianceQuestEvent(AllianceQuestEvent.ALLIANCE_QUESTS_UPDATED));
    }
  }
  get questSlots() {
    return this._questSlots;
  }
  startAllianceQuest(argument0, argument1) {
    CastleModel.smartfoxClient.sendCommandVO(new C2SStartAllianceQuestVO(argument0, argument1, this.eventId));
  }
  rerollAllianceQuest(argument0, argument1) {
    CastleModel.smartfoxClient.sendCommandVO(new C2SRerollAllianceQuestVO(argument0, argument1, this.eventId));
  }
  completeAllianceQuest() {
    CastleModel.smartfoxClient.sendCommandVO(new C2SCompleteAllianceQuestVO(this.eventId));
  }
  skipCooldown(argument0, argument1) {
    CastleModel.smartfoxClient.sendCommandVO(new C2SSkipCooldownAllianceQuestVO(argument0, argument1, this.eventId));
  }
  requestAllianceQuestStatus() {
    CastleModel.smartfoxClient.sendCommandVO(new C2SAllianceQuestStatusVO(this.eventId));
  }
  cancelAllianceQuest() {
    CastleModel.smartfoxClient.sendCommandVO(new C2SCancelActiveAllianceQuestVO(this.eventId));
  }
  get nextRewardThresholdIndex() {
    var __s62local0 = this;
    var __s62local1 = this.allianceBarVO.pointThresholds.findIndex(function (__s64param0) {
      return __s64param0 > __s62local0.allianceBarVO.ownPoints;
    });
    if (__s62local1 == -1) {
      __s62local1 = this.allianceBarVO.pointThresholds.length - 1;
    }
    return __s62local1;
  }
  get divisionRoundVO() {
    return this._divisionRoundVO;
  }
  get mode() {
    return this._divisionRoundVO.type;
  }
  get isDefaultMode() {
    return this._divisionRoundVO.type == AllianceMobilizationEventEventVO.MODE_NORMAL;
  }
  getMaxLeagueID() {
    return this._divisionRoundVO.promotes.length;
  }
  getDivisionLevelRewards(argument0) {
    var __s75local0 = this.allianceScoreEventVOs[argument0 - 1];
    if (__s75local0) {
      return __s75local0.rewardLists;
    } else {
      return [];
    }
  }
  get participants() {
    return this._participants;
  }
  set participants(value) {
    this._participants = value;
  }
  get subDivisionId() {
    return this._subDivisionId;
  }
  getRewardBracketFromRank(argument0) {
    return this.getGlobalLeaderBoardRewards(this.leagueID).findIndex(function (__s87param0) {
      return argument0 <= __s87param0.rank[__s87param0.rank.length - 1];
    }) + 1;
  }
  get ticketCurrencyID() {
    var __s89local0 = this.eventPackagesVO.getVisiblePackages(CastleModel.userData.userLevel, CastleModel.userData.userLegendLevel, 0);
    if (__s89local0.length > 0) {
      return __s89local0[0].rewards.getItemByType(CollectableEnum.GENERIC_CURRENCY).id;
    }
  }
  getEventSpecificTextID(argument0) {
    return argument0;
  }
  static getActiveEventVO(argument0) {
    return CastleModel.specialEventData.getActiveEventByEventId(argument0);
  }
  static getDivisionIconClip(argument0) {
    var __s96local0 = "AllianceMobilizationDivisionIcons_" + AllianceMobilizationEventEventVO.getDivsionName(argument0);
    return new CastleGoodgameExternalClip(__s96local0, BasicModel.basicLoaderData.getVersionedItemAssetUrl("AllianceMobilizationDivisionIcons"), null, 0, false);
  }
  static getDivsionName(argument0) {
    switch (argument0) {
      case 1:
        return "Copper";
      case 2:
        return "Glass";
      case 3:
        return "Bronze";
      case 4:
        return "Silver";
      case 5:
        return "Gold";
      case 6:
        return "Diamond";
      default:
        return "Copper";
    }
  }
  static EVENT_BUILDING_WOD = 4311;
  static MODE_NORMAL = "normal";
  static MODE_QUALIFICATION = "qualification";
  static MODE_ADJUSTMENT = "adjustment";
  static SEEN_EVENT_KEY = "seenAllianceMobilizationEvent";
}
