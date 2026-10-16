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
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleRegisterErrorEvent = require("gge-module:export_CastleRegisterErrorEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __s0local0 = function (__s1param0) {
  function LCACommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(LCACommand, __s1param0);
  Object.defineProperty(LCACommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_CREATE_AVATAR;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  LCACommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    switch (__s9param0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        __dep_export_CastleModel.CastleModel.userData.firstLogin = true;
        __dep_export_CastleModel.CastleModel.localData.saveCountryData(__dep_exact_9e901e8e2483a22f_4.GGSCountryController.instance.currentCountry.ggsCountryCode);
        if (this.layoutManager.currentState == __dep_exact_9e901e8e2483a22f.BasicLayoutManager.STATE_STARTSCREEN && (this.env.loginIsKeyBased || this.env.isFacebook)) {
          __dep_exact_9e901e8e2483a22f_2.ClientFunnelTrackingController.getInstance().trackState(__dep_exact_9e901e8e2483a22f_1.ClientFunnelGameStates.REGISTERED);
          __dep_exact_9e901e8e2483a22f_3.ExternalInterfaceController.instance.executeJavaScriptFunction(new __dep_exact_9e901e8e2483a22f_5.JavascriptCallOnRegisterCompleteFactory());
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendMessage(__dep_export_ClientConstSF.ClientConstSF.C2S_GET_BASIC_DATA, []);
        }
        return true;
      case __dep_exact_26a421b704832cff.ERROR.INVALID_NAME:
        var __s9local0 = JSON.parse(__s9param1[1]);
        this.controller.dispatchEvent(new __dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent(__dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent.REGISTER_ERROR, __dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent.INVALID_NAME, __s9local0));
        break;
      case __dep_exact_26a421b704832cff.ERROR.NAME_ALREADY_IN_USE:
        __s9local0 = JSON.parse(__s9param1[1]);
        this.controller.dispatchEvent(new __dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent(__dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent.REGISTER_ERROR, __dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent.NAME_ALREADY_IN_USE, __s9local0));
        break;
      case __dep_exact_26a421b704832cff.ERROR.NAME_HAS_ONLY_NUMBERS:
        __s9local0 = JSON.parse(__s9param1[1]);
        this.controller.dispatchEvent(new __dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent(__dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent.REGISTER_ERROR, __dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent.NAME_HAS_ONLY_NUMBERS, __s9local0));
        break;
      case __dep_exact_26a421b704832cff.ERROR.USAGE_OF_BADWORDS:
        __s9local0 = JSON.parse(__s9param1[1]);
        this.controller.dispatchEvent(new __dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent(__dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent.REGISTER_ERROR, __dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent.USAGE_OF_BADWORDS, __s9local0));
        break;
      case __dep_exact_26a421b704832cff.ERROR.NO_FREE_RENAME:
        if (__dep_export_CastleModel.CastleModel.userData.userLevel > 1) {
          this.showErrorDialog(__s9param0, __s9param1);
        }
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  };
  return LCACommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.LCACommand = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IExecCommand");
