import { C2SJoinCastleVO } from "./C2SJoinCastleVO";
import { CastleModel } from "./CastleModel";
import { int } from "../../../ggs.dll/reconstructed/exports/int";
import { SimpleCommand } from "../../../ggs.dll/reconstructed/exports/SimpleCommand";
export class JoinMyMainCastleCommand extends SimpleCommand {
  execute(__s5param0 = null) {
    var __s5local0 = int(CastleModel.userData.castleList.getHomeCastle().objectId);
    if (CastleModel.worldmapData) {
      CastleModel.worldmapData.allowGAARequests = false;
    }
    CastleModel.smartfoxClient.sendCommandVO(new C2SJoinCastleVO(__s5local0, 0));
  }
}
