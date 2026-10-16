Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_GoodgamePartners = require("gge-module:class_GoodgamePartners");
var __dep_exact_c95e4ededfdf159c = require("gge-module:exact_c95e4ededfdf159c");
var __dep_class_AccountCookie = require("gge-module:class_AccountCookie");
var __dep_class_CachebreakerInfoObject = require("gge-module:class_CachebreakerInfoObject");
var __dep_class_CampaignVars = require("gge-module:class_CampaignVars");
var __dep_export_paramToBool = require("gge-module:export_paramToBool");
var __dep_class_BasicJSVariables = require("gge-module:class_BasicJSVariables");
var __dep_class_VersionInformation = require("gge-module:class_VersionInformation");
var __dep_exact_96cf9add7e28ef3a = require("gge-module:exact_96cf9add7e28ef3a");
var __dep_class_BasicConstants = require("gge-module:class_BasicConstants");
var __dep_class_EnvGlobalsHandler = require("gge-module:class_EnvGlobalsHandler");
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __dep_class_AccountCookie_1 = require("gge-module:class_AccountCookie");
exports.AccountCookie = __dep_class_AccountCookie_1.AccountCookie;
var __dep_exact_c95e4ededfdf159c_1 = require("gge-module:exact_c95e4ededfdf159c");
exports.DictionaryUtil = __dep_exact_c95e4ededfdf159c_1.DictionaryUtil;
var __dep_class_CampaignVarsVO = require("gge-module:class_CampaignVarsVO");
exports.CampaignVarsVO = __dep_class_CampaignVarsVO.CampaignVarsVO;
var __dep_class_GoodgamePartners_1 = require("gge-module:class_GoodgamePartners");
exports.GoodgamePartners = __dep_class_GoodgamePartners_1.GoodgamePartners;
var __s0local0 = __dep_export_LoggerConfigurator.getLogger("BasicEnvironmentGlobals");
var __s0local1 = function () {
  function BasicEnvironmentGlobals() {
    this._forceInstanceConnect = false;
    this._defaultInstance = 0;
    this._isTest = false;
    this._isLiveTest = false;
    this._isDevTest = false;
    this._isUsabilityTest = false;
    this._isPreClient = false;
    this._isLocaTest = false;
    this._isLocal = false;
    this._isLocalHost = false;
    this._isLiveBranchingEnvironment = false;
    this._isFeatureBranchEnvironment = false;
    this._hasNetworkBuddies = false;
    this._enableFeedMessages = false;
    this._enablelonelyCow = false;
    this._requestPayByJS = false;
    this._networkNewsByJS = false;
    this._earnCredits = 0;
    this._allowedfullscreen = false;
    this._loginIsKeyBased = false;
    this._useexternallinks = false;
    this._invitefriends = false;
    this._minUsernameLength = 0;
    this._maxUsernameLength = 0;
    this._usePayment = false;
    this._isFirstVisitOfGGS = false;
    this._isFirstVisit = false;
    this._showVersion = false;
    this._isLoggingActive = true;
    this._showLoadingText = false;
    this._useZipXMLs = true;
    this._useABTest = false;
    this._cdnSubDomain = "content";
    this._gameFileSize = "content";
    this._frameOneSizeInKB = 0;
    this._isPrivateTestServer = false;
    this._registered = false;
    this._sessionStartTime = NaN;
    this._maintenanceMode = false;
    this._currentCountryLanguageCode = "";
    this._currentCountryLanguageVersion = 0;
    this._useVersionedFontSWF = true;
    this._gameSwfLoadingTime = 0;
    this._defaultCDN = __dep_exact_96cf9add7e28ef3a.CDN.Akamai;
    this._customCDN = __dep_exact_96cf9add7e28ef3a.CDN.None;
    this._useFallbackCDN = false;
    this._isIdentityManagementActive = false;
    this._underAgeConnectionLost = false;
    this._identiyManagementID = "";
    this._userTunnelActive = true;
  }
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "networkId", {
    get: function () {
      this._networkId ||= __dep_export_paramToBool.paramToNum(this.urlVariables.urlParams.get("network"), __dep_class_GoodgamePartners.GoodgamePartners.NETWORK_GENERAL);
      return this._networkId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "isLandingPageClient", {
    get: function () {
      this._isLandingPageClient ||= __dep_export_paramToBool.paramToBool(this.urlVariables.urlParams.get("clp"));
      return this._isLandingPageClient;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "pln", {
    get: function () {
      this._pln ||= __dep_export_paramToBool.paramToString(this.urlVariables.urlParams.get(__dep_class_BasicConstants.BasicConstants.PLN_PARAMETER));
      return this._pln;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "sig", {
    get: function () {
      this._sig ||= __dep_export_paramToBool.paramToString(this.urlVariables.urlParams.get(__dep_class_BasicConstants.BasicConstants.SIG_PARAMETER));
      return this._sig;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "suk", {
    get: function () {
      this._suk ||= __dep_export_paramToBool.paramToString(this.urlVariables.urlParams.get(__dep_class_BasicConstants.BasicConstants.SUK_PARAMETER));
      return this._suk;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "branchId", {
    get: function () {
      return this._branchId;
    },
    set: function (__s17param0) {
      this._branchId = __s17param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "branchVersion", {
    get: function () {
      return this._branchVersion;
    },
    set: function (__s21param0) {
      this._branchVersion = __s21param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "featureBranchId", {
    get: function () {
      return this._featureBranchId;
    },
    set: function (__s25param0) {
      this._featureBranchId = __s25param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "featureBranchEnvironment", {
    get: function () {
      return this._featureBranchEnvironment;
    },
    set: function (__s29param0) {
      this._featureBranchEnvironment = __s29param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "urlAGB", {
    get: function () {
      return __dep_class_BasicConstants.BasicConstants.uniqueAgbLink(this._currentCountryLanguageCode);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "urlPolicy", {
    get: function () {
      return __dep_class_BasicConstants.BasicConstants.uniquePolicyLink(this._currentCountryLanguageCode);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "gameId", {
    get: function () {
      return -1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "gameTitle", {
    get: function () {
      return "Basic";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "publicGameTitleForPaths", {
    get: function () {
      if (this.gameId == 15) {
        return "bigfarm";
      } else {
        return "empire";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "currentGameTitle", {
    get: function () {
      return "Current Title";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "gameDir", {
    get: function () {
      return this.gameTitle.toLowerCase();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "availableLanguages", {
    get: function () {
      var __s47local0 = [];
      if (this.langVersionDict === undefined || this.langVersionDict === null) {
        return [];
      }
      for (var __s47local1 = 0, __s47local2 = __dep_exact_c95e4ededfdf159c.DictionaryUtil.getKeys(this.langVersionDict); __s47local1 < __s47local2.length; __s47local1++) {
        var __s47local3 = __s47local2[__s47local1];
        __s47local0.push(__s47local3);
      }
      return __s47local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "domain", {
    get: function () {
      return "goodgamestudios.com";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "itemLibName", {
    get: function () {
      return this.gameTitle + "ItemLib";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "buildNumberGame", {
    get: function () {
      return this.versionInformation.buildNumberGame;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "gamePackageVersion", {
    get: function () {
      return this.versionInformation.versionNumberGame;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "versionText", {
    get: function () {
      return this.versionInformation.versionText;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "itemXmlVersion", {
    get: function () {
      return this.versionInformation.itemXmlVersion;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "versionNumberItemsXML", {
    get: function () {
      return this.versionInformation.basicVersionNumberItemsXML;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "versionNumberAchievementXML", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "versionNumberLevelXpXML", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "versionDateGame", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "numOfItemLibs", {
    get: function () {
      return 1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "cookieName", {
    get: function () {
      return "Goodgame" + this.gameTitle + "_" + this.networkId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "analyticsTrackingPath", {
    get: function () {
      return "/goodgameBasic";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "zipSuffix", {
    get: function () {
      if (this._useZipXMLs) {
        return "ggs";
      } else {
        return "xml";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "blueboxPort", {
    get: function () {
      return 80;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "blueboxPollSpeed", {
    get: function () {
      return 500;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "useAutoLogin", {
    get: function () {
      return !this._urlVariables.forceManualLogin;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "useZipXMLs", {
    get: function () {
      return this._useZipXMLs;
    },
    set: function (__s90param0) {
      this._useZipXMLs = __s90param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "showVersion", {
    get: function () {
      return this._showVersion;
    },
    set: function (__s94param0) {
      this._showVersion = __s94param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "buildNumberServer", {
    get: function () {
      return this.versionInformation.buildNumberServer;
    },
    set: function (__s98param0) {
      this.versionInformation.buildNumberServer = __s98param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "minUsernameLength", {
    get: function () {
      return this._minUsernameLength;
    },
    set: function (__s102param0) {
      this._minUsernameLength = __s102param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "maxUsernameLength", {
    get: function () {
      return this._maxUsernameLength;
    },
    set: function (__s106param0) {
      this._maxUsernameLength = __s106param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "useexternallinks", {
    get: function () {
      if (this.urlVariables.urlParams.has("useexternallinks")) {
        return __dep_export_paramToBool.paramToBool(this.urlVariables.urlParams.get("useexternallinks")) || this.urlVariables.urlParams.get("useexternallinks") == "true";
      } else {
        return this._useexternallinks;
      }
    },
    set: function (__s112param0) {
      this._useexternallinks = __s112param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "invitefriends", {
    get: function () {
      return this._invitefriends;
    },
    set: function (__s116param0) {
      this._invitefriends = __s116param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "loginIsKeyBased", {
    get: function () {
      if (this.urlVariables.urlParams.has("usekeybaselogin")) {
        return __dep_export_paramToBool.paramToBool(this.urlVariables.urlParams.get("usekeybaselogin")) || this.urlVariables.urlParams.get("usekeybaselogin") == "true";
      } else {
        return this._loginIsKeyBased;
      }
    },
    set: function (__s122param0) {
      this._loginIsKeyBased = __s122param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "isFirstVisitOfGGS", {
    get: function () {
      return this._isFirstVisitOfGGS;
    },
    set: function (__s126param0) {
      this._isFirstVisitOfGGS = __s126param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "isFirstVisit", {
    get: function () {
      return this._isFirstVisit;
    },
    set: function (__s130param0) {
      this._isFirstVisit = __s130param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "enableFeedMessages", {
    get: function () {
      return this._enableFeedMessages;
    },
    set: function (__s134param0) {
      this._enableFeedMessages = __s134param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "enableLonelyCow", {
    get: function () {
      return this._enablelonelyCow;
    },
    set: function (__s138param0) {
      this._enablelonelyCow = __s138param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "requestPayByJS", {
    get: function () {
      if (this.urlVariables.urlParams.has("requestpaybyjs")) {
        return __dep_export_paramToBool.paramToBool(this.urlVariables.urlParams.get("requestpaybyjs")) || this.urlVariables.urlParams.get("requestpaybyjs") == "true";
      } else {
        return this._requestPayByJS;
      }
    },
    set: function (__s144param0) {
      this._requestPayByJS = __s144param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "networkNewsByJS", {
    get: function () {
      return this._networkNewsByJS;
    },
    set: function (__s148param0) {
      this._networkNewsByJS = __s148param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "earnCredits", {
    get: function () {
      return this._earnCredits;
    },
    set: function (__s152param0) {
      this._earnCredits = __s152param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "forceInstanceConnect", {
    get: function () {
      return this._forceInstanceConnect;
    },
    set: function (__s156param0) {
      this._forceInstanceConnect = __s156param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "defaultInstanceId", {
    get: function () {
      return this._defaultInstance;
    },
    set: function (__s160param0) {
      this._defaultInstance = __s160param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "networknameString", {
    get: function () {
      return this._networknameString;
    },
    set: function (__s164param0) {
      this._networknameString = __s164param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "hasNetworkBuddies", {
    get: function () {
      return this._hasNetworkBuddies;
    },
    set: function (__s168param0) {
      this._hasNetworkBuddies = __s168param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "allowedfullscreen", {
    get: function () {
      return this._allowedfullscreen;
    },
    set: function (__s172param0) {
      this._allowedfullscreen = __s172param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "href", {
    get: function () {
      return this._href || window.document.location.href || document.location.href;
    },
    set: function (__s176param0) {
      this._href = __s176param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "referrer", {
    get: function () {
      return this._referrer || window.document.referrer || document.location.href;
    },
    set: function (__s180param0) {
      this._referrer = __s180param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "cleanReferrer", {
    get: function () {
      var __s182local0 = this.referrer || "";
      if (__s182local0.includes("?")) {
        __s182local0 = __s182local0.split("?")[0];
      }
      if (__s182local0.charAt(__s182local0.length - 1) === "/") {
        __s182local0 = __s182local0.substring(0, __s182local0.length - 1);
      }
      return __s182local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "localizeReplacements", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "neverUseAbbreviations", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "abbreviationThreshold", {
    get: function () {
      return 100000;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "fractionalDigits", {
    get: function () {
      return -1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "leadingZero", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "trailingZeros", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "invitedBy", {
    get: function () {
      return this._invitedBy;
    },
    set: function (__s200param0) {
      this._invitedBy = __s200param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "accountId", {
    get: function () {
      if (this._accountCookie && this._accountCookie.accountId) {
        return this.accountCookie.accountId;
      } else {
        return "-1";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "campainVars", {
    get: function () {
      return this._campainVars;
    },
    enumerable: true,
    configurable: true
  });
  BasicEnvironmentGlobals.prototype.initCampaignVars = function (__s208param0) {
    this._campainVars ||= new __dep_class_CampaignVars.CampaignVars();
    this._campainVars.initialize(__s208param0);
  };
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "urlVariables", {
    get: function () {
      this._urlVariables ||= new __dep_export_paramToBool.BasicURLVariables();
      return this._urlVariables;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "jsVariables", {
    get: function () {
      this._jsVariables ||= new __dep_class_BasicJSVariables.BasicJSVariables();
      return this._jsVariables;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "isTest", {
    get: function () {
      return this._isTest;
    },
    set: function (__s216param0) {
      this._isTest = __s216param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "isDevTest", {
    get: function () {
      return this._isDevTest;
    },
    set: function (__s220param0) {
      this._isDevTest = __s220param0;
      if (this._isDevTest == 1) {
        this._isTest = true;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "isLiveTest", {
    get: function () {
      return this._isLiveTest;
    },
    set: function (__s225param0) {
      this._isLiveTest = __s225param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "isPreClient", {
    get: function () {
      return this._isPreClient;
    },
    set: function (__s229param0) {
      this._isPreClient = __s229param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "isLocaTest", {
    get: function () {
      return this._isLocaTest;
    },
    set: function (__s233param0) {
      this._isLocaTest = __s233param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "isPrivateTestServer", {
    get: function () {
      return this._isPrivateTestServer;
    },
    set: function (__s237param0) {
      this._isPrivateTestServer = __s237param0;
      if (this._isPrivateTestServer == 1) {
        this._isTest = true;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "isLocal", {
    get: function () {
      return this._isLocal;
    },
    set: function (__s242param0) {
      this._isLocal = __s242param0;
      if (this._isLocal) {
        this.isTest = true;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "isLocalHost", {
    get: function () {
      return this._isLocalHost;
    },
    set: function (__s247param0) {
      this._isLocalHost = __s247param0;
      if (this._isLocalHost) {
        this.isTest = true;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "isLiveBranchingEnvironment", {
    get: function () {
      return this._isLiveBranchingEnvironment;
    },
    set: function (__s252param0) {
      this._isLiveBranchingEnvironment = __s252param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "isFeatureBranchEnvironment", {
    get: function () {
      return this._isFeatureBranchEnvironment;
    },
    set: function (__s256param0) {
      this._isFeatureBranchEnvironment = __s256param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "distributorId", {
    get: function () {
      this._distributorId ||= __dep_export_paramToBool.paramToString(this.urlVariables.urlParams.get(__dep_class_BasicConstants.BasicConstants.DISTRIBUTOR_ID_PARAMETER), "0");
      return this._distributorId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "accessKey", {
    get: function () {
      this._accessKey ||= __dep_export_paramToBool.paramToString(this.urlVariables.urlParams.get(__dep_class_BasicConstants.BasicConstants.KEY_PARAMETER), "");
      return this._accessKey;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "gender", {
    get: function () {
      this._gender ||= __dep_export_paramToBool.paramToString(this.urlVariables.urlParams.get(__dep_class_BasicConstants.BasicConstants.GENDER_PARAMETER), "");
      return this._gender;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "displayName", {
    get: function () {
      this._displayName ||= __dep_export_paramToBool.paramToString(this.urlVariables.urlParams.get(__dep_class_BasicConstants.BasicConstants.DISPLAY_NAME_PARAMETER), "");
      return this._displayName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "baseURL", {
    get: function () {
      if (!this._baseURL) {
        var __s266local0 = window.location.href;
        var __s266local1 = __s266local0.indexOf("[[IMPORT]]");
        this._baseURL = __s266local1 != -1 ? __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://" + __s266local0.slice(__s266local1 + "[[IMPORT]]".length, __s266local0.lastIndexOf("/")) : __s266local0.slice(0, __s266local0.lastIndexOf("/"));
        if (this._baseURL.indexOf("http") == 0 && this._baseURL.indexOf("https") < 0) {
          this._baseURL = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + this._baseURL.substring(4);
        }
      }
      return this._baseURL;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "langVersionDict", {
    get: function () {
      return this._langVersionDict;
    },
    set: function (__s272param0) {
      this._langVersionDict = __s272param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "usePayment", {
    get: function () {
      return this._usePayment;
    },
    set: function (__s276param0) {
      this._usePayment = __s276param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "isLoggingActive", {
    get: function () {
      return this._isLoggingActive;
    },
    set: function (__s280param0) {
      this._isLoggingActive = __s280param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "showLoadingText", {
    get: function () {
      return this._showLoadingText;
    },
    set: function (__s284param0) {
      this._showLoadingText = __s284param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "useABTest", {
    get: function () {
      return this._useABTest;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "cdnSubDomain", {
    get: function () {
      if (this._useFallbackCDN) {
        return "media";
      } else {
        return "files-" + __dep_exact_96cf9add7e28ef3a.CDN.abbreviation(this.activeCDN);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "cachebreakerSubDomain", {
    get: function () {
      return "cachebreaker";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "internalServerDomain", {
    get: function () {
      return __dep_class_BasicConstants.BasicConstants.DOMAIN_INTERNAL_DNS;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "gameFileSize", {
    get: function () {
      return this._gameFileSize;
    },
    set: function (__s298param0) {
      this._gameFileSize = __s298param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "isUsabilityTest", {
    get: function () {
      return this._isUsabilityTest;
    },
    set: function (__s302param0) {
      this._isUsabilityTest = __s302param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "isRegistered", {
    get: function () {
      return this._registered;
    },
    set: function (__s306param0) {
      this._registered = __s306param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "sessionStartTime", {
    get: function () {
      return this._sessionStartTime;
    },
    set: function (__s310param0) {
      this._sessionStartTime = __s310param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "sessionLength", {
    get: function () {
      return (Date.now() - this._sessionStartTime) / 1000;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "useItemXML", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "maintenanceMode", {
    get: function () {
      return this._maintenanceMode;
    },
    set: function (__s318param0) {
      this._maintenanceMode = __s318param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "isBeta", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "currentCountryLanguageCode", {
    get: function () {
      return this._currentCountryLanguageCode;
    },
    set: function (__s324param0) {
      this._currentCountryLanguageCode = __s324param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "currentCountryLanguageVersion", {
    get: function () {
      return this._currentCountryLanguageVersion;
    },
    set: function (__s328param0) {
      this._currentCountryLanguageVersion = __s328param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "useAwsTestTracking", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "isCooleSpiele", {
    get: function () {
      this._isCooleSpiele ||= this.href.includes(BasicEnvironmentGlobals.REF_COOLE_SPIELE);
      return this._isCooleSpiele;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "doUserTunnelTracking", {
    get: function () {
      return !!this.isFirstVisitOfGGS || !!this.userFromLandingPage;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "isFacebook", {
    get: function () {
      return this._networkId == __dep_class_GoodgamePartners.GoodgamePartners.NETWORK_FACEBOOK;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "userFromLandingPage", {
    get: function () {
      return this.campainVars.isInitialized && this.campainVars.isValid();
    },
    enumerable: true,
    configurable: true
  });
  BasicEnvironmentGlobals.prototype.deactivateUserTunnelTracking = function () {
    this._userTunnelActive = false;
  };
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "useVersionedFontSWF", {
    get: function () {
      return this._useVersionedFontSWF;
    },
    set: function (__s344param0) {
      this._useVersionedFontSWF = __s344param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "accountCookie", {
    get: function () {
      this._accountCookie ||= new __dep_class_AccountCookie.AccountCookie(__dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.jsVariables.journeyHash);
      return this._accountCookie;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "sessionId", {
    get: function () {
      this._sessionId ||= (Math.random() * Number.MAX_VALUE).toFixed();
      return this._sessionId;
    },
    set: function (__s350param0) {
      this._sessionId ||= __s350param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "cacheBreakerInfo", {
    get: function () {
      if (this._cacheBreakerInfo == null) {
        this._cacheBreakerInfo = new __dep_class_CachebreakerInfoObject.CachebreakerInfoObject();
      }
      return this._cacheBreakerInfo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "useLegacyFontManagement", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "useShortPaymentHashValidity", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "activeCDN", {
    get: function () {
      if (this._customCDN != __dep_exact_96cf9add7e28ef3a.CDN.None) {
        return this._customCDN;
      } else {
        return this._defaultCDN;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "customCDN", {
    set: function (__s363param0) {
      this._customCDN = __s363param0;
      this.updateBaseURLWithCDN();
    },
    enumerable: true,
    configurable: true
  });
  BasicEnvironmentGlobals.prototype.updateBaseURLWithCDN = function () {
    var __s365local0 = BasicEnvironmentGlobals.URL_PROTOCOL + "files-";
    if (!this.isTest && !this.isLocal && this.baseURL.indexOf(__s365local0) === 0) {
      var __s365local1 = BasicEnvironmentGlobals.URL_PROTOCOL + this.cdnSubDomain + this.baseURL.slice(BasicEnvironmentGlobals.URL_PROTOCOL.length + this.cdnSubDomain.length);
      __s0local0.warn("NOT IMPLEMENTED YET Implement CDN beaviour when we have deployment to S3: why should baseUrl be overridden from  " + this.baseURL + "  to " + __s365local1 + " ??? ");
    }
  };
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "fallBackCDN", {
    set: function (__s368param0) {
      this._useFallbackCDN = __s368param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "frameOneSizeInKB", {
    get: function () {
      return this._frameOneSizeInKB;
    },
    set: function (__s372param0) {
      this._frameOneSizeInKB = __s372param0;
    },
    enumerable: true,
    configurable: true
  });
  BasicEnvironmentGlobals.prototype.setVersionInformation = function (__s374param0) {};
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "versionInformation", {
    get: function () {
      return __dep_class_VersionInformation.VersionInformation.versionInstance;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "useLaggyClientEmulation", {
    get: function () {
      return !!this._urlVariables.emulateLaggyClient;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "laggyClientMinDelay", {
    get: function () {
      return this._urlVariables.laggyClientMinDelay;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "laggyClientMaxDelay", {
    get: function () {
      return this._urlVariables.laggyClientMaxDelay;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "isIdentityManagementActive", {
    get: function () {
      return this._isIdentityManagementActive;
    },
    set: function (__s386param0) {
      this._isIdentityManagementActive = __s386param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "identityManagementId", {
    get: function () {
      return this._identiyManagementID;
    },
    set: function (__s390param0) {
      this._identiyManagementID = __s390param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "identityManagmentLicenseVO", {
    get: function () {
      throw new Error("BasicEnvironmentGlobals, get identityManagmentLicenseVO: No VO provided!");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "underAgeConnectionLost", {
    get: function () {
      return this._underAgeConnectionLost;
    },
    set: function (__s396param0) {
      this._underAgeConnectionLost = __s396param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "sendUserActivityStatusToTheServer", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "useLegacySocialRegistration", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "isSSO", {
    get: function () {
      return this.pln !== "" && this.sig !== "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "trackingVerifierIsActive", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "useAnimatedGGSPreloader", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "gameSwfLoadingTime", {
    get: function () {
      return this._gameSwfLoadingTime;
    },
    set: function (__s410param0) {
      this._gameSwfLoadingTime = __s410param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "ageGateFeatureIsActive", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "previousFirstInstanceGamestate", {
    get: function () {
      return this._previousFirstInstanceGamestate;
    },
    set: function (__s416param0) {
      this._previousFirstInstanceGamestate = __s416param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "isGGSEnvironment", {
    get: function () {
      return this.href.indexOf(__dep_class_BasicConstants.BasicConstants.GGS_DOMAIN) !== -1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "baseAssetsURL", {
    get: function () {
      return this._baseAssetsURL;
    },
    set: function (__s422param0) {
      this._baseAssetsURL = __s422param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "platformId", {
    get: function () {
      if (this.urlVariables.nativeStore == __dep_class_BasicConstants.BasicConstants.NATIVE_STORE_MICROSOFT) {
        return __dep_class_BasicConstants.BasicConstants.PLATFORM_ID_MS;
      } else {
        return __dep_class_BasicConstants.BasicConstants.PLATFORM_ID_WEB;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "storeId", {
    get: function () {
      if (this.urlVariables.nativeStore == __dep_class_BasicConstants.BasicConstants.NATIVE_STORE_MICROSOFT) {
        return __dep_class_BasicConstants.BasicConstants.STORE_ID_MS;
      } else {
        return __dep_class_BasicConstants.BasicConstants.STORE_ID_WEB;
      }
    },
    enumerable: true,
    configurable: true
  });
  BasicEnvironmentGlobals.URL_PROTOCOL = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://";
  BasicEnvironmentGlobals.REF_COOLE_SPIELE = "coolespiele.com";
  return BasicEnvironmentGlobals;
}();
exports.BasicEnvironmentGlobals = __s0local1;
