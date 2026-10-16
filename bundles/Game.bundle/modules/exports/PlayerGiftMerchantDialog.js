Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstPackages = require("gge-module:export_ClientConstPackages");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGenericMerchantDialog = require("gge-module:export_CastleGenericMerchantDialog");
var __dep_export_PackageTabComponent = require("gge-module:export_PackageTabComponent");
var __s0local0 = function (__s1param0) {
  function PlayerGiftMerchantDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, PlayerGiftMerchantDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(PlayerGiftMerchantDialog, __s1param0);
  PlayerGiftMerchantDialog.prototype.hideLoaded = function (__s5param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s5param0);
    this.tabs.hide();
  };
  PlayerGiftMerchantDialog.prototype.showLoaded = function (__s7param0 = null) {
    var __s7local0 = this.packageContainer.getVisiblePackages(__dep_export_CastleModel.CastleModel.userData.userLevel, __dep_export_CastleModel.CastleModel.userData.userLegendLevel, __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.areaType);
    this.tabs.updateTabsEnablement(__s7local0);
    this.tabs.show();
    __s1param0.prototype.showLoaded.call(this, __s7param0);
  };
  PlayerGiftMerchantDialog.prototype.initLoaded = function (__s9param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s9param0);
    this.tabs = new __dep_export_PackageTabComponent.PackageTabComponent(this.dialogDisp, this.bindFunction(this.onFilterChanged));
    this.tabs.addTab(this.dialogDisp.tabAll, "dialog_giftTrader_allGifts_tooltip", function (__s11param0) {
      return true;
    });
    this.tabs.addTab(this.dialogDisp.tabRes, "dialog_giftTrader_resources_tooltip", function (__s13param0) {
      return __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s13param0.reward, "ACollectableItemResourceVO");
    });
    this.tabs.addTab(this.dialogDisp.tabGold, "dialog_giftTrader_coins_tooltip", function (__s15param0) {
      return __s15param0.reward.itemType == __dep_export_CollectableEnum.CollectableEnum.C1;
    });
    this.tabs.addTab(this.dialogDisp.tabTool, "dialog_giftTrader_toolsAndUnits_tooltip", function (__s17param0) {
      return __s17param0.packageType == __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_TOOL || __s17param0.packageType == __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_SOLDIER;
    });
    this.tabs.addTab(this.dialogDisp.tabEquipment, "dialog_giftTrader_equipment_tooltip", function (__s19param0) {
      return __s19param0.packageType == __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_ITEM || __s19param0.packageType == __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_GEM || __s19param0.packageType == __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_HERO;
    });
    this.tabs.init();
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_giftTrader_desc"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_giftTrader_infoGraphic_tooltip"));
    this.dialogDisp.btn_help.toolTipText = "generic_help";
  };
  Object.defineProperty(PlayerGiftMerchantDialog.prototype, "merchantScrollItem", {
    get: function () {
      return __dep_export_PlayerGiftMerchantScrollItem.PlayerGiftMerchantScrollItem;
    },
    set: function (__s23param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleGenericMerchantDialog.CastleGenericMerchantDialog.prototype, "merchantScrollItem").set.call(this, __s23param0);
    },
    enumerable: true,
    configurable: true
  });
  PlayerGiftMerchantDialog.prototype.onClick = function (__s25param0) {
    __s1param0.prototype.onClick.call(this, __s25param0);
    switch (__s25param0.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        return;
      case this.dialogDisp.btn_help:
        this.onHelpButton();
    }
  };
  PlayerGiftMerchantDialog.prototype.onHelpButton = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_giftTrader"));
  };
  PlayerGiftMerchantDialog.prototype.initBasicButtons = function (__s30param0) {
    __s30param0 = __s30param0.concat([this.dialogDisp.btn_close, this.dialogDisp.itemList.btn_up, this.dialogDisp.itemList.btn_down, this.dialogDisp.btn_help]);
    __s1param0.prototype.initBasicButtons.call(this, __s30param0);
  };
  PlayerGiftMerchantDialog.prototype.createScrollItem = function (__s32param0) {
    if (this.tabs.isPackageInCurrentTab(__s32param0)) {
      return __s1param0.prototype.createScrollItem.call(this, __s32param0);
    } else {
      return null;
    }
  };
  PlayerGiftMerchantDialog.prototype.onFilterChanged = function () {
    this.buyPackagesComponent.update(0);
  };
  PlayerGiftMerchantDialog.__initialize_static_members = function () {
    PlayerGiftMerchantDialog.NAME = "CastleGiftTraderExternal";
  };
  return PlayerGiftMerchantDialog;
}(__dep_export_CastleGenericMerchantDialog.CastleGenericMerchantDialog);
exports.PlayerGiftMerchantDialog = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_PlayerGiftMerchantScrollItem = require("gge-module:export_PlayerGiftMerchantScrollItem");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
