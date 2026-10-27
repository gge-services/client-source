import { AttackDialog } from "./AttackDialog";
import { C2SGetDetailPlayerInfo } from "./C2SGetDetailPlayerInfo";
import { CastleAttackDialogProperties } from "./CastleAttackDialogProperties";
import { CastleCommand } from "./CastleCommand";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleModel } from "./CastleModel";
import { CastlePlayerInfoEvent } from "./CastlePlayerInfoEvent";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class AIICommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_ATTACK_INFO_ISLAND;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        this.controller.removeEventListener(CastlePlayerInfoEvent.GET_PLAYERINFO, this.bindFunction(this.onPlayerInfoGained));
        this.paramObj = JSON.parse(responseFields[1]);
        var __s9local0 = CastleModel.attackData.parse_AII(this.paramObj);
        if (__s9local0.targetArea && !__s9local0.targetArea.ownerInfo && __s9local0.targetArea.occupierPId > 0) {
          this.controller.addEventListener(CastlePlayerInfoEvent.GET_PLAYERINFO, this.bindFunction(this.onPlayerInfoGained));
          CastleModel.smartfoxClient.sendCommandVO(new C2SGetDetailPlayerInfo(__s9local0.targetArea.occupierPId));
          return true;
        }
        this.openDialog(__s9local0);
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
  onPlayerInfoGained() {
    this.controller.removeEventListener(CastlePlayerInfoEvent.GET_PLAYERINFO, this.bindFunction(this.onPlayerInfoGained));
    var __s13local0 = CastleModel.attackData.parse_AII(this.paramObj);
    this.openDialog(__s13local0);
  }
  openDialog(argument0) {
    CastleDialogHandler.getInstance().registerDefaultDialogs(AttackDialog, new CastleAttackDialogProperties(argument0));
  }
}
classImplementsInterfaces(AIICommand, "IExecCommand");
