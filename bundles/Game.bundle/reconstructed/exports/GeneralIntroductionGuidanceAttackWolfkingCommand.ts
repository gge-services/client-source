import { AttackDialog } from "./AttackDialog";
import { AttackDialogController } from "./AttackDialogController";
import { ButtonHelper } from "./ButtonHelper";
import { CastleDialogEvent } from "./CastleDialogEvent";
import { CastleEquipmentEvent } from "./CastleEquipmentEvent";
import { CastleModel } from "./CastleModel";
import { ClientConstCharacter } from "./ClientConstCharacter";
import { GeneralIntroductionGuidanceBasicCommand } from "./GeneralIntroductionGuidanceBasicCommand";
import { WorldConst } from "../../../ggs.dll/reconstructed/exports/WorldConst";
const __s0local0 = createjs.Point;
export class GeneralIntroductionGuidanceAttackWolfkingCommand extends GeneralIntroductionGuidanceBasicCommand {
  internalExecute() {
    this.waitForExternalDialog(AttackDialog, this.bindFunction(this.onOpenAttackDialog));
  }
  onOpenAttackDialog() {
    if (this.attackInfoVO.targetArea.areaType == WorldConst.AREA_TYPE_WOLF_KING) {
      ButtonHelper.enableButton(this.attackDialog.dialogDisp.mc_autofill_filter.mc_open.mc_bottom.btn_attack, false);
      ButtonHelper.enableButton(this.attackDialog.dialogDisp.mc_bottom_800.btn_attack, false);
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
  }
  hintOpenPlayerInfo() {
    this.removeGuidance();
    var __s14local0 = this.attackDialog.dialogDisp.btn_player_left;
    this.arrows.add(__s14local0, false, true, 1, new __s0local0(25, 55));
    this.waitForOpenPlayerInfo();
    this.waitForExternalDialogClose(AttackDialog, this.bindFunction(this.onCloseDialog));
  }
  hintOpenGeneralSelection() {
    this.removeGuidance();
    this.showGuidance(ClientConstCharacter.CHAR_ID_HORATIO, "generals_introduction_guidance_06");
    var __s16local0 = this.attackDialog.dialogDisp.mc_playerInfo.btn_switch;
    this.arrows.add(__s16local0, false, false, 1);
    this.waitForOpenGeneralsSelection();
    this.waitForClosePlayerInfo();
    this.waitForLordChanged();
    this.waitForExternalDialogClose(AttackDialog, this.bindFunction(this.onCloseDialog));
  }
  hintSelectGeneral() {
    var __s18local0 = this;
    this.removeGuidance();
    this.showGuidance(ClientConstCharacter.CHAR_ID_HORATIO, "generals_introduction_guidance_06");
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
    this.waitForExternalDialogClose(AttackDialog, this.bindFunction(this.onCloseDialog));
  }
  hintAttack() {
    this.removeGuidance();
    this.showGuidance(ClientConstCharacter.CHAR_ID_HORATIO, "generals_introduction_guidance_07");
    ButtonHelper.enableButton(this.attackDialog.dialogDisp.mc_autofill_filter.mc_open.mc_bottom.btn_attack, true);
    ButtonHelper.enableButton(this.attackDialog.dialogDisp.mc_bottom_800.btn_attack, true);
    this.waitForLordChanged();
    this.waitForGeneralAssigned();
    this.waitForExternalDialogClose(AttackDialog, this.bindFunction(this.onCloseDialog));
  }
  waitForOpenPlayerInfo() {
    CastleModel.generalsIntroductionData.registerListener(this.controller, CastleDialogEvent.ATTACK_SCREEN_OPEN_PLAYER_INFO, this.bindFunction(this.hintOpenGeneralSelection));
  }
  waitForClosePlayerInfo() {
    CastleModel.generalsIntroductionData.registerListener(this.controller, CastleDialogEvent.ATTACK_SCREEN_CLOSE_PLAYER_INFO, this.bindFunction(this.hintOpenPlayerInfo));
  }
  waitForOpenGeneralsSelection() {
    CastleModel.generalsIntroductionData.registerListener(this.controller, CastleDialogEvent.ATTACK_SCREEN_OPEN_GENERALS_SELECTION, this.bindFunction(this.hintSelectGeneral));
  }
  waitForCloseGeneralsSelection() {
    CastleModel.generalsIntroductionData.registerListener(this.controller, CastleDialogEvent.ATTACK_SCREEN_CLOSE_GENERALS_SELECTION, this.bindFunction(this.hintOpenGeneralSelection));
  }
  waitForGeneralAssigned() {
    CastleModel.generalsIntroductionData.registerListener(this.controller, CastleEquipmentEvent.GENERAL_ASSIGNED, this.bindFunction(this.onOpenAttackDialog));
  }
  waitForLordChanged() {
    CastleModel.generalsIntroductionData.registerListener(this.controller, CastleDialogEvent.ATTACK_SCREEN_LORD_SELECTED, this.bindFunction(this.onOpenAttackDialog));
  }
  onCloseDialog() {
    ButtonHelper.enableButton(this.attackDialog.dialogDisp.mc_autofill_filter.mc_open.mc_bottom.btn_attack, true);
    ButtonHelper.enableButton(this.attackDialog.dialogDisp.mc_bottom_800.btn_attack, true);
    this.removeGuidance();
    this.internalExecute();
  }
  get assignedGeneralVO() {
    var __s39local0 = AttackDialogController.getInstance().selectedLord;
    if (__s39local0) {
      return __s39local0.assignedGeneralVO;
    } else {
      return null;
    }
  }
  get targetGeneralID() {
    return GeneralIntroductionGuidanceAttackWolfkingCommand.GENERAL_ID_HORATIO;
  }
  get attackInfoVO() {
    return this.attackDialog.dialogProperties.attackInfoVO;
  }
  get attackDialog() {
    return this.layoutManager.getDialog(AttackDialog);
  }
  static GENERAL_ID_HORATIO = 104;
}
