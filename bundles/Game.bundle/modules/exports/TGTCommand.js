Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleTreasureMapEvent = require("gge-module:export_CastleTreasureMapEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __s0local0 = function (__s1param0) {
  function TGTCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(TGTCommand, __s1param0);
  Object.defineProperty(TGTCommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_TREASUREMAP_GOODS_TRANSFER;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  TGTCommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    switch (__s9param0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        var __s9local0 = JSON.parse(__s9param1[1]);
        __dep_export_CastleModel.CastleModel.treasureMapData.parse_TMP(__s9local0.tmp);
        break;
      case __dep_exact_26a421b704832cff.ERROR.NOT_ENOUGH_RESOURCES:
        var __s9local1 = __dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_information");
        var __s9local2 = __dep_exact_92d05af59ee2ff30.Localize.text("errorCode_" + __s9param0) + (__dep_exact_9e901e8e2483a22f_1.EnvGlobalsHandler.globals.isTest || __dep_exact_9e901e8e2483a22f_1.EnvGlobalsHandler.globals.isLocal ? " (" + this.cmdId + ")" : "");
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__s9local1, __s9local2));
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    __dep_export_CastleModel.CastleModel.treasureMapData.dispatchEvent(new __dep_export_CastleTreasureMapEvent.CastleTreasureMapEvent(__dep_export_CastleTreasureMapEvent.CastleTreasureMapEvent.RESOURCE_TRANSFER_DATA_UPDATED, null));
    return true;
  };
  return TGTCommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.TGTCommand = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IExecCommand");
