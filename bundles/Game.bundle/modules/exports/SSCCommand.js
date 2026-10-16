Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_ModernYesNoDialog = require("gge-module:export_ModernYesNoDialog");
var __dep_export_C2SSaveShoppingCartVO = require("gge-module:export_C2SSaveShoppingCartVO");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __s0local0 = function (__s1param0) {
  function SSCCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SSCCommand, __s1param0);
  Object.defineProperty(SSCCommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_SAVE_SHOPPING_CART;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  SSCCommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    var __s9local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_SHOPPING_CART_PRIMEDAY);
    switch (__s9param0) {
      case __dep_exact_26a421b704832cff_1.ERROR.ALL_OK:
        if (__s9local0) {
          var __s9local1 = __s9local0.shoppingCartOptionsIdsByCategory.reduce(function (__s13param0, __s13param1) {
            return __s13param0.concat(__s13param1);
          }, []);
          __s9local0.shoppingCartOptionIds = __s9local1;
        }
        break;
      case __dep_exact_26a421b704832cff_1.ERROR.NO_SPACE_WARNING:
        if (__s9local0) {
          var __s9local2 = __s9local0.shoppingCartOptionsIdsByCategory;
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_ModernYesNoDialog.ModernYesNoDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardYesNoDialogProperties("generic_alert_watchout", "generic_timeSkips_inventoryFull_warning_desc", function () {
            var __s16local0 = new __dep_export_C2SSaveShoppingCartVO.C2SSaveShoppingCartVO(__s9local2, true);
            __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(__s16local0);
          }));
        }
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.SSC_ARRIVED, [__s9param0]));
    return false;
  };
  return SSCCommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.SSCCommand = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IExecCommand");
