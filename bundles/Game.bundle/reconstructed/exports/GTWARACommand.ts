import { CastleCommand } from "./CastleCommand";
import { ClientConstSF } from "./ClientConstSF";
import { CommandController } from "../../../ggs.dll/reconstructed/exports/CommandController";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { IngameClientCommands } from "./IngameClientCommands";
export class GTWARACommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_GO_TO_WORLD_MAP_AFTER_REMOVE_AREA;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(__s9param0, __s9param1) {
    switch (__s9param0) {
      case ERROR.ALL_OK:
        CommandController.instance.executeCommand(IngameClientCommands.SWITCH_TO_WORLDMAP_COMMAND);
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  }
}
