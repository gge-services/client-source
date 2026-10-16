Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTitle = require("gge-module:export_ClientConstTitle");
var __dep_export_C2SKingdomSkipTransferVO = require("gge-module:export_C2SKingdomSkipTransferVO");
var __dep_export_C2SPointEventGetPointsVO = require("gge-module:export_C2SPointEventGetPointsVO");
var __dep_export_C2SJoinCastleVO = require("gge-module:export_C2SJoinCastleVO");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleKingdomEvent = require("gge-module:export_CastleKingdomEvent");
var __dep_export_CastleScoreEventEvent = require("gge-module:export_CastleScoreEventEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleTitleDataEvent = require("gge-module:export_CastleTitleDataEvent");
var __dep_export_CollectableRenderClipsList = require("gge-module:export_CollectableRenderClipsList");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function FactionEventOverviewSublayer(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.initBasicButtons([__s3param0.mc_bottomBar.mc_sendTroops.btn_sendTroops, __s3param0.mc_bottomBar.btn_enter, __s3param0.mc_bottomBar.mc_skipTroops.btn_fullSkip, __s3param0.mc_bottomBar.mc_skipTroops.btn_minuteSkip]);
    __s3local0.attackTowersBox = new __dep_export_FactionAttackPveBox.FactionAttackPveBox(__s3param0.mc_objective0);
    __s3local0.attackCampsBox = new __dep_export_FactionAttackPvpBox.FactionAttackPvpBox(__s3param0.mc_objective1);
    var __s3local1 = __dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(__dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID);
    __s3param0.mc_bottomBar.mc_skipTroops.mc_icon.mouseChildren = false;
    __s3param0.mc_bottomBar.mc_skipTroops.btn_minuteSkip.toolTipText = "timeSkipButton_tooltip";
    __s3param0.mc_bottomBar.mc_skipTroops.btn_fullSkip.toolTipText = {
      t: "dialog_season_skipTransfer",
      p: [__dep_export_CastleModel.CastleModel.costsData.getFinalCostsStringC2(__s3local1.skipUnitTravelC2Cost)]
    };
    __s3local0.i_troops_txt_remainingTime = __s3local0.textFieldManager.registerTextField(__s3param0.mc_bottomBar.mc_skipTroops.txt_remainingTime, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
    __s3local0.textFieldManager.registerTextField(__s3param0.mc_bottomBar.mc_lmsWarning.txt_description, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_factionOverview_lastManStanding_copy"));
    __s3local0.textFieldManager.registerTextField(__s3param0.txt_header, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_factionOverview_header"));
    __s3local0.textFieldManager.registerTextField(__s3param0.mc_bottomBar.mc_sendTroops.txt_sendTroops, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_season_sendTroops"));
    __s3local0.textFieldManager.registerTextField(__s3param0.mc_bottomBar.txt_enter, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_factionOverview_enter"));
    __s3local0.subLayerDisp.mc_nextReward.mc_points.toolTipText = "factionHighscore_points";
    __s3local0.subLayerDisp.mc_nextTitle.mc_points.toolTipText = "factionHighscore_points";
    __s3local0.subLayerDisp.mc_nextTitle.mc_points.mouseChildren = false;
    __s3local0._seasonLeague = new __dep_export_SeasonLeagueEventElementComponent.SeasonLeagueEventElementComponent(__s3local0.subLayerDisp.mc_seasonLeague, __dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_FACTION);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FactionEventOverviewSublayer, __s1param0);
  FactionEventOverviewSublayer.prototype.updateShowLMSWarning = function () {
    var __s5local0 = !__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_FACTION).isActiveInEvent;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.mc_bottomBar.mc_sendTroops.btn_sendTroops, !__s5local0);
    this.subLayerDisp.mc_bottomBar.mc_sendTroops.btn_sendTroops.toolTipText = __s5local0 ? "dialog_factionOverview_sendTroops_lms_tooltip " : "dialog_factionOverview_sendTroops_tooltip";
    this.subLayerDisp.mc_bottomBar.mc_lmsWarning.visible = __s5local0;
  };
  FactionEventOverviewSublayer.prototype.updateEnterButton = function () {
    var __s7local0;
    var __s7local1 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_FACTION);
    var __s7local2 = __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().isInState(__dep_export_CastleLayoutManager.CastleLayoutManager.STATE_KINGDOMMAP);
    var __s7local3 = __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID != __dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID || __s7local2;
    var __s7local4 = this.subLayerDisp.mc_bottomBar.btn_enter;
    __s7local0 = __s7local3 ? __s7local1.isActiveInEvent ? "dialog_factionOverview_enter_tooltip" : "dialog_factionOverview_enter_lms_tooltip" : "dialog_factionOverview_alreadyEntered";
    __dep_export_ButtonHelper.ButtonHelper.enableButton(__s7local4, __s7local3);
    this.subLayerDisp.mc_bottomBar.btn_enter.toolTipText = __s7local0;
  };
  FactionEventOverviewSublayer.prototype.updateSendTroopsArea = function () {
    var __s9local0 = __dep_export_CastleModel.CastleModel.kingdomData.getIncomingUnitsTransferByKingdomID(__dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID);
    var __s9local1 = __s9local0 != null && __s9local0.remainingTimeInSeconds > 0;
    var __s9local2 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_FACTION).isSpectator;
    this.subLayerDisp.mc_bottomBar.mc_sendTroops.visible = !__s9local1 && !__s9local2;
    this.subLayerDisp.mc_bottomBar.mc_skipTroops.visible = __s9local1 && !__s9local2;
    if (__s9local1 && !__s9local2) {
      this.subLayerDisp.mc_bottomBar.mc_skipTroops.mc_bar.scaleX = __s9local0.progressPercent;
      this.subLayerDisp.mc_bottomBar.mc_skipTroops.mc_icon.toolTipText = __s9local0.toolTipText;
      this.i_troops_txt_remainingTime.textContentVO.stringValue = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(__s9local0.remainingTimeInSeconds);
    }
  };
  FactionEventOverviewSublayer.prototype.show = function (__s12param0) {
    __s1param0.prototype.show.call(this, __s12param0);
    this.updateShowLMSWarning();
    this.updateEnterButton();
    this.updateSendTroopsArea();
    this.attackTowersBox.show();
    this.attackCampsBox.show();
    this._seasonLeague.onShow();
    this.setNextTitle();
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.FACTION_EVENT_LAST_MAN_STANDING_UPDATE, this.bindFunction(this.onLMSUpdate));
    __dep_export_CastleModel.CastleModel.kingdomData.addEventListener(__dep_export_CastleKingdomEvent.CastleKingdomEvent.KINGDOMDATA_ARRIVED, this.bindFunction(this.onKingdomDataArrived));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.FACTION_EVENT_SPECTATOR_STATUS_CHANGE, this.bindFunction(this.onSpectatorStatusChanged));
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
    this.controller.addEventListener(__dep_export_CastleScoreEventEvent.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.onGetPoints));
    __dep_export_CastleModel.CastleModel.titleData.addEventListener(__dep_export_CastleTitleDataEvent.CastleTitleDataEvent.TITLE_DATA_UPDATED, this.bindFunction(this.onTitleDataUpdate));
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SPointEventGetPointsVO.C2SPointEventGetPointsVO(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_FACTION));
    this.updateSeasonLeagueElement();
  };
  FactionEventOverviewSublayer.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    this.attackTowersBox.hide();
    this.attackCampsBox.hide();
    this._seasonLeague.onHide();
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.FACTION_EVENT_LAST_MAN_STANDING_UPDATE, this.bindFunction(this.onLMSUpdate));
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.FACTION_EVENT_SPECTATOR_STATUS_CHANGE, this.bindFunction(this.onSpectatorStatusChanged));
    __dep_export_CastleModel.CastleModel.kingdomData.removeEventListener(__dep_export_CastleKingdomEvent.CastleKingdomEvent.KINGDOMDATA_ARRIVED, this.bindFunction(this.onKingdomDataArrived));
    this.controller.removeEventListener(__dep_export_CastleScoreEventEvent.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.onGetPoints));
    __dep_export_CastleModel.CastleModel.titleData.addEventListener(__dep_export_CastleTitleDataEvent.CastleTitleDataEvent.TITLE_DATA_UPDATED, this.bindFunction(this.onTitleDataUpdate));
  };
  FactionEventOverviewSublayer.prototype.updateSeasonLeagueElement = function () {
    var __s16local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_FACTION);
    this.subLayerDisp.mc_seasonLeagueInactive.visible = !__s16local0.seasonLeague.isModeEnabled;
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_seasonLeagueInactive.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_faction_seasonLeague_header")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_seasonLeagueInactive.txt_desc, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_export_CastleModel.CastleModel.seasonLeagueData.isSeasonLeagueActive() ? "dialog_faction_seasonLeague_factionNotContributing_copy" : "dialog_faction_seasonLeague_leagueInactive_copyn")).autoFitToBounds = true;
  };
  FactionEventOverviewSublayer.prototype.onKingdomDataArrived = function (__s18param0) {
    this.updateSendTroopsArea();
  };
  FactionEventOverviewSublayer.prototype.onTimer = function (__s20param0) {
    this.updateSendTroopsArea();
  };
  FactionEventOverviewSublayer.prototype.onSpectatorStatusChanged = function (__s22param0) {
    this.updateSendTroopsArea();
  };
  FactionEventOverviewSublayer.prototype.onLMSUpdate = function (__s24param0) {
    this.updateShowLMSWarning();
    this.updateEnterButton();
  };
  FactionEventOverviewSublayer.prototype.onClick = function (__s26param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s26param0.target)) {
      switch (__s26param0.target) {
        case this.subLayerDisp.mc_bottomBar.btn_enter:
          this.onClickEnter();
          break;
        case this.subLayerDisp.mc_bottomBar.mc_sendTroops.btn_sendTroops:
          this.onClickSendTroops();
          break;
        case this.subLayerDisp.mc_bottomBar.mc_skipTroops.btn_fullSkip:
          this.onClickRubySkipTroops();
          break;
        case this.subLayerDisp.mc_bottomBar.mc_skipTroops.btn_minuteSkip:
          this.onClickMinuteSkipTroops();
      }
    }
  };
  FactionEventOverviewSublayer.prototype.onClickMinuteSkipTroops = function () {
    __dep_export_CastleDialogSubLayer.CastleDialogSubLayer.dialogHandler.registerDefaultDialogs(__dep_export_CastleMinuteSkipDialog.CastleMinuteSkipDialog, new __dep_export_KingdomUnitsTravelMinuteSkipProperties.KingdomUnitsTravelMinuteSkipProperties(__dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID));
  };
  FactionEventOverviewSublayer.prototype.onClickRubySkipTroops = function () {
    if (__dep_export_CastleModel.CastleModel.kingdomData.getIncomingUnitsTransferByKingdomID(__dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID).remainingTimeInSeconds >= 1) {
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SKingdomSkipTransferVO.C2SKingdomSkipTransferVO(__dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID, 1));
    }
  };
  FactionEventOverviewSublayer.prototype.onClickSendTroops = function () {
    var __s35local0 = __dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(__dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID);
    __dep_export_CastleDialogSubLayer.CastleDialogSubLayer.dialogHandler.registerDefaultDialogs(__dep_export_CastleTransferTroopsDialog.CastleTransferTroopsDialog, new __dep_export_CastleTransferTroopsToKingdomProperties.CastleTransferTroopsToKingdomProperties(__s35local0));
  };
  FactionEventOverviewSublayer.prototype.onClickEnter = function () {
    if (!__dep_export_FlashBlockHelper.FlashBlockHelper.checkFlashBlock(__dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID)) {
      var __s37local0 = __dep_export_CastleModel.CastleModel.userData.castleList.getMainFactionCastle();
      if (__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_FACTION).isSpectator) {
        if (__s37local0) {
          __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.SWITCH_KINGDOM_GOTO_WORLDMAP_AND_CENTER_POS_COMMAND, [__dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID, __s37local0.absAreaPosX, __s37local0.absAreaPosY]);
        } else {
          __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.SWITCH_KINGDOM_GOTO_WORLDMAP_AND_CENTER_POS_COMMAND, [__dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID, 1300, 60]);
        }
      } else if (__s37local0) {
        __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.JOIN_AREA_AND_SAVE_POSITION_COMMAND, __s37local0);
      } else {
        if (__dep_export_CastleModel.CastleModel.worldmapData) {
          __dep_export_CastleModel.CastleModel.worldmapData.allowGAARequests = false;
        }
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SJoinCastleVO.C2SJoinCastleVO(0, __dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID));
      }
    }
  };
  FactionEventOverviewSublayer.prototype.setNextReward = function () {
    var __s46local0;
    var __s46local1 = false;
    var __s46local2 = 0;
    this.subLayerDisp.mc_nextReward.mc_checkmark.visible = false;
    __s46local2 = 0;
    for (; __s46local2 < this.ownLeagueVO.pointThresholds.length; __s46local2++) {
      if (this.ownLeagueVO.ownPoints < this.ownLeagueVO.pointThresholds[__s46local2]) {
        __s46local0 = this.ownLeagueVO.rewardLists[__s46local2];
        break;
      }
    }
    if (!__s46local0) {
      __s46local1 = true;
      __s46local0 = this.ownLeagueVO.rewardLists[this.ownLeagueVO.rewardLists.length - 1];
      this.subLayerDisp.mc_nextReward.mc_checkmark.visible = this.ownLeagueVO.ownRank == 1;
      for (var __s46local3 = 0; __s46local3 < this.ownLeagueVO.topX.length; __s46local3++) {
        if (this.ownLeagueVO.ownRank > this.ownLeagueVO.topX[__s46local3]) {
          __s46local0 = this.ownLeagueVO.rewardLists[__s46local3 + __s46local2];
          this.subLayerDisp.mc_nextReward.mc_checkmark.visible = false;
          break;
        }
      }
    }
    this.subLayerDisp.mc_nextReward.rewards1.visible = __s46local0.length == 1;
    this.subLayerDisp.mc_nextReward.rewards2.visible = __s46local0.length == 2;
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displayMultipleItemsComplete(this, new __dep_export_CollectableRenderClipsList.CollectableRenderClipsList(this.subLayerDisp.mc_nextReward["rewards" + __s46local0.length], "reward").addItemMcs("mc_item").addInfoBtns("parent.btn_info").addTextfields("txt_reward"), __s46local0, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_DEFAULT, new __s0local0(58, 58)));
    if (this.ownLeagueVO.ownRank == 1 && __s46local1) {
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_nextReward.txt_header, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_factionOverview_nextReward_headerFinal"));
    } else {
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_nextReward.txt_header, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_factionOverview_nextReward_header"));
    }
    var __s46local4 = __s46local1 ? new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.ownLeagueVO.ownPoints) : new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_factionOverview_nextReward_points", [this.ownLeagueVO.ownPoints, this.ownLeagueVO.pointThresholds[__s46local2]]);
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_nextReward.txt_points, __s46local4);
  };
  FactionEventOverviewSublayer.prototype.setNextTitle = function () {
    var __s57local0;
    var __s57local1 = __dep_export_CastleModel.CastleModel.titleData.getHighestTitleCurrentlyHeldByThisUser(__dep_export_ClientConstTitle.ClientConstTitle.BRAVERY_TITLE);
    var __s57local2 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.titleData.getPointsInSystem(__dep_export_ClientConstTitle.ClientConstTitle.BRAVERY_TITLE));
    this.subLayerDisp.mc_nextTitle.mc_checkmark.visible = false;
    if (__s57local1 == __dep_export_CastleTitleData.CastleTitleData.NULL_TITLE || __s57local1.nextTitleID > -1) {
      __s57local0 = __s57local1 == __dep_export_CastleTitleData.CastleTitleData.NULL_TITLE ? __dep_export_CastleModel.CastleModel.titleData.getTitlesFromSystem(__dep_export_ClientConstTitle.ClientConstTitle.BRAVERY_TITLE)[0] : __dep_export_CastleModel.CastleModel.titleData.getTitleByTitleID(__s57local1.nextTitleID);
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_nextTitle.txt_header, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_factionOverview_nextTitle_header"));
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_nextTitle.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s57local0.textID));
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_nextTitle.txt_points, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("value_proportional_value", [__s57local2, __s57local0.threshold]));
      this.subLayerDisp.mc_nextTitle.mc_toolTipArea.toolTipText = __s57local0.descriptionTextVO;
    } else {
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_nextTitle.txt_header, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_factionOverview_nextTitle_headerFinal"));
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_nextTitle.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s57local1.textID));
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_nextTitle.txt_points, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s57local2));
      this.subLayerDisp.mc_nextTitle.mc_toolTipArea.toolTipText = __s57local1.descriptionTextVO;
      this.subLayerDisp.mc_nextTitle.mc_checkmark.visible = true;
    }
  };
  Object.defineProperty(FactionEventOverviewSublayer.prototype, "ownLeagueVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_FACTION).getOwnLeagueEventVO();
    },
    enumerable: true,
    configurable: true
  });
  FactionEventOverviewSublayer.prototype.onGetPoints = function (__s63param0) {
    this.setNextReward();
  };
  FactionEventOverviewSublayer.prototype.onTitleDataUpdate = function (__s65param0) {
    this.setNextTitle();
  };
  return FactionEventOverviewSublayer;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.FactionEventOverviewSublayer = __s0local1;
var __dep_export_FlashBlockHelper = require("gge-module:export_FlashBlockHelper");
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleTitleData = require("gge-module:export_CastleTitleData");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CastleTransferTroopsDialog = require("gge-module:export_CastleTransferTroopsDialog");
var __dep_export_CastleTransferTroopsToKingdomProperties = require("gge-module:export_CastleTransferTroopsToKingdomProperties");
var __dep_export_CastleMinuteSkipDialog = require("gge-module:export_CastleMinuteSkipDialog");
var __dep_export_KingdomUnitsTravelMinuteSkipProperties = require("gge-module:export_KingdomUnitsTravelMinuteSkipProperties");
var __dep_export_SeasonLeagueEventElementComponent = require("gge-module:export_SeasonLeagueEventElementComponent");
var __dep_export_FactionAttackPveBox = require("gge-module:export_FactionAttackPveBox");
var __dep_export_FactionAttackPvpBox = require("gge-module:export_FactionAttackPvpBox");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList", "ISublayer");
