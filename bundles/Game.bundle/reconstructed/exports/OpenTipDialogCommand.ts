import { CastleBarrackUnitTipDialog } from "./CastleBarrackUnitTipDialog";
import { CastleBuildListTipDialog } from "./CastleBuildListTipDialog";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleEfficiencyTipDialog } from "./CastleEfficiencyTipDialog";
import { CastleInstantBuildTipDialog } from "./CastleInstantBuildTipDialog";
import { CastleModel } from "./CastleModel";
import { CastleOverseerTipDialog } from "./CastleOverseerTipDialog";
import { CastleProductivityTipDialog } from "./CastleProductivityTipDialog";
import { CastleRepairTipDialog } from "./CastleRepairTipDialog";
import { ClientConstCastle } from "./ClientConstCastle";
import { SimpleCommand } from "../../../ggs.dll/reconstructed/exports/SimpleCommand";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class OpenTipDialogCommand extends SimpleCommand {
  static repairShown: any;
  constructor() {
    CONSTRUCTOR_HACK;
    super();
  }
  execute(argument0 = null) {
    if (CastleModel.areaData.activeArea.isMyArea && !CastleModel.areaData.activeArea.isUnderConquerProcess) {
      switch (argument0[0]) {
        case ClientConstCastle.TIP_EFFICIENCY:
          CastleDialogHandler.getInstance().registerDefaultDialogs(CastleEfficiencyTipDialog);
          break;
        case ClientConstCastle.TIP_BARRACKUNIT:
          CastleDialogHandler.getInstance().registerDefaultDialogs(CastleBarrackUnitTipDialog);
          break;
        case ClientConstCastle.TIP_BUILDLIST:
          CastleDialogHandler.getInstance().registerDefaultDialogs(CastleBuildListTipDialog);
          break;
        case ClientConstCastle.TIP_INSTANTBUILD:
          CastleDialogHandler.getInstance().registerDefaultDialogs(CastleInstantBuildTipDialog);
          break;
        case ClientConstCastle.TIP_OVERSEER:
          CastleDialogHandler.getInstance().registerDefaultDialogs(CastleOverseerTipDialog);
          break;
        case ClientConstCastle.TIP_PRODUCTIVITY:
          CastleDialogHandler.getInstance().registerDefaultDialogs(CastleProductivityTipDialog);
          break;
        case ClientConstCastle.TIP_REPAIR:
          if (argument0.length == 2 && argument0[1]) {
            CastleDialogHandler.getInstance().registerDefaultDialogs(CastleRepairTipDialog);
          } else if (argument0.length == 2 && !argument0[1]) {
            if (OpenTipDialogCommand.repairShown < 1) {
              OpenTipDialogCommand.repairShown++;
              CastleDialogHandler.getInstance().registerDefaultDialogs(CastleRepairTipDialog);
            }
          }
      }
    }
  }
  static __initialize_static_members() {
    OpenTipDialogCommand.repairShown = 0;
  }
}
classImplementsInterfaces(OpenTipDialogCommand, "ISimpleCommand");
OpenTipDialogCommand.__initialize_static_members();
