Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  return function DecorationForgeMainDialogCostInfoVO() {
    this.energy = new __dep_export_DecorationForgeMainDialogCostInfoVOItem.DecorationForgeMainDialogCostInfoVOItem();
    this.fusionCurrency = new __dep_export_DecorationForgeMainDialogCostInfoVOItem.DecorationForgeMainDialogCostInfoVOItem();
    this.sequenceCurrency = new __dep_export_DecorationForgeMainDialogCostInfoVOItem.DecorationForgeMainDialogCostInfoVOItem();
    this.c2 = new __dep_export_DecorationForgeMainDialogCostInfoVOItem.DecorationForgeMainDialogCostInfoVOItem();
    this.fusionCurrency.collectableType = new __dep_export_CollectableTypeVO.CollectableTypeVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_FUSION_CURRENCY);
    this.c2.collectableType = new __dep_export_CollectableTypeVO.CollectableTypeVO(__dep_export_CollectableEnum.CollectableEnum.C2);
  };
}();
exports.DecorationForgeMainDialogCostInfoVO = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableTypeVO = require("gge-module:export_CollectableTypeVO");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __dep_export_DecorationForgeMainDialogCostInfoVOItem = require("gge-module:export_DecorationForgeMainDialogCostInfoVOItem");
