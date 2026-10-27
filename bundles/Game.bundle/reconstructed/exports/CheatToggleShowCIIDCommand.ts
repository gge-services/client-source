import { ABotCommand } from "./ABotCommand";
import { ClientCheatsHelper } from "./ClientCheatsHelper";
export class CheatToggleShowCIIDCommand extends ABotCommand {
  execute(argument0 = null) {
    ClientCheatsHelper.performCommand("toggleShowCiIDs");
  }
}
