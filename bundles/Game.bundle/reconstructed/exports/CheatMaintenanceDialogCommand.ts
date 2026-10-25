import { ABotCommand } from "./ABotCommand";
import { CastleNewsHubOverlay } from "./CastleNewsHubOverlay";
export class CheatMaintenanceDialogCommand extends ABotCommand {
  execute(__s5param0 = null) {
    CastleNewsHubOverlay.openMaintenance();
  }
}
