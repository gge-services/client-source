Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_FNMCommand = require("gge-module:export_FNMCommand");
var __s0local0 = function (__s1param0) {
  function FECCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FECCommand, __s1param0);
  Object.defineProperty(FECCommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_FIND_NEXT_ENEMY_CASTLE;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_FNMCommand.FNMCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  return FECCommand;
}(__dep_export_FNMCommand.FNMCommand);
exports.FECCommand = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IExecCommand");
