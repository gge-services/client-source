Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SLuckyWheelBuyJackpotVO = require("gge-module:export_C2SLuckyWheelBuyJackpotVO");
var __dep_export_C2SLuckyWheelChangeModeVO = require("gge-module:export_C2SLuckyWheelChangeModeVO");
var __dep_export_C2SLuckyWheelIncreasePrizeClass = require("gge-module:export_C2SLuckyWheelIncreasePrizeClass");
var __dep_export_C2SLuckyWheelSpinVO = require("gge-module:export_C2SLuckyWheelSpinVO");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EventPackagePrimeSaleEventVO = require("gge-module:export_EventPackagePrimeSaleEventVO");
var __dep_export_LuckyWheelData = require("gge-module:export_LuckyWheelData");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleNoMoneyC2Dialog = require("gge-module:export_CastleNoMoneyC2Dialog");
var __dep_export_CastleNoMoneyC2DialogProperties = require("gge-module:export_CastleNoMoneyC2DialogProperties");
var __dep_export_CastleBasicLuckyWheelDialog = require("gge-module:export_CastleBasicLuckyWheelDialog");
var __dep_export_CastleLuckyWheelDelayCommandHelper = require("gge-module:export_CastleLuckyWheelDelayCommandHelper");
var __dep_export_CastleLuckyWheelDialogProperties = require("gge-module:export_CastleLuckyWheelDialogProperties");
var __dep_export_CastleLuckyWheelFeatureButton = require("gge-module:export_CastleLuckyWheelFeatureButton");
var __dep_export_CastleLuckyWheelGuaranteedJackpotDialog = require("gge-module:export_CastleLuckyWheelGuaranteedJackpotDialog");
var __dep_export_CastleLuckyWheelIncreaseWinClassDialog = require("gge-module:export_CastleLuckyWheelIncreaseWinClassDialog");
var __dep_export_CastleLuckyWheelTicketBuyDialog = require("gge-module:export_CastleLuckyWheelTicketBuyDialog");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __s0local0 = function (__s1param0) {
  function CastleLuckyWheelDialog() {
    return __s1param0.call(this, CastleLuckyWheelDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleLuckyWheelDialog, __s1param0);
  CastleLuckyWheelDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([this.dialogDisp.btn_toggle_mode, this.dialogDisp.btn_get_tickets, this.dialogDisp.guaranteedJackpotBtn, this.dialogDisp.increaseWinClassBtn]);
    this._btnGuaranteedJackpot = this.dialogDisp.guaranteedJackpotBtn.basicButton = new __dep_export_CastleLuckyWheelFeatureButton.CastleLuckyWheelFeatureButton(this.dialogDisp.guaranteedJackpotBtn, __dep_export_CastleLuckyWheelFeatureButton.CastleLuckyWheelFeatureButton.GUARANTEED_JACKPOT_BTN);
    this._btnIncreaseWinClass = this.dialogDisp.increaseWinClassBtn.basicButton = new __dep_export_CastleLuckyWheelFeatureButton.CastleLuckyWheelFeatureButton(this.dialogDisp.increaseWinClassBtn, __dep_export_CastleLuckyWheelFeatureButton.CastleLuckyWheelFeatureButton.INCREASE_WIN_CLASS_BTN);
    this.dialogDisp.btn_toggle_mode.mc_animation.gotoAndStop(this.dialogDisp.btn_toggle_mode.mc_animation.totalFrames);
    this.textFieldManager.registerTextField(this.dialogDisp.btn_toggle_mode.btn_normal.txt_mode, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_luckyWheel_pro_turnOff")).autoFitToBounds = true;
    this._btnBuyTickets = this.dialogDisp.btn_get_tickets.basicButton;
    this._btnBuyTickets.disp.toolTipText = "dialog_luckyWheel_buyTickets";
    this.dialogDisp.btn_get_tickets.tooltip_get_tickets.toolTipText = "tooltip_tickets";
    this._btnModeToggle = this.dialogDisp.btn_toggle_mode.basicButton;
    this.dialogDisp.btn_toggle_mode.mouseChildren = false;
  };
  CastleLuckyWheelDialog.prototype.updateScoreBarText = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.component_scoreBar.txt_points, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_luckyWheel_description"));
  };
  CastleLuckyWheelDialog.prototype.showLoaded = function (__s9param0 = null) {
    this.dialogDisp.mc_background.gotoAndStop(1);
    this._tfTickets = this.textFieldManager.registerTextField(this.dialogDisp.btn_get_tickets.tf_ticketcount, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(0));
    this._itxt_discount = this.textFieldManager.registerTextField(this.dialogDisp.btn_get_tickets.mc_discount.txt_priceReduction, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE));
    __s1param0.prototype.showLoaded.call(this, __s9param0);
    this.textFieldManager.registerTextField(this.dialogDisp.btn_toggle_mode.btn_pro.txt_mode, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_luckyWheel_pro_turnOn")).autoFitToBounds = true;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_toggle_mode.btn_pro, __dep_export_CastleModel.CastleModel.userData.isPayUser);
    if (this.dialogDisp.btn_toggle_mode.cacheCanvas) {
      this.dialogDisp.btn_toggle_mode.updateCache();
    }
    this.dialogDisp.btn_toggle_mode.toolTipText = __dep_export_CastleModel.CastleModel.userData.isPayUser ? null : "dialog_luckyWheel_pro_tooltip";
    this.enableBasicButton(this._btnIncreaseWinClass, !this.eventVO.isAtMaxClass);
    this.updateDiscountDisplay();
  };
  CastleLuckyWheelDialog.prototype.addEventListenerOnShow = function () {
    __s1param0.prototype.addEventListenerOnShow.call(this);
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_PAYUSER_INFO, this.bindFunction(this.onPayUserChange));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onRefreshSpecialEvent));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_LIFETIME_SPENT, this.bindFunction(this.onUserLifetimeSpentChanged));
  };
  CastleLuckyWheelDialog.prototype.removeEventListenerOnHide = function () {
    __s1param0.prototype.removeEventListenerOnHide.call(this);
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_PAYUSER_INFO, this.bindFunction(this.onPayUserChange));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onRefreshSpecialEvent));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_LIFETIME_SPENT, this.bindFunction(this.onUserLifetimeSpentChanged));
  };
  CastleLuckyWheelDialog.prototype.onPayUserChange = function (__s16param0) {
    this.updateToggleButton();
  };
  CastleLuckyWheelDialog.prototype.onUserLifetimeSpentChanged = function (__s18param0) {
    this.updateDiscountDisplay();
  };
  CastleLuckyWheelDialog.prototype.onTimerTick = function (__s20param0 = null) {
    __s1param0.prototype.onTimerTick.call(this, __s20param0);
    if (__dep_exact_f855840627e6e145.int(this.eventVO.remainingEventTimeInSeconds) < __dep_export_LuckyWheelData.LuckyWheelData.MINIMUM_TIME_TO_ENABLE_SPIN) {
      this.enableBasicButton(this._btnGuaranteedJackpot, false);
      this.enableBasicButton(this._btnIncreaseWinClass, false);
    }
  };
  CastleLuckyWheelDialog.prototype.onRemoveSpecialEvent = function (__s23param0) {
    if (__s23param0.specialEventVO.eventId == this.eventVO.eventId) {
      this.hide();
    } else {
      this.updateDiscountDisplay();
    }
  };
  CastleLuckyWheelDialog.prototype.onRefreshSpecialEvent = function (__s27param0) {
    this.updateDiscountDisplay();
  };
  CastleLuckyWheelDialog.prototype.onClick = function (__s29param0) {
    __s1param0.prototype.onClick.call(this, __s29param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s29param0.target)) {
      switch (__s29param0.target) {
        case this.dialogDisp.btn_toggle_mode:
          if (__dep_export_CastleModel.CastleModel.userData.isPayUser) {
            this.changeMode();
          }
          break;
        case this.dialogDisp.btn_get_tickets:
          __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_CastleLuckyWheelTicketBuyDialog.CastleLuckyWheelTicketBuyDialog);
          break;
        case this.dialogDisp.guaranteedJackpotBtn:
          if (this.luckyWheelData.showGuaranteedJackpotDialog) {
            __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_CastleLuckyWheelGuaranteedJackpotDialog.CastleLuckyWheelGuaranteedJackpotDialog, new __dep_export_CastleLuckyWheelDialogProperties.CastleLuckyWheelDialogProperties(this.eventVO, this.bindFunction(this.clickedBuyJackpot)));
          } else {
            this.clickedBuyJackpot();
          }
          break;
        case this.dialogDisp.increaseWinClassBtn:
          if (this.luckyWheelData.showIncreaseWinClassDialog) {
            __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_CastleLuckyWheelIncreaseWinClassDialog.CastleLuckyWheelIncreaseWinClassDialog, new __dep_export_CastleLuckyWheelDialogProperties.CastleLuckyWheelDialogProperties(this.eventVO));
          } else {
            __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SLuckyWheelIncreasePrizeClass.C2SLuckyWheelIncreasePrizeClass());
          }
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper(__dep_exact_92d05af59ee2ff30_2.Localize.text(""), __dep_exact_92d05af59ee2ff30_2.Localize.text("dialog_luckyWheel_text_help"));
      }
    }
  };
  CastleLuckyWheelDialog.prototype.clickedBuyJackpot = function () {
    if (this.eventVO.hasEnoughRubiesToBuyJackpot && this.eventVO.hasEnoughTicketsToBuyJackpot) {
      __dep_export_CastleLuckyWheelDelayCommandHelper.CastleLuckyWheelDelayCommandHelper.startCommandDelay();
      __dep_export_CastleModel.CastleModel.luckyWheelData.showGuaranteedJackpotDialog = this.eventVO.willShowDialogAgain;
      this._jackPotBought = true;
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SLuckyWheelBuyJackpotVO.C2SLuckyWheelBuyJackpotVO());
    } else if (this.eventVO.hasEnoughRubiesToBuyJackpot) {
      if (!this.eventVO.hasEnoughTicketsToBuyJackpot) {
        __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_CastleLuckyWheelTicketBuyDialog.CastleLuckyWheelTicketBuyDialog);
      }
    } else {
      __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_CastleNoMoneyC2Dialog.CastleNoMoneyC2Dialog, new __dep_export_CastleNoMoneyC2DialogProperties.CastleNoMoneyC2DialogProperties());
    }
  };
  CastleLuckyWheelDialog.prototype.handleNotEnoughTickets = function () {
    __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_CastleLuckyWheelTicketBuyDialog.CastleLuckyWheelTicketBuyDialog);
  };
  CastleLuckyWheelDialog.prototype.startSpin = function () {
    if (__dep_export_CastleModel.CastleModel.currencyData.getAmountById(this.eventVO.currencyID) >= 100 && __dep_export_CastleModel.CastleModel.userData.isPayUser && !this.eventVO.isProMode) {
      this.dialogDisp.btn_toggle_mode.mc_animation.gotoAndPlay(1);
    }
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SLuckyWheelSpinVO.C2SLuckyWheelSpinVO(0));
  };
  CastleLuckyWheelDialog.prototype.updateDiscountDisplay = function () {
    var __s49local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_EVENT_PACKAGE_PRIME_SALES);
    if (__s49local0 && __dep_export_EventPackagePrimeSaleEventVO.EventPackagePrimeSaleEventVO.hasDiscountedPackages(this.eventVO.eventPackagesVO) && __s49local0.discount > 0) {
      this.dialogDisp.btn_get_tickets.mc_discount.visible = true;
      this._itxt_discount.textContentVO.textReplacements = [-__s49local0.discount];
    } else {
      this.dialogDisp.btn_get_tickets.mc_discount.visible = false;
    }
  };
  CastleLuckyWheelDialog.prototype.enableBasicButton = function (__s53param0, __s53param1) {
    if (!__s53param1) {
      __s53param0.resetHoverState();
    }
    if (__s53param0 != this._btnSpin && __s53param0 != this._btnGuaranteedJackpot && __s53param0 != this._btnIncreaseWinClass || !__s53param1) {
      if (__s53param0 == this._btnModeToggle) {
        if (__dep_export_CastleModel.CastleModel.userData.isPayUser && !this.component_LuckyWheel.wheelIsTurning && __s53param1) {
          __s53param0.enableButton = __s53param1;
        } else {
          __s53param0.enableButton = false;
          __s53param0.mouseEnabled = true;
        }
      } else if (__s53param0 == this._btnIncreaseWinClass) {
        if (this.eventVO.isAtMaxClass || this.component_LuckyWheel.wheelIsTurning || !__s53param1) {
          __s53param0.enableButton = false;
          __s53param0.disp.mouseEnabled = false;
        } else {
          __s53param0.enableButton = __s53param1;
          __s53param0.disp.mouseEnabled = __s53param1;
        }
      } else {
        __dep_exact_608de47b6498f9b0.TweenMax.delayedCall(0, this.bindFunction(this.enableButtonWithDelay), [__s53param0, __s53param1]);
        __s53param0.disp.mouseEnabled = __s53param1;
      }
    } else if (this.eventVO.remainingEventTimeInSeconds > __dep_export_LuckyWheelData.LuckyWheelData.MINIMUM_TIME_TO_ENABLE_SPIN || this.component_LuckyWheel.wheelIsTurning) {
      __s53param0.enableButton = __s53param1;
      __s53param0.disp.mouseEnabled = __s53param1;
    }
  };
  CastleLuckyWheelDialog.prototype.enableButtonWithDelay = function (__s65param0, __s65param1) {
    __s65param0.enableButton = __s65param1;
  };
  CastleLuckyWheelDialog.prototype.changeMode = function () {
    this.changeBtnsStatus(false);
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SLuckyWheelChangeModeVO.C2SLuckyWheelChangeModeVO());
  };
  CastleLuckyWheelDialog.prototype.setupFeatureBtns = function () {
    this._btnGuaranteedJackpot.setupButton();
    this._btnIncreaseWinClass.setupButton();
  };
  CastleLuckyWheelDialog.prototype.updateBG = function () {
    __s1param0.prototype.updateBG.call(this);
    this.dialogDisp.mc_background.gotoAndStop(this.eventVO.isProMode ? 2 : 1);
    this.dialogDisp.btn_get_tickets.y = this.eventVO.isProMode ? 104 : 95;
    this.dialogDisp.component_spin.y = this.eventVO.isProMode ? 118 : 109;
  };
  CastleLuckyWheelDialog.prototype.updateModeDependentVisuals = function () {
    __s1param0.prototype.updateModeDependentVisuals.call(this);
    this.updateToggleButton();
    this.setupFeatureBtns();
  };
  CastleLuckyWheelDialog.prototype.updateToggleButton = function () {
    if (this.eventVO.isProMode) {
      this.dialogDisp.btn_toggle_mode.btn_pro.visible = false;
      this.dialogDisp.btn_toggle_mode.btn_normal.visible = true;
    } else {
      this.dialogDisp.btn_toggle_mode.btn_normal.visible = false;
      this.dialogDisp.btn_toggle_mode.btn_pro.visible = true;
    }
    this.enableBasicButton(this._btnModeToggle, true);
  };
  CastleLuckyWheelDialog.prototype.changeBtnsStatus = function (__s79param0) {
    __s1param0.prototype.changeBtnsStatus.call(this, __s79param0);
    this.enableBasicButton(this._btnModeToggle, __s79param0);
    this.enableBasicButton(this._btnBuyTickets, __s79param0);
    this.enableBasicButton(this._btnIncreaseWinClass, __s79param0 && !this.eventVO.isAtMaxClass);
    this.enableBasicButton(this._btnGuaranteedJackpot, __s79param0);
  };
  CastleLuckyWheelDialog.NAME = "CastleLuckyWheel";
  return CastleLuckyWheelDialog;
}(__dep_export_CastleBasicLuckyWheelDialog.CastleBasicLuckyWheelDialog);
exports.CastleLuckyWheelDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
