import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleTreasureCompleteDialog } from "./CastleTreasureCompleteDialog";
import { CastleTreasureFoundTreasureDialog } from "./CastleTreasureFoundTreasureDialog";
import { CastleTreasureFoundTreasureDialogProperties } from "./CastleTreasureFoundTreasureDialogProperties";
import { CollectableEnum } from "./CollectableEnum";
import { SimpleCommand } from "../../../ggs.dll/reconstructed/exports/SimpleCommand";
import { TreasureMapsConst } from "../../../ggs.dll/reconstructed/exports/TreasureMapsConst";
export class OpenTreasureHuntInfoDialogCommand extends SimpleCommand {
  execute(__s5param0 = null) {
    var __s5local0 = __s5param0;
    switch (__s5local0.progressType) {
      case TreasureMapsConst.PROGRESS_FOUND_MAP_PIECE:
        if (__s5local0.hasAllPieces) {
          CastleDialogHandler.getInstance().registerDefaultDialogs(CastleTreasureCompleteDialog);
        }
        break;
      case TreasureMapsConst.PROGRESS_DESTROYED_END_NODE:
        if (__s5local0.rewardList && __s5local0.rewardList.containsType(CollectableEnum.BUILDING)) {
          CastleDialogHandler.getInstance().registerDefaultDialogs(CastleTreasureFoundTreasureDialog, new CastleTreasureFoundTreasureDialogProperties(__s5local0.rewardList));
        }
    }
  }
}
