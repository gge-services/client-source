Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function PercentageBoosterVO(__s3param0, __s3param1) {
    this._percentage = 0;
    this._duration = 0;
    this._percentage = __s3param0;
    this._duration = __s3param1;
  }
  PercentageBoosterVO.prototype.clone = function () {
    return new PercentageBoosterVO(this.percentage, this.duration);
  };
  Object.defineProperty(PercentageBoosterVO.prototype, "percentage", {
    get: function () {
      return this._percentage;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PercentageBoosterVO.prototype, "duration", {
    get: function () {
      return this._duration;
    },
    enumerable: true,
    configurable: true
  });
  return PercentageBoosterVO;
}();
exports.PercentageBoosterVO = __s0local0;
