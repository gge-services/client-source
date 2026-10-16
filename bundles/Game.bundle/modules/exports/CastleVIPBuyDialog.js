Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __s0local0 = function (__s1param0) {
  function CastleVIPBuyDialog() {
    return __s1param0.call(this, CastleVIPBuyDialog.ASSET_NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleVIPBuyDialog, __s1param0);
  CastleVIPBuyDialog.prototype.applyPropertiesLoaded = function (__s5param0 = null) {
    __s1param0.prototype.applyPropertiesLoaded.call(this, __s5param0);
    var __s5local0 = this.dialogProperties.eventPackageVO;
    if (__s5local0.reward.itemType == __dep_export_CollectableEnum.CollectableEnum.VIP_POINTS) {
      if (__s5local0.reward.amount == 1) {
        this.setDescriptionText("dialog_buyVipPoints_chooseAmount_singular_v2");
      } else {
        this.setDescriptionText("dialog_buyVipPoints_chooseAmount_plural_v2", [__s5local0.reward.amount]);
      }
    } else {
      var __s5local1 = this.selectedPackagesAmount * __s5local0.reward.duration / __dep_export_ClientConstTime.ClientConstTime.SECONDS_PER_DAY;
      if (__s5local1 > 1) {
        if (this.selectedPackagesAmount > 1) {
          this.setDescriptionText("dialog_buyVipTime_chooseAmount_plural");
        } else {
          this.setDescriptionText("dialog_buyVipTime_chooseAmount_singular2");
        }
        this.setDescriptionTextParams([this.selectedPackagesAmount, __s5local1]);
      } else {
        this.setDescriptionText("dialog_buyVipTime_chooseAmount_singular1");
      }
    }
  };
  CastleVIPBuyDialog.prototype.getBuyType = function () {
    return __dep_exact_26a421b704832cff.PackageConst.BUY_TYPE_VIP;
  };
  CastleVIPBuyDialog.NAME = "CastleVIPBuy";
  CastleVIPBuyDialog.ASSET_NAME = "CastleResourceMerchantEventBuyExternal";
  return CastleVIPBuyDialog;
}(require("gge-module:export_CastleGenericSliderBuyDialog").CastleGenericSliderBuyDialog);
exports.CastleVIPBuyDialog = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
