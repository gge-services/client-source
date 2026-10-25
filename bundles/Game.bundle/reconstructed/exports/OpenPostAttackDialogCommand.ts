import { AllianceBattleGroundPlayerCollectorEventBoosterSelectDialog } from "./AllianceBattleGroundPlayerCollectorEventBoosterSelectDialog";
import { AllianceBattleGroundTowerCollectorEventBoosterSelectDialog } from "./AllianceBattleGroundTowerCollectorEventBoosterSelectDialog";
import { C2SCreateDaimyoDefenseMovementVO } from "./C2SCreateDaimyoDefenseMovementVO";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleLayoutManager } from "./CastleLayoutManager";
import { CastleModel } from "./CastleModel";
import { CastlePostAttackDialog } from "./CastlePostAttackDialog";
import { CastlePostAttackDialogProperties } from "./CastlePostAttackDialogProperties";
import { CastlePostAttackHorseDialog } from "./CastlePostAttackHorseDialog";
import { CastlePostAttackTreasureDialog } from "./CastlePostAttackTreasureDialog";
import { CastlePostSendGoodsDialog } from "./CastlePostSendGoodsDialog";
import { CastlePostSendGoodsDialogProperties } from "./CastlePostSendGoodsDialogProperties";
import { CastlePostSendGoodsHorseDialog } from "./CastlePostSendGoodsHorseDialog";
import { CastlePostSpyDialog } from "./CastlePostSpyDialog";
import { CastlePostSpyDialogProperties } from "./CastlePostSpyDialogProperties";
import { CastlePostSpyHorseDialog } from "./CastlePostSpyHorseDialog";
import { ClientConstCastle } from "./ClientConstCastle";
import { CollectorEventBoosterSelectDialog } from "./CollectorEventBoosterSelectDialog";
import { CollectorTempServerEventBoosterSelectDialog } from "./CollectorTempServerEventBoosterSelectDialog";
import { instanceOfClass } from "../../../ggs.dll/reconstructed/exports/instanceOfClass";
import { int } from "../../../ggs.dll/reconstructed/exports/int";
import { PostAttackSelectBoosterDialogProperties } from "./PostAttackSelectBoosterDialogProperties";
import { SamuraiDaimyoBoosterSelectDialog } from "./SamuraiDaimyoBoosterSelectDialog";
import { SimpleCommand } from "../../../ggs.dll/reconstructed/exports/SimpleCommand";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class OpenPostAttackDialogCommand extends SimpleCommand {
  execute(__s5param0 = null) {
    var __s5local0 = int(int(__s5param0[0]));
    var __s5local1 = __s5param0[1];
    var __s5local2 = __s5param0[2];
    var __s5local3 = __s5param0[3];
    if (!__s5local2) {
      throw new Error("Missing parameter in OpenPostAttackDialogCommand");
    }
    switch (__s5local0) {
      case ClientConstCastle.ACTION_TYPE_TREASUREATTACK:
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastlePostAttackTreasureDialog, new CastlePostAttackDialogProperties(__s5local1, __s5local2, __s5local3));
        break;
      case ClientConstCastle.SPYTYPE_SABOTAGE:
        if (CastleModel.userData.userLevel < ClientConstCastle.MIN_USERLEVEL_HORSE_VISIBLE_IN_POSTATTACK) {
          CastleDialogHandler.getInstance().registerDefaultDialogs(CastlePostSpyDialog, new CastlePostSpyDialogProperties(__s5local2, __s5local1));
        } else {
          CastleDialogHandler.getInstance().registerDefaultDialogs(CastlePostSpyHorseDialog, new CastlePostSpyDialogProperties(__s5local2, __s5local1));
        }
        break;
      case ClientConstCastle.ACTION_TYPE_SENDGOODS:
        if (CastleModel.userData.userLevel < ClientConstCastle.MIN_USERLEVEL_HORSE_VISIBLE_IN_POSTATTACK) {
          CastleDialogHandler.getInstance().registerDefaultDialogs(CastlePostSendGoodsDialog, new CastlePostSendGoodsDialogProperties(__s5local2, __s5local1));
        } else {
          CastleDialogHandler.getInstance().registerDefaultDialogs(CastlePostSendGoodsHorseDialog, new CastlePostSendGoodsDialogProperties(__s5local2, __s5local1));
        }
        break;
      case ClientConstCastle.ACTION_TYPE_SUPPORTDEFENSE_TOWNSHIP:
        var __s5local4 = __s5local2;
        CastleModel.smartfoxClient.sendCommandVO(new C2SCreateDaimyoDefenseMovementVO(__s5local4.sourceArea.objectId, __s5local4.targetArea.absAreaPosX, __s5local4.targetArea.absAreaPosY, __s5local4.getArmy()));
        __s5local1();
        break;
      default:
        if (CastleModel.userData.userLevel < ClientConstCastle.MIN_USERLEVEL_HORSE_VISIBLE_IN_POSTATTACK && __s5local0 != ClientConstCastle.ACTION_TYPE_SUPPORTDEFENSE) {
          CastleDialogHandler.getInstance().registerDefaultDialogs(CastlePostAttackDialog, new CastlePostAttackDialogProperties(__s5local1, __s5local2, __s5local3));
        } else {
          var __s5local5 = __s5local2;
          if (instanceOfClass(__s5local5.targetArea, "DaimyoCastleMapObjectVO") && __s5local5.openSelectBoosterDialog) {
            CastleDialogHandler.getInstance().registerDefaultDialogs(SamuraiDaimyoBoosterSelectDialog, new PostAttackSelectBoosterDialogProperties(__s5local0, __s5local1, __s5local2, __s5local3));
          } else if (__s5local5.isTempServerCollectorAttack && __s5local5.openSelectBoosterDialog) {
            CastleDialogHandler.getInstance().registerDefaultDialogs(CollectorTempServerEventBoosterSelectDialog, new PostAttackSelectBoosterDialogProperties(__s5local0, __s5local1, __s5local2, __s5local3));
          } else if (__s5local5.isAllianceBattleGroundPlayerPointsAttack && __s5local5.openSelectBoosterDialog) {
            CastleDialogHandler.getInstance().registerDefaultDialogs(AllianceBattleGroundPlayerCollectorEventBoosterSelectDialog, new PostAttackSelectBoosterDialogProperties(__s5local0, __s5local1, __s5local2, __s5local3));
          } else if (__s5local5.isAllianceBattleGroundTowerAttack && __s5local5.openSelectBoosterDialog) {
            CastleDialogHandler.getInstance().registerDefaultDialogs(AllianceBattleGroundTowerCollectorEventBoosterSelectDialog, new PostAttackSelectBoosterDialogProperties(__s5local0, __s5local1, __s5local2, __s5local3));
          } else if (__s5local5.isCollectorAttack && __s5local5.openSelectBoosterDialog) {
            CastleDialogHandler.getInstance().registerDefaultDialogs(CollectorEventBoosterSelectDialog, new PostAttackSelectBoosterDialogProperties(__s5local0, __s5local1, __s5local2, __s5local3));
          } else {
            CastleDialogHandler.getInstance().registerDefaultDialogs(CastlePostAttackHorseDialog, new CastlePostAttackDialogProperties(__s5local1, __s5local2, __s5local3));
          }
        }
    }
  }
  get layoutManager() {
    return CastleLayoutManager.getInstance();
  }
}
classImplementsInterfaces(OpenPostAttackDialogCommand, "ISimpleCommand");
