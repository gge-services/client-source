Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AAllianceInvasionCampMapObjectVO = require("gge-module:export_AAllianceInvasionCampMapObjectVO");
var __dep_export_BasicMapobjectVO = require("gge-module:export_BasicMapobjectVO");
var __s0local0 = function (__s1param0) {
  function NomadKhanCampMapObjectVO() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.name = "NomadKhanCamp";
    __s3local0.type = "-";
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(NomadKhanCampMapObjectVO, __s1param0);
  NomadKhanCampMapObjectVO.prototype.getDisplayObjectClipContainer = function (__s5param0, __s5param1, __s5param2 = false) {
    var __s5local0 = new __dep_export_CastleDisplayObjectClipContainer.CastleDisplayObjectClipContainer();
    __s5local0.addItem(this.getAsExternalClip("NomadKhanCamp_Mapobject"));
    return __s5local0;
  };
  Object.defineProperty(NomadKhanCampMapObjectVO.prototype, "cooldownCanBeSkipped", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  NomadKhanCampMapObjectVO.prototype.parseData = function (__s9param0) {
    __s1param0.prototype.parseData.call(this, __s9param0);
    this._ownerInfo = __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnerInfoVO(__dep_exact_26a421b704832cff.DungeonConst.BASIC_ALLIANCE_NOMAD_CAMP_PLAYER_ID);
  };
  Object.defineProperty(NomadKhanCampMapObjectVO.prototype, "isVisibleOnMap", {
    get: function () {
      return !!NomadKhanCampMapObjectVO.nomadEventVO && this._isVisibleOnMap;
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicMapobjectVO.BasicMapobjectVO.prototype, "isVisibleOnMap").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(NomadKhanCampMapObjectVO.prototype, "areaNameString", {
    get: function () {
      return __dep_exact_92d05af59ee2ff30.Localize.text("kingdom_khanCamp_castleName_0");
    },
    set: function (__s17param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobjectVO.InteractiveMapobjectVO.prototype, "areaNameString").set.call(this, __s17param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(NomadKhanCampMapObjectVO, "nomadEventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(NomadKhanCampMapObjectVO.prototype, "eventType", {
    get: function () {
      return __dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE;
    },
    set: function (__s23param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AAllianceInvasionCampMapObjectVO.AAllianceInvasionCampMapObjectVO.prototype, "eventType").set.call(this, __s23param0);
    },
    enumerable: true,
    configurable: true
  });
  return NomadKhanCampMapObjectVO;
}(__dep_export_AAllianceInvasionCampMapObjectVO.AAllianceInvasionCampMapObjectVO);
exports.NomadKhanCampMapObjectVO = __s0local0;
var __dep_export_InteractiveMapobjectVO = require("gge-module:export_InteractiveMapobjectVO");
var __dep_export_CastleDisplayObjectClipContainer = require("gge-module:export_CastleDisplayObjectClipContainer");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IDetailViewAble", "IWorldmapObjectVO", "IDungeonMapobjectVO");
