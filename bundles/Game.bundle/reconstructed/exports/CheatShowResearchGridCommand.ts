import { ABotCommand } from "./ABotCommand";
import { ClientCheatsHelper } from "./ClientCheatsHelper";
export class CheatShowResearchGridCommand extends ABotCommand {
  execute(argument0 = null) {
    ClientCheatsHelper.performCommand("showResearchGrid");
  }
}
