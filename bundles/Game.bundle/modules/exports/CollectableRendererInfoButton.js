Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_ACollectableRenderComponent = require("gge-module:export_ACollectableRenderComponent");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function (__s1param0) {
  function CollectableRendererInfoButton() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableRendererInfoButton, __s1param0);
  CollectableRendererInfoButton.prototype.reset = function () {
    if (this.clips.infoBtn) {
      this.clips.infoBtn.visible = false;
    }
  };
  CollectableRendererInfoButton.prototype.addListener = function () {
    if (this.clips.infoBtn) {
      this.clips.infoBtn.addEventListener(__s0local0.CLICK, this.bindFunction(this.onInfoButtonClick));
    }
  };
  CollectableRendererInfoButton.prototype.removeListener = function () {
    if (this.clips.infoBtn) {
      this.clips.infoBtn.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onInfoButtonClick));
    }
  };
  CollectableRendererInfoButton.prototype.update = function () {
    if (this.clips.infoBtn) {
      __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this.clips.infoBtn);
      this.clips.infoBtn.visible = this.canShowButton();
    }
  };
  CollectableRendererInfoButton.prototype.setVisibility = function (__s17param0) {
    if (this.clips.infoBtn) {
      this.clips.infoBtn.visible = __s17param0;
    }
  };
  CollectableRendererInfoButton.prototype.canShowButton = function () {
    if (!this.itemVO) {
      return false;
    }
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.itemVO, "CollectableItemBuildingVO")) {
      var __s20local0 = this.itemVO.buildingVO;
      return !!__s20local0 && !__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s20local0, "CustomDecoBuildingVO");
    }
    return true;
  };
  CollectableRendererInfoButton.prototype.onInfoButtonClick = function (__s24param0) {
    if (this.itemVE && this.clips.infoBtn && __dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s24param0.target)) {
      this.itemVE.onInfoButtonClicked();
    }
  };
  return CollectableRendererInfoButton;
}(__dep_export_ACollectableRenderComponent.ACollectableRenderComponent);
exports.CollectableRendererInfoButton = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
