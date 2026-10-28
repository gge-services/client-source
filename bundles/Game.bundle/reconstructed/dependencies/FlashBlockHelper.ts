import { BasicStandardOkDialogProperties } from "../../../ggs.dll/reconstructed/exports/BasicStandardOkDialogProperties";
import { CastleDarkOkLabeledDialog } from "./CastleDarkOkLabeledDialog";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleModel } from "./CastleModel";
import { EnvGlobalsHandler } from "../../../ggs.dll/reconstructed/exports/EnvGlobalsHandler";
import { ExternalInterface } from "../../../ggs.dll/reconstructed/exports/ExternalInterface";
import { FactionConst } from "../../../ggs.dll/reconstructed/exports/FactionConst";
import { Localize } from "../../../ggs.dll/reconstructed/exports/Localize";
import { TreasureMapsConst } from "../../../ggs.dll/reconstructed/exports/TreasureMapsConst";
import { WorldDessert } from "../../../ggs.dll/reconstructed/exports/WorldDessert";
import { WorldIce } from "../../../ggs.dll/reconstructed/exports/WorldIce";
import { WorldIsland } from "../../../ggs.dll/reconstructed/exports/WorldIsland";
import { WorldVolcano } from "../../../ggs.dll/reconstructed/exports/WorldVolcano";
export class FlashBlockHelper {
  static isAccessBlocked(argument0) {
    return (!EnvGlobalsHandler.globals.isTest || !FlashBlockHelper.ALLOW_ON_TEST) && FlashBlockHelper.BLOCK_ACCESS && (FlashBlockHelper.BLOCKED_KINGDOM_IDS.indexOf(argument0) > -1 || TreasureMapsConst.CRUSADE_MAP_IDS.indexOf(argument0) > -1);
  }
  static checkFlashBlock(argument0) {
    return !!FlashBlockHelper.isAccessBlocked(argument0) && (CastleDialogHandler.getInstance().registerDefaultDialogs(CastleDarkOkLabeledDialog, new BasicStandardOkDialogProperties("dialog_clientVersion_switch_confirmDialog_header", FlashBlockHelper.getBlockerText(argument0), FlashBlockHelper.onConfirmSwitch, "dialog_clientVersion_confirmSwitch", FlashBlockHelper.onClose)), true);
  }
  static getBlockerText(argument0) {
    var __s9local0;
    switch (argument0) {
      case FactionConst.KINGDOM_ID:
        __s9local0 = [Localize.text("event_title_3")];
        break;
      case WorldIsland.KINGDOM_ID:
        __s9local0 = [Localize.text("event_title_102")];
        break;
      case TreasureMapsConst.MAP_ID_SEAQUEEN_EASY:
      case TreasureMapsConst.MAP_ID_SEAQUEEN_HARD:
      case TreasureMapsConst.MAP_ID_SEAQUEEN_EXTRA_HARD:
        __s9local0 = [Localize.text("event_title_4")];
        break;
      case TreasureMapsConst.MAP_ID_THORNKING_EASY:
      case TreasureMapsConst.MAP_ID_THORNKING_HARD:
        __s9local0 = [Localize.text("event_title_2")];
        break;
      case TreasureMapsConst.MAP_ID_UNDERWORLD_EASY:
      case TreasureMapsConst.MAP_ID_UNDERWORLD_HARD:
        __s9local0 = [Localize.text("event_title_64")];
        break;
      case WorldIce.KINGDOM_ID:
      case WorldDessert.KINGDOM_ID:
      case WorldVolcano.KINGDOM_ID:
        __s9local0 = [CastleModel.kingdomData.getKingdomVOByID(argument0).kingdomNameString];
    }
    return Localize.text("dialog_clientVersion_switch_confirmDialog_genericFeature_mandatory_HTML5_copy", __s9local0);
  }
  static onConfirmSwitch(argument0 = null) {
    ExternalInterface.call("ggsChangeGameClient");
  }
  static onClose(argument0 = null) {}
  static BLOCK_ACCESS = false;
  static ALLOW_ON_TEST = true;
  static BLOCKED_KINGDOM_IDS = [FactionConst.KINGDOM_ID, WorldIsland.KINGDOM_ID, WorldIce.KINGDOM_ID, WorldDessert.KINGDOM_ID, WorldVolcano.KINGDOM_ID];
}
