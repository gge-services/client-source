Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __dep_class_ColorTransform = require("gge-module:class_ColorTransform");
var __dep_exact_d080a25fe68bd590 = require("gge-module:exact_d080a25fe68bd590");
var __s0local0 = __dep_export_LoggerConfigurator.getLogger(__dep_exact_d080a25fe68bd590.CREATEJS_UTILITIES_LOGGER + ".BitmapData");
var __s0local1 = createjs.BitmapData.prototype;
var __s0local2 = createjs.BitmapData.prototype.constructor;
var __s0local3 = createjs.BitmapData.getBitmapData;
createjs.BitmapData = function (__s1param0, __s1param1, __s1param2, __s1param3) {
  if (typeof __s1param3 == "number") {
    __s1param3 = __dep_class_ColorTransform.ColorTransform.colorNumToString(__s1param3);
  }
  __s0local2.apply(this, [__s1param0, __s1param1, __s1param2, __s1param3]);
};
createjs.BitmapData.prototype = __s0local1;
createjs.BitmapData.getBitmapData = __s0local3;
createjs.BitmapData.prototype.lock = function () {
  __s0local0.debug("lock  not implemented yet");
};
createjs.BitmapData.prototype.unlock = function () {
  __s0local0.debug("unlock  not implemented yet");
};
