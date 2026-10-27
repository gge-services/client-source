import { BasicController } from "../../../ggs.dll/reconstructed/exports/BasicController";
import { BasicLayoutManager } from "../../../ggs.dll/reconstructed/exports/BasicLayoutManager";
import { BasicModel } from "../../../ggs.dll/reconstructed/exports/BasicModel";
import { BasicReconnectDialogProperties } from "../../../ggs.dll/reconstructed/exports/BasicReconnectDialogProperties";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleLayoutManager } from "./CastleLayoutManager";
import { CastleModel } from "./CastleModel";
import { CastleReconnectDialog } from "./CastleReconnectDialog";
import { CommandController } from "../../../ggs.dll/reconstructed/exports/CommandController";
import { CommonDialogNames } from "../../../ggs.dll/reconstructed/exports/CommonDialogNames";
import { EnvGlobalsHandler } from "../../../ggs.dll/reconstructed/exports/EnvGlobalsHandler";
import { GZPTrackingController } from "./GZPTrackingController";
import { Localize } from "../../../ggs.dll/reconstructed/exports/Localize";
import { SimpleCommand } from "../../../ggs.dll/reconstructed/exports/SimpleCommand";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class CastleConnectionLostCommand extends SimpleCommand {
  execute(argument0 = null) {
    if (this.layoutManager.currentState != BasicLayoutManager.STATE_STARTSCREEN) {
      var __s5local0 = EnvGlobalsHandler.globals;
      __s5local0.isFacebook;
      if (BasicModel.smartfoxClient.userForcedDisconnect) {
        if (__s5local0.underAgeConnectionLost && __s5local0.isIdentityManagementActive) {
          CastleModel.settingsData.isDestroyingGame = true;
          CommandController.instance.executeCommand(BasicController.COMMAND_DESTROY_GAME);
          CastleModel.settingsData.isDestroyingGame = false;
          this.layoutManager.state = BasicLayoutManager.STATE_CONNECT;
          CastleDialogHandler.getInstance().registerDialogs(CastleReconnectDialog, new BasicReconnectDialogProperties(BasicModel.languageData.getTextById("generic_alert_information"), BasicModel.languageData.getTextById("generic_alert_korea_logoutMessage"), this.bindFunction(this.onReconnect), BasicModel.languageData.getTextById("generic_btn_reconnect")));
        } else {
          CastleModel.settingsData.isDestroyingGame = true;
          CommandController.instance.executeCommand(BasicController.COMMAND_DESTROY_GAME);
          CastleModel.settingsData.isDestroyingGame = false;
          this.layoutManager.state = BasicLayoutManager.STATE_CONNECT;
          CastleDialogHandler.getInstance().registerDialogs(CastleReconnectDialog, new BasicReconnectDialogProperties(Localize.text("generic_alert_loggedout_title"), Localize.text("dialog_logout_copy"), this.bindFunction(this.onReconnect), Localize.text("generic_btn_reconnect")));
        }
      } else {
        CastleModel.settingsData.isDestroyingGame = true;
        CommandController.instance.executeCommand(BasicController.COMMAND_DESTROY_GAME);
        CastleModel.settingsData.isDestroyingGame = false;
        this.layoutManager.state = BasicLayoutManager.STATE_CONNECT;
        if (CastleModel.userData.connectToSpecialServer || EnvGlobalsHandler.globals.isOnSpecialServer) {
          this.onReconnect();
        } else {
          CastleDialogHandler.getInstance().registerDialogs(CommonDialogNames.ReconnectDialog_NAME, new BasicReconnectDialogProperties(BasicModel.languageData.getTextById("generic_alert_connection_lost_title"), BasicModel.languageData.getTextById("generic_alert_connection_lost_copy"), this.bindFunction(this.onReconnect), BasicModel.languageData.getTextById("generic_btn_reconnect")));
        }
      }
    }
  }
  onReconnect() {
    CommandController.instance.executeCommand(BasicController.COMMAND_CONNECT_TO_INSTANCEVO, BasicModel.instanceProxy.selectedInstanceVO);
    CommandController.instance.executeCommand(BasicController.COMMAND_INITALIZE_CONTROLLER);
    GZPTrackingController.getInstance().startTracking();
  }
  get layoutManager() {
    return CastleLayoutManager.getInstance();
  }
  get env() {
    return EnvGlobalsHandler.globals;
  }
}
classImplementsInterfaces(CastleConnectionLostCommand, "ISimpleCommand");
