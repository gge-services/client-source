// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 115
// Export: MobileSupportData; preserved source: modules/webpack/exports/ASupportData.js
// Original canonical SHA-256: 4c5b06c59fe87b0e62b917b793c42b938f67a8b683d6e21e939cf5511a1dd567
var __s0local3 = function (__s62param0) {
  function MobileSupportData(__s64param0, __s64param1, __s64param2, __s64param3, __s64param4, __s64param5) {
    var __s64local0 = __s62param0.call(this, __s64param0, __s64param1, __s64param2, __s64param5) || this;
    __s64local0.sourceStore = __s64param3;
    __s64local0.deviceType = __s64param4;
    return __s64local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(MobileSupportData, __s62param0);
  MobileSupportData.prototype.toString = function () {
    return __s62param0.prototype.toString.call(this);
  };
  Object.defineProperty(MobileSupportData.prototype, "sourceStore", {
    get: function () {
      return this._sourceStore;
    },
    set: function (__s70param0) {
      this._sourceStore = __s70param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MobileSupportData.prototype, "deviceType", {
    get: function () {
      return this._deviceType;
    },
    set: function (__s74param0) {
      this._deviceType = __s74param0;
    },
    enumerable: true,
    configurable: true
  });
  return MobileSupportData;
}(__s0local1);
exports.MobileSupportData = __s0local3;
