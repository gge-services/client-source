import { ClientFunnelGameStates } from "../../../ggs.dll/reconstructed/exports/ClientFunnelGameStates";
import { ClientFunnelTrackingController } from "../../../ggs.dll/reconstructed/exports/ClientFunnelTrackingController";
import { TutorialBasicQuestStarterActionCommand } from "./TutorialBasicQuestStarterActionCommand";
export class TutorialConfirmMainTutorialFinishedCommand extends TutorialBasicQuestStarterActionCommand {
  internalExecute() {
    super.internalExecute();
    ClientFunnelTrackingController.getInstance().trackState(ClientFunnelGameStates.TUTORIAL_END);
  }
  getTrackOnQuestConfirmID() {
    return "050_020_tutorial_finished";
  }
}
