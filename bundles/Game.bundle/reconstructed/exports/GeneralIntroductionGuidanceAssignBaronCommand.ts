import { CastleDefenceDialog } from "./CastleDefenceDialog";
import { CastleDialogEvent } from "./CastleDialogEvent";
import { CastleModel } from "./CastleModel";
import { ClientConstCharacter } from "./ClientConstCharacter";
import { GeneralIntroductionGuidanceBasicCommand } from "./GeneralIntroductionGuidanceBasicCommand";
const __s0local0 = createjs.Point;
export class GeneralIntroductionGuidanceAssignBaronCommand extends GeneralIntroductionGuidanceBasicCommand {
  internalExecute() {
    this.waitForExternalDialog(CastleDefenceDialog, this.bindFunction(this.hintGeneralIcon));
  }
  hintGeneralIcon() {
    var __s7local0 = CastleModel.userData.castleList.getHomeCastle();
    if (this.defenceDialog.sourceArea.equalsOtherWMO(__s7local0.objectId, __s7local0.kingdomID)) {
      this.removeGuidance();
      var __s7local1 = CastleModel.lordData.getBaronByCastleMapObjectVO(__s7local0).assignedGeneralVO;
      if (!__s7local1 || __s7local1 && __s7local1.generalID != this.targetGeneralID) {
        this.arrows.add(this.defenceDialog.dialogDisp.mc_generalIcon, true, true, 1, new __s0local0(-25, 55));
        this.showGuidance(ClientConstCharacter.CHAR_ID_HORATIO, "generals_introduction_guidance_03");
        this.waitForOpenGeneralsPanel();
        this.waitForExternalDialogClose(CastleDefenceDialog, this.bindFunction(this.onCloseDialog));
      }
    }
  }
  hintOpenGeneralSelection() {
    this.removeGuidance();
    var __s11local0 = this.defenceDialog.dialogDisp.mc_generals.mc_generalInfo.btn_switch;
    this.arrows.add(__s11local0, true, false, 1);
    this.waitForOpenGeneralsSelection();
    this.waitForCloseGeneralsPanel();
    this.waitForExternalDialogClose(CastleDefenceDialog, this.bindFunction(this.onCloseDialog));
  }
  hintGeneralSelection() {
    var __s13local0 = this;
    this.removeGuidance();
    this.defenceDialog.openGeneralSelection();
    var __s13local1 = this.defenceDialog.generalSelection.items.find(function (__s15param0) {
      return __s15param0.generalVO && __s15param0.generalVO.generalID == __s13local0.targetGeneralID;
    });
    if (__s13local1) {
      this.arrows.add(__s13local1.disp, false, true, 1, new __s0local0(25, 55));
    }
    this.waitForCloseGeneralsPanel();
    this.waitForCloseGeneralsSelection();
    this.waitForExternalDialogClose(CastleDefenceDialog, this.bindFunction(this.onCloseDialog));
  }
  waitForOpenGeneralsPanel() {
    CastleModel.generalsIntroductionData.registerListener(this.controller, CastleDialogEvent.DEFENCE_SCREEN_OPEN_GENERALS, this.bindFunction(this.hintGeneralSelection));
  }
  waitForCloseGeneralsPanel() {
    CastleModel.generalsIntroductionData.registerListener(this.controller, CastleDialogEvent.DEFENCE_SCREEN_CLOSE_GENERALS, this.bindFunction(this.hintGeneralIcon));
  }
  waitForOpenGeneralsSelection() {
    CastleModel.generalsIntroductionData.registerListener(this.controller, CastleDialogEvent.DEFENCE_SCREEN_OPEN_GENERALS_SELECTION, this.bindFunction(this.hintGeneralSelection));
  }
  waitForCloseGeneralsSelection() {
    CastleModel.generalsIntroductionData.registerListener(this.controller, CastleDialogEvent.DEFENCE_SCREEN_CLOSE_GENERALS_SELECTION, this.bindFunction(this.hintOpenGeneralSelection));
  }
  onCloseDialog() {
    this.removeGuidance();
    this.internalExecute();
  }
  get targetGeneralID() {
    return this._questConditionVO.conditionData[0];
  }
  get defenceDialog() {
    return this.layoutManager.getDialog(CastleDefenceDialog);
  }
}
