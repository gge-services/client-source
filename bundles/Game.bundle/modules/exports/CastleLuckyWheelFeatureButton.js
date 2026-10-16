Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_84d43d9c404bd4d8 = require("gge-module:exact_84d43d9c404bd4d8");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleLuckyWheelFeatureButton(__s3param0, __s3param1) {
    var __s3local0 = this;
    __s3local0.buttonType = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0, true) || this).buttonType = __s3param1;
    __s3local0.setupButtonEvents();
    __s3local0.setupButton();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleLuckyWheelFeatureButton, __s1param0);
  CastleLuckyWheelFeatureButton.prototype.setupButtonEvents = function () {
    switch (this.buttonType) {
      case CastleLuckyWheelFeatureButton.INCREASE_WIN_CLASS_BTN:
        this.luckyWheelData.addEventListener(__dep_export_LuckyWheelData.LuckyWheelData.SHOW_INCREASE_WIN_CLASS_DIALOG_CHANGE, this.bindFunction(this.setupButton));
        break;
      case CastleLuckyWheelFeatureButton.GUARANTEED_JACKPOT_BTN:
        this.luckyWheelData.addEventListener(__dep_export_LuckyWheelData.LuckyWheelData.SHOW_GUARANTEED_JACKPOT_DIALOG_CHANGE, this.bindFunction(this.setupButton));
    }
  };
  CastleLuckyWheelFeatureButton.prototype.removeButtonEvents = function () {
    switch (this.buttonType) {
      case CastleLuckyWheelFeatureButton.INCREASE_WIN_CLASS_BTN:
        this.luckyWheelData.removeEventListener(__dep_export_LuckyWheelData.LuckyWheelData.SHOW_INCREASE_WIN_CLASS_DIALOG_CHANGE, this.bindFunction(this.setupButton));
        break;
      case CastleLuckyWheelFeatureButton.GUARANTEED_JACKPOT_BTN:
        this.luckyWheelData.removeEventListener(__dep_export_LuckyWheelData.LuckyWheelData.SHOW_GUARANTEED_JACKPOT_DIALOG_CHANGE, this.bindFunction(this.setupButton));
    }
  };
  CastleLuckyWheelFeatureButton.prototype.setupButton = function (__s11param0 = null) {
    switch (this.buttonType) {
      case CastleLuckyWheelFeatureButton.INCREASE_WIN_CLASS_BTN:
        if (this.luckyWheelData.showIncreaseWinClassDialog) {
          this.disp.gotoAndStop(1);
          this.disp.toolTipText = {
            t: "dialog_luckyWheel_increaseClass_tooltip",
            p: [this.luckyWheelData.currentWinClass + 1]
          };
        } else {
          this.disp.gotoAndStop(2);
          __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp, !this.luckyWheelData.isMaxIncreaseWinClass);
          this.disp.basicButton.mouseEnabled = true;
          if (this.luckyWheelData.isMaxIncreaseWinClass) {
            this.disp.toolTipText = "dialog_luckyWheel_increaseClassMax_tooltip";
          } else {
            this.disp.toolTipText = {
              t: "dialog_luckyWheel_increaseClassRubies_tooltip",
              p: [this.luckyWheelData.currentWinClass + 1, this.luckyWheelData.increaseWinClassC2]
            };
          }
        }
        break;
      case CastleLuckyWheelFeatureButton.GUARANTEED_JACKPOT_BTN:
        if (this.luckyWheelData.showGuaranteedJackpotDialog) {
          this.disp.gotoAndStop(1);
          this.disp.toolTipText = "dialog_luckyWheel_guaranteedJackpot_tooltip";
        } else {
          if (this.disp.currentFrame != 2) {
            this.disp.gotoAndStop(2);
            this.txtButtonInfo = this.textFieldManager.registerTextField(this.disp.ticketsTxt, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.luckyWheelData.jackpotTicketPrice));
          } else {
            this.txtButtonInfo.textContentVO = new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.luckyWheelData.jackpotTicketPrice);
          }
          this.disp.toolTipText = {
            t: "dialog_luckyWheel_guaranteedJackpotCosts_tooltip",
            p: [this.luckyWheelData.jackpotC2Price, this.luckyWheelData.jackpotTicketPrice]
          };
        }
    }
  };
  Object.defineProperty(CastleLuckyWheelFeatureButton.prototype, "luckyWheelData", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.luckyWheelData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLuckyWheelFeatureButton.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  CastleLuckyWheelFeatureButton.__initialize_static_members = function () {
    CastleLuckyWheelFeatureButton.INCREASE_WIN_CLASS_BTN = 0;
    CastleLuckyWheelFeatureButton.GUARANTEED_JACKPOT_BTN = 1;
  };
  return CastleLuckyWheelFeatureButton;
}(__dep_exact_84d43d9c404bd4d8.BasicButton);
exports.CastleLuckyWheelFeatureButton = __s0local0;
var __dep_export_LuckyWheelData = require("gge-module:export_LuckyWheelData");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "MovieClip");
__s0local0.__initialize_static_members();
