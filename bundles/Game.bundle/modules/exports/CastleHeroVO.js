Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BasicEquipmentVO = require("gge-module:export_BasicEquipmentVO");
var __s0local0 = function (__s1param0) {
  function CastleHeroVO() {
    var __s3local0 = this;
    __s3local0._itemGroupID = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleHeroVO, __s1param0);
  CastleHeroVO.prototype.setVisClassName = function () {
    if (this.rarity == __dep_export_BasicEquipmentVO.BasicEquipmentVO.RARITY_UNIQUE) {
      return "Hero_Unique_" + this.reuseAssetOfEquipmentID;
    } else {
      return "Hero_Generic_" + this._graphicString;
    }
  };
  CastleHeroVO.prototype.parseEquipFromArray = function (__s9param0) {
    __s1param0.prototype.parseEquipFromArray.call(this, __s9param0);
    this.alienString = __s9param0[11];
  };
  CastleHeroVO.prototype.getFilePath = function () {
    return __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(this.setVisClassName());
  };
  CastleHeroVO.prototype.parseBonuses = function (__s13param0) {
    if (__s13param0 && __s13param0.length > 0) {
      this.setGroupID(__s13param0[0][0]);
    }
    return __s1param0.prototype.parseBonuses.call(this, __s13param0);
  };
  Object.defineProperty(CastleHeroVO.prototype, "nameString", {
    get: function () {
      var __s16local0 = "";
      if (this._uniqueID > 0) {
        __s16local0 += __dep_exact_92d05af59ee2ff30.Localize.text("hero_unique_" + this.reuseAssetOfEquipmentID);
      } else {
        __s16local0 += __dep_exact_92d05af59ee2ff30.Localize.text("hero_generic_" + this._graphicString);
      }
      if (this.enchantmentLevel > 0) {
        __s16local0 = __dep_exact_92d05af59ee2ff30.Localize.text("equipment_name_enchanted", [__s16local0, this.enchantmentLevel]);
      }
      return __s16local0;
    },
    set: function (__s21param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicEquipmentVO.BasicEquipmentVO.prototype, "nameString").set.call(this, __s21param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleHeroVO.prototype, "extraText", {
    get: function () {
      if (this.visualRareID == __dep_exact_26a421b704832cff.EquipmentConst.RARENESS_UNIQUE) {
        return __dep_exact_92d05af59ee2ff30.Localize.text("hero_unique_" + this.reuseAssetOfEquipmentID + "_desc");
      } else {
        return "";
      }
    },
    set: function (__s27param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicEquipmentVO.BasicEquipmentVO.prototype, "extraText").set.call(this, __s27param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleHeroVO.prototype, "extraTextId", {
    get: function () {
      if (this.visualRareID == __dep_exact_26a421b704832cff.EquipmentConst.RARENESS_UNIQUE) {
        return "hero_unique_" + this.reuseAssetOfEquipmentID + "_desc";
      } else {
        return "";
      }
    },
    set: function (__s33param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicEquipmentVO.BasicEquipmentVO.prototype, "extraTextId").set.call(this, __s33param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleHeroVO.prototype, "isEnchantable", {
    get: function () {
      return false;
    },
    set: function (__s37param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicEquipmentVO.BasicEquipmentVO.prototype, "isEnchantable").set.call(this, __s37param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleHeroVO.prototype.setGroupID = function (__s39param0) {
    this._itemGroupID = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.equipData.equipmentXml.getEffectGroupIdByEffectId(__s39param0));
  };
  Object.defineProperty(CastleHeroVO.prototype, "itemGroupID", {
    get: function () {
      return this._itemGroupID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleHeroVO.prototype, "canSlotGem", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  return CastleHeroVO;
}(__dep_export_BasicEquipmentVO.BasicEquipmentVO);
exports.CastleHeroVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEquippableVO");
