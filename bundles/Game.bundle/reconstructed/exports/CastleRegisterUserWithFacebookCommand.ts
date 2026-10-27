import { BasicModel } from "../../../ggs.dll/reconstructed/exports/BasicModel";
import { BasicStandardOkDialogProperties } from "../../../ggs.dll/reconstructed/exports/BasicStandardOkDialogProperties";
import { BasicTrackingStringComposer } from "../../../ggs.dll/reconstructed/exports/BasicTrackingStringComposer";
import { C2SRegisterWithNameVO } from "./C2SRegisterWithNameVO";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleFacebookModule } from "./CastleFacebookModule";
import { CastleModel } from "./CastleModel";
import { CastleStandardOkDialog } from "./CastleStandardOkDialog";
import { ClientConstReCaptcha } from "./ClientConstReCaptcha";
import { debug } from "../../../ggs.dll/reconstructed/exports/debug";
import { EnvGlobalsHandler } from "../../../ggs.dll/reconstructed/exports/EnvGlobalsHandler";
import { GGSCountryController } from "../../../ggs.dll/reconstructed/exports/GGSCountryController";
import { int } from "../../../ggs.dll/reconstructed/exports/int";
import { Localize } from "../../../ggs.dll/reconstructed/exports/Localize";
import { SimpleCommand } from "../../../ggs.dll/reconstructed/exports/SimpleCommand";
import { TimezoneUtil } from "../../../ggs.dll/reconstructed/exports/TimezoneUtil";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class CastleRegisterUserWithFacebookCommand extends SimpleCommand {
  execute(argument0 = null) {
    debug("-------------------- gonna register in with " + JSON.stringify(argument0));
    var __s5local0 = new C2SRegisterWithNameVO();
    __s5local0.username = argument0.pn;
    __s5local0.accountId = this.env.accountId;
    __s5local0.ggsLanguageCode = GGSCountryController.instance.currentCountry.ggsLanguageCode;
    __s5local0.referrer = this.env.referrer;
    __s5local0.distributorId = int(this.env.distributorId);
    __s5local0.connectionTime = BasicModel.smartfoxClient.connectionTime;
    __s5local0.roundTripTime = BasicModel.smartfoxClient.roundTripTime;
    __s5local0.campaignVars = BasicTrackingStringComposer.composeVarDataForRegistration("", this.env.referrer);
    __s5local0.campaignVars_adid = this.env.campainVars.aid;
    __s5local0.campaignVars_lp = this.env.campainVars.lp;
    __s5local0.campaignVars_creative = this.env.campainVars.creative;
    __s5local0.campaignVars_partnerId = this.env.campainVars.partnerId;
    __s5local0.campaignVars_websiteId = this.env.urlVariables.websiteId;
    __s5local0.timezone = TimezoneUtil.getTrackingTimezone();
    __s5local0.FID = argument0.fid;
    __s5local0.FTK = argument0.ftk;
    __s5local0.FAID = CastleFacebookModule.appID;
    __s5local0.initialize();
    this.sendWithRecaptcha(__s5local0);
  }
  sendWithRecaptcha(argument0, argument1?: any) {
    var __s7local0 = this;
    if (argument1 === undefined) {
      argument1 = 3;
    }
    try {
      window.grecaptcha.ready(function () {
        var __s11local0 = ClientConstReCaptcha.getSiteKey();
        window.grecaptcha.execute(__s11local0, {
          action: "submit"
        }).then(function (__s13param0) {
          argument0.RCT = __s13param0;
          CastleModel.smartfoxClient.sendCommandVO(argument0);
        }).catch(function (__s15param0) {
          if (argument1 > 0) {
            window.setTimeout(function () {
              __s7local0.sendWithRecaptcha(argument0, argument1 - 1);
            }, 250);
          } else {
            CastleDialogHandler.getInstance().registerDialogs(CastleStandardOkDialog, new BasicStandardOkDialogProperties(Localize.text("generic_alert_watchout"), Localize.text("errorCode_1")));
          }
        });
      });
    } catch (__s21local0) {
      if (argument1 > 0) {
        window.setTimeout(function () {
          __s7local0.sendWithRecaptcha(argument0, argument1 - 1);
        }, 250);
      } else {
        CastleDialogHandler.getInstance().registerDialogs(CastleStandardOkDialog, new BasicStandardOkDialogProperties(Localize.text("generic_alert_watchout"), Localize.text("errorCode_1")));
      }
    }
  }
  get env() {
    return EnvGlobalsHandler.globals;
  }
}
classImplementsInterfaces(CastleRegisterUserWithFacebookCommand, "ISimpleCommand");
