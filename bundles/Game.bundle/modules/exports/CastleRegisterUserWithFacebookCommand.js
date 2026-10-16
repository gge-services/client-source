Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_4 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_5 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_6 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_7 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstReCaptcha = require("gge-module:export_ClientConstReCaptcha");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
var __dep_export_C2SRegisterWithNameVO = require("gge-module:export_C2SRegisterWithNameVO");
var __s0local0 = function (__s1param0) {
  function CastleRegisterUserWithFacebookCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleRegisterUserWithFacebookCommand, __s1param0);
  CastleRegisterUserWithFacebookCommand.prototype.execute = function (__s5param0 = null) {
    __dep_exact_9e901e8e2483a22f_7.debug("-------------------- gonna register in with " + JSON.stringify(__s5param0));
    var __s5local0 = new __dep_export_C2SRegisterWithNameVO.C2SRegisterWithNameVO();
    __s5local0.username = __s5param0.pn;
    __s5local0.accountId = this.env.accountId;
    __s5local0.ggsLanguageCode = __dep_exact_9e901e8e2483a22f_4.GGSCountryController.instance.currentCountry.ggsLanguageCode;
    __s5local0.referrer = this.env.referrer;
    __s5local0.distributorId = __dep_exact_f855840627e6e145.int(this.env.distributorId);
    __s5local0.connectionTime = __dep_exact_9e901e8e2483a22f_1.BasicModel.smartfoxClient.connectionTime;
    __s5local0.roundTripTime = __dep_exact_9e901e8e2483a22f_1.BasicModel.smartfoxClient.roundTripTime;
    __s5local0.campaignVars = __dep_exact_9e901e8e2483a22f_2.BasicTrackingStringComposer.composeVarDataForRegistration("", this.env.referrer);
    __s5local0.campaignVars_adid = this.env.campainVars.aid;
    __s5local0.campaignVars_lp = this.env.campainVars.lp;
    __s5local0.campaignVars_creative = this.env.campainVars.creative;
    __s5local0.campaignVars_partnerId = this.env.campainVars.partnerId;
    __s5local0.campaignVars_websiteId = this.env.urlVariables.websiteId;
    __s5local0.timezone = __dep_exact_9e901e8e2483a22f_6.TimezoneUtil.getTrackingTimezone();
    __s5local0.FID = __s5param0.fid;
    __s5local0.FTK = __s5param0.ftk;
    __s5local0.FAID = __dep_export_CastleFacebookModule.CastleFacebookModule.appID;
    __s5local0.initialize();
    this.sendWithRecaptcha(__s5local0);
  };
  CastleRegisterUserWithFacebookCommand.prototype.sendWithRecaptcha = function (__s7param0, __s7param1) {
    var __s7local0 = this;
    if (__s7param1 === undefined) {
      __s7param1 = 3;
    }
    try {
      window.grecaptcha.ready(function () {
        var __s11local0 = __dep_export_ClientConstReCaptcha.ClientConstReCaptcha.getSiteKey();
        window.grecaptcha.execute(__s11local0, {
          action: "submit"
        }).then(function (__s13param0) {
          __s7param0.RCT = __s13param0;
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(__s7param0);
        }).catch(function (__s15param0) {
          if (__s7param1 > 0) {
            window.setTimeout(function () {
              __s7local0.sendWithRecaptcha(__s7param0, __s7param1 - 1);
            }, 250);
          } else {
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_watchout"), __dep_exact_92d05af59ee2ff30.Localize.text("errorCode_1")));
          }
        });
      });
    } catch (__s21local0) {
      if (__s7param1 > 0) {
        window.setTimeout(function () {
          __s7local0.sendWithRecaptcha(__s7param0, __s7param1 - 1);
        }, 250);
      } else {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_watchout"), __dep_exact_92d05af59ee2ff30.Localize.text("errorCode_1")));
      }
    }
  };
  Object.defineProperty(CastleRegisterUserWithFacebookCommand.prototype, "env", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_3.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  return CastleRegisterUserWithFacebookCommand;
}(__dep_exact_9e901e8e2483a22f_5.SimpleCommand);
exports.CastleRegisterUserWithFacebookCommand = __s0local0;
var __dep_export_CastleFacebookModule = require("gge-module:export_CastleFacebookModule");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleCommand");
