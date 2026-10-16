Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_3 = require("gge-module:exact_26a421b704832cff");
var __dep_export_C2SFindNextMapObjectVO = require("gge-module:export_C2SFindNextMapObjectVO");
var __s0local0 = function (__s1param0) {
  function CastleAllianceAlienInvasionEventDialogProperties(__s3param0) {
    var __s3local0 = this;
    __s3local0._eventId = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._eventId = __s3param0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceAlienInvasionEventDialogProperties, __s1param0);
  Object.defineProperty(CastleAllianceAlienInvasionEventDialogProperties.prototype, "eventId", {
    get: function () {
      return this._eventId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceAlienInvasionEventDialogProperties.prototype, "skinFrame", {
    get: function () {
      return 1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceAlienInvasionEventDialogProperties.prototype, "textIDType", {
    get: function () {
      return "alienInvasion";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceAlienInvasionEventDialogProperties.prototype, "scorbarBackgroundClassName", {
    get: function () {
      return "AllianceAlienInvasionEvent_Background";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceAlienInvasionEventDialogProperties.prototype, "rewardListDialogClassName", {
    get: function () {
      return __dep_export_CastleAllianceAlienInvasionRewardListDialog.CastleAllianceAlienInvasionRewardListDialog;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceAlienInvasionEventDialogProperties.prototype.getFindNextMapObjectVO = function () {
    return new __dep_export_C2SFindNextMapObjectVO.C2SFindNextMapObjectVO(__dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_ALIEN_CAMP, __dep_exact_26a421b704832cff_2.WorldClassic.KINGDOM_ID, -1, -1, __dep_exact_26a421b704832cff.DungeonConst.BASIC_INVASION_CAMP_PLAYER_ID);
  };
  Object.defineProperty(CastleAllianceAlienInvasionEventDialogProperties.prototype, "highscorePlayer", {
    get: function () {
      return __dep_exact_26a421b704832cff_1.HighscoreConst.ALLIANCE_ALIEN_INVASION_PLAYER;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceAlienInvasionEventDialogProperties.prototype, "highscoreAlliance", {
    get: function () {
      return __dep_exact_26a421b704832cff_1.HighscoreConst.ALLIANCE_ALIEN_INVASION_ALLIANCE;
    },
    enumerable: true,
    configurable: true
  });
  return CastleAllianceAlienInvasionEventDialogProperties;
}(__dep_exact_9e901e8e2483a22f.BasicProperties);
exports.CastleAllianceAlienInvasionEventDialogProperties = __s0local0;
var __dep_export_CastleAllianceAlienInvasionRewardListDialog = require("gge-module:export_CastleAllianceAlienInvasionRewardListDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IAlienInvasionEventDialogProperties");
