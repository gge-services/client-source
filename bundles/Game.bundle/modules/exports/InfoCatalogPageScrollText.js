Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_SimpleScrollComponent = require("gge-module:export_SimpleScrollComponent");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_DynamicSizeScrollStrategyVertical = require("gge-module:export_DynamicSizeScrollStrategyVertical");
var __s0local0 = function (__s1param0) {
  function InfoCatalogPageScrollText(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(InfoCatalogPageScrollText, __s1param0);
  InfoCatalogPageScrollText.prototype.init = function () {
    this._scrollComponent = new __dep_export_SimpleScrollComponent.SimpleScrollComponent(new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(this.disp.mc_slider).addVisualElements([this.disp.mc_slider]).addMouseWheelElements([this.disp]), new __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical(true));
  };
  InfoCatalogPageScrollText.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    this._scrollComponent.show();
    this._scrollComponent.scrollToPercent(0);
  };
  InfoCatalogPageScrollText.prototype.onHide = function () {
    this._scrollComponent.hide();
    __s1param0.prototype.onHide.call(this);
  };
  InfoCatalogPageScrollText.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onComponentScroll));
    if (this._textfield) {
      this._textfield.mouseOver.add(this.bindFunction(this.onMouseOverText));
      this._textfield.mouseOut.add(this.bindFunction(this.onMouseOutText));
    }
  };
  InfoCatalogPageScrollText.prototype.removeEventListener = function () {
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onComponentScroll));
    if (this._textfield) {
      this._textfield.mouseOver.remove(this.bindFunction(this.onMouseOverText));
      this._textfield.mouseOut.remove(this.bindFunction(this.onMouseOutText));
    }
    __s1param0.prototype.removeEventListener.call(this);
  };
  InfoCatalogPageScrollText.prototype.fillContent = function (__s17param0, __s17param1 = null) {
    this.removeEventListener();
    var __s17local0 = new __dep_exact_92d05af59ee2ff30_2.HTMLLinkFormatsVO(new __dep_exact_92d05af59ee2ff30_3.HTMLLinkFormatVO(__dep_export_ClientConstColor.ClientConstColor.MODERN_LINK_BRIGHT_HOVERED), new __dep_exact_92d05af59ee2ff30_3.HTMLLinkFormatVO(__dep_export_ClientConstColor.ClientConstColor.MODERN_DEFAULT_BRIGHT), new __dep_exact_92d05af59ee2ff30_3.HTMLLinkFormatVO(__dep_export_ClientConstColor.ClientConstColor.MODERN_LINK_BRIGHT, __dep_exact_9e901e8e2483a22f.GGSTextDecoration.UNDERLINE));
    var __s17local1 = new __dep_exact_92d05af59ee2ff30_1.HTMLTextCustomVO();
    __s17local1.addLocalizedTextVO(new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s17param0, __s17param1));
    __s17local1.linkFormats = __s17local0;
    this._textfield = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_text, __s17local1);
    if (this.isShown) {
      this.addEventListener();
    }
    var __s17local2 = __dep_export_ClientConstUtils.ClientConstUtils.isTlfMode ? this._textfield.size * 1.3 : 3;
    var __s17local3 = Math.ceil(this._textfield.maxScrollV);
    this._scrollComponent.init(1, __s17local3, __s17local2, __s17local2);
    this._scrollComponent.setVisibility(__s17local3 > 1);
    this._scrollComponent.scrollToPercent(0);
  };
  InfoCatalogPageScrollText.prototype.onComponentScroll = function () {
    if (this._textfield) {
      this._textfield.scrollV = this._scrollComponent.currentValue;
    }
  };
  InfoCatalogPageScrollText.prototype.onTextScroll = function (__s23param0 = null) {
    if (!this._scrollComponent.isDragging) {
      this._scrollComponent.scrollToValue(this._textfield.scrollV, false);
    }
  };
  InfoCatalogPageScrollText.prototype.onMouseOverText = function (__s26param0) {
    __dep_export_CastleComponent.CastleComponent.layoutManager.customCursor.setCursorType(__dep_exact_9e901e8e2483a22f_1.BasicCustomCursor.CURSOR_CLICK);
  };
  InfoCatalogPageScrollText.prototype.onMouseOutText = function (__s28param0) {
    __dep_export_CastleComponent.CastleComponent.layoutManager.customCursor.setCursorType(__dep_exact_9e901e8e2483a22f_1.BasicCustomCursor.CURSOR_ARROW);
  };
  return InfoCatalogPageScrollText;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.InfoCatalogPageScrollText = __s0local0;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
