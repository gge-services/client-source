import { BuildToolsPanelButton } from "./BuildToolsPanelButton";
import { CastleModel } from "./CastleModel";
import { CastleRecruitDialog } from "./CastleRecruitDialog";
import { CastleRecruitDialogUnits } from "./CastleRecruitDialogUnits";
import { ClientConstCastle } from "./ClientConstCastle";
import { instanceOfClass } from "../../../ggs.dll/reconstructed/exports/instanceOfClass";
import { int } from "../../../ggs.dll/reconstructed/exports/int";
import { TutorialAbstractMilitaryCommand } from "./TutorialAbstractMilitaryCommand";
import { TutorialBasicActionCommand } from "./TutorialBasicActionCommand";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class TutorialBuildToolsCommand extends TutorialAbstractMilitaryCommand {
  getButtonClass() {
    return BuildToolsPanelButton;
  }
  waitForDialog() {
    var __s7local0 = this.layoutManager.getDialog(CastleRecruitDialog);
    __s7local0.changeCategoryWithParams(ClientConstCastle.UNIT_CATEGORY_TOOLS, [ClientConstCastle.UNIT_CATEGORY_TOOLS, null]);
    var __s7local1 = __s7local0.subLayer.get(ClientConstCastle.UNIT_CATEGORY_TOOLS);
    if (instanceOfClass(__s7local1, "CastleRecruitDialogUnits")) {
      var __s7local2 = int(this._tutorialStepVO.attributes.get(TutorialBasicActionCommand.WODID));
      var __s7local3 = CastleModel.wodData.getUnitVOByWodId(__s7local2);
      var __s7local4 = CastleRecruitDialogUnits.FILTER_TOOLS_ATTACK;
      if (__s7local3.isDefensive) {
        __s7local4 = CastleRecruitDialogUnits.FILTER_TOOLS_DEFENCE;
      }
      __s7local1.changeCurrentFilter(__s7local4, -1, true);
    }
    this.waitForSelectUnit();
  }
}
classImplementsInterfaces(TutorialBuildToolsCommand, "ISimpleCommand");
