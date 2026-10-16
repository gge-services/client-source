Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_BasicUnitVO = require("gge-module:export_BasicUnitVO");
var __s0local0 = function (__s1param0) {
  function EffectIconUnitVO(__s3param0, __s3param1) {
    var __s3local0 = this;
    __s3local0.effectValue = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._effectType = __s3param0;
    __s3local0.effectValue = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(EffectIconUnitVO, __s1param0);
  EffectIconUnitVO.prototype.getNameString = function () {
    if (this.effectValue < 0) {
      return this._effectType.tooltipTextId + "_reduction";
    } else {
      return this._effectType.tooltipTextId;
    }
  };
  EffectIconUnitVO.prototype.getVisualClassName = function () {
    return __dep_exact_81dacdf05bd32292_1.getQualifiedClassName(this._effectType.iconClass);
  };
  Object.defineProperty(EffectIconUnitVO.prototype, "inventoryAmount", {
    get: function () {
      return this.effectValue;
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicUnitVO.BasicUnitVO.prototype, "inventoryAmount").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EffectIconUnitVO.prototype, "sortOrder", {
    get: function () {
      return this._effectType.sortOrder;
    },
    set: function (__s17param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicUnitVO.BasicUnitVO.prototype, "sortOrder").set.call(this, __s17param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EffectIconUnitVO.prototype, "valueIsPercentage", {
    get: function () {
      return !this._effectType.hasAbsoluteBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EffectIconUnitVO.prototype, "effectType", {
    get: function () {
      return this._effectType;
    },
    enumerable: true,
    configurable: true
  });
  return EffectIconUnitVO;
}(__dep_export_BasicUnitVO.BasicUnitVO);
exports.EffectIconUnitVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IInventoryVO", "IShopVO", "ICostVO");
