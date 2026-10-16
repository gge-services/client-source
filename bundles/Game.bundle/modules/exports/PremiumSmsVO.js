Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function PremiumSmsVO() {}
  PremiumSmsVO.prototype.loadFromParamObject = function (__s5param0) {
    this._callNumber = __s5param0.CN;
    this._currency = __s5param0.CR;
    this._premiumSmsCode = __s5param0.CD;
    this._price = __s5param0.P;
  };
  Object.defineProperty(PremiumSmsVO.prototype, "callNumber", {
    get: function () {
      return this._callNumber;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PremiumSmsVO.prototype, "currency", {
    get: function () {
      return this._currency;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PremiumSmsVO.prototype, "premiumSmsCode", {
    get: function () {
      return this._premiumSmsCode;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PremiumSmsVO.prototype, "price", {
    get: function () {
      return this._price;
    },
    enumerable: true,
    configurable: true
  });
  return PremiumSmsVO;
}();
exports.PremiumSmsVO = __s0local0;
