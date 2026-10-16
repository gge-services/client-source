Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __s0local0 = function (__s1param0) {
  function CollectableRendererColorBackground() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableRendererColorBackground, __s1param0);
  CollectableRendererColorBackground.prototype.reset = function () {
    if (this.clips.colorBackgroundMc) {
      this.clips.colorBackgroundMc.gotoAndStop(5);
    }
  };
  CollectableRendererColorBackground.prototype.update = function () {
    if (this.clips.colorBackgroundMc) {
      var __s8local0 = 5;
      if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.itemVO, "ACollectableItemEquipmentVO")) {
        var __s8local1 = __dep_exact_f855840627e6e145.int(this.itemVO.equipmentVO.visualRareID);
        if (__s8local1 >= 1 && __s8local1 <= 4) {
          __s8local0 = __s8local1;
        }
      }
      this.clips.colorBackgroundMc.gotoAndStop(__s8local0);
    }
  };
  CollectableRendererColorBackground.prototype.setVisibility = function (__s13param0) {
    if (this.clips.colorBackgroundMc) {
      this.clips.colorBackgroundMc.visible = __s13param0;
    }
  };
  return CollectableRendererColorBackground;
}(require("gge-module:export_ACollectableRenderComponent").ACollectableRenderComponent);
exports.CollectableRendererColorBackground = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
