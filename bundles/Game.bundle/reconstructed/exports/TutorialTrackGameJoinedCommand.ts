import { ClientFunnelGameStates } from "../../../ggs.dll/reconstructed/exports/ClientFunnelGameStates";
import { ClientFunnelTrackingController } from "../../../ggs.dll/reconstructed/exports/ClientFunnelTrackingController";
import { TutorialBasicActionCommand } from "./TutorialBasicActionCommand";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class TutorialTrackGameJoinedCommand extends TutorialBasicActionCommand {
  internalExecute() {
    this.trackStep(ClientFunnelGameStates.GAME_JOINED, false);
    this.trackStep("tutorial_started");
    ClientFunnelTrackingController.getInstance().trackState(ClientFunnelGameStates.TUTORIAL_START);
    this.finishStep();
  }
}
classImplementsInterfaces(TutorialTrackGameJoinedCommand, "ISimpleCommand");
