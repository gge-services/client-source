Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_XmlRelicBluePrintVO = require("gge-module:export_XmlRelicBluePrintVO");
var __dep_export_XmlRelicCategoryVO = require("gge-module:export_XmlRelicCategoryVO");
var __dep_export_XmlRelicEffectListVO = require("gge-module:export_XmlRelicEffectListVO");
var __dep_export_XmlRelicEffectPowerRatingVO = require("gge-module:export_XmlRelicEffectPowerRatingVO");
var __dep_export_XmlRelicEffectVO = require("gge-module:export_XmlRelicEffectVO");
var __dep_export_XmlRelicEnchanterVO = require("gge-module:export_XmlRelicEnchanterVO");
var __dep_export_XmlRelicPowerDistributionVO = require("gge-module:export_XmlRelicPowerDistributionVO");
var __dep_export_XmlRelicTypeVO = require("gge-module:export_XmlRelicTypeVO");
var __s0local0 = function () {
  function RelicEquipmentXml() {
    this._relicEffects = new Map();
    this._relicEffectLists = new Map();
    this._relicBluePrints = new Map();
    this._relicTypes = new Map();
    this._relicPowerDistributions = new Map();
    this._relicCategories = new Map();
    this._relicEffectPowerRatings = new Map();
    this._relicEnchanters = new Map();
    this._maxRelicEnchanterLevel = 0;
  }
  RelicEquipmentXml.prototype.parseXml = function (__s5param0) {
    this._relicEffects = __dep_export_CastleXMLUtils.CastleXMLUtils.createDicFromXmlNode(__s5param0, "relicEffects", __dep_export_XmlRelicEffectVO.XmlRelicEffectVO);
    this._relicEffectLists = __dep_export_CastleXMLUtils.CastleXMLUtils.createDicFromXmlNode(__s5param0, "relicEffectLists", __dep_export_XmlRelicEffectListVO.XmlRelicEffectListVO);
    this._relicBluePrints = __dep_export_CastleXMLUtils.CastleXMLUtils.createDicFromXmlNode(__s5param0, "relicBluePrints", __dep_export_XmlRelicBluePrintVO.XmlRelicBluePrintVO);
    this._relicTypes = __dep_export_CastleXMLUtils.CastleXMLUtils.createDicFromXmlNode(__s5param0, "relicTypes", __dep_export_XmlRelicTypeVO.XmlRelicTypeVO);
    this._relicPowerDistributions = __dep_export_CastleXMLUtils.CastleXMLUtils.createDicFromXmlNode(__s5param0, "relicPowerDistributions", __dep_export_XmlRelicPowerDistributionVO.XmlRelicPowerDistributionVO, "power");
    this._relicCategories = __dep_export_CastleXMLUtils.CastleXMLUtils.createDicFromXmlNode(__s5param0, "relicCategories", __dep_export_XmlRelicCategoryVO.XmlRelicCategoryVO);
    this._relicEffectPowerRatings = __dep_export_CastleXMLUtils.CastleXMLUtils.createDicFromXmlNode(__s5param0, "relicEffectPowerRatings", __dep_export_XmlRelicEffectPowerRatingVO.XmlRelicEffectPowerRatingVO);
    this._relicEnchanters = __dep_export_CastleXMLUtils.CastleXMLUtils.createDicFromXmlNode(__s5param0, "relicEnchanters", __dep_export_XmlRelicEnchanterVO.XmlRelicEnchanterVO, "level");
    this._sortedPowerRatings = [];
    if (this._relicEffectPowerRatings != null) {
      for (var __s5local0 = 0, __s5local1 = Array.from(this._relicEffectPowerRatings.values()); __s5local0 < __s5local1.length; __s5local0++) {
        var __s5local2 = __s5local1[__s5local0];
        this._sortedPowerRatings.push(__s5local2.threshold);
      }
    }
    this._sortedPowerRatings.sort(function (__s10param0, __s10param1) {
      return __s10param1 - __s10param0;
    });
    this._maxRelicEnchanterLevel = this.getMaxRelicEnchanterLevel();
  };
  RelicEquipmentXml.prototype.getBluePrint = function (__s12param0) {
    return this._relicBluePrints.get(__s12param0);
  };
  RelicEquipmentXml.prototype.getRelicType = function (__s14param0) {
    return this._relicTypes.get(__s14param0);
  };
  RelicEquipmentXml.prototype.getRelicEffect = function (__s16param0) {
    return this._relicEffects.get(__s16param0);
  };
  RelicEquipmentXml.prototype.getRelicEffectList = function (__s18param0) {
    return this._relicEffectLists.get(__s18param0);
  };
  RelicEquipmentXml.prototype.getStarRating = function (__s20param0) {
    var __s20local0 = 0;
    if (this._sortedPowerRatings != null) {
      for (var __s20local1 = 0, __s20local2 = this._sortedPowerRatings; __s20local1 < __s20local2.length; __s20local1++) {
        var __s20local3 = __s20local2[__s20local1];
        if (__s20local3 !== undefined && __s20param0 >= __s20local3) {
          __s20local0++;
        }
      }
    }
    return __s20local0;
  };
  RelicEquipmentXml.prototype.getRelicEnchanter = function (__s26param0) {
    return this._relicEnchanters.get(__s26param0);
  };
  RelicEquipmentXml.prototype.getMaxRelicEnchanterLevel = function () {
    var __s28local0 = 0;
    if (this._relicEnchanters != null) {
      for (var __s28local1 = 0, __s28local2 = Array.from(this._relicEnchanters.values()); __s28local1 < __s28local2.length; __s28local1++) {
        var __s28local3 = __s28local2[__s28local1];
        __s28local0 = __dep_exact_f855840627e6e145.int(Math.max(__s28local0, __s28local3.level));
      }
    }
    return __s28local0;
  };
  Object.defineProperty(RelicEquipmentXml.prototype, "relicEffects", {
    get: function () {
      return this._relicEffects;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RelicEquipmentXml.prototype, "relicBluePrints", {
    get: function () {
      return this._relicBluePrints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RelicEquipmentXml.prototype, "relicTypes", {
    get: function () {
      return this._relicTypes;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RelicEquipmentXml.prototype, "relicEffectLists", {
    get: function () {
      return this._relicEffectLists;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RelicEquipmentXml.prototype, "relicPowerDistributions", {
    get: function () {
      return this._relicPowerDistributions;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RelicEquipmentXml.prototype, "relicCategories", {
    get: function () {
      return this._relicCategories;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RelicEquipmentXml.prototype, "relicEffectPowerRatings", {
    get: function () {
      return this._relicEffectPowerRatings;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RelicEquipmentXml.prototype, "relicEnchanters", {
    get: function () {
      return this._relicEnchanters;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RelicEquipmentXml.prototype, "maxRelicEnchanterLevel", {
    get: function () {
      return this._maxRelicEnchanterLevel;
    },
    enumerable: true,
    configurable: true
  });
  return RelicEquipmentXml;
}();
exports.RelicEquipmentXml = __s0local0;
