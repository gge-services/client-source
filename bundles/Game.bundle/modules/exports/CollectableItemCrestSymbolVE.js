Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CrestHelper = require("gge-module:export_CrestHelper");
var __s0local0 = function (__s1param0) {
  function CollectableItemCrestSymbolVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemCrestSymbolVE, __s1param0);
  CollectableItemCrestSymbolVE.prototype.init = function (__s5param0, __s5param1) {
    __s1param0.prototype.init.call(this, __s5param0, __s5param1);
    this.triggerOnAllIconDispLoadedManually = true;
  };
  CollectableItemCrestSymbolVE.prototype.iconCreate = function () {
    this.dispCreator.addDisp(__dep_export_CrestHelper.CrestHelper.getCrestSymbolGraphic(this.itemCrestSystemVO.crestSymbolVO, this.options.icon.dimension.x, this.options.icon.dimension.y, false, this.bindFunction(this.onAllDispClipsLoaded)));
  };
  CollectableItemCrestSymbolVE.prototype.tooltipCreate = function () {
    return this.tooltipCreateByAmount(this.itemCrestSystemVO.crestSymbolVO.toolTipText);
  };
  Object.defineProperty(CollectableItemCrestSymbolVE.prototype, "itemCrestSystemVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return CollectableItemCrestSymbolVE;
}(require("gge-module:export_ACollectableItemVE").ACollectableItemVE);
exports.CollectableItemCrestSymbolVE = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
