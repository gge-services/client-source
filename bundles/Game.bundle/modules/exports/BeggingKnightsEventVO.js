Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleBeggingKnightsDialogProperties = require("gge-module:export_CastleBeggingKnightsDialogProperties");
var __dep_export_ALeagueTypeScoreEventVO = require("gge-module:export_ALeagueTypeScoreEventVO");
var __s0local0 = function (__s1param0) {
  function BeggingKnightsEventVO() {
    var __s3local0 = this;
    __s3local0._totalHours = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._eventId = __dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_BEGGING_KNIGHTS;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(BeggingKnightsEventVO, __s1param0);
  BeggingKnightsEventVO.prototype.parseBasicsFromParamObject = function (__s5param0) {
    __s1param0.prototype.parseBasicsFromParamObject.call(this, __s5param0);
    this._totalHours = __s5param0.TH;
  };
  BeggingKnightsEventVO.prototype.parseLeagueTypeEventElement = function (__s7param0) {
    __s1param0.prototype.parseLeagueTypeEventElement.call(this, __s7param0);
    this._factorList = [];
    this._factorList = (__s7param0.ressourceFactors || "").toString().split("#");
    for (var __s7local0 = 0; __s7local0 < this._rewardLists.length; ++__s7local0) {
      for (var __s7local1 = this._rewardLists[__s7local0].getFilteredListByType(__dep_export_CollectableEnum.CollectableEnum.UNITS), __s7local2 = 0; __s7local2 < __s7local1.length; ++__s7local2) {
        var __s7local3 = __s7local1.getItemByIndex(__s7local2);
        __s7local3.amount = __dep_exact_26a421b704832cff.BeggingKnightsConst.calculateRewardAmount(this._totalHours, __s7local3.amount);
      }
    }
  };
  Object.defineProperty(BeggingKnightsEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return BeggingKnightsEventVO.EVENT_BUILDING_WOD;
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ALeagueTypeScoreEventVO.ALeagueTypeScoreEventVO.prototype, "eventBuildingWOD").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BeggingKnightsEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "eventBuilding_BeggingKnights";
    },
    set: function (__s19param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ALeagueTypeScoreEventVO.ALeagueTypeScoreEventVO.prototype, "eventBuildingNameId").set.call(this, __s19param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BeggingKnightsEventVO.prototype, "totalHours", {
    get: function () {
      return this._totalHours;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BeggingKnightsEventVO.prototype, "factorList", {
    get: function () {
      return this._factorList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BeggingKnightsEventVO.prototype, "totalAmounts", {
    get: function () {
      var __s25local0 = [];
      if (this._factorList != null) {
        for (var __s25local1 = 0, __s25local2 = this._factorList; __s25local1 < __s25local2.length; __s25local1++) {
          var __s25local3 = __s25local2[__s25local1];
          if (__s25local3 !== undefined) {
            __s25local0.push(__dep_exact_26a421b704832cff.BeggingKnightsConst.calculateRequirement(this._totalHours, __s25local3));
          }
        }
      }
      return __s25local0;
    },
    enumerable: true,
    configurable: true
  });
  BeggingKnightsEventVO.prototype.openDialog = function (__s31param0 = true) {
    this.executeOpenDialog(__s31param0, __dep_export_CastleBeggingKnightsDialog.CastleBeggingKnightsDialog, new __dep_export_CastleBeggingKnightsDialogProperties.CastleBeggingKnightsDialogProperties(this));
  };
  BeggingKnightsEventVO.__initialize_static_members = function () {
    BeggingKnightsEventVO.EVENT_BUILDING_WOD = 284;
  };
  return BeggingKnightsEventVO;
}(__dep_export_ALeagueTypeScoreEventVO.ALeagueTypeScoreEventVO);
exports.BeggingKnightsEventVO = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CastleBeggingKnightsDialog = require("gge-module:export_CastleBeggingKnightsDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable", "IScoreBarVO", "IScoreUpdatable");
__s0local0.__initialize_static_members();
