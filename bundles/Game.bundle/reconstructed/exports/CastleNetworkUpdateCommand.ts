import { BasicController } from "../../../ggs.dll/reconstructed/exports/BasicController";
import { BasicNetworkUpdateCommand } from "../../../ggs.dll/reconstructed/exports/BasicNetworkUpdateCommand";
import { CastleModel } from "./CastleModel";
import { ClientFunnelGameStates } from "../../../ggs.dll/reconstructed/exports/ClientFunnelGameStates";
import { ClientFunnelTrackingController } from "../../../ggs.dll/reconstructed/exports/ClientFunnelTrackingController";
import { CommandController } from "../../../ggs.dll/reconstructed/exports/CommandController";
import { IngameClientCommands } from "./IngameClientCommands";
export class CastleNetworkUpdateCommand extends BasicNetworkUpdateCommand {
  constructor(...args) {
    super();
  }
  execute(__s5param0 = null) {
    if (this.env.useAutoLogin && CastleModel.localData.hasInstanceId) {
      ClientFunnelTrackingController.getInstance().trackState(ClientFunnelGameStates.LOGIN_COOKIE_READ);
      CommandController.instance.executeCommand(BasicController.COMMAND_LOGIN);
      CommandController.instance.executeCommand(IngameClientCommands.INIT_EQUIPMENT_FAVORITES);
    }
  }
}
