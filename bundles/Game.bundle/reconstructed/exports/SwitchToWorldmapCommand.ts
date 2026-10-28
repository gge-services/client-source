import { castAs } from "../../../ggs.dll/reconstructed/exports/castAs";
import { CastleLayoutManager } from "./CastleLayoutManager";
import { CastleModel } from "./CastleModel";
import { CastleWorldmapData } from "./CastleWorldmapData";
import { CommandController } from "../../../ggs.dll/reconstructed/exports/CommandController";
import { FlashBlockHelper } from "./FlashBlockHelper";
import { IngameClientCommands } from "./IngameClientCommands";
import { int } from "../../../ggs.dll/reconstructed/exports/int";
import { PlayerHelper } from "./PlayerHelper";
import { SimpleCommand } from "../../../ggs.dll/reconstructed/exports/SimpleCommand";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class SwitchToWorldmapCommand extends SimpleCommand {
  constructor() {
    const __initial0 = 0;
    CONSTRUCTOR_HACK;
    super();
    this._oldState = __initial0;
  }
  execute(argument0 = null) {
    var __s5local0 = castAs(argument0, "IWorldmapObjectVO");
    var __s5local1 = int(typeof argument0 == "number" ? argument0 : -1);
    this._oldState = int(this.layoutManager.currentState);
    if (this.isReloadWorldMapNecessary(__s5local1) || __s5local0) {
      if (__s5local0) {
        if (FlashBlockHelper.checkFlashBlock(__s5local0.spaceID)) {
          return;
        }
        if (__s5local0.kingdomID != CastleModel.kingdomData.activeKingdomID) {
          CommandController.instance.executeCommand(IngameClientCommands.SWITCH_KINGDOM_COMMAND, __s5local0.kingdomID);
        }
        (() => {
          const sourceObject = CastleModel;
          const sourceKey = "worldmapData";
          const previousValue = sourceObject[sourceKey];
          return !previousValue ? sourceObject[sourceKey] = CastleModel.addModel(new CastleWorldmapData()) : previousValue;
        })();
        CastleModel.worldmapData.areaTiles.resetUpdateTimes();
        this.layoutManager.state = CastleLayoutManager.STATE_WORLDMAP;
        this.layoutManager.worldmapScreen.camera.viewPortZoom = CastleModel.worldmapCameraData.savedMapZoom;
        this.layoutManager.worldmapScreen.camera.centerArea(__s5local0.absAreaPos);
        var __s5local2 = castAs(this.layoutManager.worldmapScreen.renderer.getVEforAreaXY(__s5local0.absAreaPos.x, __s5local0.absAreaPos.y, true), "InteractiveMapobject");
        if (__s5local2 && __s5local0.ownerInfo && PlayerHelper.isNPCPlayer(__s5local0.ownerInfo.playerID)) {
          __s5local2.showRingMenu();
        } else {
          this.layoutManager.worldmapScreen.delayOpenRingMenu(__s5local0);
        }
      } else {
        (() => {
          const sourceObject = CastleModel;
          const sourceKey = "worldmapData";
          const previousValue = sourceObject[sourceKey];
          return !previousValue ? sourceObject[sourceKey] = CastleModel.addModel(new CastleWorldmapData()) : previousValue;
        })();
        CastleModel.worldmapData.areaTiles.resetUpdateTimes();
        this.layoutManager.state = CastleLayoutManager.STATE_WORLDMAP;
        this.layoutManager.worldmapScreen.camera.viewPortZoom = CastleModel.worldmapCameraData.savedMapZoom;
        this.layoutManager.worldmapScreen.camera.centerArea(CastleModel.worldmapCameraData.getInitialWorldMapPos());
      }
      if (CastleModel.mineData) {
        CastleModel.mineData.destroy();
      }
    }
  }
  isReloadWorldMapNecessary(argument0) {
    return !this.playerWasOnTheWorldMap() || argument0 != -1;
  }
  playerWasOnTheWorldMap() {
    return this._oldState == CastleLayoutManager.STATE_WORLDMAP;
  }
  get layoutManager() {
    return CastleLayoutManager.getInstance();
  }
}
classImplementsInterfaces(SwitchToWorldmapCommand, "ISimpleCommand");
