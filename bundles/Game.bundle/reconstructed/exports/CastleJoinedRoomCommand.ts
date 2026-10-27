import { BasicJoinedRoomCommand } from "../../../ggs.dll/reconstructed/exports/BasicJoinedRoomCommand";
import { BasicSmartfoxClient } from "../../../ggs.dll/reconstructed/exports/BasicSmartfoxClient";
import { ClientFunnelGameStates } from "../../../ggs.dll/reconstructed/exports/ClientFunnelGameStates";
import { ClientFunnelTrackingController } from "../../../ggs.dll/reconstructed/exports/ClientFunnelTrackingController";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class CastleJoinedRoomCommand extends BasicJoinedRoomCommand {
  execute(argument0 = null) {
    if (argument0.params[0] == BasicSmartfoxClient.LOBBY_ROOM_NAME) {
      ClientFunnelTrackingController.getInstance().trackState(ClientFunnelGameStates.VERSION_CHECK_SEND);
    }
    super.execute(argument0);
  }
}
classImplementsInterfaces(CastleJoinedRoomCommand, "ISimpleCommand");
