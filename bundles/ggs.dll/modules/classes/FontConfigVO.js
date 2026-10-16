Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_TextFormatUtil = require("gge-module:class_TextFormatUtil");
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __dep_export_AssetLoadingFlowType = require("gge-module:export_AssetLoadingFlowType");
__dep_export_LoggerConfigurator.getLogger(__dep_export_AssetLoadingFlowType.TEXT_FIELDS_LOGGER + ".FontConfigVO");
var __s0local0 = function () {
  function FontConfigVO() {
    this.debugColor = "0x00FFAA";
    this.fontStyle = FontConfigVO.FONT_STYLE_REGULAR;
    this.fontScale = 1;
    this.yOffset = 0;
  }
  FontConfigVO.prototype.initalize = function (__s5param0) {
    this.yPosOriginal = __s5param0.y;
    this.setTextFormat(__s5param0.getTextFormat());
    this.visible = __s5param0.visible;
  };
  FontConfigVO.prototype.applyYOffsetToOriginalPosition = function (__s7param0 = null) {
    this._y = this._yPosOriginal + this.yOffset;
  };
  FontConfigVO.prototype.setTextFormat = function (__s9param0) {
    this._textFormat = __s9param0;
    this.fontName = this._textFormat.font;
    if (FontConfigVO.DEBUG) {
      this._textFormat.color = this.debugColor;
    }
  };
  Object.defineProperty(FontConfigVO.prototype, "textFormat", {
    get: function () {
      return this._textFormat;
    },
    enumerable: true,
    configurable: true
  });
  FontConfigVO.prototype.toString = function () {
    return JSON.stringify(this);
  };
  Object.defineProperty(FontConfigVO.prototype, "y", {
    get: function () {
      return this._y;
    },
    set: function (__s18param0) {
      this._y = __s18param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FontConfigVO.prototype, "yPosOriginal", {
    get: function () {
      return this._yPosOriginal;
    },
    set: function (__s22param0) {
      this._yPosOriginal = __s22param0;
      this._y = this._yPosOriginal;
    },
    enumerable: true,
    configurable: true
  });
  FontConfigVO.prototype.clone = function (__s24param0) {
    this._y = __s24param0.y;
    this._yPosOriginal = __s24param0.yPosOriginal;
    this.setTextFormat(__dep_class_TextFormatUtil.TextFormatUtil.cloneTextFormat(__s24param0.textFormat));
    if (this.fontStyle == FontConfigVO.FONT_STYLE_BOLD) {
      this._textFormat.bold = true;
    }
  };
  Object.defineProperty(FontConfigVO.prototype, "debug", {
    get: function () {
      return FontConfigVO.DEBUG;
    },
    enumerable: true,
    configurable: true
  });
  FontConfigVO.prototype.dispose = function () {
    this._textFormat = null;
  };
  FontConfigVO.FONT_STYLE_REGULAR = 0;
  FontConfigVO.FONT_STYLE_BOLD = 1;
  return FontConfigVO;
}();
exports.FontConfigVO = __s0local0;
