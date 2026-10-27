import { ABotCommand } from "./ABotCommand";
import { ClientCheatsHelper } from "./ClientCheatsHelper";
export class CheatRelicIDsCommand extends ABotCommand {
  execute(argument0 = null) {
    ClientCheatsHelper.performCommand("showRelicIDS");
  }
}
