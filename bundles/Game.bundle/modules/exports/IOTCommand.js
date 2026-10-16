Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __s0local0 = function (__s1param0) {
  function IOTCommand() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IOTCommand, __s1param0);
  Object.defineProperty(IOTCommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_INFO_ON_TITLES;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  IOTCommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    if (__s9param0 == __dep_exact_26a421b704832cff.ERROR.ALL_OK) {
      var __s9local0 = JSON.parse(__s9param1[1]);
      __dep_export_CastleModel.CastleModel.titleData.parseIOT(__s9local0);
    }
    return false;
  };
  return IOTCommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.IOTCommand = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IExecCommand");
