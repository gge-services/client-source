Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function AgeGateData() {}
  Object.defineProperty(AgeGateData.prototype, "isAgeGateActive", {
    get: function () {
      return this._isAgeGateActive;
    },
    set: function (__s7param0) {
      this._isAgeGateActive = __s7param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AgeGateData.prototype, "validationSucceeded", {
    get: function () {
      return this._validationSucceeded;
    },
    set: function (__s11param0) {
      this._validationSucceeded = __s11param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AgeGateData.prototype, "autoLoginTryFailed", {
    get: function () {
      return this._autoLoginTryFailed;
    },
    set: function (__s15param0) {
      this._autoLoginTryFailed = __s15param0;
    },
    enumerable: true,
    configurable: true
  });
  return AgeGateData;
}();
exports.AgeGateData = __s0local0;
