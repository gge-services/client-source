Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BonusVO = require("gge-module:export_BonusVO");
var __s0local0 = function (__s1param0) {
  function AllianceBuffVO() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.allianceBuffID = 0;
    __s3local0.nextAllianceBuffID = 0;
    __s3local0.seriesID = 0;
    __s3local0.level = 0;
    __s3local0.maxLevel = 0;
    __s3local0.duration = 0;
    __s3local0.requiredMemberBuffLevel = 0;
    __s3local0.forgingCostC1 = 0;
    __s3local0.availableInAllianceFunds = false;
    __s3local0.requiredBuffID = -1;
    __s3local0.resetOnEventEnd = -1;
    __s3local0.isBattleground = false;
    __s3local0.hiddenBattleGround = false;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AllianceBuffVO, __s1param0);
  AllianceBuffVO.prototype.fillFromParamXml = function (__s5param0) {
    this.level = parseInt(__s5param0.level || "");
    this.maxLevel = parseInt(__s5param0.maxLevel || "");
    this.allianceBuffID = parseInt(__s5param0.allianceBuffID || "");
    this.seriesID = parseInt(__s5param0.allianceBuffSeriesID || "");
    this.nextAllianceBuffID = parseInt(__s5param0.nextAllianceBuffID || "");
    this.duration = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("duration", __s5param0, "-1"));
    this.costsList = __dep_export_CollectableManager.CollectableManager.parser.x2cList.createList(__s5param0, __dep_export_ClientConstCollectable.ClientConstCollectable.XML_PREFIX_COST);
    this.forgingCostC1 = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("forgingCostC1", __s5param0, "0"));
    this.requiredBuffID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("requiredBuffID", __s5param0, "-1"));
    this.availableInAllianceFunds = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("availableInAllianceFunds", __s5param0, "1")) == 1;
    this.resetOnEventEnd = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("resetOnEventEnd", __s5param0, "-1"));
    this.isBattleground = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("isBattleground", __s5param0, "0")) == 1;
    this.hiddenBattleGround = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("hiddenBattleGround", __s5param0, "0")) == 1;
    var __s5local0 = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("effects", __s5param0, "");
    if (__s5local0 != "") {
      for (var __s5local1 = 0, __s5local2 = __s5local0.split(","); __s5local1 < __s5local2.length; __s5local1++) {
        var __s5local3 = __s5local2[__s5local1];
        if (__s5local3.length > 0) {
          var __s5local4 = __s5local3.split("&");
          var __s5local5 = __dep_export_CastleModel.CastleModel.effectsData.getEffectByID(parseInt(__s5local4[0]));
          var __s5local6 = new __dep_export_BonusVO.BonusVO().parseFromValueString(__s5local5, __s5local4[1]);
          this._boni.push(__s5local6);
        }
      }
    }
  };
  return AllianceBuffVO;
}(require("gge-module:export_EffectsHandlerVO").EffectsHandlerVO);
exports.AllianceBuffVO = __s0local0;
var __dep_export_ClientConstCollectable = require("gge-module:export_ClientConstCollectable");
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
