Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_DailyLoginBonusStateButton = require("gge-module:export_DailyLoginBonusStateButton");
var __s0local0 = function (__s1param0) {
  function DailyTabButton(__s3param0, __s3param1) {
    var __s3local0 = this;
    __s3local0._day = 0;
    __s3local0._isGoldDays = false;
    __s3local0._currentDay = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param1, DailyTabButton.TYPE_PAST_DAY) || this)._day = __s3param0;
    __s3param1.toolTipText = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_loginBonus_box" + (__s3param0 + 1));
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DailyTabButton, __s1param0);
  Object.defineProperty(DailyTabButton.prototype, "day", {
    get: function () {
      return this._day;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DailyTabButton.prototype, "isGoldDays", {
    get: function () {
      return this._isGoldDays;
    },
    set: function (__s9param0) {
      this._isGoldDays = __s9param0;
      this.updateState();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DailyTabButton.prototype, "selected", {
    get: function () {
      return Object.getOwnPropertyDescriptor(__dep_export_DailyLoginBonusStateButton.DailyLoginBonusStateButton.prototype, "selected").get.call(this);
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_DailyLoginBonusStateButton.DailyLoginBonusStateButton.prototype, "selected").set.call(this, __s13param0);
      this.updateState();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DailyTabButton.prototype, "currentRewardDay", {
    set: function (__s15param0) {
      this._currentDay = __s15param0;
      this.updateState();
    },
    enumerable: true,
    configurable: true
  });
  DailyTabButton.prototype.updateState = function () {
    this.button.tab_icon.gotoAndStop(this._isGoldDays ? 7 : this.day + 1);
    this.button.toolTipText = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_loginBonus_box" + (this._isGoldDays ? 7 : this.day + 1));
    if (this.selected) {
      this.changeTo(this._isGoldDays ? DailyTabButton.TYPE_GOLD_DAY : DailyTabButton.TYPE_CURRENT_DAY);
    } else if (this.day < this._currentDay) {
      this.changeTo(this._isGoldDays ? DailyTabButton.TYPE_GOLD_PAST_DAY : DailyTabButton.TYPE_PAST_DAY);
    } else {
      this.changeTo(this._isGoldDays ? DailyTabButton.TYPE_GOLD_NEXT_DAY : DailyTabButton.TYPE_NEXT_DAY);
    }
  };
  DailyTabButton.__initialize_static_members = function () {
    DailyTabButton.TYPE_PAST_DAY = 3;
    DailyTabButton.TYPE_CURRENT_DAY = 2;
    DailyTabButton.TYPE_NEXT_DAY = 1;
    DailyTabButton.TYPE_GOLD_PAST_DAY = 6;
    DailyTabButton.TYPE_GOLD_DAY = 5;
    DailyTabButton.TYPE_GOLD_NEXT_DAY = 4;
  };
  return DailyTabButton;
}(__dep_export_DailyLoginBonusStateButton.DailyLoginBonusStateButton);
exports.DailyTabButton = __s0local0;
__s0local0.__initialize_static_members();
