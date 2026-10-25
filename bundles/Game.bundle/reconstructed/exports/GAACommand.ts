import { CastleCommand } from "./CastleCommand";
import { CastleLayoutManager } from "./CastleLayoutManager";
import { CastleModel } from "./CastleModel";
import { CastleServerMessageArrivedEvent } from "./CastleServerMessageArrivedEvent";
import { ClientConstSF } from "./ClientConstSF";
import { CommandController } from "../../../ggs.dll/reconstructed/exports/CommandController";
import { debug } from "../../../ggs.dll/reconstructed/exports/debug";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { EventConst } from "../../../ggs.dll/reconstructed/exports/EventConst";
import { FactionConst } from "../../../ggs.dll/reconstructed/exports/FactionConst";
import { IngameClientCommands } from "./IngameClientCommands";
import { int } from "../../../ggs.dll/reconstructed/exports/int";
export class GAACommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_GET_AREAS;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(__s9param0, __s9param1) {
    var __s9local0 = [];
    switch (__s9param0) {
      case ERROR.ALL_OK:
        try {
          var __s9local1 = JSON.parse(__s9param1[1]);
        } catch (__s13local0) {
          debug("Invalid Json String appears");
          debug(__s13local0.toString());
          return false;
        }
        CastleModel.userData.parse_UAP(__s9local1.uap);
        CastleModel.otherPlayerData.parseOwnerInfoArray(__s9local1.OI);
        var __s9local2 = 0;
        __s9local2 = __s9local1.KID ? int(__s9local1.KID) : int(CastleModel.kingdomData.activeKingdomID);
        if (CastleModel.kingdomData.activeKingdomID != __s9local2) {
          break;
        }
        if (CastleModel.worldmapData) {
          var __s9local3 = CastleModel.worldmapData.getExpiredRelocationObject();
          if (__s9local3) {
            CastleLayoutManager.getInstance().worldmapScreen.renderer.clearMapobjects(true);
            CastleModel.worldmapData.relocationObjects.splice(CastleModel.worldmapData.relocationObjects.indexOf(__s9local3), 1);
          }
          if (__s9local2 == FactionConst.KINGDOM_ID && !CastleModel.specialEventData.getActiveEventByEventId(EventConst.EVENTTYPE_FACTION)) {
            CommandController.instance.executeCommand(IngameClientCommands.JOIN_MAIN_CASTLE_COMMAND);
            return;
          }
          __s9local0 = CastleModel.worldmapData.parseAreaInfos(__s9local1.AI);
          if (__s9local2 != FactionConst.KINGDOM_ID) {
            CastleModel.worldmapData.areaTiles.setReadyForRendering(__s9local0);
          }
        }
        if (this.layoutManager.worldmapScreen && this.layoutManager.worldmapScreen.renderer) {
          this.layoutManager.worldmapScreen.renderer.invalidateMap();
          this.layoutManager.worldmapScreen.renderer.invalideteMovements();
          this.layoutManager.updateGameStage();
          this.layoutManager.renderStaticStage();
        }
        break;
      case ERROR.TARGETAREA_DOES_NOT_EXSIST:
    }
    this.controller.dispatchEvent(new CastleServerMessageArrivedEvent(CastleServerMessageArrivedEvent.GAA_ARRIVED, [__s9local0]));
    return false;
  }
}
