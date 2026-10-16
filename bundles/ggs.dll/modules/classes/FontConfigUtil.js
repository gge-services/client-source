Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_FontConfigVO = require("gge-module:class_FontConfigVO");
var __dep_class_RuntimeLoadedFontConfigVO = require("gge-module:class_RuntimeLoadedFontConfigVO");
var __s0local0 = function () {
  function FontConfigUtil() {}
  FontConfigUtil.getDeepCopy = function (__s5param0) {
    var __s5local0 = FontConfigUtil.createFontConfigVO(__s5param0);
    __s5local0.fontName = __s5param0.fontName;
    __s5local0.yOffset = __s5param0.yOffset;
    __s5local0.fontStyle = __s5param0.fontStyle;
    __s5local0.fontScale = __s5param0.fontScale;
    __s5local0.fontSizeMinimum = __s5param0.fontSizeMinimum;
    return __s5local0;
  };
  FontConfigUtil.createFontConfigVO = function (__s7param0) {
    if (__s7param0 instanceof __dep_class_RuntimeLoadedFontConfigVO.RuntimeLoadedFontConfigVO) {
      return new __dep_class_RuntimeLoadedFontConfigVO.RuntimeLoadedFontConfigVO(__s7param0.ggsLanguageCode);
    } else {
      return new __dep_class_FontConfigVO.FontConfigVO();
    }
  };
  return FontConfigUtil;
}();
exports.FontConfigUtil = __s0local0;
