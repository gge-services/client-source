import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleModel } from "./CastleModel";
import { CastleSeasonBaseRepairDialogProperties } from "./CastleSeasonBaseRepairDialogProperties";
import { CastleSeasonUpgradePortDialog } from "./CastleSeasonUpgradePortDialog";
import { SimpleCommand } from "../../../ggs.dll/reconstructed/exports/SimpleCommand";
export class OpenPortUpgradeDialogCommand extends SimpleCommand {
  execute(__s5param0 = null) {
    CastleDialogHandler.getInstance().registerDefaultDialogs(CastleSeasonUpgradePortDialog, new CastleSeasonBaseRepairDialogProperties(CastleModel.specialEventData.activeSeasonVO.treasureMapVO.getNextLockedPortNode(), "dialog_upgradeShip"));
  }
}
