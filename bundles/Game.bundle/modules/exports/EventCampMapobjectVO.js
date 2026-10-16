Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_KingdomEnum = require("gge-module:export_KingdomEnum");
var __dep_export_TMapHelper = require("gge-module:export_TMapHelper");
var __dep_export_CastleDisplayObjectClipContainer = require("gge-module:export_CastleDisplayObjectClipContainer");
var __dep_export_UnitBaseLocationEnum = require("gge-module:export_UnitBaseLocationEnum");
var __dep_export_BasicMapobjectVO = require("gge-module:export_BasicMapobjectVO");
var __dep_export_ContainerBuilderMapobjectVO = require("gge-module:export_ContainerBuilderMapobjectVO");
var __s0local0 = function (__s1param0) {
  function EventCampMapobjectVO() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._objectId = -24;
    __s3local0._areaType = __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_TREASURE_CAMP;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(EventCampMapobjectVO, __s1param0);
  EventCampMapobjectVO.prototype.getDisplayObjectClipContainer = function (__s5param0, __s5param1, __s5param2 = false) {
    var __s5local0 = new __dep_export_CastleDisplayObjectClipContainer.CastleDisplayObjectClipContainer();
    this.mapID = __dep_export_TMapHelper.TMapHelper.getMapIDForGraphics(this.mapID);
    var __s5local1 = "SeasonCamp_Mapobject_" + this.mapID;
    var __s5local2 = this.getAsExternalClip(__s5local1, this.assetFileURL("SeasonEvent_" + this.mapID), this.getClipColor(this.ownerInfo));
    __s5local0.addItem(__s5local2);
    return __s5local0;
  };
  Object.defineProperty(EventCampMapobjectVO.prototype, "areaNameString", {
    get: function () {
      return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_seasonEvent_2_Camp");
    },
    set: function (__s9param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobjectVO.InteractiveMapobjectVO.prototype, "areaNameString").set.call(this, __s9param0);
    },
    enumerable: true,
    configurable: true
  });
  EventCampMapobjectVO.prototype.parseAreaInfo = function (__s11param0) {
    this._areaType = __s11param0[0];
    this._mapID = __s11param0[1] ? __s11param0[1] : 22;
  };
  Object.defineProperty(EventCampMapobjectVO.prototype, "unitBaseLocation", {
    get: function () {
      return __dep_export_UnitBaseLocationEnum.UnitBaseLocationEnum.HOME_CASTLE;
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO.prototype, "unitBaseLocation").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventCampMapobjectVO.prototype, "mapID", {
    get: function () {
      return Object.getOwnPropertyDescriptor(__dep_export_BasicMapobjectVO.BasicMapobjectVO.prototype, "mapID").get.call(this);
    },
    set: function (__s19param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicMapobjectVO.BasicMapobjectVO.prototype, "mapID").set.call(this, __s19param0);
      var __s19local0 = __dep_export_KingdomEnum.KingdomEnum.getTypeById(this.mapID);
      if (__s19local0) {
        this._kingdomID = __s19local0.id;
      }
    },
    enumerable: true,
    configurable: true
  });
  return EventCampMapobjectVO;
}(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO);
exports.EventCampMapobjectVO = __s0local0;
var __dep_export_InteractiveMapobjectVO = require("gge-module:export_InteractiveMapobjectVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IDetailViewAble", "IWorldmapObjectVO");
