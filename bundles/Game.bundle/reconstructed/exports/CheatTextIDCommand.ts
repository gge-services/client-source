import { ABotCommand } from "./ABotCommand";
import { ClientCheatsHelper } from "./ClientCheatsHelper";
export class CheatTextIDCommand extends ABotCommand {
  execute(argument0 = null) {
    var __s5local0 = prompt("Which TextID should be tested?", "errorCode_1");
    var __s5local1 = prompt("Which Texreplacements should be used? (separate with , )", "0,0");
    ClientCheatsHelper.performCommand("textID " + __s5local0 + " " + __s5local1);
  }
}
