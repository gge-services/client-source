import { BasicDialogHandler } from "../../../ggs.dll/reconstructed/exports/BasicDialogHandler";
import { BasicStandardOkDialogProperties } from "../../../ggs.dll/reconstructed/exports/BasicStandardOkDialogProperties";
import { C2SJoinAreaVO } from "./C2SJoinAreaVO";
import { CastleCommand } from "./CastleCommand";
import { CastleDialogConsts } from "./CastleDialogConsts";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleModel } from "./CastleModel";
import { CastleNameCastleDialog } from "./CastleNameCastleDialog";
import { CastleNameCastleDialogProperties } from "./CastleNameCastleDialogProperties";
import { CastleRenameCastleDialog } from "./CastleRenameCastleDialog";
import { CastleRenameCastleDialogProperties } from "./CastleRenameCastleDialogProperties";
import { CastleServerMessageArrivedEvent } from "./CastleServerMessageArrivedEvent";
import { CastleStandardOkDialog } from "./CastleStandardOkDialog";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { Localize } from "../../../ggs.dll/reconstructed/exports/Localize";
import { TextVO } from "../../../ggs.dll/reconstructed/exports/TextVO";
import { WorldConst } from "../../../ggs.dll/reconstructed/exports/WorldConst";
export class ARCCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_RENAME_CASTLE;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(__s9param0, __s9param1) {
    var __s9local0;
    switch (__s9param0) {
      case ERROR.ALL_OK:
        __s9local0 = JSON.parse(__s9param1[1]);
        var __s9local1 = CastleModel.userData.castleList.getCastleVOByID(__s9local0.CID, __s9local0.KID);
        if (!__s9local0.P && __s9local1 && __s9local1.areaType == WorldConst.AREA_TYPE_KINGDOM_CASTLE) {
          CastleModel.smartfoxClient.sendCommandVO(new C2SJoinAreaVO(__s9local1.absAreaPosX, __s9local1.absAreaPosY, __s9local0.KID));
        }
        break;
      case ERROR.USAGE_OF_BADWORDS:
        var __s9local2 = "";
        if ((__s9local0 = JSON.parse(__s9param1[1])).BW && __s9local0.BW[0]) {
          __s9local2 = __s9local0.BW[0];
        }
        this.showNameOrRenameDialog(__s9param1);
        CastleDialogHandler.getInstance().registerDialogsWithType(CastleStandardOkDialog, new BasicStandardOkDialogProperties(Localize.text("generic_alert_watchout"), Localize.text("alert_badword_textReplacement", [new TextVO(__s9local2)])), false, BasicDialogHandler.PRIORITY_LOW, 0, CastleDialogConsts.DIALOG_TYPE_MODAL);
        break;
      case ERROR.TEXT_TOO_SHORT:
        this.showNameOrRenameDialog(__s9param1);
        CastleDialogHandler.getInstance().registerDialogsWithType(CastleStandardOkDialog, new BasicStandardOkDialogProperties(Localize.text("generic_alert_watchout"), Localize.text("alert_castlenameTooShort")), false, BasicDialogHandler.PRIORITY_LOW, 0, CastleDialogConsts.DIALOG_TYPE_MODAL);
        break;
      case ERROR.NOT_IN_OWNED_CASTLE:
      case ERROR.NO_FREE_RENAME:
        CastleDialogHandler.getInstance().registerDialogsWithType(CastleStandardOkDialog, new BasicStandardOkDialogProperties(Localize.text("generic_alert_information"), Localize.text("target_not_owned")), false, BasicDialogHandler.PRIORITY_LOW, 0, CastleDialogConsts.DIALOG_TYPE_MODAL);
        break;
      case ERROR.NO_EVENT:
        break;
      default:
        this.showNameOrRenameDialog(__s9param1);
        this.showErrorDialog(__s9param0, __s9param1);
    }
    this.controller.dispatchEvent(new CastleServerMessageArrivedEvent(CastleServerMessageArrivedEvent.ARC_ARRIVED, __s9param1));
    return false;
  }
  showNameOrRenameDialog(__s14param0) {
    if (__s14param0[1]) {
      var __s14local0 = JSON.parse(__s14param0[1]);
      var __s14local1 = CastleModel.userData.castleList.getCastleVOByID(__s14local0.CID, __s14local0.KID);
      if (!__s14local1) {
        if (__s14local1 = CastleModel.userData.kingstowerList.getVOByID(__s14local0.CID)) {
          CastleDialogHandler.getInstance().registerDefaultDialogs(CastleNameCastleDialog, new CastleNameCastleDialogProperties(__s14local1, __s14local0.KID, __s14local0.CID), false, BasicDialogHandler.PRIORITY_HIGH);
          return;
        }
        if (__s14local1 = CastleModel.userData.monumentList.getVOByID(__s14local0.CID)) {
          CastleDialogHandler.getInstance().registerDefaultDialogs(CastleNameCastleDialog, new CastleNameCastleDialogProperties(__s14local1, __s14local0.KID, __s14local0.CID), false, BasicDialogHandler.PRIORITY_HIGH);
          return;
        }
        if (__s14local1 = CastleModel.userData.laboratoryList.getVOByID(__s14local0.CID)) {
          CastleDialogHandler.getInstance().registerDefaultDialogs(CastleNameCastleDialog, new CastleNameCastleDialogProperties(__s14local1, __s14local0.KID, __s14local0.CID), false, BasicDialogHandler.PRIORITY_HIGH);
          return;
        }
        if (__s14local1 = CastleModel.userData.villageList.getVillageByID(__s14local0.CID, __s14local0.KID)) {
          CastleDialogHandler.getInstance().registerDefaultDialogs(CastleNameCastleDialog, new CastleNameCastleDialogProperties(__s14local1, __s14local0.KID, __s14local0.CID), false, BasicDialogHandler.PRIORITY_HIGH);
          return;
        }
      }
      if (__s14local0.P == 0) {
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleNameCastleDialog, new CastleNameCastleDialogProperties(CastleModel.userData.castleList.getCastleVOByID(__s14local0.CID, __s14local0.KID), __s14local0.KID, __s14local0.CID), false, BasicDialogHandler.PRIORITY_HIGH);
      } else {
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleRenameCastleDialog, new CastleRenameCastleDialogProperties(__s14local0.N, CastleModel.userData.castleList.getCastleVOByID(__s14local0.CID, CastleModel.kingdomData.activeKingdomID)), false);
      }
    }
  }
}
