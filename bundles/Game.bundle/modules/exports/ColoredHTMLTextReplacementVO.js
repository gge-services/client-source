Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function (__s1param0) {
  function ColoredHTMLTextReplacementVO(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this) || this;
    var __s3local1 = __s3param0.compose();
    __s3local0.addLocalizedTextVO(new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("[color=" + __s3param1 + "]" + __s3local1 + "[/color]"));
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ColoredHTMLTextReplacementVO, __s1param0);
  ColoredHTMLTextReplacementVO.prototype.compose = function () {
    var __s5local0 = new RegExp(/<.?p>/g);
    return __s1param0.prototype.compose.call(this).replace(__s5local0, "");
  };
  return ColoredHTMLTextReplacementVO;
}(__dep_exact_92d05af59ee2ff30.HTMLTextCustomVO);
exports.ColoredHTMLTextReplacementVO = __s0local0;
