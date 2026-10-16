Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_VisualMapObjectEvent = require("gge-module:export_VisualMapObjectEvent");
var __dep_export_ABGHelper = require("gge-module:export_ABGHelper");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_OutpostMapobject = require("gge-module:export_OutpostMapobject");
var __s0local0 = function (__s1param0) {
  function MetropolMapobject() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(MetropolMapobject, __s1param0);
  MetropolMapobject.prototype.drawOutpost = function () {
    this.clearObjectContainer();
    if (this.mapobjectVO.isVisibleOnMap) {
      if (!this.worldmapObjectVO.ownerInfo || this.worldmapObjectVO.ownerInfo && this.worldmapObjectVO.ownerInfo.isOutpostOwner) {
        this.objectContainer = this.worldmapObjectVO.getDisplayObjectClipContainer(false, null, false);
      } else {
        this.objectContainer = this.metropolVO.getDisplayObjectClipContainer(true, null, false);
        this.setOccupiedMarker();
      }
      if (this.worldmapObjectVO.remainingCooldownTimeInSeconds > 0) {
        this.showFlames();
      }
      this.addObjectContainer();
      this.addMouseListener();
      this.disp.dispatchEvent(new __dep_export_VisualMapObjectEvent.VisualMapObjectEvent(__dep_export_VisualMapObjectEvent.VisualMapObjectEvent.VE_UPDATED, [this]));
      if (this.occupiedMarker && this.disp.contains(this.occupiedMarker.disp)) {
        this.disp.setChildIndex(this.occupiedMarker.disp, this.disp.numChildren - 1);
      }
    }
  };
  MetropolMapobject.prototype.getFlamesClip = function () {
    var __s12local0 = this.getABGFlamesClip("Metropol");
    return __s12local0 || __s1param0.prototype.getFlamesClip.call(this);
  };
  Object.defineProperty(MetropolMapobject.prototype, "ignorePeaceProtection", {
    get: function () {
      return true;
    },
    set: function (__s16param0) {
      Object.getOwnPropertyDescriptor(__dep_export_OutpostMapobject.OutpostMapobject.prototype, "ignorePeaceProtection").set.call(this, __s16param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MetropolMapobject.prototype, "metropolVO", {
    get: function () {
      return this.mapobjectVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MetropolMapobject.prototype, "line1Content", {
    get: function () {
      var __s20local0 = this.metropolVO.ownerInfo;
      if (__s20local0 && !__s20local0.isOutpostOwner) {
        return new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_CastleTitleSystemHelper.CastleTitleSystemHelper.getPlayerNameWithTitleFromPlayerInfo(this.metropolVO.ownerInfo));
      } else {
        return new __dep_exact_92d05af59ee2ff30.TextVO(this.metropolVO.areaNameString);
      }
    },
    set: function (__s24param0) {
      Object.getOwnPropertyDescriptor(__dep_export_OutpostMapobject.OutpostMapobject.prototype, "line1Content").set.call(this, __s24param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MetropolMapobject.prototype, "line2Content", {
    get: function () {
      var __s26local0 = this.metropolVO.ownerInfo;
      if (__s26local0 && __s26local0.isRuin) {
        return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("ruin");
      } else {
        return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("metropol_worldmap_tooltip"), [this.metropolVO.abgMaxInfluencePoints]);
      }
    },
    set: function (__s30param0) {
      Object.getOwnPropertyDescriptor(__dep_export_OutpostMapobject.OutpostMapobject.prototype, "line2Content").set.call(this, __s30param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MetropolMapobject.prototype, "line3Content", {
    get: function () {
      var __s32local0 = this.metropolVO.ownerInfo;
      if (__dep_export_ABGHelper.ABGHelper.isOnABGAndCollector) {
        if (__s32local0 && !__s32local0.isOutpostOwner) {
          return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("beyondTheHorizon_cityStates_countdown", [__dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getFullTimeString(this.metropolVO.abgMineOutRemainingSeconds)]);
        }
        var __s32local1 = __dep_export_CastleModel.CastleModel.mineData.getMineVOByObjectID(26);
        var __s32local2 = __dep_exact_f855840627e6e145.int(__s32local1.maxInfluencePoints / (__s32local1.amountInfluencePerMinute * (1 / __dep_export_ClientConstTime.ClientConstTime.MINUTES_2_SEC)));
        return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("beyondTheHorizon_cityStates_occupationTime", [__dep_exact_9e901e8e2483a22f.TimeStringHelper.getTimeToString(__s32local2, __dep_exact_9e901e8e2483a22f.TimeStringHelper.ONE_TIME_HOURS_FORMAT, __dep_exact_92d05af59ee2ff30_2.Localize.text)]);
      }
      if (__s32local0 && !__s32local0.isOutpostOwner) {
        return new __dep_exact_92d05af59ee2ff30.TextVO(this.getAllianceString());
      } else {
        return null;
      }
    },
    set: function (__s38param0) {
      Object.getOwnPropertyDescriptor(__dep_export_OutpostMapobject.OutpostMapobject.prototype, "line3Content").set.call(this, __s38param0);
    },
    enumerable: true,
    configurable: true
  });
  return MetropolMapobject;
}(__dep_export_OutpostMapobject.OutpostMapobject);
exports.MetropolMapobject = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IIngameUICapable", "IWorldMapObject", "IWorldmapTooltipData");
var __dep_export_CastleTitleSystemHelper = require("gge-module:export_CastleTitleSystemHelper");
