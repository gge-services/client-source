Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_VisualMapObjectEvent = require("gge-module:export_VisualMapObjectEvent");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_CastleTitleSystemHelper = require("gge-module:export_CastleTitleSystemHelper");
var __dep_export_OutpostMapobject = require("gge-module:export_OutpostMapobject");
var __s0local0 = function (__s1param0) {
  function CapitalMapobject() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CapitalMapobject, __s1param0);
  CapitalMapobject.prototype.getFlamesClip = function () {
    var __s5local0 = this.getABGFlamesClip("Capital");
    return __s5local0 || __s1param0.prototype.getFlamesClip.call(this);
  };
  CapitalMapobject.prototype.drawOutpost = function () {
    this.clearObjectContainer();
    if (this.mapobjectVO.isVisibleOnMap) {
      if (!this.worldmapObjectVO.ownerInfo || this.worldmapObjectVO.ownerInfo && this.worldmapObjectVO.ownerInfo.isOutpostOwner) {
        this.objectContainer = this.worldmapObjectVO.getDisplayObjectClipContainer(false, null, false);
      } else {
        this.objectContainer = this.capitalVO.getDisplayObjectClipContainer(true, null, false);
        this.setOccupiedMarker();
      }
      if (this.worldmapObjectVO.remainingCooldownTimeInSeconds > 0) {
        this.showFlames();
      }
      this.addObjectContainer();
      if (this.occupiedMarker && this.disp.contains(this.occupiedMarker.disp)) {
        this.disp.setChildIndex(this.occupiedMarker.disp, this.disp.numChildren - 1);
      }
      this.addMouseListener();
      this.disp.dispatchEvent(new __dep_export_VisualMapObjectEvent.VisualMapObjectEvent(__dep_export_VisualMapObjectEvent.VisualMapObjectEvent.VE_UPDATED, [this]));
    }
  };
  Object.defineProperty(CapitalMapobject.prototype, "ignorePeaceProtection", {
    get: function () {
      return true;
    },
    set: function (__s16param0) {
      Object.getOwnPropertyDescriptor(__dep_export_OutpostMapobject.OutpostMapobject.prototype, "ignorePeaceProtection").set.call(this, __s16param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CapitalMapobject.prototype, "capitalVO", {
    get: function () {
      return this.mapobjectVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CapitalMapobject.prototype, "line1Content", {
    get: function () {
      var __s20local0 = this.capitalVO.ownerInfo;
      if (__s20local0 && !__s20local0.isOutpostOwner) {
        return new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_CastleTitleSystemHelper.CastleTitleSystemHelper.getPlayerNameWithTitleFromPlayerInfo(this.capitalVO.ownerInfo));
      } else {
        return new __dep_exact_92d05af59ee2ff30.TextVO(this.capitalVO.areaNameString);
      }
    },
    set: function (__s24param0) {
      Object.getOwnPropertyDescriptor(__dep_export_OutpostMapobject.OutpostMapobject.prototype, "line1Content").set.call(this, __s24param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CapitalMapobject.prototype, "line2Content", {
    get: function () {
      var __s26local0 = this.capitalVO.ownerInfo;
      if (__s26local0 && __s26local0.isRuin) {
        return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("ruin");
      } else {
        return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("capital_worldmap_tooltip"));
      }
    },
    set: function (__s30param0) {
      Object.getOwnPropertyDescriptor(__dep_export_OutpostMapobject.OutpostMapobject.prototype, "line2Content").set.call(this, __s30param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CapitalMapobject.prototype, "line3Content", {
    get: function () {
      var __s32local0 = this.capitalVO.ownerInfo;
      if (__s32local0 && !__s32local0.isOutpostOwner) {
        return new __dep_exact_92d05af59ee2ff30.TextVO(this.getAllianceString());
      } else {
        return null;
      }
    },
    set: function (__s36param0) {
      Object.getOwnPropertyDescriptor(__dep_export_OutpostMapobject.OutpostMapobject.prototype, "line3Content").set.call(this, __s36param0);
    },
    enumerable: true,
    configurable: true
  });
  return CapitalMapobject;
}(__dep_export_OutpostMapobject.OutpostMapobject);
exports.CapitalMapobject = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IIngameUICapable", "IWorldMapObject", "IWorldmapTooltipData");
