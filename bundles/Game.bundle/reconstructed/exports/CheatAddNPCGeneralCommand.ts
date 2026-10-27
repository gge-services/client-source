import { ABotCommand } from "./ABotCommand";
import { ClientCheatsHelper } from "./ClientCheatsHelper";
export class CheatAddNPCGeneralCommand extends ABotCommand {
  execute(argument0 = null) {
    var __s5local0 = prompt("Which GeneralID should be added?", "115");
    if (prompt("Should the general be shown as preview (y/n)", "n") == "y") {
      ClientCheatsHelper.performCommand("addNPCGeneralPreview " + __s5local0);
    } else {
      ClientCheatsHelper.performCommand("addNPCGeneral " + __s5local0);
    }
  }
}
