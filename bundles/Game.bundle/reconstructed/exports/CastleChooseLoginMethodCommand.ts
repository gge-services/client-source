import { BasicController } from "../../../ggs.dll/reconstructed/exports/BasicController";
import { BasicLayoutManager } from "../../../ggs.dll/reconstructed/exports/BasicLayoutManager";
import { BasicModel } from "../../../ggs.dll/reconstructed/exports/BasicModel";
import { CastleBasicController } from "./CastleBasicController";
import { CastleCheatData } from "./CastleCheatData";
import { CastleModel } from "./CastleModel";
import { CommandController } from "../../../ggs.dll/reconstructed/exports/CommandController";
import { EnvGlobalsHandler } from "../../../ggs.dll/reconstructed/exports/EnvGlobalsHandler";
import { info } from "../../../ggs.dll/reconstructed/exports/info";
import { int } from "../../../ggs.dll/reconstructed/exports/int";
import { SimpleCommand } from "../../../ggs.dll/reconstructed/exports/SimpleCommand";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class CastleChooseLoginMethodCommand extends SimpleCommand {
  execute(argument0 = null) {
    var __s5local0 = BasicModel.smartfoxClient.userForcedDisconnect;
    var __s5local1 = CastleCheatData.cheatLoginName != null && CastleCheatData.cheatLoginName != "";
    var __s5local2 = CastleModel.userData.connectToSpecialServer;
    if (__s5local1 || !__s5local0 || CastleModel.localData.getIsRedirectedWithFacebook() || __s5local2) {
      var __s5local3;
      var __s5local4;
      var __s5local5 = false;
      if (this.isAutoLoginInSocialNetworkPossible()) {
        __s5local3 = "*** Castle **** With social login account.";
        __s5local5 = true;
        CastleModel.userData.persistentLogin = true;
      } else if (this.isLoginPossibleWithFacebookCookie()) {
        __s5local3 = "*** Castle **** With  facebook account stored in SharedObject.";
        CastleModel.localData.saveIsRedirectedWithFacebook(false);
        __s5local5 = true;
      } else if (this.isLoginPossibleWithCookieAccount() && !__s5local2) {
        __s5local3 = "*** Castle **** With account stored in SharedObject.";
        CastleModel.localData.saveIsRedirectedWithFacebook(false);
        CastleModel.localData.saveFacebookID("");
        __s5local5 = true;
        CastleModel.userData.persistentLogin = true;
      }
      if (!this.isAgeGateValid()) {
        __s5local4 = __s5local5 ? "*** Castle ****  Auto login would have been possible, but age gate validation is not complete." : "*** Castle ****  AgeGate validation is not complete. No login possible.";
        info(__s5local4);
        BasicModel.ageGateData.autoLoginTryFailed = __s5local5;
        __s5local5 = false;
      }
      if (__s5local1) {
        CastleModel.userData.userName = CastleCheatData.cheatLoginName;
        CastleModel.userData.loginPwd = "-+";
        CastleModel.userData.loginToken = null;
        __s5local5 = true;
      }
      if (__s5local5 && !__s5local2) {
        info("*** Castle **** Do autologin: " + __s5local3);
        this.login();
        return;
      }
      if (__s5local2) {
        this.login();
        return;
      }
    }
    info("*** Castle **** No auto login possible, show startscreen.");
    this.handleAutoLoginImpossible();
  }
  isAgeGateValid() {
    return !BasicModel.ageGateData.isAgeGateActive || !!BasicModel.ageGateData.validationSucceeded;
  }
  handleAutoLoginImpossible() {
    BasicLayoutManager.getInstance().state = BasicLayoutManager.STATE_STARTSCREEN;
  }
  isAutoLoginInSocialNetworkPossible() {
    var __s19local0 = BasicModel.socialData.displayNameExistingPlayer;
    if (__s19local0 && __s19local0 != "") {
      var __s19local1 = int(BasicModel.instanceProxy.instanceMap.length);
      var __s19local2 = int(BasicModel.instanceProxy.instanceMap[0].countries.length);
      return __s19local1 != 1 || !(__s19local2 > 1);
    }
    return false;
  }
  isLoginPossibleWithFacebookCookie() {
    var __s22local0 = CastleModel.localData.getFacebookID();
    return !!__s22local0 && __s22local0 != "";
  }
  isLoginPossibleWithCookieAccount() {
    var __s24local0 = CastleModel.localData.readLoginDataUsername();
    var __s24local1 = CastleModel.localData.readLoginDataLoginToken();
    return !!this.hasAccountSavedInCookie(__s24local0, __s24local1) && (CastleModel.userData.userName = __s24local0, CastleModel.userData.loginToken = __s24local1, true);
  }
  hasAccountSavedInCookie(argument0, argument1) {
    return !!argument0 && argument0 != "" && !!argument1 && argument1 != "";
  }
  login() {
    var __s28local0;
    if (CastleModel.userData.connectToSpecialServer && CastleModel.userData.specialServerLoginToken) {
      if (CastleModel.userData.connectToTempServer) {
        CommandController.instance.executeCommand(CastleBasicController.CONNECT_TO_TEMPORARY_SERVER, "login");
      }
      if (CastleModel.userData.connectToABGServer) {
        CommandController.instance.executeCommand(CastleBasicController.CONNECT_TO_ALLIANCE_BATTLE_GROUND_SERVER, "login");
      }
      return;
    }
    __s28local0 = EnvGlobalsHandler.globals.isSSO && !EnvGlobalsHandler.globals.useLegacySocialRegistration ? BasicController.COMMAND_SOCIAL_LOGIN : BasicController.COMMAND_LOGIN;
    CommandController.instance.executeCommand(__s28local0);
  }
}
classImplementsInterfaces(CastleChooseLoginMethodCommand, "ISimpleCommand");
