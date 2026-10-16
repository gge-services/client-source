Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstCollectable = require("gge-module:export_ClientConstCollectable");
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function () {
  function DaimyoXmlVO() {
    this._id = 0;
    this._rank = 0;
    this._level = 0;
    this._coolDown = 0;
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
  }
  DaimyoXmlVO.prototype.parseXML = function (__s5param0) {
    this._id = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("id", __s5param0, "0"));
    this._rank = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("rank", __s5param0, "0"));
    this._level = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("level", __s5param0, "0"));
    this._coolDown = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("coolDown", __s5param0, "0"));
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
  };
  DaimyoXmlVO.prototype.getId = function () {
    return this._id;
  };
  Object.defineProperty(DaimyoXmlVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoXmlVO.prototype, "rank", {
    get: function () {
      return this._rank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoXmlVO.prototype, "level", {
    get: function () {
      return this._level;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoXmlVO.prototype, "coolDown", {
    get: function () {
      return this._coolDown;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoXmlVO.prototype, "cooldownIncrease", {
    get: function () {
      return this._cooldownIncrease;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoXmlVO.prototype, "cooldownIncreaseCap", {
    get: function () {
      return this._cooldownIncreaseCap;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoXmlVO.prototype, "skipCost", {
    get: function () {
      return this._skipCost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoXmlVO.prototype, "skipCostIncrease", {
    get: function () {
      return this._skipCostIncrease;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoXmlVO.prototype, "skipCostIncreaseCap", {
    get: function () {
      return this._skipCostIncreaseCap;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoXmlVO.prototype, "wallBonus", {
    get: function () {
      return this._wallBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoXmlVO.prototype, "gateBonus", {
    get: function () {
      return this._gateBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoXmlVO.prototype, "moatBonus", {
    get: function () {
      return this._moatBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoXmlVO.prototype, "unitCapacity", {
    get: function () {
      return this._unitCapacity;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoXmlVO.prototype, "rewards", {
    get: function () {
      return this._rewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoXmlVO.prototype, "shogunPointsNeededForLevelUp", {
    get: function () {
      return this._shogunPointsNeededForLevelUp;
    },
    enumerable: true,
    configurable: true
  });
  return DaimyoXmlVO;
}();
exports.DaimyoXmlVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICastleXmlNode");
