Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleConnectToSpecialServerCommand = require("gge-module:export_CastleConnectToSpecialServerCommand");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __s0local0 = function (__s1param0) {
  function CastleConnectToTemporaryServerCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleConnectToTemporaryServerCommand, __s1param0);
  CastleConnectToTemporaryServerCommand.prototype.setConnectFlag = function () {
    __dep_export_CastleModel.CastleModel.userData.connectToTempServer = true;
  };
  Object.defineProperty(CastleConnectToTemporaryServerCommand.prototype, "externalServerID", {
    get: function () {
      return __dep_exact_26a421b704832cff.GlobalServerConst.TEMP_SERVER;
    },
    set: function (__s9param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleConnectToSpecialServerCommand.CastleConnectToSpecialServerCommand.prototype, "externalServerID").set.call(this, __s9param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleConnectToTemporaryServerCommand.prototype, "blockerTextID", {
    get: function () {
      return "dialog_clientVersion_switch_confirmDialog_tempServer_mandatory_HTML5_copy";
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleConnectToSpecialServerCommand.CastleConnectToSpecialServerCommand.prototype, "blockerTextID").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  return CastleConnectToTemporaryServerCommand;
}(__dep_export_CastleConnectToSpecialServerCommand.CastleConnectToSpecialServerCommand);
exports.CastleConnectToTemporaryServerCommand = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleCommand");
