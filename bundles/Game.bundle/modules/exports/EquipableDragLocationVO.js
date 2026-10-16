Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function EquipableDragLocationVO(__s3param0, __s3param1 = -1) {
    this._lordID = 0;
    this._lordID = __s3param1;
    this._locationType = __s3param0;
  }
  Object.defineProperty(EquipableDragLocationVO.prototype, "lordID", {
    get: function () {
      return this._lordID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EquipableDragLocationVO.prototype, "locationType", {
    get: function () {
      return this._locationType;
    },
    enumerable: true,
    configurable: true
  });
  EquipableDragLocationVO.__initialize_static_members = function () {
    EquipableDragLocationVO.TYPE_INVENTORY = "Inventory";
    EquipableDragLocationVO.TYPE_SLOT = "Slot";
    EquipableDragLocationVO.TYPE_CRAFTING = "Crafting";
    EquipableDragLocationVO.TYPE_CRAFTING_CENTER = "Crafting_Center";
    EquipableDragLocationVO.TYPE_SELL_SLOT = "Sell_Slot";
  };
  return EquipableDragLocationVO;
}();
exports.EquipableDragLocationVO = __s0local0;
__s0local0.__initialize_static_members();
