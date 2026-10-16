Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_C2SCreateAllianceBattleGroundCollectorArmyAttackMovementVO = require("gge-module:export_C2SCreateAllianceBattleGroundCollectorArmyAttackMovementVO");
var __dep_export_C2SCreateArmyAttackMovementAdvisorVO = require("gge-module:export_C2SCreateArmyAttackMovementAdvisorVO");
var __dep_export_C2SCreateArmyAttackMovementTempServerVO = require("gge-module:export_C2SCreateArmyAttackMovementTempServerVO");
var __dep_export_C2SCreateArmyAttackMovementVO = require("gge-module:export_C2SCreateArmyAttackMovementVO");
var __dep_export_C2SCreateDefenceSupportMovementVO = require("gge-module:export_C2SCreateDefenceSupportMovementVO");
var __dep_export_ABGHelper = require("gge-module:export_ABGHelper");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_AttackDialogTrackingHelper = require("gge-module:export_AttackDialogTrackingHelper");
var __dep_export_CastleDataHolder = require("gge-module:export_CastleDataHolder");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function () {
  function CastleAttackData() {}
  CastleAttackData.prototype.parse_ACI = function (__s5param0) {
    if (!__s5param0) {
      return null;
    }
    var __s5local0 = new __dep_export_CastleAttackInfoVO.CastleAttackInfoVO();
    __s5local0.targetActionType = __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_ATTACK;
    __s5local0.fillFromParamObject(__s5param0);
    if (__dep_export_ABGHelper.ABGHelper.isOnABGAndCollector && (__dep_exact_81dacdf05bd32292.instanceOfClass(__s5local0.targetArea, "CastleMapobjectVO") || __dep_exact_81dacdf05bd32292.instanceOfClass(__s5local0.targetArea, "CapitalMapobjectVO"))) {
      __s5local0.targetCollectorCurrencyAmount = __dep_export_CastleModel.CastleModel.collectEventData.lastGotAmountForTarget;
    }
    return __s5local0;
  };
  CastleAttackData.prototype.parse_GTI = function (__s9param0) {
    if (!__s9param0) {
      return null;
    }
    var __s9local0 = new __dep_export_CastleAttackInfoVO.CastleAttackInfoVO();
    __s9local0.targetActionType = __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_ATTACK;
    __s9local0.fillFromParamObject(__s9param0);
    return __s9local0;
  };
  CastleAttackData.prototype.parse_ABI = function (__s12param0) {
    if (!__s12param0) {
      return null;
    }
    var __s12local0 = new __dep_export_CastleAttackInfoVO.CastleAttackInfoVO();
    __s12local0.targetActionType = __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_BOSSDUNGEONATTACK;
    __s12local0.fillFromParamObject(__s12param0);
    return __s12local0;
  };
  CastleAttackData.prototype.parse_ADI = function (__s15param0) {
    var __s15local0 = new __dep_export_CastleAttackInfoVO.CastleAttackInfoVO();
    __s15local0.targetActionType = __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_DUNGEONATTACK;
    __s15local0.fillFromParamObject(__s15param0);
    return __s15local0;
  };
  CastleAttackData.prototype.parse_AVI = function (__s17param0) {
    var __s17local0 = new __dep_export_CastleAttackInfoVO.CastleAttackInfoVO();
    __s17local0.targetActionType = __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_VILLAGE_ATTACK;
    __s17local0.fillFromParamObject(__s17param0);
    return __s17local0;
  };
  CastleAttackData.prototype.parse_AII = function (__s19param0) {
    var __s19local0 = new __dep_export_CastleAttackInfoVO.CastleAttackInfoVO();
    __s19local0.targetActionType = __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_ISLAND_ATTACK;
    __s19local0.fillFromParamObject(__s19param0);
    return __s19local0;
  };
  CastleAttackData.prototype.parse_ALI = function (__s21param0) {
    var __s21local0 = new __dep_export_CastleAttackInfoVO.CastleAttackInfoVO();
    __s21local0.targetActionType = __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_LANDMARK_ATTACK;
    __s21local0.fillFromParamObject(__s21param0);
    return __s21local0;
  };
  CastleAttackData.prototype.parse_COI = function (__s23param0) {
    var __s23local0 = new __dep_export_CastleConquerInfoVO.CastleConquerInfoVO();
    __s23local0.targetActionType = __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_CONQUER;
    __s23local0.isCapital = false;
    __s23local0.isMetropol = false;
    __s23local0.fillFromParamObject(__s23param0);
    return __s23local0;
  };
  CastleAttackData.prototype.parse_CCI = function (__s25param0) {
    var __s25local0 = new __dep_export_CastleConquerInfoVO.CastleConquerInfoVO();
    __s25local0.targetActionType = __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_CONQUER;
    __s25local0.isCapital = true;
    __s25local0.isMetropol = false;
    __s25local0.fillFromParamObject(__s25param0);
    return __s25local0;
  };
  CastleAttackData.prototype.parse_CTI = function (__s27param0) {
    var __s27local0 = new __dep_export_CastleConquerInfoVO.CastleConquerInfoVO();
    __s27local0.targetActionType = __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_CONQUER;
    __s27local0.isMetropol = true;
    __s27local0.isCapital = false;
    __s27local0.fillFromParamObject(__s27param0);
    return __s27local0;
  };
  CastleAttackData.prototype.parse_ACC = function (__s29param0) {
    var __s29local0 = new __dep_export_CastleAttackInfoVO.CastleAttackInfoVO();
    __s29local0.targetActionType = __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_COLLECTOR_ATTACK;
    __s29local0.isCollectorAttack = true;
    __s29local0.targetCollectorCurrencyAmount = __s29param0.CCA;
    __s29local0.fillFromParamObject(__s29param0);
    return __s29local0;
  };
  CastleAttackData.prototype.sendAttackPlayerAllianceBattleground = function (__s31param0, __s31param1, __s31param2, __s31param3, __s31param4, __s31param5, __s31param6, __s31param7) {
    if (__s31param0.isAttackComplete()) {
      var __s31local0 = new __dep_export_C2SCreateAllianceBattleGroundCollectorArmyAttackMovementVO.C2SCreateAllianceBattleGroundCollectorArmyAttackMovementVO(__s31param0.sourceArea.absAreaPos, __s31param0.targetArea.absAreaPos, __s31param0.army.getArmyData(), __s31param0.waitTime, __s31param1, __s31param2, __s31param0.isConquerAttack ? __dep_exact_26a421b704832cff.CombatConst.ATTACK_TYPE_CONQUER : __dep_exact_26a421b704832cff.CombatConst.ATTACK_TYPE_ATTACK, __s31param3, __s31param4, __s31param5 ? __s31param5.id : 0, false, __s31param0.sourceArea.kingdomID, __s31param6, __s31param7, __s31param0.isCollectorAttack ? 1 : 0, __s31param0.collecterBooster, __s31param0.toolsSupportWodIds, __s31param0.yardWaveContainer.getSlotList(true));
      __dep_export_CastleDataHolder.CastleDataHolder.instance.commandVO = __s31local0;
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(__s31local0);
      __dep_export_AttackDialogTrackingHelper.AttackDialogTrackingHelper.getInstance().endSessionAndTrack(true);
    }
  };
  CastleAttackData.prototype.sendAttackTempServer = function (__s34param0, __s34param1, __s34param2, __s34param3, __s34param4, __s34param5, __s34param6, __s34param7) {
    if (__s34param0.isAttackComplete()) {
      var __s34local0 = new __dep_export_C2SCreateArmyAttackMovementTempServerVO.C2SCreateArmyAttackMovementTempServerVO(__s34param0.sourceArea.absAreaPos, __s34param0.targetArea.absAreaPos, __s34param0.army.getArmyData(), __s34param0.waitTime, __s34param1, __s34param2, __s34param0.isConquerAttack ? __dep_exact_26a421b704832cff.CombatConst.ATTACK_TYPE_CONQUER : __dep_exact_26a421b704832cff.CombatConst.ATTACK_TYPE_ATTACK, __s34param3, __s34param4, __s34param5 ? __s34param5.id : 0, false, __s34param0.sourceArea.kingdomID, __s34param6, __s34param7, __s34param0.isCollectorAttack ? 1 : 0, __s34param0.collecterBooster, __s34param0.toolsSupportWodIds, __s34param0.yardWaveContainer.getSlotList(true));
      __dep_export_CastleDataHolder.CastleDataHolder.instance.commandVO = __s34local0;
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(__s34local0);
      __dep_export_AttackDialogTrackingHelper.AttackDialogTrackingHelper.getInstance().endSessionAndTrack(true);
    }
  };
  CastleAttackData.prototype.sendAttack = function (__s37param0, __s37param1, __s37param2, __s37param3, __s37param4, __s37param5, __s37param6, __s37param7) {
    if (__s37param0.isAttackComplete()) {
      var __s37local0 = new (__s37param0.advisorAttacks > 0 ? __dep_export_C2SCreateArmyAttackMovementAdvisorVO.C2SCreateArmyAttackMovementAdvisorVO : __dep_export_C2SCreateArmyAttackMovementVO.C2SCreateArmyAttackMovementVO)(__s37param0.sourceArea.absAreaPos, __s37param0.targetArea.absAreaPos, __s37param0.army.getArmyData(), __s37param0.waitTime, __s37param1, __s37param2, __s37param0.isConquerAttack ? __dep_exact_26a421b704832cff.CombatConst.ATTACK_TYPE_CONQUER : __dep_exact_26a421b704832cff.CombatConst.ATTACK_TYPE_ATTACK, __s37param3, __s37param4, __s37param5 ? __s37param5.id : 0, false, __s37param0.sourceArea.kingdomID, __s37param6, __s37param7, __s37param0.isCollectorAttack ? 1 : 0, __s37param0.collecterBooster, __s37param0.toolsSupportWodIds, __s37param0.yardWaveContainer.getSlotList(true), __s37param0.autoSkipCooldownType);
      if (__s37local0 instanceof __dep_export_C2SCreateArmyAttackMovementAdvisorVO.C2SCreateArmyAttackMovementAdvisorVO) {
        __s37local0.setAdvisor(__s37param0.advisorType, __s37param0.advisorAttacks, __s37param0.advisorAttacksBattlelog);
      }
      __dep_export_CastleDataHolder.CastleDataHolder.instance.commandVO = __s37local0;
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(__s37local0);
      __dep_export_AttackDialogTrackingHelper.AttackDialogTrackingHelper.getInstance().endSessionAndTrack(true);
    }
  };
  CastleAttackData.prototype.sendSupport = function (__s41param0, __s41param1, __s41param2, __s41param3, __s41param4, __s41param5) {
    if (__s41param0.targetArea.areaType == __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_ALLIANCE_BATTLE_GROUND_TOWER) {
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SCreateAllianceTowerSupportMovementVO.C2SCreateAllianceTowerSupportMovementVO(__s41param0.sourceArea.objectId, __s41param0.targetArea.absAreaPosX, __s41param0.targetArea.absAreaPosY, __s41param0.getArmy(), __s41param0.waitTime, __s41param1, __s41param2, __s41param3 ? __s41param3.id : 0, __s41param4, __s41param5));
    } else {
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SCreateDefenceSupportMovementVO.C2SCreateDefenceSupportMovementVO(__s41param0.sourceArea.objectId, __s41param0.targetArea.absAreaPosX, __s41param0.targetArea.absAreaPosY, __s41param0.getArmy(), __s41param0.waitTime, __s41param1, __s41param2, __s41param3 ? __s41param3.id : 0, __s41param4, __s41param5));
    }
  };
  CastleAttackData.prototype.getNextFreeWaveLevel = function (__s45param0) {
    return __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.CombatConst.WAVE_UNLOCK_LEVEL[__dep_exact_26a421b704832cff.CombatConst.getMaxWaveCount(__s45param0, false)]);
  };
  Object.defineProperty(CastleAttackData.prototype, "controller", {
    get: function () {
      return __dep_export_CastleBasicController.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastleAttackData;
}();
exports.CastleAttackData = __s0local0;
var __dep_export_CastleAttackInfoVO = require("gge-module:export_CastleAttackInfoVO");
var __dep_export_CastleConquerInfoVO = require("gge-module:export_CastleConquerInfoVO");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_C2SCreateAllianceTowerSupportMovementVO = require("gge-module:export_C2SCreateAllianceTowerSupportMovementVO");
