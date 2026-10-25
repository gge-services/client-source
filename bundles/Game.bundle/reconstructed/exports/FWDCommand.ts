import { BasicDialogHandler } from "../../../ggs.dll/reconstructed/exports/BasicDialogHandler";
import { CastleCommand } from "./CastleCommand";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleLoginEvent } from "./CastleLoginEvent";
import { CastleModel } from "./CastleModel";
import { CastleWelcomeDialog } from "./CastleWelcomeDialog";
import { CastleWelcomeDialogProperties } from "./CastleWelcomeDialogProperties";
import { ClientConstCastle } from "./ClientConstCastle";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { int } from "../../../ggs.dll/reconstructed/exports/int";
import { TeaserVO } from "./TeaserVO";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class FWDCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_SHOW_WELCOMEDATA;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(__s9param0, __s9param1) {
    switch (__s9param0) {
      case ERROR.ALL_OK:
        if (ClientConstCastle.WELCOME_FEATURE_ENABLED) {
          var __s9local0 = JSON.parse(__s9param1[1]).FLT;
          __s9local0.sortOn("FTS", Array.NUMERIC | Array.DESCENDING);
          var __s9local1 = [];
          if (__s9local0 != null) {
            for (var __s9local2 = 0, __s9local3 = __s9local0; __s9local2 < __s9local3.length; __s9local2++) {
              var __s9local4 = __s9local3[__s9local2];
              if (__s9local4 !== undefined) {
                var __s9local5 = new TeaserVO();
                __s9local5.fillFromParamObject(__s9local4);
                __s9local1.push(__s9local5);
              }
            }
          }
          var __s9local6 = int(__s9local1[0].id);
          var __s9local7 = int(CastleModel.settingsData.homeScreenID);
          if ((__s9local6 != __s9local7 && __s9local7 != -1 || CastleModel.settingsData.isHomeScreenVisible) && CastleModel.tutorialData.isTutorialFinished() && !this.env.isOnSpecialServer) {
            CastleDialogHandler.getInstance().registerDefaultDialogs(CastleWelcomeDialog, new CastleWelcomeDialogProperties(__s9local1), true, BasicDialogHandler.PRIORITY_TOP);
            CastleModel.settingsData.isHomeScreenVisible = true;
          }
          CastleModel.settingsData.homeScreenID = __s9local6;
          this.controller.dispatchEvent(new CastleLoginEvent(CastleLoginEvent.LOGIN_PROCESS_COMPLETE));
        }
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  }
}
classImplementsInterfaces(FWDCommand, "IExecCommand");
