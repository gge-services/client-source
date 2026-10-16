Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleEnvironmentGlobals = require("gge-module:export_CastleEnvironmentGlobals");
var __dep_export_ClientConstReCaptcha = require("gge-module:export_ClientConstReCaptcha");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
var __dep_export_C2SRegisterWithNameVO = require("gge-module:export_C2SRegisterWithNameVO");
var __s0local0 = function (__s1param0) {
  function CastleRegisterUserCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleRegisterUserCommand, __s1param0);
  Object.defineProperty(CastleRegisterUserCommand.prototype, "registrationVOClass", {
    get: function () {
      return __dep_export_C2SRegisterWithNameVO.C2SRegisterWithNameVO;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_exact_9e901e8e2483a22f_1.BasicRegisterUserCommand.prototype, "registrationVOClass").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleRegisterUserCommand.prototype.parseCommandVariables = function (__s9param0 = null) {
    var __s9local0 = __s9param0;
    var __s9local1 = __s9local0[0];
    var __s9local2 = __s9local0[1];
    return new __dep_exact_9e901e8e2483a22f_2.BasicRequiredRegistrationFieldsVO(__s9local2, null, __s9local1);
  };
  CastleRegisterUserCommand.prototype.sendRegisterUserCommand = function (__s11param0, __s11param1) {
    var __s11local0 = this;
    if (__s11param1 === undefined) {
      __s11param1 = 3;
    }
    if (this.isSteamDesktopBuild()) {
      this.fetchSteamAuthTicket().then(function (__s15param0) {
        try {
          if (__dep_exact_81dacdf05bd32292_2.instanceOfClass(__s11param0, "C2SRegisterWithNameVO")) {
            __s11param0.STK = __s15param0 || "";
          }
        } catch (__s19local0) {
          console.warn(__s19local0);
        }
        __s11local0.sendRegisterUserCommandWithRecaptcha(__s11param0, __s11param1);
      });
    } else {
      this.sendRegisterUserCommandWithRecaptcha(__s11param0, __s11param1);
    }
  };
  CastleRegisterUserCommand.prototype.isSteamDesktopBuild = function () {
    try {
      return __dep_exact_9e901e8e2483a22f_3.EnvGlobalsHandler.globals.urlVariables.urlParams.get("nativeStore") === __dep_export_CastleEnvironmentGlobals.CastleEnvironmentGlobals.NATIVE_STORE_STEAM;
    } catch (__s25local0) {
      return false;
    }
  };
  CastleRegisterUserCommand.prototype.fetchSteamAuthTicket = function () {
    try {
      var __s27local0 = 0;
      var __s27local1 = new Promise(function (__s30param0) {
        __s27local0 = window.setTimeout(function () {
          return __s30param0("");
        }, 20000);
      });
      var __s27local2 = __dep_exact_81dacdf05bd32292_1.ExternalInterface.asyncCall("ggsGetSteamAuthTicket").then(function (__s34param0) {
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
  };
  CastleRegisterUserCommand.prototype.sendRegisterUserCommandWithRecaptcha = function (__s44param0, __s44param1) {
    var __s44local0 = this;
    if (__s44param1 === undefined) {
      __s44param1 = 3;
    }
    try {
      window.grecaptcha.ready(function () {
        var __s48local0 = __dep_export_ClientConstReCaptcha.ClientConstReCaptcha.getSiteKey();
        window.grecaptcha.execute(__s48local0, {
          action: "submit"
        }).then(function (__s50param0) {
          try {
            if (__dep_exact_81dacdf05bd32292_2.instanceOfClass(__dep_exact_9e901e8e2483a22f_3.EnvGlobalsHandler.globals, "CastleEnvironmentGlobals") && __dep_exact_81dacdf05bd32292_2.instanceOfClass(__s44param0, "C2SRegisterWithNameVO")) {
              __s44param0.IC = __dep_exact_9e901e8e2483a22f_3.EnvGlobalsHandler.globals.inviterCode;
            }
          } catch (__s54local0) {
            console.warn(__s54local0);
          }
          try {
            if (__s50param0 && __dep_exact_81dacdf05bd32292_2.instanceOfClass(__s44param0, "C2SRegisterWithNameVO")) {
              __s44param0.RCT = __s50param0;
            }
          } catch (__s58local0) {
            console.warn(__s58local0);
          }
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(__s44param0);
        }).catch(function (__s60param0) {
          if (__s44param1 > 0) {
            window.setTimeout(function () {
              __s44local0.sendRegisterUserCommandWithRecaptcha(__s44param0, __s44param1 - 1);
            }, 250);
          } else {
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_watchout"), __dep_exact_92d05af59ee2ff30.Localize.text("errorCode_1")));
          }
        });
      });
    } catch (__s66local0) {
      if (__s44param1 > 0) {
        window.setTimeout(function () {
          __s44local0.sendRegisterUserCommandWithRecaptcha(__s44param0, __s44param1 - 1);
        }, 250);
      } else {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_watchout"), __dep_exact_92d05af59ee2ff30.Localize.text("errorCode_1")));
      }
    }
  };
  CastleRegisterUserCommand.prototype.saveGameDataInCookie = function () {
    __s1param0.prototype.saveGameDataInCookie.call(this);
    __dep_export_CastleModel.CastleModel.localData.saveFacebookID("");
  };
  return CastleRegisterUserCommand;
}(__dep_exact_9e901e8e2483a22f_1.BasicRegisterUserCommand);
exports.CastleRegisterUserCommand = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleCommand");
