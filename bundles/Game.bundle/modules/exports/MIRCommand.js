Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __s0local0 = function (__s1param0) {
  function MIRCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(MIRCommand, __s1param0);
  Object.defineProperty(MIRCommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_RENAME_CASTLE_INVITATION;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  MIRCommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    var __s9local0 = JSON.parse(__s9param1[1]);
    __dep_export_CastleModel.CastleModel.userData.parse_MIR(__s9local0);
    __dep_export_CastleModel.CastleModel.userData.parse_MIR_openDialog(__s9local0);
    return true;
  };
  return MIRCommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.MIRCommand = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IExecCommand");
