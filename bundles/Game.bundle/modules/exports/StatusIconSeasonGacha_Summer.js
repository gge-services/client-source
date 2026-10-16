Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __s0local0 = function (__s1param0) {
  function StatusIconSeasonGacha_Summer() {
    return __s1param0.call(this, "Btn_SummerGacha") || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(StatusIconSeasonGacha_Summer, __s1param0);
  Object.defineProperty(StatusIconSeasonGacha_Summer.prototype, "eventID", {
    get: function () {
      return __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_SUMMER_GACHA;
    },
    enumerable: true,
    configurable: true
  });
  return StatusIconSeasonGacha_Summer;
}(require("gge-module:export_AStatusIconSeasonGacha").AStatusIconSeasonGacha);
exports.StatusIconSeasonGacha_Summer = __s0local0;
