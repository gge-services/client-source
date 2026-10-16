Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function ATriggerEventVO() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ATriggerEventVO, __s1param0);
  ATriggerEventVO.prototype.parseBasicsFromParamObject = function (__s5param0) {
    __s1param0.prototype.parseBasicsFromParamObject.call(this, __s5param0);
    this._eventId = __s5param0.TRID;
  };
  return ATriggerEventVO;
}(require("gge-module:export_ASpecialEventVO").ASpecialEventVO);
exports.ATriggerEventVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable");
