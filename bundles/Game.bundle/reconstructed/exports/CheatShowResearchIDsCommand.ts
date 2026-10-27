import { ABotCommand } from "./ABotCommand";
import { ClientCheatsHelper } from "./ClientCheatsHelper";
export class CheatShowResearchIDsCommand extends ABotCommand {
  execute(argument0 = null) {
    ClientCheatsHelper.performCommand("showResearchIDs");
  }
}
