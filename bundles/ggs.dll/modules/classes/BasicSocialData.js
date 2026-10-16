Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_JavascriptCallOnSetSessionParametersFactory = require("gge-module:class_JavascriptCallOnSetSessionParametersFactory");
var __dep_class_EnvGlobalsHandler = require("gge-module:class_EnvGlobalsHandler");
var __dep_class_BasicController = require("gge-module:class_BasicController");
var __dep_class_ExternalInterfaceController = require("gge-module:class_ExternalInterfaceController");
var __dep_class_FlashCallbackFunctionName = require("gge-module:class_FlashCallbackFunctionName");
var __dep_class_JavascriptFunctionName = require("gge-module:class_JavascriptFunctionName");
var __dep_class_SocialDataEvent = require("gge-module:class_SocialDataEvent");
var __dep_class_BasicModel = require("gge-module:class_BasicModel");
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __dep_export_CSSMouseCursor = require("gge-module:export_CSSMouseCursor");
var __s0local0 = __dep_export_LoggerConfigurator.getLogger("CoreJS.BasicSocialData");
var __s0local1 = function () {
  function BasicSocialData() {
    this._displayNameExistingPlayer = "";
    this.socialLoginReloginCount = 0;
  }
  BasicSocialData.prototype.inviteFriends = function () {
    if (this.env.hasNetworkBuddies) {
      this.externalInterface(BasicSocialData.INVITE);
    }
  };
  BasicSocialData.prototype.reloadIFrame = function () {
    this.externalInterface(BasicSocialData.RELOAD);
  };
  BasicSocialData.prototype.setSocialData = function (__s10param0, __s10param1) {
    __dep_class_ExternalInterfaceController.ExternalInterfaceController.instance.executeJavaScriptFunction(new __dep_class_JavascriptCallOnSetSessionParametersFactory.JavascriptCallOnSetSessionParametersFactory(__s10param0));
  };
  BasicSocialData.prototype.externalInterface = function (__s12param0, __s12param1 = null) {
    switch (__s12param0) {
      case BasicSocialData.INVITE:
      case BasicSocialData.RELOAD:
        __dep_export_CSSMouseCursor.ExternalInterface.call(__s12param0);
        break;
      case BasicSocialData.EXTERNAL_TRIGGER_ERROR:
        __dep_export_CSSMouseCursor.ExternalInterface.call(__s12param0, __s12param1[0], __s12param1[1]);
    }
  };
  Object.defineProperty(BasicSocialData.prototype, "env", {
    get: function () {
      return __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  BasicSocialData.prototype.setDisplayNameExistingPlayer = function (__s17param0) {
    this._displayNameExistingPlayer = __s17param0 || "";
    var __s17local0 = new __dep_class_SocialDataEvent.SocialDataEvent(__dep_class_SocialDataEvent.SocialDataEvent.SOCIAL_PLAYER_NAME_CHANGED);
    __s17local0.playerName = __dep_class_BasicModel.BasicModel.socialData.displayNameExistingPlayer;
    __dep_class_BasicController.BasicController.getInstance().dispatchEvent(__s17local0);
  };
  Object.defineProperty(BasicSocialData.prototype, "displayNameExistingPlayer", {
    get: function () {
      return this._displayNameExistingPlayer;
    },
    enumerable: true,
    configurable: true
  });
  BasicSocialData.prototype.requestLoginKeys = function () {
    __s0local0.info("Request new login keys from PHP");
    __dep_export_CSSMouseCursor.ExternalInterface.addCallback(__dep_class_FlashCallbackFunctionName.FlashCallbackFunctionName.SET_LOGIN_KEYS, this.onSetLoginKeys);
    __dep_export_CSSMouseCursor.ExternalInterface.call(__dep_class_JavascriptFunctionName.JavascriptFunctionName.REQUEST_LOGIN_KEYS);
  };
  BasicSocialData.prototype.onSetLoginKeys = function (__s23param0, __s23param1) {
    __s0local0.info("Login keys refreshed, sig: " + __s23param0 + ", suk: " + __s23param1);
    this._signatureKey = __s23param0;
    this._supportKey = __s23param1;
    this.env.sig = this._signatureKey;
    this.env.suk = this._supportKey;
    var __s23local0 = new __dep_class_SocialDataEvent.SocialDataEvent(__dep_class_SocialDataEvent.SocialDataEvent.LOGIN_KEYS_REFRESHED);
    __s23local0.signatureKey = this._signatureKey;
    __s23local0.supportKey = this._supportKey;
    __dep_class_BasicController.BasicController.getInstance().dispatchEvent(__s23local0);
  };
  BasicSocialData.prototype.logoutSupported = function () {
    return __dep_class_BasicModel.BasicModel.instanceProxy.instanceMap.length > 1;
  };
  Object.defineProperty(BasicSocialData.prototype, "supportKey", {
    get: function () {
      return this._supportKey;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSocialData.prototype, "signatureKey", {
    get: function () {
      return this._signatureKey;
    },
    enumerable: true,
    configurable: true
  });
  BasicSocialData.LOGIN_RELOGIN_COUNT_MAX_TRIES = 3;
  BasicSocialData.INVITE = "invite";
  BasicSocialData.RELOAD = "reload";
  BasicSocialData.EXTERNAL_TRIGGER_ERROR = "triggerError";
  return BasicSocialData;
}();
exports.BasicSocialData = __s0local1;
