Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function BattleLogCastleComponent(__s3param0, __s3param1) {
    this._disp = __s3param0;
    this._dimension = __s3param1;
    this.itxt_coordinates = __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance().registerTextField(this._disp.mc_name.txt_name, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    this.itxt_coordinates.autoFitToBounds = true;
  }
  BattleLogCastleComponent.prototype.drawCastle = function (__s5param0) {
    var __s5local0 = __s5param0.mapobjectVO;
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(this._disp.mc_holder);
    var __s5local1 = null;
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s5local0, "TreasureDungeonMapObjectVO")) {
      __s5local1 = __s5param0.mapobjectVO.tMapNode;
    }
    if (__dep_export_AttackHelper.AttackHelper.canDrawCastle(__s5local0)) {
      var __s5local2 = "dialog_jumpto_targetSelected";
      var __s5local3 = true;
      if (__s5param0.disableJump) {
        __s5local2 = "alert_locationErased";
        __s5local3 = false;
      } else {
        if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s5local0, "CastleMapobjectVO")) {
          __s5local2 = "dialog_jumpto_castleSelected";
        }
        if (!__dep_export_CastleModel.CastleModel.userData.castleList.hasCastleInKingdom(__s5local0.kingdomID)) {
          __s5local2 = "not_unlocked";
        }
        if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s5local0, "TreasureDungeonMapObjectVO")) {
          __s5local2 = null;
        }
        if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s5local0, "AInvasionEventMapObjectVO")) {
          if (!this.canBeAttackedAgain(__s5param0)) {
            __s5local2 = "alert_locationErased";
            __s5local3 = false;
          }
        }
      }
      this.renderCastle(__s5local0, __s5local1, __s5local2, __s5local3);
      if (!__s5param0.disableJump) {
        this.setCastleCoordinates(__s5local0);
      }
    } else {
      this._disp.visible = false;
    }
  };
  BattleLogCastleComponent.prototype.canBeAttackedAgain = function (__s18param0) {
    var __s18local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__s18param0.mapobjectVO.eventType) != null;
    if (__dep_exact_26a421b704832cff.EventConst.ALIEN_INVASION_EVENT_TYPES.indexOf(__s18param0.mapobjectVO.eventType) > -1) {
      var __s18local1 = __s18param0.getOwnBattleInfo();
      return !__s18param0.hasWonState(__s18local1) && !__s18param0.isForwardedBattleLog && __s18local0;
    }
    return __s18local0;
  };
  BattleLogCastleComponent.prototype.renderCastle = function (__s21param0, __s21param1, __s21param2, __s21param3 = true) {
    this._disp.visible = true;
    this._disp.mc_holder.addChild(__dep_export_WorldmapObjectIconHelper.WorldmapObjectIconHelper.drawMapObjectIcon(__s21param0, this._dimension, true, false, __s21param3, __s21param2, __s21param1));
  };
  BattleLogCastleComponent.prototype.setCastleCoordinates = function (__s23param0) {
    var __s23local0 = "";
    if (__s23param0.absAreaPosX < 0 || __s23param0.absAreaPosY < 0) {
      if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s23param0, "TreasureDungeonMapObjectVO")) {
        __s23param0.tMapNode.isUnlocked = true;
        __s23local0 = __s23param0.areaNameString;
      } else {
        __s23local0 = "-";
      }
    } else {
      __s23local0 = __dep_exact_92d05af59ee2ff30.Localize.text(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_COORDS, [__s23param0.absAreaPosX, __s23param0.absAreaPosY], true);
    }
    this.itxt_coordinates.textContentVO.stringValue = __s23local0;
  };
  return BattleLogCastleComponent;
}();
exports.BattleLogCastleComponent = __s0local0;
var __dep_export_AttackHelper = require("gge-module:export_AttackHelper");
var __dep_export_WorldmapObjectIconHelper = require("gge-module:export_WorldmapObjectIconHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
