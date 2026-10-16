Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_BasicCommand = require("gge-module:class_BasicCommand");
var __dep_class_BasicController = require("gge-module:class_BasicController");
var __dep_class_BasicSmartfoxConstants = require("gge-module:class_BasicSmartfoxConstants");
var __dep_class_BasicErrorConstants = require("gge-module:class_BasicErrorConstants");
var __dep_class_SocialDataEvent = require("gge-module:class_SocialDataEvent");
var __dep_class_BasicModel = require("gge-module:class_BasicModel");
var __dep_class_BasicSocialData = require("gge-module:class_BasicSocialData");
var __dep_class_CommandController = require("gge-module:class_CommandController");
var __dep_class_GGSCountryController = require("gge-module:class_GGSCountryController");
var __dep_class_ABTestController = require("gge-module:class_ABTestController");
var __dep_exact_39c566239c224ca4 = require("gge-module:exact_39c566239c224ca4");
var __s0local0 = function (__s1param0) {
  function SPLCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(SPLCommand, __s1param0);
  Object.defineProperty(SPLCommand.prototype, "cmdId", {
    get: function () {
      return __dep_class_BasicSmartfoxConstants.BasicSmartfoxConstants.S2C_NEW_LOGIN_SOCIAL;
    },
    enumerable: true,
    configurable: true
  });
  SPLCommand.prototype.executeCommand = function (__s7param0, __s7param1) {
    __dep_exact_39c566239c224ca4.info("error: " + __s7param0 + ", params: " + __s7param1);
    if (__s7param0 == SPLCommand.LOGIN_KEYS_INVALID) {
      __dep_exact_39c566239c224ca4.info("Signature key (sig) is outdated, request a new one.");
      __dep_class_BasicController.BasicController.getInstance().addEventListener(__dep_class_SocialDataEvent.SocialDataEvent.LOGIN_KEYS_REFRESHED, this.bindFunction(this.onLoginKeysRefreshed));
      __dep_class_CommandController.CommandController.instance.executeCommand(__dep_class_BasicController.BasicController.REQUEST_SOCIAL_LOGIN_KEYS);
      return false;
    } else {
      if (__s7param0 == __dep_class_BasicErrorConstants.BasicErrorConstants.ALL_OK) {
        __dep_class_BasicModel.BasicModel.sessionData.loggedIn = true;
        if (this.env.suk == "") {
          __dep_class_BasicModel.BasicModel.localData.saveCountryData(__dep_class_GGSCountryController.GGSCountryController.instance.currentCountry.ggsCountryCode);
        }
      }
      this.handleGameSpecificErrors(__s7param0, __s7param1);
      return false;
    }
  };
  SPLCommand.prototype.onLoginKeysRefreshed = function (__s13param0) {
    __dep_class_BasicController.BasicController.getInstance().removeEventListener(__dep_class_SocialDataEvent.SocialDataEvent.LOGIN_KEYS_REFRESHED, this.bindFunction(this.onLoginKeysRefreshed));
    this.retrySocialLogin();
  };
  SPLCommand.prototype.retrySocialLogin = function () {
    if (__dep_class_BasicModel.BasicModel.socialData.socialLoginReloginCount < __dep_class_BasicSocialData.BasicSocialData.LOGIN_RELOGIN_COUNT_MAX_TRIES) {
      __dep_exact_39c566239c224ca4.info("Retry " + __dep_class_BasicModel.BasicModel.socialData.socialLoginReloginCount + ", try to execute social login again.");
      __dep_class_CommandController.CommandController.instance.executeCommand(__dep_class_BasicController.BasicController.COMMAND_SOCIAL_LOGIN);
    } else {
      __dep_class_ABTestController.fatal("Can't execute social login after " + __dep_class_BasicSocialData.BasicSocialData.LOGIN_RELOGIN_COUNT_MAX_TRIES + " tries!");
      this.handleGameSpecificErrors(SPLCommand.LOGIN_KEYS_INVALID, []);
    }
    __dep_class_BasicModel.BasicModel.socialData.socialLoginReloginCount++;
  };
  SPLCommand.prototype.handleGameSpecificErrors = function (__s19param0, __s19param1) {};
  SPLCommand.LOGIN_KEYS_INVALID = 10014;
  return SPLCommand;
}(__dep_class_BasicCommand.BasicCommand);
exports.SPLCommand = __s0local0;
