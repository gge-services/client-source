Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_ABGHelper = require("gge-module:export_ABGHelper");
var __dep_export_TempServerHelper = require("gge-module:export_TempServerHelper");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __s0local0 = function (__s1param0) {
  function TCCCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(TCCCommand, __s1param0);
  Object.defineProperty(TCCCommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_SET_BOUGHT_SPECIAL_SERVER_CASTLES;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  TCCCommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    switch (__s9param0) {
      case __dep_exact_26a421b704832cff_1.ERROR.ALL_OK:
        var __s9local0 = JSON.parse(__s9param1[1]);
        var __s9local1 = __dep_exact_f855840627e6e145.int(__s9local0[__dep_exact_26a421b704832cff.CommKeys.TEMP_SERVER_CAMP_ID]);
        var __s9local2 = __dep_exact_f855840627e6e145.int(__s9local0[__dep_exact_26a421b704832cff.CommKeys.ALLIANCE_BATTLEGROUND_CAMP_ID]);
        if (__dep_export_TempServerHelper.TempServerHelper.tmpServerEvent) {
          __dep_export_TempServerHelper.TempServerHelper.tmpServerEvent.castleBought = __s9local1 > 0;
        }
        if (__dep_export_ABGHelper.ABGHelper.abgEvent) {
          __dep_export_ABGHelper.ABGHelper.abgEvent.castleBought = __s9local2 > 0;
        }
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  };
  return TCCCommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.TCCCommand = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IExecCommand");
