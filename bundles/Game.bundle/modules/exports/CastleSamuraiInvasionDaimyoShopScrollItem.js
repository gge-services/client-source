Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_AMerchantScrollItem = require("gge-module:export_AMerchantScrollItem");
var __s0local0 = function (__s1param0) {
  function CastleSamuraiInvasionDaimyoShopScrollItem(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSamuraiInvasionDaimyoShopScrollItem, __s1param0);
  Object.defineProperty(CastleSamuraiInvasionDaimyoShopScrollItem.prototype, "dialogKey", {
    get: function () {
      return __dep_export_ModernPackageShopBuyDialog.ModernPackageShopBuyDialog;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AMerchantScrollItem.AMerchantScrollItem.prototype, "dialogKey").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleSamuraiInvasionDaimyoShopScrollItem.prototype.handleReward = function () {
    this.rewardRenderer = new __dep_export_CollectableRenderer.CollectableRenderer(new __dep_export_CollectableRenderClips.CollectableRenderClips(this._disp.mc_reward), new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON | __dep_export_CollectableRenderOptions.CollectableRenderOptions.TEXTFIELD | __dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON_TRANSFORM, this.rewardIconSize));
    if (this.packageScrollItemVO.eventPackageVO.reward) {
      var __s9local0 = this.rewardRenderer.getRenderer(__dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON_TRANSFORM);
      if (this.packageScrollItemVO.eventPackageVO.reward.itemType == __dep_export_CollectableEnum.CollectableEnum.CONSTRUCTION_ITEM) {
        __s9local0.transform.offset.y = -3;
        __s9local0.transform.scale = 0.95;
      } else {
        __s9local0.transform.offset.y = 0;
      }
    }
    this.rewardRenderer.options.textfield.forceRender = true;
    this.rewardRenderer.updateWithNewVO(this.packageScrollItemVO.eventPackageVO.reward);
  };
  return CastleSamuraiInvasionDaimyoShopScrollItem;
}(__dep_export_AMerchantScrollItem.AMerchantScrollItem);
exports.CastleSamuraiInvasionDaimyoShopScrollItem = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableRenderer = require("gge-module:export_CollectableRenderer");
var __dep_export_ModernPackageShopBuyDialog = require("gge-module:export_ModernPackageShopBuyDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "MovieClip");
