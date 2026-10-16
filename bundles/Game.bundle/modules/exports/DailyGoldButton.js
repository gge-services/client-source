Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_DailyLoginBonusStateButton = require("gge-module:export_DailyLoginBonusStateButton");
var __s0local0 = function (__s1param0) {
  function DailyGoldButton(__s3param0, __s3param1) {
    var __s3local0 = this;
    __s3local0._day = 0;
    __s3local0._defaultButtonYPos = 0;
    __s3local0._isGoldDays = false;
    __s3local0._currentRewardDay = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param1, DailyGoldButton.TYPE_NORMAL, false) || this)._day = __s3local0._currentRewardDay = __s3param0;
    __s3local0._defaultButtonYPos = __s3param1.y;
    __s3local0._goldTextGGSTextField = __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s3param1.gold_text_container.gold_text, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("day_with_value", [__s3local0._currentRewardDay + 1]));
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DailyGoldButton, __s1param0);
  Object.defineProperty(DailyGoldButton.prototype, "day", {
    get: function () {
      return this._day;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DailyGoldButton.prototype, "currentRewardDay", {
    set: function (__s7param0) {
      this._currentRewardDay = __s7param0;
      this.updateState();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DailyGoldButton.prototype, "isGoldDays", {
    get: function () {
      return this._isGoldDays;
    },
    set: function (__s11param0) {
      this._isGoldDays = __s11param0;
      this._defaultState = this._isGoldDays ? DailyGoldButton.TYPE_SPECIAL : DailyGoldButton.TYPE_NORMAL;
      this.updateState();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DailyGoldButton.prototype, "selected", {
    get: function () {
      return Object.getOwnPropertyDescriptor(__dep_export_DailyLoginBonusStateButton.DailyLoginBonusStateButton.prototype, "selected").get.call(this);
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_DailyLoginBonusStateButton.DailyLoginBonusStateButton.prototype, "selected").set.call(this, __s15param0);
      this.updateState();
    },
    enumerable: true,
    configurable: true
  });
  DailyGoldButton.prototype.updateState = function () {
    switch (this.defaultState) {
      case DailyGoldButton.TYPE_NORMAL:
      case DailyGoldButton.TYPE_NORMAL_TODAY:
        this.changeTo(this.selected ? DailyGoldButton.TYPE_NORMAL_TODAY : DailyGoldButton.TYPE_NORMAL);
        break;
      case DailyGoldButton.TYPE_SPECIAL:
      case DailyGoldButton.TYPE_SPECIAL_TODAY:
        this.changeTo(this.selected ? DailyGoldButton.TYPE_SPECIAL_TODAY : DailyGoldButton.TYPE_SPECIAL);
    }
    this.button.y = this.selected ? this._defaultButtonYPos - 5 : this._defaultButtonYPos;
    this._goldTextGGSTextField.textContentVO.textId = this._currentRewardDay > 6 ? "dialog_loginBonus_daySevenPlus" : "day_with_value";
    this._goldTextGGSTextField.textContentVO.textReplacements = [this._currentRewardDay + 1];
  };
  DailyGoldButton.__initialize_static_members = function () {
    DailyGoldButton.TYPE_NORMAL = 1;
    DailyGoldButton.TYPE_NORMAL_TODAY = 2;
    DailyGoldButton.TYPE_SPECIAL = 3;
    DailyGoldButton.TYPE_SPECIAL_TODAY = 4;
  };
  return DailyGoldButton;
}(__dep_export_DailyLoginBonusStateButton.DailyLoginBonusStateButton);
exports.DailyGoldButton = __s0local0;
__s0local0.__initialize_static_members();
