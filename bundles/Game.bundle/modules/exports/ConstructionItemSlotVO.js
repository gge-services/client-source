Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function ConstructionItemSlotVO(__s3param0, __s3param1) {
    this._slotType = 0;
    this._index = 0;
    this._slotType = __s3param0;
    this._index = __s3param1;
  }
  Object.defineProperty(ConstructionItemSlotVO.prototype, "slotType", {
    get: function () {
      return this._slotType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemSlotVO.prototype, "index", {
    get: function () {
      return this._index;
    },
    enumerable: true,
    configurable: true
  });
  ConstructionItemSlotVO.prototype.equals = function (__s9param0) {
    return !!__s9param0 && this._slotType == __s9param0.slotType && this.index == __s9param0.index;
  };
  return ConstructionItemSlotVO;
}();
exports.ConstructionItemSlotVO = __s0local0;
