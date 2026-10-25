import { C2STemporaryServerTutorialSkipVO } from "./C2STemporaryServerTutorialSkipVO";
import { CastleAutoTutorialBlockerDialog } from "./CastleAutoTutorialBlockerDialog";
import { CastleLayoutManager } from "./CastleLayoutManager";
import { CastleModel } from "./CastleModel";
import { EnvGlobalsHandler } from "../../../ggs.dll/reconstructed/exports/EnvGlobalsHandler";
import { TutorialBasicActionCommand } from "./TutorialBasicActionCommand";
export class TutorialAskToSkipTutorialCommand extends TutorialBasicActionCommand {
  internalExecute() {
    if (EnvGlobalsHandler.globals.isOnSpecialServer) {
      this.doSkip();
    } else {
      this.finishStep();
    }
  }
  doSkip() {
    CastleLayoutManager.getInstance().hideAllDialogsExcept([CastleAutoTutorialBlockerDialog]);
    this.layoutManager.showDialog(CastleAutoTutorialBlockerDialog);
    CastleModel.tutorialData.activateTutorial(false);
    CastleModel.tutorialData.clearBlockers();
    CastleModel.tutorialData.removeAllListeners();
    CastleModel.tutorialData.isSkippingTutorial = true;
    this.layoutManager.muteDialogs = true;
    CastleModel.smartfoxClient.sendCommandVO(new C2STemporaryServerTutorialSkipVO());
  }
}
