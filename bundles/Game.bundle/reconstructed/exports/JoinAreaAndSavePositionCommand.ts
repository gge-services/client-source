import { C2SJoinAreaVO } from "./C2SJoinAreaVO";
import { C2SJoinCastleVO } from "./C2SJoinCastleVO";
import { CastleLayoutManager } from "./CastleLayoutManager";
import { CastleModel } from "./CastleModel";
import { FlashBlockHelper } from "./FlashBlockHelper";
import { instanceOfClass } from "../../../ggs.dll/reconstructed/exports/instanceOfClass";
import { SimpleCommand } from "../../../ggs.dll/reconstructed/exports/SimpleCommand";
import { TooltipManagerFacade } from "./TooltipManagerFacade";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class JoinAreaAndSavePositionCommand extends SimpleCommand {
  execute(argument0 = null) {
    var __s5local0 = argument0 || argument0.worldmapObjectVO;
    if (!FlashBlockHelper.checkFlashBlock(__s5local0.spaceID)) {
      var __s5local1;
      TooltipManagerFacade.hideAllTooltips();
      var __s5local2;
      var __s5local3 = 0;
      if (CastleLayoutManager.getInstance().worldmapScreen) {
        __s5local2 = CastleLayoutManager.getInstance().worldmapScreen.renderer;
      }
      if (__s5local2) {
        __s5local1 = __s5local2.camera.viewPortCenter;
        __s5local3 = __s5local2.camera.viewPortZoom;
        CastleModel.worldmapCameraData.saveCameraPosition(__s5local1, __s5local3);
      } else {
        __s5local1 = __s5local0.absAreaPos;
        CastleModel.worldmapCameraData.saveCameraPosition(__s5local1);
      }
      if (CastleModel.worldmapData) {
        CastleModel.worldmapData.allowGAARequests = false;
      }
      if (instanceOfClass(__s5local0, "CastleMapobjectVO")) {
        CastleModel.smartfoxClient.sendCommandVO(new C2SJoinCastleVO(__s5local0.objectId, __s5local0.kingdomID));
      } else {
        CastleModel.smartfoxClient.sendCommandVO(new C2SJoinAreaVO(__s5local0.absAreaPosX, __s5local0.absAreaPosY, __s5local0.kingdomID));
      }
    }
  }
}
classImplementsInterfaces(JoinAreaAndSavePositionCommand, "ISimpleCommand");
