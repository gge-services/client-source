import { ABasicBuildingVO } from "./ABasicBuildingVO";
import { castAs } from "../../../ggs.dll/reconstructed/exports/castAs";
import { CastleBasicController } from "./CastleBasicController";
import { CastleDecoShopPanel } from "./CastleDecoShopPanel";
import { CastleLayoutManager } from "./CastleLayoutManager";
import { CastleModel } from "./CastleModel";
import { CastleServerMessageArrivedEvent } from "./CastleServerMessageArrivedEvent";
import { CastleWodData } from "./CastleWodData";
import { CommandController } from "../../../ggs.dll/reconstructed/exports/CommandController";
import { IngameClientCommands } from "./IngameClientCommands";
import { Iso } from "./Iso";
import { SimpleCommand } from "../../../ggs.dll/reconstructed/exports/SimpleCommand";
import { WorldClassic } from "../../../ggs.dll/reconstructed/exports/WorldClassic";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class GotoMainCastleUniqueBuildingCommand extends SimpleCommand {
  execute(__s5param0 = null) {
    this.buildingType = __s5param0[0];
    var __s5local0 = CastleModel.userData.castleList.getMainCastleByKingdomID(WorldClassic.KINGDOM_ID);
    if (this.layoutManager.isInMyCastle && CastleModel.areaData.activeAreaInfo.equalsOtherWMO(__s5local0.objectId, __s5local0.kingdomID)) {
      this.showBuilding();
    } else {
      CommandController.instance.executeCommand(IngameClientCommands.JOIN_AREA_AND_SAVE_POSITION_COMMAND, __s5local0);
      GotoMainCastleUniqueBuildingCommand.controller.addEventListener(CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.oJAAArrived));
    }
  }
  oJAAArrived(__s9param0) {
    GotoMainCastleUniqueBuildingCommand.controller.removeEventListener(CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.oJAAArrived));
    this.showBuilding();
  }
  showBuilding() {
    var __s11local0 = castAs(Iso.renderer.objects.provider.getObjectByType(this.buildingType), "ABasicBuildingVE");
    if (__s11local0) {
      Iso.renderer.camera.scrollToGridPos(__s11local0.vo.pos);
      Iso.renderer.mouse.changeSelectedTarget(__s11local0);
    } else {
      Iso.controller.viewUpdater.switchBuildModeInOwnCastle(true);
      var __s11local1 = this.layoutManager.getPanel(CastleDecoShopPanel);
      var __s11local2 = CastleModel.wodData.voSubList(CastleWodData.TYPE_BUILDING);
      if (__s11local2 != null) {
        for (var __s11local3 = 0, __s11local4 = Array.from(__s11local2.values()); __s11local3 < __s11local4.length; __s11local3++) {
          var __s11local5 = __s11local4[__s11local3] as any;
          if (__s11local5 !== undefined && __s11local5 instanceof ABasicBuildingVO && __s11local5 instanceof this.buildingType.dataClass && __s11local5.level == 1) {
            __s11local1.centerAndHighlightBuildingInShop(__s11local5);
            break;
          }
        }
      }
    }
  }
  get layoutManager() {
    return CastleLayoutManager.getInstance();
  }
  static get controller() {
    return CastleBasicController.getInstance();
  }
}
classImplementsInterfaces(GotoMainCastleUniqueBuildingCommand, "ISimpleCommand");
