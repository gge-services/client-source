Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function () {
  function RerollCostVO(__s3param0) {
    this.id = 0;
    this.rerollCount = 0;
    this.c1Cost = 0;
    this.c2Cost = 0;
    this.id = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("id", __s3param0, -1));
    this.type = __dep_export_CastleXMLUtils.CastleXMLUtils.getStringAttribute("type", __s3param0);
    this.rerollCount = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("rerollCount", __s3param0, -1));
    this.c1Cost = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("c1Cost", __s3param0, -1));
    this.c2Cost = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("c2Cost", __s3param0, -1));
    this.softCosts = __dep_export_CollectableManager.CollectableManager.parser.x2cList.createList(__s3param0, __dep_export_ClientConstCollectable.ClientConstCollectable.XML_PREFIX_COST);
  }
  RerollCostVO.prototype.getEventCostsAsCollectableVOByID = function (__s5param0) {
    return this.softCosts.getFirstItemOfTypeVO(new __dep_export_CollectableTypeVO.CollectableTypeVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __s5param0));
  };
  return RerollCostVO;
}();
exports.RerollCostVO = __s0local0;
var __dep_export_ClientConstCollectable = require("gge-module:export_ClientConstCollectable");
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableTypeVO = require("gge-module:export_CollectableTypeVO");
