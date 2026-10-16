Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function AdvisorActivationInfoVO(__s3param0, __s3param1, __s3param2) {
    this._isAdvisorActive = __s3param0;
    this._isAdvisorActivationFree = __s3param1;
    this._advisorActivationCurrencyId = __s3param2;
  }
  Object.defineProperty(AdvisorActivationInfoVO.prototype, "isAdvisorActive", {
    get: function () {
      return this._isAdvisorActive;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AdvisorActivationInfoVO.prototype, "isAdvisorActivationFree", {
    get: function () {
      return this._isAdvisorActivationFree;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AdvisorActivationInfoVO.prototype, "advisorActivationCurrencyId", {
    get: function () {
      return this._advisorActivationCurrencyId;
    },
    enumerable: true,
    configurable: true
  });
  return AdvisorActivationInfoVO;
}();
exports.AdvisorActivationInfoVO = __s0local0;
