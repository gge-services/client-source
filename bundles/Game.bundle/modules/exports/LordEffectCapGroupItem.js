Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_SimpleLayoutStrategyVertical = require("gge-module:export_SimpleLayoutStrategyVertical");
var __dep_export_LordEffectItem = require("gge-module:export_LordEffectItem");
var __s0local0 = createjs.Rectangle;
var __s0local1 = function (__s1param0) {
  function LordEffectCapGroupItem(__s3param0, __s3param1 = null, __s3param2 = __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, __s3param3 = __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param1, __s3param2, __s3param3) || this;
    __s3local0._detailItems = [];
    __s3local0._layout = new __dep_export_SimpleLayoutStrategyVertical.SimpleLayoutStrategyVertical();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(LordEffectCapGroupItem, __s1param0);
  LordEffectCapGroupItem.prototype.applyText = function (__s5param0, __s5param1 = false, __s5param2 = 0) {
    __s1param0.prototype.applyText.call(this, __s5param0, __s5param1, __s5param2);
    this._contextBounds = new __s0local0(0, this.itxt_effect.textHeight, 0, 0);
    if (this._detailItems.length > 0) {
      this.applyLayout();
    }
  };
  LordEffectCapGroupItem.prototype.addEffectItem = function (__s8param0) {
    this.disp.addChild(__s8param0.disp);
    this._detailItems.push(__s8param0);
    this.applyLayout();
  };
  LordEffectCapGroupItem.prototype.applyLayout = function () {
    this._layout.apply(this._detailItems, this._contextBounds);
    var __s10local0 = this._layout.calculateTotalHeight(this._detailItems);
    this.disp.mc_textBackground.height = this.itxt_effect.textHeight + __s10local0;
  };
  return LordEffectCapGroupItem;
}(__dep_export_LordEffectItem.LordEffectItem);
exports.LordEffectCapGroupItem = __s0local1;
