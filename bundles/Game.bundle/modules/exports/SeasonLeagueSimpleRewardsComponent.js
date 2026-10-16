Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
var __dep_export_CollectableRenderClipsList = require("gge-module:export_CollectableRenderClipsList");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_DynamicSizeScrollStrategyVertical = require("gge-module:export_DynamicSizeScrollStrategyVertical");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function SeasonLeagueSimpleRewardsComponent(__s3param0, __s3param1 = true, __s3param2 = true, __s3param3 = 7, __s3param4 = new __s0local0(15, 15)) {
    var __s3local0 = this;
    __s3local0._rewards = new __dep_export_CollectableList.CollectableList();
    __s3local0._numberOfItems = 0;
    __s3local0._enableMouseWheel = true;
    __s3local0._useAlign = true;
    __s3local0._iconTransformOffset = 0;
    __s3local0._onScrollSignal = new __dep_exact_5c7bc328fca9e4de.Signal();
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this)._enableMouseWheel = __s3param1;
    __s3local0._useAlign = __s3param2;
    __s3local0._iconTransformOffset = __s3param3;
    __s3local0._levelDimension = __s3param4;
    __s3local0.init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SeasonLeagueSimpleRewardsComponent, __s1param0);
  SeasonLeagueSimpleRewardsComponent.prototype.init = function () {
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
  SeasonLeagueSimpleRewardsComponent.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    this._scrollComponent.show();
    this.initScroll();
    this.updateRewards();
  };
  SeasonLeagueSimpleRewardsComponent.prototype.onHide = function () {
    this._scrollComponent.hide();
    __s1param0.prototype.onHide.call(this);
  };
  SeasonLeagueSimpleRewardsComponent.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
  };
  SeasonLeagueSimpleRewardsComponent.prototype.removeEventListener = function () {
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScroll));
    __s1param0.prototype.removeEventListener.call(this);
  };
  SeasonLeagueSimpleRewardsComponent.prototype.updateWithNewData = function (__s18param0) {
    this._rewards = __s18param0;
    this.initScroll();
    this.updateRewards();
  };
  SeasonLeagueSimpleRewardsComponent.prototype.initScroll = function () {
    this._scrollComponent.init(0, Math.max(0, this._rewards.length - 1) / this.numberOfItems, 1, 1);
    this._scrollComponent.scrollToValue(0);
  };
  SeasonLeagueSimpleRewardsComponent.prototype.updateRewards = function () {
    var __s22local0 = this;
    var __s22local1 = new __dep_export_CollectableList.CollectableList();
    for (var __s22local2 = 0; __s22local2 < this.numberOfItems; ++__s22local2) {
      var __s22local3 = this._rewards.getItemByIndexSave(this._scrollComponent.currentValue * this.numberOfItems + __s22local2);
      if (__s22local3) {
        __s22local1.addItem(__s22local3);
      }
    }
    if (this._useAlign) {
      this._rewardAlign.align(this._rewards.length);
    }
    var __s22local4 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ADVANCED, new __s0local0(55, 55));
    __s22local4.tooltip.showEquipmentCountdown = false;
    __s22local4.icon.unitLevelDimension = this._levelDimension;
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displayMultipleItemsComplete(this, new __dep_export_CollectableRenderClipsList.CollectableRenderClipsList(this.disp, "mc_item").addItemMcs("mc_item").addInfoBtns("parent.btn_info").addBuildingLevelMc("parent.mc_buildingLevel"), __s22local1, __s22local4, function (__s28param0) {
      __s28param0.getRenderer(__dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON_TRANSFORM).transform.offset.y = __s28param0.itemVE && __s28param0.itemVE.textfieldBackgroundVisible() ? 0 : __s22local0._iconTransformOffset;
    });
  };
  SeasonLeagueSimpleRewardsComponent.prototype.getCurrentItemScrollIndex = function () {
    return __dep_exact_f855840627e6e145.int(this._scrollComponent.currentValue * this.numberOfItems);
  };
  SeasonLeagueSimpleRewardsComponent.prototype.onScroll = function () {
    this.updateRewards();
    this.onScrollSignal.dispatch();
  };
  Object.defineProperty(SeasonLeagueSimpleRewardsComponent.prototype, "onScrollSignal", {
    get: function () {
      return this._onScrollSignal;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueSimpleRewardsComponent.prototype, "scrollComponent", {
    get: function () {
      return this._scrollComponent;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueSimpleRewardsComponent.prototype, "rewards", {
    get: function () {
      return this._rewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueSimpleRewardsComponent.prototype, "numberOfItems", {
    get: function () {
      return this._numberOfItems;
    },
    enumerable: true,
    configurable: true
  });
  return SeasonLeagueSimpleRewardsComponent;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.SeasonLeagueSimpleRewardsComponent = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_ItemCenterAlignComponent = require("gge-module:export_ItemCenterAlignComponent");
var __dep_export_ModernSliderScrollComponent = require("gge-module:export_ModernSliderScrollComponent");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
