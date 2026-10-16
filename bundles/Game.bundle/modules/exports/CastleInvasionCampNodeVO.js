Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleInvasionCampNodeVO() {
    this._countVictory = 0;
    this._coolDown = 0;
    this._skipCost = 0;
    this._wallBonus = 0;
    this._gateBonus = 0;
    this._campSize = 0;
    this._factionID = 0;
  }
  CastleInvasionCampNodeVO.prototype.parseXML = function (__s5param0) {
    this._countVictory = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("countVictory", __s5param0, "0"));
    this._coolDown = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("coolDown", __s5param0, "0"));
    this._skipCost = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("skipCosts", __s5param0, "0"));
    this._wallBonus = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("wallBonus", __s5param0, "0"));
    this._gateBonus = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("gateBonus", __s5param0, "0"));
    this._campSize = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("campSize", __s5param0, "0"));
    this._factionID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("factionID", __s5param0, "0"));
  };
  CastleInvasionCampNodeVO.prototype.getId = function () {
    return this._countVictory;
  };
  Object.defineProperty(CastleInvasionCampNodeVO.prototype, "countVictory", {
    get: function () {
      return this._countVictory;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleInvasionCampNodeVO.prototype, "coolDown", {
    get: function () {
      return this._coolDown;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleInvasionCampNodeVO.prototype, "skipCost", {
    get: function () {
      return this._skipCost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleInvasionCampNodeVO.prototype, "wallBonus", {
    get: function () {
      return this._wallBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleInvasionCampNodeVO.prototype, "gateBonus", {
    get: function () {
      return this._gateBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleInvasionCampNodeVO.prototype, "campSize", {
    get: function () {
      return this._campSize;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleInvasionCampNodeVO.prototype, "factionID", {
    get: function () {
      return this._factionID;
    },
    enumerable: true,
    configurable: true
  });
  return CastleInvasionCampNodeVO;
}();
exports.CastleInvasionCampNodeVO = __s0local0;
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICastleXmlNode");
