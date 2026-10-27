import { ABotCommand } from "./ABotCommand";
import { ClientCheatsHelper } from "./ClientCheatsHelper";
export class CheatLifetimeSpentC2Command extends ABotCommand {
  execute(argument0 = null) {
    ClientCheatsHelper.performCommand("lifetimeSpent");
  }
}
