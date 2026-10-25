import { ABotCommand } from "./ABotCommand";
import { ClientCheatsHelper } from "./ClientCheatsHelper";
export class CheatLifetimeSpentC2Command extends ABotCommand {
  execute(__s5param0 = null) {
    ClientCheatsHelper.performCommand("lifetimeSpent");
  }
}
