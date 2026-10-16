Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function (__s1param0) {
  function CollectableRendererBuildingLevelMC() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableRendererBuildingLevelMC, __s1param0);
  CollectableRendererBuildingLevelMC.prototype.reset = function () {
    if (this.clips.buildingLevelMC) {
      this.clips.buildingLevelMC.visible = false;
    }
  };
  CollectableRendererBuildingLevelMC.prototype.update = function () {
    if (this.clips.buildingLevelMC) {
      this.clips.buildingLevelMC.visible = this.canShowButton();
      if (this.clips.buildingLevelMC.visible) {
        if (this.clips.buildingLevelMC.txt_value_small) {
          if (this.buildingVO.level > 99) {
            __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.clips.buildingLevelMC.txt_value, new __dep_exact_92d05af59ee2ff30.TextVO(""));
            __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.clips.buildingLevelMC.txt_value_small, new __dep_exact_92d05af59ee2ff30.TextVO(this.buildingVO.level.toString())).autoFitToBounds = true;
          } else {
            __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.clips.buildingLevelMC.txt_value, new __dep_exact_92d05af59ee2ff30.TextVO(this.buildingVO.level.toString()));
            __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.clips.buildingLevelMC.txt_value_small, new __dep_exact_92d05af59ee2ff30.TextVO(""));
          }
        } else {
          __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.clips.buildingLevelMC.txt_value, new __dep_exact_92d05af59ee2ff30.TextVO(this.buildingVO.level.toString())).autoFitToBounds;
        }
      }
    }
  };
  CollectableRendererBuildingLevelMC.prototype.setVisibility = function (__s16param0) {
    if (this.clips.buildingLevelMC) {
      this.clips.buildingLevelMC.visible = __s16param0;
    }
  };
  Object.defineProperty(CollectableRendererBuildingLevelMC.prototype, "buildingVO", {
    get: function () {
      if (!this.itemVO) {
        return null;
      }
      if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.itemVO, "CollectableItemBuildingVO")) {
        var __s19local0 = this.itemVO.buildingVO;
        if (__s19local0 && !__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s19local0, "DecoBuildingVO")) {
          return __s19local0;
        }
      }
      return null;
    },
    enumerable: true,
    configurable: true
  });
  CollectableRendererBuildingLevelMC.prototype.canShowButton = function () {
    return !!this.itemVO && !!this.buildingVO;
  };
  return CollectableRendererBuildingLevelMC;
}(require("gge-module:export_ACollectableRenderComponent").ACollectableRenderComponent);
exports.CollectableRendererBuildingLevelMC = __s0local0;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
