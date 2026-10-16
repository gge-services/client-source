Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleSkipBuildingDialogProperties = require("gge-module:export_CastleSkipBuildingDialogProperties");
var __dep_export_C2SIsoDisassembleObjectVO = require("gge-module:export_C2SIsoDisassembleObjectVO");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __s0local0 = function (__s1param0) {
  function EDOCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(EDOCommand, __s1param0);
  Object.defineProperty(EDOCommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_DISASSEMBLE_OBJECT;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  EDOCommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    var __s9local0;
    switch (__s9param0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        __s9local0 = JSON.parse(__s9param1[1]);
        __dep_export_CastleModel.CastleModel.areaData.activeArea.updater.parseEDO(__s9local0);
        break;
      case __dep_exact_26a421b704832cff.ERROR.NO_FREE_CONSTRUCTION_SLOT:
        __s9local0 = JSON.parse(__s9param1[1]);
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleSkipBuildingDialog.CastleSkipBuildingDialog, new __dep_export_CastleSkipBuildingDialogProperties.CastleSkipBuildingDialogProperties(new __dep_export_C2SIsoDisassembleObjectVO.C2SIsoDisassembleObjectVO(__s9local0.OID), __s9local0.WID));
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  };
  return EDOCommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.EDOCommand = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleSkipBuildingDialog = require("gge-module:export_CastleSkipBuildingDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IExecCommand");
