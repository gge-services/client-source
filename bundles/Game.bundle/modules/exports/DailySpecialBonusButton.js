Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function DailySpecialBonusButton(__s3param0, __s3param1) {
    var __s3local0 = this;
    __s3local0._type = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param1, __s3param0) || this)._type = __s3param0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DailySpecialBonusButton, __s1param0);
  Object.defineProperty(DailySpecialBonusButton.prototype, "type", {
    get: function () {
      return this._type;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DailySpecialBonusButton.prototype, "toolTipText", {
    set: function (__s7param0) {
      this.button.toolTipText = __s7param0;
    },
    enumerable: true,
    configurable: true
  });
  DailySpecialBonusButton.__initialize_static_members = function () {
    DailySpecialBonusButton.TYPE_ALLIANCE = 3;
    DailySpecialBonusButton.TYPE_VIP = 4;
    DailySpecialBonusButton.STATE_REWARD_COLLECTED = 2;
  };
  return DailySpecialBonusButton;
}(require("gge-module:export_DailyLoginBonusStateButton").DailyLoginBonusStateButton);
exports.DailySpecialBonusButton = __s0local0;
__s0local0.__initialize_static_members();
