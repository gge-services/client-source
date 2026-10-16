Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGetTaxDialogProperties = require("gge-module:export_CastleGetTaxDialogProperties");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __s0local0 = function (__s1param0) {
  function TXCCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(TXCCommand, __s1param0);
  Object.defineProperty(TXCCommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_COLLECT_TAX;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  TXCCommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    switch (__s9param0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        var __s9local0 = JSON.parse(__s9param1[1]);
        __dep_export_CastleModel.CastleModel.currencyData.parseGCU(__s9local0.gcu);
        __dep_export_CastleModel.CastleModel.taxData.parse_TXI(__s9local0.txi);
        var __s9local1 = __dep_exact_f855840627e6e145.int(__s9local0.CT);
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleGetTaxDialog.CastleGetTaxDialog, new __dep_export_CastleGetTaxDialogProperties.CastleGetTaxDialogProperties(__s9local1));
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  };
  return TXCCommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.TXCCommand = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleGetTaxDialog = require("gge-module:export_CastleGetTaxDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IExecCommand");
