Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function () {
  function EffectValueSimple() {
    this._value = 0;
  }
  EffectValueSimple.prototype.parseFromValueString = function (__s5param0) {
    this._value = parseFloat(__s5param0);
    return this;
  };
  EffectValueSimple.prototype.parseFromValueArray = function (__s7param0) {
    this._value = parseFloat(__s7param0[0]);
    return this;
  };
  EffectValueSimple.prototype.add = function (__s9param0, __s9param1) {
    this._value = __s9param1 ? Math.min(__s9param1[0], this._value + __s9param0.rawValues[0]) : this._value + __s9param0.rawValues[0];
    return this;
  };
  Object.defineProperty(EffectValueSimple.prototype, "textReplacements", {
    get: function () {
      return [new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__dep_exact_9e901e8e2483a22f.MathBase.round(Math.abs(this._value), 2), true, 2)];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EffectValueSimple.prototype, "rawValues", {
    get: function () {
      return [this._value];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EffectValueSimple.prototype, "strength", {
    get: function () {
      return this._value;
    },
    enumerable: true,
    configurable: true
  });
  EffectValueSimple.prototype.clone = function () {
    return new EffectValueSimple().parseFromValueArray(this.rawValues);
  };
  EffectValueSimple.prototype.getContextTextReplacements = function (__s19param0) {
    return this.textReplacements;
  };
  return EffectValueSimple;
}();
exports.EffectValueSimple = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEffectValue");
