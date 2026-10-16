Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __s0local0 = function (__s1param0) {
  function CollectableRendererStoragebar() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableRendererStoragebar, __s1param0);
  CollectableRendererStoragebar.prototype.reset = function () {
    if (this.clips.storageBar) {
      this.clips.storageBar.visible = false;
    }
  };
  CollectableRendererStoragebar.prototype.update = function () {
    if (this.clips.storageBar) {
      var __s8local0 = __dep_exact_9e901e8e2483a22f.MathBase.clamp(this.itemVE.storageBarScale(), 0, 1);
      this.clips.storageBar.visible = __s8local0 > 0;
      if (__s8local0 > 0) {
        this.clips.storageBar.scaleX = __s8local0;
        var __s8local1 = new __dep_exact_81dacdf05bd32292.ColorTransform();
        __s8local1.color = __s8local0 == 1 ? __dep_export_ClientConstColor.ClientConstColor.GENERIC_BRIGHT_RED : __s8local0 >= 0.8 ? __dep_export_ClientConstColor.ClientConstColor.GENERIC_BRIGHT_YELLOW : __dep_export_ClientConstColor.ClientConstColor.GENERIC_LIGHT_GREEN;
        this.clips.storageBar.useFilters([new createjs.ColorFilter(__s8local1.redMultiplier, __s8local1.greenMultiplier, __s8local1.blueMultiplier, __s8local1.alphaMultiplier, __s8local1.redOffset, __s8local1.greenOffset, __s8local1.blueOffset, __s8local1.alphaOffset)]);
      }
    }
  };
  CollectableRendererStoragebar.prototype.setVisibility = function (__s12param0) {
    if (this.clips.storageBar) {
      this.clips.storageBar.visible = __s12param0;
    }
  };
  return CollectableRendererStoragebar;
}(require("gge-module:export_ACollectableRenderComponent").ACollectableRenderComponent);
exports.CollectableRendererStoragebar = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
