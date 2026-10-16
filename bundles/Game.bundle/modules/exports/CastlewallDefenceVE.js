Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_IsoAdditionalClipEnum = require("gge-module:export_IsoAdditionalClipEnum");
var __dep_export_ADefenceBuildingVE = require("gge-module:export_ADefenceBuildingVE");
var __s0local0 = function (__s1param0) {
  function CastlewallDefenceVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlewallDefenceVE, __s1param0);
  CastlewallDefenceVE.prototype.onRenderStrategyChanged = function (__s5param0) {
    if (this.buildingClip) {
      this.buildingClip.cacheAsBitmap = false;
      this.updateRotation();
      this.updateColorChange();
      this.buildingClip.cacheAsBitmap = true;
    }
  };
  CastlewallDefenceVE.prototype.updateDisp = function () {
    if (this.elementContainer) {
      __s1param0.prototype.updateDisp.call(this);
      this.elementContainer.mouseEnabled = false;
    }
  };
  CastlewallDefenceVE.prototype.createDisp = function () {
    this.dispComponent.addClip(this._buildingClip = this.loadExternalClip(this.assetClipName));
  };
  CastlewallDefenceVE.prototype.createAdditionalClips = function () {
    this.additionalClips.addClips(__dep_export_IsoAdditionalClipEnum.IsoAdditionalClipEnum.FLAG, 24, 1, true);
  };
  CastlewallDefenceVE.prototype.updateFlagVisibility = function () {
    if (this.dispComponent.isLoaded && (this.vo.rotation == 0 || this.vo.rotation == 1)) {
      var __s15local0 = this.buildingClip.currentshownDisplayObject.getChildByName("flag");
      if (__s15local0) {
        if (this.vo.rotation == 0) {
          __s15local0.visible = this.vo.y % 2 == 0;
        } else if (this.vo.rotation == 1) {
          __s15local0.visible = this.vo.x % 2 == 0;
        }
      }
    }
  };
  CastlewallDefenceVE.prototype.updateRotation = function () {
    this.changeDispRotation(this.buildingClip, this.vo.rotation);
    this.updateFlagVisibility();
    this.updateDefenceDecor();
    this.dispComponent.updateCache();
  };
  CastlewallDefenceVE.prototype.switchDispFrame = function (__s23param0, __s23param1) {
    __s1param0.prototype.switchDispFrame.call(this, __s23param0, this.isTransparent ? __s23param1 + 2 : __s23param1);
  };
  Object.defineProperty(CastlewallDefenceVE.prototype, "assetFileName", {
    get: function () {
      return "Castlewall" + this.getIsoEventSkinSkinSuffix(this.vo.isoData.objects.defences.currentWallLevel);
    },
    set: function (__s27param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ADefenceBuildingVE.ADefenceBuildingVE.prototype, "assetFileName").set.call(this, __s27param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlewallDefenceVE.prototype, "assetClipName", {
    get: function () {
      var __s29local0 = __dep_exact_f855840627e6e145.int(this.vo.isoData.objects.defences.currentWallLevel);
      return "Basic_Castlewall_Level" + __s29local0 + this.getIsoEventSkinSkinSuffix(__s29local0);
    },
    set: function (__s31param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ADefenceBuildingVE.ADefenceBuildingVE.prototype, "assetClipName").set.call(this, __s31param0);
    },
    enumerable: true,
    configurable: true
  });
  CastlewallDefenceVE.prototype.onAllDispClipsLoaded = function () {
    this.updateFlagVisibility();
    __s1param0.prototype.onAllDispClipsLoaded.call(this);
  };
  Object.defineProperty(CastlewallDefenceVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_Wall;
    },
    enumerable: true,
    configurable: true
  });
  return CastlewallDefenceVE;
}(__dep_export_ADefenceBuildingVE.ADefenceBuildingVE);
exports.CastlewallDefenceVE = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IIngameUICapable");
