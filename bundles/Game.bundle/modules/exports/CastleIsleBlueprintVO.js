Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleIsleBlueprintVO(__s3param0) {
    this._isleID = 0;
    this._dungeonLevel = 0;
    this._maxVictories = 0;
    this._lootWood = 0;
    this._lootStone = 0;
    this._lootFood = 0;
    this._lootAquamarine = 0;
    this._fixedLootWood = 0;
    this._fixedLootStone = 0;
    this._fixedLootFood = 0;
    this._fixedLootAquamarine = 0;
    this._occupationTime = 0;
    this._baseWallBonus = 0;
    this._baseGateBonus = 0;
    this._baseMoatBonus = 0;
    this._wallLevel = 0;
    this._gateLevel = 0;
    this._moatLevel = 0;
    this._towerLevel = 0;
    this.fillFromParamXML(__s3param0);
  }
  CastleIsleBlueprintVO.prototype.fillFromParamXML = function (__s5param0) {
    this._isleID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("IsleID", __s5param0, "0"));
    this._type = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("type", __s5param0, "UNKNOWN");
    this._dungeonLevel = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("dungeonlevel", __s5param0, "0"));
    this._maxVictories = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("maxCountVictories", __s5param0, "-1"));
    this._lootWood = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("lootWood", __s5param0, "-1"));
    this._lootStone = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("lootStone", __s5param0, "-1"));
    this._lootFood = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("lootFood", __s5param0, "-1"));
    this._lootAquamarine = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("lootAquamarine", __s5param0, "-1"));
    this._fixedLootWood = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("fixedLootWood", __s5param0, "-1"));
    this._fixedLootStone = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("fixedLootStone", __s5param0, "-1"));
    this._fixedLootFood = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("fixedLootFood", __s5param0, "-1"));
    this._fixedLootAquamarine = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("fixedLootAquamarine", __s5param0, "-1"));
    this._occupationTime = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("occupationTime", __s5param0, "0"));
    this._baseWallBonus = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("wallBonus", __s5param0, "0"));
    this._baseGateBonus = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("gateBonus", __s5param0, "0"));
    this._baseMoatBonus = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("moatBonus", __s5param0, "0"));
    this._wallLevel = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("wallLevel", __s5param0, "0"));
    this._gateLevel = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("gateLevel", __s5param0, "0"));
    this._moatLevel = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("moatLevel", __s5param0, "0"));
    this._towerLevel = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("towerLevel", __s5param0, "0"));
  };
  CastleIsleBlueprintVO.prototype.getVillageResourceType = function () {
    if (__dep_exact_f855840627e6e145.int(this._type.indexOf("VILLAGE")) < 0) {
      return __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.WorldConst.VILLAGE_TYPE_WOOD);
    }
    var __s7local0 = this._type.substr("VILLAGE".length).toLowerCase();
    switch (__dep_export_CollectableEnum.CollectableEnum.getTypeByXmlKey(__s7local0)) {
      case __dep_export_CollectableEnum.CollectableEnum.WOOD:
        return __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.WorldConst.VILLAGE_TYPE_WOOD);
      case __dep_export_CollectableEnum.CollectableEnum.STONE:
        return __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.WorldConst.VILLAGE_TYPE_STONE);
      case __dep_export_CollectableEnum.CollectableEnum.FOOD:
        return __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.WorldConst.VILLAGE_TYPE_FOOD);
      case __dep_export_CollectableEnum.CollectableEnum.AQUAMARINE:
        return __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.WorldConst.VILLAGE_TYPE_AQUAMARINE);
    }
    return __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.WorldConst.VILLAGE_TYPE_WOOD);
  };
  Object.defineProperty(CastleIsleBlueprintVO.prototype, "isleID", {
    get: function () {
      return this._isleID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleIsleBlueprintVO.prototype, "type", {
    get: function () {
      return this._type;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleIsleBlueprintVO.prototype, "dungeonLevel", {
    get: function () {
      return this._dungeonLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleIsleBlueprintVO.prototype, "maxVictories", {
    get: function () {
      return this._maxVictories;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleIsleBlueprintVO.prototype, "lootWood", {
    get: function () {
      return this._lootWood;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleIsleBlueprintVO.prototype, "lootStone", {
    get: function () {
      return this._lootStone;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleIsleBlueprintVO.prototype, "lootFood", {
    get: function () {
      return this._lootFood;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleIsleBlueprintVO.prototype, "lootAquamarine", {
    get: function () {
      return this._lootAquamarine;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleIsleBlueprintVO.prototype, "fixedLootWood", {
    get: function () {
      return this._fixedLootWood;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleIsleBlueprintVO.prototype, "fixedLootStone", {
    get: function () {
      return this._fixedLootStone;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleIsleBlueprintVO.prototype, "fixedLootFood", {
    get: function () {
      return this._fixedLootFood;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleIsleBlueprintVO.prototype, "fixedLootAquamarine", {
    get: function () {
      return this._fixedLootAquamarine;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleIsleBlueprintVO.prototype, "occupationTime", {
    get: function () {
      return this._occupationTime;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleIsleBlueprintVO.prototype, "baseWallBonus", {
    get: function () {
      return this._baseWallBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleIsleBlueprintVO.prototype, "baseGateBonus", {
    get: function () {
      return this._baseGateBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleIsleBlueprintVO.prototype, "baseMoatBonus", {
    get: function () {
      return this._baseMoatBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleIsleBlueprintVO.prototype, "wallLevel", {
    get: function () {
      return this._wallLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleIsleBlueprintVO.prototype, "gateLevel", {
    get: function () {
      return this._gateLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleIsleBlueprintVO.prototype, "moatLevel", {
    get: function () {
      return this._moatLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleIsleBlueprintVO.prototype, "towerLevel", {
    get: function () {
      return this._towerLevel;
    },
    enumerable: true,
    configurable: true
  });
  return CastleIsleBlueprintVO;
}();
exports.CastleIsleBlueprintVO = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
