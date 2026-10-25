import { BasicDialogHandler } from "../../../ggs.dll/reconstructed/exports/BasicDialogHandler";
import { castAs } from "../../../ggs.dll/reconstructed/exports/castAs";
import { CastleArtifactEventDialogProperties } from "./CastleArtifactEventDialogProperties";
import { CastleArtifactFoundPieceDialog } from "./CastleArtifactFoundPieceDialog";
import { CastleArtifactFoundTreasureDialog } from "./CastleArtifactFoundTreasureDialog";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { SimpleCommand } from "../../../ggs.dll/reconstructed/exports/SimpleCommand";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class OpenSpecialEventProgressCommand extends SimpleCommand {
  execute(__s5param0 = null) {
    var __s5local0 = castAs(__s5param0[0], "ArtifactEventVO");
    if (__s5local0) {
      if (__s5local0.hasAllParts) {
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleArtifactFoundTreasureDialog, new CastleArtifactEventDialogProperties(__s5local0), true, BasicDialogHandler.PRIORITY_LOW);
      } else {
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleArtifactFoundPieceDialog, new CastleArtifactEventDialogProperties(__s5local0), true, BasicDialogHandler.PRIORITY_LOW);
      }
    }
  }
}
classImplementsInterfaces(OpenSpecialEventProgressCommand, "ISimpleCommand");
