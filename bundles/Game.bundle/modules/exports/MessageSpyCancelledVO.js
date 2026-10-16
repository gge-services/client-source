Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function (__s1param0) {
  function MessageSpyCancelledVO() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(MessageSpyCancelledVO, __s1param0);
  MessageSpyCancelledVO.prototype.parseSubject = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text("spyWarning_warning");
  };
  return MessageSpyCancelledVO;
}(require("gge-module:export_MessageCancelledVO").MessageCancelledVO);
exports.MessageSpyCancelledVO = __s0local0;
