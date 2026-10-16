Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_JavascriptCallDefaultVO = require("gge-module:class_JavascriptCallDefaultVO");
var __s0local0 = function () {
  function JavascriptCallDefaultFactory() {}
  JavascriptCallDefaultFactory.prototype.createVO = function (__s5param0) {
    var __s5local0;
    if (__s5param0 === undefined) {
      __s5param0 = "";
    }
    if (__s5param0 && __s5param0 != "") {
      __s5local0 = new __dep_class_JavascriptCallDefaultVO.JavascriptCallDefaultVO(__s5param0);
    }
    return __s5local0;
  };
  return JavascriptCallDefaultFactory;
}();
exports.JavascriptCallDefaultFactory = __s0local0;
