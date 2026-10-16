Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_LordEffectSourceItem = require("gge-module:export_LordEffectSourceItem");
var __dep_export_MovieClipLayoutable = require("gge-module:export_MovieClipLayoutable");
var __s0local0 = function (__s1param0) {
  function LordEffectItem(__s3param0, __s3param1 = null, __s3param2 = __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, __s3param3 = __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR) {
    var __s3local0 = this;
    __s3local0.defaultFontColor = 0;
    __s3local0.malusFontColor = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0, __s3param1) || this).defaultFontColor = __s3param2;
    __s3local0.malusFontColor = __s3param3;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(LordEffectItem, __s1param0);
  LordEffectItem.prototype.applyText = function (__s5param0, __s5param1 = false, __s5param2 = 0) {
    this.itxt_effect = LordEffectItem.textFieldManager.registerTextField(this.disp.txt_text, new __dep_exact_92d05af59ee2ff30.TextVO(__s5param0), new __dep_exact_9e901e8e2483a22f_2.InternalGGSTextFieldConfigVO(true));
    this._additionalBGHeight = __s5param2;
    if (this.itxt_effect.originalTextField) {
      this.itxt_effect.originalTextField.height = this.itxt_effect.textHeight;
    }
    if (this.disp.mc_textBackground) {
      this.disp.mc_textBackground.height = this.itxt_effect.textHeight + __s5param2;
    }
    this.itxt_effect.color = __s5param1 ? this.malusFontColor : this.defaultFontColor;
    if (this.disp.mc_arrow) {
      this.disp.mc_arrow.gotoAndStop(__s5param1 ? 2 : 1);
    }
  };
  Object.defineProperty(LordEffectItem, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LordEffectItem.prototype, "height", {
    get: function () {
      var __s12local0 = this.disp.mc_textBackground ? this.disp.mc_textBackground.height : this.itxt_effect.textHeight + this.itxt_effect.y;
      return __s12local0 = this.disp.mc_source ? Math.max(__s12local0, 23) : __s12local0;
    },
    set: function (__s14param0) {
      Object.getOwnPropertyDescriptor(__dep_export_MovieClipLayoutable.MovieClipLayoutable.prototype, "height").set.call(this, __s14param0);
    },
    enumerable: true,
    configurable: true
  });
  LordEffectItem.prototype.applySources = function (__s16param0) {
    if (this.disp.mc_source) {
      var __s16local0 = this.itxt_effect ? this.itxt_effect.numLines : 0;
      if (__s16local0 == 1 && this.disp.mc_textBackground) {
        this.disp.mc_textBackground.height = 23;
      }
      if (__s16local0 == 1 && this.itxt_effect) {
        this.itxt_effect.y = 4;
      }
      __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.disp.mc_source);
      var __s16local1 = new __dep_export_LordEffectSourceItem.LordEffectSourceItem(__s16param0);
      this.disp.mc_source.addChild(__s16local1.disp);
    }
  };
  return LordEffectItem;
}(__dep_export_MovieClipLayoutable.MovieClipLayoutable);
exports.LordEffectItem = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ILayoutable");
