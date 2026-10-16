Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SBuyFortuneTellerPackageVO = require("gge-module:export_C2SBuyFortuneTellerPackageVO");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_FortuneTellerEventDialogIdleAnimation = require("gge-module:export_FortuneTellerEventDialogIdleAnimation");
var __dep_export_FortuneTellerEventDialogRewardAnimation = require("gge-module:export_FortuneTellerEventDialogRewardAnimation");
var __s0local0 = createjs.TimerEvent;
var __s0local1 = function (__s1param0) {
  function FortuneTellerEventDialog() {
    return __s1param0.call(this, FortuneTellerEventDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FortuneTellerEventDialog, __s1param0);
  FortuneTellerEventDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_info], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_buy], __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    this.idleAnimation = new __dep_export_FortuneTellerEventDialogIdleAnimation.FortuneTellerEventDialogIdleAnimation(this.dialogDisp);
    this.rewardAnimation = new __dep_export_FortuneTellerEventDialogRewardAnimation.FortuneTellerEventDialogRewardAnimation(this.dialogDisp);
  };
  FortuneTellerEventDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("divination_main_title")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_top, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("divination_main_topreward"));
    this.tf_top_amount = this.textFieldManager.registerTextField(this.dialogDisp.txt_top_amount, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO());
    this.tf_price_amount = this.textFieldManager.registerTextField(this.dialogDisp.btn_buy.txt_value, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO());
    this.idleAnimation.show();
    this.rewardAnimation.hide();
    this.updateDialog(false);
  };
  FortuneTellerEventDialog.prototype.onRewardArrived = function (__s9param0) {
    this.rewardAnimation.show(__s9param0.params[0].getItemByIndex(0));
  };
  FortuneTellerEventDialog.prototype.updateDialog = function (__s11param0) {
    if (this.eventVO) {
      var __s11local0 = new __dep_exact_81dacdf05bd32292_1.Timer(1800, 1);
      __s11local0.addEventListener(__s0local0.TIMER_COMPLETE, this.bindFunction(this.onTimer));
      __s11local0.start();
      if (__s11param0) {
        __dep_export_ButtonHelper.ButtonHelper.delayEnableButton(this.dialogDisp.btn_buy, this.canBuyPrize, 2200);
      } else {
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_buy, this.canBuyPrize);
        this.updateText();
      }
    } else {
      this.hide();
    }
  };
  FortuneTellerEventDialog.prototype.onTimer = function (__s17param0) {
    __s17param0.target.removeEventListener(__s0local0.TIMER_COMPLETE, this.bindFunction(this.onTimer));
    this.updateText();
  };
  FortuneTellerEventDialog.prototype.updateText = function () {
    if (this.canBuyPrize) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_chances, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("divination_main_chances", [this.eventVO.tryCount, __dep_export_CastleModel.CastleModel.fortuneTeller.maxTriesPerDay]));
    }
    if (this.tf_top_amount.textContentVO) {
      this.tf_top_amount.textContentVO.numberValue = this.topRewardAmount;
    }
    if (this.tf_price_amount.textContentVO) {
      this.tf_price_amount.textContentVO.numberValue = this.currentFortuneTellerClassVO.c2Cost;
    }
  };
  Object.defineProperty(FortuneTellerEventDialog.prototype, "canBuyPrize", {
    get: function () {
      return this.eventVO && this.eventVO.tryCount <= __dep_export_CastleModel.CastleModel.fortuneTeller.maxTriesPerDay;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FortuneTellerEventDialog.prototype, "topRewardAmount", {
    get: function () {
      var __s26local0 = __dep_exact_f855840627e6e145.int(this.currentFortuneTellerClassVO.topRewardID);
      return __dep_export_CastleModel.CastleModel.rewardData.getCopiedListById(__s26local0).getItemByIndex(0).amount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FortuneTellerEventDialog.prototype, "currentFortuneTellerClassVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.fortuneTeller.getFortuneTellerClassByCount(this.canBuyPrize ? this.eventVO.tryCount : 1);
    },
    enumerable: true,
    configurable: true
  });
  FortuneTellerEventDialog.prototype.addEventListenerOnShow = function () {
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    __dep_export_CastleModel.CastleModel.fortuneTeller.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.FORTUNE_TELLER_REWARD_ARRIVED, this.bindFunction(this.onRewardArrived));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onEventUpdate));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventUpdate));
  };
  FortuneTellerEventDialog.prototype.removeEventListenerOnHide = function () {
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    __dep_export_CastleModel.CastleModel.fortuneTeller.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.FORTUNE_TELLER_REWARD_ARRIVED, this.bindFunction(this.onRewardArrived));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onEventUpdate));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventUpdate));
  };
  FortuneTellerEventDialog.prototype.onEventUpdate = function (__s34param0) {
    if (__dep_exact_81dacdf05bd32292_2.instanceOfClass(__s34param0.specialEventVO, "FortuneTellerEventVO")) {
      this.updateDialog(true);
    }
  };
  FortuneTellerEventDialog.prototype.onTimerUpdate = function (__s37param0) {
    if (!this.canBuyPrize) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_chances, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("divination_main_next", [__dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getShortTimeString(this.eventVO.secondsTillDailyReset())]));
    }
  };
  FortuneTellerEventDialog.prototype.hideLoaded = function (__s40param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s40param0);
    this.idleAnimation.hide();
    this.rewardAnimation.hide();
  };
  FortuneTellerEventDialog.prototype.onClick = function (__s42param0) {
    __s1param0.prototype.onClick.call(this, __s42param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s42param0.target)) {
      switch (__s42param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_info:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_FortuneTellerEventRewardInfoDialog.FortuneTellerEventRewardInfoDialog);
          break;
        case this.dialogDisp.btn_buy:
          __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_buy, false);
          __dep_exact_9e901e8e2483a22f.BasicModel.smartfoxClient.sendCommandVO(new __dep_export_C2SBuyFortuneTellerPackageVO.C2SBuyFortuneTellerPackageVO());
      }
    }
  };
  Object.defineProperty(FortuneTellerEventDialog.prototype, "eventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FORTUNE_TELLER);
    },
    enumerable: true,
    configurable: true
  });
  FortuneTellerEventDialog.NAME = "FortuneTellerEvent";
  return FortuneTellerEventDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.FortuneTellerEventDialog = __s0local1;
var __dep_export_FortuneTellerEventRewardInfoDialog = require("gge-module:export_FortuneTellerEventRewardInfoDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
