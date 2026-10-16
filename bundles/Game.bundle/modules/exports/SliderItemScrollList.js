Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_SliderEvent = require("gge-module:export_SliderEvent");
var __dep_export_BasicSliderVO = require("gge-module:export_BasicSliderVO");
var __dep_export_CastleItemScrollList = require("gge-module:export_CastleItemScrollList");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function SliderItemScrollList(__s3param0, __s3param1 = null, __s3param2 = null, __s3param3 = null) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param1) || this;
    __s3local0._dragRef = new __s0local0();
    __s3local0.sliderData = __s3param2;
    if (__s3param2 == null) {
      __s3local0.sliderData = new __dep_export_BasicSliderVO.BasicSliderVO(__s3param0.mc_slider.sliderBar, __s3param0.mc_slider.btn_slider, 1, 0, __s3param0.mc_slider);
    }
    if (__s3param3 == null) {
      __s3param3 = __dep_export_ScrollComponent.ScrollComponent.VERTICAL_SLIDER;
    }
    __s3local0.slider = new __dep_export_ScrollComponent.ScrollComponent(__s3local0.sliderData, __s3param3);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SliderItemScrollList, __s1param0);
  SliderItemScrollList.prototype.initList = function (__s7param0 = 0, __s7param1 = false) {
    __s1param0.prototype.initList.call(this, __s7param0, __s7param1);
    this.sliderData.maxValue = Math.max(Math.ceil((this._itemCount - this._itemsVisibleAtOnce) / this._scrollStep), 1);
    if (this.hideButtons) {
      this.sliderData.parent.visible = this._itemCount > this._itemsVisibleAtOnce;
    } else {
      this.slider.enableComponent = this._itemCount > this._itemsVisibleAtOnce;
    }
    this.updateSlider();
    this.slider.addEventListener(__dep_export_SliderEvent.SliderEvent.VALUE_CHANGED, this.bindFunction(this.onSliderValueChange));
    this.addEventListener(__dep_exact_9e901e8e2483a22f.ScrollItemEvent.TOUCH_DRAG_START, this.bindFunction(this.dragStart));
    this.addEventListener(__dep_exact_9e901e8e2483a22f.ScrollItemEvent.TOUCH_DRAG_END, this.bindFunction(this.dragEnd));
  };
  SliderItemScrollList.prototype.scrollToItem = function (__s11param0 = 0) {
    this.updateItemList(__s11param0);
    this.updateSlider();
  };
  SliderItemScrollList.prototype.dragStart = function (__s13param0) {
    this._dragRef.x = __s13param0.originEvent.stageX;
    this._dragRef.y = __s13param0.originEvent.stageY;
  };
  SliderItemScrollList.prototype.dragEnd = function (__s15param0) {
    var __s15local0 = __s15param0.originEvent.stageY - this._dragRef.y;
    if (Math.abs(__s15local0) > 10) {
      if (__s15local0 > 0) {
        this.scrollUp();
      } else {
        this.scrollDown();
      }
    }
    this._dragRef.x = 0;
    this._dragRef.y = 0;
  };
  SliderItemScrollList.prototype.onSliderValueChange = function (__s20param0) {
    this.updateItemList(__s20param0.selectedValue * this._scrollStep);
  };
  SliderItemScrollList.prototype.remove = function () {
    this.slider.removeEventListener(__dep_export_SliderEvent.SliderEvent.VALUE_CHANGED, this.bindFunction(this.onSliderValueChange));
    this.removeEventListener(__dep_exact_9e901e8e2483a22f.ScrollItemEvent.TOUCH_DRAG_START, this.bindFunction(this.dragStart));
    this.removeEventListener(__dep_exact_9e901e8e2483a22f.ScrollItemEvent.TOUCH_DRAG_END, this.bindFunction(this.dragEnd));
    __s1param0.prototype.remove.call(this);
  };
  SliderItemScrollList.prototype.scrollUp = function () {
    this.naviUp();
  };
  SliderItemScrollList.prototype.scrollDown = function () {
    this.naviDown();
  };
  SliderItemScrollList.prototype.naviUp = function () {
    __s1param0.prototype.naviUp.call(this);
    this.updateSlider();
  };
  SliderItemScrollList.prototype.naviDown = function () {
    __s1param0.prototype.naviDown.call(this);
    this.updateSlider();
  };
  SliderItemScrollList.prototype.naviTop = function () {
    __s1param0.prototype.naviTop.call(this);
    this.updateSlider();
  };
  SliderItemScrollList.prototype.updateSlider = function () {
    this.slider.setSelectedIndex(this._currentStartIndex / this._scrollStep, false);
  };
  return SliderItemScrollList;
}(__dep_export_CastleItemScrollList.CastleItemScrollList);
exports.SliderItemScrollList = __s0local1;
var __dep_export_ScrollComponent = require("gge-module:export_ScrollComponent");
