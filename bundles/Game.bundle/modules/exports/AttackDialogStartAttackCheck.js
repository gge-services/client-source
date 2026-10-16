Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstCharacter = require("gge-module:export_ClientConstCharacter");
var __dep_export_ClientConstLevelRestrictions = require("gge-module:export_ClientConstLevelRestrictions");
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleCharacterYesNoOKDialog = require("gge-module:export_CastleCharacterYesNoOKDialog");
var __dep_export_CastleCharacterYesNoOKDialogProperties = require("gge-module:export_CastleCharacterYesNoOKDialogProperties");
var __dep_export_CastleNoMoneyC1Dialog = require("gge-module:export_CastleNoMoneyC1Dialog");
var __dep_export_CastleNoMoneyC1DialogProperties = require("gge-module:export_CastleNoMoneyC1DialogProperties");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
var __dep_export_CastleStandardYesNoDialog = require("gge-module:export_CastleStandardYesNoDialog");
var __dep_export_AttackDialogController = require("gge-module:export_AttackDialogController");
var __dep_export_LordEffectHelper = require("gge-module:export_LordEffectHelper");
var __s0local0 = function () {
  function AttackDialogStartAttackCheck() {}
  AttackDialogStartAttackCheck.onAttack = function () {
    var __s5local0 = __dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_GENERAL;
    if (this.attackInfoVO.getSumOfUnits() != 0) {
      if (this.attackInfoVO.army.isAnyWaveSoldiersButNoTools()) {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleCharacterYesNoOKDialog.CastleCharacterYesNoOKDialog, new __dep_export_CastleCharacterYesNoOKDialogProperties.CastleCharacterYesNoOKDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_watchout"), __dep_exact_92d05af59ee2ff30.Localize.text("dialog_attack_onlyToolsInWave"), __s5local0, null, null, false));
      } else {
        var __s5local1 = this.getSelectedLordVO();
        if (this.attackInfoVO.getTravelCost(__s5local1) > __dep_export_CastleModel.CastleModel.currencyData.c1Amount) {
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleNoMoneyC1Dialog.CastleNoMoneyC1Dialog, new __dep_export_CastleNoMoneyC1DialogProperties.CastleNoMoneyC1DialogProperties());
        } else {
          var __s5local2 = 0;
          __s5local2 = this.attackInfoVO.targetArea.areaType == __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_CAPITAL ? __dep_exact_f855840627e6e145.int(Math.max(__dep_export_CastleModel.CastleModel.landmark.capitalLandmark.minDefenseLevel, this.attackInfoVO.targetOwnerLevel)) : this.attackInfoVO.targetArea.areaType == __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_METROPOL ? __dep_exact_f855840627e6e145.int(Math.max(__dep_export_CastleModel.CastleModel.landmark.metroLandmark.minDefenseLevel, this.attackInfoVO.targetOwnerLevel)) : this.attackInfoVO.targetArea.areaType == __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_KINGS_TOWER ? __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.OutpostConst.KINGS_TOWER_DEFAULT_LEVEL) : this.attackInfoVO.targetArea.areaType == __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_MONUMENT ? __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.OutpostConst.MONUMENT_DEFAULT_LEVEL) : this.attackInfoVO.targetArea.areaType == __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_LABORATORY ? __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.OutpostConst.LABORATORY_DEFAULT_LEVEL) : __dep_exact_f855840627e6e145.int(this.attackInfoVO.targetOwnerLevel);
          var __s5local3 = __dep_exact_26a421b704832cff.CombatConst.getMinSoldiers(__s5local2);
          if (__s5local3 > this.attackInfoVO.getSumOfUnits()) {
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleCharacterYesNoOKDialog.CastleCharacterYesNoOKDialog, new __dep_export_CastleCharacterYesNoOKDialogProperties.CastleCharacterYesNoOKDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_watchout"), __dep_exact_92d05af59ee2ff30.Localize.text("errorCode_100", [__s5local3]), __s5local0, null, null, false));
          } else {
            if (__dep_export_CastleModel.CastleModel.userData.userLevel <= __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MAX_LEVEL_ATTACK_WARNING_NOT_ENOUGH_ATTACKPOWER) {
              if (!this.isAttackStrongEnoughOnAllFlanks()) {
                __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardYesNoDialog.CastleStandardYesNoDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardYesNoDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_watchout"), __dep_exact_92d05af59ee2ff30.Localize.text("alert_attackScreen_notEnoughTroops"), this.bindFunction(this.startAttack)));
                return;
              }
            }
            var __s5local4 = this.attackInfoVO.army.waves.some(function (__s16param0) {
              return __s16param0.exceedsUnitLimit();
            });
            if (__s5local4 = __s5local4 || this.attackInfoVO.yardWaveContainer.exceedsLimit()) {
              __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardYesNoDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_watchout"), __dep_exact_92d05af59ee2ff30.Localize.text("errorCode_313")));
            } else {
              this.startAttack();
            }
          }
        }
      }
    } else if (this.attackInfoVO.getSumOfTools() > 0) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleCharacterYesNoOKDialog.CastleCharacterYesNoOKDialog, new __dep_export_CastleCharacterYesNoOKDialogProperties.CastleCharacterYesNoOKDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_watchout"), __dep_exact_92d05af59ee2ff30.Localize.text("dialog_attack_onlyTools"), __s5local0, null, null, false));
    } else {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleCharacterYesNoOKDialog.CastleCharacterYesNoOKDialog, new __dep_export_CastleCharacterYesNoOKDialogProperties.CastleCharacterYesNoOKDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_watchout"), __dep_exact_92d05af59ee2ff30.Localize.text("dialog_attack_noUnits"), __s5local0, null, null, false));
    }
  };
  AttackDialogStartAttackCheck.isAttackStrongEnoughOnAllFlanks = function () {
    if (!this.attackInfoVO.spyInfo || !this.attackInfoVO.spyInfo.itemsLeft || !this.attackInfoVO.spyInfo.itemsMiddle || !this.attackInfoVO.spyInfo.itemsRight) {
      return true;
    }
    var __s22local0;
    var __s22local1 = __dep_exact_f855840627e6e145.int(this.getTotalAttackValue(this.attackInfoVO.spyInfo.itemsLeft.getSoldiers()));
    var __s22local2 = __dep_exact_f855840627e6e145.int(this.getTotalAttackValue(this.attackInfoVO.spyInfo.itemsMiddle.getSoldiers()));
    var __s22local3 = __dep_exact_f855840627e6e145.int(this.getTotalAttackValue(this.attackInfoVO.spyInfo.itemsRight.getSoldiers()));
    var __s22local4 = 0;
    var __s22local5 = 0;
    var __s22local6 = 0;
    for (var __s22local7 = 0; __s22local7 < this.attackInfoVO.army.getWaveCount(); __s22local7++) {
      __s22local0 = this.attackInfoVO.army.getWaveByID(__s22local7);
      var __s22local8 = this.getSelectedLordVO();
      var __s22local9 = __dep_export_LordEffectHelper.LordEffectHelper.getFilterStrategyAttackOrDefence(this.attackInfoVO.targetArea.ownerInfo.playerID, true);
      __s22local4 += __dep_exact_f855840627e6e145.int(__s22local0.itemsLeftWall_units.getAttackMeleeValue(__s22local8, this.attackInfoVO.targetArea, false, true, false, __s22local9) + __s22local0.itemsLeftWall_units.getAttackRangeValue(__s22local8, this.attackInfoVO.targetArea, false, true, false, __s22local9));
      __s22local5 += __dep_exact_f855840627e6e145.int(__s22local0.itemsMiddleWall_units.getAttackMeleeValue(__s22local8, this.attackInfoVO.targetArea, false, false, true, __s22local9) + __s22local0.itemsMiddleWall_units.getAttackRangeValue(__s22local8, this.attackInfoVO.targetArea, false, false, true, __s22local9));
      __s22local6 += __dep_exact_f855840627e6e145.int(__s22local0.itemsRightWall_units.getAttackMeleeValue(__s22local8, this.attackInfoVO.targetArea, false, true, false, __s22local9) + __s22local0.itemsRightWall_units.getAttackRangeValue(__s22local8, this.attackInfoVO.targetArea, false, true, false, __s22local9));
    }
    return __s22local4 + __s22local5 + __s22local6 >= __s22local1 + __s22local2 + __s22local3;
  };
  AttackDialogStartAttackCheck.startAttack = function (__s27param0 = null) {
    var __s27local0 = __dep_exact_81dacdf05bd32292.instanceOfClass(this.attackInfoVO.targetArea, "DaimyoCastleMapObjectVO");
    __s27local0 = (__s27local0 = (__s27local0 = (__s27local0 = __s27local0 || this.attackInfoVO.targetActionType == __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_COLLECTOR_ATTACK) || this.attackInfoVO.isTempServerCollectorAttack) || this.attackInfoVO.isAllianceBattleGroundPlayerPointsAttack) || this.attackInfoVO.isAllianceBattleGroundTowerAttack;
    this.attackInfoVO.openSelectBoosterDialog = __s27local0;
    __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.OPEN_POSTATTACK_DIALOG_COMMAND, [this.attackInfoVO.targetActionType, this.bindFunction(this.hideDialog), this.attackInfoVO, this.getSelectedLordVO()]);
  };
  AttackDialogStartAttackCheck.getTotalAttackValue = function (__s29param0) {
    var __s29local0 = 0;
    if (__s29param0 != null) {
      for (var __s29local1 = 0, __s29local2 = __s29param0; __s29local1 < __s29local2.length; __s29local1++) {
        var __s29local3 = __s29local2[__s29local1];
        if (__s29local3 !== undefined) {
          __s29local0 += __s29local3.buffedMeleeAttack + __s29local3.buffedRangeAttack;
        }
      }
    }
    return __s29local0;
  };
  AttackDialogStartAttackCheck.getSelectedLordVO = function () {
    return __dep_export_AttackDialogController.AttackDialogController.getInstance().selectedLord;
  };
  Object.defineProperty(AttackDialogStartAttackCheck, "attackInfoVO", {
    get: function () {
      return __dep_export_AttackDialogController.AttackDialogController.getInstance().attackVO;
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogStartAttackCheck.hideDialog = function () {
    __dep_export_AttackDialogController.AttackDialogController.getInstance().hideDialog.dispatch();
  };
  AttackDialogStartAttackCheck.__initialize_static_members = function () {};
  return AttackDialogStartAttackCheck;
}();
exports.AttackDialogStartAttackCheck = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
