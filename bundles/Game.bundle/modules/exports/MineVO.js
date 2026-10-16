Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function MineVO() {
    this.mineTypeID = 0;
    this.waitingTime = 0;
    this.amountPerCollect = NaN;
    this.totalAmount = NaN;
    this.totalLootableAmount = 0;
    this.amountInfluencePerMinute = 0;
    this.maxInfluencePoints = 0;
    this.reductionDisplay = 0;
  }
  MineVO.prototype.parseXML = function (__s5param0) {
    this.mineTypeID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("mineTypeID", __s5param0, "0"));
    this.waitingTime = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("waitingTime", __s5param0, "0"));
    var __s5local0 = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("amountPerCollectC2", __s5param0, "0"));
    var __s5local1 = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("amountPerCollectC1", __s5param0, "0"));
    this.amountPerCollect = __s5local1 || __s5local0;
    this.resType = __s5local0 > 0 ? __dep_export_CollectableEnum.CollectableEnum.C2 : __dep_export_CollectableEnum.CollectableEnum.C1;
    this.totalLootableAmount = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("amountLootable", __s5param0, "0"));
    this.totalAmount = this.amountPerCollect * this.totalLootableAmount;
    this.amountInfluencePerMinute = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("amountInfluencePerMinute", __s5param0, "0"));
    this.maxInfluencePoints = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("maxInfluencePoints", __s5param0, "0"));
    this.reductionDisplay = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("reductionDisplay", __s5param0, "0"));
  };
  return MineVO;
}();
exports.MineVO = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
