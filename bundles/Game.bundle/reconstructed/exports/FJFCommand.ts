import { BasicDialogHandler } from "../../../ggs.dll/reconstructed/exports/BasicDialogHandler";
import { CastleCommand } from "./CastleCommand";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleFactionChooseFactionBlueDialog } from "./CastleFactionChooseFactionBlueDialog";
import { CastleFactionChooseFactionRedDialog } from "./CastleFactionChooseFactionRedDialog";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { CommandController } from "../../../ggs.dll/reconstructed/exports/CommandController";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { FactionConst } from "../../../ggs.dll/reconstructed/exports/FactionConst";
import { IngameClientCommands } from "./IngameClientCommands";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class FJFCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_JOIN_FACTION;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleModel.kingdomData.willBecomeFaction = FactionConst.KINGDOM_ID;
        CastleModel.kingdomData.parse_KPI(parsedResponse.kpi);
        CastleModel.specialEventData.parse_SEI(parsedResponse.sei);
        if (parsedResponse.mir) {
          CastleModel.userData.parse_MIR(parsedResponse.mir);
        }
        var __s9local1 = CastleModel.userData.castleList.getMainCastleByKingdomID(FactionConst.KINGDOM_ID);
        CastleModel.worldmapCameraData.currentSelectedCastleInActionPanel = __s9local1;
        var __s9local2;
        var __s9local3 = [__s9local1.kingdomID, __s9local1.absAreaPosX, __s9local1.absAreaPosY];
        CommandController.instance.executeCommand(IngameClientCommands.SWITCH_KINGDOM_GOTO_WORLDMAP_AND_CENTER_POS_COMMAND, __s9local3);
        if (parsedResponse.mir) {
          CastleModel.userData.parse_MIR_openDialog(parsedResponse.mir);
        }
        __s9local2 = parsedResponse.FID == FactionConst.BLUE_FACTION ? CastleFactionChooseFactionBlueDialog : CastleFactionChooseFactionRedDialog;
        CastleDialogHandler.getInstance().registerDefaultDialogs(__s9local2, null, false, BasicDialogHandler.PRIORITY_TOP);
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
classImplementsInterfaces(FJFCommand, "IExecCommand");
