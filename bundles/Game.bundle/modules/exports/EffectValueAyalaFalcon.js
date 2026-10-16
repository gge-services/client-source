Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function () {
  function EffectValueAyalaFalcon() {
    this._value = 0;
  }
  EffectValueAyalaFalcon.prototype.parseFromValueString = function (__s5param0) {
    this._value = parseFloat(__s5param0);
    return this;
  };
  EffectValueAyalaFalcon.prototype.parseFromValueArray = function (__s7param0) {
    this._value = parseFloat(__s7param0[0]);
    return this;
  };
  EffectValueAyalaFalcon.prototype.add = function (__s9param0, __s9param1) {
    this._value = __s9param1 ? Math.min(__s9param1[0], this._value + __s9param0.rawValues[0]) : this._value + __s9param0.rawValues[0];
    return this;
  };
  Object.defineProperty(EffectValueAyalaFalcon.prototype, "textReplacements", {
    get: function () {
      var __s11local0 = __dep_exact_9e901e8e2483a22f.MathBase.round(Math.abs(this._value), 1);
      return [__s11local0 > 0 ? " " + __dep_exact_92d05af59ee2ff30.Localize.text("generals_abilities_desc_upgrade_placeholder_1021", [__s11local0]) : ""];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EffectValueAyalaFalcon.prototype, "rawValues", {
    get: function () {
      return [this._value];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EffectValueAyalaFalcon.prototype, "strength", {
    get: function () {
      return this._value;
    },
    enumerable: true,
    configurable: true
  });
  EffectValueAyalaFalcon.prototype.clone = function () {
    return new EffectValueAyalaFalcon().parseFromValueArray(this.rawValues);
  };
  EffectValueAyalaFalcon.prototype.getContextTextReplacements = function (__s19param0) {
    if (typeof __s19param0 == "string" && __s19param0.includes("generals_abilities_desc_short_value_")) {
      var __s19local0 = __dep_exact_9e901e8e2483a22f.MathBase.round(this._value, 1);
      return [__s19local0 > 0 ? __dep_exact_92d05af59ee2ff30.Localize.text("waveX", [__s19local0]) : __dep_exact_92d05af59ee2ff30.Localize.text("preCombat")];
    }
    return this.textReplacements;
  };
  return EffectValueAyalaFalcon;
}();
exports.EffectValueAyalaFalcon = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEffectValue");
