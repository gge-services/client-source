import { CastleBasicController } from "./CastleBasicController";
import { CastleLayoutManager } from "./CastleLayoutManager";
import { CastleLayoutManagerEvent } from "./CastleLayoutManagerEvent";
import { CastleModel } from "./CastleModel";
import { CastleTutorialArrowController } from "./CastleTutorialArrowController";
import { SimpleCommand } from "../../../ggs.dll/reconstructed/exports/SimpleCommand";
export class GeneralIntroductionGuidanceBasicCommand extends SimpleCommand {
  execute(argument0) {
    super.execute(argument0);
    this._questConditionVO = argument0;
    this.internalExecute();
  }
  internalExecute() {}
  showGuidance(argument0, argument1, argument2 = null) {
    if (!this.layoutManager.guidancePanel) {
      this.layoutManager.addGuidancePanel();
    }
    this.layoutManager.guidancePanel.showWithText(argument0, argument1, argument2);
  }
  removeGuidance() {
    CastleModel.generalsIntroductionData.removeGeneralIntroductionGuidance();
  }
  waitForExternalDialog(argument0, argument1) {
    if (this.layoutManager.isDialogVisibleByName(argument0)) {
      argument1();
    } else {
      CastleModel.generalsIntroductionData.registerListener(this.controller, CastleLayoutManagerEvent.SHOW_EXTERNAL_DIALOG, function (__s18param0) {
        if (__s18param0.params[0] && __s18param0.params[0] == argument0) {
          argument1();
        }
      });
    }
  }
  waitForExternalDialogClose(argument0, argument1) {
    CastleModel.generalsIntroductionData.registerListener(this.controller, CastleLayoutManagerEvent.HIDE_EXTERNAL_DIALOG, function (__s23param0) {
      if (__s23param0.params[0] && __s23param0.params[0] == argument0) {
        argument1();
      }
    });
  }
  get arrows() {
    return CastleTutorialArrowController.instance;
  }
  get controller() {
    return CastleBasicController.getInstance();
  }
  get layoutManager() {
    return CastleLayoutManager.getInstance();
  }
}
