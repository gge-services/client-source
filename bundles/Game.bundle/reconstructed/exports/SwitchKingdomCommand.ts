import { CastleModel } from "./CastleModel";
import { ClientConstCastle } from "./ClientConstCastle";
import { FactionConst } from "../../../ggs.dll/reconstructed/exports/FactionConst";
import { int } from "../../../ggs.dll/reconstructed/exports/int";
import { SimpleCommand } from "../../../ggs.dll/reconstructed/exports/SimpleCommand";
export class SwitchKingdomCommand extends SimpleCommand {
  execute(__s5param0 = null) {
    var __s5local0 = int(int(__s5param0));
    if (__s5local0 == -1 || !CastleModel.kingdomData.kingdomVOs.has(__s5local0)) {
      __s5local0 = 0;
    }
    if (CastleModel.kingdomData.activeKingdomID != __s5local0) {
      if (__s5local0 == FactionConst.KINGDOM_ID) {
        ClientConstCastle.setWorldmapSize(FactionConst.MAP_WIDTH_IN_SECTORS, FactionConst.MAP_HEIGHT_IN_SECTORS);
      } else {
        ClientConstCastle.setWorldmapSize(ClientConstCastle.GGC_X, ClientConstCastle.GGC_Y);
      }
      CastleModel.kingdomData.activeKingdomID = __s5local0;
      CastleModel.privateOfferData.onKingdomSwitched();
    }
  }
}
