import { BasicModel } from "../../../ggs.dll/reconstructed/exports/BasicModel";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleGoodgameExternalClip } from "./CastleGoodgameExternalClip";
import { CastleKingdomTeaserDialog } from "./CastleKingdomTeaserDialog";
import { CastleModel } from "./CastleModel";
import { int } from "../../../ggs.dll/reconstructed/exports/int";
import { SimpleCommand } from "../../../ggs.dll/reconstructed/exports/SimpleCommand";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class OpenKingdomTeaserCommand extends SimpleCommand {
  execute(argument0 = null) {
    var __s5local0;
    var __s5local1;
    var __s5local2 = argument0;
    if (__s5local2.kingdomVO) {
      __s5local2.titleTextID = "dialog_kingdomTeaser_header" + __s5local2.kingdomVO.kID;
      __s5local2.minLevel = int(__s5local2.kingdomVO.minLevel);
      __s5local0 = "KingdomTeaserBackground" + __s5local2.kingdomVO.kID;
    } else {
      __s5local2.titleTextID = "dialog_kingdomteaser_copy1";
      __s5local2.minLevel = int(CastleModel.kingdomData.minNonPremiumUnlockLevelForKingdoms);
      __s5local0 = "KingdomTeaserAllKingdomsBackground";
    }
    __s5local1 = BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s5local0);
    __s5local2.backgroundImage = new CastleGoodgameExternalClip(__s5local0, __s5local1, null, 0, false);
    CastleDialogHandler.getInstance().registerDefaultDialogs(CastleKingdomTeaserDialog, __s5local2);
  }
}
classImplementsInterfaces(OpenKingdomTeaserCommand, "ISimpleCommand");
