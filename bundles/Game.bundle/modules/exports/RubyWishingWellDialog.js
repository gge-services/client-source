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
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_C2SWishingWellCommandVO = require("gge-module:export_C2SWishingWellCommandVO");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleRubyWishingWellData = require("gge-module:export_CastleRubyWishingWellData");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.Shape;
var __s0local1 = function (__s1param0) {
  function RubyWishingWellDialog() {
    var __s3local0 = this;
    __s3local0.timeoutRunning = false;
    __s3local0.buttonCurrentlyEnabled = true;
    __s3local0.currentAction = __dep_exact_26a421b704832cff.WishingWellConst.OPTION_START_RUBY_WISHING_WELL;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, RubyWishingWellDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RubyWishingWellDialog, __s1param0);
  RubyWishingWellDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_huge]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(RubyWishingWellDialog.TITLE)).verticalAlign = __dep_exact_9e901e8e2483a22f.GGSVerticalAlign.MIDDLE;
    this.dialogDisp.btn_help.toolTipText = RubyWishingWellDialog.HELP_TOOLTIP;
    this.currentVO = __dep_export_CastleModel.CastleModel.rubyWishingWellData.getCurrentNode();
    this.rect = new __s0local0();
    this.rect.graphics.beginFill(0);
    this.rect.graphics.drawRect(0, -RubyWishingWellDialog.ARROW_HEIGHT / 2, RubyWishingWellDialog.ARROW_WIDTH, RubyWishingWellDialog.ARROW_HEIGHT);
    this.rect.x = RubyWishingWellDialog.ARROW_OFFSET_X + this.dialogDisp.arrow.filling.x;
    this.rect.setBounds(RubyWishingWellDialog.ARROW_OFFSET_X, RubyWishingWellDialog.ARROW_HEIGHT / 2, RubyWishingWellDialog.ARROW_WIDTH, RubyWishingWellDialog.ARROW_HEIGHT);
    this.dialogDisp.arrow.addChild(this.rect);
    this.dialogDisp.arrow.filling.mask = this.rect;
    this.updateArrow();
  };
  RubyWishingWellDialog.prototype.updateTexts = function () {
    var __s7local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.currencyData.getAmountById(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_WISHING_WELL_COIN));
    var __s7local1 = this.textFieldManager.registerTextField(this.dialogDisp.ownedCoins.txt_currentCoins, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s7local0));
    this.dialogDisp.ownedCoins.toolTipText = RubyWishingWellDialog.TOOLTIP_OWNED_COINS;
    this.dialogDisp.ownedCoins.mouseChildren = false;
    this.dialogDisp.info_hourglass.toolTipText = RubyWishingWellDialog.TOOLTIP_WAITINGTIME;
    this.dialogDisp.info_hourglass.mouseChildren = false;
    this.dialogDisp.manyRubies.toolTipText = RubyWishingWellDialog.TOOLTIP_MANY_RUBIES;
    this.dialogDisp.manyRubies.mouseChildren = false;
    this.dialogDisp.littleRubies.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.C2;
    this.dialogDisp.littleRubies.mouseChildren = false;
    this.dialogDisp.equation.neededCoins.toolTipText = RubyWishingWellDialog.TOOLTIP_OWNED_COINS;
    this.dialogDisp.equation.neededCoins.mouseChildren = false;
    if (this.currentVO) {
      this.textFieldManager.registerTextField(this.dialogDisp.littleRubies.txt_littleRubies, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(this.currentVO.entryCosts));
      this.textFieldManager.registerTextField(this.dialogDisp.manyRubies.txt_manyRubies, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(this.currentVO.entryCosts * __dep_export_CastleRubyWishingWellData.CastleRubyWishingWellData.MULTIPLIER));
      this.textFieldManager.registerTextField(this.dialogDisp.equation.neededCoins.txt_neededCoins, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(this.currentVO.neededWishingWellCoins));
      this.textFieldManager.registerTextField(this.dialogDisp.info_hourglass.txt_hourglass, new __dep_exact_92d05af59ee2ff30_3.TextVO(__dep_exact_9e901e8e2483a22f_1.TimeStringHelper.getHoureMinuteSecondTimeString(this.currentVO.waitingTime)));
      __s7local1.color = __dep_export_CastleModel.CastleModel.currencyData.getAmountById(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_WISHING_WELL_COIN) < this.currentVO.neededWishingWellCoins ? __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR : __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
    }
  };
  RubyWishingWellDialog.prototype.updateArrow = function (__s10param0 = null) {
    var __s10local0;
    var __s10local1 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.rubyWishingWellData.getRemainingSecondsCalculated());
    var __s10local2 = false;
    var __s10local3 = 1;
    this.dialogDisp.btn_huge.gotoAndStop(1);
    if (this.currentVO) {
      var __s10local4 = "";
      if (__dep_export_CastleModel.CastleModel.rubyWishingWellData.isReadyToStart()) {
        this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(RubyWishingWellDialog.DESCRIPTION_GENERAL, [this.currentVO.entryCosts])).verticalAlign = __dep_exact_9e901e8e2483a22f.GGSVerticalAlign.MIDDLE;
        this.currentAction = __dep_exact_26a421b704832cff.WishingWellConst.OPTION_START_RUBY_WISHING_WELL;
        this.textFieldManager.registerTextField(this.dialogDisp.btn_huge.label, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(RubyWishingWellDialog.HUGE_BUTTON_START)).verticalAlign = __dep_exact_9e901e8e2483a22f.GGSVerticalAlign.MIDDLE;
        if (this.currentVO.neededWishingWellCoins > __dep_export_CastleModel.CastleModel.currencyData.getAmountById(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_WISHING_WELL_COIN)) {
          this.dialogDisp.btn_huge.toolTipText = RubyWishingWellDialog.BUTTON_TOOLTIP_NOT_ENOUGH_COINS;
          this.enableMainButton(false);
        } else {
          this.dialogDisp.btn_huge.toolTipText = "";
          this.enableMainButton(true);
        }
      } else if (__dep_export_CastleModel.CastleModel.rubyWishingWellData.isReadyToCollect() || __s10local1 == 0) {
        this.enableMainButton(true);
        this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(RubyWishingWellDialog.DESCRIPTION_READY)).verticalAlign = __dep_exact_9e901e8e2483a22f.GGSVerticalAlign.MIDDLE;
        this.dialogDisp.btn_huge.gotoAndStop(2);
        this.textFieldManager.registerTextField(this.dialogDisp.btn_huge.label, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(RubyWishingWellDialog.HUGE_BUTTON_COLLECT)).verticalAlign = __dep_exact_9e901e8e2483a22f.GGSVerticalAlign.MIDDLE;
        this.dialogDisp.btn_huge.toolTipText = "";
        __s10local2 = true;
        __s10local0 = new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(RubyWishingWellDialog.ARROW_DONE);
        this.currentAction = __dep_exact_26a421b704832cff.WishingWellConst.OPTION_COLLECT_RUBY_WISHING_WELL;
      } else {
        this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(RubyWishingWellDialog.DESCRIPTION_WORKING)).verticalAlign = __dep_exact_9e901e8e2483a22f.GGSVerticalAlign.MIDDLE;
        __s10local3 = __dep_export_CastleModel.CastleModel.rubyWishingWellData.getPercentageFinished();
        this.textFieldManager.registerTextField(this.dialogDisp.btn_huge.label, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(RubyWishingWellDialog.HUGE_BUTTON_COLLECT_NOW)).verticalAlign = __dep_exact_9e901e8e2483a22f.GGSVerticalAlign.MIDDLE;
        this.dialogDisp.btn_huge.toolTipText = {
          t: RubyWishingWellDialog.BUTTON_TOOLTIP_COLLECT_NOW,
          p: [__dep_exact_f855840627e6e145.int(Math.max(0, __dep_exact_26a421b704832cff.WishingWellConst.calculateWishingWellSkipCost(__s10local1)))]
        };
        this.enableMainButton(true);
        this.currentAction = __dep_exact_26a421b704832cff.WishingWellConst.OPTION_SKIP_RUBY_WISHING_WELL;
        __s10local4 = RubyWishingWellDialog.TOOLTIP_ARROW;
        __s10local2 = true;
        __s10local0 = new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.TimeStringHelper.getHoureMinuteSecondTimeString(__s10local1));
      }
      if (__s10local2) {
        this.dialogDisp.equation.visible = false;
        this.dialogDisp.info_hourglass.visible = false;
        this.dialogDisp.arrow.visible = true;
        this.dialogDisp.arrow.toolTipText = __s10local4;
        this.dialogDisp.arrow.mouseChildren = false;
        this.rect.width = RubyWishingWellDialog.ARROW_WIDTH * __s10local3;
        if (__s10local0) {
          this.textFieldManager.registerTextField(this.dialogDisp.arrow.txt_time, __s10local0);
        }
      } else {
        this.dialogDisp.equation.visible = true;
        this.dialogDisp.info_hourglass.visible = true;
        this.dialogDisp.arrow.visible = false;
      }
    }
  };
  RubyWishingWellDialog.prototype.showLoaded = function (__s21param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s21param0);
    this.currentVO = __dep_export_CastleModel.CastleModel.rubyWishingWellData.getCurrentNode();
    this.updateArrow();
    this.updateTexts();
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateArrow));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onUpdate));
    __dep_export_CastleModel.CastleModel.rubyWishingWellData.addEventListener(__dep_export_CastleRubyWishingWellData.CastleRubyWishingWellData.UPDATE, this.bindFunction(this.onUpdate));
  };
  RubyWishingWellDialog.prototype.hide = function () {
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateArrow));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onUpdate));
    __dep_export_CastleModel.CastleModel.rubyWishingWellData.removeEventListener(__dep_export_CastleRubyWishingWellData.CastleRubyWishingWellData.UPDATE, this.bindFunction(this.onUpdate));
    __s1param0.prototype.hide.call(this);
  };
  RubyWishingWellDialog.prototype.enableMainButton = function (__s25param0, __s25param1) {
    var __s25local0 = this;
    if (__s25param1 === undefined) {
      __s25param1 = false;
    }
    if (this.timeoutRunning) {
      this.buttonCurrentlyEnabled = __s25param0;
    } else if (__s25param1) {
      this.timeoutRunning = true;
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_huge, false);
      window.setTimeout(function () {
        __s25local0.timeoutRunning = false;
        __dep_export_ButtonHelper.ButtonHelper.enableButton(__s25local0.dialogDisp.btn_huge, __s25local0.buttonCurrentlyEnabled);
      }, RubyWishingWellDialog.BUTTON_COOLDOWN);
    } else {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_huge, __s25param0);
    }
  };
  RubyWishingWellDialog.prototype.onClick = function (__s33param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s33param0.target)) {
      switch (__s33param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_huge:
          this.enableMainButton(true, true);
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SWishingWellCommandVO.C2SWishingWellCommandVO(this.currentAction));
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_rubyWishingWell"));
      }
    }
  };
  RubyWishingWellDialog.prototype.onUpdate = function (__s37param0) {
    this.currentVO = __dep_export_CastleModel.CastleModel.rubyWishingWellData.getCurrentNode();
    this.updateArrow();
    this.updateTexts();
  };
  RubyWishingWellDialog.NAME = "RubyWishingWell";
  RubyWishingWellDialog.TITLE = "dialog_rubyWishingWell_header";
  RubyWishingWellDialog.DESCRIPTION_GENERAL = "dialog_rubyWishingWell_desc_general";
  RubyWishingWellDialog.DESCRIPTION_WORKING = "dialog_rubyWishingWell_desc_working";
  RubyWishingWellDialog.DESCRIPTION_READY = "dialog_rubyWishingWell_desc_done";
  RubyWishingWellDialog.HUGE_BUTTON_START = "dialog_rubyWishingWell_button";
  RubyWishingWellDialog.HUGE_BUTTON_COLLECT_NOW = "dialog_rubyWishingWell_button_collectNow";
  RubyWishingWellDialog.HUGE_BUTTON_COLLECT = "dialog_rubyWishingWell_button_collect";
  RubyWishingWellDialog.TOOLTIP_MANY_RUBIES = "rubyWishingWell_totalamount";
  RubyWishingWellDialog.TOOLTIP_ARROW = "resttime";
  RubyWishingWellDialog.TOOLTIP_WAITINGTIME = "rubyWishingWell_waitingtime";
  RubyWishingWellDialog.TOOLTIP_OWNED_COINS = "rubyWishingWell_Coin";
  RubyWishingWellDialog.BUTTON_TOOLTIP_NOT_ENOUGH_COINS = "dialog_rubyWishingWell_noCoin_tt";
  RubyWishingWellDialog.BUTTON_TOOLTIP_COLLECT_NOW = "dialog_rubyWishingWell_button_collectNow_tt";
  RubyWishingWellDialog.HELP_TOOLTIP = "generic_help";
  RubyWishingWellDialog.ARROW_DONE = "dialog_finish";
  RubyWishingWellDialog.BUTTON_COOLDOWN = 1000;
  RubyWishingWellDialog.ARROW_WIDTH = 203;
  RubyWishingWellDialog.ARROW_HEIGHT = 60;
  RubyWishingWellDialog.ARROW_OFFSET_X = -121;
  RubyWishingWellDialog.ARROW_OFFSET_Y = -10;
  return RubyWishingWellDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.RubyWishingWellDialog = __s0local1;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
