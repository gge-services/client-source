import { CastleBasicController } from "./CastleBasicController";
import { CastleLayoutManager } from "./CastleLayoutManager";
import { CastleLayoutManagerEvent } from "./CastleLayoutManagerEvent";
import { CastleModel } from "./CastleModel";
import { CastleTutorialArrowController } from "./CastleTutorialArrowController";
import { SimpleCommand } from "../../../ggs.dll/reconstructed/exports/SimpleCommand";
export class GeneralIntroductionGuidanceBasicCommand extends SimpleCommand {
  execute(__s5param0) {
    super.execute(__s5param0);
    this._questConditionVO = __s5param0;
    this.internalExecute();
  }
  internalExecute() {}
  showGuidance(__s9param0, __s9param1, __s9param2 = null) {
    if (!this.layoutManager.guidancePanel) {
      this.layoutManager.addGuidancePanel();
    }
    this.layoutManager.guidancePanel.showWithText(__s9param0, __s9param1, __s9param2);
  }
  removeGuidance() {
    CastleModel.generalsIntroductionData.removeGeneralIntroductionGuidance();
  }
  waitForExternalDialog(__s14param0, __s14param1) {
    if (this.layoutManager.isDialogVisibleByName(__s14param0)) {
      __s14param1();
    } else {
      CastleModel.generalsIntroductionData.registerListener(this.controller, CastleLayoutManagerEvent.SHOW_EXTERNAL_DIALOG, function (__s18param0) {
        if (__s18param0.params[0] && __s18param0.params[0] == __s14param0) {
          __s14param1();
        }
      });
    }
  }
  waitForExternalDialogClose(__s21param0, __s21param1) {
    CastleModel.generalsIntroductionData.registerListener(this.controller, CastleLayoutManagerEvent.HIDE_EXTERNAL_DIALOG, function (__s23param0) {
      if (__s23param0.params[0] && __s23param0.params[0] == __s21param0) {
        __s21param1();
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
