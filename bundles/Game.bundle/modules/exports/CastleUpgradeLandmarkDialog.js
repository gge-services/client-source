Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_1 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_C2SMarketInfoVO = require("gge-module:export_C2SMarketInfoVO");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleTradeDataEvent = require("gge-module:export_CastleTradeDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_BitmapFilterHelper = require("gge-module:export_BitmapFilterHelper");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleSendGoodsDialogProperties = require("gge-module:export_CastleSendGoodsDialogProperties");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleUpgradeLandmarkDialog() {
    var __s3local0 = this;
    __s3local0._initialProgressArrived = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleUpgradeLandmarkDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleUpgradeLandmarkDialog, __s1param0);
  CastleUpgradeLandmarkDialog.prototype.applyPropertiesLoaded = function (__s5param0 = null) {
    __dep_export_CastleModel.CastleModel.tradeData.addEventListener(__dep_export_CastleTradeDataEvent.CastleTradeDataEvent.GET_MARKET_INFOS, this.bindFunction(this.onGetMarketInfos));
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimeUpdated));
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_castleHolder);
    this.dialogDisp.mc_castleHolder.addChild(__dep_export_WorldmapObjectIconHelper.WorldmapObjectIconHelper.drawMapObjectIcon(this.dialogProperties.worldMapObjectVO, new __s0local0(90, 80), true, false, this.isOutOfTutorial(), "panel_action_jumpTo"));
    __dep_export_CrestHelper.CrestHelper.setCrestGraphics(this.dialogDisp.mc_crestHolder, this.dialogProperties.worldMapObjectVO.ownerInfo.crest, null, true);
    this.initBasicButtons(null);
    this.controller.addEventListener(this.dialogProperties.resetEventType, this.bindFunction(this.onLandmarkReset));
    this.dialogProperties.worldMapObjectVO.addEventListener(this.dialogProperties.updateEventType, this.bindFunction(this.onLandmarkUpdated));
    this.controller.addEventListener(this.dialogProperties.progressEventType, this.bindFunction(this.onGetProgress));
    this.bonusComponent = new this.dialogProperties.bonusComponentClass();
    this.bonusComponent.init(this.dialogDisp.mc_bonusDisplay, this.dialogProperties.worldMapObjectVO);
    this.dialogDisp.mc_bar.mc_scale.scaleX = 0;
    this._initialProgressArrived = false;
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(this.dialogProperties.progressCommandVO);
  };
  CastleUpgradeLandmarkDialog.prototype.onLandmarkUpdated = function (__s7param0) {
    if (!__s7param0.target.canBeUpgradedByMe()) {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.getButtonByDisplayObjectInstance(this.dialogDisp.btn_donate), false);
      this.dialogDisp.btn_donate.toolTipText = this.dialogProperties.textErrorLostLandmark;
    }
  };
  CastleUpgradeLandmarkDialog.prototype.onTimeUpdated = function (__s10param0) {
    if (this.txt_time) {
      this.txt_time.textContentVO.stringValue = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(this.dialogProperties.worldMapObjectVO.dataModel.remainingResetTime);
    }
  };
  CastleUpgradeLandmarkDialog.prototype.onGetMarketInfos = function (__s13param0) {
    if (__s13param0.openDialog) {
      __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_CastleSendGoodsDialog.CastleSendGoodsDialog, new __dep_export_CastleSendGoodsDialogProperties.CastleSendGoodsDialogProperties(this.dialogProperties.worldMapObjectVO, __s13param0.tradeInfoVO));
    }
  };
  CastleUpgradeLandmarkDialog.prototype.onLandmarkReset = function (__s16param0) {
    this.hide();
  };
  CastleUpgradeLandmarkDialog.prototype.onGetProgress = function (__s18param0) {
    if (__s18param0.objectID == this.dialogProperties.worldMapObjectVO.objectId) {
      this.dialogProperties.worldMapObjectVO.updateProgress(__s18param0.objectID, __s18param0.donatedAmount);
      this.setCopyTexts();
      this.setToolTips();
      this.setProgressBar(__s18param0.donatedAmount);
      this.bonusComponent.update();
    }
  };
  CastleUpgradeLandmarkDialog.prototype.setCopyTexts = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.dialogProperties.textTitle));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_name, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("level_monument"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_level, new __dep_exact_92d05af59ee2ff30_2.NumberVO(this.dialogProperties.worldMapObjectVO.level));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_time.txt_time, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(this.dialogProperties.worldMapObjectVO.dataModel.remainingResetTime)));
    this.textFieldManager.registerTextField(this.dialogDisp.castleName_txt, new __dep_exact_92d05af59ee2ff30_3.TextVO(this.dialogProperties.worldMapObjectVO.areaNameString));
    this.txt_time = this.textFieldManager.registerTextField(this.dialogDisp.mc_time.txt_time, new __dep_exact_92d05af59ee2ff30_3.TextVO(__dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(this.dialogProperties.worldMapObjectVO.dataModel.remainingResetTime)));
    if (this.dialogProperties.worldMapObjectVO.hasReachedMaxLevel) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.dialogProperties.textUpgradeMax));
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy2, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.dialogProperties.textSendMax));
      this.txt_bar = this.textFieldManager.registerTextField(this.dialogDisp.mc_bar.txt_bar, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_alliance_maxUpgradeLevel"));
      this.txt_bar.autoFitToBounds = true;
      this.txt_bar.textContentVO.textReplacements = "value_proportional_value";
      this.saturateResSymbol(false);
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_donate, false);
      this.dialogDisp.btn_donate.toolTipText = this.dialogProperties.textSendMaxTooltip;
      this.dialogDisp.mc_res.toolTipText = null;
    } else {
      this.saturateResSymbol(true);
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.dialogProperties.textUpgrade));
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy2, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.dialogProperties.textSend));
      this.txt_bar = this.textFieldManager.registerTextField(this.dialogDisp.mc_bar.txt_bar, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("value_proportional_value", [0, this.dialogProperties.worldMapObjectVO.pointsRequiredForNextLevel]));
      this.txt_bar.autoFitToBounds = true;
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_donate, true);
      this.dialogDisp.btn_donate.toolTipText = this.dialogProperties.textSendTooltip;
      this.dialogDisp.mc_res.enabled = true;
      this.dialogDisp.mc_res.toolTipText = this.dialogProperties.textSendWoodStoneTooltip;
    }
  };
  CastleUpgradeLandmarkDialog.prototype.setToolTips = function () {
    this.dialogDisp.mc_time.toolTipText = "resttime";
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.dialogDisp.mc_bar.mouseChildren = false;
    this.dialogDisp.btn_donate.mouseChildren = false;
    this.dialogDisp.mc_time.mouseChildren = false;
  };
  CastleUpgradeLandmarkDialog.prototype.saturateResSymbol = function (__s27param0) {
    if (__s27param0) {
      this.dialogDisp.mc_res.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.NO_FILTER);
    } else {
      this.dialogDisp.mc_res.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.FILTER_DESATURATED_BUTTON_COLOR_MATRIX);
    }
  };
  CastleUpgradeLandmarkDialog.prototype.setProgressBar = function (__s31param0 = 0) {
    if (this.dialogProperties.worldMapObjectVO.hasReachedMaxLevel) {
      this.dialogDisp.mc_bar.mc_scale.scaleX = 1;
      this.dialogDisp.mc_bar.toolTipText = this.dialogProperties.textProgressTooltipMax;
    } else {
      var __s31local0 = __dep_exact_f855840627e6e145.int(__s31param0 - this.dialogProperties.worldMapObjectVO.dataModel.getLevelInfoByPointsAchieved(__s31param0, this.dialogProperties.worldMapObjectVO.kingdomID).requiredPoints);
      var __s31local1 = __dep_exact_f855840627e6e145.int(this.dialogProperties.worldMapObjectVO.pointsRequiredForNextLevel - this.dialogProperties.worldMapObjectVO.dataModel.getLevelInfoByPointsAchieved(__s31param0, this.dialogProperties.worldMapObjectVO.kingdomID).requiredPoints);
      var __s31local2 = Math.min(__s31local0 / Math.max(__s31local1, 1), 1);
      if (__s31local2 > 0) {
        if (this._initialProgressArrived) {
          __dep_exact_608de47b6498f9b0_1.TweenMax.fromTo(this.dialogDisp.mc_bar.mc_scale, 0.2, {
            scaleX: this.dialogDisp.mc_bar.mc_scale
          }, {
            scaleX: __s31local2,
            ease: __dep_exact_608de47b6498f9b0.Linear.easeIn
          });
        } else {
          this.dialogDisp.mc_bar.mc_scale.scaleX = __s31local2;
        }
      } else {
        this.dialogDisp.mc_bar.mc_scale.scaleX = 0;
      }
      this.txt_bar.textContentVO.textReplacements = [__s31local0, __s31local1];
      this.dialogDisp.mc_bar.toolTipText = {
        t: this.dialogProperties.textProgressTooltip,
        p: [this.dialogProperties.worldMapObjectVO.pointsRequiredForNextLevel - __s31param0, this.dialogProperties.worldMapObjectVO.level + 1]
      };
    }
    this._initialProgressArrived = true;
  };
  CastleUpgradeLandmarkDialog.prototype.initBasicButtons = function (__s39param0) {
    __s1param0.prototype.initBasicButtons.call(this, [this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_donate]);
  };
  CastleUpgradeLandmarkDialog.prototype.onClick = function (__s41param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s41param0.target)) {
      switch (__s41param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30_1.Localize.text(this.dialogProperties.textHelp));
          break;
        case this.dialogDisp.btn_donate:
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SMarketInfoVO.C2SMarketInfoVO());
      }
    }
  };
  CastleUpgradeLandmarkDialog.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    __dep_export_CastleModel.CastleModel.tradeData.removeEventListener(__dep_export_CastleTradeDataEvent.CastleTradeDataEvent.GET_MARKET_INFOS, this.bindFunction(this.onGetMarketInfos));
    this.controller.removeEventListener(this.dialogProperties.resetEventType, this.bindFunction(this.onLandmarkReset));
    this.controller.removeEventListener(this.dialogProperties.progressEventType, this.bindFunction(this.onGetProgress));
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimeUpdated));
    this.dialogProperties.worldMapObjectVO.removeEventListener(this.dialogProperties.updateEventType, this.bindFunction(this.onLandmarkUpdated));
  };
  Object.defineProperty(CastleUpgradeLandmarkDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleUpgradeLandmarkDialog.NAME = "CastleUpgradeLandmark";
  return CastleUpgradeLandmarkDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleUpgradeLandmarkDialog = __s0local1;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CrestHelper = require("gge-module:export_CrestHelper");
var __dep_export_WorldmapObjectIconHelper = require("gge-module:export_WorldmapObjectIconHelper");
var __dep_export_CastleSendGoodsDialog = require("gge-module:export_CastleSendGoodsDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
