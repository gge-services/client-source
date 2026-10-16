Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __s0local0 = function (__s1param0) {
  function IRCCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IRCCommand, __s1param0);
  Object.defineProperty(IRCCommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_RESOURCE_CITIZEN;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  IRCCommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    switch (__s9param0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        var __s9local0;
        if (__dep_export_Iso.Iso.renderer && __dep_export_CastleModel.CastleModel.resourcePoolData.ownerMovementVO) {
          __s9local0 = __dep_exact_81dacdf05bd32292.castAs(__dep_export_Iso.Iso.renderer.objects.provider.getObjectByVO(__dep_export_CastleModel.CastleModel.resourcePoolData.ownerMovementVO), "AIsoMovementVE");
        }
        var __s9local1 = JSON.parse(__s9param1[1]);
        __dep_export_CastleModel.CastleModel.resourcePoolData.parseIRC(__s9local1);
        if (__s9local0) {
          __s9local0.updateResourceIcon();
        }
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  };
  return IRCCommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.IRCCommand = __s0local0;
var __dep_export_Iso = require("gge-module:export_Iso");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "IExecCommand");
