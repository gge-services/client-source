Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ConstructionItemRenderer = require("gge-module:export_ConstructionItemRenderer");
var __dep_export_ConstructionItemTooltipHelper = require("gge-module:export_ConstructionItemTooltipHelper");
var __s0local0 = function (__s1param0) {
  function CollectableItemConstructionItemVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemConstructionItemVE, __s1param0);
  CollectableItemConstructionItemVE.prototype.init = function (__s5param0, __s5param1) {
    __s1param0.prototype.init.call(this, __s5param0, __s5param1);
    this.triggerOnAllIconDispLoadedManually = true;
  };
  CollectableItemConstructionItemVE.prototype.iconCreate = function () {
    this.iconContainer.visible = false;
    (this.options.icon.renderAsBroken ? __dep_export_ConstructionItemRenderer.ConstructionItemRenderer.renderBroken : __dep_export_ConstructionItemRenderer.ConstructionItemRenderer.render)(this.itemConstructionVO.constructionItemVO, this.bindFunction(this.onAllDispClipsLoaded), this.dispCreator.dispContainer);
  };
  CollectableItemConstructionItemVE.prototype.textfieldUpdate = function () {
    this.textfieldSetTextAsNumber(this.vo.amount);
  };
  CollectableItemConstructionItemVE.prototype.textfieldBackgroundVisible = function () {
    return true;
  };
  CollectableItemConstructionItemVE.prototype.tooltipCreate = function () {
    return null;
  };
  CollectableItemConstructionItemVE.prototype.tooltipShowAdvanced = function () {
    if (this.itemConstructionVO.constructionItemVO) {
      __dep_export_ConstructionItemTooltipHelper.ConstructionItemTooltipHelper.showConstructionItemToolTip(this.renderer.clips.getTooltipTargetMc(), this.itemConstructionVO.constructionItemVO);
    }
  };
  CollectableItemConstructionItemVE.prototype.onAllDispClipsLoaded = function (__s18param0 = null) {
    this.iconContainer.visible = true;
    __s1param0.prototype.onAllDispClipsLoaded.call(this, __s18param0);
  };
  Object.defineProperty(CollectableItemConstructionItemVE.prototype, "itemConstructionVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return CollectableItemConstructionItemVE;
}(require("gge-module:export_ACollectableItemVE").ACollectableItemVE);
exports.CollectableItemConstructionItemVE = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
