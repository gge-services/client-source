import { BasicRegisterUserCommand } from "../../../ggs.dll/reconstructed/exports/BasicRegisterUserCommand";
import { BasicRequiredRegistrationFieldsVO } from "../../../ggs.dll/reconstructed/exports/BasicRequiredRegistrationFieldsVO";
import { BasicStandardOkDialogProperties } from "../../../ggs.dll/reconstructed/exports/BasicStandardOkDialogProperties";
import { C2SRegisterWithNameVO } from "./C2SRegisterWithNameVO";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleEnvironmentGlobals } from "./CastleEnvironmentGlobals";
import { CastleModel } from "./CastleModel";
import { CastleStandardOkDialog } from "./CastleStandardOkDialog";
import { ClientConstReCaptcha } from "./ClientConstReCaptcha";
import { EnvGlobalsHandler } from "../../../ggs.dll/reconstructed/exports/EnvGlobalsHandler";
import { ExternalInterface } from "../../../ggs.dll/reconstructed/exports/ExternalInterface";
import { instanceOfClass } from "../../../ggs.dll/reconstructed/exports/instanceOfClass";
import { Localize } from "../../../ggs.dll/reconstructed/exports/Localize";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class CastleRegisterUserCommand extends BasicRegisterUserCommand {
  get registrationVOClass() {
    return C2SRegisterWithNameVO;
  }
  set registrationVOClass(value) {
    super.registrationVOClass = value;
  }
  parseCommandVariables(argument0 = null) {
    var __s9local0 = argument0;
    var __s9local1 = __s9local0[0];
    var __s9local2 = __s9local0[1];
    return new BasicRequiredRegistrationFieldsVO(__s9local2, null, __s9local1);
  }
  sendRegisterUserCommand(argument0, argument1?: any) {
    var __s11local0 = this;
    if (argument1 === undefined) {
      argument1 = 3;
    }
    if (this.isSteamDesktopBuild()) {
      this.fetchSteamAuthTicket().then(function (__s15param0) {
        try {
          if (instanceOfClass(argument0, "C2SRegisterWithNameVO")) {
            argument0.STK = __s15param0 || "";
          }
        } catch (__s19local0) {
          console.warn(__s19local0);
        }
        __s11local0.sendRegisterUserCommandWithRecaptcha(argument0, argument1);
      });
    } else {
      this.sendRegisterUserCommandWithRecaptcha(argument0, argument1);
    }
  }
  isSteamDesktopBuild() {
    try {
      return EnvGlobalsHandler.globals.urlVariables.urlParams.get("nativeStore") === CastleEnvironmentGlobals.NATIVE_STORE_STEAM;
    } catch (__s25local0) {
      return false;
    }
  }
  fetchSteamAuthTicket() {
    try {
      var __s27local0 = 0;
      var __s27local1 = new Promise(function (__s30param0) {
        __s27local0 = window.setTimeout(function () {
          return __s30param0("");
        }, 20000);
      });
      var __s27local2 = ExternalInterface.asyncCall("ggsGetSteamAuthTicket").then(function (__s34param0) {
        if (typeof __s34param0 == "string") {
          return __s34param0;
        } else {
          return "";
        }
      }).catch(function () {
        return "";
      });
      return Promise.race([__s27local2, __s27local1]).then(function (__s40param0) {
        window.clearTimeout(__s27local0);
        return __s40param0;
      });
    } catch (__s42local0) {
      console.warn(__s42local0);
      return Promise.resolve("");
    }
  }
  sendRegisterUserCommandWithRecaptcha(argument0, argument1?: any) {
    var __s44local0 = this;
    if (argument1 === undefined) {
      argument1 = 3;
    }
    try {
      window.grecaptcha.ready(function () {
        var __s48local0 = ClientConstReCaptcha.getSiteKey();
        window.grecaptcha.execute(__s48local0, {
          action: "submit"
        }).then(function (__s50param0) {
          try {
            if (instanceOfClass(EnvGlobalsHandler.globals, "CastleEnvironmentGlobals") && instanceOfClass(argument0, "C2SRegisterWithNameVO")) {
              argument0.IC = EnvGlobalsHandler.globals.inviterCode;
            }
          } catch (__s54local0) {
            console.warn(__s54local0);
          }
          try {
            if (__s50param0 && instanceOfClass(argument0, "C2SRegisterWithNameVO")) {
              argument0.RCT = __s50param0;
            }
          } catch (__s58local0) {
            console.warn(__s58local0);
          }
          CastleModel.smartfoxClient.sendCommandVO(argument0);
        }).catch(function (__s60param0) {
          if (argument1 > 0) {
            window.setTimeout(function () {
              __s44local0.sendRegisterUserCommandWithRecaptcha(argument0, argument1 - 1);
            }, 250);
          } else {
            CastleDialogHandler.getInstance().registerDialogs(CastleStandardOkDialog, new BasicStandardOkDialogProperties(Localize.text("generic_alert_watchout"), Localize.text("errorCode_1")));
          }
        });
      });
    } catch (__s66local0) {
      if (argument1 > 0) {
        window.setTimeout(function () {
          __s44local0.sendRegisterUserCommandWithRecaptcha(argument0, argument1 - 1);
        }, 250);
      } else {
        CastleDialogHandler.getInstance().registerDialogs(CastleStandardOkDialog, new BasicStandardOkDialogProperties(Localize.text("generic_alert_watchout"), Localize.text("errorCode_1")));
      }
    }
  }
  saveGameDataInCookie() {
    super.saveGameDataInCookie();
    CastleModel.localData.saveFacebookID("");
  }
}
classImplementsInterfaces(CastleRegisterUserCommand, "ISimpleCommand");
