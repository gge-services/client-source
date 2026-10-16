Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function () {
  function EffectValueMindClarity() {
    this._values = [];
  }
  EffectValueMindClarity.prototype.parseFromValueString = function (__s5param0) {
    this._values[0] = parseFloat(__s5param0);
    return this;
  };
  EffectValueMindClarity.prototype.parseFromValueArray = function (__s7param0) {
    this._values = __s7param0;
    return this;
  };
  EffectValueMindClarity.prototype.add = function (__s9param0, __s9param1) {
    this._values[0] = __s9param1 ? Math.min(__s9param1[0], this._values[0] + __s9param0.rawValues[0]) : this._values[0] + __s9param0.rawValues[0];
    return this;
  };
  Object.defineProperty(EffectValueMindClarity.prototype, "textReplacements", {
    get: function () {
      var __s11local0 = __dep_exact_9e901e8e2483a22f.MathBase.round(this._values[0], 1);
      var __s11local1 = __dep_exact_9e901e8e2483a22f.MathBase.round(this._values[1], 1);
      return [new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s11local0, true, 1), new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__dep_exact_9e901e8e2483a22f.MathBase.round(__s11local1, 1), true, 1)];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EffectValueMindClarity.prototype, "rawValues", {
    get: function () {
      return this._values;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EffectValueMindClarity.prototype, "strength", {
    get: function () {
      return this._values[0];
    },
    enumerable: true,
    configurable: true
  });
  EffectValueMindClarity.prototype.clone = function () {
    return new EffectValueMindClarity().parseFromValueArray(this.rawValues);
  };
  EffectValueMindClarity.prototype.getContextTextReplacements = function (__s19param0) {
    return this.textReplacements;
  };
  return EffectValueMindClarity;
}();
exports.EffectValueMindClarity = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEffectValue");
