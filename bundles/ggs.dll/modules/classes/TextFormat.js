Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_ebfc67fda817e2f8 = require("gge-module:exact_ebfc67fda817e2f8");
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __dep_class_BrowserInfo = require("gge-module:class_BrowserInfo");
var __dep_exact_d080a25fe68bd590 = require("gge-module:exact_d080a25fe68bd590");
var __s0local0 = __dep_export_LoggerConfigurator.getLogger(__dep_exact_d080a25fe68bd590.TEXT_FIELDS_LOGGER + ".TextFormat");
var __s0local1 = function () {
  function TextFormat(__s3param0 = TextFormat.DEFAULT_SYSTEM_FONT, __s3param1 = 12, __s3param2 = "#000000", __s3param3 = false, __s3param4 = false, __s3param5 = false, __s3param6 = "", __s3param7 = "", __s3param8 = __dep_exact_ebfc67fda817e2f8.TextFormatAlign.LEFT, __s3param9 = 0, __s3param10 = 0, __s3param11 = 0, __s3param12 = 0, __s3param13 = null) {
    this.font = __s3param0;
    this.size = __s3param1;
    this.color = __s3param2;
    this.bold = __s3param3;
    this.italic = __s3param4;
    this.underline = __s3param5;
    this.url = __s3param6;
    this.target = __s3param7;
    this.align = __s3param8;
    this.leftMargin = __s3param9;
    this.rightMargin = __s3param10;
    this.indent = __s3param11;
    this.leading = __s3param12;
    this.link = __s3param13;
    this.blockIndent = 0;
    this.bullet = false;
    this.kerning = false;
    this.letterSpacing = 0;
  }
  Object.defineProperty(TextFormat.prototype, "fontType", {
    get: function () {
      if (!/^_?(Body|Header)Font$/.test(this.font)) {
        __s0local0.info("forcing " + this.font + " to be  aliased to the loaded font  as _BodyFont  --> HTML-2168 ");
        this.font = __dep_class_BrowserInfo.currentBrowserInfo.isIE ? "BodyFont" : "_BodyFont";
      }
      var __s5local0 = "";
      if (this.bold) {
        __s5local0 += "Bold ";
      }
      if (this.italic) {
        __s5local0 += "Italic ";
      }
      if (this.size != null) {
        __s5local0 += this.size.toString() + "px ";
      } else {
        __s5local0 += "12px ";
      }
      return __s5local0 += this.font;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TextFormat.prototype, "stringColor", {
    get: function () {
      if (typeof this.color == "number") {
        return "#" + this.color;
      } else {
        return this.color;
      }
    },
    enumerable: true,
    configurable: true
  });
  return TextFormat;
}();
exports.TextFormat = __s0local1;
