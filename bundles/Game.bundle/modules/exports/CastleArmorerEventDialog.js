Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstPackages = require("gge-module:export_ClientConstPackages");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_export_CastleGenericMerchantDialog = require("gge-module:export_CastleGenericMerchantDialog");
var __dep_export_PackageTabComponent = require("gge-module:export_PackageTabComponent");
var __s0local0 = function (__s1param0) {
  function CastleArmorerEventDialog(__s3param0 = null) {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, __s3param0 ?? CastleArmorerEventDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleArmorerEventDialog, __s1param0);
  CastleArmorerEventDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_speechBubble, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_armorerEvent_speechBubble")).verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.tabs = new __dep_export_PackageTabComponent.PackageTabComponent(this.dialogDisp, this.bindFunction(this.onTabChanged));
    this.tabs.addTab(this.dialogDisp.tabAll, "eventBuilding_armorer_tabs_all", function (__s7param0) {
      return true;
    });
    this.tabs.addTab(this.dialogDisp.tabAttack, "eventBuilding_armorer_tabs_attackTools", function (__s9param0) {
      return (__s9param0.packageType == __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_SOLDIER || __s9param0.packageType == __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_TOOL) && __s9param0.reward.unitVO.isOffensive;
    });
    this.tabs.addTab(this.dialogDisp.tabDefence, "eventBuilding_armorer_tabs_defenseTools", function (__s11param0) {
      return (__s11param0.packageType == __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_SOLDIER || __s11param0.packageType == __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_TOOL) && !__s11param0.reward.unitVO.isOffensive;
    });
    this.tabs.addTab(this.dialogDisp.tabConstruction, "eventBuilding_armorer_tabs_construction", function (__s13param0) {
      return __s13param0.packageType == __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_CONSTRUCTION_ITEM || __s13param0.packageType == __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_REWARDBAG;
    });
    this.tabs.init();
  };
  CastleArmorerEventDialog.prototype.onTabChanged = function () {
    this.buyPackagesComponent.update(0);
  };
  Object.defineProperty(CastleArmorerEventDialog.prototype, "merchantScrollItem", {
    get: function () {
      return __dep_export_ArmorerMerchantScrollItem.ArmorerMerchantScrollItem;
    },
    set: function (__s19param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleGenericMerchantDialog.CastleGenericMerchantDialog.prototype, "merchantScrollItem").set.call(this, __s19param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleArmorerEventDialog.prototype.createScrollItem = function (__s21param0) {
    if (this.tabs.isPackageInCurrentTab(__s21param0)) {
      return __s1param0.prototype.createScrollItem.call(this, __s21param0);
    } else {
      return null;
    }
  };
  CastleArmorerEventDialog.prototype.hideLoaded = function (__s25param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s25param0);
    this.tabs.hide();
  };
  CastleArmorerEventDialog.prototype.showLoaded = function (__s27param0 = null) {
    this.tabs.show();
    this.tabs.updateTabsEnablement(this.packageContainer.getVisiblePackages(__dep_export_CastleModel.CastleModel.userData.userLevel, __dep_export_CastleModel.CastleModel.userData.userLegendLevel, __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.areaType));
    __s1param0.prototype.showLoaded.call(this, __s27param0);
  };
  CastleArmorerEventDialog.__initialize_static_members = function () {
    CastleArmorerEventDialog.NAME = "CastleArmorerEventExternal";
  };
  return CastleArmorerEventDialog;
}(__dep_export_CastleGenericMerchantDialog.CastleGenericMerchantDialog);
exports.CastleArmorerEventDialog = __s0local0;
var __dep_export_ArmorerMerchantScrollItem = require("gge-module:export_ArmorerMerchantScrollItem");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
