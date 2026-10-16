Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function () {
  function AllianceBattleGroundConfigurationVO() {
    this.settingID = 0;
    this._presetVOs = [];
    this.scoringSystemID = 0;
    this.allianceRewardSetID = 0;
    this.playerRewardSetID = 0;
    this.skinID = 0;
    this._maxAllianceSize = 0;
    this._customAllianceSize = 0;
    this.mapID = 0;
    this.currencyID = 0;
    this.allianceCurrencyID = 0;
    this.malusCurrencyID = 0;
    this.currencyLootFactorMin = 0;
    this.allianceCurrencyLootFactorMin = 0;
    this.boosterCurrencyID = 0;
    this.boosterCurrencyValue = 0;
    this.boosterCurrencyLimit = 0;
    this.currencyLootFactorMax = 0;
    this.boosterCurrencyPackageID = 0;
    this.metropolisLandmarkID = 0;
    this.capitalLandmarkID = 0;
  }
  AllianceBattleGroundConfigurationVO.prototype.parseXML = function (__s5param0) {
    this.settingID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("settingID", __s5param0, "0", true));
    this._maxAllianceSize = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("maxAllianceSize", __s5param0, "0", true));
    this.presetIDs = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("presetIDs", __s5param0, "0", true).split(",");
    for (var __s5local0 = 0; __s5local0 < this.presetIDs.length; __s5local0++) {
      var __s5local1 = parseInt(this.presetIDs[__s5local0]);
      this.presetIDs[__s5local0] = __s5local1;
    }
    this.scoringSystemID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("scoringID", __s5param0, "0"));
    this.mapID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("mapID", __s5param0, "0"));
    this.skinID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("skinID", __s5param0, "0"));
    this.allianceRewardSetID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("allianceRewardSetID", __s5param0, "0"));
    this.playerRewardSetID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("playerRewardSetID", __s5param0, "0"));
    this.currencyID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("currencyID", __s5param0, "0"));
    this.allianceCurrencyID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("allianceCurrencyID", __s5param0, "0"));
    this.malusCurrencyID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("malusCurrencyID", __s5param0, "0"));
    this.currencyLootFactorMin = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("currencyLootFactorMin", __s5param0, "0"));
    this.allianceCurrencyLootFactorMin = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("allianceCurrencyLootFactorMin", __s5param0, "0"));
    this.boosterCurrencyID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("boosterCurrencyID", __s5param0, "0"));
    this.boosterCurrencyValue = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("boosterCurrencyValue", __s5param0, "0"));
    this.boosterCurrencyLimit = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("boosterCurrencyLimit", __s5param0, "0"));
    this.currencyLootFactorMax = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("currencyLootFactorMax", __s5param0, "0"));
    this.boosterCurrencyPackageID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("boosterCurrencyPackageID", __s5param0, "0"));
    this.metropolisLandmarkID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("metropolisLandmarkID", __s5param0, "0"));
    this.capitalLandmarkID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("capitalLandmarkID", __s5param0, "0"));
    this.availableAllianceTowerEffectIDs = __dep_export_CastleXMLUtils.CastleXMLUtils.createIntListFromAttribute("allianceTowerEffectIDs", __s5param0);
  };
  Object.defineProperty(AllianceBattleGroundConfigurationVO.prototype, "presetVOs", {
    get: function () {
      if (this._presetVOs.length <= 0 && this.presetIDs != null) {
        for (var __s9local0 = 0, __s9local1 = this.presetIDs; __s9local0 < __s9local1.length; __s9local0++) {
          var __s9local2 = __s9local1[__s9local0];
          if (__s9local2 !== undefined) {
            this._presetVOs.push(__dep_export_CastleModel.CastleModel.allianceBattlegroundData.getPreBuildCastleVOByID(__s9local2));
          }
        }
      }
      return this._presetVOs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceBattleGroundConfigurationVO.prototype, "scoringSystemVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.allianceBattlegroundData.getScoringSystemByID(this.scoringSystemID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceBattleGroundConfigurationVO.prototype, "skin", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialServerData.getSkinNameByID(this.skinID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceBattleGroundConfigurationVO.prototype, "maxAllianceSize", {
    get: function () {
      if (this._customAllianceSize > 0) {
        return this._customAllianceSize;
      } else {
        return this._maxAllianceSize;
      }
    },
    set: function (__s23param0) {
      this._customAllianceSize = __s23param0;
    },
    enumerable: true,
    configurable: true
  });
  return AllianceBattleGroundConfigurationVO;
}();
exports.AllianceBattleGroundConfigurationVO = __s0local0;
