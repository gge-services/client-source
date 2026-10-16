Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstPackages = require("gge-module:export_ClientConstPackages");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleGenericSliderBuyDialog = require("gge-module:export_CastleGenericSliderBuyDialog");
var __s0local0 = function (__s1param0) {
  function CastlePlayerGiftMerchantBuyDialog(__s3param0 = CastlePlayerGiftMerchantBuyDialog.NAME) {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePlayerGiftMerchantBuyDialog, __s1param0);
  CastlePlayerGiftMerchantBuyDialog.prototype.showLoaded = function (__s5param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s5param0);
    var __s5local0 = this.packageVO.packageType == __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_ITEM || this.packageVO.packageType == __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_GEM || this.packageVO.packageType == __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_HERO;
    this.dialogDisp.mc_ring.visible = !__s5local0;
  };
  Object.defineProperty(CastlePlayerGiftMerchantBuyDialog.prototype, "physicalPackageLimit", {
    get: function () {
      return Math.min(this.packageVO.maxBuyPerClick, __dep_exact_26a421b704832cff.PackageConst.MAX_PLAYER_GIFT_STORAGE - __dep_export_CastleModel.CastleModel.playerGiftData.giftPackagesInInventoryAmount, this.packageVO.remainingStock);
    },
    set: function (__s9param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleGenericSliderBuyDialog.CastleGenericSliderBuyDialog.prototype, "physicalPackageLimit").set.call(this, __s9param0);
    },
    enumerable: true,
    configurable: true
  });
  CastlePlayerGiftMerchantBuyDialog.prototype.handleBuyButton = function () {
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_ok, true);
  };
  CastlePlayerGiftMerchantBuyDialog.__initialize_static_members = function () {
    CastlePlayerGiftMerchantBuyDialog.NAME = "CastlePlayerGiftMerchantBuyDialogExternal";
  };
  return CastlePlayerGiftMerchantBuyDialog;
}(__dep_export_CastleGenericSliderBuyDialog.CastleGenericSliderBuyDialog);
exports.CastlePlayerGiftMerchantBuyDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
