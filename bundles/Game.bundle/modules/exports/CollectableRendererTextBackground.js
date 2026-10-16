Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function CollectableRendererTextBackground() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableRendererTextBackground, __s1param0);
  CollectableRendererTextBackground.prototype.reset = function () {
    if (this.clips.textBackgroundMc) {
      this.clips.textBackgroundMc.visible = false;
    }
  };
  CollectableRendererTextBackground.prototype.update = function () {
    if (this.clips.textBackgroundMc) {
      this.clips.textBackgroundMc.visible = this.itemVE.textfieldBackgroundVisible();
    }
  };
  CollectableRendererTextBackground.prototype.setVisibility = function (__s11param0) {
    if (this.clips.textBackgroundMc) {
      this.clips.textBackgroundMc.visible = __s11param0;
    }
  };
  return CollectableRendererTextBackground;
}(require("gge-module:export_ACollectableRenderComponent").ACollectableRenderComponent);
exports.CollectableRendererTextBackground = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
