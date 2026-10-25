import { BasicController } from "../../../ggs.dll/reconstructed/exports/BasicController";
import { BasicDialogHandler } from "../../../ggs.dll/reconstructed/exports/BasicDialogHandler";
import { BasicLayoutManager } from "../../../ggs.dll/reconstructed/exports/BasicLayoutManager";
import { BasicModel } from "../../../ggs.dll/reconstructed/exports/BasicModel";
import { BasicStandardOkDialogProperties } from "../../../ggs.dll/reconstructed/exports/BasicStandardOkDialogProperties";
import { C2SGetTemporaryServerLoginTokenVO } from "./C2SGetTemporaryServerLoginTokenVO";
import { C2STemporaryServerLoginVO } from "./C2STemporaryServerLoginVO";
import { CastleBasicController } from "./CastleBasicController";
import { CastleDarkOkLabeledDialog } from "./CastleDarkOkLabeledDialog";
import { CastleDataHolder } from "./CastleDataHolder";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleLayoutManager } from "./CastleLayoutManager";
import { CastleModel } from "./CastleModel";
import { CastleServerMessageArrivedEvent } from "./CastleServerMessageArrivedEvent";
import { ClientFunnelTrackingController } from "../../../ggs.dll/reconstructed/exports/ClientFunnelTrackingController";
import { CommandController } from "../../../ggs.dll/reconstructed/exports/CommandController";
import { cxfResetCommandCache } from "./cxfResetCommandCache";
import { EnvGlobalsHandler } from "../../../ggs.dll/reconstructed/exports/EnvGlobalsHandler";
import { ExternalInterface } from "../../../ggs.dll/reconstructed/exports/ExternalInterface";
import { FlashBlockHelper } from "./FlashBlockHelper";
import { info } from "../../../ggs.dll/reconstructed/exports/info";
import { SimpleCommand } from "../../../ggs.dll/reconstructed/exports/SimpleCommand";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class CastleConnectToSpecialServerCommand extends SimpleCommand {
  constructor(...args) {
    super(...args);
    this.BLOCK_ACCESS = false;
  }
  execute(__s5param0 = null) {
    CastleModel.userData.resetApiToken();
    if (__s5param0 == "login") {
      this.doLogin();
    } else {
      this.connectToSpecialServer();
    }
  }
  connectToSpecialServer() {
    if (!FlashBlockHelper.BLOCK_ACCESS || this.env.isTest) {
      CastleModel.smartfoxClient.sendCommandVO(new C2SGetTemporaryServerLoginTokenVO(this.externalServerID));
      this.controller.addEventListener(CastleServerMessageArrivedEvent.SPECIAL_SEVER_INFO_ARRIVED, this.bindFunction(this.onTempServerInfoArrived));
    } else {
      CastleDialogHandler.getInstance().registerDefaultDialogs(CastleDarkOkLabeledDialog, new BasicStandardOkDialogProperties("dialog_clientVersion_switch_confirmDialog_header", this.blockerTextID, this.bindFunction(this.onConfirmSwitch), "dialog_clientVersion_confirmSwitch", this.bindFunction(this.onClose)));
    }
  }
  onClose(__s13param0 = null) {
    CastleLayoutManager.getInstance().hideAllDialogs();
  }
  get blockerTextID() {
    return "";
  }
  onConfirmSwitch(__s17param0 = null) {
    ClientFunnelTrackingController.getInstance().trackState("SWITCH_TO_FLASH");
    ExternalInterface.call("ggsChangeGameClient");
  }
  onTempServerInfoArrived(__s19param0) {
    this.controller.removeEventListener(CastleServerMessageArrivedEvent.SPECIAL_SEVER_INFO_ARRIVED, this.bindFunction(this.onTempServerInfoArrived));
    this.loginToken = CastleModel.userData.specialServerLoginToken;
    this.env.isSpecialServerConnectStarted = true;
    this.doLogout();
    this.changeInstance();
  }
  doLogout() {
    EnvGlobalsHandler.globals.isFirstVisitOfGGS = false;
    BasicController.getInstance().onLogOut();
    BasicModel.sessionData.resetLoggedinTimer();
    BasicModel.smartfoxClient.logout();
    BasicLayoutManager.getInstance().revertFullscreen();
    cxfResetCommandCache();
    CastleDataHolder.instance.gbdParsed = false;
    CastleModel.userData.joinCastleCount = 0;
    CastleModel.userData.persistentLogin = false;
  }
  doLogin() {
    var __s23local0 = new C2STemporaryServerLoginVO(CastleModel.userData.specialServerLoginToken);
    BasicDialogHandler.getInstance().blockDialogs = true;
    CastleModel.smartfoxClient.sendCommandVO(__s23local0);
  }
  changeInstance() {
    CastleModel.userData.resetConnectToFlags();
    this.setConnectFlag();
    CastleModel.userData.specialServerLoginToken = this.loginToken;
    this.env.originalInstanceVOBeforeSpecialServer = BasicModel.instanceProxy.selectedInstanceVO;
    var __s25local0 = this.env.specialServer;
    var __s25local1 = window.ggs.worldAssignment;
    if (__s25local0.instanceId != __s25local1.facade.selectedNetworkInstance.instanceId) {
      __s25local1.selectInstance(__s25local0);
    }
    info("Connect to instance: " + __s25local0);
    CommandController.instance.executeCommand(BasicController.COMMAND_CHECK_MAINTENANCE, BasicController.COMMAND_CONNECT_CLIENT);
  }
  get externalServerID() {
    return 0;
  }
  setConnectFlag() {}
  get env() {
    return EnvGlobalsHandler.globals;
  }
  get controller() {
    return CastleBasicController.getInstance();
  }
}
classImplementsInterfaces(CastleConnectToSpecialServerCommand, "ISimpleCommand");
