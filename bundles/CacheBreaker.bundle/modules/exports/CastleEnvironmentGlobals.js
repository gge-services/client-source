Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_opaque_6fd0a7f85c69b366718f0fa2 = require("gge-module:opaque_6fd0a7f85c69b366718f0fa2");
var __dep_opaque_9e901e8e2483a22f7a07841d = require("gge-module:opaque_9e901e8e2483a22f7a07841d");
var __dep_opaque_9e901e8e2483a22f7a07841d_1 = require("gge-module:opaque_9e901e8e2483a22f7a07841d");
var __dep_opaque_9e901e8e2483a22f7a07841d_2 = require("gge-module:opaque_9e901e8e2483a22f7a07841d");
var __dep_opaque_9e901e8e2483a22f7a07841d_3 = require("gge-module:opaque_9e901e8e2483a22f7a07841d");
var __dep_opaque_81dacdf05bd322922517ac3a = require("gge-module:opaque_81dacdf05bd322922517ac3a");
var __dep_export_appVersion = require("gge-module:export_appVersion");
var __s0local0 = function (__s1param0) {
  function CastleEnvironmentGlobals() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._isOnTemporaryServer = false;
    __s3local0._isOnAllianceBattleGroundServer = false;
    __s3local0._isTemporaryServerTestRun = false;
    __s3local0._isCrossplay = false;
    __s3local0._isSpecialServerConnectStarted = false;
    return __s3local0;
  }
  __dep_opaque_6fd0a7f85c69b366718f0fa2.__extends(CastleEnvironmentGlobals, __s1param0);
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "gameId", {
    get: function () {
      if (this.isClosedBeta) {
        return 39;
      } else {
        return 12;
      }
    },
    set: function (__s9param0) {
      Object.getOwnPropertyDescriptor(__dep_opaque_9e901e8e2483a22f7a07841d_2.BasicEnvironmentGlobals.prototype, "gameId").set.call(this, __s9param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "gameTitle", {
    get: function () {
      return "Castle";
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_opaque_9e901e8e2483a22f7a07841d_2.BasicEnvironmentGlobals.prototype, "gameTitle").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "currentGameTitle", {
    get: function () {
      return "Goodgame Empire";
    },
    set: function (__s17param0) {
      Object.getOwnPropertyDescriptor(__dep_opaque_9e901e8e2483a22f7a07841d_2.BasicEnvironmentGlobals.prototype, "currentGameTitle").set.call(this, __s17param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "versionDateGame", {
    get: function () {
      return __dep_export_appVersion.CastleVersionInformation.versionInstance.buildNumberGame;
    },
    set: function (__s21param0) {
      Object.getOwnPropertyDescriptor(__dep_opaque_9e901e8e2483a22f7a07841d_2.BasicEnvironmentGlobals.prototype, "versionDateGame").set.call(this, __s21param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "numOfItemLibs", {
    get: function () {
      return 0;
    },
    set: function (__s25param0) {
      Object.getOwnPropertyDescriptor(__dep_opaque_9e901e8e2483a22f7a07841d_2.BasicEnvironmentGlobals.prototype, "numOfItemLibs").set.call(this, __s25param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "analyticsTrackingPath", {
    get: function () {
      return "/goodgameCastle";
    },
    set: function (__s29param0) {
      Object.getOwnPropertyDescriptor(__dep_opaque_9e901e8e2483a22f7a07841d_2.BasicEnvironmentGlobals.prototype, "analyticsTrackingPath").set.call(this, __s29param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "useAutoLogin", {
    get: function () {
      return true;
    },
    set: function (__s33param0) {
      Object.getOwnPropertyDescriptor(__dep_opaque_9e901e8e2483a22f7a07841d_2.BasicEnvironmentGlobals.prototype, "useAutoLogin").set.call(this, __s33param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "isLoggingActive", {
    get: function () {
      return true;
    },
    set: function (__s37param0) {
      Object.getOwnPropertyDescriptor(__dep_opaque_9e901e8e2483a22f7a07841d_2.BasicEnvironmentGlobals.prototype, "isLoggingActive").set.call(this, __s37param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "useABTest", {
    get: function () {
      return false;
    },
    set: function (__s41param0) {
      Object.getOwnPropertyDescriptor(__dep_opaque_9e901e8e2483a22f7a07841d_2.BasicEnvironmentGlobals.prototype, "useABTest").set.call(this, __s41param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "showLoadingText", {
    get: function () {
      return true;
    },
    set: function (__s45param0) {
      Object.getOwnPropertyDescriptor(__dep_opaque_9e901e8e2483a22f7a07841d_2.BasicEnvironmentGlobals.prototype, "showLoadingText").set.call(this, __s45param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "useVersionedFontSWF", {
    get: function () {
      return false;
    },
    set: function (__s49param0) {
      Object.getOwnPropertyDescriptor(__dep_opaque_9e901e8e2483a22f7a07841d_2.BasicEnvironmentGlobals.prototype, "useVersionedFontSWF").set.call(this, __s49param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "useLegacyFontManagement", {
    get: function () {
      return false;
    },
    set: function (__s53param0) {
      Object.getOwnPropertyDescriptor(__dep_opaque_9e901e8e2483a22f7a07841d_2.BasicEnvironmentGlobals.prototype, "useLegacyFontManagement").set.call(this, __s53param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "useShortPaymentHashValidity", {
    get: function () {
      return true;
    },
    set: function (__s57param0) {
      Object.getOwnPropertyDescriptor(__dep_opaque_9e901e8e2483a22f7a07841d_2.BasicEnvironmentGlobals.prototype, "useShortPaymentHashValidity").set.call(this, __s57param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "versionInformation", {
    get: function () {
      return __dep_export_appVersion.CastleVersionInformation.versionInstance;
    },
    set: function (__s61param0) {
      Object.getOwnPropertyDescriptor(__dep_opaque_9e901e8e2483a22f7a07841d_2.BasicEnvironmentGlobals.prototype, "versionInformation").set.call(this, __s61param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "fractionalDigits", {
    get: function () {
      return 2;
    },
    set: function (__s65param0) {
      Object.getOwnPropertyDescriptor(__dep_opaque_9e901e8e2483a22f7a07841d_2.BasicEnvironmentGlobals.prototype, "fractionalDigits").set.call(this, __s65param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "trailingZeros", {
    get: function () {
      return false;
    },
    set: function (__s69param0) {
      Object.getOwnPropertyDescriptor(__dep_opaque_9e901e8e2483a22f7a07841d_2.BasicEnvironmentGlobals.prototype, "trailingZeros").set.call(this, __s69param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "identityManagmentLicenseVO", {
    get: function () {
      var __s71local0 = new __dep_opaque_9e901e8e2483a22f7a07841d_3.IdentitiyManagementLicenseTableRegistrationVO();
      __s71local0.gameTitle = "굿게임엠파이어(Goodgame Empire)";
      __s71local0.license_cc_np = "CC-NP-131015-013";
      __s71local0.ageRating = __dep_opaque_9e901e8e2483a22f7a07841d.AgeCheck.OverTwelve;
      __s71local0.gameRatingBoardConcessionDate = new Date(2013, 10, 15);
      __s71local0.gameRatingBoardConcessionId = -9999;
      __s71local0.productionDate = new Date(2013, 6, 1);
      return __s71local0;
    },
    set: function (__s73param0) {
      Object.getOwnPropertyDescriptor(__dep_opaque_9e901e8e2483a22f7a07841d_2.BasicEnvironmentGlobals.prototype, "identityManagmentLicenseVO").set.call(this, __s73param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "sendUserActivityStatusToTheServer", {
    get: function () {
      return true;
    },
    set: function (__s77param0) {
      Object.getOwnPropertyDescriptor(__dep_opaque_9e901e8e2483a22f7a07841d_2.BasicEnvironmentGlobals.prototype, "sendUserActivityStatusToTheServer").set.call(this, __s77param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "useLegacySocialRegistration", {
    get: function () {
      return false;
    },
    set: function (__s81param0) {
      Object.getOwnPropertyDescriptor(__dep_opaque_9e901e8e2483a22f7a07841d_2.BasicEnvironmentGlobals.prototype, "useLegacySocialRegistration").set.call(this, __s81param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "ageGateFeatureIsActive", {
    get: function () {
      return false;
    },
    set: function (__s85param0) {
      Object.getOwnPropertyDescriptor(__dep_opaque_9e901e8e2483a22f7a07841d_2.BasicEnvironmentGlobals.prototype, "ageGateFeatureIsActive").set.call(this, __s85param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "storeId", {
    get: function () {
      var __s87local0 = this.urlVariables.nativeStore;
      if (__s87local0 == CastleEnvironmentGlobals.NATIVE_STORE_STEAM) {
        return CastleEnvironmentGlobals.STORE_ID_STEAM;
      } else if (__s87local0 == __dep_opaque_9e901e8e2483a22f7a07841d_1.BasicConstants.NATIVE_STORE_MICROSOFT) {
        return __dep_opaque_9e901e8e2483a22f7a07841d_1.BasicConstants.STORE_ID_MS;
      } else {
        return __dep_opaque_9e901e8e2483a22f7a07841d_1.BasicConstants.STORE_ID_WEB;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "platformId", {
    get: function () {
      var __s92local0 = this.urlVariables.nativeStore;
      if (__s92local0 == CastleEnvironmentGlobals.NATIVE_STORE_STEAM) {
        return CastleEnvironmentGlobals.PLATFORM_ID_STEAM;
      } else if (__s92local0 == __dep_opaque_9e901e8e2483a22f7a07841d_1.BasicConstants.NATIVE_STORE_MICROSOFT) {
        return __dep_opaque_9e901e8e2483a22f7a07841d_1.BasicConstants.PLATFORM_ID_MS;
      } else {
        return __dep_opaque_9e901e8e2483a22f7a07841d_1.BasicConstants.PLATFORM_ID_WEB;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "inviterCode", {
    get: function () {
      return this._inviterCode;
    },
    set: function (__s99param0) {
      this._inviterCode = __s99param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "invite_refer_method", {
    get: function () {
      return this._invite_refer_method;
    },
    set: function (__s103param0) {
      this._invite_refer_method = __s103param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "localizeReplacements", {
    get: function () {
      return true;
    },
    set: function (__s107param0) {
      Object.getOwnPropertyDescriptor(__dep_opaque_9e901e8e2483a22f7a07841d_2.BasicEnvironmentGlobals.prototype, "localizeReplacements").set.call(this, __s107param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleEnvironmentGlobals.prototype.getStillfrontPolicyLanguage = function () {
    var __s109local0 = this.currentCountryLanguageCode;
    if (__s109local0) {
      if ((__s109local0 = __s109local0.toLowerCase()).indexOf("zh") == 0) {
        return "zh";
      } else if (CastleEnvironmentGlobals.STILLFRONT_POLICY_LANGUAGES.indexOf(__s109local0) != -1) {
        return __s109local0;
      } else {
        return "en";
      }
    } else {
      return "en";
    }
  };
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "urlAGB", {
    get: function () {
      return CastleEnvironmentGlobals.STILLFRONT_POLICIES_BASE + this.getStillfrontPolicyLanguage() + "/terms/";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "urlPolicy", {
    get: function () {
      return CastleEnvironmentGlobals.STILLFRONT_POLICIES_BASE + this.getStillfrontPolicyLanguage() + "/privacy/";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "isClosedBeta", {
    get: function () {
      return !!CastleEnvironmentGlobals._firstLoaderURL && !!(CastleEnvironmentGlobals._firstLoaderURL.length > 0) && (CastleEnvironmentGlobals._firstLoaderURL.indexOf("test-sns.goodgamestudios.com/rendered/www/39/") != -1 || CastleEnvironmentGlobals._firstLoaderURL.indexOf("-closedbeta") != -1 || CastleEnvironmentGlobals._firstLoaderURL.indexOf("empireclosedbeta.goodgamestudios.com/") != -1) || !!this.referrer && !!(this.referrer.length > 0) && (this.referrer.indexOf("-closedbeta") != -1 || this.referrer.indexOf("empireclosedbeta") != -1) || !!this.baseURL && !!(this.baseURL.length > 0) && this.baseURL.indexOf("-closedbeta") != -1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "cacheBreakerUrl", {
    get: function () {
      if (this.isClosedBeta) {
        return __dep_opaque_9e901e8e2483a22f7a07841d_1.BasicConstants.DOMAIN_PROTOCOL + "://" + this.cachebreakerSubDomain + "." + this.domain + "/loader-closedbeta/" + this.gameDir + "/" + this.gameTitle + "CacheBreakerSwf.swf";
      }
      return Object.getOwnPropertyDescriptor(__dep_opaque_9e901e8e2483a22f7a07841d_2.BasicEnvironmentGlobals.prototype, "cacheBreakerUrl").get.call(this);
    },
    set: function (__s125param0) {
      Object.getOwnPropertyDescriptor(__dep_opaque_9e901e8e2483a22f7a07841d_2.BasicEnvironmentGlobals.prototype, "cacheBreakerUrl").set.call(this, __s125param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "firstLoaderURL", {
    get: function () {
      return Object.getOwnPropertyDescriptor(__dep_opaque_9e901e8e2483a22f7a07841d_2.BasicEnvironmentGlobals.prototype, "firstLoaderURL").get.call(this);
    },
    set: function (__s129param0) {
      CastleEnvironmentGlobals._firstLoaderURL = __s129param0;
      Object.getOwnPropertyDescriptor(__dep_opaque_9e901e8e2483a22f7a07841d_2.BasicEnvironmentGlobals.prototype, "firstLoaderURL").set.call(this, __s129param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "blueboxPort", {
    get: function () {
      return 443;
    },
    set: function (__s133param0) {
      Object.getOwnPropertyDescriptor(__dep_opaque_9e901e8e2483a22f7a07841d_2.BasicEnvironmentGlobals.prototype, "blueboxPort").set.call(this, __s133param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "isOnTemporaryServer", {
    get: function () {
      return this._isOnTemporaryServer;
    },
    set: function (__s137param0) {
      this._isOnTemporaryServer = __s137param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "specialServer", {
    get: function () {
      return this._specialServer;
    },
    set: function (__s141param0) {
      this._specialServer = __s141param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "lastShownDialog", {
    get: function () {
      return this._lastShownDialog;
    },
    set: function (__s145param0) {
      this._lastShownDialog = __s145param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "lastUsedCommandName", {
    get: function () {
      return this._lastUsedCommandName;
    },
    set: function (__s149param0) {
      this._lastUsedCommandName = __s149param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "lastExternalClip", {
    get: function () {
      return this._lastExternalClip;
    },
    set: function (__s153param0) {
      this._lastExternalClip = __s153param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "isTemporaryServerTestRun", {
    get: function () {
      return this._isTemporaryServerTestRun;
    },
    set: function (__s157param0) {
      this._isTemporaryServerTestRun = __s157param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "originalInstanceVOBeforeSpecialServer", {
    get: function () {
      return this._originalInstanceVOBeforeSpecialServer;
    },
    set: function (__s161param0) {
      this._originalInstanceVOBeforeSpecialServer = __s161param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "isOnAllianceBattleGroundServer", {
    get: function () {
      return this._isOnAllianceBattleGroundServer;
    },
    set: function (__s165param0) {
      this._isOnAllianceBattleGroundServer = __s165param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "isSpecialServerConnectStarted", {
    get: function () {
      return this._isSpecialServerConnectStarted;
    },
    set: function (__s169param0) {
      this._isSpecialServerConnectStarted = __s169param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "isOnSpecialServer", {
    get: function () {
      return this.isOnTemporaryServer || this.isOnAllianceBattleGroundServer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "isCrossplay", {
    get: function () {
      return this._isCrossplay;
    },
    set: function (__s175param0) {
      this._isCrossplay = __s175param0;
    },
    enumerable: true,
    configurable: true
  });
  CastleEnvironmentGlobals.NATIVE_STORE_STEAM = "steam";
  CastleEnvironmentGlobals.STORE_ID_STEAM = 12;
  CastleEnvironmentGlobals.PLATFORM_ID_STEAM = 5;
  CastleEnvironmentGlobals.STILLFRONT_POLICIES_BASE = "https://policies.stillfront.com/stillfront-germany/";
  CastleEnvironmentGlobals.STILLFRONT_POLICY_LANGUAGES = ["ar", "bg", "cs", "da", "de", "el", "en", "es", "fi", "fr", "hu", "it", "ja", "ko", "nl", "no", "pl", "pt", "ro", "ru", "sk", "sv", "tr", "zh"];
  return CastleEnvironmentGlobals;
}(__dep_opaque_9e901e8e2483a22f7a07841d_2.BasicEnvironmentGlobals);
exports.CastleEnvironmentGlobals = __s0local0;
__dep_opaque_81dacdf05bd322922517ac3a.classImplementsInterfaces(__s0local0, "IEnvironmentGlobals");
