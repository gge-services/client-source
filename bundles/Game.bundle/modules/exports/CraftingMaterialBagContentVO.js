Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CraftingMaterialBagContentVO(__s3param0, __s3param1, __s3param2) {
    this._minValue = 0;
    this._maxValue = 0;
    this._minValue = __s3param0;
    this._maxValue = __s3param1;
    this._craftingMaterial = __s3param2;
  }
  Object.defineProperty(CraftingMaterialBagContentVO.prototype, "minValue", {
    get: function () {
      return this._minValue;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingMaterialBagContentVO.prototype, "maxValue", {
    get: function () {
      return this._maxValue;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingMaterialBagContentVO.prototype, "craftingMaterial", {
    get: function () {
      return this._craftingMaterial;
    },
    enumerable: true,
    configurable: true
  });
  return CraftingMaterialBagContentVO;
}();
exports.CraftingMaterialBagContentVO = __s0local0;
