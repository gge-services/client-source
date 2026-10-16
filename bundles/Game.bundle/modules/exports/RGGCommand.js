Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleMysteryBoxResultDialogProperties = require("gge-module:export_CastleMysteryBoxResultDialogProperties");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __s0local0 = function (__s1param0) {
  function RGGCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RGGCommand, __s1param0);
  Object.defineProperty(RGGCommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_RECIEVE_GOODGAMES_GIFT;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  RGGCommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    switch (__s9param0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        var __s9local0 = JSON.parse(__s9param1[1]);
        var __s9local1 = __dep_export_CollectableManager.CollectableManager.parser.s2cParamList.createList(__s9local0.R);
        var __s9local2 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_GGS_GIFT);
        var __s9local3 = __dep_exact_f855840627e6e145.int(__s9local2 ? __s9local2.skinID : 0);
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleGGSGiftDialog.CastleGGSGiftDialog, new __dep_export_CastleMysteryBoxResultDialogProperties.CastleMysteryBoxResultDialogProperties(__s9local1, __s9local3));
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return true;
  };
  return RGGCommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.RGGCommand = __s0local0;
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleGGSGiftDialog = require("gge-module:export_CastleGGSGiftDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IExecCommand");
