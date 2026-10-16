Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_NetworkSettings = require("gge-module:export_NetworkSettings");
var __dep_class_WorldAssignmentGlobals = require("gge-module:class_WorldAssignmentGlobals");
var __s0local0 = function () {
  function Context() {
    this._components = new Map();
  }
  Context.prototype.get = function (__s5param0) {
    var __s5local0;
    __s5local0 = typeof __s5param0 == "function" ? __s5param0.name : __s5param0;
    return this._components.get(__s5local0);
  };
  Context.prototype.set = function (__s7param0, __s7param1) {
    var __s7local0;
    __s7local0 = typeof __s7param1 == "function" ? __s7param1.name : typeof __s7param1 == "string" ? __s7param1 : __s7param0.constructor.name;
    this._components.set(__s7local0, __s7param0);
    if ("initialize" in __s7param0) {
      __s7param0.initialize();
    }
  };
  Object.defineProperty(Context.prototype, "globals", {
    get: function () {
      return this.get(__dep_class_WorldAssignmentGlobals.WorldAssignmentGlobals);
    },
    set: function (__s12param0) {
      this.set(__s12param0, __dep_class_WorldAssignmentGlobals.WorldAssignmentGlobals);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Context.prototype, "networkSettings", {
    get: function () {
      return this.get(__dep_export_NetworkSettings.NetworkSettings);
    },
    set: function (__s16param0) {
      this.set(__s16param0, __dep_export_NetworkSettings.NetworkSettings);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Context, "instance", {
    get: function () {
      return this._instance ||= new this();
    },
    enumerable: true,
    configurable: true
  });
  return Context;
}();
exports.Context = __s0local0;
