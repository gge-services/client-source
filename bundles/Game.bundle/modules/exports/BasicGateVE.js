Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ADefenceBuildingVE = require("gge-module:export_ADefenceBuildingVE");
var __s0local0 = function (__s1param0) {
  function BasicGateVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(BasicGateVE, __s1param0);
  BasicGateVE.prototype.onRenderStrategyChanged = function (__s5param0) {
    this.updateDisp();
  };
  BasicGateVE.prototype.createDisp = function () {
    this.dispComponent.addClip(this._buildingClip = this.loadExternalClip(this.assetClipName, null));
    this.addScaffoldClip();
  };
  Object.defineProperty(BasicGateVE.prototype, "assetFileName", {
    get: function () {
      return "Castlewall" + this.getIsoEventSkinSkinSuffix();
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ADefenceBuildingVE.ADefenceBuildingVE.prototype, "assetFileName").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicGateVE.prototype, "assetClipName", {
    get: function () {
      if (this.isTransparent) {
        return "Basic_Gate_Transparent" + this.getIsoEventSkinSkinSuffix();
      } else {
        return this.vo.getVisualClassName() + this.getIsoEventSkinSkinSuffix();
      }
    },
    set: function (__s17param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ADefenceBuildingVE.ADefenceBuildingVE.prototype, "assetClipName").set.call(this, __s17param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicGateVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_Gate1;
    },
    enumerable: true,
    configurable: true
  });
  return BasicGateVE;
}(__dep_export_ADefenceBuildingVE.ADefenceBuildingVE);
exports.BasicGateVE = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IIngameUICapable");
