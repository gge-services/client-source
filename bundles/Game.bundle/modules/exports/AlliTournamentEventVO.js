Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleAllianceTournamentEventDialogProperties = require("gge-module:export_CastleAllianceTournamentEventDialogProperties");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AScoreEventVO = require("gge-module:export_AScoreEventVO");
var __s0local0 = function (__s1param0) {
  function AlliTournamentEventVO() {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._scoreEventVO = new __dep_export_ALeagueTypeScoreEventVO.ALeagueTypeScoreEventVO();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AlliTournamentEventVO, __s1param0);
  AlliTournamentEventVO.prototype.parseData = function (__s5param0, __s5param1, __s5param2) {
    __s1param0.prototype.parseData.call(this, __s5param0, __s5param1, __s5param2);
    this._scoreEventVO.eventId = __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_ALLIANCE_TOURNAMENT;
    this._scoreEventVO.parseData(__s5param0, __s5param1, __s5param2.A);
  };
  Object.defineProperty(AlliTournamentEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return AlliTournamentEventVO.EVENT_BUILDING_WOD;
    },
    set: function (__s9param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AScoreEventVO.AScoreEventVO.prototype, "eventBuildingWOD").set.call(this, __s9param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AlliTournamentEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "eventBuilding_AllianceTournement";
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AScoreEventVO.AScoreEventVO.prototype, "eventBuildingNameId").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AlliTournamentEventVO.prototype, "isVisible", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.userData.isInAlliance;
    },
    set: function (__s17param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AScoreEventVO.AScoreEventVO.prototype, "isVisible").set.call(this, __s17param0);
    },
    enumerable: true,
    configurable: true
  });
  AlliTournamentEventVO.prototype.openDialog = function (__s19param0 = true) {
    this.executeOpenDialog(__s19param0, __dep_export_CastleAllianceTournamentEventDialog.CastleAllianceTournamentEventDialog, new __dep_export_CastleAllianceTournamentEventDialogProperties.CastleAllianceTournamentEventDialogProperties(this));
  };
  AlliTournamentEventVO.prototype.setRankAndPoints = function (__s21param0, __s21param1, __s21param2) {
    this._scoreEventVO.setRankAndPoints(__s21param0, __s21param1, null);
  };
  Object.defineProperty(AlliTournamentEventVO.prototype, "scoreEventVO", {
    get: function () {
      return this._scoreEventVO;
    },
    enumerable: true,
    configurable: true
  });
  AlliTournamentEventVO.__initialize_static_members = function () {
    AlliTournamentEventVO.EVENT_BUILDING_WOD = 287;
  };
  return AlliTournamentEventVO;
}(__dep_export_AScoreEventVO.AScoreEventVO);
exports.AlliTournamentEventVO = __s0local0;
var __dep_export_CastleAllianceTournamentEventDialog = require("gge-module:export_CastleAllianceTournamentEventDialog");
var __dep_export_ALeagueTypeScoreEventVO = require("gge-module:export_ALeagueTypeScoreEventVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable", "IScoreBarVO", "IScoreUpdatable");
__s0local0.__initialize_static_members();
