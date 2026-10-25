import { BasicCheckMaintenanceCommand } from "../../../ggs.dll/reconstructed/exports/BasicCheckMaintenanceCommand";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleLayoutManager } from "./CastleLayoutManager";
import { CastleModel } from "./CastleModel";
import { CastleNewsHubOverlay } from "./CastleNewsHubOverlay";
import { CastleNoConnectionDialog } from "./CastleNoConnectionDialog";
import { CastleWorldSelectionDialog } from "./CastleWorldSelectionDialog";
import { ClientFunnelGameStates } from "../../../ggs.dll/reconstructed/exports/ClientFunnelGameStates";
import { ClientFunnelTrackingController } from "../../../ggs.dll/reconstructed/exports/ClientFunnelTrackingController";
import { EnvGlobalsHandler } from "../../../ggs.dll/reconstructed/exports/EnvGlobalsHandler";
import { getLogger } from "../../../ggs.dll/reconstructed/exports/getLogger";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
const __s0local0 = getLogger("Connection.CastleCheckMaintenanceCommand");
export class CastleCheckMaintenanceCommand extends BasicCheckMaintenanceCommand {
  constructor() {
    CONSTRUCTOR_HACK;
    super();
  }
  executeDefaultBehavior() {
    var __s5local0 = this.env.urlVariables;
    if (__s5local0 && __s5local0.urlParams && __s5local0.urlParams.get("maintenance") === "off") {
      __s0local0.debug("maintenance=off url parameter set: skipping maintenance check");
      this.executeNoMaintenance();
      return;
    }
    super.executeDefaultBehavior();
  }
  executeNWMaintenance() {
    __s0local0.debug("Server under maintenance: show Maintanance screen");
    this.showMaintenanceScreen();
  }
  executeSocialMaintenance() {
    __s0local0.debug("Social/Network platform Maintenance: Server under maintenance: show Maintanance screen");
    this.executeNWMaintenance();
  }
  clearMaintenance() {
    CastleNewsHubOverlay.closeMaintenance();
    CastleLayoutManager.getInstance().hideDialog(CastleNoConnectionDialog);
    super.clearMaintenance();
  }
  showMaintenanceScreen() {
    ClientFunnelTrackingController.getInstance().trackState(ClientFunnelGameStates.MAINTENANCE_SCREEN);
    var __s14local0 = this.env.urlVariables;
    var __s14local1 = __s14local0 && __s14local0.urlParams && __s14local0.urlParams.get("maintenance") === "on";
    if (this.env.isTest && !__s14local1) {
      CastleDialogHandler.getInstance().registerDialogs(CastleWorldSelectionDialog);
    } else {
      CastleNewsHubOverlay.openMaintenance();
    }
  }
  executeNoMaintenance() {
    try {
      super.executeNoMaintenance();
      var __s18local0 = EnvGlobalsHandler.globals;
      var __s18local1 = CastleModel.smartfoxClient.isConnected;
      __s0local0.debug("server isConnected: " + __s18local1 + " - game should useAutologin:" + __s18local0.useAutoLogin + " and login isKeyBased: " + __s18local0.loginIsKeyBased);
      if (!!__s18local0.loginIsKeyBased || !__s18local0.useAutoLogin) {
        __s0local0.debug("server is NOT under maintenance --> show LoginScreen");
      }
      if (__s18local0.useAutoLogin) {
        __s0local0.debug("server is connected and NOT under maintenance.  -->  proceed to autologin");
      }
    } catch (__s23local0) {
      __s0local0.error(__s23local0);
      window.bugsnagClient.notify(__s23local0);
    }
  }
}
classImplementsInterfaces(CastleCheckMaintenanceCommand, "ISimpleCommand");
