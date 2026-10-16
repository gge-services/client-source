Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __s0local0 = function (__s1param0) {
  function ModernPackageShopBuyElementEnum(__s3param0, __s3param1, __s3param2) {
    var __s3local0 = __s1param0.call(this, __s3param0, __dep_exact_9e901e8e2483a22f.BasicEnum.instantiationKey) || this;
    __s3local0._clazz = __s3param1;
    __s3local0._assetClipName = __s3param2;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ModernPackageShopBuyElementEnum, __s1param0);
  ModernPackageShopBuyElementEnum.getTypeByDataClass = function (__s5param0) {
    return this.getByProperty(ModernPackageShopBuyElementEnum, "clazz", __s5param0, ModernPackageShopBuyElementEnum.COMMON_INFO);
  };
  Object.defineProperty(ModernPackageShopBuyElementEnum.prototype, "clazz", {
    get: function () {
      return this._clazz;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ModernPackageShopBuyElementEnum.prototype, "assetClipName", {
    get: function () {
      return this._assetClipName;
    },
    enumerable: true,
    configurable: true
  });
  ModernPackageShopBuyElementEnum.__initialize_static_members = function () {
    ModernPackageShopBuyElementEnum.COMMON_INFO = new ModernPackageShopBuyElementEnum("commonInfo", __dep_export_ModernPackageShopBuyElementCommonInfo.ModernPackageShopBuyElementCommonInfo, "ShopElement_CommonInfo");
    ModernPackageShopBuyElementEnum.COMMON_INFO_RELIC = new ModernPackageShopBuyElementEnum("commonInfoRelic", __dep_export_ModernPackageShopBuyElementCommonInfoRelic.ModernPackageShopBuyElementCommonInfoRelic, "ShopElement_CommonInfoRelic");
    ModernPackageShopBuyElementEnum.COMMON_INFO_BUNDLE = new ModernPackageShopBuyElementEnum("commonInfoBundle", __dep_export_ModernPackageShopBuyElementCommonInfoBundle.ModernPackageShopBuyElementCommonInfoBundle, "ShopElement_CommonInfoBundle");
    ModernPackageShopBuyElementEnum.AMOUNT = new ModernPackageShopBuyElementEnum("amount", __dep_export_ModernPackageShopBuyElementAmount.ModernPackageShopBuyElementAmount, "ShopElement_Amount");
    ModernPackageShopBuyElementEnum.COSTS = new ModernPackageShopBuyElementEnum("costs", __dep_export_ModernPackageShopBuyElementCosts.ModernPackageShopBuyElementCosts, "ShopElement_Costs");
    ModernPackageShopBuyElementEnum.INFO = new ModernPackageShopBuyElementEnum("info", __dep_export_ModernPackageShopBuyElementInfo.ModernPackageShopBuyElementInfo, "ShopElement_Info");
    ModernPackageShopBuyElementEnum.RELIC_INFO = new ModernPackageShopBuyElementEnum("relicInfo", __dep_export_ModernPackageShopBuyElementRelicInfo.ModernPackageShopBuyElementRelicInfo, "ShopElement_RelicInfo");
    ModernPackageShopBuyElementEnum.BUNDLE_REWARDS = new ModernPackageShopBuyElementEnum("bundleRewards", __dep_export_ModernPackageShopBuyElementBundleRewards.ModernPackageShopBuyElementBundleRewards, "ShopElement_BundleRewards");
    ModernPackageShopBuyElementEnum.BOTTOM_MENU = new ModernPackageShopBuyElementEnum("bottomMenu", __dep_export_ModernPackageShopBuyElementBottomMenu.ModernPackageShopBuyElementBottomMenu, "ShopElement_BottomMenu");
  };
  return ModernPackageShopBuyElementEnum;
}(require("gge-module:export_CastleEnum").CastleEnum);
exports.ModernPackageShopBuyElementEnum = __s0local0;
var __dep_export_ModernPackageShopBuyElementAmount = require("gge-module:export_ModernPackageShopBuyElementAmount");
var __dep_export_ModernPackageShopBuyElementBottomMenu = require("gge-module:export_ModernPackageShopBuyElementBottomMenu");
var __dep_export_ModernPackageShopBuyElementBundleRewards = require("gge-module:export_ModernPackageShopBuyElementBundleRewards");
var __dep_export_ModernPackageShopBuyElementCommonInfo = require("gge-module:export_ModernPackageShopBuyElementCommonInfo");
var __dep_export_ModernPackageShopBuyElementCommonInfoBundle = require("gge-module:export_ModernPackageShopBuyElementCommonInfoBundle");
var __dep_export_ModernPackageShopBuyElementCommonInfoRelic = require("gge-module:export_ModernPackageShopBuyElementCommonInfoRelic");
var __dep_export_ModernPackageShopBuyElementCosts = require("gge-module:export_ModernPackageShopBuyElementCosts");
var __dep_export_ModernPackageShopBuyElementInfo = require("gge-module:export_ModernPackageShopBuyElementInfo");
var __dep_export_ModernPackageShopBuyElementRelicInfo = require("gge-module:export_ModernPackageShopBuyElementRelicInfo");
__s0local0.__initialize_static_members();
