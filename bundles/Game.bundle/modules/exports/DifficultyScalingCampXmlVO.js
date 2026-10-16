Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstCollectable = require("gge-module:export_ClientConstCollectable");
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function () {
  function DifficultyScalingCampXmlVO() {
    this._id = 0;
    this._rank = 0;
    this._level = 0;
    this._coolDown = 0;
    this._eventID = 0;
    this._cooldownIncrease = 0;
    this._cooldownIncreaseCap = 0;
    this._skipCost = 0;
    this._skipCostIncrease = 0;
    this._skipCostIncreaseCap = 0;
    this._wallBonus = 0;
    this._gateBonus = 0;
    this._moatBonus = 0;
    this._unitCapacity = 0;
    this._shogunPointsNeededForLevelUp = 0;
    this._normalDiffDefStrengthBoostMinDefense = 0;
    this._normalDiffDefStrengthBoostMaxDefense = 0;
    this._premiumDiffDefStrengthBoostMinDefense = 0;
    this._premiumDiffDefStrengthBoostMaxDefense = 0;
  }
  DifficultyScalingCampXmlVO.prototype.parseXML = function (__s5param0) {
    this._id = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("eventAutoScalingCampID", __s5param0, "0"));
    this._rank = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("rank", __s5param0, "0"));
    this._level = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("camplevel", __s5param0, "0"));
    this._coolDown = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("coolDown", __s5param0, "0"));
    this._eventID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("eventID", __s5param0, "0"));
    this._cooldownIncrease = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("cooldownIncrease", __s5param0, "0"));
    this._cooldownIncreaseCap = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("cooldownIncreaseCap", __s5param0, "0"));
    this._skipCost = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("skipCosts", __s5param0, "0"));
    this._skipCostIncrease = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("skipCostIncrease", __s5param0, "0"));
    this._skipCostIncreaseCap = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("skipCostIncreaseCap", __s5param0, "0"));
    this._wallBonus = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("wallBonus", __s5param0, "0"));
    this._gateBonus = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("gateBonus", __s5param0, "0"));
    this._moatBonus = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("moatBonus", __s5param0, "0"));
    this._unitCapacity = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("unitCapacity", __s5param0, "0"));
    this._rewards = __dep_export_CollectableManager.CollectableManager.parser.x2cList.createList(__s5param0, __dep_export_ClientConstCollectable.ClientConstCollectable.XML_PREFIX_ADD);
    this._shogunPointsNeededForLevelUp = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("shogunPointsNeededForLevelUp", __s5param0, "-1"));
    this._playerRageCap = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("playerRageCap", __s5param0, "-1"));
    this._rageNeededForLevelUp = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("rageNeededForLevelUp", __s5param0, "-1"));
    this._normalDiffDefStrengthBoostMinDefense = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("normalDiffDefStrengthBoostMinDefense", __s5param0, "0"));
    this._normalDiffDefStrengthBoostMaxDefense = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("normalDiffDefStrengthBoostMaxDefense", __s5param0, "0"));
    this._premiumDiffDefStrengthBoostMinDefense = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("premiumDiffDefStrengthBoostMinDefense", __s5param0, "0"));
    this._premiumDiffDefStrengthBoostMaxDefense = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("premiumDiffDefStrengthBoostMaxDefense", __s5param0, "0"));
  };
  DifficultyScalingCampXmlVO.prototype.getId = function () {
    return this._id;
  };
  Object.defineProperty(DifficultyScalingCampXmlVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DifficultyScalingCampXmlVO.prototype, "rank", {
    get: function () {
      return this._rank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DifficultyScalingCampXmlVO.prototype, "level", {
    get: function () {
      return this._level;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DifficultyScalingCampXmlVO.prototype, "coolDown", {
    get: function () {
      return this._coolDown;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DifficultyScalingCampXmlVO.prototype, "cooldownIncrease", {
    get: function () {
      return this._cooldownIncrease;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DifficultyScalingCampXmlVO.prototype, "cooldownIncreaseCap", {
    get: function () {
      return this._cooldownIncreaseCap;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DifficultyScalingCampXmlVO.prototype, "skipCost", {
    get: function () {
      return this._skipCost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DifficultyScalingCampXmlVO.prototype, "skipCostIncrease", {
    get: function () {
      return this._skipCostIncrease;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DifficultyScalingCampXmlVO.prototype, "skipCostIncreaseCap", {
    get: function () {
      return this._skipCostIncreaseCap;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DifficultyScalingCampXmlVO.prototype, "wallBonus", {
    get: function () {
      return this._wallBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DifficultyScalingCampXmlVO.prototype, "gateBonus", {
    get: function () {
      return this._gateBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DifficultyScalingCampXmlVO.prototype, "moatBonus", {
    get: function () {
      return this._moatBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DifficultyScalingCampXmlVO.prototype, "unitCapacity", {
    get: function () {
      return this._unitCapacity;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DifficultyScalingCampXmlVO.prototype, "rewards", {
    get: function () {
      return this._rewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DifficultyScalingCampXmlVO.prototype, "shogunPointsNeededForLevelUp", {
    get: function () {
      return this._shogunPointsNeededForLevelUp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DifficultyScalingCampXmlVO.prototype, "camplevel", {
    get: function () {
      return this._camplevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DifficultyScalingCampXmlVO.prototype, "playerRageCap", {
    get: function () {
      return this._playerRageCap;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DifficultyScalingCampXmlVO.prototype, "rageNeededForLevelUp", {
    get: function () {
      return this._rageNeededForLevelUp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DifficultyScalingCampXmlVO.prototype, "isMaxLevel", {
    get: function () {
      return this._rageNeededForLevelUp == -1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DifficultyScalingCampXmlVO.prototype, "eventID", {
    get: function () {
      return this._eventID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DifficultyScalingCampXmlVO.prototype, "normalDiffDefStrengthBoostMinDefense", {
    get: function () {
      return this._normalDiffDefStrengthBoostMinDefense;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DifficultyScalingCampXmlVO.prototype, "normalDiffDefStrengthBoostMaxDefense", {
    get: function () {
      return this._normalDiffDefStrengthBoostMaxDefense;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DifficultyScalingCampXmlVO.prototype, "premiumDiffDefStrengthBoostMinDefense", {
    get: function () {
      return this._premiumDiffDefStrengthBoostMinDefense;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DifficultyScalingCampXmlVO.prototype, "premiumDiffDefStrengthBoostMaxDefense", {
    get: function () {
      return this._premiumDiffDefStrengthBoostMaxDefense;
    },
    enumerable: true,
    configurable: true
  });
  return DifficultyScalingCampXmlVO;
}();
exports.DifficultyScalingCampXmlVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICastleXmlNode");
