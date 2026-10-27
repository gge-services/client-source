import { ABotCommand } from "./ABotCommand";
import { CastleNewsHubOverlay } from "./CastleNewsHubOverlay";
export class CheatMaintenanceDialogCommand extends ABotCommand {
  execute(argument0 = null) {
    CastleNewsHubOverlay.openMaintenance();
  }
}
