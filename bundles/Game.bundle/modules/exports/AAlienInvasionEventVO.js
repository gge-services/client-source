Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_AbstractMethodError = require("gge-module:export_AbstractMethodError");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AScoreEventVO = require("gge-module:export_AScoreEventVO");
var __s0local0 = function (__s1param0) {
  function AAlienInvasionEventVO(__s3param0 = 0) {
    var __s3local0 = this;
    __s3local0._targetZoneID = 0;
    __s3local0._sourceZoneID = 0;
    __s3local0.rerollCurrencyKeys = [];
    __s3local0.useReroll = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AAlienInvasionEventVO, __s1param0);
  AAlienInvasionEventVO.prototype.parseData = function (__s5param0, __s5param1, __s5param2) {
    __s1param0.prototype.parseData.call(this, __s5param0, __s5param1, __s5param2);
    if (__s5param2.SP) {
      this.alienInvasionEventVO_player = new __dep_export_ALeagueTypeScoreEventVO.ALeagueTypeScoreEventVO();
      this.alienInvasionEventVO_player.eventId = this.eventId;
      this.alienInvasionEventVO_player.parseData(__s5param0, __s5param1, __s5param2.SP);
      this.alienInvasionEventVO_player.difficultyIDChoosen = this.difficultyIDChoosen;
      this.alienInvasionEventVO_player.difficultyScalingEnabled = this._difficultyScalingEnabled;
    }
    if (__s5param2.A) {
      this.alienInvasionEventVO_alliance = new __dep_export_ALeagueTypeScoreEventVO.ALeagueTypeScoreEventVO(__dep_exact_26a421b704832cff.EventConst.LEAGUETYPE_EVENT_SUBTYPE_ALIEN_INVASION_ALLIANCE);
      this.alienInvasionEventVO_alliance.eventId = this.eventId;
      this.alienInvasionEventVO_alliance.parseData(__s5param0, __s5param1, __s5param2.A);
      this.alienInvasionEventVO_alliance.difficultyIDChoosen = this.difficultyIDChoosen;
      this.alienInvasionEventVO_alliance.difficultyScalingEnabled = this._difficultyScalingEnabled;
      this.alienInvasionEventVO_alliance.isAllianceRewardScore = true;
    }
    this.useReroll = __s5param2.CRE == 1;
    if (__s5param2.RCKS) {
      this.rerollCurrencyKeys = __s5param2.RCKS;
    }
    __dep_export_CastleModel.CastleModel.alienRerollData.parse_RCE(__s5param2);
  };
  Object.defineProperty(AAlienInvasionEventVO.prototype, "isDualEvent", {
    get: function () {
      return !!this.alienInvasionEventVO_alliance;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AAlienInvasionEventVO.prototype, "singleEventVO", {
    get: function () {
      return this.alienInvasionEventVO_player;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AAlienInvasionEventVO.prototype, "allianceEventVO", {
    get: function () {
      return this.alienInvasionEventVO_alliance;
    },
    enumerable: true,
    configurable: true
  });
  AAlienInvasionEventVO.prototype.openDialog = function (__s16param0 = true) {
    if (this.needToOpenDifficultyDialog()) {
      if (!__dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().isDialogRegistered(__dep_export_DifficultyScalingSelectDialog.DifficultyScalingSelectDialog)) {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_DifficultyScalingSelectDialog.DifficultyScalingSelectDialog, new __dep_export_DifficultyScalingSelectDialogProperties.DifficultyScalingSelectDialogProperties(this.eventId));
      }
    } else if (this.pointThresholds) {
      this.executeOpenDialog(__s16param0, __dep_export_CastleAllianceAlienInvasionEventDialog.CastleAllianceAlienInvasionEventDialog, new this.eventDialogProperiesClass(this.eventId));
    }
  };
  AAlienInvasionEventVO.prototype.parseParamObject = function (__s21param0) {
    __s1param0.prototype.parseParamObject.call(this, __s21param0);
    this._targetZoneID = __dep_exact_f855840627e6e145.int(__s21param0.TZID);
    this._sourceZoneID = __dep_exact_f855840627e6e145.int(__s21param0.SZID);
    this.refreshWorldMap();
  };
  Object.defineProperty(AAlienInvasionEventVO.prototype, "targetZoneID", {
    get: function () {
      return this._targetZoneID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AAlienInvasionEventVO.prototype, "sourceZoneID", {
    get: function () {
      return this._sourceZoneID;
    },
    enumerable: true,
    configurable: true
  });
  AAlienInvasionEventVO.prototype.isPlayerQualifiedForAllianceRewards = function () {
    return this.alienInvasionEventVO_player.isPlayerQualifiedForAllianceRewards;
  };
  AAlienInvasionEventVO.prototype.allianceRewardThresholdPoints = function () {
    return this.alienInvasionEventVO_player.allianceRewardThresholdPoints;
  };
  AAlienInvasionEventVO.prototype.onDestroy = function () {
    this.refreshWorldMap();
  };
  AAlienInvasionEventVO.prototype.setRankAndPoints = function (__s33param0, __s33param1, __s33param2) {
    this.alienInvasionEventVO_player.setRankAndPoints([__s33param0[0]], [__s33param1[0]], null);
    this.alienInvasionEventVO_alliance.setRankAndPoints([__s33param0[1]], [__s33param1[1]], null);
  };
  Object.defineProperty(AAlienInvasionEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      throw new __dep_export_AbstractMethodError.AbstractMethodError();
    },
    set: function (__s37param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AScoreEventVO.AScoreEventVO.prototype, "eventBuildingNameId").set.call(this, __s37param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AAlienInvasionEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      throw new __dep_export_AbstractMethodError.AbstractMethodError();
    },
    set: function (__s41param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AScoreEventVO.AScoreEventVO.prototype, "eventBuildingWOD").set.call(this, __s41param0);
    },
    enumerable: true,
    configurable: true
  });
  AAlienInvasionEventVO.prototype.isOwnWmoVO = function (__s43param0) {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  Object.defineProperty(AAlienInvasionEventVO.prototype, "eventDialogProperiesClass", {
    get: function () {
      throw new __dep_export_AbstractMethodError.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  return AAlienInvasionEventVO;
}(__dep_export_AScoreEventVO.AScoreEventVO);
exports.AAlienInvasionEventVO = __s0local0;
var __dep_export_CastleAllianceAlienInvasionEventDialog = require("gge-module:export_CastleAllianceAlienInvasionEventDialog");
var __dep_export_ALeagueTypeScoreEventVO = require("gge-module:export_ALeagueTypeScoreEventVO");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_DifficultyScalingSelectDialog = require("gge-module:export_DifficultyScalingSelectDialog");
var __dep_export_DifficultyScalingSelectDialogProperties = require("gge-module:export_DifficultyScalingSelectDialogProperties");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable", "IScoreBarVO", "IScoreUpdatable", "IAllianceRewardsQualifiable");
