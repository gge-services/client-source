Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleColumnSortingVO(__s3param0, __s3param1) {
    this._isInAscendingOrder = false;
    this._sortingTrigger = __s3param0;
    this._comparer = __s3param1;
    this._isInAscendingOrder = true;
    this._sortingTrigger.mouseChildren = false;
  }
  Object.defineProperty(CastleColumnSortingVO.prototype, "sortingTrigger", {
    get: function () {
      return this._sortingTrigger;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleColumnSortingVO.prototype, "comparer", {
    get: function () {
      return this._comparer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleColumnSortingVO.prototype, "isInAscendingOrder", {
    get: function () {
      return this._isInAscendingOrder;
    },
    set: function (__s11param0) {
      this._isInAscendingOrder = __s11param0;
    },
    enumerable: true,
    configurable: true
  });
  return CastleColumnSortingVO;
}();
exports.CastleColumnSortingVO = __s0local0;
