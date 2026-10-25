import { CastleLayoutManager } from "./CastleLayoutManager";
import { CastleModel } from "./CastleModel";
import { CommandController } from "../../../ggs.dll/reconstructed/exports/CommandController";
import { FlashBlockHelper } from "./FlashBlockHelper";
import { IngameClientCommands } from "./IngameClientCommands";
import { int } from "../../../ggs.dll/reconstructed/exports/int";
import { SimpleCommand } from "../../../ggs.dll/reconstructed/exports/SimpleCommand";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
const __s0local0 = createjs.Point;
export class SwitchKingdomGoToWorldmapAndCenterPosCommand extends SimpleCommand {
  execute(__s5param0 = null) {
    if (__s5param0) {
      var __s5local0 = int(__s5param0.shift());
      var __s5local1 = int(__s5param0.shift());
      var __s5local2 = int(__s5param0.shift());
      var __s5local3 = int(__s5param0.shift());
      if (!CastleModel.kingdomData.getKingdomVOByID(__s5local0).isPaid) {
        return;
      }
      if (FlashBlockHelper.checkFlashBlock(__s5local0)) {
        return;
      }
      if (__s5local0 != CastleModel.kingdomData.activeKingdomID) {
        CastleModel.questData.resetCurrentSearchEnemyCounter();
        CommandController.instance.executeCommand(IngameClientCommands.SWITCH_KINGDOM_COMMAND, __s5local0);
      }
      CastleModel.worldmapCameraData.savedMapPosition = null;
      CommandController.instance.executeCommand(IngameClientCommands.SWITCH_TO_WORLDMAP_COMMAND, __s5local3);
      this.layoutManager.worldmapScreen.camera.centerArea(new __s0local0(__s5local1, __s5local2));
    }
  }
  get layoutManager() {
    return CastleLayoutManager.getInstance();
  }
}
classImplementsInterfaces(SwitchKingdomGoToWorldmapAndCenterPosCommand, "ISimpleCommand");
