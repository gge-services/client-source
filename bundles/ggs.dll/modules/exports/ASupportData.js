// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 115
// Export: ASupportData; preserved source: modules/webpack/exports/ASupportData.js
// Original canonical SHA-256: 4c5b06c59fe87b0e62b917b793c42b938f67a8b683d6e21e939cf5511a1dd567
var __s0local1 = function () {
  function ASupportData(__s18param0, __s18param1, __s18param2, __s18param3) {
    this.gameId = __s18param0;
    this.sessionId = __s18param1;
    this.networkId = __s18param2;
    this.os = __s18param3;
  }
  ASupportData.prototype.createUrlVars = function (__s20param0, __s20param1, __s20param2, __s20param3, __s20param4) {
    var __s20local0 = {
      g: this.gameId,
      n: this.networkId,
      i: __s20param0,
      sid: this.sessionId
    };
    if (__s20param2 > 0) {
      __s20local0.pid = __s20param2;
    }
    __s20local0.uid = __s20param3;
    __s20local0.lang = __s20param4;
    if (__s20param1 !== null && __s20param1 !== "-") {
      __s20local0.uname = __s20param1;
    }
    return __s20local0;
  };
  ASupportData.prototype.toString = function () {
    return "";
  };
  Object.defineProperty(ASupportData.prototype, "gameId", {
    get: function () {
      return this._gameId;
    },
    set: function (__s28param0) {
      this._gameId = __s28param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASupportData.prototype, "sessionId", {
    get: function () {
      return this._sessionId;
    },
    set: function (__s32param0) {
      this._sessionId = __s32param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASupportData.prototype, "networkId", {
    get: function () {
      return this._networkId;
    },
    set: function (__s36param0) {
      this._networkId = __s36param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASupportData.prototype, "versionText", {
    get: function () {
      return this._versionText;
    },
    set: function (__s40param0) {
      this._versionText = __s40param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASupportData.prototype, "os", {
    get: function () {
      return this._os;
    },
    set: function (__s44param0) {
      this._os = __s44param0;
    },
    enumerable: true,
    configurable: true
  });
  return ASupportData;
}();
exports.ASupportData = __s0local1;
