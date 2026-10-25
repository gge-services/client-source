import { ABotCommand } from "./ABotCommand";
import { ClientCheatsHelper } from "./ClientCheatsHelper";
export class CheatRelicIDsCommand extends ABotCommand {
  execute(__s5param0 = null) {
    ClientCheatsHelper.performCommand("showRelicIDS");
  }
}
