Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_ColorTransform = require("gge-module:class_ColorTransform");
exports.convertHexToRgba = function (__s1param0, __s1param1 = 1) {
  var __s1local0 = __dep_class_ColorTransform.ColorTransform.colorNumToString(__s1param0);
  var __s1local1 = __dep_class_ColorTransform.ColorTransform.hexToRgb(__s1local0);
  return createjs.Graphics.getRGB(__s1local1.r, __s1local1.g, __s1local1.b, __s1param1);
};
