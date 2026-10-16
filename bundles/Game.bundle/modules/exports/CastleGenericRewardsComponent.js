Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_ModernSliderScrollComponent = require("gge-module:export_ModernSliderScrollComponent");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CollectableRenderClipsList = require("gge-module:export_CollectableRenderClipsList");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_ItemCenterAlignComponent = require("gge-module:export_ItemCenterAlignComponent");
var __dep_export_DynamicSizeScrollStrategyVertical = require("gge-module:export_DynamicSizeScrollStrategyVertical");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleGenericRewardsComponent(__s3param0, __s3param1 = true, __s3param2 = true, __s3param3 = null, __s3param4 = null) {
    var __s3local0 = this;
    __s3local0._numberOfItems = 0;
    __s3local0._rewards = new __dep_export_CollectableList.CollectableList();
    __s3local0._enableMouseWheel = true;
    __s3local0._useAlign = true;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this)._enableMouseWheel = __s3param1;
    __s3local0._useAlign = __s3param2;
    __s3local0._collectableOptions = __s3param3;
    __s3local0._preRenderCallback = __s3param4;
    __s3local0.init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleGenericRewardsComponent, __s1param0);
  CastleGenericRewardsComponent.prototype.init = function () {
    this._numberOfItems = 0;
    for (var __s5local0 = 0; this.disp.getChildByName("mc_item" + __s5local0) != null; ++__s5local0) {
      this._numberOfItems++;
    }
    var __s5local1 = new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(this.disp);
    if (this._enableMouseWheel) {
      __s5local1.addMouseWheelElements([this.disp]);
    }
    this._scrollComponent = new __dep_export_ModernSliderScrollComponent.ModernSliderScrollComponent(__s5local1, new __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical());
    this._rewardAlign = new __dep_export_ItemCenterAlignComponent.ItemCenterAlignComponent(this.disp, "mc_item", true);
  };
  CastleGenericRewardsComponent.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    this._scrollComponent.show();
    this.initScroll();
    this.updateRewards();
  };
  CastleGenericRewardsComponent.prototype.onHide = function () {
    this._scrollComponent.hide();
    __s1param0.prototype.onHide.call(this);
  };
  CastleGenericRewardsComponent.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
  };
  CastleGenericRewardsComponent.prototype.removeEventListener = function () {
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScroll));
    __s1param0.prototype.removeEventListener.call(this);
  };
  CastleGenericRewardsComponent.prototype.updateWithNewData = function (__s18param0) {
    this._rewards = __s18param0;
    this.initScroll();
    this.updateRewards();
  };
  CastleGenericRewardsComponent.prototype.initScroll = function () {
    this._scrollComponent.init(0, Math.max(0, this._rewards.length - 1) / this._numberOfItems, 1, 1);
    this._scrollComponent.scrollToValue(0);
  };
  CastleGenericRewardsComponent.prototype.updateRewards = function () {
    var __s22local0 = new __dep_export_CollectableList.CollectableList();
    for (var __s22local1 = 0; __s22local1 < this._numberOfItems; ++__s22local1) {
      var __s22local2 = this._rewards.getItemByIndexSave(this._scrollComponent.currentValue * this._numberOfItems + __s22local1);
      if (__s22local2) {
        __s22local0.addItem(__s22local2);
      }
    }
    if (this._useAlign) {
      this._rewardAlign.align(this._rewards.length);
    }
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displayMultipleItemsComplete(this, new __dep_export_CollectableRenderClipsList.CollectableRenderClipsList(this.disp, "mc_item").addItemMcs("mc_item").addInfoBtns("parent.btn_info").addBuildingLevelMc("parent.mc_buildingLevel"), __s22local0, this._collectableOptions ? this._collectableOptions : this.defaultRenderOptions, this._preRenderCallback);
  };
  Object.defineProperty(CastleGenericRewardsComponent.prototype, "defaultRenderOptions", {
    get: function () {
      return new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ADVANCED, new __s0local0(55, 55));
    },
    enumerable: true,
    configurable: true
  });
  CastleGenericRewardsComponent.prototype.onScroll = function () {
    this.updateRewards();
  };
  return CastleGenericRewardsComponent;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.CastleGenericRewardsComponent = __s0local1;
