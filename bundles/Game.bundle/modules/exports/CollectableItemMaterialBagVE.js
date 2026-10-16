Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_MaterialBagRenderHelper = require("gge-module:export_MaterialBagRenderHelper");
var __dep_export_MaterialBagTooltipHelper = require("gge-module:export_MaterialBagTooltipHelper");
var __s0local0 = function (__s1param0) {
  function CollectableItemMaterialBagVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemMaterialBagVE, __s1param0);
  CollectableItemMaterialBagVE.prototype.init = function (__s5param0, __s5param1) {
    __s1param0.prototype.init.call(this, __s5param0, __s5param1);
    this.triggerOnAllIconDispLoadedManually = true;
  };
  CollectableItemMaterialBagVE.prototype.iconCreate = function () {
    this.iconContainer.visible = false;
    __dep_export_MaterialBagRenderHelper.MaterialBagRenderHelper.render(this.itemMaterialBagVO.materialBagVO, this.dispCreator.dispContainer, this.bindFunction(this.onAllDispClipsLoaded), this.options.icon.dimension);
  };
  CollectableItemMaterialBagVE.prototype.textfieldUpdate = function () {
    this.textfieldSetTextAsNumber(this.vo.amount);
  };
  CollectableItemMaterialBagVE.prototype.textfieldBackgroundVisible = function () {
    return true;
  };
  CollectableItemMaterialBagVE.prototype.tooltipShowAdvanced = function () {
    if (this.itemMaterialBagVO.materialBagVO) {
      __dep_export_MaterialBagTooltipHelper.MaterialBagTooltipHelper.showToolTip(this.renderer.clips.getTooltipTargetMc(), this.itemMaterialBagVO.materialBagVO, this.itemMaterialBagVO.amount);
    }
  };
  CollectableItemMaterialBagVE.prototype.onAllDispClipsLoaded = function (__s16param0 = null) {
    __s1param0.prototype.onAllDispClipsLoaded.call(this, __s16param0);
    this.iconContainer.visible = true;
  };
  Object.defineProperty(CollectableItemMaterialBagVE.prototype, "itemMaterialBagVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return CollectableItemMaterialBagVE;
}(require("gge-module:export_ACollectableItemVE").ACollectableItemVE);
exports.CollectableItemMaterialBagVE = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
