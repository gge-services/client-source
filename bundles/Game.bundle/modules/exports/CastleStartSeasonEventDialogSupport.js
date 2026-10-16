Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2STreasuremapSkipTransferVO = require("gge-module:export_C2STreasuremapSkipTransferVO");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleTreasureMapEvent = require("gge-module:export_CastleTreasureMapEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_export_CastleTransferResToSeasonProperties = require("gge-module:export_CastleTransferResToSeasonProperties");
var __s0local0 = function (__s1param0) {
  function CastleStartSeasonEventDialogSupport(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([__s3local0.subLayerDisp.btn_enterWorld, __s3local0.subLayerDisp.btn_sendTroops, __s3local0.subLayerDisp.btn_sendResources, __s3local0.subLayerDisp.info_sendResources.btn_fullSkip, __s3local0.subLayerDisp.info_sendTroops.btn_fullSkip, __s3local0.subLayerDisp.info_sendResources.btn_minuteSkip, __s3local0.subLayerDisp.info_sendTroops.btn_minuteSkip]);
    __s3local0.i_sRess_txt_remainingTime = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.info_sendResources.txt_remainingTime, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    __s3local0.i_sTroop_txt_remainingTime = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.info_sendTroops.txt_remainingTime, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleStartSeasonEventDialogSupport, __s1param0);
  CastleStartSeasonEventDialogSupport.prototype.show = function (__s5param0) {
    __s1param0.prototype.show.call(this, __s5param0);
    this.seasonEventVO = __s5param0;
    if (this.treasureMapVO) {
      this.subLayerDisp.btn_enterWorld.icon.gotoAndStop(this.buttonFrame);
      this.subLayerDisp.btn_sendTroops.gotoAndStop(this.buttonFrame);
      this.subLayerDisp.btn_sendResources.gotoAndStop(this.buttonFrame);
      this.subLayerDisp.info_sendResources.btn_fullSkip.gotoAndStop(1);
      this.subLayerDisp.info_sendResources.mc_icon.gotoAndStop(this.buttonFrame);
      this.subLayerDisp.info_sendResources.btn_fullSkip.enabled = true;
      this.subLayerDisp.info_sendResources.mc_icon.mouseChildren = false;
      this.subLayerDisp.info_sendTroops.btn_fullSkip.gotoAndStop(1);
      this.subLayerDisp.info_sendTroops.mc_icon.gotoAndStop(this.buttonFrame);
      this.subLayerDisp.info_sendTroops.btn_fullSkip.enabled = true;
      this.subLayerDisp.info_sendTroops.mc_icon.mouseChildren = false;
      if (this.layoutManager.isInEventState) {
        switch (__dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.eventId) {
          case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_CRUSADE_THORNKING:
            this.subLayerDisp.btn_enterWorld.toolTipText = "dialog_thornkingOverview_alreadyEntered_tooltip";
            break;
          default:
            this.subLayerDisp.btn_enterWorld.toolTipText = "alert_not_available";
        }
      } else {
        this.subLayerDisp.btn_enterWorld.toolTipText = "dialog_season_changeWorlds";
      }
      this.subLayerDisp.btn_sendTroops.toolTipText = "dialog_season_sendTroops";
      this.subLayerDisp.btn_sendResources.toolTipText = "dialog_season_sendResources";
      this.subLayerDisp.info_sendResources.btn_fullSkip.toolTipText = {
        t: "dialog_season_skipTransfer",
        p: [__dep_export_CastleModel.CastleModel.costsData.getFinalCostsStringC2(this.treasureMapVO.skipCostC2)]
      };
      this.subLayerDisp.info_sendTroops.btn_fullSkip.toolTipText = {
        t: "dialog_season_skipTransfer",
        p: [__dep_export_CastleModel.CastleModel.costsData.getFinalCostsStringC2(this.treasureMapVO.skipCostC2)]
      };
      this.subLayerDisp.info_sendResources.btn_minuteSkip.toolTipText = "timeSkipButton_tooltip";
      this.subLayerDisp.info_sendTroops.btn_minuteSkip.toolTipText = "timeSkipButton_tooltip";
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_sendTroops, true);
      this.refreshTransfers();
      __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateTransfer));
      __dep_export_CastleModel.CastleModel.treasureMapData.addEventListener(__dep_export_CastleTreasureMapEvent.CastleTreasureMapEvent.UNIT_TRANSFER_DATA_UPDATED, this.bindFunction(this.onUnitTransferDataUpdated));
      __dep_export_CastleModel.CastleModel.treasureMapData.addEventListener(__dep_export_CastleTreasureMapEvent.CastleTreasureMapEvent.UNIT_TRANSFER_WERE_SEND, this.bindFunction(this.onUnitTransferWereSend));
      __dep_export_CastleModel.CastleModel.treasureMapData.addEventListener(__dep_export_CastleTreasureMapEvent.CastleTreasureMapEvent.RESOURCE_TRANSFER_DATA_UPDATED, this.bindFunction(this.onResourceTransferDataUpdated));
      __dep_export_CastleModel.CastleModel.treasureMapData.addEventListener(__dep_export_CastleTreasureMapEvent.CastleTreasureMapEvent.RESOURCE_TRANSFER_WERE_SEND, this.bindFunction(this.onResourceTransferWereSend));
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_enterWorld, !this.layoutManager.isInEventState);
    } else {
      this.hide();
    }
  };
  CastleStartSeasonEventDialogSupport.prototype.onUpdateTransfer = function (__s12param0) {
    this.refreshTransfers();
  };
  CastleStartSeasonEventDialogSupport.prototype.hide = function () {
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateTransfer));
    __dep_export_CastleModel.CastleModel.treasureMapData.removeEventListener(__dep_export_CastleTreasureMapEvent.CastleTreasureMapEvent.UNIT_TRANSFER_DATA_UPDATED, this.bindFunction(this.onUnitTransferDataUpdated));
    __dep_export_CastleModel.CastleModel.treasureMapData.removeEventListener(__dep_export_CastleTreasureMapEvent.CastleTreasureMapEvent.UNIT_TRANSFER_WERE_SEND, this.bindFunction(this.onUnitTransferWereSend));
    __dep_export_CastleModel.CastleModel.treasureMapData.removeEventListener(__dep_export_CastleTreasureMapEvent.CastleTreasureMapEvent.RESOURCE_TRANSFER_DATA_UPDATED, this.bindFunction(this.onResourceTransferDataUpdated));
    __dep_export_CastleModel.CastleModel.treasureMapData.removeEventListener(__dep_export_CastleTreasureMapEvent.CastleTreasureMapEvent.RESOURCE_TRANSFER_WERE_SEND, this.bindFunction(this.onResourceTransferWereSend));
    __s1param0.prototype.hide.call(this);
  };
  CastleStartSeasonEventDialogSupport.prototype.onUnitTransferDataUpdated = function (__s16param0) {
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_sendTroops, true);
    this.refreshTransfers();
  };
  CastleStartSeasonEventDialogSupport.prototype.onUnitTransferWereSend = function (__s18param0) {
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_sendTroops, false);
  };
  CastleStartSeasonEventDialogSupport.prototype.onResourceTransferDataUpdated = function (__s20param0) {
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_sendResources, true);
    this.refreshTransfers();
  };
  CastleStartSeasonEventDialogSupport.prototype.onResourceTransferWereSend = function (__s22param0) {
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_sendResources, false);
  };
  CastleStartSeasonEventDialogSupport.prototype.refreshTransfers = function () {
    if (this.treasureMapVO) {
      this.subLayerDisp.info_sendTroops.visible = this.treasureMapVO.isTroopsTransferActive;
      this.subLayerDisp.info_sendResources.visible = this.treasureMapVO.isGoodsTransferActive;
      this.subLayerDisp.btn_sendTroops.visible = !this.treasureMapVO.isTroopsTransferActive;
      this.subLayerDisp.btn_sendResources.visible = !this.treasureMapVO.isGoodsTransferActive;
      this.subLayerDisp.info_sendResources.mc_icon.toolTipText = this.toolTipTextGoodsTransfer;
      this.subLayerDisp.info_sendTroops.mc_icon.toolTipText = this.toolTipTextUnitTransfer;
      this.refreshGoodsTransfer();
      this.refreshToopsTransfer();
    }
  };
  Object.defineProperty(CastleStartSeasonEventDialogSupport.prototype, "toolTipTextGoodsTransfer", {
    get: function () {
      if (this.treasureMapVO && this.treasureMapVO.isGoodsTransferActive) {
        return this.treasureMapVO.goods.getShortTooltip();
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStartSeasonEventDialogSupport.prototype, "toolTipTextUnitTransfer", {
    get: function () {
      if (!this.treasureMapVO || !this.treasureMapVO.isTroopsTransferActive) {
        return null;
      }
      var __s31local0 = "";
      for (var __s31local1 = 0, __s31local2 = this.treasureMapVO.troops.getUnits(null); __s31local1 < __s31local2.length; __s31local1++) {
        var __s31local3 = __s31local2[__s31local1];
        __s31local0 += __s31local3.inventoryAmount + "x " + __dep_exact_92d05af59ee2ff30.Localize.text(__s31local3.getNameString()) + "\n";
      }
      return __s31local0;
    },
    enumerable: true,
    configurable: true
  });
  CastleStartSeasonEventDialogSupport.prototype.refreshGoodsTransfer = function () {
    this.subLayerDisp.info_sendResources.mc_bar.scaleX = this.treasureMapVO.goodsTransferProgress;
    this.i_sRess_txt_remainingTime.textContentVO.stringValue = __dep_exact_9e901e8e2483a22f_1.TimeStringHelper.getShortTimeStringBySeconds(this.treasureMapVO.remainingGoodsTransferTimeInSeconds, __dep_exact_9e901e8e2483a22f_1.TimeStringHelper.TWO_TIME_FORMAT);
  };
  CastleStartSeasonEventDialogSupport.prototype.refreshToopsTransfer = function () {
    this.subLayerDisp.info_sendTroops.mc_bar.scaleX = this.treasureMapVO.troopsTransferProgress;
    this.i_sTroop_txt_remainingTime.textContentVO.stringValue = __dep_exact_9e901e8e2483a22f_1.TimeStringHelper.getShortTimeStringBySeconds(this.treasureMapVO.remainingTroopsTransferTimeInSeconds, __dep_exact_9e901e8e2483a22f_1.TimeStringHelper.TWO_TIME_FORMAT);
  };
  CastleStartSeasonEventDialogSupport.prototype.onMouseUp = function (__s40param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s40param0.target)) {
      switch (__s40param0.target) {
        case this.subLayerDisp.btn_enterWorld:
          if (this.seasonEventVO) {
            this.seasonEventVO.loadTreasureMapAssets(this.bindFunction(this.enterSeasonMap));
          }
          break;
        case this.subLayerDisp.btn_sendTroops:
          __dep_export_CastleDialogSubLayer.CastleDialogSubLayer.dialogHandler.registerDefaultDialogs(__dep_export_CastleTransferTroopsDialog.CastleTransferTroopsDialog, new __dep_export_CastleTransferTroopsToSeasonProperties.CastleTransferTroopsToSeasonProperties());
          break;
        case this.subLayerDisp.btn_sendResources:
          __dep_export_CastleDialogSubLayer.CastleDialogSubLayer.dialogHandler.registerDefaultDialogs(__dep_export_CastleTransferResourcesDialog.CastleTransferResourcesDialog, new __dep_export_CastleTransferResToSeasonProperties.CastleTransferResToSeasonProperties());
          break;
        case this.subLayerDisp.info_sendResources.btn_fullSkip:
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2STreasuremapSkipTransferVO.C2STreasuremapSkipTransferVO(this.seasonEventVO.eventId, this.treasureMapVO.mapID, 2));
          this.subLayerDisp.info_sendResources.btn_fullSkip.enabled = false;
          break;
        case this.subLayerDisp.info_sendTroops.btn_fullSkip:
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2STreasuremapSkipTransferVO.C2STreasuremapSkipTransferVO(this.seasonEventVO.eventId, this.treasureMapVO.mapID, 1));
          this.subLayerDisp.info_sendTroops.btn_fullSkip.enabled = false;
          break;
        case this.subLayerDisp.info_sendResources.btn_minuteSkip:
          __dep_export_CastleDialogSubLayer.CastleDialogSubLayer.dialogHandler.registerDefaultDialogs(__dep_export_CastleMinuteSkipDialog.CastleMinuteSkipDialog, new __dep_export_SeasonTravelGoodsMinuteSkipProperties.SeasonTravelGoodsMinuteSkipProperties(this.treasureMapVO, this.seasonEventVO));
          break;
        case this.subLayerDisp.info_sendTroops.btn_minuteSkip:
          __dep_export_CastleDialogSubLayer.CastleDialogSubLayer.dialogHandler.registerDefaultDialogs(__dep_export_CastleMinuteSkipDialog.CastleMinuteSkipDialog, new __dep_export_SeasonTravelUnitsMinuteSkipProperties.SeasonTravelUnitsMinuteSkipProperties(this.treasureMapVO, this.seasonEventVO));
      }
    }
  };
  CastleStartSeasonEventDialogSupport.prototype.enterSeasonMap = function () {
    if (this.layoutManager.currentState == __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_SEASON_WORLDMAP || this.layoutManager.isInTreasureCamp) {
      __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.JOIN_MAIN_CASTLE_COMMAND);
    } else {
      this.layoutManager.state = __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_SEASON_WORLDMAP;
    }
  };
  Object.defineProperty(CastleStartSeasonEventDialogSupport.prototype, "treasureMapVO", {
    get: function () {
      if (this.seasonEventVO) {
        return this.seasonEventVO.treasureMapVO;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStartSeasonEventDialogSupport.prototype, "buttonFrame", {
    get: function () {
      switch (this.seasonEventVO.eventId) {
        case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_CRUSADE_THORNKING:
          return 5;
        case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_CRUSADE_SEAQUEEN:
          return 7;
        case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_CRUSADE_UNDERWORLD:
          return 9;
      }
      return 1;
    },
    enumerable: true,
    configurable: true
  });
  CastleStartSeasonEventDialogSupport.prototype.showHelp = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_" + this.seasonEventVO.eventType + "_start"));
  };
  return CastleStartSeasonEventDialogSupport;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.CastleStartSeasonEventDialogSupport = __s0local0;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleTransferTroopsDialog = require("gge-module:export_CastleTransferTroopsDialog");
var __dep_export_CastleTransferTroopsToSeasonProperties = require("gge-module:export_CastleTransferTroopsToSeasonProperties");
var __dep_export_CastleMinuteSkipDialog = require("gge-module:export_CastleMinuteSkipDialog");
var __dep_export_SeasonTravelGoodsMinuteSkipProperties = require("gge-module:export_SeasonTravelGoodsMinuteSkipProperties");
var __dep_export_SeasonTravelUnitsMinuteSkipProperties = require("gge-module:export_SeasonTravelUnitsMinuteSkipProperties");
var __dep_export_CastleTransferResourcesDialog = require("gge-module:export_CastleTransferResourcesDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
