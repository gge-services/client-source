Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function SellBuildingVO(__s3param0) {
    this._costs = __s3param0;
  }
  Object.defineProperty(SellBuildingVO.prototype, "list", {
    get: function () {
      return this._costs.list;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SellBuildingVO.prototype, "hasCosts", {
    get: function () {
      return this._costs && this._costs.length > 0;
    },
    enumerable: true,
    configurable: true
  });
  return SellBuildingVO;
}();
exports.SellBuildingVO = __s0local0;
