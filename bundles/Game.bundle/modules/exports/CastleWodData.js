Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_AIsoObjectVO = require("gge-module:export_AIsoObjectVO");
var __dep_export_CastleVersionInformation = require("gge-module:export_CastleVersionInformation");
var __s0local0 = function () {
  function CastleWodData(__s3param0) {
    this._voList = new Map();
    this.parseVOFromWODXmls(__s3param0);
    this._itemsXmlVersion = __s3param0.versionInfo.version["@value"];
    __dep_exact_9e901e8e2483a22f.debug("parsed itemXML version:" + this._itemsXmlVersion);
    __dep_export_CastleVersionInformation.CastleVersionInformation.versionInstance.itemXmlVersion = this._itemsXmlVersion;
  }
  CastleWodData.prototype.initWodList = function () {
    this._wodXmlElements = new Map();
    this._buildingXmlElements = new Map();
    this._unitXmlElements = new Map();
    this._horseXmlElements = new Map();
    this._rubyWishingWellXmlElements = new Map();
    this._wodXmlElements.set(CastleWodData.TYPE_BUILDING, this._buildingXmlElements);
    this._wodXmlElements.set(CastleWodData.TYPE_UNIT, this._unitXmlElements);
    this._wodXmlElements.set(CastleWodData.TYPE_HORSE, this._horseXmlElements);
    this._wodXmlElements.set(CastleWodData.TYPE_RUBY_WISHING_WELL, this._rubyWishingWellXmlElements);
    this._voList = new Map();
    this._buildingsName2WodId = new Map();
    this._buildingVOs = new Map();
    this._unitVOs = new Map();
    this._horseVOs = new Map();
    this._rubyWishingWellVOs = new Map();
    this._voList.set(CastleWodData.TYPE_BUILDING, this._buildingVOs);
    this._voList.set(CastleWodData.TYPE_UNIT, this._unitVOs);
    this._voList.set(CastleWodData.TYPE_HORSE, this._horseVOs);
    this._voList.set(CastleWodData.TYPE_RUBY_WISHING_WELL, this._rubyWishingWellVOs);
  };
  CastleWodData.prototype.createVObyWOD = function (__s7param0, __s7param1) {
    if (__s7param1 < CastleWodData.TYPE_BUILDING || __s7param1 > CastleWodData.TYPE_RUBY_WISHING_WELL) {
      __dep_exact_9e901e8e2483a22f.debug("UNKNOWN TYPE: " + __s7param1);
      return null;
    }
    var __s7local0 = this._wodXmlElements.get(__s7param1).get(__s7param0);
    try {
      parseInt(__s7local0.wodID || "");
    } catch (__s11local0) {
      __dep_exact_9e901e8e2483a22f.debug("UNKNOWN WOD: " + __s7param0);
      return null;
    }
    var __s7local1 = __s7local0.name || "";
    var __s7local2 = __s7local0.group || "";
    var __s7local3 = __dep_exact_81dacdf05bd32292.getDefinitionByName(this.getClassName(__s7local2, __s7local1));
    if (__s7local3 && typeof __s7local3 == "function") {
      var __s7local4 = new __s7local3();
      __s7local4.parseXmlNode(__s7local0);
      if (__s7local4 instanceof __dep_export_AIsoObjectVO.AIsoObjectVO) {
        __s7local4.init();
      }
      return __s7local4;
    }
    __dep_exact_9e901e8e2483a22f.debug("Cannot create VO: " + this.getClassName(__s7local2, __s7local1) + " for wodID: " + __s7param0 + " (not found or not a constructor)");
    return null;
  };
  CastleWodData.prototype.getClassName = function (__s15param0, __s15param1) {
    return __s15param1 + __s15param0 + "VO";
  };
  CastleWodData.prototype.getVOArrayByWODArray = function (__s17param0, __s17param1) {
    var __s17local0 = [];
    for (var __s17local1 = 0; __s17local1 < __s17param0.length; __s17local1++) {
      __s17local0.push(this.createVObyWOD(__s17param0[__s17local1], __s17param1));
    }
    return __s17local0;
  };
  CastleWodData.prototype.parseVOFromWODXmls = function (__s21param0) {
    this.initWodList();
    var __s21local0 = __s21param0.buildings;
    this.parseVOFromWODXml(__s21local0, CastleWodData.TYPE_BUILDING);
    var __s21local1 = __s21param0.units;
    this.parseVOFromWODXml(__s21local1, CastleWodData.TYPE_UNIT);
    var __s21local2 = __s21param0.horses;
    this.parseVOFromWODXml(__s21local2, CastleWodData.TYPE_HORSE);
    var __s21local3 = __s21param0.wishingwells;
    this.parseVOFromWODXml(__s21local3, CastleWodData.TYPE_RUBY_WISHING_WELL);
  };
  CastleWodData.prototype.getHighestUpgradeForBuilding = function (__s23param0) {
    for (var __s23local0, __s23local1 = this.createVObyWOD(__s23param0, CastleWodData.TYPE_BUILDING); __s23local0 = __s23local1.getUpgradeVO();) {
      __s23local1 = __s23local0;
    }
    return __s23local1;
  };
  CastleWodData.prototype.parseVOFromWODXml = function (__s27param0, __s27param1) {
    if (__s27param0 != null) {
      var __s27local0 = "";
      var __s27local1 = undefined;
      var __s27local2 = undefined;
      for (var __s27local3 = 0, __s27local4 = __s27param0; __s27local3 < __s27local4.length; __s27local3++) {
        var __s27local5 = __s27local4[__s27local3];
        if (__s27local5 !== undefined) {
          try {
            var __s27local6;
            var __s27local7 = parseInt(__s27local5.wodID || "");
            var __s27local8 = __s27local5.name || "";
            var __s27local9 = __s27local5.group || "";
            this._wodXmlElements.get(__s27param1).set(__s27local7, __s27local5);
            __s27local0 = this.getClassName(__s27local9, __s27local8);
            if (!(__s27local1 = __dep_exact_81dacdf05bd32292.getDefinitionByName(__s27local0)) || typeof __s27local1 != "function") {
              __dep_exact_9e901e8e2483a22f.debug("Cannot instantiate VO class: " + __s27local0 + " for wodID: " + __s27local7 + " (not a constructor or undefined)");
              continue;
            }
            (__s27local2 = new __s27local1()).parseXmlNode(__s27local5);
            if ("worldIndex" in __s27local2) {
              continue;
            }
            if (__s27param1 == CastleWodData.TYPE_BUILDING) {
              if (__s27local2.level && __s27local2.level > 0) {
                if (this._buildingsName2WodId.has(__s27local8)) {
                  if ((__s27local6 = this._buildingsName2WodId.get(__s27local8))[CastleWodData.MAPPING_LEVEL] > __s27local2.level) {
                    __s27local6[CastleWodData.MAPPING_LEVEL] = __s27local2.level;
                    __s27local6[CastleWodData.MAPPING_WODID] = __s27local2.wodId;
                  }
                } else {
                  (__s27local6 = {})[CastleWodData.MAPPING_LEVEL] = __s27local2.level;
                  __s27local6[CastleWodData.MAPPING_WODID] = __s27local2.wodId;
                  this._buildingsName2WodId.set(__s27local8, __s27local6);
                }
              }
            }
            if (__s27local2 instanceof __dep_export_AIsoObjectVO.AIsoObjectVO) {
              __s27local2.init();
            }
            this._voList.get(__s27param1).set(__s27local7, __s27local2);
          } catch (__s42local0) {
            __dep_exact_9e901e8e2483a22f.debug(__s42local0.stack);
          }
        }
      }
    }
  };
  CastleWodData.prototype.getBuildingOriginalIdById = function (__s44param0) {
    if (!this._voList.get(CastleWodData.TYPE_BUILDING).get(__s44param0)) {
      __dep_exact_9e901e8e2483a22f.debug("The wodId:" + __s44param0 + " Was not located in the buildings");
      return __s44param0;
    }
    var __s44local0 = this._voList.get(CastleWodData.TYPE_BUILDING).get(__s44param0);
    var __s44local1 = __s44local0.objectType;
    if (__s44local1 == __dep_export_IsoObjectEnum.IsoObjectEnum.DECO || __s44local1 == __dep_export_IsoObjectEnum.IsoObjectEnum.RUBY_MINE || __s44local1 == __dep_export_IsoObjectEnum.IsoObjectEnum.COIN_MINE || __s44local1 == __dep_export_IsoObjectEnum.IsoObjectEnum.CUSTOM_DECO || __s44local1 == __dep_export_IsoObjectEnum.IsoObjectEnum.FACTION_DECO || __s44local1 == __dep_export_IsoObjectEnum.IsoObjectEnum.ALLIANCE_DECO) {
      return __s44param0;
    } else {
      return __dep_exact_f855840627e6e145.int(this._buildingsName2WodId.get(__s44local0.name)[CastleWodData.MAPPING_WODID]);
    }
  };
  CastleWodData.prototype.getUnitVOByWodId = function (__s49param0) {
    return this._voList.get(CastleWodData.TYPE_UNIT).get(__s49param0);
  };
  CastleWodData.prototype.getBuildingVOById = function (__s51param0) {
    var __s51local0 = this._voList.get(CastleWodData.TYPE_BUILDING).get(__s51param0);
    __s51local0 ||= this._voList.get(CastleWodData.TYPE_RUBY_WISHING_WELL).get(__s51param0);
    return __s51local0;
  };
  CastleWodData.prototype.voSubList = function (__s53param0) {
    return this._voList.get(__s53param0);
  };
  Object.defineProperty(CastleWodData.prototype, "itemsXmlVersion", {
    get: function () {
      return this._itemsXmlVersion;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleWodData.prototype, "wodXmlElements", {
    get: function () {
      return this._wodXmlElements;
    },
    enumerable: true,
    configurable: true
  });
  CastleWodData.__initialize_static_members = function () {
    CastleWodData.NAME = "CastleWodData";
    CastleWodData.TYPE_BUILDING = 0;
    CastleWodData.TYPE_UNIT = 1;
    CastleWodData.TYPE_HORSE = 2;
    CastleWodData.TYPE_RUBY_WISHING_WELL = 3;
    CastleWodData.MAPPING_WODID = "wodID";
    CastleWodData.MAPPING_LEVEL = "Level";
  };
  return CastleWodData;
}();
exports.CastleWodData = __s0local0;
var __dep_export_IsoObjectEnum = require("gge-module:export_IsoObjectEnum");
__s0local0.__initialize_static_members();
