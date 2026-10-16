Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleBuySlotAndUnitDialogProperties = require("gge-module:export_CastleBuySlotAndUnitDialogProperties");
var __dep_export_CastleNoMoneyC2DialogProperties = require("gge-module:export_CastleNoMoneyC2DialogProperties");
var __dep_export_C2SBuyUnitPackageVO = require("gge-module:export_C2SBuyUnitPackageVO");
var __dep_export_C2SUnlockPackageSlotVO = require("gge-module:export_C2SUnlockPackageSlotVO");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __s0local0 = function (__s1param0) {
  function BUPCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(BUPCommand, __s1param0);
  Object.defineProperty(BUPCommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_BUY_UNIT_PACKAGE;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  BUPCommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    var __s9local0;
    switch (__s9param0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        __s9local0 = JSON.parse(__s9param1[1]);
        __dep_export_CastleModel.CastleModel.militaryData.parse_SPL(__s9local0.spl);
        if (__dep_export_CastleModel.CastleModel.areaData.activeArea) {
          __dep_export_CastleModel.CastleModel.areaData.activeArea.updater.parseGRC(__s9local0.grc);
        }
        __dep_export_CastleModel.CastleModel.currencyData.parseGCU(__s9local0.gcu);
        __dep_export_CastleModel.CastleModel.militaryData.parse_GUI(__s9local0.gui);
        if (__s9local0.O && __s9local0.O != 0) {
          __dep_export_CastleModel.CastleModel.militaryData.unitInventory.addUnit(__s9local0.O.W, __s9local0.O.AMT);
        }
        break;
      case __dep_exact_26a421b704832cff.ERROR.NO_FREE_CONSTRUCTION_SLOT:
        __s9local0 = JSON.parse(__s9param1[1]);
        var __s9local1 = __dep_export_CastleModel.CastleModel.wodData.createVObyWOD(__s9local0.WID, __dep_export_CastleWodData.CastleWodData.TYPE_UNIT);
        var __s9local2 = __dep_exact_f855840627e6e145.int(__s9local0.LID);
        var __s9local3 = __dep_exact_f855840627e6e145.int(__s9local0.AMT);
        if (__dep_export_CastleModel.CastleModel.militaryData.getPackageListById(__s9local2).allSlotsBought()) {
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_information"), __dep_exact_92d05af59ee2ff30.Localize.text("alert_no_free_unitslot")));
          return false;
        }
        if (__dep_export_CostHelper.CostHelper.canAfford(__s9local1)) {
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleBuySlotAndUnitDialog.CastleBuySlotAndUnitDialog, new __dep_export_CastleBuySlotAndUnitDialogProperties.CastleBuySlotAndUnitDialogProperties(__s9local1, __s9local2, __s9local3, __dep_export_CastleModel.CastleModel.costsData.getFinalCostsC2(__dep_exact_26a421b704832cff_1.UnitProductionConst.UNLOCK_C2), this.bindFunction(this.onBuyItem)));
        } else {
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_information"), __dep_exact_92d05af59ee2ff30.Localize.text("errorCode_55")));
        }
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  };
  BUPCommand.prototype.onBuyItem = function (__s17param0, __s17param1, __s17param2) {
    if (__dep_export_CastleModel.CastleModel.militaryData.getPackageListById(__s17param1).playerCanBuyNextSlot()) {
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SUnlockPackageSlotVO.C2SUnlockPackageSlotVO(__s17param1));
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SBuyUnitPackageVO.C2SBuyUnitPackageVO(__s17param1, __s17param0.wodId, __s17param2, __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID, __dep_export_CastleModel.CastleModel.permanentCastleData.getCurrentCastle().areaId));
    } else {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleNoMoneyC2Dialog.CastleNoMoneyC2Dialog, new __dep_export_CastleNoMoneyC2DialogProperties.CastleNoMoneyC2DialogProperties());
    }
  };
  return BUPCommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.BUPCommand = __s0local0;
var __dep_export_CastleWodData = require("gge-module:export_CastleWodData");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleBuySlotAndUnitDialog = require("gge-module:export_CastleBuySlotAndUnitDialog");
var __dep_export_CastleNoMoneyC2Dialog = require("gge-module:export_CastleNoMoneyC2Dialog");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
var __dep_export_CostHelper = require("gge-module:export_CostHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IExecCommand");
