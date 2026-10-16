Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __s0local0 = function (__s1param0) {
  function CastleVIPMessageDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleVIPMessageDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleVIPMessageDialog, __s1param0);
  CastleVIPMessageDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.dialogDisp.mc_addVIPTime.btn_addVIPTime.txt_label.defaultCacheScale = __dep_export_CastleLayoutManager.CastleLayoutManager.UI_SCALE_FACTOR;
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.mc_addVIPTime.btn_addVIPTime]);
    this.setTexts();
  };
  CastleVIPMessageDialog.prototype.setTexts = function () {
    this.itxt_title = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_VipBonus_message_header_v2"));
    this.itxt_title.verticalAlign = __dep_exact_9e901e8e2483a22f.GGSVerticalAlign.MIDDLE;
    this.itxt_level = this.textFieldManager.registerTextField(this.dialogDisp.txt_level, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_VipScreen_vipLevel_v2"));
    this.itxt_time = this.textFieldManager.registerTextField(this.dialogDisp.mc_runtime.txt_value, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    this.itxt_bonusList = this.textFieldManager.registerTextField(this.dialogDisp.txt_bonusList, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_addVIPTime.btn_addVIPTime.txt_label, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_VipScreen_showVIP_tooltip")).verticalAlign = __dep_exact_9e901e8e2483a22f.GGSVerticalAlign.MIDDLE;
    this.dialogDisp.setChildIndex(this.dialogDisp.mc_addVIPTime, this.dialogDisp.numChildren - 1);
  };
  CastleVIPMessageDialog.prototype.applyPropertiesLoaded = function (__s9param0 = null) {
    __s1param0.prototype.applyPropertiesLoaded.call(this, __s9param0);
    if (this.vipLevelToDisplay == CastleVIPMessageDialog.MAX_VIP_LEVEL) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_VipBonus_message_topLevel_copy", [this.vipLevelToDisplay]));
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_VipBonus_message_copy_v2", [this.vipLevelToDisplay]));
    }
    this.textFieldManager.registerTextField(this.dialogDisp.mc_runtime.txt_runtime, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_export_ClientConstTextIds.ClientConstTextIds.RESTTIME)).verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.itxt_title.textContentVO.textReplacements = [this.vipLevelToDisplay];
    this.itxt_level.textContentVO.textReplacements = [this.vipLevelToDisplay];
    this.itxt_bonusList.textContentVO.stringValue = __dep_export_CastleVIPLevelInfoTextComposer.CastleVIPLevelInfoTextComposer.generateBonusText(__dep_export_CastleModel.CastleModel.vipData.getVIPLevelInfoVOByLevel(this.vipLevelToDisplay));
    this.onTimerUpdate(null);
    this.adjustHeightToBonusListLength();
  };
  CastleVIPMessageDialog.prototype.adjustHeightToBonusListLength = function () {
    var __s13local0 = (CastleVIPMessageDialog.DEFAULT_BONUS_BG_HEIGHT_BEFORE_TEXT_FIELD + this.itxt_bonusList.textHeight + CastleVIPMessageDialog.DEFAULT_BONUS_BG_HEIGHT_AFTER_TEXT_FIELD) / CastleVIPMessageDialog.DEFAULT_TOTAL_BONUS_BG_HEIGHT;
    this.dialogDisp.mc_bonus_bg.scaleY = Math.max(__s13local0, CastleVIPMessageDialog.BONUS_BG_HEIGHT_MIN_SCALE);
    this.dialogDisp.mc_dialog_bg.height = this.dialogDisp.mc_bonus_bg.y + this.dialogDisp.mc_bonus_bg.height + CastleVIPMessageDialog.DIALOG_BG_Y_OFFSET;
    this.dialogDisp.mc_addVIPTime.y = this.dialogDisp.mc_bonus_bg.y + this.dialogDisp.mc_bonus_bg.height + CastleVIPMessageDialog.ADD_TIME_BTN_Y_OFFSET_REGARDING_BONUS_BG;
  };
  CastleVIPMessageDialog.prototype.addEventListenerOnShow = function () {
    __s1param0.prototype.addEventListenerOnShow.call(this);
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  CastleVIPMessageDialog.prototype.removeEventListenerOnHide = function () {
    __s1param0.prototype.removeEventListenerOnHide.call(this);
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  CastleVIPMessageDialog.prototype.onClick = function (__s19param0) {
    __s1param0.prototype.onClick.call(this, __s19param0);
    switch (__s19param0.target) {
      case this.dialogDisp.mc_addVIPTime.btn_addVIPTime:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastlePremiumMarketPlaceDialog.CastlePremiumMarketPlaceDialog);
        break;
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  CastleVIPMessageDialog.prototype.onTimerUpdate = function (__s22param0) {
    this.itxt_time.textContentVO.stringValue = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(__dep_export_CastleModel.CastleModel.vipData.remainingVIPTimeInSeconds);
  };
  Object.defineProperty(CastleVIPMessageDialog.prototype, "vipLevelToDisplay", {
    get: function () {
      return this.dialogProperties.vipLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleVIPMessageDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleVIPMessageDialog.__initialize_static_members = function () {
    CastleVIPMessageDialog.NAME = "CastleVIPMessage";
    CastleVIPMessageDialog.DEFAULT_BONUS_BG_HEIGHT_BEFORE_TEXT_FIELD = 26.95;
    CastleVIPMessageDialog.DEFAULT_BONUS_BG_HEIGHT_AFTER_TEXT_FIELD = 40;
    CastleVIPMessageDialog.BONUS_BG_HEIGHT_MIN_SCALE = 0.95;
    CastleVIPMessageDialog.DEFAULT_TOTAL_BONUS_BG_HEIGHT = 200.6;
    CastleVIPMessageDialog.DIALOG_BG_Y_OFFSET = 20;
    CastleVIPMessageDialog.MAX_VIP_LEVEL = 10;
  };
  CastleVIPMessageDialog.ADD_TIME_BTN_Y_OFFSET_REGARDING_BONUS_BG = -8.9;
  return CastleVIPMessageDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleVIPMessageDialog = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleVIPLevelInfoTextComposer = require("gge-module:export_CastleVIPLevelInfoTextComposer");
var __dep_export_CastlePremiumMarketPlaceDialog = require("gge-module:export_CastlePremiumMarketPlaceDialog");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
