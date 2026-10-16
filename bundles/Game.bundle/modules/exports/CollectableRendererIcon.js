Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function CollectableRendererIcon() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableRendererIcon, __s1param0);
  CollectableRendererIcon.prototype.reset = function () {
    if (this.clips.iconMc) {
      __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.clips.iconMc);
    }
  };
  CollectableRendererIcon.prototype.update = function () {
    if (this.clips.iconMc) {
      this.clips.iconMc.addChild(this.itemVE.iconContainer);
      this.itemVE.onIconDispLoaded = this.renderer.bindFunction(this.renderer.onIconLoaded);
      this.itemVE.iconUpdate();
    }
  };
  CollectableRendererIcon.prototype.setVisibility = function (__s11param0) {
    if (this.clips.iconMc) {
      this.clips.iconMc.visible = __s11param0;
    }
  };
  return CollectableRendererIcon;
}(require("gge-module:export_ACollectableRenderComponent").ACollectableRenderComponent);
exports.CollectableRendererIcon = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
