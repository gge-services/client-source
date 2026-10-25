import { ArmyAttackMapmovementVO } from "./ArmyAttackMapmovementVO";
import { castAs } from "../../../ggs.dll/reconstructed/exports/castAs";
import { CastleArmyListDialog } from "./CastleArmyListDialog";
import { CastleArmyListDialogProperties } from "./CastleArmyListDialogProperties";
import { CastleArmyListWithLootDialog } from "./CastleArmyListWithLootDialog";
import { CastleArmyListWithLootDialogProperties } from "./CastleArmyListWithLootDialogProperties";
import { CastleCompactArmyDialog } from "./CastleCompactArmyDialog";
import { CastleCompactArmyDialogProperties } from "./CastleCompactArmyDialogProperties";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleMarketMovmentDialog } from "./CastleMarketMovmentDialog";
import { CastleMarketMovmentDialogProperties } from "./CastleMarketMovmentDialogProperties";
import { CastlePlaguemonkInfoDialog } from "./CastlePlaguemonkInfoDialog";
import { CastleShortArmyDialog } from "./CastleShortArmyDialog";
import { CastleShortArmyDialogProperties } from "./CastleShortArmyDialogProperties";
import { CastleSpyInfoDialog } from "./CastleSpyInfoDialog";
import { CastleSpyInfoDialogProperties } from "./CastleSpyInfoDialogProperties";
import { instanceOfClass } from "../../../ggs.dll/reconstructed/exports/instanceOfClass";
import { SimpleCommand } from "../../../ggs.dll/reconstructed/exports/SimpleCommand";
export class OpenMovementInfoDialogCommand extends SimpleCommand {
  execute(__s5param0 = null) {
    var __s5local0 = castAs(__s5param0, "IMapMovementVO");
    if (__s5local0) {
      if (instanceOfClass(__s5local0, "TreasureHuntMovementVO")) {
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleCompactArmyDialog, new CastleCompactArmyDialogProperties(__s5local0, true));
      } else if (instanceOfClass(__s5local0, "MarketMapmovementVO")) {
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleMarketMovmentDialog, new CastleMarketMovmentDialogProperties(__s5local0));
      } else if (instanceOfClass(__s5local0, "SupportDefenceMapmovementVO")) {
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleArmyListDialog, new CastleArmyListDialogProperties(__s5local0));
      } else if (instanceOfClass(__s5local0, "ArmyAttackMapmovementVO")) {
        switch (__s5local0.armyState) {
          case ArmyAttackMapmovementVO.ARMY_FULL:
            CastleDialogHandler.getInstance().registerDefaultDialogs(CastleCompactArmyDialog, new CastleCompactArmyDialogProperties(__s5local0));
            break;
          case ArmyAttackMapmovementVO.ARMY_SHORT:
            CastleDialogHandler.getInstance().registerDefaultDialogs(CastleShortArmyDialog, new CastleShortArmyDialogProperties(__s5local0));
        }
      } else if (instanceOfClass(__s5local0, "ArmyTravelMapMovementVO")) {
        if (__s5local0.lootList.length > 0) {
          CastleDialogHandler.getInstance().registerDefaultDialogs(CastleArmyListWithLootDialog, new CastleArmyListWithLootDialogProperties(__s5local0));
        } else {
          CastleDialogHandler.getInstance().registerDefaultDialogs(CastleArmyListDialog, new CastleArmyListDialogProperties(__s5local0));
        }
      } else if (instanceOfClass(__s5local0, "SpyMapmovementVO")) {
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleSpyInfoDialog, new CastleSpyInfoDialogProperties(__s5local0));
      } else if (instanceOfClass(__s5local0, "PlaguemonkMapmovementVO")) {
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastlePlaguemonkInfoDialog, new CastleSpyInfoDialogProperties(__s5local0));
      } else if (instanceOfClass(__s5local0, "SiegeMapmovementVO")) {
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleArmyListDialog, new CastleArmyListDialogProperties(__s5local0));
      }
    }
  }
}
