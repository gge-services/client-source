// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 118
// Export: BasicURLVariables; preserved source: modules/webpack/exports/paramToBool.js
// Original canonical SHA-256: 6fa07998adb737cb3f8ed7e48a55d36129b564d4c42b6c558ded02c451db95ed
var __s0local2 = function () {
  function BasicURLVariables() {
    this._initialized = false;
    this._instance = 0;
    this._emulateLaggyClient = false;
    this._forceManualLogin = false;
    this._websiteId = __s0local1;
    this._lpWebsiteId = __s0local1;
    this._loginSource = __s0local1;
    this._laggyClientMinDelay = 50;
    this._laggyClientMaxDelay = 250;
    this._testNetConf = false;
    this._forceToShowLogger = false;
    this._friendInviteCode = "";
    this._friendInviteZoneId = 0;
    this._friendInviteInviterPlayerId = 0;
    this._friendInviteInviterCountryCode = "";
    this._disableFacebookLogin = false;
    this._disableFriendInvite = false;
    this._nativeStore = "";
  }
  BasicURLVariables.prototype.initParams = function (__s18param0) {
    if (!this._initialized) {
      this._initialized = true;
      var __s18local0 = (__s18param0 = (__s18param0 || "").replace("?", "")).length > 0 ? [window.location.search, __s18param0].join("&") : window.location.search;
      this._params = new URLSearchParams(__s18local0);
      this.parseParameters();
    }
  };
  BasicURLVariables.prototype.parseParameters = function () {
    this._testNetConf = exports.paramToBool(this._params.get(__dep_class_BasicConstants.BasicConstants.NETCONF_TEST_PARAMETER));
    if (this._params.has(__dep_class_BasicConstants.BasicConstants.FRIEND_INVITE_CODE)) {
      this._friendInviteCode = exports.paramToString(this._params.get(__dep_class_BasicConstants.BasicConstants.FRIEND_INVITE_CODE));
      var __s21local0 = this._friendInviteCode.split("-");
      if (__s21local0.length > 0) {
        var __s21local1 = __s21local0[0];
        this._friendInviteZoneId = parseInt(__s21local1, 36);
        this._friendInviteZoneId = isNaN(this._friendInviteZoneId) ? 0 : this._friendInviteZoneId;
        this._friendInviteInviterPlayerId = parseInt(__s21local0[1], 36);
        this._friendInviteInviterPlayerId = isNaN(this._friendInviteInviterPlayerId) ? 0 : this._friendInviteInviterPlayerId;
      } else {
        this._friendInviteZoneId = 0;
      }
      var __s21local2 = undefined;
      __s21local2 = __s21local0.length === 3 ? __s21local0[2] : __s21local0.length === 4 ? __s21local0[3] : "";
      __s21local2 = /[a-zA-Z]+/.test(__s21local2) ? __s21local2 : "";
      this._friendInviteInviterCountryCode = __s21local2;
    }
    this._forceToShowLogger = exports.paramToBool(this._params.get(__dep_class_BasicConstants.BasicConstants.FORCE_TO_SHOW_LOGGER));
    this._laggyClientMinDelay = exports.paramToNum(this._params.get(__dep_class_BasicConstants.BasicConstants.LAGGY_CLIENT_MIN_DELAY), 50);
    __s0local0.debug("laggy client min delay has been set to " + this._laggyClientMinDelay + " ms");
    this._laggyClientMaxDelay = exports.paramToNum(this._params.get(__dep_class_BasicConstants.BasicConstants.LAGGY_CLIENT_MAX_DELAY), 250);
    __s0local0.debug("laggy client max delay has been set to " + this._laggyClientMaxDelay + " ms");
    window.useMinAssets = exports.paramToBool(this._params.get(__dep_class_BasicConstants.BasicConstants.USE_MIN_ASSETS), true);
    this._disableFacebookLogin = exports.paramToBool(this._params.get(__dep_class_BasicConstants.BasicConstants.DISABLE_FACEBOOK_LOGIN), false);
    this._disableFriendInvite = exports.paramToBool(this._params.get(__dep_class_BasicConstants.BasicConstants.DISABLE_FACEBOOK_LOGIN), false);
    this._nativeStore = exports.paramToString(this._params.get(__dep_class_BasicConstants.BasicConstants.NATIVE_STORE), "");
  };
  BasicURLVariables.prototype.readQueryParametersFromLandingPage = function () {
    var __s26local0 = this;
    if (__dep_export_CSSMouseCursor.ExternalInterface.available) {
      if (this._initialized) {
        return Promise.resolve("already initialized");
      } else {
        return new Promise(function (__s31param0, __s31param1) {
          __dep_export_CSSMouseCursor.ExternalInterface.asyncCall("ggsGetQueryParameters").then(function (__s33param0) {
            __s26local0.initParams(__s33param0);
            __s31param0();
          }).catch(function (__s35param0) {
            __s26local0.initParams();
            __s31param0();
          });
        });
      }
    } else {
      this.initParams();
      return Promise.resolve();
    }
  };
  Object.defineProperty(BasicURLVariables.prototype, "urlParams", {
    get: function () {
      return this._params;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicURLVariables.prototype, "presetInstanceId", {
    get: function () {
      this._instance ||= exports.paramToNum(this._params.get("instance"));
      return this._instance;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicURLVariables.prototype, "country", {
    get: function () {
      this._country ||= exports.paramToString(this._params.get(__dep_class_BasicConstants.BasicConstants.COUNTRY_PARAMETER));
      return this._country;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicURLVariables.prototype, "forceToShowTestServers", {
    get: function () {
      this._forceToShowTestServers ||= exports.paramToBool(this._params.get(__dep_class_BasicConstants.BasicConstants.FORCE_TO_SHOW_TEST_SERVERS));
      return this._forceToShowTestServers;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicURLVariables.prototype, "emulateLaggyClient", {
    get: function () {
      this._emulateLaggyClient ||= exports.paramToBool(this._params.get(__dep_class_BasicConstants.BasicConstants.COMMAND_EMULATE_LAGGY_CLIENT));
      return this._emulateLaggyClient;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicURLVariables.prototype, "forceManualLogin", {
    get: function () {
      this._forceManualLogin ||= exports.paramToBool(this._params.get(__dep_class_BasicConstants.BasicConstants.FORCE_MANUAL_LOGIN));
      return this._forceManualLogin;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicURLVariables.prototype, "forcedMaintenance", {
    get: function () {
      if (!this._forcedMaintenance) {
        if (this._params.has(__dep_class_BasicConstants.BasicConstants.MAINTENANCE_PARAMETER)) {
          var __s50local0 = this._params.get(__dep_class_BasicConstants.BasicConstants.MAINTENANCE_PARAMETER);
          if (__s50local0 === "on") {
            this._forcedMaintenance = __dep_exact_1aff78853490291e.ForcedMaintenanceEnum.ON;
          } else if (__s50local0 === "off") {
            this._forcedMaintenance = __dep_exact_1aff78853490291e.ForcedMaintenanceEnum.OFF;
          } else {
            __s0local0.warn(__s50local0 + " is not an accepted param for {maintenance} - please use on/off");
            this._forcedMaintenance = __dep_exact_1aff78853490291e.ForcedMaintenanceEnum.NOT_SET;
          }
        } else {
          this._forcedMaintenance = __dep_exact_1aff78853490291e.ForcedMaintenanceEnum.NOT_SET;
        }
        return this._forcedMaintenance;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicURLVariables.prototype, "websiteId", {
    get: function () {
      if (this._websiteId == __s0local1) {
        this._websiteId = exports.paramToString(this._params.get(__dep_class_BasicConstants.BasicConstants.PARTNER_WEBSITE), "0");
      }
      return this._websiteId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicURLVariables.prototype, "lpWebsiteId", {
    get: function () {
      if (this._lpWebsiteId == __s0local1) {
        this._lpWebsiteId = exports.paramToString(this._params.get(__dep_class_BasicConstants.BasicConstants.LP_PARTNER_WEBSITE), "0");
      }
      return this._lpWebsiteId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicURLVariables.prototype, "extendedWebsiteID", {
    get: function () {
      if (this.websiteId !== "0") {
        return this.websiteId;
      } else if (this.lpWebsiteId !== "0") {
        return this.lpWebsiteId;
      } else {
        return "0";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicURLVariables.prototype, "loginSource", {
    get: function () {
      if (this._loginSource == __s0local1) {
        this._loginSource = exports.paramToString(this._params.get(__dep_class_BasicConstants.BasicConstants.LOGIN_SOURCE), "0");
      }
      return this._loginSource;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicURLVariables.prototype, "laggyClientMinDelay", {
    get: function () {
      return this._laggyClientMinDelay;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicURLVariables.prototype, "laggyClientMaxDelay", {
    get: function () {
      return this._laggyClientMaxDelay;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicURLVariables.prototype, "testNetConf", {
    get: function () {
      return this._testNetConf;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicURLVariables.prototype, "forceToShowLogger", {
    get: function () {
      return this._forceToShowLogger;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicURLVariables.prototype, "friendInviteCode", {
    get: function () {
      return this._friendInviteCode;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicURLVariables.prototype, "friendInviteZoneId", {
    get: function () {
      return this._friendInviteZoneId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicURLVariables.prototype, "friendInviteInviterPlayerId", {
    get: function () {
      return this._friendInviteInviterPlayerId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicURLVariables.prototype, "friendInviteInviterCountryCode", {
    get: function () {
      return this._friendInviteInviterCountryCode;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicURLVariables.prototype, "isFacebookLoginDisabled", {
    get: function () {
      return this._disableFacebookLogin;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicURLVariables.prototype, "isFriendInviteDisabled", {
    get: function () {
      return this._disableFriendInvite;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicURLVariables.prototype, "nativeStore", {
    get: function () {
      return this._nativeStore;
    },
    enumerable: true,
    configurable: true
  });
  return BasicURLVariables;
}();
exports.BasicURLVariables = __s0local2;
