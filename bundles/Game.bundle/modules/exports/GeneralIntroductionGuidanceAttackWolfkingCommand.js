Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstCharacter = require("gge-module:export_ClientConstCharacter");
var __dep_export_CastleDialogEvent = require("gge-module:export_CastleDialogEvent");
var __dep_export_CastleEquipmentEvent = require("gge-module:export_CastleEquipmentEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AttackDialog = require("gge-module:export_AttackDialog");
var __dep_export_AttackDialogController = require("gge-module:export_AttackDialogController");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_GeneralIntroductionGuidanceBasicCommand = require("gge-module:export_GeneralIntroductionGuidanceBasicCommand");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function GeneralIntroductionGuidanceAttackWolfkingCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GeneralIntroductionGuidanceAttackWolfkingCommand, __s1param0);
  GeneralIntroductionGuidanceAttackWolfkingCommand.prototype.internalExecute = function () {
    this.waitForExternalDialog(__dep_export_AttackDialog.AttackDialog, this.bindFunction(this.onOpenAttackDialog));
  };
  GeneralIntroductionGuidanceAttackWolfkingCommand.prototype.onOpenAttackDialog = function () {
    if (this.attackInfoVO.targetArea.areaType == __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_WOLF_KING) {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.attackDialog.dialogDisp.mc_autofill_filter.mc_open.mc_bottom.btn_attack, false);
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.attackDialog.dialogDisp.mc_bottom_800.btn_attack, false);
      if (this.assignedGeneralVO && this.assignedGeneralVO.generalID == this.targetGeneralID) {
        this.hintAttack();
      } else if (this.attackDialog.generalSelection.isVisble) {
        this.hintSelectGeneral();
      } else if (this.attackDialog.dialogDisp.mc_playerInfo.visible) {
        this.hintOpenGeneralSelection();
      } else {
        this.hintOpenPlayerInfo();
      }
    }
  };
  GeneralIntroductionGuidanceAttackWolfkingCommand.prototype.hintOpenPlayerInfo = function () {
    this.removeGuidance();
    var __s14local0 = this.attackDialog.dialogDisp.btn_player_left;
    this.arrows.add(__s14local0, false, true, 1, new __s0local0(25, 55));
    this.waitForOpenPlayerInfo();
    this.waitForExternalDialogClose(__dep_export_AttackDialog.AttackDialog, this.bindFunction(this.onCloseDialog));
  };
  GeneralIntroductionGuidanceAttackWolfkingCommand.prototype.hintOpenGeneralSelection = function () {
    this.removeGuidance();
    this.showGuidance(__dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_HORATIO, "generals_introduction_guidance_06");
    var __s16local0 = this.attackDialog.dialogDisp.mc_playerInfo.btn_switch;
    this.arrows.add(__s16local0, false, false, 1);
    this.waitForOpenGeneralsSelection();
    this.waitForClosePlayerInfo();
    this.waitForLordChanged();
    this.waitForExternalDialogClose(__dep_export_AttackDialog.AttackDialog, this.bindFunction(this.onCloseDialog));
  };
  GeneralIntroductionGuidanceAttackWolfkingCommand.prototype.hintSelectGeneral = function () {
    var __s18local0 = this;
    this.removeGuidance();
    this.showGuidance(__dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_HORATIO, "generals_introduction_guidance_06");
    var __s18local1 = this.attackDialog.generalSelection.generalSelection.items.find(function (__s20param0) {
      return __s20param0.generalVO && __s20param0.generalVO.generalID == __s18local0.targetGeneralID;
    });
    if (__s18local1) {
      this.arrows.add(__s18local1.disp, true, true, 1, new __s0local0(-25, 55));
    }
    this.waitForLordChanged();
    this.waitForGeneralAssigned();
    this.waitForCloseGeneralsSelection();
    this.waitForClosePlayerInfo();
    this.waitForExternalDialogClose(__dep_export_AttackDialog.AttackDialog, this.bindFunction(this.onCloseDialog));
  };
  GeneralIntroductionGuidanceAttackWolfkingCommand.prototype.hintAttack = function () {
    this.removeGuidance();
    this.showGuidance(__dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_HORATIO, "generals_introduction_guidance_07");
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.attackDialog.dialogDisp.mc_autofill_filter.mc_open.mc_bottom.btn_attack, true);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.attackDialog.dialogDisp.mc_bottom_800.btn_attack, true);
    this.waitForLordChanged();
    this.waitForGeneralAssigned();
    this.waitForExternalDialogClose(__dep_export_AttackDialog.AttackDialog, this.bindFunction(this.onCloseDialog));
  };
  GeneralIntroductionGuidanceAttackWolfkingCommand.prototype.waitForOpenPlayerInfo = function () {
    __dep_export_CastleModel.CastleModel.generalsIntroductionData.registerListener(this.controller, __dep_export_CastleDialogEvent.CastleDialogEvent.ATTACK_SCREEN_OPEN_PLAYER_INFO, this.bindFunction(this.hintOpenGeneralSelection));
  };
  GeneralIntroductionGuidanceAttackWolfkingCommand.prototype.waitForClosePlayerInfo = function () {
    __dep_export_CastleModel.CastleModel.generalsIntroductionData.registerListener(this.controller, __dep_export_CastleDialogEvent.CastleDialogEvent.ATTACK_SCREEN_CLOSE_PLAYER_INFO, this.bindFunction(this.hintOpenPlayerInfo));
  };
  GeneralIntroductionGuidanceAttackWolfkingCommand.prototype.waitForOpenGeneralsSelection = function () {
    __dep_export_CastleModel.CastleModel.generalsIntroductionData.registerListener(this.controller, __dep_export_CastleDialogEvent.CastleDialogEvent.ATTACK_SCREEN_OPEN_GENERALS_SELECTION, this.bindFunction(this.hintSelectGeneral));
  };
  GeneralIntroductionGuidanceAttackWolfkingCommand.prototype.waitForCloseGeneralsSelection = function () {
    __dep_export_CastleModel.CastleModel.generalsIntroductionData.registerListener(this.controller, __dep_export_CastleDialogEvent.CastleDialogEvent.ATTACK_SCREEN_CLOSE_GENERALS_SELECTION, this.bindFunction(this.hintOpenGeneralSelection));
  };
  GeneralIntroductionGuidanceAttackWolfkingCommand.prototype.waitForGeneralAssigned = function () {
    __dep_export_CastleModel.CastleModel.generalsIntroductionData.registerListener(this.controller, __dep_export_CastleEquipmentEvent.CastleEquipmentEvent.GENERAL_ASSIGNED, this.bindFunction(this.onOpenAttackDialog));
  };
  GeneralIntroductionGuidanceAttackWolfkingCommand.prototype.waitForLordChanged = function () {
    __dep_export_CastleModel.CastleModel.generalsIntroductionData.registerListener(this.controller, __dep_export_CastleDialogEvent.CastleDialogEvent.ATTACK_SCREEN_LORD_SELECTED, this.bindFunction(this.onOpenAttackDialog));
  };
  GeneralIntroductionGuidanceAttackWolfkingCommand.prototype.onCloseDialog = function () {
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.attackDialog.dialogDisp.mc_autofill_filter.mc_open.mc_bottom.btn_attack, true);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.attackDialog.dialogDisp.mc_bottom_800.btn_attack, true);
    this.removeGuidance();
    this.internalExecute();
  };
  Object.defineProperty(GeneralIntroductionGuidanceAttackWolfkingCommand.prototype, "assignedGeneralVO", {
    get: function () {
      var __s39local0 = __dep_export_AttackDialogController.AttackDialogController.getInstance().selectedLord;
      if (__s39local0) {
        return __s39local0.assignedGeneralVO;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralIntroductionGuidanceAttackWolfkingCommand.prototype, "targetGeneralID", {
    get: function () {
      return GeneralIntroductionGuidanceAttackWolfkingCommand.GENERAL_ID_HORATIO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralIntroductionGuidanceAttackWolfkingCommand.prototype, "attackInfoVO", {
    get: function () {
      return this.attackDialog.dialogProperties.attackInfoVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralIntroductionGuidanceAttackWolfkingCommand.prototype, "attackDialog", {
    get: function () {
      return this.layoutManager.getDialog(__dep_export_AttackDialog.AttackDialog);
    },
    enumerable: true,
    configurable: true
  });
  GeneralIntroductionGuidanceAttackWolfkingCommand.GENERAL_ID_HORATIO = 104;
  return GeneralIntroductionGuidanceAttackWolfkingCommand;
}(__dep_export_GeneralIntroductionGuidanceBasicCommand.GeneralIntroductionGuidanceBasicCommand);
exports.GeneralIntroductionGuidanceAttackWolfkingCommand = __s0local1;
