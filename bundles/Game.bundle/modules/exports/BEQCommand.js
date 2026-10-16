Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleEquipmentFactory = require("gge-module:export_CastleEquipmentFactory");
var __dep_export_CastleEquipmentMerchantEventIncomingDialogProperties = require("gge-module:export_CastleEquipmentMerchantEventIncomingDialogProperties");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __s0local0 = function (__s1param0) {
  function BEQCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(BEQCommand, __s1param0);
  Object.defineProperty(BEQCommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_BOUGHT_EQUIPMENT;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  BEQCommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    switch (__s9param0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        var __s9local0 = JSON.parse(__s9param1[1]);
        var __s9local1 = new __dep_export_CastleEquipmentMerchantEventIncomingDialogProperties.CastleEquipmentMerchantEventIncomingDialogProperties();
        __s9local1.inventory = BEQCommand.parseEquipmentInventory(__s9local0.I);
        __s9local1.packageID = parseInt(__s9local0.PID);
        __s9local1.fromEventID = parseInt(__s9local0.TID);
        __s9local1.fromBuyType = parseInt(__s9local0.BT);
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleEquipmentMerchantEventIncomingDialog.CastleEquipmentMerchantEventIncomingDialog, __s9local1);
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  };
  BEQCommand.parseEquipmentInventory = function (__s12param0) {
    if (!__s12param0) {
      return null;
    }
    var __s12local0 = [];
    if (__s12param0 != null) {
      for (var __s12local1 = 0, __s12local2 = __s12param0; __s12local1 < __s12local2.length; __s12local1++) {
        var __s12local3 = __s12local2[__s12local1];
        if (__s12local3 !== undefined) {
          var __s12local4 = __dep_export_CastleEquipmentFactory.CastleEquipmentFactory.createEquipmentVO(__s12local3);
          __s12local0.push(__s12local4);
        }
      }
    }
    return __s12local0;
  };
  return BEQCommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.BEQCommand = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleEquipmentMerchantEventIncomingDialog = require("gge-module:export_CastleEquipmentMerchantEventIncomingDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IExecCommand");
