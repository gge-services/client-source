Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleSpyinfoDetailsDialogProperties = require("gge-module:export_CastleSpyinfoDetailsDialogProperties");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __s0local0 = function (__s1param0) {
  function SSUCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SSUCommand, __s1param0);
  Object.defineProperty(SSUCommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_SPY_SPY_UNITS;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  SSUCommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    switch (__s9param0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        var __s9local0 = JSON.parse(__s9param1[1]);
        var __s9local1 = new __dep_export_CastleSpyLogVO.CastleSpyLogVO();
        __s9local1.parseSpyLog(__s9local0);
        var __s9local2 = __dep_exact_81dacdf05bd32292.castAs(__dep_export_CastleModel.CastleModel.worldmapData.areaTiles.getVOForAreaByXY(__s9local1.areaPosX, __s9local1.areaPosY), "InteractiveMapobjectVO");
        if (__s9local2) {
          __s9local1.mapobjectVO = __s9local2;
        }
        var __s9local3 = new __dep_export_AMessageSpyVO.AMessageSpyVO();
        __s9local3.forwarded = false;
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleSpyinfoDetailsDialog.CastleSpyinfoDetailsDialog, new __dep_export_CastleSpyinfoDetailsDialogProperties.CastleSpyinfoDetailsDialogProperties(__s9local1, __s9local3, null));
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  };
  return SSUCommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.SSUCommand = __s0local0;
var __dep_export_AMessageSpyVO = require("gge-module:export_AMessageSpyVO");
var __dep_export_CastleSpyLogVO = require("gge-module:export_CastleSpyLogVO");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleSpyinfoDetailsDialog = require("gge-module:export_CastleSpyinfoDetailsDialog");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "IExecCommand");
