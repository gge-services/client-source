Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __s0local0 = function () {
  function SpecialServerPreBuiltCastleVO() {
    this.preBuiltCastleID = 0;
    this.startResourceID = 0;
  }
  SpecialServerPreBuiltCastleVO.prototype.parseXML = function (__s5param0) {
    this.preBuiltCastleID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("preBuiltCastleID", __s5param0, "0", true));
    this.preBuildCastleVO = __dep_export_CastleModel.CastleModel.prebuiltCastleData.getCastleByID(this.preBuiltCastleID);
    this.startResourceID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("startResourceID", __s5param0, "0", true));
    this.startPlayerLevel = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("startPlayerLevel", __s5param0, "0"));
    this.startPlayerLegendLevel = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("startPlayerLegendLevel", __s5param0, "0"));
    this.currencyBuyPackageID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("castlePassageTokenPackageID", __s5param0, "0"));
    this.costs = __dep_export_CollectableManager.CollectableManager.parser.x2cEventPackages.createCostList(__s5param0);
    if (this.costs.length == 1 && this.costs.list[0].amount == 0 && this.preBuildCastleVO.primaryCosts.length > 0) {
      this.costs = this.preBuildCastleVO.primaryCosts.clone();
    }
  };
  Object.defineProperty(SpecialServerPreBuiltCastleVO.prototype, "startResourceVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.allianceBattlegroundData.getStartResourcesVOByID(this.startResourceID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SpecialServerPreBuiltCastleVO.prototype, "currencyBuyPackage", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.eventPackageData.getEventPackageByID(this.currencyBuyPackageID);
    },
    enumerable: true,
    configurable: true
  });
  SpecialServerPreBuiltCastleVO.prototype.getNameText = function () {
    if (this.preBuildCastleVO.isMainCastleCopy) {
      return __dep_export_CastleModel.CastleModel.userData.castleList.getHomeCastle().areaNameString;
    } else {
      return __dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_chooseCastle_preBuiltCastle_" + this.preBuiltCastleID);
    }
  };
  return SpecialServerPreBuiltCastleVO;
}();
exports.SpecialServerPreBuiltCastleVO = __s0local0;
