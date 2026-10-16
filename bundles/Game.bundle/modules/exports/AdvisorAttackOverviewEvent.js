Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function AdvisorAttackOverviewEvent(__s3param0, __s3param1 = null, __s3param2 = false, __s3param3 = false) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param2, __s3param3) || this;
    __s3local0._advisorAttackOverviewVO = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AdvisorAttackOverviewEvent, __s1param0);
  Object.defineProperty(AdvisorAttackOverviewEvent.prototype, "advisorAttackOverviewVO", {
    get: function () {
      return this._advisorAttackOverviewVO;
    },
    enumerable: true,
    configurable: true
  });
  AdvisorAttackOverviewEvent.ADVISOR_ATTACK_OVERVIEW_UPDATE = "ADVISOR_ATTACK_OVERVIEW_UPDATE";
  return AdvisorAttackOverviewEvent;
}(createjs.Event);
exports.AdvisorAttackOverviewEvent = __s0local0;
