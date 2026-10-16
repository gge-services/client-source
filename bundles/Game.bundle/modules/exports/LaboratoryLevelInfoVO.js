Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function LaboratoryLevelInfoVO() {
    this._level = 0;
    this._ironAllianceBoost = 0;
    this._charcoalAllianceBoost = 0;
    this._oliveOilAllianceBoost = 0;
    this._glassAllianceBoost = 0;
    this._requiredPoints = 0;
    this._kingdomID = 0;
  }
  LaboratoryLevelInfoVO.prototype.parseXML = function (__s5param0) {
    this._level = parseInt(__s5param0.level || "");
    this._ironAllianceBoost = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("ironAllianceBoost", __s5param0, "0"));
    this._charcoalAllianceBoost = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("charcoalAllianceBoost", __s5param0, "0"));
    this._oliveOilAllianceBoost = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("oliveOilAllianceBoost", __s5param0, "0"));
    this._glassAllianceBoost = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("glassAllianceBoost", __s5param0, "0"));
    this._requiredPoints = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("requiredPoints", __s5param0, "0"));
    this._kingdomID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("kID", __s5param0, "0"));
  };
  Object.defineProperty(LaboratoryLevelInfoVO.prototype, "level", {
    get: function () {
      return this._level;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LaboratoryLevelInfoVO.prototype, "landmarkBonus", {
    get: function () {
      return Math.max(this._ironAllianceBoost, this._charcoalAllianceBoost, this._oliveOilAllianceBoost, this._glassAllianceBoost);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LaboratoryLevelInfoVO.prototype, "requiredPoints", {
    get: function () {
      return this._requiredPoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LaboratoryLevelInfoVO.prototype, "kingdomID", {
    get: function () {
      return this._kingdomID;
    },
    enumerable: true,
    configurable: true
  });
  return LaboratoryLevelInfoVO;
}();
exports.LaboratoryLevelInfoVO = __s0local0;
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpgradableLandmarkLevelInfoVO");
