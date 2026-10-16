Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ModernPackageShopResourceTipDialog = require("gge-module:export_ModernPackageShopResourceTipDialog");
var __dep_export_ModernPackageShopResourceTipDialogProperties = require("gge-module:export_ModernPackageShopResourceTipDialogProperties");
var __dep_export_CostHelper = require("gge-module:export_CostHelper");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __s0local0 = function (__s1param0) {
  function SBPCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SBPCommand, __s1param0);
  Object.defineProperty(SBPCommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_BUY_EVENTPACKAGE;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  SBPCommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    var __s9local0;
    switch (__s9param0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        __s9local0 = JSON.parse(__s9param1[1]);
        __dep_export_CastleModel.CastleModel.currencyData.parseGCU(__s9local0.gcu);
        __dep_export_CastleModel.CastleModel.militaryData.parse_GUI(__s9local0.gui);
        if (__dep_export_CastleModel.CastleModel.areaData.activeArea) {
          __dep_export_CastleModel.CastleModel.areaData.activeArea.updater.parseGRC(__s9local0.grc);
        }
        __dep_export_CastleModel.CastleModel.spyData.parse_CPI(__s9local0.cpi);
        __dep_export_CastleModel.CastleModel.decoStorage.parseSIN(__s9local0.sin);
        __dep_export_CastleModel.CastleModel.vipData.parse_VIP(__s9local0.vip);
        __dep_export_CastleModel.CastleModel.eventPackageData.parseBoughtCount(__s9local0);
        break;
      case __dep_exact_26a421b704832cff.ERROR.NOT_ENOUGH_SPECIAL_CURRENCY:
        if (__s9param1.length) {
          __s9local0 = JSON.parse(__s9param1[1]);
          var __s9local1 = __dep_export_CastleModel.CastleModel.eventPackageData.getEventPackageByID(__s9local0.PID);
          var __s9local2 = new __dep_export_ModernPackageShopResourceTipDialogProperties.ModernPackageShopResourceTipDialogProperties(__s9local1);
          if (__s9local2.isHandledByTipDialog()) {
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_ModernPackageShopResourceTipDialog.ModernPackageShopResourceTipDialog, __s9local2);
          } else {
            __dep_export_CostHelper.CostHelper.showNotEnoughSpecialCurrencyDialog(__s9local2.extractCurrencyIds());
          }
          break;
        }
        this.showErrorDialog(__s9param0, __s9param1);
        break;
      case __dep_exact_26a421b704832cff.ERROR.STORAGE_CAPACITY_REACHED:
        this.showCustomErrorDialog("dialog_storageFull");
        break;
      case __dep_exact_26a421b704832cff.ERROR.PLAYER_GIFT_STORAGE_FULL:
        if (__dep_export_CastleModel.CastleModel.playerGiftData.giftPackagesInInventoryAmount < __dep_exact_26a421b704832cff_1.PackageConst.MAX_PLAYER_GIFT_STORAGE) {
          this.showCustomErrorDialog("giftTrader_inventoryNotEnoughSpace", [__dep_exact_26a421b704832cff_1.PackageConst.MAX_PLAYER_GIFT_STORAGE - __dep_export_CastleModel.CastleModel.playerGiftData.giftPackagesInInventoryAmount]);
        } else {
          this.showCustomErrorDialog("giftTrader_inventoryLimitReached", [__dep_exact_26a421b704832cff_1.PackageConst.MAX_PLAYER_GIFT_STORAGE]);
        }
        break;
      case __dep_exact_26a421b704832cff.ERROR.CONSTRUCTION_ITEM_INVENTORY_FULL:
        this.showCustomErrorDialog("alert_ci_inventoryFull_copy");
        break;
      case __dep_exact_26a421b704832cff.ERROR.CONSTRUCTION_ITEM_INVENTORY_MAX_AMOUNT_REACHED:
        this.showCustomErrorDialog("alert_ci_itemInventoryFull_copy");
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  };
  SBPCommand.prototype.showCustomErrorDialog = function (__s18param0, __s18param1 = null) {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_watchout"), __dep_exact_92d05af59ee2ff30.Localize.text(__s18param0, __s18param1)));
  };
  return SBPCommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.SBPCommand = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IExecCommand");
