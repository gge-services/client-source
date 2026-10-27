import { BasicDialogHandler } from "../../../ggs.dll/reconstructed/exports/BasicDialogHandler";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleSeasonEventWinDialog } from "./CastleSeasonEventWinDialog";
import { CastleSeasonEventWinDialogProperties } from "./CastleSeasonEventWinDialogProperties";
import { int } from "../../../ggs.dll/reconstructed/exports/int";
import { SimpleCommand } from "../../../ggs.dll/reconstructed/exports/SimpleCommand";
import { TreasureMapsConst } from "../../../ggs.dll/reconstructed/exports/TreasureMapsConst";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class OpenSeasonInfoDialogCommand extends SimpleCommand {
  execute(argument0 = null) {
    var __s5local0 = argument0[0];
    var __s5local1 = int(argument0[1]);
    var __s5local2 = argument0[2];
    switch (__s5local0.progressType) {
      case TreasureMapsConst.PROGRESS_FOUND_MAP_PIECE:
        break;
      case TreasureMapsConst.PROGRESS_DESTROYED_END_NODE:
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleSeasonEventWinDialog, new CastleSeasonEventWinDialogProperties(__s5local1, __s5local2), true, BasicDialogHandler.PRIORITY_LOW);
    }
  }
}
classImplementsInterfaces(OpenSeasonInfoDialogCommand, "ISimpleCommand");
