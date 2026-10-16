Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ACollectableRenderComponent = require("gge-module:export_ACollectableRenderComponent");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function (__s1param0) {
  function CollectableRendererTooltip() {
    var __s3local0 = __s1param0 !== null && __s1param0.apply(this, arguments) || this;
    __s3local0.onMobileClickCount = 0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableRendererTooltip, __s1param0);
  CollectableRendererTooltip.prototype.reset = function () {
    var __s5local0 = this.renderer.clips.getTooltipTargetMc();
    if (__s5local0) {
      __s5local0.toolTipText = null;
    }
  };
  CollectableRendererTooltip.prototype.addListener = function () {
    var __s8local0 = this.renderer.clips.getTooltipTargetMc();
    if (__s8local0) {
      __s8local0.addEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onMouseOver));
      __s8local0.addEventListener(__s0local0.CLICK, this.bindFunction(this.onMobileClick));
    }
  };
  CollectableRendererTooltip.prototype.removeListener = function () {
    var __s11local0 = this.renderer.clips.getTooltipTargetMc();
    if (__s11local0) {
      __s11local0.removeEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onMouseOver));
      __s11local0.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onMobileClick));
    }
  };
  CollectableRendererTooltip.prototype.update = function () {
    this.itemVE.tooltipUpdate();
  };
  CollectableRendererTooltip.prototype.onMouseOver = function (__s16param0) {
    var __s16local0 = this.renderer.clips.getTooltipTargetMc();
    if (this.itemVE && __s16local0 && __s16param0.target == __s16local0 && !this.renderer.options.tooltip.useSimpleTooltips) {
      this.itemVE.isTouch = __dep_exact_81dacdf05bd32292.currentBrowserInfo.isTouchEvent(__s16param0);
      this.itemVE.tooltipShowAdvanced();
    }
  };
  CollectableRendererTooltip.prototype.onMobileClick = function (__s19param0) {
    if (__dep_exact_81dacdf05bd32292.currentBrowserInfo.isTouchEvent(__s19param0)) {
      if (this.onMobileClickCount === 0) {
        this.onMouseOver(__s19param0);
        __s19param0.stopPropagation();
        this.onMobileClickCount = 1;
      } else {
        this.onMobileClickCount = 0;
      }
    }
  };
  return CollectableRendererTooltip;
}(__dep_export_ACollectableRenderComponent.ACollectableRenderComponent);
exports.CollectableRendererTooltip = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
