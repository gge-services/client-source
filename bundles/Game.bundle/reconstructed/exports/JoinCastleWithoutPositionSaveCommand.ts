import { C2SJoinCastleVO } from "./C2SJoinCastleVO";
import { castAs } from "../../../ggs.dll/reconstructed/exports/castAs";
import { CastleModel } from "./CastleModel";
import { FlashBlockHelper } from "./FlashBlockHelper";
import { SimpleCommand } from "../../../ggs.dll/reconstructed/exports/SimpleCommand";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class JoinCastleWithoutPositionSaveCommand extends SimpleCommand {
  execute(__s5param0 = null) {
    var __s5local0 = castAs(__s5param0, "IWorldmapObjectVO");
    if (__s5local0) {
      if (!FlashBlockHelper.checkFlashBlock(__s5local0.spaceID)) {
        CastleModel.worldmapCameraData.savedMapPosition = null;
        if (CastleModel.worldmapData) {
          CastleModel.worldmapData.allowGAARequests = false;
        }
        CastleModel.smartfoxClient.sendCommandVO(new C2SJoinCastleVO(__s5local0.objectId, __s5local0.kingdomID));
      }
    }
  }
}
classImplementsInterfaces(JoinCastleWithoutPositionSaveCommand, "ISimpleCommand");
