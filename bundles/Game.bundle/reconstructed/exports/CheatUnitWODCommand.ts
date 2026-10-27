import { ABotCommand } from "./ABotCommand";
import { ClientCheatsHelper } from "./ClientCheatsHelper";
export class CheatUnitWODCommand extends ABotCommand {
  execute(argument0 = null) {
    ClientCheatsHelper.performCommand("toggleUnitWodID");
  }
}
