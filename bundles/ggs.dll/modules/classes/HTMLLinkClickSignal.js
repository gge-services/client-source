Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __s0local0 = function (__s1param0) {
  function HTMLLinkClickSignal() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.mappedEventType = HTMLLinkClickSignal.HTML_LINK_CLICK;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(HTMLLinkClickSignal, __s1param0);
  HTMLLinkClickSignal.prototype.dispatchTyped = function (__s5param0, __s5param1) {
    __s1param0.prototype.dispatch.call(this, __s5param0, __s5param1);
  };
  HTMLLinkClickSignal.HTML_LINK_CLICK = "htmlLinkClick";
  return HTMLLinkClickSignal;
}(require("gge-module:class_GGSTextFieldSignal").GGSTextFieldSignal);
exports.HTMLLinkClickSignal = __s0local0;
