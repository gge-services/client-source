Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function () {
  function XmlEquipmentEffectVO() {
    this._id = 0;
    this._dropRate = 0;
    this._wearerId = 0;
    this._enchantmentPrimaryBonus = NaN;
    this._enchantmentSecondaryBonus = NaN;
    this._bonus = 0;
    this._effectId = 0;
    this._excludedMali = 0;
    this._ignoreCap = false;
  }
  XmlEquipmentEffectVO.prototype.parseXml = function (__s5param0) {
    this._id = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("equipmentEffectID", __s5param0, -1));
    this._dropRate = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("dropRate", __s5param0));
    this._wearerId = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("wearerID", __s5param0, -1));
    this._itemGroupIds = __dep_export_CastleXMLUtils.CastleXMLUtils.createIntListFromAttribute("itemGroupID", __s5param0);
    this._enchantmentPrimaryBonus = __dep_export_CastleXMLUtils.CastleXMLUtils.getNumberAttribute("enchantmentPrimaryBonus", __s5param0);
    this._enchantmentSecondaryBonus = __dep_export_CastleXMLUtils.CastleXMLUtils.getNumberAttribute("enchantmentSecondaryBonus", __s5param0);
    this._bonus = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("bonus", __s5param0));
    this._effectId = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("effectID", __s5param0, -1));
    this._excludedMali = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("excludedMali", __s5param0));
    this._ignoreCap = __dep_export_CastleXMLUtils.CastleXMLUtils.getBooleanAttribute("ignoreCap", __s5param0);
  };
  XmlEquipmentEffectVO.prototype.getItemGroupIdSafe = function () {
    return __dep_exact_f855840627e6e145.int(this.itemGroupIds.length > 0 ? this.itemGroupIds[0] : 0);
  };
  Object.defineProperty(XmlEquipmentEffectVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlEquipmentEffectVO.prototype, "dropRate", {
    get: function () {
      return this._dropRate;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlEquipmentEffectVO.prototype, "wearerId", {
    get: function () {
      return this._wearerId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlEquipmentEffectVO.prototype, "itemGroupIds", {
    get: function () {
      return this._itemGroupIds;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlEquipmentEffectVO.prototype, "enchantmentPrimaryBonus", {
    get: function () {
      return this._enchantmentPrimaryBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlEquipmentEffectVO.prototype, "enchantmentSecondaryBonus", {
    get: function () {
      return this._enchantmentSecondaryBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlEquipmentEffectVO.prototype, "bonus", {
    get: function () {
      return this._bonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlEquipmentEffectVO.prototype, "effectId", {
    get: function () {
      return this._effectId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlEquipmentEffectVO.prototype, "excludedMali", {
    get: function () {
      return this._excludedMali;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlEquipmentEffectVO.prototype, "ignoreCap", {
    get: function () {
      return this._ignoreCap;
    },
    enumerable: true,
    configurable: true
  });
  return XmlEquipmentEffectVO;
}();
exports.XmlEquipmentEffectVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IXmlElementVO");
