Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_EffectValueWodID = require("gge-module:export_EffectValueWodID");
var __s0local0 = function (__s1param0) {
  function EffectValueUnitSpeedBoost() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(EffectValueUnitSpeedBoost, __s1param0);
  Object.defineProperty(EffectValueUnitSpeedBoost.prototype, "textReplacements", {
    get: function () {
      return [EffectValueUnitSpeedBoost.SHOWN_BOOSTUNITSPEED_VALUE];
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_EffectValueWodID.EffectValueWodID.prototype, "textReplacements").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  EffectValueUnitSpeedBoost.__initialize_static_members = function () {
    EffectValueUnitSpeedBoost.SHOWN_BOOSTUNITSPEED_VALUE = 20;
  };
  return EffectValueUnitSpeedBoost;
}(__dep_export_EffectValueWodID.EffectValueWodID);
exports.EffectValueUnitSpeedBoost = __s0local0;
__s0local0.__initialize_static_members();
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEffectValue");
