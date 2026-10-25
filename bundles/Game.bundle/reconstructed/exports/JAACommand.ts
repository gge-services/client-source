import { AreaDataEvent } from "./AreaDataEvent";
import { AreaFactory } from "./AreaFactory";
import { BasicController } from "../../../ggs.dll/reconstructed/exports/BasicController";
import { BasicProfilingTrackingCommandVO } from "../../../ggs.dll/reconstructed/exports/BasicProfilingTrackingCommandVO";
import { C2SGetDetailedCastleListVO } from "./C2SGetDetailedCastleListVO";
import { CastleCommand } from "./CastleCommand";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleLayoutManager } from "./CastleLayoutManager";
import { CastleModel } from "./CastleModel";
import { CastleServerMessageArrivedEvent } from "./CastleServerMessageArrivedEvent";
import { ClientConstCastle } from "./ClientConstCastle";
import { ClientConstSF } from "./ClientConstSF";
import { ClientConstTime } from "./ClientConstTime";
import { ClientFunnelGameStates } from "../../../ggs.dll/reconstructed/exports/ClientFunnelGameStates";
import { ClientFunnelTrackingController } from "../../../ggs.dll/reconstructed/exports/ClientFunnelTrackingController";
import { CommandController } from "../../../ggs.dll/reconstructed/exports/CommandController";
import { EnvGlobalsHandler } from "../../../ggs.dll/reconstructed/exports/EnvGlobalsHandler";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { GZPTrackingController } from "./GZPTrackingController";
import { IngameClientCommands } from "./IngameClientCommands";
import { Iso } from "./Iso";
import { IsoConst } from "./IsoConst";
import { renderScheduler } from "./renderScheduler";
import { SessionTypes } from "../../../ggs.dll/reconstructed/exports/SessionTypes";
export class JAACommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_JOIN_AREA;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        CommandController.instance.executeCommand(IngameClientCommands.SWITCH_KINGDOM_COMMAND, parsedResponse.KID);
        var __s9local1 = AreaFactory.createAreaFromServer(parsedResponse.T, parsedResponse.gca);
        if (!__s9local1) {
          return false;
        }
        CastleModel.resourcePoolData.reset();
        Iso.renderer.destroy();
        CastleModel.areaData.addArea(__s9local1);
        __s9local1.updater.parseJAA(parsedResponse);
        this.layoutManager.state = CastleLayoutManager.STATE_ISO;
        IsoConst.MOVEMENTS_ACTIVATED = false;
        if (parsedResponse.gsm) {
          CastleModel.mineData.parse_GSM(parsedResponse.gsm);
        }
        CastleModel.militaryData.parse_SPL(parsedResponse.spl0);
        CastleModel.militaryData.parse_SPL(parsedResponse.spl1);
        CastleModel.militaryData.parse_SPL(parsedResponse.spl2);
        CastleModel.militaryData.parse_SPL(parsedResponse.spl3);
        CastleModel.militaryData.parse_GUI(parsedResponse.gui);
        CastleModel.userData.parse_UAP(parsedResponse.uap);
        if (parsedResponse.gca && parsedResponse.gca.O) {
          CastleModel.titleData.parseO(parsedResponse.gca.O);
        }
        if (parsedResponse.hin) {
          CastleModel.hunterData.parse_HIN(parsedResponse.hin);
        }
        if (parsedResponse.sin) {
          CastleModel.decoStorage.parseSIN(parsedResponse.sin);
        }
        if (CastleModel.userData.joinCastleCount == 0) {
          this.checkTipText();
          if (EnvGlobalsHandler.globals.accountCookie.sessionType == SessionTypes.FIRST_SESSION) {
            var __s9local2 = new BasicProfilingTrackingCommandVO();
            CommandController.instance.executeCommand(BasicController.COMMAND_TRACK_PROFILING, __s9local2);
          }
          ClientFunnelTrackingController.getInstance().trackState(ClientFunnelGameStates.GAME_PLAYABLE);
          GZPTrackingController.getInstance().startTracking();
          this.sentPingTracking();
        }
        CastleModel.userData.joinCastleCount++;
        if (parsedResponse.rci) {
          CastleModel.resourceCartsData.parse_RCI(parsedResponse.rci);
        }
        if (Iso.controller && Iso.controller.dataUpdater) {
          var __s9local3 = Iso.controller.dataUpdater.movementUpdater;
          if (__s9local3) {
            renderScheduler.addTask(function () {
              IsoConst.MOVEMENTS_ACTIVATED = true;
              __s9local3.spawnMaxMovements(true);
            });
          }
        }
        if (parsedResponse.abpi) {
          CastleModel.breweryData.parse_ABPI(parsedResponse.abpi[0], true);
        }
        if (__s9local1.isFactionCamp) {
          CastleModel.smartfoxClient.sendCommandVO(new C2SGetDetailedCastleListVO());
        }
        if (parsedResponse.crai) {
          CastleModel.craftingData.parseAllQueueData(parsedResponse.crai);
        }
        if (CastleModel.userData.toShowDialogsAfterJAA.length > 0) {
          for (var __s9local4 = 0; __s9local4 < CastleModel.userData.toShowDialogsAfterJAA.length; __s9local4++) {
            CastleDialogHandler.getInstance().registerDialogs(CastleModel.userData.toShowDialogsAfterJAA[__s9local4]);
          }
          CastleModel.userData.toShowDialogsAfterJAA = [];
        }
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    this.controller.dispatchEvent(new CastleServerMessageArrivedEvent(CastleServerMessageArrivedEvent.JAA_ARRIVED));
    return false;
  }
  sentPingTracking() {
    var __s30local0 = Math.random() * ClientConstTime.MINUTES_2_MILLISEC;
    window.setTimeout(function () {
      ClientFunnelTrackingController.getInstance().trackState(ClientFunnelGameStates.PING);
    }, __s30local0);
  }
  checkTipText() {
    if (CastleModel.areaData.activeArea.areaInfo.isOwnMapobject && CastleModel.areaData.activeArea.commonInfo.isCastleBurning) {
      CommandController.instance.executeCommand(IngameClientCommands.OPEN_TIP_DIALOG_COMMAND, [ClientConstCastle.TIP_REPAIR, false]);
      this.controller.dispatchEvent(new AreaDataEvent(AreaDataEvent.ON_BURNING_CASTLE_UPDATED));
    }
  }
}
