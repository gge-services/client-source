import { BasicContextMenuController } from "../../../ggs.dll/reconstructed/exports/BasicContextMenuController";
import { BasicController } from "../../../ggs.dll/reconstructed/exports/BasicController";
import { BasicLogoutCommand } from "../../../ggs.dll/reconstructed/exports/BasicLogoutCommand";
import { BasicModel } from "../../../ggs.dll/reconstructed/exports/BasicModel";
import { CastleBasicController } from "./CastleBasicController";
import { CastleDataHolder } from "./CastleDataHolder";
import { CastleDeleteAccountMicroservice } from "./CastleDeleteAccountMicroservice";
import { CastleEquipmentFavoritesMicroservice } from "./CastleEquipmentFavoritesMicroservice";
import { CastleFacebookModule } from "./CastleFacebookModule";
import { CastleLogoutEvent } from "./CastleLogoutEvent";
import { CastleModel } from "./CastleModel";
import { CastleWebShopAccountIDMicroservice } from "./CastleWebShopAccountIDMicroservice";
import { CommandController } from "../../../ggs.dll/reconstructed/exports/CommandController";
import { cxfResetCommandCache } from "./cxfResetCommandCache";
import { EnvGlobalsHandler } from "../../../ggs.dll/reconstructed/exports/EnvGlobalsHandler";
import { ExternalInterface } from "../../../ggs.dll/reconstructed/exports/ExternalInterface";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class CastleLogoutCommand extends BasicLogoutCommand {
  execute(__s5param0 = null) {
    CastleBasicController.getInstance().dispatchEvent(new CastleLogoutEvent(CastleLogoutEvent.LOGOUT_TRIGGERED));
    BasicLogoutCommand.DELETE_LOGIN_DATA_ON_LOGOUT = !EnvGlobalsHandler.globals.isOnSpecialServer;
    super.execute(__s5param0);
    cxfResetCommandCache();
    CastleDataHolder.instance.gbdParsed = false;
    CastleDataHolder.instance.requestUptOnWorldmapSwitch = false;
    CastleModel.userData.joinCastleCount = 0;
    CastleEquipmentFavoritesMicroservice.Instance.reset();
    CastleDeleteAccountMicroservice.Instance.reset();
    CastleWebShopAccountIDMicroservice.Instance.reset();
    CastleModel.userData.resetApiToken();
    CastleModel.userData.resetFacebookData();
    CastleFacebookModule.reset();
    BasicModel.networkCookie.facebookAccessToken = "";
    if (EnvGlobalsHandler.globals.isOnSpecialServer) {
      CastleModel.userData.specialServerLoginToken = null;
      CastleModel.userData.resetConnectToFlags();
      this.changeInstanceFromTempToHome();
      return;
    }
    if (ExternalInterface.available) {
      ExternalInterface.call("ggsOnLogout");
    }
    CastleModel.localData.deleteLoginData();
    BasicContextMenuController.instance.enableContextMenuItem(BasicContextMenuController.SUPPORT_LABEL);
  }
  changeInstanceFromTempToHome() {
    CastleModel.userData.resetConnectToFlags();
    CastleModel.userData.specialServerLoginToken = null;
    window.ggs.worldAssignment.selectInstance(EnvGlobalsHandler.globals.originalInstanceVOBeforeSpecialServer);
    CommandController.instance.executeCommand(BasicController.COMMAND_CHECK_MAINTENANCE, BasicController.COMMAND_CONNECT_CLIENT);
  }
}
classImplementsInterfaces(CastleLogoutCommand, "ISimpleCommand");
