Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_BitmapFilterHelper = require("gge-module:export_BitmapFilterHelper");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleAllianceDialogTreasuryBoosterItem_OneEffect = require("gge-module:export_CastleAllianceDialogTreasuryBoosterItem_OneEffect");
var __s0local0 = function (__s1param0) {
  function CastleAllianceDialogTreasuryBoosterItemTemp(__s3param0, __s3param1, __s3param2 = null) {
    return __s1param0.call(this, __s3param0, __s3param1, __s3param2 || __dep_export_CastleAllianceDialogTreasuryBoosterItem_OneEffect.CastleAllianceDialogTreasuryBoosterItem_OneEffect.ASSET_CLIP_NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceDialogTreasuryBoosterItemTemp, __s1param0);
  CastleAllianceDialogTreasuryBoosterItemTemp.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
  };
  CastleAllianceDialogTreasuryBoosterItemTemp.prototype.removeEventListener = function () {
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
    __s1param0.prototype.removeEventListener.call(this);
  };
  CastleAllianceDialogTreasuryBoosterItemTemp.prototype.getBoosterAmountText = function () {
    if (__dep_export_AllianceBuffData.AllianceBuffData.CUSTOMIZABLE_BUFFS.indexOf(this.buffVO.seriesID) > -1 && !this.allianceInfoVO.isTemporaryBoosterActive(this.buffVO.seriesID)) {
      var __s9local0 = __dep_exact_92d05af59ee2ff30_1.Localize.text(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PERCENTAGE_ADD, [this.allianceInfoVO.getBoostValue(this.buffVO.seriesID, 1, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_UNKNOWN)]);
      var __s9local1 = __dep_exact_92d05af59ee2ff30_1.Localize.text(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PERCENTAGE, [this.allianceInfoVO.getBoostValue(this.buffVO.seriesID, this.buffVO.maxLevel, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_UNKNOWN)]);
      return new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("value_dash_split_paragraph", [__s9local0, __s9local1]);
    }
    return __s1param0.prototype.getBoosterAmountText.call(this);
  };
  CastleAllianceDialogTreasuryBoosterItemTemp.prototype.update = function () {
    __s1param0.prototype.update.call(this);
    this.updateCountdown();
  };
  CastleAllianceDialogTreasuryBoosterItemTemp.prototype.updateIcon = function () {
    __s1param0.prototype.updateIcon.call(this);
    this.itemMc.mc_icon.filters = this.allianceInfoVO.isTemporaryBoosterActive(this.buffVO.seriesID) ? __dep_export_BitmapFilterHelper.BitmapFilterHelper.NO_FILTER : __dep_export_BitmapFilterHelper.BitmapFilterHelper.FILTER_DESATURATED_BUTTON_COLOR_MATRIX;
  };
  CastleAllianceDialogTreasuryBoosterItemTemp.prototype.updateCountdown = function () {
    var __s16local0 = __dep_exact_f855840627e6e145.int(this.allianceInfoVO.getRemainingBoostDuration(this.buffVO.seriesID));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.itemMc.mc_progress.txt_countdown_name_middle, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("timeLimit_01", [""])).visible = __s16local0 > 0;
    this.itemMc.mc_progress.txt_countdown_name_full.visible = false;
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.itemMc.mc_progress.txt_countdown_middle, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_exact_9e901e8e2483a22f.TimeStringHelper.getHoureMinuteSecondTimeString(__s16local0))).visible = __s16local0 > 0;
    this.itemMc.mc_progress.txt_countdown_full.visible = false;
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.itemMc.mc_progress.txt_empty, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_alliance_effect_notActive")).visible = __s16local0 <= 0;
  };
  CastleAllianceDialogTreasuryBoosterItemTemp.prototype.updateButton = function () {
    var __s18local0;
    var __s18local1 = 2;
    var __s18local2 = true;
    if (__dep_export_CastleModel.CastleModel.allianceData.hasRight(__dep_export_CastleModel.CastleModel.userData.allianceRank, __dep_exact_26a421b704832cff.AllianceConst.RIGHT_UPGRADE)) {
      if (this.allianceInfoVO.canTemporaryBoostBeActivated(this.buffVO.seriesID)) {
        if (this.allianceInfoVO.isTemporaryBoosterActive(this.buffVO.seriesID)) {
          __s18local2 = true;
          __s18local0 = "dialog_alliance_prolongEffect";
          __s18local1 = 3;
        } else {
          __s18local2 = true;
          __s18local0 = "dialog_alliance_activateEffect";
        }
      } else {
        __s18local2 = false;
        var __s18local3 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.allianceBuffData.getRequiredBuffID(this.buffVO.seriesID, this.allianceInfoVO.getBoostLevel(this.buffVO.seriesID) + 1));
        var __s18local4 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.allianceBuffData.getBuffLevelByBuffID(__s18local3));
        var __s18local5 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.allianceBuffData.getBuffSeriesIDByBuffID(__s18local3));
        var __s18local6 = __dep_export_CastleModel.CastleModel.allianceBuffData.getAllianceBuffVoBySeriesIDAndLevel(__s18local5, __s18local4).getBonusVOByEffectType(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_UNKNOWN);
        __s18local0 = {
          t: "dialog_alliance_effectNotAvailable",
          p: [__dep_exact_f855840627e6e145.int(__s18local6 ? __s18local6.strength : 0).toString()]
        };
      }
    } else {
      __s18local2 = false;
      __s18local0 = "dialog_alliance_rankToLow";
    }
    this.itemMc.btn_add.mc_icon.gotoAndStop(__s18local1);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.itemMc.btn_add, __s18local2);
    this.itemMc.btn_add.toolTipText = __s18local0;
  };
  CastleAllianceDialogTreasuryBoosterItemTemp.prototype.updateProgressBar = function () {
    var __s26local0 = __dep_exact_f855840627e6e145.int(this.allianceInfoVO.getRemainingBoostDuration(this.buffVO.seriesID));
    this.itemMc.mc_progress.mc_bar_low.scaleX = 1;
    this.itemMc.mc_progress.mc_bar_full.visible = false;
    this.itemMc.mc_progress.mc_bar_middle.visible = false;
    this.itemMc.mc_progress.mc_bar_low.visible = __s26local0 > 0;
  };
  CastleAllianceDialogTreasuryBoosterItemTemp.prototype.onTimer = function (__s28param0) {
    this.updateCountdown();
    this.updateProgressBar();
    this.updateButton();
  };
  return CastleAllianceDialogTreasuryBoosterItemTemp;
}(__dep_export_CastleAllianceDialogTreasuryBoosterItem_OneEffect.CastleAllianceDialogTreasuryBoosterItem_OneEffect);
exports.CastleAllianceDialogTreasuryBoosterItemTemp = __s0local0;
var __dep_export_AllianceBuffData = require("gge-module:export_AllianceBuffData");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
