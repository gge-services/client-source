Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleScoreEventEvent = require("gge-module:export_CastleScoreEventEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_CastleScoreBarProgressVO = require("gge-module:export_CastleScoreBarProgressVO");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleGenericMerchantDialogProperties = require("gge-module:export_CastleGenericMerchantDialogProperties");
var __dep_export_LongtermPointEventGlobalLeaderBoardDialog = require("gge-module:export_LongtermPointEventGlobalLeaderBoardDialog");
var __dep_export_ApprenticeSmithEventDialog = require("gge-module:export_ApprenticeSmithEventDialog");
var __dep_export_LongTermPointEventClientConst = require("gge-module:export_LongTermPointEventClientConst");
var __dep_export_LongTermPointEventEventInfoComponent = require("gge-module:export_LongTermPointEventEventInfoComponent");
var __dep_export_LongTermPointEventRewardListProperties = require("gge-module:export_LongTermPointEventRewardListProperties");
var __dep_export_LongTermPointEventSkin = require("gge-module:export_LongTermPointEventSkin");
var __s0local0 = function (__s1param0) {
  function LongTermPointEventDialog() {
    var __s3local0 = this;
    __s3local0.DESCRIPTION_POSITION_WHEN_BOOSTER_ACTIVE = -138;
    __s3local0.DESCRIPTION_POSITION_WHEN_BOOSTER_INACTIVE = -92;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, LongTermPointEventDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(LongTermPointEventDialog, __s1param0);
  LongTermPointEventDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.itxt_time = this.textFieldManager.registerTextField(this.dialogDisp.mc_time.txt_time, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
    this.itxt_time.autoFitToBounds = true;
    this.dialogDisp.mc_time.mouseChildren = false;
    this.dialogDisp.mc_eventTime.mouseChildren = false;
    this.dialogDisp.hard_mode_medal.mouseChildren = false;
    this.dialogDisp.hard_mode_medal.visible = false;
    this.dialogDisp.hard_mode_medal.toolTipText = "dialog_longPointsEvent_hardModeBadge_tooltip";
    this.dialogDisp.booster.mouseChildren = false;
    this.dialogDisp.booster.toolTipText = "pointsEvent_booster_tooltip";
    this.dialogDisp.booster.mc_percent.visible = false;
  };
  LongTermPointEventDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.eventInfoComponent ||= new __dep_export_LongTermPointEventEventInfoComponent.LongTermPointEventEventInfoComponent(this.disp, this.dialogProperties);
    if (__dep_exact_f855840627e6e145.int(this.eventVO.remainingEventTimeInSeconds) <= 0) {
      this.hide();
    } else {
      this.setSkin();
      this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_highscore]);
      this.dialogDisp.btn_highscore.toolTipText = "dialog_longPointsEvent_pointRanking_tooltip";
      this.dialogDisp.btn_help.toolTipText = "generic_help";
      var __s7local0 = new (__dep_exact_81dacdf05bd32292_2.getDefinitionByName("LongTermPointEvent_Icon_Score"))();
      __s7local0.toolTipText = "dialog_longPointsEvent_seasonalPoints";
      var __s7local1 = new (__dep_exact_81dacdf05bd32292_2.getDefinitionByName("LongTermPointEvent_Background_" + this.eventVO.skin.assetName))();
      var __s7local2 = new __dep_export_RewardsDialogScoreBarProperties.RewardsDialogScoreBarProperties(this.getRewardLists(), "longPointsEvent", this.tooltipValues, this.levelLabels, null);
      if (this.eventVO.skin == __dep_export_LongTermPointEventSkin.LongTermPointEventSkin.XMAS) {
        __s7local2.nextRewardTextColor = 15921906;
      }
      if (this.scoreBar) {
        this.scoreBar.destroy();
      }
      this.scoreBar = new __dep_export_RewardsDialogScoreBarComponentExternal.RewardsDialogScoreBarComponentExternal();
      this.scoreBar.load(this.dialogDisp.mc_scoreBarContainer, this.bindFunction(this.onScorebarAssetLoaded), "Scorebar_Player", __s7local0, __s7local1, this.bindFunction(this.openRewardsDialog), __s7local2);
      __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemoved));
      __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onEventRefreshed));
      __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateEventTime));
      __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_DynamicTopXEvent.DynamicTopXEvent.UPDATE_DYNAMIC_TOP_X, this.bindFunction(this.onTopXUpdated));
      this.onUpdateEventTime();
      this.updateTabs();
      this.eventInfoComponent.showEvent();
    }
  };
  LongTermPointEventDialog.prototype.onScorebarAssetLoaded = function () {
    this.onUpdatePoints();
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleScoreEventEvent.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.onUpdatePoints));
  };
  LongTermPointEventDialog.prototype.onEventRefreshed = function (__s15param0) {
    this.updateTabs();
    this.updateProgressBar();
  };
  LongTermPointEventDialog.prototype.onTopXUpdated = function (__s17param0) {
    this.scoreBar.properties.setLabels(this.levelLabels);
    this.updateProgressBar();
  };
  LongTermPointEventDialog.prototype.onUpdateEventTime = function (__s19param0 = null) {
    if (__dep_exact_f855840627e6e145.int(this.eventVO.remainingEventTimeInSeconds) <= 0) {
      this.hide();
    } else {
      this.updateTimer();
      this.updateBooster();
      this.eventInfoComponent.updateEventTimer();
    }
  };
  LongTermPointEventDialog.prototype.updateBooster = function () {
    var __s23local0 = __dep_exact_81dacdf05bd32292.castAs(__dep_export_CastleModel.CastleModel.boostData.getBoosterByID(__dep_exact_26a421b704832cff.BoosterConst.LONGTERM_POINT_EVENT_BOOST_ID), "LongTermPointEventShopVO");
    if ((this.dialogProperties.isActiveEvent() || this.dialogProperties.selectedEvent == __dep_export_LongTermPointEventClientConst.LongTermPointEventClientConst.GENERAL_TAB_ID) && __s23local0 && __s23local0.remainingTimeInSeconds > 0) {
      if (__s23local0.bonusPercentage > 0) {
        this.dialogDisp.booster.mc_percent.visible = true;
        var __s23local1 = new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("value_percentage_add", [String(__s23local0.bonusPercentage)]);
        this.textFieldManager.registerTextField(this.dialogDisp.booster.mc_percent.txt_percentage, __s23local1);
      }
      var __s23local2 = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(__s23local0.remainingTimeInSeconds);
      this.dialogDisp.booster.visible = true;
      this.eventInfoComponent.updateTextPlacement(true);
      this.textFieldManager.registerTextField(this.dialogDisp.booster.txt_booster_duration, new __dep_exact_92d05af59ee2ff30_2.TextVO(__s23local2)).autoFitToBounds = true;
    } else {
      this.dialogDisp.booster.visible = false;
      this.eventInfoComponent.updateTextPlacement(false);
    }
  };
  LongTermPointEventDialog.prototype.onEventRemoved = function (__s28param0) {
    if (__s28param0.specialEventVO.eventId == __dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_LONGTERM_POINT_EVENT) {
      this.hide();
    } else {
      this.updateTabs();
    }
  };
  LongTermPointEventDialog.prototype.updateProgressBar = function () {
    this.scoreBar.update(new __dep_export_CastleScoreBarProgressVO.CastleScoreBarProgressVO(this.eventVO.ownPoints, this.eventVO.ownRank, this.getPointThresholds(), this.eventVO.topX, this.getRewardsReceived()));
  };
  LongTermPointEventDialog.prototype.onUpdatePoints = function (__s34param0 = null) {
    this.updateProgressBar();
    this.updateHardMode();
  };
  LongTermPointEventDialog.prototype.updateHardMode = function () {
    this.dialogDisp.hard_mode_medal.visible = this.dialogProperties.eventVO.isHardMode;
  };
  LongTermPointEventDialog.prototype.onClick = function (__s38param0) {
    __s1param0.prototype.onClick.call(this, __s38param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s38param0.target)) {
      switch (__s38param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          return;
        case this.dialogDisp.btn_help:
          this.showHelp();
          return;
        case this.dialogDisp.btn_highscore:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_LongtermPointEventGlobalLeaderBoardDialog.LongtermPointEventGlobalLeaderBoardDialog);
          return;
        case this.dialogDisp.btn_showMe:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_ApprenticeSmithEventDialog.ApprenticeSmithEventDialog, new __dep_export_CastleGenericMerchantDialogProperties.CastleGenericMerchantDialogProperties(__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_APPRENTICE_TOKEN_VENDOR), this.getPackageIDForShowMeButton()));
          return;
      }
      if (!this.eventInfoComponent.handleClickedTab(__s38param0.target)) {
        this.eventInfoComponent.handleEventButtonClick(__s38param0.target);
      }
      this.updateBooster();
    }
  };
  LongTermPointEventDialog.prototype.openRewardsDialog = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_LongTermPointEventRewardListDialog.LongTermPointEventRewardListDialog, new __dep_export_LongTermPointEventRewardListProperties.LongTermPointEventRewardListProperties(this.getRewardLists(), this.getPointThresholds(), this.getRewardsReceived(), this.eventVO.skin));
  };
  LongTermPointEventDialog.prototype.getPackageIDForShowMeButton = function () {
    var __s45local0 = this.eventVO.rewardLists[0].getItemByIndex(0);
    var __s45local1 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_APPRENTICE_TOKEN_VENDOR);
    if (!__s45local1) {
      return -1;
    }
    if (!__dep_exact_81dacdf05bd32292.instanceOfClass(__s45local0, "CollectableItemGenericCurrencyVO")) {
      return -1;
    }
    for (var __s45local2 = 0; __s45local2 < __s45local1.eventPackages.length; __s45local2++) {
      if (__s45local1.eventPackages[__s45local2].getCostList().getItemByIndex(0) && __s45local1.eventPackages[__s45local2].getCostList().getItemByIndex(0).itemType == __dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY && __s45local1.eventPackages[__s45local2].getCostList().getItemByIndex(0).id == __s45local0.id) {
        return __s45local1.eventPackages[__s45local2].packageID;
      }
    }
    return -1;
  };
  LongTermPointEventDialog.prototype.getRewardsReceived = function () {
    return __dep_exact_f855840627e6e145.int(this.eventVO.isHardMode ? this.eventVO.rewardsReceivedRaw : this.eventVO.rewardsReceived);
  };
  LongTermPointEventDialog.prototype.getPointThresholds = function () {
    if (this.eventVO.isHardMode) {
      return this.eventVO.pointThreshholdsRaw;
    } else {
      return this.eventVO.pointThresholds;
    }
  };
  LongTermPointEventDialog.prototype.getRewardLists = function () {
    if (this.eventVO.isHardMode) {
      return this.eventVO.rewardListsRaw;
    } else {
      return this.eventVO.rewardLists;
    }
  };
  LongTermPointEventDialog.prototype.showHelp = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_longPointsEvent"));
  };
  Object.defineProperty(LongTermPointEventDialog.prototype, "levelLabels", {
    get: function () {
      var __s64local0 = [];
      var __s64local1 = 0;
      for (__s64local1 = 0; __s64local1 < this.getPointThresholds().length && this.getPointThresholds()[__s64local1] != 0; __s64local1++) {
        __s64local0.push(this.getPointThresholds()[__s64local1]);
      }
      for (__s64local1 = 0; __s64local1 < this.eventVO.topX.length; __s64local1++) {
        __s64local0.push(__dep_exact_92d05af59ee2ff30.Localize.text("Ranking_TopX", [this.eventVO.topX[__s64local1]]));
      }
      if (this.eventVO.topX.length < 3) {
        __s64local0.push(__dep_exact_92d05af59ee2ff30.Localize.text("Ranking_Winner"));
      }
      return __s64local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LongTermPointEventDialog.prototype, "tooltipValues", {
    get: function () {
      var __s71local0 = [];
      for (var __s71local1 = 0; __s71local1 < this.getPointThresholds().length && this.getPointThresholds()[__s71local1] != 0; __s71local1++) {
        __s71local0.push(this.getPointThresholds()[__s71local1]);
      }
      for (var __s71local2 = 0; __s71local2 < this.eventVO.topX.length; __s71local2++) {
        __s71local0.push(this.eventVO.topX[__s71local2]);
      }
      return __s71local0;
    },
    enumerable: true,
    configurable: true
  });
  LongTermPointEventDialog.prototype.setSkin = function () {
    this.setSkinText();
  };
  Object.defineProperty(LongTermPointEventDialog.prototype, "skin", {
    get: function () {
      return this.dialogProperties.eventVO.skin;
    },
    enumerable: true,
    configurable: true
  });
  LongTermPointEventDialog.prototype.updatePosition = function () {
    __s1param0.prototype.updatePosition.call(this);
    if (__dep_exact_81dacdf05bd32292.MobileHelper.isScreenTooSmall()) {
      var __s81local0 = this.disp;
      __s81local0.scaleX = __s81local0.scaleY = __s81local0.scaleX * 0.9;
      __s81local0.x += __s81local0.width * 0.05;
      __s81local0.y -= __s81local0.height * 0.04;
    }
  };
  LongTermPointEventDialog.prototype.setSkinText = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_speechbubble, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_longPointsEvent_eventcamp_message" + this.dialogProperties.eventVO.skin.textSuffix)).verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
  };
  LongTermPointEventDialog.prototype.updateTimer = function () {
    var __s86local0 = __dep_exact_f855840627e6e145.int(this.eventVO.remainingEventTimeInSeconds);
    this.itxt_time.textContentVO.stringValue = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(__s86local0);
    this.dialogDisp.mc_time.toolTipText = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventToolTipString(__s86local0);
  };
  Object.defineProperty(LongTermPointEventDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  LongTermPointEventDialog.prototype.hideLoaded = function (__s90param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s90param0);
    if (this.scoreBar) {
      this.scoreBar.destroy();
    }
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleScoreEventEvent.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.onUpdatePoints));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemoved));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onEventRefreshed));
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateEventTime));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_DynamicTopXEvent.DynamicTopXEvent.UPDATE_DYNAMIC_TOP_X, this.bindFunction(this.onTopXUpdated));
  };
  LongTermPointEventDialog.prototype.updateTabs = function () {
    this.dialogProperties.updateEventIDs();
    this.eventInfoComponent.properties = this.dialogProperties;
  };
  Object.defineProperty(LongTermPointEventDialog.prototype, "eventVO", {
    get: function () {
      return this.dialogProperties.eventVO;
    },
    enumerable: true,
    configurable: true
  });
  LongTermPointEventDialog.__initialize_static_members = function () {
    LongTermPointEventDialog.TAB_ICONS_IDS = [__dep_export_LongTermPointEventClientConst.LongTermPointEventClientConst.GENERAL_TAB_ID, __dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_ALIEN_INVASION_ALLIANCE, __dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE, __dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_SAMURAI_INVASION, __dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_FACTION_INVASION, __dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_RED_ALIEN_INVASION_ALLIANCE];
  };
  LongTermPointEventDialog.NAME = "LongTermPointEvent_Jan25";
  return LongTermPointEventDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.LongTermPointEventDialog = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_RewardsDialogScoreBarProperties = require("gge-module:export_RewardsDialogScoreBarProperties");
var __dep_export_LongTermPointEventRewardListDialog = require("gge-module:export_LongTermPointEventRewardListDialog");
var __dep_export_RewardsDialogScoreBarComponentExternal = require("gge-module:export_RewardsDialogScoreBarComponentExternal");
var __dep_export_DynamicTopXEvent = require("gge-module:export_DynamicTopXEvent");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
