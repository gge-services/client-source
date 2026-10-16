Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AMovementRenderStrategy = require("gge-module:export_AMovementRenderStrategy");
var __s0local0 = function (__s1param0) {
  function RenderArmyAttack() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RenderArmyAttack, __s1param0);
  RenderArmyAttack.getToolAmountText = function (__s5param0) {
    if (__s5param0.armyState == __dep_export_ArmyAttackMapmovementVO.ArmyAttackMapmovementVO.ARMY_SHORT) {
      return new __dep_exact_92d05af59ee2ff30_2.TextVO("?");
    } else {
      return new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s5param0.attackArmyVO.toolAmount);
    }
  };
  RenderArmyAttack.getUnitAmountText = function (__s9param0) {
    if (__s9param0.armyState == __dep_export_ArmyAttackMapmovementVO.ArmyAttackMapmovementVO.ARMY_SHORT) {
      return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_CIRCA_NOMINAL, [__s9param0.armySize]);
    } else {
      return new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s9param0.attackArmyVO.unitAmount);
    }
  };
  RenderArmyAttack.getTitleTextID = function (__s13param0) {
    if (__s13param0.isConquerMovement) {
      return "dialog_moveOverview_conquerAttack";
    } else if (__s13param0.isMyMovement) {
      return "dialog_moveOverview_attack";
    } else if (__s13param0.isAttackingMovement) {
      return "dialog_moveOverview_underAttack";
    } else if (__dep_export_CastleModel.CastleModel.userData.isUserInMyAllianceAndCheckFactionKingdom(__s13param0)) {
      return "dialog_moveOverview_attack";
    } else {
      return "dialog_moveOverview_underAttack";
    }
  };
  RenderArmyAttack.getDecoFrame = function (__s20param0) {
    if (__s20param0.isMyMovement) {
      return __dep_exact_f855840627e6e145.int(__dep_export_AMovementRenderStrategy.AMovementRenderStrategy.FRAME_MY_ATTACK);
    } else if (__s20param0.isAttackingMovement) {
      if (__s20param0.armyState == __dep_export_ArmyAttackMapmovementVO.ArmyAttackMapmovementVO.ARMY_SHORT) {
        return __dep_exact_f855840627e6e145.int(__dep_export_AMovementRenderStrategy.AMovementRenderStrategy.FRAME_ENEMY_ATTACK);
      } else {
        return __dep_exact_f855840627e6e145.int(__dep_export_AMovementRenderStrategy.AMovementRenderStrategy.FRAME_ENEMY_ATTACK_CLOSE);
      }
    } else if (__dep_export_CastleModel.CastleModel.userData.isUserInMyAllianceAndCheckFactionKingdom(__s20param0)) {
      return __dep_exact_f855840627e6e145.int(__dep_export_AMovementRenderStrategy.AMovementRenderStrategy.FRAME_ALLIED_ATTACK);
    } else if (__s20param0.armyState == __dep_export_ArmyAttackMapmovementVO.ArmyAttackMapmovementVO.ARMY_SHORT) {
      return __dep_exact_f855840627e6e145.int(__dep_export_AMovementRenderStrategy.AMovementRenderStrategy.FRAME_OTHER_ATTACK);
    } else {
      return __dep_exact_f855840627e6e145.int(__dep_export_AMovementRenderStrategy.AMovementRenderStrategy.FRAME_OTHER_ATTACK_CLOSE);
    }
  };
  RenderArmyAttack.prototype.renderData = function (__s29param0, __s29param1) {
    var __s29local0 = __s29param1;
    var __s29local1 = RenderArmyAttack.getUnitAmountText(__s29local0);
    var __s29local2 = RenderArmyAttack.getToolAmountText(__s29local0);
    var __s29local3 = RenderArmyAttack.getTitleTextID(__s29local0);
    var __s29local4 = __dep_exact_f855840627e6e145.int(RenderArmyAttack.getDecoFrame(__s29local0));
    __dep_export_AMovementRenderStrategy.AMovementRenderStrategy.setDecoFrame(__s29param0, __s29local4);
    __s29param0.fieldUnitCount = this.textFieldManager.registerTextField(__s29param0.btn_armyInfo.txt_units, __s29local1, new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
    __s29param0.fieldToolCount = this.textFieldManager.registerTextField(__s29param0.btn_armyInfo.txt_tools, __s29local2, new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
    __s29param0.fieldAction = this.textFieldManager.registerTextField(__s29param0.txt_action, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s29local3), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
    __s29param0.btn_armyInfo.visible = true;
  };
  return RenderArmyAttack;
}(__dep_export_AMovementRenderStrategy.AMovementRenderStrategy);
exports.RenderArmyAttack = __s0local0;
var __dep_export_ArmyAttackMapmovementVO = require("gge-module:export_ArmyAttackMapmovementVO");
