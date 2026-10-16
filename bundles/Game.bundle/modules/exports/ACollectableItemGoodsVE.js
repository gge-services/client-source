Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function ACollectableItemGoodsVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ACollectableItemGoodsVE, __s1param0);
  ACollectableItemGoodsVE.prototype.textfieldUpdate = function () {
    this.textfieldSetTextAsNumber(this.vo.amount);
  };
  ACollectableItemGoodsVE.prototype.textfieldBackgroundVisible = function () {
    return true;
  };
  ACollectableItemGoodsVE.prototype.tooltipCreate = function () {
    return this.tooltipCreateByAmount(this.vo.getTooltipTextId());
  };
  ACollectableItemGoodsVE.prototype.costTextfieldUpdate = function () {
    this.costTextfieldSetAsAmountAndStorage();
  };
  return ACollectableItemGoodsVE;
}(require("gge-module:export_ACollectableItemSimpleIconVE").ACollectableItemSimpleIconVE);
exports.ACollectableItemGoodsVE = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
