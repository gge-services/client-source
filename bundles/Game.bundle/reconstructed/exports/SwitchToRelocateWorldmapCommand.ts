import { CastleLayoutManager } from "./CastleLayoutManager";
import { CastleModel } from "./CastleModel";
import { CastleWorldmapData } from "./CastleWorldmapData";
import { CommandController } from "../../../ggs.dll/reconstructed/exports/CommandController";
import { IngameClientCommands } from "./IngameClientCommands";
import { SimpleCommand } from "../../../ggs.dll/reconstructed/exports/SimpleCommand";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class SwitchToRelocateWorldmapCommand extends SimpleCommand {
  execute(__s5param0 = null) {
    var __s5local0 = CastleModel.userData.castleList.getHomeCastle();
    var __s5local1 = !!__s5param0 && !!__s5param0.friendsPlace;
    if (__s5local1) {
      __s5local0 = __s5param0.friendsPlace;
    }
    if (__s5local0) {
      if (this.layoutManager.currentState == CastleLayoutManager.STATE_WORLDMAP && CastleModel.kingdomData.activeKingdomID == 0) {
        var __s5local2 = this.worldmap.camera.viewPortCenter;
        var __s5local3 = this.worldmap.camera.viewPortZoom;
        CastleModel.worldmapCameraData.saveCameraPosition(__s5local2, __s5local3);
        this.layoutManager.state = CastleLayoutManager.STATE_WORLDMAP_RELOCATION;
        if (__s5local1) {
          this.layoutManager.worldmapScreen.camera.centerArea(__s5local0.absAreaPos);
        }
      } else {
        CommandController.instance.executeCommand(IngameClientCommands.SWITCH_KINGDOM_COMMAND, 0);
        (() => {
          const sourceObject = CastleModel;
          const sourceKey = "worldmapData";
          const previousValue = sourceObject[sourceKey];
          return !previousValue ? sourceObject[sourceKey] = CastleModel.addModel(new CastleWorldmapData()) : previousValue;
        })();
        CastleModel.worldmapData.areaTiles.resetUpdateTimes();
        this.layoutManager.state = CastleLayoutManager.STATE_WORLDMAP_RELOCATION;
        this.layoutManager.worldmapScreen.camera.centerArea(__s5local0.absAreaPos);
      }
    }
  }
  get layoutManager() {
    return CastleLayoutManager.getInstance();
  }
  get worldmap() {
    return CastleLayoutManager.getInstance().worldmapScreen.renderer;
  }
}
classImplementsInterfaces(SwitchToRelocateWorldmapCommand, "ISimpleCommand");
