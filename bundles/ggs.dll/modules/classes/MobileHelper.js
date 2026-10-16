Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_BrowserInfo = require("gge-module:class_BrowserInfo");
var __s0local0 = function () {
  function MobileHelper() {}
  MobileHelper.isScreenTooSmall = function (__s5param0 = 578) {
    return __dep_class_BrowserInfo.currentBrowserInfo.isMobile && (document.documentElement.clientWidth < __s5param0 || document.documentElement.clientHeight < __s5param0);
  };
  MobileHelper.isLandscape = function () {
    return __dep_class_BrowserInfo.currentBrowserInfo.isMobile && document.documentElement.clientWidth > document.documentElement.clientHeight && document.documentElement.clientWidth > 480;
  };
  MobileHelper.isPortrait = function () {
    return __dep_class_BrowserInfo.currentBrowserInfo.isMobile && document.documentElement.clientWidth < document.documentElement.clientHeight;
  };
  return MobileHelper;
}();
exports.MobileHelper = __s0local0;
