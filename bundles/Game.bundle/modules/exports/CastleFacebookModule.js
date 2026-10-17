// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: Game.bundle; Webpack module: 228
// Export: CastleFacebookModule; preserved source: modules/webpack/exports/CastleFacebookModule.js
// Original canonical SHA-256: 8b589a4220ac87899c7c86c6c2363793eab18ed1d34a9dd2125e06b9f6c88868
var __s0local5 = function () {
  function FacebookModule() {
    this._available = false;
    this._userID = "";
    this._accessToken = "";
    this.credentialsFromLandingPage = false;
  }
  FacebookModule.prototype.reset = function () {
    this._userID = "";
    this._accessToken = "";
  };
  FacebookModule.prototype.initialize = function () {
    var __s11local0 = this;
    if (__s0local4) {
      __s0local0.debug("setup:: module was already initialized");
    } else {
      __s0local4 = true;
      if (this.isSupportedByCurrentPage()) {
        if (window.FB) {
          FB.init({
            appId: this.appID,
            status: true,
            xfbml: true,
            version: "v2.12"
          });
          var __s11local1 = __dep_exact_9e901e8e2483a22f.BasicModel.networkCookie;
          if (__s11local1.facebookUID && __s11local1.facebookAccessToken) {
            this._userID = __s11local1.facebookUID;
            this._accessToken = __s11local1.facebookAccessToken;
            this.credentialsFromLandingPage = true;
          }
          this._available = true;
          FB.Event.subscribe("auth.authResponseChange", function (__s18param0) {
            __s0local0.warn("fb.auth.authResponseChanged", __s18param0);
            __s11local0.credentialsFromLandingPage = false;
            __s11local0.onAuthChangedResponse(__s18param0);
          });
          __s0local6(function (__s20param0) {
            return __dep_exact_6fd0a7f85c69b366.__awaiter(__s11local0, undefined, undefined, function () {
              var __s22local0 = this;
              return __dep_exact_6fd0a7f85c69b366.__generator(this, function (__s24param0) {
                if (!__s20param0) {
                  this.checkLoginStatus(true).then(function (__s27param0) {
                    __s22local0.onAuthChangedResponse(__s27param0);
                  }).catch(function (__s29param0) {
                    __s22local0.onAuthChangedResponse({
                      status: __s0local3.UNKNOWN,
                      authResponse: null
                    });
                  });
                }
                return [2];
              });
            });
          });
        } else if (window.fbSdkLoaded) {
          window.bugsnagClient.notify(new Error("Facebook SDK was loaded but was unable to create global window.FB object."));
        }
      } else {
        __s0local0.debug("setup:: module not supported");
      }
    }
  };
  Object.defineProperty(FacebookModule.prototype, "available", {
    get: function () {
      return this._available && !this.isFacebookLoginDisabled();
    },
    enumerable: true,
    configurable: true
  });
  FacebookModule.prototype.isFacebookLoginDisabled = function () {
    return __dep_exact_9e901e8e2483a22f_1.EnvGlobalsHandler.globals && __dep_exact_9e901e8e2483a22f_1.EnvGlobalsHandler.globals.urlVariables && __dep_exact_9e901e8e2483a22f_1.EnvGlobalsHandler.globals.urlVariables.isFacebookLoginDisabled;
  };
  FacebookModule.prototype.sendReferralLink = function (__s37param0) {
    var __s37local0 = this;
    function __s37local1() {
      __s0local0.debug("FB.ui.send(" + __s37param0 + ")");
      FB.ui({
        app_id: __s37local0.appID,
        method: "send",
        link: __s37param0
      }, function () {
        return __s0local0.debug("FB.ui.send.callback");
      });
    }
    if (FB.getAuthResponse()) {
      __s37local1();
    } else {
      this.asyncLogin().then(__s0local7).then(function (__s45param0) {
        __s37local1();
      }).catch(function (__s47param0) {
        return __s0local0.warn("something went wrong", __s47param0);
      });
    }
  };
  FacebookModule.prototype.revokeLogin = function () {
    var __s49local0 = this;
    function __s49local1() {
      FB.api("/me/permissions/", "delete", {}, function (__s53param0) {
        if (__s53param0) {
          __s0local0.debug("App was de-authorized: ", __s53param0);
        } else {
          __s0local0.error("Something went wrong while revoking permissions: ", __s53param0);
        }
        __s49local0.checkLoginStatus(true).then(function (__s57param0) {
          __s49local0.onAuthChangedResponse(__s57param0);
        }).catch(function (__s59param0) {
          __s49local0.onAuthChangedResponse({
            status: __s0local3.UNKNOWN,
            authResponse: null
          });
        });
      });
    }
    if (FB.getAuthResponse()) {
      __s49local1();
    } else {
      __s0local0.warn("we need to login again");
      this.asyncLogin().then(__s0local7).then(function (__s63param0) {
        __s49local1();
      }).catch(function (__s65param0) {
        return __s0local0.warn("something went wrong", __s65param0);
      });
    }
  };
  FacebookModule.prototype.checkLoginStatus = function (__s67param0 = false) {
    return __dep_exact_6fd0a7f85c69b366.__awaiter(this, undefined, undefined, function () {
      return __dep_exact_6fd0a7f85c69b366.__generator(this, function (__s71param0) {
        return [2, new Promise(function (__s73param0, __s73param1) {
          __s0local0.warn("checking FB login status");
          FB.getLoginStatus(function (__s75param0) {
            __s0local0.warn("got async FB loginStatus: ", __s75param0);
            __s73param0(__s75param0);
          }, __s67param0);
        })];
      });
    });
  };
  FacebookModule.prototype.asyncLogin = function () {
    return __dep_exact_6fd0a7f85c69b366.__awaiter(this, undefined, undefined, function () {
      return __dep_exact_6fd0a7f85c69b366.__generator(this, function (__s81param0) {
        return [2, new Promise(function (__s83param0, __s83param1) {
          FB.login(function (__s85param0) {
            __s83param0(__s85param0);
          }, {
            scope: __s0local1
          });
        })];
      });
    });
  };
  FacebookModule.prototype.login = function () {
    var __s87local0 = this;
    var __s87local1 = FB.getAuthResponse();
    if (__s87local1 && __s87local1.status != "") {
      console.warn("login. use cached authResponse");
      this.onAuthChangedResponse({
        status: __s0local3.CONNECTED,
        authResponse: __s87local1
      });
    } else {
      this.asyncLogin().then(__s0local7).then(function (__s91param0) {
        __s87local0.onAuthChangedResponse(__s91param0);
      }).catch(function (__s93param0) {
        __s87local0.onAuthChangedResponse({
          status: __s0local3.UNKNOWN,
          authResponse: null
        });
      });
    }
  };
  FacebookModule.prototype.getUserData = function (__s95param0) {
    FB.api("/me?fields=" + __s0local2.join(","), function (__s97param0) {
      __s95param0(__s97param0);
    });
  };
  Object.defineProperty(FacebookModule.prototype, "appID", {
    get: function () {
      if (__dep_exact_9e901e8e2483a22f_1.EnvGlobalsHandler.globals.isTest) {
        return "450594258735416";
      } else {
        return "1602833606600702";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookModule.prototype, "userID", {
    get: function () {
      return this._userID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookModule.prototype, "accessToken", {
    get: function () {
      return this._accessToken;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookModule.prototype, "hasAuthResponse", {
    get: function () {
      return this._userID !== "" && this._accessToken !== "";
    },
    enumerable: true,
    configurable: true
  });
  FacebookModule.prototype.isSupportedByCurrentPage = function () {
    var __s109local0 = __dep_exact_9e901e8e2483a22f_1.EnvGlobalsHandler.globals;
    return !__s109local0.loginIsKeyBased && !__s109local0.isClosedBeta && !__dep_export_SpecialServerHelper.SpecialServerHelper.isOnKeyLoginToNormalLoginServer;
  };
  FacebookModule.prototype.onAuthChangedResponse = function (__s111param0) {
    var __s111local0;
    if (__s111param0 === undefined) {
      __s111param0 = null;
    }
    __s0local0.warn("onAuthChangedResponse:current FB loginStatus ", __s111param0);
    switch (__s111param0.status) {
      case __s0local3.CONNECTED:
        this._userID = __s111param0.authResponse.userID;
        this._accessToken = __s111param0.authResponse.accessToken;
        __s111local0 = new __dep_export_CastleFacebookSDKEvent.CastleFacebookSDKEvent(__dep_export_CastleFacebookSDKEvent.CastleFacebookSDKEvent.CONNECTED, __s111param0.authResponse);
        break;
      case __s0local3.NOT_AUTHORIZED:
        this._userID = "";
        this._accessToken = "";
        __s111local0 = new __dep_export_CastleFacebookSDKEvent.CastleFacebookSDKEvent(__dep_export_CastleFacebookSDKEvent.CastleFacebookSDKEvent.NOT_AUTHORIZED);
        break;
      case __s0local3.AUTH_EXPIRED:
        __s0local0.warn("authorization_expired! :   this case was not handled by previous version of Module..  will fallback to NOT_CONNECTED");
      case __s0local3.UNKNOWN:
      default:
        this._userID = "";
        this._accessToken = "";
        __s111local0 = new __dep_export_CastleFacebookSDKEvent.CastleFacebookSDKEvent(__dep_export_CastleFacebookSDKEvent.CastleFacebookSDKEvent.NOT_CONNECTED);
    }
    __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(__s111local0);
  };
  return FacebookModule;
}();
exports.CastleFacebookModule = new __s0local5();
