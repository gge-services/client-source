Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function () {
  function TempServerConfigurationVO() {
    this.settingID = 0;
    this._presetVOs = [];
    this.peaceMode = false;
    this.startCurrencyAmount = 0;
    this.currencyLootFactorMin = 0;
    this.currencyID = 0;
    this.rewardSetID = 0;
    this.boosterCurrencyID = 0;
    this.currencyLootFactorMax = 0;
    this.boosterCurrencyValue = 0;
    this.boosterCurrencyPackageID = 0;
    this.boosterCurrencyLimit = 0;
    this.skinID = 0;
    this.neededChargePointsForAttack = 0;
  }
  TempServerConfigurationVO.prototype.parseXML = function (__s5param0) {
    this.settingID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("settingID", __s5param0, "0", true));
    this.presetIDs = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("presetIDs", __s5param0, "0", true).split(",");
    for (var __s5local0 = 0; __s5local0 < this.presetIDs.length; __s5local0++) {
      this.presetIDs[__s5local0] = parseInt(this.presetIDs[__s5local0]);
    }
    this.peaceMode = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("peaceMode", __s5param0, "0")) == 1;
    this.scoringSystem = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("scoringSystem", __s5param0, "0");
    this.startCurrencyAmount = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("startCurrencyAmount", __s5param0, "-1"));
    this.currencyLootFactorMin = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("currencyLootFactorMin", __s5param0, "0"));
    this.currencyID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("currencyID", __s5param0, "0"));
    this.rewardSetID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("rewardSetID", __s5param0, "0"));
    this.boosterCurrencyID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("boosterCurrencyID", __s5param0, "0"));
    this.boosterCurrencyLimit = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("boosterCurrencyLimit", __s5param0, "0"));
    this.boosterCurrencyPackageID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("boosterCurrencyPackageID", __s5param0, "0"));
    this.currencyLootFactorMax = Number(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("currencyLootFactorMax", __s5param0, "0"));
    this.boosterCurrencyValue = __dep_exact_f855840627e6e145.int(Number(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("boosterCurrencyValue", __s5param0, "0")));
    this.skinID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("skinID", __s5param0, "0"));
    this.neededChargePointsForAttack = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("costTonic", __s5param0, "0"));
  };
  Object.defineProperty(TempServerConfigurationVO.prototype, "skin", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialServerData.getSkinNameByID(this.skinID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TempServerConfigurationVO.prototype, "presetVOs", {
    get: function () {
      if (this._presetVOs.length <= 0 && this.presetIDs != null) {
        for (var __s11local0 = 0, __s11local1 = this.presetIDs; __s11local0 < __s11local1.length; __s11local0++) {
          var __s11local2 = __s11local1[__s11local0];
          if (__s11local2 !== undefined) {
            this._presetVOs.push(__dep_export_CastleModel.CastleModel.tempServerData.getPreBuildCastleVOByID(__s11local2));
          }
        }
      }
      return this._presetVOs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TempServerConfigurationVO.prototype, "isCastleTransportationOnly", {
    get: function () {
      return this.presetVOs.length == 1 && this.presetVOs[0].preBuildCastleVO.isMainCastleCopy;
    },
    enumerable: true,
    configurable: true
  });
  TempServerConfigurationVO.SCORING_SYSTEM_MIGHT = "might";
  TempServerConfigurationVO.SCORING_SYSTEM_COLLECTOR = "collector";
  TempServerConfigurationVO.SCORING_SYSTEM_RANK_SWAP = "rankSwap";
  return TempServerConfigurationVO;
}();
exports.TempServerConfigurationVO = __s0local0;
