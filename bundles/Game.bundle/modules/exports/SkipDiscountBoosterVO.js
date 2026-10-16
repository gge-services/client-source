Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function SkipDiscountBoosterVO(__s3param0, __s3param1) {
    this._discount = 0;
    this._duration = 0;
    this._discount = __s3param0;
    this._duration = __s3param1;
  }
  SkipDiscountBoosterVO.prototype.clone = function () {
    return new SkipDiscountBoosterVO(this.discount, this.duration);
  };
  Object.defineProperty(SkipDiscountBoosterVO.prototype, "discount", {
    get: function () {
      return this._discount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SkipDiscountBoosterVO.prototype, "duration", {
    get: function () {
      return this._duration;
    },
    enumerable: true,
    configurable: true
  });
  return SkipDiscountBoosterVO;
}();
exports.SkipDiscountBoosterVO = __s0local0;
