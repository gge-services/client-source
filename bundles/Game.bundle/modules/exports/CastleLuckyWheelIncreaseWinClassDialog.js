Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_C2SLuckyWheelIncreasePrizeClass = require("gge-module:export_C2SLuckyWheelIncreasePrizeClass");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleNoMoneyC2DialogProperties = require("gge-module:export_CastleNoMoneyC2DialogProperties");
var __s0local0 = function (__s1param0) {
  function CastleLuckyWheelIncreaseWinClassDialog() {
    var __s3local0 = this;
    __s3local0.willShowDialogAgain = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleLuckyWheelIncreaseWinClassDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleLuckyWheelIncreaseWinClassDialog, __s1param0);
  CastleLuckyWheelIncreaseWinClassDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.closeBtn, this.dialogDisp.cancelBtn, this.dialogDisp.acceptBtn]);
    this.checkmarkComponent = new __dep_export_CastleLuckyWheelCheckboxWrapper.CastleLuckyWheelCheckboxWrapper(this.dialogDisp.checkmarkComponent);
  };
  CastleLuckyWheelIncreaseWinClassDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    var __s7local0 = this.setRewardsDisplayObject();
    this.rewardComp = new __dep_export_PaginatedCollectableRenderListWrapper.PaginatedCollectableRenderListWrapper(this.dialogDisp.rewardComponent, this.rewards, this.collectableRenderList, __s7local0, this.dialogDisp.btn_left, this.dialogDisp.btn_right, "mc_item", "mc_itemholder", "parent.btn_info", "mc_iconHolder", "txt_amount");
    this.willShowDialogAgain = __dep_export_CastleModel.CastleModel.luckyWheelData.showIncreaseWinClassDialog;
    this.checkmarkComponent.isEnabled = !this.willShowDialogAgain;
    this.setTexts();
  };
  CastleLuckyWheelIncreaseWinClassDialog.prototype.addEventListenerOnShow = function () {
    __s1param0.prototype.addEventListenerOnShow.call(this);
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerTick));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onTicketUpdate));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onUserCurrencyUpdate));
    this.checkmarkComponent.addEventListenerOnShow();
  };
  CastleLuckyWheelIncreaseWinClassDialog.prototype.removeEventListenerOnHide = function () {
    __s1param0.prototype.removeEventListenerOnHide.call(this);
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerTick));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onTicketUpdate));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onUserCurrencyUpdate));
    this.checkmarkComponent.removeEventListenersOnHide();
  };
  CastleLuckyWheelIncreaseWinClassDialog.prototype.onUserCurrencyUpdate = function (__s13param0) {
    this.colorizeTexts();
  };
  CastleLuckyWheelIncreaseWinClassDialog.prototype.onTicketUpdate = function (__s15param0) {
    this.colorizeTexts();
  };
  CastleLuckyWheelIncreaseWinClassDialog.prototype.onRemoveSpecialEvent = function (__s17param0) {
    if (__s17param0.specialEventVO.eventId == this.eventVO.eventId) {
      this.hide();
    }
  };
  CastleLuckyWheelIncreaseWinClassDialog.prototype.onTimerTick = function (__s20param0) {
    if (this.eventVO.remainingEventTimeInSeconds < __dep_export_LuckyWheelData.LuckyWheelData.MINIMUM_TIME_TO_ENABLE_SPIN) {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.acceptBtn, false);
    }
  };
  CastleLuckyWheelIncreaseWinClassDialog.prototype.setTexts = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.titleTxt, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_luckyWheel_increaseClass_header"));
    this.textFieldManager.registerTextField(this.dialogDisp.descTxt, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_luckyWheel_increaseClass_copy"));
    this.textFieldManager.registerTextField(this.dialogDisp.notAgainTxt, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_luckyWheel_increaseClass_dontShow"));
    this._c2PriceText = this.textFieldManager.registerTextField(this.dialogDisp.rubbiesTxt, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__dep_export_CastleModel.CastleModel.luckyWheelData.increaseWinClassC2));
    this.dialogDisp.c2PriceTooltipArea.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.C2;
    this.colorizeTexts();
  };
  CastleLuckyWheelIncreaseWinClassDialog.prototype.colorizeTexts = function () {
    if (this.hasEnoughRubies) {
      this._c2PriceText.color = __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
    } else {
      this._c2PriceText.color = __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR;
    }
  };
  Object.defineProperty(CastleLuckyWheelIncreaseWinClassDialog.prototype, "hasEnoughRubies", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.currencyData.c2Amount >= __dep_export_CastleModel.CastleModel.luckyWheelData.increaseWinClassC2;
    },
    enumerable: true,
    configurable: true
  });
  CastleLuckyWheelIncreaseWinClassDialog.prototype.setRewardsDisplayObject = function () {
    var __s31local0 = 0;
    if (this.rewards.length == 6) {
      this.dialogDisp.rewardComponent.gotoAndStop(3);
      __s31local0 = 6;
    } else if (this.rewards.length == 9) {
      this.dialogDisp.rewardComponent.gotoAndStop(2);
      __s31local0 = 9;
    } else {
      this.dialogDisp.rewardComponent.gotoAndStop(1);
      __s31local0 = 12;
    }
    return __s31local0;
  };
  CastleLuckyWheelIncreaseWinClassDialog.prototype.onClick = function (__s36param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s36param0.target)) {
      __s1param0.prototype.onClick.call(this, __s36param0);
      switch (__s36param0.target) {
        case this.dialogDisp.closeBtn:
        case this.dialogDisp.cancelBtn:
          this.hide();
          break;
        case this.dialogDisp.acceptBtn:
          this.clickedAccept();
      }
    }
  };
  CastleLuckyWheelIncreaseWinClassDialog.prototype.clickedAccept = function () {
    this.willShowDialogAgain = !this.checkmarkComponent.isEnabled;
    if (this.hasEnoughRubies) {
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SLuckyWheelIncreasePrizeClass.C2SLuckyWheelIncreasePrizeClass());
      __dep_export_CastleModel.CastleModel.luckyWheelData.showIncreaseWinClassDialog = this.willShowDialogAgain;
      this.hide();
    } else {
      __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_CastleNoMoneyC2Dialog.CastleNoMoneyC2Dialog, new __dep_export_CastleNoMoneyC2DialogProperties.CastleNoMoneyC2DialogProperties());
    }
  };
  Object.defineProperty(CastleLuckyWheelIncreaseWinClassDialog.prototype, "rewards", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.luckyWheelData.rewardsIncreaseWinClass;
    },
    enumerable: true,
    configurable: true
  });
  CastleLuckyWheelIncreaseWinClassDialog.prototype.hideLoaded = function (__s46param0 = null) {
    this.destroyCollectableRenderList();
    if (this.rewardComp) {
      this.rewardComp.destroy();
    }
    __s1param0.prototype.hideLoaded.call(this, __s46param0);
  };
  Object.defineProperty(CastleLuckyWheelIncreaseWinClassDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLuckyWheelIncreaseWinClassDialog.prototype, "eventVO", {
    get: function () {
      return this.dialogProperties.eventVO;
    },
    enumerable: true,
    configurable: true
  });
  CastleLuckyWheelIncreaseWinClassDialog.__initialize_static_members = function () {
    CastleLuckyWheelIncreaseWinClassDialog.NAME = "CastleLuckyWheelIncreaseWinClassDialog";
  };
  return CastleLuckyWheelIncreaseWinClassDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleLuckyWheelIncreaseWinClassDialog = __s0local0;
var __dep_export_LuckyWheelData = require("gge-module:export_LuckyWheelData");
var __dep_export_PaginatedCollectableRenderListWrapper = require("gge-module:export_PaginatedCollectableRenderListWrapper");
var __dep_export_CastleNoMoneyC2Dialog = require("gge-module:export_CastleNoMoneyC2Dialog");
var __dep_export_CastleLuckyWheelCheckboxWrapper = require("gge-module:export_CastleLuckyWheelCheckboxWrapper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
