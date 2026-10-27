import { ABotCommand } from "./ABotCommand";
import { ClientCheatsHelper } from "./ClientCheatsHelper";
export class CheatQuestIDsCommand extends ABotCommand {
  execute(argument0 = null) {
    var __s5local0 = prompt("'on' or 'off' ", "on");
    if (__s5local0 == "on") {
      ClientCheatsHelper.performCommand("showQuestIDs on");
    }
    if (__s5local0 == "off") {
      ClientCheatsHelper.performCommand("showQuestIDs on");
    }
  }
}
