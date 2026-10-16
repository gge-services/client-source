Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_PackagePriceVO = require("gge-module:export_PackagePriceVO");
var __dep_export_CastlePackageEvent = require("gge-module:export_CastlePackageEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleResourceMerchantEventBuyDialog() {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    __s3local0 = __s1param0.call(this, CastleResourceMerchantEventBuyDialog.ASSET_NAME) || this;
    __dep_export_CastleModel.CastleModel.eventPackageData.addEventListener(__dep_export_CastlePackageEvent.CastlePackageEvent.PACKAGEPRICE_GOT, __s3local0.bindFunction(__s3local0.updateFillAllStoragesPackagePrice));
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleResourceMerchantEventBuyDialog, __s1param0);
  CastleResourceMerchantEventBuyDialog.prototype.applyPropertiesLoaded = function (__s5param0 = null) {
    __s1param0.prototype.applyPropertiesLoaded.call(this, __s5param0);
    var __s5local0 = this.dialogProperties.eventPackageVO;
    if (__s5local0.isBannerPackage && __s5local0.fillAllStorages) {
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_PackagePriceVO.PackagePriceVO(this.dialogProperties.eventPackageVO.packageID));
    }
    this.dialogDisp.mc_titleBG.gotoAndStop(1);
  };
  CastleResourceMerchantEventBuyDialog.prototype.updateFillAllStoragesPackagePrice = function (__s8param0) {
    this.handleCost();
  };
  CastleResourceMerchantEventBuyDialog.__initialize_static_members = function () {
    CastleResourceMerchantEventBuyDialog.NAME = "CastleResourceMerchantEventBuy";
    CastleResourceMerchantEventBuyDialog.ASSET_NAME = "CastleResourceMerchantEventBuyExternal";
  };
  return CastleResourceMerchantEventBuyDialog;
}(require("gge-module:export_CastleGenericSliderBuyDialog").CastleGenericSliderBuyDialog);
exports.CastleResourceMerchantEventBuyDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
