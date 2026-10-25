import { ABotCommand } from "./ABotCommand";
import { CastleModel } from "./CastleModel";
import { ClientCheatsHelper } from "./ClientCheatsHelper";
export class CheatUnitInfoCommand extends ABotCommand {
  execute(__s5param0 = null) {
    var __s5local0 = prompt("Which Unit WodID should be shown?", CheatUnitInfoCommand.wodID);
    if (parseInt(__s5local0) > 0 && CastleModel.wodData.getUnitVOByWodId(parseInt(__s5local0))) {
      CheatUnitInfoCommand.wodID = __s5local0;
      ClientCheatsHelper.performCommand("unitInfo " + CheatUnitInfoCommand.wodID);
    }
  }
  static wodID = "714";
}
