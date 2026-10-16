Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_1 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_SimpleLayoutStrategyVertical = require("gge-module:export_SimpleLayoutStrategyVertical");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_DynamicSizeScrollStrategyVertical = require("gge-module:export_DynamicSizeScrollStrategyVertical");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __dep_export_ClickFeedBackSliderButton = require("gge-module:export_ClickFeedBackSliderButton");
var __s0local0 = createjs.Rectangle;
var __s0local1 = function (__s1param0) {
  function QuestMapComponent(__s3param0) {
    var __s3local0 = this;
    __s3local0._startY = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._disp = __s3param0;
    __s3local0._startY = __s3param0.mc_mask.y;
    __s3local0._itemContainer = __s3param0.mc_ItemContainer;
    __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.applyMaskFromMovieClip(__s3local0._itemContainer, __s3param0.mc_mask);
    __dep_export_ButtonHelper.ButtonHelper.initButton(__s3local0._disp.mc_slider.btn_minus, 1, __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    __dep_export_ButtonHelper.ButtonHelper.initButton(__s3local0._disp.mc_slider.btn_slider, 1, __dep_export_ClickFeedBackSliderButton.ClickFeedBackSliderButton);
    __dep_export_ButtonHelper.ButtonHelper.initButton(__s3local0._disp.mc_slider.btn_plus, 1, __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    __s3local0._sliderButton = __s3local0._disp.mc_slider.btn_slider.basicButton;
    var __s3local1 = new __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical(true);
    __s3local0.layoutStrategy = new __dep_export_SimpleLayoutStrategyVertical.SimpleLayoutStrategyVertical();
    __s3local0.scrollComponent = new __dep_export_SimpleScrollComponent.SimpleScrollComponent(new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(__s3local0._disp.mc_slider).addMouseWheelElements([__s3local0._disp]), __s3local1);
    __s3local0.scrollComponent.strategy.visibleValue = __s3local0._itemContainer.mask.height;
    __s3local0.mapTilePool = [];
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0._disp.txt_title, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafe(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_questbook_taskInfo")))).verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    __s3local0.hide();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(QuestMapComponent, __s1param0);
  QuestMapComponent.prototype.show = function (__s5param0) {
    var __s5local0;
    var __s5local1 = 0;
    var __s5local2 = 0;
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this._itemContainer);
    this.mapTiles = [];
    while (__s5local2 < __s5param0.length) {
      if (this.mapTilePool.length <= __s5local1) {
        this.mapTilePool.push(new __dep_export_QuestMapTile.QuestMapTile());
      }
      __s5local0 = this.mapTilePool[__s5local1];
      this._itemContainer.addChild(__s5local0.disp);
      this.mapTiles.push(__s5local0);
      __s5local0.show(__s5param0, __s5local2);
      __s5local1++;
      __s5local2 = __dep_exact_f855840627e6e145.int(__s5local1 * QuestMapComponent.QUESTS_PER_TILE);
    }
    this.updateSlider();
    this.scrollComponent.show();
    this.scrollComponent.onScrollSignal.add(this.bindFunction(this.onScrollValueChange));
    this._disp.visible = true;
  };
  QuestMapComponent.prototype.onScrollValueChange = function () {
    __dep_exact_608de47b6498f9b0_1.TweenMax.killTweensOf(this._itemContainer);
    __dep_exact_608de47b6498f9b0_1.TweenMax.to(this._itemContainer, QuestMapComponent.SCOLL_DURATION, {
      y: this._startY - this.scrollComponent.currentValue,
      ease: __dep_exact_608de47b6498f9b0.Power1.easeOut
    });
  };
  QuestMapComponent.prototype.hide = function () {
    if (this.mapTilePool != null) {
      for (var __s12local0 = 0, __s12local1 = this.mapTilePool; __s12local0 < __s12local1.length; __s12local0++) {
        var __s12local2 = __s12local1[__s12local0];
        if (__s12local2 !== undefined) {
          __s12local2.hide();
        }
      }
    }
    this.scrollComponent.hide();
    this.scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScrollValueChange));
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this._itemContainer);
    this.mapTiles = [];
    this._disp.visible = false;
  };
  QuestMapComponent.prototype.updateSlider = function (__s18param0 = false) {
    var __s18local0;
    var __s18local1;
    var __s18local2;
    __s18local1 = this.applyLayout().height;
    __s18local0 = __dep_exact_f855840627e6e145.int(Math.max(0, __s18local1 - this._itemContainer.mask.height));
    __s18local2 = this._itemContainer.mask.height / __s18local1;
    this._sliderButton.setSize(this.scrollComponent.scrollVO.sliderLine.height * __s18local2);
    var __s18local3 = __dep_exact_f855840627e6e145.int(__s18param0 ? 0 : this.scrollComponent.currentValue);
    this.scrollComponent.init(0, __s18local0, QuestMapComponent.SCROLL_STEP_PIXELS, QuestMapComponent.SCROLL_STEP_PIXELS);
    this.scrollComponent.scrollToValue(Math.min(__s18local3, __s18local0));
    this._disp.mc_slider.visible = __s18local0 > 0;
    this.scrollComponent.setVisibility(__s18local0 > 0);
  };
  QuestMapComponent.prototype.scrollToTop = function () {
    this.updateSlider(true);
    this._itemContainer.y = this._startY;
  };
  QuestMapComponent.prototype.applyLayout = function () {
    return this.layoutStrategy.apply(this.mapTiles, new __s0local0());
  };
  QuestMapComponent.__initialize_static_members = function () {
    QuestMapComponent.QUESTS_PER_TILE = 4;
    QuestMapComponent.SCROLL_STEP_PIXELS = 109;
    QuestMapComponent.SCOLL_DURATION = 0.2;
  };
  return QuestMapComponent;
}(__dep_export_CastleComponent.CastleComponent);
exports.QuestMapComponent = __s0local1;
var __dep_export_SimpleScrollComponent = require("gge-module:export_SimpleScrollComponent");
var __dep_export_QuestMapTile = require("gge-module:export_QuestMapTile");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();
