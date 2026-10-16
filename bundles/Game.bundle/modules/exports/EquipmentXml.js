Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_XmlEquipmentEffectVO = require("gge-module:export_XmlEquipmentEffectVO");
var __dep_export_XmlEquipmentGroupVO = require("gge-module:export_XmlEquipmentGroupVO");
var __dep_export_XmlEquipmentRarenessVO = require("gge-module:export_XmlEquipmentRarenessVO");
var __dep_export_XmlEquipmentSetVO = require("gge-module:export_XmlEquipmentSetVO");
var __dep_export_XmlWorldmapSkinVO = require("gge-module:export_XmlWorldmapSkinVO");
var __s0local0 = function () {
  function EquipmentXml() {
    this._equipmentEffects = new Map();
    this._equipmentSets = new Map();
    this._equipmentRareness = new Map();
    this._equipmentGroups = new Map();
    this._worldmapSkins = new Map();
  }
  EquipmentXml.prototype.parseXml = function (__s5param0) {
    this._equipmentEffects = __dep_export_CastleXMLUtils.CastleXMLUtils.createDicFromXmlNode(__s5param0, "equipment_effects", __dep_export_XmlEquipmentEffectVO.XmlEquipmentEffectVO);
    this.parseEquipmentSets(__s5param0);
    this._equipmentRareness = __dep_export_CastleXMLUtils.CastleXMLUtils.createDicFromXmlNode(__s5param0, "equipment_rarenesses", __dep_export_XmlEquipmentRarenessVO.XmlEquipmentRarenessVO);
    this._equipmentGroups = __dep_export_CastleXMLUtils.CastleXMLUtils.createDicFromXmlNode(__s5param0, "equipment_groups", __dep_export_XmlEquipmentGroupVO.XmlEquipmentGroupVO);
    this._worldmapSkins = __dep_export_CastleXMLUtils.CastleXMLUtils.createDicFromXmlNode(__s5param0, "worldmapskins", __dep_export_XmlWorldmapSkinVO.XmlWorldmapSkinVO);
  };
  EquipmentXml.prototype.parseEquipmentSets = function (__s7param0) {
    this._equipmentSets = new Map();
    var __s7local0 = __s7param0.equipment_sets;
    if (__s7local0 != null) {
      for (var __s7local1 = 0, __s7local2 = __s7local0; __s7local1 < __s7local2.length; __s7local1++) {
        var __s7local3 = __s7local2[__s7local1];
        if (__s7local3 !== undefined) {
          var __s7local4 = parseInt(__s7local3.setID || "");
          if (this._equipmentSets.get(__s7local4)) {
            this._equipmentSets.get(__s7local4).addEffect(__s7local3);
          } else {
            this._equipmentSets.set(__s7local4, new __dep_export_XmlEquipmentSetVO.XmlEquipmentSetVO(__s7local4, __s7local3));
          }
        }
      }
    }
  };
  EquipmentXml.prototype.getEquipmentSet = function (__s15param0) {
    return this._equipmentSets.get(__s15param0);
  };
  EquipmentXml.prototype.getEquipmentEffect = function (__s17param0) {
    return this._equipmentEffects.get(__s17param0);
  };
  EquipmentXml.prototype.getEquipmentRareness = function (__s19param0) {
    return this._equipmentRareness.get(__s19param0);
  };
  EquipmentXml.prototype.getEquipmentGroup = function (__s21param0) {
    return this._equipmentGroups.get(__s21param0);
  };
  EquipmentXml.prototype.getWorldmapSkin = function (__s23param0) {
    return this._worldmapSkins.get(__s23param0);
  };
  EquipmentXml.prototype.getEquippableEffectByEquipmentEffect = function (__s25param0) {
    return __dep_export_CastleModel.CastleModel.effectsData.getEffectByID(this.getEquipmentEffect(__s25param0) ? this.getEquipmentEffect(__s25param0).effectId : __s25param0);
  };
  EquipmentXml.prototype.getEffectGroupIdByEffectId = function (__s27param0) {
    var __s27local0 = this.getEquipmentEffect(__s27param0);
    if (__s27local0) {
      return __dep_exact_f855840627e6e145.int(__s27local0.getItemGroupIdSafe());
    } else {
      return 0;
    }
  };
  EquipmentXml.prototype.getEnchantmentFactor = function (__s31param0, __s31param1) {
    var __s31local0 = this.getEquipmentEffect(__s31param0);
    if (__s31local0) {
      if (__s31param1) {
        return __s31local0.enchantmentPrimaryBonus;
      } else {
        return __s31local0.enchantmentSecondaryBonus;
      }
    } else {
      return 0;
    }
  };
  Object.defineProperty(EquipmentXml.prototype, "equipmentEffects", {
    get: function () {
      return this._equipmentEffects;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EquipmentXml.prototype, "equipmentSets", {
    get: function () {
      return this._equipmentSets;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EquipmentXml.prototype, "equipmentRareness", {
    get: function () {
      return this._equipmentRareness;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EquipmentXml.prototype, "equipmentGroups", {
    get: function () {
      return this._equipmentGroups;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EquipmentXml.prototype, "worldmapSkins", {
    get: function () {
      return this._worldmapSkins;
    },
    enumerable: true,
    configurable: true
  });
  return EquipmentXml;
}();
exports.EquipmentXml = __s0local0;
