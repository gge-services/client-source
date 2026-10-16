Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CollectableItemEquipmentUniqueEnchantedVO(__s3param0 = -1, __s3param1 = 0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._enchantLevel = 0;
    __s3local0._enchantLevel = __s3param1;
    __s3local0.updateEquipmentVO();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemEquipmentUniqueEnchantedVO, __s1param0);
  CollectableItemEquipmentUniqueEnchantedVO.prototype.clone = function () {
    var __s5local0 = __s1param0.prototype.clone.call(this);
    __s5local0.enchantLevel = this._enchantLevel;
    __s5local0.equipmentVO.enchantmentLevel = this._enchantLevel;
    return __s5local0;
  };
  CollectableItemEquipmentUniqueEnchantedVO.prototype.parseServerObject = function (__s7param0) {
    if (Array.isArray(__s7param0)) {
      __s1param0.prototype.parseServerObject.call(this, __s7param0[0]);
      this.enchantLevel = __dep_exact_f855840627e6e145.int(__s7param0[1]);
    } else {
      __s1param0.prototype.parseServerObject.call(this, __s7param0);
    }
  };
  CollectableItemEquipmentUniqueEnchantedVO.prototype.parseXmlObject = function (__s11param0) {
    var __s11local0 = __s11param0.split("+");
    this.id = __dep_exact_f855840627e6e145.int(__s11local0[0]);
    this.enchantLevel = __dep_exact_f855840627e6e145.int(__s11local0[1]);
    this.amount = 1;
  };
  Object.defineProperty(CollectableItemEquipmentUniqueEnchantedVO.prototype, "equipmentVO", {
    get: function () {
      var __s13local0 = Object.getOwnPropertyDescriptor(__dep_export_ACollectableItemEquipmentVO.ACollectableItemEquipmentVO.prototype, "equipmentVO").get.call(this);
      if (__s13local0) {
        __s13local0.enchantmentLevel = this._enchantLevel;
      }
      return __s13local0;
    },
    set: function (__s16param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ACollectableItemEquipmentVO.ACollectableItemEquipmentVO.prototype, "equipmentVO").set.call(this, __s16param0);
      if (this.equipmentVO) {
        this.equipmentVO.enchantmentLevel = this._enchantLevel;
        for (var __s16local0 = 0; __s16local0 < this.equipmentVO.boni.length; __s16local0++) {
          var __s16local1 = this.equipmentVO.boni[__s16local0];
          try {
            var __s16local2 = __s16local1.effectValue.strength + __dep_export_CastleModel.CastleModel.equipData.equipmentXml.getEnchantmentFactor(__s16local1.effect.effectID, __s16local0 == 0) * this.enchantLevel;
            __s16local1.effectValue.parseFromValueArray([__s16local2]);
          } catch (__s22local0) {}
        }
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableItemEquipmentUniqueEnchantedVO.prototype, "enchantLevel", {
    get: function () {
      return this._enchantLevel;
    },
    set: function (__s26param0) {
      this._enchantLevel = __s26param0;
      this.updateEquipmentVO();
    },
    enumerable: true,
    configurable: true
  });
  CollectableItemEquipmentUniqueEnchantedVO.SERVER_KEY = "EUE";
  CollectableItemEquipmentUniqueEnchantedVO.XML_KEY = "enchantedEquipmentIDs";
  return CollectableItemEquipmentUniqueEnchantedVO;
}(require("gge-module:export_CollectableItemEquipmentUniqueVO").CollectableItemEquipmentUniqueVO);
exports.CollectableItemEquipmentUniqueEnchantedVO = __s0local0;
var __dep_export_ACollectableItemEquipmentVO = require("gge-module:export_ACollectableItemEquipmentVO");
