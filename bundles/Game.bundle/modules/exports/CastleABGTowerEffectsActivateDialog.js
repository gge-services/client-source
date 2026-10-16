Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_C2SActivateAllianceTowerBuffVO = require("gge-module:export_C2SActivateAllianceTowerBuffVO");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleNoMoneyC2DialogProperties = require("gge-module:export_CastleNoMoneyC2DialogProperties");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleABGTowerEffectsActivateDialog() {
    return __s1param0.call(this, CastleABGTowerEffectsActivateDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleABGTowerEffectsActivateDialog, __s1param0);
  CastleABGTowerEffectsActivateDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_beyondTheHorizon_AllianceTower_buffActivation_header")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_beyondTheHorizon_AllianceTower_buffActivation_copy"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_costTxt, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("cost"));
    this.itxt_cost = this.textFieldManager.registerTextField(this.dialogDisp.txt_cost, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(0));
    this.itxt_discount = this.textFieldManager.registerTextField(this.dialogDisp.mc_discount.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT, [0]));
    this.itxt_time = this.textFieldManager.registerTextField(this.dialogDisp.mc_timer.txt_time, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    this.dialogDisp.mc_timer.mouseChildren = false;
    this.dialogDisp.mc_timer.toolTipText = "dialog_remainingTime_AllianceTower_playerRevive_tooltip";
    this.dialogDisp.mc_discount.mouseChildren = false;
    this.dialogDisp.mc_discount.visible = false;
    this.dialogDisp.mc_c2.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.C2;
    this.effectTooltipTrigger = new __dep_export_LordEffectTooltipTrigger.LordEffectTooltipTrigger(this.dialogDisp.mc_effects);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_cancel, this.dialogDisp.btn_ok], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
  };
  CastleABGTowerEffectsActivateDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_name, new __dep_exact_92d05af59ee2ff30.TextVO(this.dialogProperties.allianceTowerMapObjectVO.areaNameString));
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_tower);
    this.dialogDisp.mc_tower.addChild(__dep_export_WorldmapObjectIconHelper.WorldmapObjectIconHelper.drawMapObjectIcon(this.dialogProperties.allianceTowerMapObjectVO, new __s0local0(166, 258), true, false, false, "", null, true));
    var __s7local0 = new __dep_export_LordVO.LordVO();
    __s7local0.parseAllianceTowerBuffInfo(this.dialogProperties.currentAllianceTowerBuffInfoVO, false);
    this.effectTooltipTrigger.setProperties(__s7local0, this.dialogProperties.allianceTowerMapObjectVO);
    this.effectTooltipTrigger.show();
    this.onTimer();
  };
  CastleABGTowerEffectsActivateDialog.prototype.addEventListenerOnShow = function () {
    __s1param0.prototype.addEventListenerOnShow.call(this);
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
  };
  CastleABGTowerEffectsActivateDialog.prototype.removeEventListenerOnHide = function () {
    __s1param0.prototype.removeEventListenerOnHide.call(this);
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
    this.effectTooltipTrigger.hide();
  };
  CastleABGTowerEffectsActivateDialog.prototype.onTimer = function (__s13param0 = null) {
    this.itxt_time.textContentVO.stringValue = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getShortTimeString(__dep_export_CastleModel.CastleModel.allianceBattlegroundData.remainingSecondsTillRevive);
    this.itxt_cost.textContentVO.numberValue = __dep_export_CastleModel.CastleModel.allianceBattlegroundData.getAllianceTowerEffectActivationCost();
  };
  CastleABGTowerEffectsActivateDialog.prototype.onClick = function (__s15param0) {
    __s1param0.prototype.onClick.call(this, __s15param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s15param0.target)) {
      switch (__s15param0.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancel:
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          var __s15local0 = __dep_exact_f855840627e6e145.int(this.itxt_cost.textContentVO.numberValue);
          if (__dep_export_CastleModel.CastleModel.currencyData.c2Amount >= __s15local0) {
            __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SActivateAllianceTowerBuffVO.C2SActivateAllianceTowerBuffVO(this.dialogProperties.allianceTowerMapObjectVO.absAreaPos));
            this.hide();
          } else {
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleNoMoneyC2Dialog.CastleNoMoneyC2Dialog, new __dep_export_CastleNoMoneyC2DialogProperties.CastleNoMoneyC2DialogProperties());
          }
      }
    }
  };
  Object.defineProperty(CastleABGTowerEffectsActivateDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleABGTowerEffectsActivateDialog.NAME = "CastleABGTowerEffectsActivate";
  return CastleABGTowerEffectsActivateDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleABGTowerEffectsActivateDialog = __s0local1;
var __dep_export_LordVO = require("gge-module:export_LordVO");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_LordEffectTooltipTrigger = require("gge-module:export_LordEffectTooltipTrigger");
var __dep_export_WorldmapObjectIconHelper = require("gge-module:export_WorldmapObjectIconHelper");
var __dep_export_CastleNoMoneyC2Dialog = require("gge-module:export_CastleNoMoneyC2Dialog");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
