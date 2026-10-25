import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleModel } from "./CastleModel";
import { EventConst } from "../../../ggs.dll/reconstructed/exports/EventConst";
import { LongTermPointEventHighScoreDialog } from "./LongTermPointEventHighScoreDialog";
import { LongTermPointEventHighScoreDialogProperties } from "./LongTermPointEventHighScoreDialogProperties";
import { OpenDialogWithAdditionalExternalAssetsCommand } from "./OpenDialogWithAdditionalExternalAssetsCommand";
export class OpenLongTermPointEventHighScoreDialogCommand extends OpenDialogWithAdditionalExternalAssetsCommand {
  addAssets(__s5param0) {
    var __s5local0 = CastleModel.specialEventData.getActiveEventByEventId(EventConst.EVENTTYPE_LONGTERM_POINT_EVENT);
    this.loadSeasonAssets(__s5local0.skin);
  }
  openDialog() {
    CastleDialogHandler.getInstance().registerDefaultDialogs(LongTermPointEventHighScoreDialog, new LongTermPointEventHighScoreDialogProperties());
  }
  loadSeasonAssets(__s9param0) {
    var __s9local0 = "LongTermPeHighScoreDialog" + __s9param0.assetName + "Skin";
    this.loadAsset(__s9local0, __s9local0);
  }
}
