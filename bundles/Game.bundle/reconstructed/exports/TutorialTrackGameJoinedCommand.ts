import { ClientFunnelGameStates } from "../../../ggs.dll/reconstructed/exports/ClientFunnelGameStates";
import { ClientFunnelTrackingController } from "../../../ggs.dll/reconstructed/exports/ClientFunnelTrackingController";
import { TutorialBasicActionCommand } from "./TutorialBasicActionCommand";
export class TutorialTrackGameJoinedCommand extends TutorialBasicActionCommand {
  internalExecute() {
    this.trackStep(ClientFunnelGameStates.GAME_JOINED, false);
    this.trackStep("tutorial_started");
    ClientFunnelTrackingController.getInstance().trackState(ClientFunnelGameStates.TUTORIAL_START);
    this.finishStep();
  }
}
