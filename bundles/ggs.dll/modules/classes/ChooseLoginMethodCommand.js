Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_EnvGlobalsHandler = require("gge-module:class_EnvGlobalsHandler");
var __dep_class_BasicController = require("gge-module:class_BasicController");
var __dep_class_BasicModel = require("gge-module:class_BasicModel");
var __dep_class_BasicLayoutManager = require("gge-module:class_BasicLayoutManager");
var __dep_class_CommandController = require("gge-module:class_CommandController");
var __dep_class_SimpleCommand = require("gge-module:class_SimpleCommand");
var __dep_exact_39c566239c224ca4 = require("gge-module:exact_39c566239c224ca4");
var __s0local0 = function (__s1param0) {
  function ChooseLoginMethodCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(ChooseLoginMethodCommand, __s1param0);
  ChooseLoginMethodCommand.prototype.execute = function (__s5param0 = null) {
    if (!__dep_class_BasicModel.BasicModel.smartfoxClient.userForcedDisconnect) {
      var __s5local0 = undefined;
      var __s5local1 = undefined;
      if (this.isAutoLoginInSocialNetworkPossible()) {
        __s5local1 = "With social login account.";
        __s5local0 = true;
      } else if (this.isLoginPossibleWithCookieAccount()) {
        __s5local1 = "With account stored in SharedObject.";
        __s5local0 = true;
      } else if (this.alternativeLoginPossible()) {
        return;
      }
      if (!this.isAgeGateValid()) {
        var __s5local2 = undefined;
        __s5local2 = __s5local0 ? "Auto login would have been possible, but age gate validation is not complete." : "AgeGate validation is not complete. No login possible.";
        __dep_exact_39c566239c224ca4.info(__s5local2);
        __dep_class_BasicModel.BasicModel.ageGateData.autoLoginTryFailed = __s5local0;
        __s5local0 = false;
      }
      if (__s5local0) {
        __dep_exact_39c566239c224ca4.info("Do autologin: " + __s5local1);
        this.login();
        return;
      }
    }
    __dep_exact_39c566239c224ca4.info("No auto login possible, show startscreen.");
    this.handleAutoLoginImpossible();
  };
  ChooseLoginMethodCommand.prototype.isAgeGateValid = function () {
    return !__dep_class_BasicModel.BasicModel.ageGateData.isAgeGateActive || !!__dep_class_BasicModel.BasicModel.ageGateData.validationSucceeded;
  };
  ChooseLoginMethodCommand.prototype.handleAutoLoginImpossible = function () {
    __dep_class_BasicLayoutManager.BasicLayoutManager.getInstance().state = __dep_class_BasicLayoutManager.BasicLayoutManager.STATE_STARTSCREEN;
  };
  ChooseLoginMethodCommand.prototype.alternativeLoginPossible = function () {
    return false;
  };
  ChooseLoginMethodCommand.prototype.isAutoLoginInSocialNetworkPossible = function () {
    var __s19local0 = __dep_class_BasicModel.BasicModel.socialData.displayNameExistingPlayer;
    if (__s19local0 && __s19local0 != "") {
      var __s19local1 = __dep_class_BasicModel.BasicModel.instanceProxy.instanceMap.length;
      var __s19local2 = __dep_class_BasicModel.BasicModel.instanceProxy.instanceMap[0].countries.length;
      return __s19local1 != 1 || !(__s19local2 > 1);
    }
    return false;
  };
  ChooseLoginMethodCommand.prototype.isLoginPossibleWithCookieAccount = function () {
    var __s22local0 = __dep_class_BasicModel.BasicModel.networkCookie.username;
    var __s22local1 = __dep_class_BasicModel.BasicModel.networkCookie.loginToken;
    return !!this.hasAccountSavedInCookie(__s22local0, __s22local1) && (__dep_class_BasicModel.BasicModel.userData.userName = __s22local0, __dep_class_BasicModel.BasicModel.userData.loginToken = __s22local1, true);
  };
  ChooseLoginMethodCommand.prototype.hasAccountSavedInCookie = function (__s24param0, __s24param1) {
    return __s24param0 && __s24param0 !== "" && __s24param1 && __s24param1 !== "";
  };
  ChooseLoginMethodCommand.prototype.login = function () {
    var __s26local0;
    __s26local0 = __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.isSSO && !__dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.useLegacySocialRegistration ? __dep_class_BasicController.BasicController.COMMAND_SOCIAL_LOGIN : __dep_class_BasicController.BasicController.COMMAND_LOGIN;
    __dep_class_CommandController.CommandController.instance.executeCommand(__s26local0);
  };
  return ChooseLoginMethodCommand;
}(__dep_class_SimpleCommand.SimpleCommand);
exports.ChooseLoginMethodCommand = __s0local0;
