Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function () {
  function AssetUrlConvertor() {
    this.isPNG = /.png$/i;
    this.isWalkMap = /EmpireWalkmaps/i;
  }
  AssetUrlConvertor.prototype.convert = function (__s5param0) {
    if (this.isPNG.test(__s5param0) && window.useMinAssets && !this.isWalkMap.test(__s5param0)) {
      if (__dep_exact_81dacdf05bd32292.currentBrowserInfo.isChrome && parseInt(__dep_exact_81dacdf05bd32292.currentBrowserInfo.version, 10) > 23 && (!__dep_exact_81dacdf05bd32292.currentBrowserInfo.isMobile || __dep_exact_81dacdf05bd32292.currentBrowserInfo.isAndroid) || __dep_exact_81dacdf05bd32292.currentBrowserInfo.isFireFox && parseInt(__dep_exact_81dacdf05bd32292.currentBrowserInfo.version, 10) >= 65) {
        __s5param0 = __s5param0.replace(/.png$/, ".webp");
      }
      return __s5param0;
    } else {
      return __s5param0;
    }
  };
  return AssetUrlConvertor;
}();
exports.AssetUrlConvertor = __s0local0;
