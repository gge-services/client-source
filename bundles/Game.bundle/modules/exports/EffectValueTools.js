Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_EffectValueSimple = require("gge-module:export_EffectValueSimple");
var __s0local0 = function () {
  function EffectValueTools() {}
  EffectValueTools.prototype.parseFromValueString = function (__s5param0) {
    this._tools = __s5param0.split("#");
    return this;
  };
  EffectValueTools.prototype.parseFromValueArray = function (__s7param0) {
    this._tools = __s7param0;
    return this;
  };
  EffectValueTools.prototype.add = function (__s9param0, __s9param1) {
    this._tools = __s9param0.rawValues;
    return this;
  };
  Object.defineProperty(EffectValueTools.prototype, "textReplacements", {
    get: function () {
      return [""];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EffectValueTools.prototype, "rawValues", {
    get: function () {
      return this._tools;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EffectValueTools.prototype, "strength", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  EffectValueTools.prototype.clone = function () {
    return new __dep_export_EffectValueSimple.EffectValueSimple().parseFromValueArray(this.rawValues);
  };
  EffectValueTools.prototype.getContextTextReplacements = function (__s19param0) {
    return this.textReplacements;
  };
  return EffectValueTools;
}();
exports.EffectValueTools = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEffectValue");
