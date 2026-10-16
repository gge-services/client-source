Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClickFeedBackHoverSliderButton = require("gge-module:export_ClickFeedBackHoverSliderButton");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_SimpleLayoutStrategyVertical = require("gge-module:export_SimpleLayoutStrategyVertical");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_SimpleScrollComponent = require("gge-module:export_SimpleScrollComponent");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_DynamicSizeScrollStrategyVertical = require("gge-module:export_DynamicSizeScrollStrategyVertical");
var __s0local0 = createjs.Rectangle;
var __s0local1 = function (__s1param0) {
  function SimpleMaskScrollComponent(__s3param0, __s3param1 = null) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._layoutables = [];
    __s3local0._startY = 0;
    __dep_export_ButtonHelper.ButtonHelper.initButtons([__s3local0.disp.mc_scroll.btn_slider], __dep_export_ClickFeedBackHoverSliderButton.ClickFeedBackHoverSliderButton, 1);
    var __s3local1 = new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(__s3local0.disp.mc_scroll).addMouseWheelElements([__s3local0.disp]);
    var __s3local2 = new __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical(true, __s3local0.disp.mc_items.mask.height, true);
    __s3local0._scrollComponent = new __dep_export_SimpleScrollComponent.SimpleScrollComponent(__s3local1, __s3local2);
    __s3local0._layoutStrategy = __s3param1 || new __dep_export_SimpleLayoutStrategyVertical.SimpleLayoutStrategyVertical();
    __s3local0._startY = __s3local0.disp.mc_items.y;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SimpleMaskScrollComponent, __s1param0);
  SimpleMaskScrollComponent.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    this.initScroll();
  };
  SimpleMaskScrollComponent.prototype.onHide = function () {
    __s1param0.prototype.onHide.call(this);
    if (this._scrollComponent) {
      this._scrollComponent.hide();
    }
  };
  SimpleMaskScrollComponent.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
  };
  SimpleMaskScrollComponent.prototype.removeEventListener = function () {
    __s1param0.prototype.removeEventListener.call(this);
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScroll));
  };
  SimpleMaskScrollComponent.prototype.onScroll = function () {
    this.disp.mc_items.y = this._startY - this._scrollComponent.currentValue;
  };
  SimpleMaskScrollComponent.prototype.initScroll = function () {
    var __s16local0 = this.disp.mc_items.mask.height;
    this._scrollComponent.strategy.visibleValue = __s16local0;
    var __s16local1 = Math.max(0, this.getContentHeight() - __s16local0);
    this._scrollComponent.init(0, __s16local1, __s16local0 / 3, __s16local0 / 3);
    this._scrollComponent.show();
  };
  SimpleMaskScrollComponent.prototype.getContentHeight = function () {
    if (this._layoutStrategy) {
      var __s18local0 = this._layoutStrategy.apply(this._layoutables, new __s0local0(0, 0, 0, 0));
      return __s18local0.bottom - __s18local0.top;
    }
    return this.disp.mc_items.height;
  };
  SimpleMaskScrollComponent.prototype.clear = function () {
    this.disp.mc_items.y = this._startY;
    this._layoutables = [];
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.disp.mc_items);
    this.initScroll();
  };
  SimpleMaskScrollComponent.prototype.addItem = function (__s23param0) {
    this.disp.mc_items.addChild(__s23param0.disp);
    this._layoutables.push(__s23param0);
    this.initScroll();
  };
  Object.defineProperty(SimpleMaskScrollComponent.prototype, "layoutables", {
    get: function () {
      return this._layoutables;
    },
    set: function (__s27param0) {
      this._layoutables = __s27param0;
      this.initScroll();
    },
    enumerable: true,
    configurable: true
  });
  SimpleMaskScrollComponent.prototype.reInit = function () {
    if (this._scrollComponent) {
      this.initScroll();
    }
  };
  return SimpleMaskScrollComponent;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.SimpleMaskScrollComponent = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
