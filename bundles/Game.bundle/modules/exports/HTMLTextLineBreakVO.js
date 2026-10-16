Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function HTMLTextLineBreakVO() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(HTMLTextLineBreakVO, __s1param0);
  HTMLTextLineBreakVO.prototype.compose = function () {
    return __s1param0.prototype.compose.call(this).replace(/\r\n|\r|\n|↵/g, "<br>");
  };
  return HTMLTextLineBreakVO;
}(require("gge-module:exact_92d05af59ee2ff30").HTMLTextCustomVO);
exports.HTMLTextLineBreakVO = __s0local0;
