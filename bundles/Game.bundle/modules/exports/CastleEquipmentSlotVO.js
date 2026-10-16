Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleEquipmentSlotVO(__s3param0) {
    this._isFree = true;
    this._slotType = __s3param0;
  }
  Object.defineProperty(CastleEquipmentSlotVO.prototype, "equipmentVO", {
    get: function () {
      return this._equipmentVO;
    },
    set: function (__s7param0) {
      this._equipmentVO = __s7param0;
      this._isFree = !this._equipmentVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEquipmentSlotVO.prototype, "isFree", {
    get: function () {
      return this._isFree;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEquipmentSlotVO.prototype, "slotType", {
    get: function () {
      return this._slotType;
    },
    enumerable: true,
    configurable: true
  });
  return CastleEquipmentSlotVO;
}();
exports.CastleEquipmentSlotVO = __s0local0;
