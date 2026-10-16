Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function () {
  function EffectValueDragonscaleArmor() {
    this._value = 0;
  }
  EffectValueDragonscaleArmor.prototype.parseFromValueString = function (__s5param0) {
    this._value = parseFloat(__s5param0);
    return this;
  };
  EffectValueDragonscaleArmor.prototype.parseFromValueArray = function (__s7param0) {
    this._value = parseFloat(__s7param0[0]);
    return this;
  };
  EffectValueDragonscaleArmor.prototype.add = function (__s9param0, __s9param1) {
    this._value = __s9param1 ? Math.min(__s9param1[0], this._value + __s9param0.rawValues[0]) : this._value + __s9param0.rawValues[0];
    return this;
  };
  Object.defineProperty(EffectValueDragonscaleArmor.prototype, "textReplacements", {
    get: function () {
      return [new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__dep_exact_9e901e8e2483a22f.MathBase.round(Math.abs(this._value), 1), true, 1), new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__dep_exact_9e901e8e2483a22f.MathBase.round(Math.abs(this._value * 2), 1), true, 1)];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EffectValueDragonscaleArmor.prototype, "rawValues", {
    get: function () {
      return [this._value];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EffectValueDragonscaleArmor.prototype, "strength", {
    get: function () {
      return this._value;
    },
    enumerable: true,
    configurable: true
  });
  EffectValueDragonscaleArmor.prototype.clone = function () {
    return new EffectValueDragonscaleArmor().parseFromValueArray(this.rawValues);
  };
  EffectValueDragonscaleArmor.prototype.getContextTextReplacements = function (__s19param0) {
    return this.textReplacements;
  };
  return EffectValueDragonscaleArmor;
}();
exports.EffectValueDragonscaleArmor = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEffectValue");
