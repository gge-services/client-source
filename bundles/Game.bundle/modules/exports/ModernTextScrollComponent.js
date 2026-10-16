Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ModernSliderScrollComponent = require("gge-module:export_ModernSliderScrollComponent");
var __dep_export_DynamicSizeScrollStrategyVertical = require("gge-module:export_DynamicSizeScrollStrategyVertical");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __s0local0 = function (__s1param0) {
  function ModernTextScrollComponent(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.itxt_text = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3param1, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    var __s3local1 = Math.floor(__s3local0.itxt_text.height / (__s3local0.itxt_text.textHeight / __s3local0.itxt_text.numLines - 4));
    __s3local0._scrollComponent = new __dep_export_ModernSliderScrollComponent.ModernSliderScrollComponent(__s3param0, new __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical(true, __s3local1));
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ModernTextScrollComponent, __s1param0);
  ModernTextScrollComponent.prototype.onShow = function () {
    this._scrollComponent.init(1, Math.floor(this.itxt_text.maxScrollV), 2, 2);
    this._scrollComponent.setVisibility(Math.floor(this.itxt_text.maxScrollV) > 1);
    this._scrollComponent.show();
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScrollValueChange));
    this.itxt_text.change.add(this.bindFunction(this.onTextChanged));
  };
  ModernTextScrollComponent.prototype.onHide = function () {
    this._scrollComponent.hide();
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScrollValueChange));
    this.itxt_text.change.remove(this.bindFunction(this.onTextChanged));
  };
  ModernTextScrollComponent.prototype.onTextChanged = function (__s9param0) {
    this._scrollComponent.init(1, Math.floor(this.itxt_text.maxScrollV), 2, 2);
    this._scrollComponent.setVisibility(Math.floor(this.itxt_text.maxScrollV) > 1);
    this._scrollComponent.scrollToValue(this.itxt_text.scrollV, false);
  };
  ModernTextScrollComponent.prototype.onScrollValueChange = function () {
    this.itxt_text.scrollV = __dep_exact_9e901e8e2483a22f.MathBase.clamp(this._scrollComponent.currentValue, 1, this.itxt_text.maxScrollV);
  };
  ModernTextScrollComponent.prototype.scrollToStart = function () {
    this._scrollComponent.scrollToValue(0);
  };
  ModernTextScrollComponent.prototype.setText = function (__s15param0) {
    this.itxt_text.textContentVO.stringValue = __s15param0;
    this.onShow();
    this._scrollComponent.scrollToValue(0);
  };
  Object.defineProperty(ModernTextScrollComponent.prototype, "scrollComponent", {
    get: function () {
      return this._scrollComponent;
    },
    enumerable: true,
    configurable: true
  });
  return ModernTextScrollComponent;
}(__dep_export_CastleComponent.CastleComponent);
exports.ModernTextScrollComponent = __s0local0;
