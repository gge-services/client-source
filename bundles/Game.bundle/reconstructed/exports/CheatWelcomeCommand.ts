import { ABotCommand } from "./ABotCommand";
import { ClientCheatsHelper } from "./ClientCheatsHelper";
export class CheatWelcomeCommand extends ABotCommand {
  execute(argument0 = null) {
    var __s5local0 = prompt("Select rewardID  (RewardIDs: 1 to 9)", "1");
    ClientCheatsHelper.performCommand("welcome " + __s5local0);
  }
}
