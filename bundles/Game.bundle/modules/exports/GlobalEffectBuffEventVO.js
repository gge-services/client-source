Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ATriggerEventVO = require("gge-module:export_ATriggerEventVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __s0local0 = function (__s1param0) {
  function GlobalEffectBuffEventVO() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GlobalEffectBuffEventVO, __s1param0);
  GlobalEffectBuffEventVO.prototype.parseParamObject = function (__s5param0) {
    __s1param0.prototype.parseParamObject.call(this, __s5param0);
    this.boostAbleEffects = __s5param0.GEB;
    var __s5local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_GLOBAL_EFFECTS);
    this._endTimestamp = __s5local0 ? __s5local0.remainingEventTimeInSeconds * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC + __dep_export_CachedTimer.CachedTimer.getCachedTimer() : 0;
  };
  GlobalEffectBuffEventVO.prototype.getBoostValues = function (__s7param0) {
    for (var __s7local0 = 0, __s7local1 = this.boostAbleEffects; __s7local0 < __s7local1.length; __s7local0++) {
      var __s7local2 = __s7local1[__s7local0];
      if (__s7local2 !== undefined && __s7local2.GEID == __s7param0) {
        return __s7local2;
      }
    }
    return null;
  };
  GlobalEffectBuffEventVO.prototype.getBoostC2CostForGlobalEffect = function (__s12param0) {
    if (this.getBoostValues(__s12param0)) {
      return this.getBoostValues(__s12param0).C2;
    } else {
      return 0;
    }
  };
  GlobalEffectBuffEventVO.prototype.getBoostValueForGlobalEffect = function (__s16param0) {
    if (this.getBoostValues(__s16param0)) {
      return this.getBoostValues(__s16param0).BV;
    } else {
      return 0;
    }
  };
  GlobalEffectBuffEventVO.prototype.isEffectBoostable = function (__s20param0) {
    return !!this.getBoostValues(__s20param0);
  };
  return GlobalEffectBuffEventVO;
}(__dep_export_ATriggerEventVO.ATriggerEventVO);
exports.GlobalEffectBuffEventVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable");
