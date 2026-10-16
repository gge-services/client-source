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
var __dep_export_C2SKingdomSkipTransferVO = require("gge-module:export_C2SKingdomSkipTransferVO");
var __dep_export_C2SJoinCastleVO = require("gge-module:export_C2SJoinCastleVO");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleKingdomEvent = require("gge-module:export_CastleKingdomEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_export_CastleTransferResToKingdomProperties = require("gge-module:export_CastleTransferResToKingdomProperties");
var __s0local0 = function (__s1param0) {
  function CastleHandleKingdomDialogSupport(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.i_troops_txt_remainingTime = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.info_sendResources.txt_remainingTime, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    __s3local0.i_resources_txt_remainingTime = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.info_sendTroops.txt_remainingTime, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([__s3local0.subLayerDisp.btn_enterWorld, __s3local0.subLayerDisp.btn_sendTroops, __s3local0.subLayerDisp.btn_sendResources, __s3local0.subLayerDisp.info_sendResources.btn_fullSkip, __s3local0.subLayerDisp.info_sendTroops.btn_fullSkip, __s3local0.subLayerDisp.info_sendResources.btn_minuteSkip, __s3local0.subLayerDisp.info_sendTroops.btn_minuteSkip]);
    __s3local0.subLayerDisp.btn_enterWorld.toolTipText = "dialog_season_changeWorlds";
    __s3local0.subLayerDisp.btn_sendTroops.toolTipText = "dialog_season_sendTroops";
    __s3local0.subLayerDisp.info_sendTroops.btn_minuteSkip.toolTipText = "timeSkipButton_tooltip";
    __s3local0.subLayerDisp.info_sendTroops.progressTooltipCover.toolTipText = "resttime";
    __s3local0.subLayerDisp.btn_sendResources.toolTipText = "dialog_season_sendResources";
    __s3local0.subLayerDisp.info_sendResources.btn_minuteSkip.toolTipText = "timeSkipButton_tooltip";
    __s3local0.subLayerDisp.info_sendResources.progressTooltipCover.toolTipText = "resttime";
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleHandleKingdomDialogSupport, __s1param0);
  CastleHandleKingdomDialogSupport.prototype.show = function (__s5param0) {
    __s1param0.prototype.show.call(this, __s5param0);
    this.kingdomVO = __s5param0;
    this.subLayerDisp.info_sendTroops.btn_fullSkip.toolTipText = {
      t: "dialog_season_skipTransfer",
      p: [__dep_export_CastleModel.CastleModel.costsData.getFinalCostsStringC2(this.kingdomVO.skipUnitTravelC2Cost)]
    };
    this.subLayerDisp.info_sendTroops.btn_fullSkip.gotoAndStop(1);
    this.subLayerDisp.info_sendTroops.mc_icon.gotoAndStop(this.buttonframe);
    this.subLayerDisp.info_sendTroops.mc_icon.mouseChildren = false;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.info_sendTroops.btn_fullSkip, true);
    this.subLayerDisp.info_sendResources.btn_fullSkip.toolTipText = {
      t: "dialog_season_skipTransfer",
      p: [__dep_export_CastleModel.CastleModel.costsData.getFinalCostsStringC2(this.kingdomVO.skipResourceTravelC2Cost)]
    };
    this.subLayerDisp.info_sendResources.btn_fullSkip.gotoAndStop(1);
    this.subLayerDisp.info_sendResources.mc_icon.gotoAndStop(this.buttonframe);
    this.subLayerDisp.info_sendResources.mc_icon.mouseChildren = false;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.info_sendResources.btn_fullSkip, true);
    this.subLayerDisp.btn_enterWorld.icon.gotoAndStop(this.buttonframe);
    this.subLayerDisp.btn_sendTroops.gotoAndStop(this.buttonframe);
    this.subLayerDisp.btn_sendResources.gotoAndStop(this.buttonframe);
    this.refreshTransfers();
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateTransfer));
    __dep_export_CastleModel.CastleModel.kingdomData.addEventListener(__dep_export_CastleKingdomEvent.CastleKingdomEvent.KINGDOMDATA_ARRIVED, this.bindFunction(this.onKingdomDataUpdated));
  };
  CastleHandleKingdomDialogSupport.prototype.onKingdomDataUpdated = function (__s7param0) {
    this.refreshTransfers();
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.info_sendTroops.btn_fullSkip, true);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.info_sendResources.btn_fullSkip, true);
  };
  Object.defineProperty(CastleHandleKingdomDialogSupport.prototype, "buttonframe", {
    get: function () {
      if (this.kingdomVO.kID == __dep_exact_26a421b704832cff.WorldIsland.KINGDOM_ID) {
        return 8;
      } else {
        return this.kingdomVO.kID + 1;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleHandleKingdomDialogSupport.prototype.onUpdateTransfer = function (__s13param0) {
    this.refreshTransfers();
  };
  CastleHandleKingdomDialogSupport.prototype.hide = function () {
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateTransfer));
    __dep_export_CastleModel.CastleModel.kingdomData.removeEventListener(__dep_export_CastleKingdomEvent.CastleKingdomEvent.KINGDOMDATA_ARRIVED, this.bindFunction(this.onKingdomDataUpdated));
    __s1param0.prototype.hide.call(this);
  };
  CastleHandleKingdomDialogSupport.prototype.refreshTransfers = function () {
    this._kingdomGoodsTransfer = __dep_export_CastleModel.CastleModel.kingdomData.getIncomingGoodsTransferByKingdomID(this.kingdomVO.kID);
    this._kingdomUnitTransfer = __dep_export_CastleModel.CastleModel.kingdomData.getIncomingUnitsTransferByKingdomID(this.kingdomVO.kID);
    var __s17local0 = !!this._kingdomUnitTransfer && this._kingdomUnitTransfer.remainingTimeInSeconds > 0;
    var __s17local1 = !!this._kingdomGoodsTransfer && this._kingdomGoodsTransfer.remainingTimeInSeconds > 0;
    var __s17local2 = this.sendButtonsAreEnabled();
    this.subLayerDisp.btn_sendTroops.visible = !__s17local0;
    this.subLayerDisp.btn_sendTroops.toolTipText = __s17local2 ? "dialog_season_sendTroops" : "dialog_season_sendTroops_notAvailable";
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_sendTroops, __s17local2);
    this.subLayerDisp.btn_sendResources.visible = !__s17local1;
    this.subLayerDisp.btn_sendResources.toolTipText = __s17local2 ? "dialog_season_sendResources" : "dialog_season_sendResources_notAvailable";
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_sendResources, __s17local2);
    this.subLayerDisp.info_sendTroops.visible = __s17local0;
    this.subLayerDisp.info_sendTroops.mc_icon.toolTipText = this._kingdomUnitTransfer ? this._kingdomUnitTransfer.toolTipText : null;
    this.subLayerDisp.info_sendResources.visible = __s17local1;
    this.subLayerDisp.info_sendResources.mc_icon.toolTipText = this._kingdomGoodsTransfer ? this._kingdomGoodsTransfer.toolTipText : null;
    this.refreshGoodsTransfer();
    this.refreshToopsTransfer();
  };
  CastleHandleKingdomDialogSupport.prototype.sendButtonsAreEnabled = function () {
    return __dep_export_CastleModel.CastleModel.kingdomData.numUnlockedKingdoms > 1 && __dep_export_CastleModel.CastleModel.userData.castleList.getMainCastlesInKingdoms([this.kingdomVO.kID]).length > 0 && !!__dep_export_CastleModel.CastleModel.userData.castleList.getMainCastleByKingdomID(this.kingdomVO.kID);
  };
  CastleHandleKingdomDialogSupport.prototype.refreshGoodsTransfer = function () {
    if (this._kingdomGoodsTransfer) {
      this.subLayerDisp.info_sendResources.mc_bar.scaleX = this._kingdomGoodsTransfer.progressPercent;
      this.i_troops_txt_remainingTime.textContentVO.stringValue = __dep_exact_9e901e8e2483a22f_1.TimeStringHelper.getShortTimeStringBySeconds(this._kingdomGoodsTransfer.remainingTimeInSeconds, __dep_exact_9e901e8e2483a22f_1.TimeStringHelper.TWO_TIME_FORMAT);
    }
  };
  CastleHandleKingdomDialogSupport.prototype.refreshToopsTransfer = function () {
    if (this._kingdomUnitTransfer) {
      this.subLayerDisp.info_sendTroops.mc_bar.scaleX = this._kingdomUnitTransfer.progressPercent;
      this.i_resources_txt_remainingTime.textContentVO.stringValue = __dep_exact_9e901e8e2483a22f_1.TimeStringHelper.getShortTimeStringBySeconds(this._kingdomUnitTransfer.remainingTimeInSeconds, __dep_exact_9e901e8e2483a22f_1.TimeStringHelper.TWO_TIME_FORMAT);
    }
  };
  CastleHandleKingdomDialogSupport.prototype.onClick = function (__s27param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s27param0.target)) {
      switch (__s27param0.target) {
        case this.subLayerDisp.btn_enterWorld:
          var __s27local0 = __dep_export_CastleModel.CastleModel.userData.castleList.getMainCastleByKingdomID(this.kingdomVO.kID);
          if (__s27local0 && __dep_export_FlashBlockHelper.FlashBlockHelper.checkFlashBlock(__s27local0.spaceID)) {
            return;
          }
          if (__s27local0) {
            __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.JOIN_AREA_AND_SAVE_POSITION_COMMAND, __s27local0);
          } else {
            if (__dep_export_CastleModel.CastleModel.worldmapData) {
              __dep_export_CastleModel.CastleModel.worldmapData.allowGAARequests = false;
            }
            __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SJoinCastleVO.C2SJoinCastleVO(0, this.kingdomVO.kID));
          }
          break;
        case this.subLayerDisp.btn_sendTroops:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleTransferTroopsDialog.CastleTransferTroopsDialog, new __dep_export_CastleTransferTroopsToKingdomProperties.CastleTransferTroopsToKingdomProperties(this.kingdomVO));
          break;
        case this.subLayerDisp.btn_sendResources:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleTransferResourcesDialog.CastleTransferResourcesDialog, new __dep_export_CastleTransferResToKingdomProperties.CastleTransferResToKingdomProperties(this.kingdomVO));
          break;
        case this.subLayerDisp.info_sendResources.btn_fullSkip:
          if (this._kingdomGoodsTransfer.remainingTimeInSeconds >= 1) {
            __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.info_sendResources.btn_fullSkip, false);
            __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SKingdomSkipTransferVO.C2SKingdomSkipTransferVO(this._kingdomGoodsTransfer.targetKingdomID, 2));
          }
          break;
        case this.subLayerDisp.info_sendTroops.btn_fullSkip:
          if (this._kingdomUnitTransfer.remainingTimeInSeconds >= 1) {
            __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.info_sendTroops.btn_fullSkip, false);
            __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SKingdomSkipTransferVO.C2SKingdomSkipTransferVO(this._kingdomUnitTransfer.targetKingdomID, 1));
          }
          break;
        case this.subLayerDisp.info_sendResources.btn_minuteSkip:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleMinuteSkipDialog.CastleMinuteSkipDialog, new __dep_export_KingdomGoodsTravelMinuteSkipProperties.KingdomGoodsTravelMinuteSkipProperties(this.kingdomVO.kID));
          break;
        case this.subLayerDisp.info_sendTroops.btn_minuteSkip:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleMinuteSkipDialog.CastleMinuteSkipDialog, new __dep_export_KingdomUnitsTravelMinuteSkipProperties.KingdomUnitsTravelMinuteSkipProperties(this.kingdomVO.kID));
      }
    }
  };
  CastleHandleKingdomDialogSupport.prototype.showHelp = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_" + this.kingdomVO.kingdomName + "_start"));
  };
  return CastleHandleKingdomDialogSupport;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.CastleHandleKingdomDialogSupport = __s0local0;
var __dep_export_FlashBlockHelper = require("gge-module:export_FlashBlockHelper");
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleMinuteSkipDialog = require("gge-module:export_CastleMinuteSkipDialog");
var __dep_export_KingdomGoodsTravelMinuteSkipProperties = require("gge-module:export_KingdomGoodsTravelMinuteSkipProperties");
var __dep_export_KingdomUnitsTravelMinuteSkipProperties = require("gge-module:export_KingdomUnitsTravelMinuteSkipProperties");
var __dep_export_CastleTransferResourcesDialog = require("gge-module:export_CastleTransferResourcesDialog");
var __dep_export_CastleTransferTroopsDialog = require("gge-module:export_CastleTransferTroopsDialog");
var __dep_export_CastleTransferTroopsToKingdomProperties = require("gge-module:export_CastleTransferTroopsToKingdomProperties");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
