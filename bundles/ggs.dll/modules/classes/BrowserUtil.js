Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = require("gge-module:export_LoggerConfigurator").getLogger("CoreJS.BrowserUtil");
var __s0local1 = function () {
  function BrowserUtil() {}
  BrowserUtil.executeNavigateToURL = function (__s5param0, __s5param1 = BrowserUtil.WINDOW_BLANK) {
    __s0local0.debug("executeNavigateToURL ", __s5param0);
    if (typeof __s5param0 == "string") {
      window.open(__s5param0, __s5param1);
    } else {
      window.open(__s5param0.getURLWithParams(), __s5param1);
    }
  };
  BrowserUtil.openWindow = function (__s9param0, __s9param1 = BrowserUtil.WINDOW_BLANK, __s9param2 = "") {
    if (__s9param2) {
      __s0local0.warn("openWindow: what should we do with the 'features'", __s9param2);
    }
    BrowserUtil.executeNavigateToURL(__s9param0, __s9param1);
  };
  BrowserUtil.WINDOW_BLANK = "_blank";
  BrowserUtil.WINDOW_SELF = "_self";
  BrowserUtil.WINDOW_PARENT = "_parent";
  BrowserUtil.WINDOW_TOP = "_top";
  return BrowserUtil;
}();
exports.BrowserUtil = __s0local1;
