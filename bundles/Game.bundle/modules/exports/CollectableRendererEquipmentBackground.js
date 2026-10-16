Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __s0local0 = function (__s1param0) {
  function CollectableRendererEquipmentBackground() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableRendererEquipmentBackground, __s1param0);
  CollectableRendererEquipmentBackground.prototype.reset = function () {
    if (this.clips.equipmentBackgroundMc) {
      this.clips.equipmentBackgroundMc.visible = false;
    }
  };
  CollectableRendererEquipmentBackground.prototype.update = function () {
    if (this.clips.equipmentBackgroundMc) {
      if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.itemVO, "ACollectableItemEquipmentVO")) {
        this.setEquipmentBackground();
      } else {
        this.clips.equipmentBackgroundMc.visible = false;
      }
    }
  };
  CollectableRendererEquipmentBackground.prototype.setVisibility = function (__s13param0) {
    if (this.clips.equipmentBackgroundMc) {
      this.clips.equipmentBackgroundMc.visible = false;
    }
  };
  CollectableRendererEquipmentBackground.prototype.setEquipmentBackground = function () {
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.itemVO, "CollectableItemEquipmentRarenessVO") || __dep_exact_81dacdf05bd32292_1.instanceOfClass(this.itemVO, "CollectableItemHeroRandomVO")) {
      this.clips.equipmentBackgroundMc.visible = false;
    } else {
      var __s16local0 = 1;
      var __s16local1 = __dep_exact_f855840627e6e145.int(this.itemVO.equipmentVO.visualRareID);
      if (__s16local1 >= 1 && __s16local1 <= 4) {
        __s16local0 = __s16local1;
      }
      switch (this.itemVO.equipmentVO.rareID) {
        case __dep_exact_26a421b704832cff.EquipmentConst.RARENESS_UNIQUE:
        case __dep_exact_26a421b704832cff.EquipmentConst.RARENESS_HERO_UNIQUE:
          __s16local0 = 5;
      }
      this.clips.equipmentBackgroundMc.visible = false;
      this.clips.equipmentBackgroundMc.gotoAndStop(__s16local0);
    }
  };
  return CollectableRendererEquipmentBackground;
}(require("gge-module:export_ACollectableRenderComponent").ACollectableRenderComponent);
exports.CollectableRendererEquipmentBackground = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
