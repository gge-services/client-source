Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __s0local0 = function (__s1param0) {
  function RuntimeLoadedFontConfigVO(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.ggsLanguageCode = __s3param0;
    __s3local0.debugColor = "0xFF0000";
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(RuntimeLoadedFontConfigVO, __s1param0);
  RuntimeLoadedFontConfigVO.prototype.setTextFormat = function (__s5param0) {
    if (isNaN(this.fontSizeMinimum) || this.fontScale == 1) {
      __s1param0.prototype.setTextFormat.call(this, __s5param0);
    } else if (Number(__s5param0.size) < this.fontSizeMinimum) {
      __s1param0.prototype.setTextFormat.call(this, __s5param0);
    } else {
      __s5param0.size = Number(__s5param0.size) * this.fontScale;
      if (__s5param0.size < this.fontSizeMinimum) {
        __s5param0.size = this.fontSizeMinimum;
      }
      __s1param0.prototype.setTextFormat.call(this, __s5param0);
    }
  };
  RuntimeLoadedFontConfigVO.prototype.toString = function () {
    return "ggsLanguageCode: " + this.ggsLanguageCode + ", " + __s1param0.prototype.toString.call(this);
  };
  return RuntimeLoadedFontConfigVO;
}(require("gge-module:class_FontConfigVO").FontConfigVO);
exports.RuntimeLoadedFontConfigVO = __s0local0;
