Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastlePostAttackDialogProperties = require("gge-module:export_CastlePostAttackDialogProperties");
var __dep_export_PostAttackSelectBoosterDialogProperties = require("gge-module:export_PostAttackSelectBoosterDialogProperties");
var __dep_export_CastlePostSpyDialogProperties = require("gge-module:export_CastlePostSpyDialogProperties");
var __dep_export_CastlePostSendGoodsDialogProperties = require("gge-module:export_CastlePostSendGoodsDialogProperties");
var __dep_export_C2SCreateDaimyoDefenseMovementVO = require("gge-module:export_C2SCreateDaimyoDefenseMovementVO");
var __s0local0 = function (__s1param0) {
  function OpenPostAttackDialogCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(OpenPostAttackDialogCommand, __s1param0);
  OpenPostAttackDialogCommand.prototype.execute = function (__s5param0 = null) {
    var __s5local0 = __dep_exact_f855840627e6e145.int(__dep_exact_f855840627e6e145.int(__s5param0[0]));
    var __s5local1 = __s5param0[1];
    var __s5local2 = __s5param0[2];
    var __s5local3 = __s5param0[3];
    if (!__s5local2) {
      throw new Error("Missing parameter in OpenPostAttackDialogCommand");
    }
    switch (__s5local0) {
      case __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_TREASUREATTACK:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastlePostAttackTreasureDialog.CastlePostAttackTreasureDialog, new __dep_export_CastlePostAttackDialogProperties.CastlePostAttackDialogProperties(__s5local1, __s5local2, __s5local3));
        break;
      case __dep_export_ClientConstCastle.ClientConstCastle.SPYTYPE_SABOTAGE:
        if (__dep_export_CastleModel.CastleModel.userData.userLevel < __dep_export_ClientConstCastle.ClientConstCastle.MIN_USERLEVEL_HORSE_VISIBLE_IN_POSTATTACK) {
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastlePostSpyDialog.CastlePostSpyDialog, new __dep_export_CastlePostSpyDialogProperties.CastlePostSpyDialogProperties(__s5local2, __s5local1));
        } else {
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastlePostSpyHorseDialog.CastlePostSpyHorseDialog, new __dep_export_CastlePostSpyDialogProperties.CastlePostSpyDialogProperties(__s5local2, __s5local1));
        }
        break;
      case __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_SENDGOODS:
        if (__dep_export_CastleModel.CastleModel.userData.userLevel < __dep_export_ClientConstCastle.ClientConstCastle.MIN_USERLEVEL_HORSE_VISIBLE_IN_POSTATTACK) {
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastlePostSendGoodsDialog.CastlePostSendGoodsDialog, new __dep_export_CastlePostSendGoodsDialogProperties.CastlePostSendGoodsDialogProperties(__s5local2, __s5local1));
        } else {
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastlePostSendGoodsHorseDialog.CastlePostSendGoodsHorseDialog, new __dep_export_CastlePostSendGoodsDialogProperties.CastlePostSendGoodsDialogProperties(__s5local2, __s5local1));
        }
        break;
      case __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_SUPPORTDEFENSE_TOWNSHIP:
        var __s5local4 = __s5local2;
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SCreateDaimyoDefenseMovementVO.C2SCreateDaimyoDefenseMovementVO(__s5local4.sourceArea.objectId, __s5local4.targetArea.absAreaPosX, __s5local4.targetArea.absAreaPosY, __s5local4.getArmy()));
        __s5local1();
        break;
      default:
        if (__dep_export_CastleModel.CastleModel.userData.userLevel < __dep_export_ClientConstCastle.ClientConstCastle.MIN_USERLEVEL_HORSE_VISIBLE_IN_POSTATTACK && __s5local0 != __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_SUPPORTDEFENSE) {
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastlePostAttackDialog.CastlePostAttackDialog, new __dep_export_CastlePostAttackDialogProperties.CastlePostAttackDialogProperties(__s5local1, __s5local2, __s5local3));
        } else {
          var __s5local5 = __s5local2;
          if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s5local5.targetArea, "DaimyoCastleMapObjectVO") && __s5local5.openSelectBoosterDialog) {
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_SamuraiDaimyoBoosterSelectDialog.SamuraiDaimyoBoosterSelectDialog, new __dep_export_PostAttackSelectBoosterDialogProperties.PostAttackSelectBoosterDialogProperties(__s5local0, __s5local1, __s5local2, __s5local3));
          } else if (__s5local5.isTempServerCollectorAttack && __s5local5.openSelectBoosterDialog) {
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CollectorTempServerEventBoosterSelectDialog.CollectorTempServerEventBoosterSelectDialog, new __dep_export_PostAttackSelectBoosterDialogProperties.PostAttackSelectBoosterDialogProperties(__s5local0, __s5local1, __s5local2, __s5local3));
          } else if (__s5local5.isAllianceBattleGroundPlayerPointsAttack && __s5local5.openSelectBoosterDialog) {
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_AllianceBattleGroundPlayerCollectorEventBoosterSelectDialog.AllianceBattleGroundPlayerCollectorEventBoosterSelectDialog, new __dep_export_PostAttackSelectBoosterDialogProperties.PostAttackSelectBoosterDialogProperties(__s5local0, __s5local1, __s5local2, __s5local3));
          } else if (__s5local5.isAllianceBattleGroundTowerAttack && __s5local5.openSelectBoosterDialog) {
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_AllianceBattleGroundTowerCollectorEventBoosterSelectDialog.AllianceBattleGroundTowerCollectorEventBoosterSelectDialog, new __dep_export_PostAttackSelectBoosterDialogProperties.PostAttackSelectBoosterDialogProperties(__s5local0, __s5local1, __s5local2, __s5local3));
          } else if (__s5local5.isCollectorAttack && __s5local5.openSelectBoosterDialog) {
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CollectorEventBoosterSelectDialog.CollectorEventBoosterSelectDialog, new __dep_export_PostAttackSelectBoosterDialogProperties.PostAttackSelectBoosterDialogProperties(__s5local0, __s5local1, __s5local2, __s5local3));
          } else {
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastlePostAttackHorseDialog.CastlePostAttackHorseDialog, new __dep_export_CastlePostAttackDialogProperties.CastlePostAttackDialogProperties(__s5local1, __s5local2, __s5local3));
          }
        }
    }
  };
  Object.defineProperty(OpenPostAttackDialogCommand.prototype, "layoutManager", {
    get: function () {
      return __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return OpenPostAttackDialogCommand;
}(__dep_exact_9e901e8e2483a22f.SimpleCommand);
exports.OpenPostAttackDialogCommand = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastlePostAttackDialog = require("gge-module:export_CastlePostAttackDialog");
var __dep_export_CastlePostAttackHorseDialog = require("gge-module:export_CastlePostAttackHorseDialog");
var __dep_export_CastlePostAttackTreasureDialog = require("gge-module:export_CastlePostAttackTreasureDialog");
var __dep_export_CollectorEventBoosterSelectDialog = require("gge-module:export_CollectorEventBoosterSelectDialog");
var __dep_export_SamuraiDaimyoBoosterSelectDialog = require("gge-module:export_SamuraiDaimyoBoosterSelectDialog");
var __dep_export_CastlePostSpyDialog = require("gge-module:export_CastlePostSpyDialog");
var __dep_export_CastlePostSpyHorseDialog = require("gge-module:export_CastlePostSpyHorseDialog");
var __dep_export_AllianceBattleGroundPlayerCollectorEventBoosterSelectDialog = require("gge-module:export_AllianceBattleGroundPlayerCollectorEventBoosterSelectDialog");
var __dep_export_CollectorTempServerEventBoosterSelectDialog = require("gge-module:export_CollectorTempServerEventBoosterSelectDialog");
var __dep_export_CastlePostSendGoodsDialog = require("gge-module:export_CastlePostSendGoodsDialog");
var __dep_export_CastlePostSendGoodsHorseDialog = require("gge-module:export_CastlePostSendGoodsHorseDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleCommand");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_AllianceBattleGroundTowerCollectorEventBoosterSelectDialog = require("gge-module:export_AllianceBattleGroundTowerCollectorEventBoosterSelectDialog");
