Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function AResourceProductionBuildingVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AResourceProductionBuildingVE, __s1param0);
  AResourceProductionBuildingVE.prototype.createStatusIcons = function () {
    __s1param0.prototype.createStatusIcons.call(this);
    if (!this.statusIcons.hasIcon && this.resourceProductionBuildingVO.isOverseerBoosted && this.resourceProductionBuildingVO.buildingState.isFunctionally) {
      this.statusIcons.addIcon(__dep_export_IsoStatusIconEnum.IsoStatusIconEnum.BOOSTED);
    }
  };
  Object.defineProperty(AResourceProductionBuildingVE.prototype, "resourceProductionBuildingVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  AResourceProductionBuildingVE.prototype.getRingMenuButtons = function () {
    var __s10local0 = __s1param0.prototype.getRingMenuButtons.call(this);
    __s10local0.push(new __dep_export_RingMenuButtonOverseer.RingMenuButtonOverseer());
    return __s10local0;
  };
  return AResourceProductionBuildingVE;
}(require("gge-module:export_AProductionBuildingVE").AProductionBuildingVE);
exports.AResourceProductionBuildingVE = __s0local0;
var __dep_export_RingMenuButtonOverseer = require("gge-module:export_RingMenuButtonOverseer");
var __dep_export_IsoStatusIconEnum = require("gge-module:export_IsoStatusIconEnum");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IIngameUICapable");
