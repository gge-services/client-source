import { ABotCommand } from "./ABotCommand";
import { CastleModel } from "./CastleModel";
import { ClientCheatsHelper } from "./ClientCheatsHelper";
export class CheatBuildingInfoCommand extends ABotCommand {
  execute(__s5param0 = null) {
    var __s5local0 = prompt("Which WodID should be shown?", CheatBuildingInfoCommand.wodID);
    if (parseInt(__s5local0) > 0 && CastleModel.wodData.getBuildingVOById(parseInt(__s5local0))) {
      CheatBuildingInfoCommand.wodID = __s5local0;
      ClientCheatsHelper.performCommand("buildingInfo " + CheatBuildingInfoCommand.wodID);
    }
  }
  static wodID = "2871";
}
