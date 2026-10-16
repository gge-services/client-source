Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_C2SCollectTaxVO = require("gge-module:export_C2SCollectTaxVO");
var __dep_export_C2SGetTaxInfoVO = require("gge-module:export_C2SGetTaxInfoVO");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_TaxInfoVO = require("gge-module:export_TaxInfoVO");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = function (__s1param0) {
  function CastleCollectTaxDialog(__s3param0 = null) {
    var __s3local0 = this;
    __s3local0.waitForBribeCollect = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, __s3param0 || CastleCollectTaxDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleCollectTaxDialog, __s1param0);
  CastleCollectTaxDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.dialogDisp.txt_income.mouseEnabled = false;
    this.txtIncome ||= this.textFieldManager.registerTextField(this.dialogDisp.txt_income, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
    if (!this.txtCollectTime) {
      this.txtCollectTime = this.textFieldManager.registerTextField(this.dialogDisp.txt_collectTime, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_SIMPLE_COMP, [0]));
      this.dialogDisp.txt_collectTime.defaultCacheScale = 1;
    }
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.dialogDisp.mc_time.toolTipText = "resttime";
    this.dialogDisp.btn_collect.toolTipText = "dialog_collecttaxstatus_get";
    this.dialogDisp.progressBar.toolTipText = "dialog_collecttax_bribetime";
    this.dialogDisp.coinToolTipHitArea.toolTipText = "dialog_collecttaxstatus_collectedCash";
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_collect, this.dialogDisp.btn_bribe, this.dialogDisp.btn_help]);
  };
  CastleCollectTaxDialog.prototype.applyPropertiesLoaded = function (__s8param0 = null) {
    this.onTaxDataUpdated();
    this.waitForBribeCollect = false;
  };
  CastleCollectTaxDialog.prototype.showLoaded = function (__s10param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s10param0);
    this.unLockDialog();
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_bribe, this.isOutOfTutorial());
    __dep_export_CastleModel.CastleModel.boosterSaleData.handleMc(this.dialogDisp.btn_bribe.mc_discount, __dep_exact_26a421b704832cff.BoosterConst.TAX);
    this.dialogDisp.btn_bribe.mc_discount.visible = false;
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetTaxInfoVO.C2SGetTaxInfoVO());
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTaxDataUpdated));
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_collect, true);
  };
  CastleCollectTaxDialog.prototype.hideLoaded = function (__s12param0 = null) {
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTaxDataUpdated));
    __s1param0.prototype.hideLoaded.call(this, __s12param0);
  };
  CastleCollectTaxDialog.prototype.onClick = function (__s14param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s14param0.target)) {
      __s1param0.prototype.onClick.call(this, __s14param0);
      switch (__s14param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_collect:
          this.onCollectTaxClick();
          break;
        case this.dialogDisp.btn_bribe:
          this.showBribe();
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_tax_collect"));
      }
    }
  };
  CastleCollectTaxDialog.prototype.onCollectTaxClick = function () {
    if (this.taxInfoVO.currentIncome <= 0) {
      var __s18local0 = new __dep_exact_9e901e8e2483a22f.BasicStandardYesNoDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_collectedtaxes_canceled_title"), __dep_exact_92d05af59ee2ff30.Localize.text("dialog_collectedtaxes_canceled_copy"), this.bindFunction(this.onCollectTaxConfirmed));
      __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_CastleStandardYesNoDialog.CastleStandardYesNoDialog, __s18local0);
    } else {
      this.onCollectTaxConfirmed();
    }
  };
  CastleCollectTaxDialog.prototype.onCollectTaxConfirmed = function (__s22param0 = null) {
    this.hide();
    this.collectTax();
  };
  CastleCollectTaxDialog.prototype.onTaxDataUpdated = function (__s24param0 = null) {
    this.txtIncome.textContentVO.stringValue = this.taxInfoVO.taxAmountString;
    switch (this.taxInfoVO.taxState) {
      case __dep_export_TaxInfoVO.TaxInfoVO.TAXSTATUS_COLLECTING:
        this.txtCollectTime.textContentVO.textId = __dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_ASSIGN_COLON;
        this.txtCollectTime.textContentVO.textReplacements = [__dep_exact_92d05af59ee2ff30.Localize.text("resttime"), __dep_exact_9e901e8e2483a22f_2.TimeStringHelper.getTimeToString(this.taxInfoVO.remainingCollectionTimeInSeconds, __dep_exact_9e901e8e2483a22f_2.TimeStringHelper.TWO_TIME_FORMAT, __dep_export_CastleModel.CastleModel.languageData.bindFunction(__dep_export_CastleModel.CastleModel.languageData.getTextById))];
        this.dialogDisp.progressBar.gotoAndStop(1);
        break;
      case __dep_export_TaxInfoVO.TaxInfoVO.TAXSTATUS_WAIT_FOR_COLLECT:
        this.txtCollectTime.textContentVO.textId = "collect_taxCollecting_finished";
        this.dialogDisp.progressBar.gotoAndStop(1);
        break;
      case __dep_export_TaxInfoVO.TaxInfoVO.TAXSTATUS_NONE:
        this.hide();
    }
    this.dialogDisp.progressBar.scaleX = this.taxInfoVO.timeInPercent;
    __dep_export_CastleModel.CastleModel.boosterSaleData.handleMc(this.dialogDisp.btn_bribe.mc_discount, __dep_exact_26a421b704832cff.BoosterConst.TAX);
  };
  CastleCollectTaxDialog.prototype.checkWaitingAnimState = function (__s27param0) {
    switch (__s27param0) {
      case __dep_export_ClientConstSF.ClientConstSF.C2S_BRIBE_TAX_COLLECTOR:
        if (this.waitForBribeCollect) {
          this.collectTax();
        }
        this.unLockDialog();
    }
  };
  CastleCollectTaxDialog.prototype.collectTax = function () {
    this.waitForBribeCollect = false;
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SCollectTaxVO.C2SCollectTaxVO());
  };
  CastleCollectTaxDialog.prototype.showBribe = function () {
    __dep_export_CastleModel.CastleModel.boostData.taxBribeVO.clickedBuyButton();
    this.waitForBribeCollect = this.taxInfoVO.isTaxReadyForCollection;
  };
  Object.defineProperty(CastleCollectTaxDialog.prototype, "taxInfoVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.taxData.taxInfoVO;
    },
    enumerable: true,
    configurable: true
  });
  CastleCollectTaxDialog.__initialize_static_members = function () {
    CastleCollectTaxDialog.NAME = "CastleCollectTaxProgress";
  };
  return CastleCollectTaxDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleCollectTaxDialog = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleStandardYesNoDialog = require("gge-module:export_CastleStandardYesNoDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
