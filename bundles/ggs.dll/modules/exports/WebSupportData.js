// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 115
// Export: WebSupportData; preserved source: modules/webpack/exports/ASupportData.js
// Original canonical SHA-256: 4c5b06c59fe87b0e62b917b793c42b938f67a8b683d6e21e939cf5511a1dd567
var __s0local2 = function (__s46param0) {
  function WebSupportData(__s48param0, __s48param1, __s48param2, __s48param3, __s48param4, __s48param5) {
    var __s48local0 = __s46param0.call(this, __s48param1, __s48param2, __s48param3, __s48param5) || this;
    __s48local0.referrer = __s48param0;
    __s48local0.playerVersion = __s48param4;
    return __s48local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(WebSupportData, __s46param0);
  WebSupportData.prototype.createUrlVars = function (__s50param0, __s50param1, __s50param2, __s50param3, __s50param4) {
    var __s50local0 = __s46param0.prototype.createUrlVars.call(this, __s50param0, __s50param1, __s50param2, __s50param3, __s50param4);
    __s50local0.ref = this.referrer;
    return __s50local0;
  };
  WebSupportData.prototype.toString = function () {
    var __s52local0 = __s46param0.prototype.toString.call(this);
    return __s52local0 += "Game-Version: " + this.versionText + "\nFlash Player - Version:" + this.playerVersion + "\nOS:" + __dep_export_CSSMouseCursor.Capabilities.os;
  };
  Object.defineProperty(WebSupportData.prototype, "referrer", {
    get: function () {
      return this._referrer;
    },
    set: function (__s56param0) {
      this._referrer = __s56param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WebSupportData.prototype, "playerVersion", {
    get: function () {
      return this._playerVersion;
    },
    set: function (__s60param0) {
      this._playerVersion = __s60param0;
    },
    enumerable: true,
    configurable: true
  });
  return WebSupportData;
}(__s0local1);
exports.WebSupportData = __s0local2;
