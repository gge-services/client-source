import { BasicController } from "../../../ggs.dll/reconstructed/exports/BasicController";
import { BasicDialogHandler } from "../../../ggs.dll/reconstructed/exports/BasicDialogHandler";
import { BasicLayoutManager } from "../../../ggs.dll/reconstructed/exports/BasicLayoutManager";
import { BasicModel } from "../../../ggs.dll/reconstructed/exports/BasicModel";
import { BasicStandardOkDialogProperties } from "../../../ggs.dll/reconstructed/exports/BasicStandardOkDialogProperties";
import { C2SLoginVO } from "./C2SLoginVO";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleFacebookModule } from "./CastleFacebookModule";
import { CastleModel } from "./CastleModel";
import { CastleStandardOkDialog } from "./CastleStandardOkDialog";
import { ClientConstReCaptcha } from "./ClientConstReCaptcha";
import { ClientConstSF } from "./ClientConstSF";
import { EnvGlobalsHandler } from "../../../ggs.dll/reconstructed/exports/EnvGlobalsHandler";
import { facebookAuthResponse } from "./facebookAuthResponse";
import { getLogger } from "../../../ggs.dll/reconstructed/exports/getLogger";
import { GGSCountryController } from "../../../ggs.dll/reconstructed/exports/GGSCountryController";
import { Localize } from "../../../ggs.dll/reconstructed/exports/Localize";
import { SimpleCommand } from "../../../ggs.dll/reconstructed/exports/SimpleCommand";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
function __s0local2() {
  var __s8local0 = EnvGlobalsHandler.globals;
  return __s8local0.pln !== "" && __s8local0.sig !== "" && (CastleModel.smartfoxClient.sendMessage(ClientConstSF.C2S_LOGIN_SOCIAL, [__s8local0.pln, __s8local0.sig, CastleModel.smartfoxClient.connectionTime, CastleModel.smartfoxClient.roundTripTime, __s8local0.referrer, __s8local0.networkId, __s8local0.accountId, __s8local0.suk, Math.round(new Date().getTimezoneOffset() * -1 / 60) + 13]), true);
}
function __s0local3(__s10param0) {
  return __s10param0 !== null && !!__s0local7(__s10param0) && (CastleModel.localData.saveFacebookID(__s10param0.userID), __s0local6(__s10param0), true);
}
function __s0local4() {
  var __s12local0 = CastleModel.localData.getFacebookID();
  return !!__s12local0 && (CastleFacebookModule.hasAuthResponse ? CastleFacebookModule.userID != __s12local0 ? (__s0local0.warn("Facebook UserID we found in Cookies does not match with user currently logged in Facebook"), CastleModel.localData.deleteLoginData(), BasicLayoutManager.getInstance().state = BasicLayoutManager.STATE_STARTSCREEN) : __s0local6(facebookAuthResponse()) : (__s0local0.debug("found fb cookie " + __s12local0 + " but user is not logged in,  show login panel"), CastleModel.localData.deleteLoginData(), BasicLayoutManager.getInstance().state = BasicLayoutManager.STATE_STARTSCREEN), true);
}
function __s0local5() {
  var __s14local0 = EnvGlobalsHandler.globals;
  var __s14local1 = new C2SLoginVO(CastleModel.userData.userName, CastleModel.userData.loginPwd, CastleModel.userData.loginToken, GGSCountryController.instance.currentCountry.ggsLanguageCode, __s14local0.distributorId, CastleModel.smartfoxClient.connectionTime, CastleModel.smartfoxClient.roundTripTime, __s14local0.accountId, __s14local0.referrer, __s14local0.identityManagementId, CastleModel.userData.persistentLogin);
  __s0local8(__s14local1);
  return true;
}
function __s0local8(__s20param0, __s20param1 = 20) {
  try {
    window.grecaptcha.ready(function () {
      var __s23local0 = ClientConstReCaptcha.getSiteKey();
      window.grecaptcha.execute(__s23local0, {
        action: "login"
      }).then(function (__s25param0) {
        __s20param0.RCT = __s25param0;
        BasicDialogHandler.getInstance().blockDialogs = true;
        BasicController.getInstance().sendCommandVOAndWait(__s20param0);
      }).catch(function (__s27param0) {
        if (__s20param1 > 0) {
          window.setTimeout(function () {
            __s0local8(__s20param0, __s20param1 - 1);
          }, 250);
        } else {
          CastleDialogHandler.getInstance().registerDialogs(CastleStandardOkDialog, new BasicStandardOkDialogProperties(Localize.text("generic_alert_watchout"), Localize.text("errorCode_1")));
        }
      });
    });
  } catch (__s33local0) {
    if (__s20param1 > 0) {
      window.setTimeout(function () {
        __s0local8(__s20param0, __s20param1 - 1);
      }, 250);
    } else {
      CastleDialogHandler.getInstance().registerDialogs(CastleStandardOkDialog, new BasicStandardOkDialogProperties(Localize.text("generic_alert_watchout"), Localize.text("errorCode_1")));
    }
  }
}
const __s0local0 = getLogger("Connection.CastleLoginCommand");
function __s0local6(__s16param0) {
  var __s16local0 = EnvGlobalsHandler.globals;
  var __s16local1 = new C2SLoginVO(null, null, null, GGSCountryController.instance.currentCountry.ggsLanguageCode, __s16local0.distributorId, CastleModel.smartfoxClient.connectionTime, CastleModel.smartfoxClient.roundTripTime, __s16local0.accountId, __s16local0.referrer, __s16local0.identityManagementId, CastleModel.userData.persistentLogin);
  __s16local1.FID = __s16param0 ? __s16param0.userID : CastleFacebookModule.userID;
  __s16local1.FTK = __s16param0 ? __s16param0.accessToken : CastleFacebookModule.accessToken;
  __s16local1.FAID = CastleFacebookModule.appID;
  __s0local8(__s16local1);
}
function __s0local7(__s18param0) {
  return __s18param0.userID !== undefined && __s18param0.accessToken !== undefined && __s18param0.expiresIn !== undefined && __s18param0.signedRequest !== undefined;
}
export class CastleLoginCommand extends SimpleCommand {
  execute(argument0 = null) {
    BasicController.getInstance().onLogIn();
    BasicModel.sessionData.loggedIn = true;
    if (!__s0local2() && !__s0local3(argument0) && !__s0local4()) {
      __s0local5();
    }
  }
}
classImplementsInterfaces(CastleLoginCommand, "ISimpleCommand");
