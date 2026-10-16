Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_EffectValueWodID = require("gge-module:export_EffectValueWodID");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __s0local0 = function (__s1param0) {
  function EffectValueCurrencyBoost() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(EffectValueCurrencyBoost, __s1param0);
  EffectValueCurrencyBoost.prototype.parseFromValueArray = function (__s5param0) {
    this._wodIdToValueDict = new Map();
    if (__s5param0 != null) {
      if (Array.isArray(__s5param0[__dep_export_EffectValueWodID.EffectValueWodID.WOD_ID_POSITION])) {
        this._wodIdToValueDict.set(parseInt(__s5param0[0][__dep_export_EffectValueWodID.EffectValueWodID.WOD_ID_POSITION]), parseInt(__s5param0[0][__dep_export_EffectValueWodID.EffectValueWodID.VALUE_POSITION]));
      } else {
        this._wodIdToValueDict.set(parseInt(__s5param0[__dep_export_EffectValueWodID.EffectValueWodID.WOD_ID_POSITION]), parseInt(__s5param0[__dep_export_EffectValueWodID.EffectValueWodID.VALUE_POSITION]));
      }
      this._firstWodID = parseInt(__s5param0[__dep_export_EffectValueWodID.EffectValueWodID.WOD_ID_POSITION]);
    }
    return this;
  };
  Object.defineProperty(EffectValueCurrencyBoost.prototype, "textReplacements", {
    get: function () {
      var __s10local0;
      try {
        __s10local0 = __dep_exact_92d05af59ee2ff30.Localize.text(__dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, 0, this.firstWodID).getNameTextId());
      } catch (__s13local0) {
        throw new Error(__dep_export_ClientConstUtils.ClientConstUtils.map2String(this._wodIdToValueDict) + "\n" + __s13local0.toString());
      }
      return [__dep_exact_9e901e8e2483a22f.MathBase.round(Math.abs(this.getValueforWodId(this.firstWodID)), 1), __s10local0];
    },
    enumerable: true,
    configurable: true
  });
  return EffectValueCurrencyBoost;
}(__dep_export_EffectValueWodID.EffectValueWodID);
exports.EffectValueCurrencyBoost = __s0local0;
