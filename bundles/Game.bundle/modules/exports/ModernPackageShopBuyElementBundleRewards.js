Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_SimpleScrollComponent = require("gge-module:export_SimpleScrollComponent");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_DynamicSizeScrollStrategyVertical = require("gge-module:export_DynamicSizeScrollStrategyVertical");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_export_AModernPackageShopBuyElement = require("gge-module:export_AModernPackageShopBuyElement");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function ModernPackageShopBuyElementBundleRewards() {
    var __s3local0 = this;
    __s3local0._rewardItems = [];
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ModernPackageShopBuyElementBundleRewards, __s1param0);
  ModernPackageShopBuyElementBundleRewards.prototype.init = function (__s5param0) {
    __s1param0.prototype.init.call(this, __s5param0);
    this._scrollComponent = new __dep_export_SimpleScrollComponent.SimpleScrollComponent(new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(this.disp.mc_scroll).addMouseWheelElements([this.disp]).addVisualElements([this.disp.mc_scroll]), new __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical(true));
  };
  ModernPackageShopBuyElementBundleRewards.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    this._rewardItems = [];
  };
  ModernPackageShopBuyElementBundleRewards.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScrollValueChanged));
  };
  ModernPackageShopBuyElementBundleRewards.prototype.removeEventListener = function () {
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScrollValueChanged));
    __s1param0.prototype.removeEventListener.call(this);
  };
  ModernPackageShopBuyElementBundleRewards.prototype.update = function () {
    __s1param0.prototype.update.call(this);
    this.updateRewards();
  };
  ModernPackageShopBuyElementBundleRewards.prototype.updateRewards = function () {
    this._rewardItems = [];
    var __s15local0 = this.disp.mc_rewards.mc_items;
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s15local0);
    var __s15local1 = this.getPackageVOs();
    var __s15local2 = 0;
    var __s15local3 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_DEFAULT, new __s0local0(40, 32));
    __s15local3.tooltip.showEquipmentCountdown = false;
    for (var __s15local4 = 0; __s15local4 < __s15local1.length; ++__s15local4) {
      var __s15local5 = __s15local1[__s15local4];
      var __s15local6 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(ModernPackageShopBuyElementBundleRewards.REWARD_ITEM_ASSET_NAME, __dep_exact_9e901e8e2483a22f_1.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__dep_export_ModernPackageShopBuyDialog.ModernPackageShopBuyDialog.NAME), null, 0, false);
      var __s15local7 = __s15local6.currentshownDisplayObject;
      __s15local0.addChild(__s15local7);
      __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, new __dep_export_CollectableRenderClips.CollectableRenderClips(__s15local7.mc_reward).addInfoBtn(__s15local7.btn_info), __s15local5.reward, __s15local3);
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s15local7.txt_text, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s15local5.nameTextID, __s15local5.nameParams)).verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
      this._rewardItems.push(__s15local6);
      __s15local7.x = 0;
      __s15local7.y = __s15local2;
      __s15local2 += __dep_exact_f855840627e6e145.int(__s15local7.height + ModernPackageShopBuyElementBundleRewards.REWARD_ITEM_DISTANCE_Y);
    }
    var __s15local8 = this.disp.mc_rewards.mc_items.getBounds(null);
    this._scrollComponent.init(0, Math.max(__s15local8.height - ModernPackageShopBuyElementBundleRewards.REWARDS_MASK_HEIGHT, 0), 10, 10);
    this._scrollComponent.show();
    this._scrollComponent.scrollToPercent(0);
    this._scrollComponent.setVisibility(__s15local8.height > ModernPackageShopBuyElementBundleRewards.REWARDS_MASK_HEIGHT);
  };
  ModernPackageShopBuyElementBundleRewards.prototype.getPackageVOs = function () {
    var __s19local0 = [];
    for (var __s19local1 = 0; __s19local1 < this.parentDialog.dialogProperties.eventPackageVO.bundlePackageIds.length; ++__s19local1) {
      __s19local0.push(__dep_export_CastleModel.CastleModel.eventPackageData.getEventPackageByID(this.parentDialog.dialogProperties.eventPackageVO.bundlePackageIds[__s19local1]));
    }
    return __s19local0;
  };
  ModernPackageShopBuyElementBundleRewards.prototype.getDispHeight = function () {
    return 225;
  };
  ModernPackageShopBuyElementBundleRewards.prototype.onScrollValueChanged = function () {
    this.disp.mc_rewards.mc_items.y = -this._scrollComponent.currentValue;
  };
  ModernPackageShopBuyElementBundleRewards.REWARD_ITEM_ASSET_NAME = "ModernPackageShopBuy_BundleItem";
  ModernPackageShopBuyElementBundleRewards.REWARD_ITEM_DISTANCE_Y = 7;
  ModernPackageShopBuyElementBundleRewards.REWARDS_MASK_HEIGHT = 210.95;
  return ModernPackageShopBuyElementBundleRewards;
}(__dep_export_AModernPackageShopBuyElement.AModernPackageShopBuyElement);
exports.ModernPackageShopBuyElementBundleRewards = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_ModernPackageShopBuyDialog = require("gge-module:export_ModernPackageShopBuyDialog");
