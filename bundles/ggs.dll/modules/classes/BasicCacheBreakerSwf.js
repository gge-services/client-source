Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_CampaignVarsVO = require("gge-module:class_CampaignVarsVO");
var __dep_class_ClientFunnelGameStates = require("gge-module:class_ClientFunnelGameStates");
var __dep_class_ClientFunnelTrackingController = require("gge-module:class_ClientFunnelTrackingController");
var __dep_class_TrackingCache = require("gge-module:class_TrackingCache");
var __dep_class_TimezoneUtil = require("gge-module:class_TimezoneUtil");
var __dep_class_BasicConstants = require("gge-module:class_BasicConstants");
var __dep_class_EnvironmentProvider = require("gge-module:class_EnvironmentProvider");
var __dep_class_PathProvider = require("gge-module:class_PathProvider");
var __dep_class_BasicModel = require("gge-module:class_BasicModel");
var __dep_export_executeImpressionTrackingEvent = require("gge-module:export_executeImpressionTrackingEvent");
var __dep_export_detectFeatureBranchEnvironment = require("gge-module:export_detectFeatureBranchEnvironment");
var __dep_export_paramToBool = require("gge-module:export_paramToBool");
var __dep_class_EnvGlobalsHandler = require("gge-module:class_EnvGlobalsHandler");
var __dep_class_ExternalLog = require("gge-module:class_ExternalLog");
var __dep_export_WorldAssingmentErrorFactory = require("gge-module:export_WorldAssingmentErrorFactory");
var __dep_export_PageIntegrationErrorFactory = require("gge-module:export_PageIntegrationErrorFactory");
var __dep_export_CSSMouseCursor = require("gge-module:export_CSSMouseCursor");
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __dep_exact_96cf9add7e28ef3a = require("gge-module:exact_96cf9add7e28ef3a");
var __dep_exact_fb280bc24a5d99b3 = require("gge-module:exact_fb280bc24a5d99b3");
var __s0local0 = __dep_export_LoggerConfigurator.getLogger("CoreJS.BasicCacheBreakerSwf");
var __s0local1 = function () {
  function BasicCacheBreakerSwf() {
    this._accountCookieInizialized = false;
    this._networkCookieInitialized = false;
    this.initialize();
  }
  BasicCacheBreakerSwf.prototype.initialize = function () {
    var __s5local0 = this;
    this.env.sessionStartTime = Date.now();
    this.loadURLVariables().then(function () {
      __s5local0.initializeEnvironment();
      __s5local0.initializeLogger();
      __s5local0.initializeStats();
      __s5local0.initializeCookies().then(function (__s9param0) {
        __s5local0.initializeCampaignData();
        __s5local0.initializeEnvironmentProvider();
        __s5local0.initTracking();
        __s5local0.startWorldAssignment();
        __s5local0.checkFirstVisit();
      });
    });
  };
  BasicCacheBreakerSwf.prototype.checkFirstVisit = function () {
    if (!this.env.isLocal) {
      this.env.isFirstVisit = __dep_class_BasicModel.BasicModel.networkCookie.isEmpty();
    }
  };
  BasicCacheBreakerSwf.prototype.loadURLVariables = function () {
    return __dep_exact_b45c75bfe6706b06.__awaiter(this, undefined, undefined, function () {
      return __dep_exact_b45c75bfe6706b06.__generator(this, function (__s18param0) {
        switch (__s18param0.label) {
          case 0:
            return [4, this.env.urlVariables.readQueryParametersFromLandingPage()];
          case 1:
            __s18param0.sent();
            return [2];
        }
      });
    });
  };
  BasicCacheBreakerSwf.prototype.initializeEnvironment = function () {
    var __s21local0 = window.location.href;
    var __s21local1 = this.env.urlVariables.urlParams;
    this.env.isLocalHost = __dep_class_BasicConstants.BasicConstants.isLocalHost(__s21local0);
    var __s21local2 = this.env.isLocalHost || window.location.hostname.search("test") !== -1 && (window.location.pathname.search("/qa/") !== -1 || window.location.pathname.search("/development/") !== -1);
    var __s21local3 = __dep_export_paramToBool.paramToBool(__s21local1.get("forceProductionEnv"));
    this.env.isTest = this.env.isLocal = !__s21local3 && __s21local2;
    this.env.isPrivateTestServer = __s21local0.indexOf(__dep_class_BasicConstants.BasicConstants.PRIVATE_TEST_SERVER_URL) !== -1;
    this.env.isUsabilityTest = __s21local0.indexOf(__dep_class_BasicConstants.BasicConstants.USABILITYTEST_FOLDER) !== -1;
    this.env.isPreClient = __s21local0.indexOf(__dep_class_BasicConstants.BasicConstants.PRECLIENT_FOLDER) !== -1;
    this.env.isDevTest = __s21local0.indexOf(__dep_class_BasicConstants.BasicConstants.DEV_TEST_FOLDER) !== -1;
    this.env.isLocaTest = __s21local0.indexOf(__dep_class_BasicConstants.BasicConstants.LOCA_TEST_FOLDER) !== -1;
    if (__s21local0.indexOf(__dep_class_BasicConstants.BasicConstants.LIVE_TEST_FOLDER) !== -1) {
      this.env.isLiveTest = true;
    }
    this.env.isLiveBranchingEnvironment = __s21local0.indexOf(__dep_class_BasicConstants.BasicConstants.LIVE_BRANCHING_ENVIRONMENT) !== -1;
    var __s21local4 = __dep_export_detectFeatureBranchEnvironment.detectFeatureBranchEnvironment(__s21local0);
    var __s21local5 = __s21local4.isFeatureBranch;
    var __s21local6 = __s21local4.id;
    var __s21local7 = __s21local4.environment;
    this.env.isFeatureBranchEnvironment = __s21local5;
    this.env.featureBranchId = __s21local6;
    this.env.featureBranchEnvironment = __s21local7;
  };
  BasicCacheBreakerSwf.prototype.initializeLogger = function () {
    __dep_export_LoggerConfigurator.CoreLoggerConfigurator.setLevel(this.env.isTest ? __dep_export_LoggerConfigurator.LoggingLevel.DEBUG : __dep_export_LoggerConfigurator.LoggingLevel.WARN);
  };
  BasicCacheBreakerSwf.prototype.initializeStats = function () {
    if (this.env.isTest) {
      var __s26local0 = new __dep_exact_fb280bc24a5d99b3();
      document.body.appendChild(__s26local0.dom);
      createjs.Ticker.addEventListener("tick", function () {
        __s26local0.update();
      });
    }
  };
  BasicCacheBreakerSwf.prototype.initializeCookies = function () {
    return __dep_exact_b45c75bfe6706b06.__awaiter(this, undefined, undefined, function () {
      return __dep_exact_b45c75bfe6706b06.__generator(this, function (__s35param0) {
        switch (__s35param0.label) {
          case 0:
            return [4, this.env.jsVariables.readVariablesFromJavaScript()];
          case 1:
            __s35param0.sent();
            return [4, this.loadHref()];
          case 2:
            __s35param0.sent();
            return [4, this.loadReferrer()];
          case 3:
            __s35param0.sent();
            return [4, this.loadAccountCookie()];
          case 4:
            __s35param0.sent();
            return [4, this.loadNetworkCookie()];
          case 5:
            __s35param0.sent();
            return [4, this.loadDataFromIntegrationPage()];
          case 6:
            __s35param0.sent();
            return [2];
        }
      });
    });
  };
  BasicCacheBreakerSwf.prototype.loadHref = function () {
    var __s38local0 = this;
    __s0local0.info("loadHref");
    if (__dep_export_CSSMouseCursor.ExternalInterface.available) {
      return new Promise(function (__s41param0, __s41param1) {
        __dep_export_CSSMouseCursor.ExternalInterface.asyncCall("ggsGetHref").then(function (__s43param0) {
          __s0local0.info(__s43param0);
          __s38local0.env.href = __s43param0;
          __s41param0();
        }).catch(function (__s45param0) {
          __s0local0.info(__s45param0);
          __s41param0();
        });
      });
    } else {
      __s0local0.info("ExternalInterface not available...");
      return Promise.resolve();
    }
  };
  BasicCacheBreakerSwf.prototype.loadReferrer = function () {
    var __s48local0 = this;
    __s0local0.info("loadReferrer");
    if (__dep_export_CSSMouseCursor.ExternalInterface.available) {
      return new Promise(function (__s51param0, __s51param1) {
        __dep_export_CSSMouseCursor.ExternalInterface.asyncCall("ggsGetReferrer").then(function (__s53param0) {
          __s0local0.info(__s53param0);
          var __s53local0 = new URL(__s53param0);
          __s48local0.env.referrer = __s53local0.origin;
          __s51param0();
        }).catch(function (__s55param0) {
          __s0local0.info(__s55param0);
          __s51param0();
        });
      });
    } else {
      __s0local0.info("ExternalInterface not available...");
      return Promise.resolve();
    }
  };
  BasicCacheBreakerSwf.prototype.loadAccountCookie = function () {
    var __s58local0 = this;
    return new Promise(function (__s60param0) {
      __s0local0.info("loadAccountCookie");
      __s58local0.env.accountCookie.initialize().then(function (__s62param0) {
        __s0local0.info("AccountCookie loaded");
        __s58local0.env.accountCookie.newSession();
        __s58local0._accountCookieInizialized = true;
        if (__s58local0._networkCookieInitialized) {
          __s58local0.env.accountCookie.updateSessionWithNewData(__s58local0.env.buildNumberGame, __dep_class_BasicModel.BasicModel.networkCookie.clientVersion);
        }
        __s58local0.env.isFirstVisitOfGGS = __s58local0.env.accountCookie.isNewAccount;
        if (__s58local0.env.accountCookie.cdn !== __dep_exact_96cf9add7e28ef3a.CDN.None) {
          __s58local0.env.customCDN = __s58local0.env.accountCookie.cdn;
        }
        __s60param0();
      });
    });
  };
  BasicCacheBreakerSwf.prototype.loadNetworkCookie = function () {
    var __s66local0 = this;
    return new Promise(function (__s68param0) {
      __s0local0.info("loadNetworkCookie");
      __dep_class_BasicModel.BasicModel.networkCookie.initialize().then(function (__s70param0) {
        __s0local0.info("NetworkCookie loaded");
        __s66local0._networkCookieInitialized = true;
        if (__s66local0._accountCookieInizialized) {
          __s66local0.env.accountCookie.updateSessionWithNewData(__s66local0.env.buildNumberGame, __dep_class_BasicModel.BasicModel.networkCookie.clientVersion);
        }
        __s68param0();
      });
    });
  };
  BasicCacheBreakerSwf.prototype.loadDataFromIntegrationPage = function () {
    var __s73local0 = this;
    if (__dep_export_CSSMouseCursor.ExternalInterface.available) {
      return new Promise(function (__s76param0) {
        __s73local0.loadPageIntegrationCookies().then(function (__s78param0) {
          __s0local0.info("got data from integration page", __s78param0);
          __s76param0();
        }).catch(function (__s80param0) {
          __s0local0.warn("got an error reading from IntegrationPage -  we will go on with normal initialization", __s80param0);
          __s76param0();
        });
      });
    } else {
      return Promise.resolve();
    }
  };
  BasicCacheBreakerSwf.prototype.loadPageIntegrationCookies = function () {
    return new Promise(function (__s85param0, __s85param1) {
      __dep_export_CSSMouseCursor.ExternalInterface.asyncCall("ggsGetAutologinData").then(function (__s87param0) {
        var __s87local0;
        __dep_export_CSSMouseCursor.ExternalInterface.call("ggsRemoveAutologinData");
        if ((__s87local0 = __s87param0) && __s87local0.instanceId != null && __s87local0.playerId != null && __s87local0.country != null && __s87local0.gameId != null && (__s87local0.username != null && __s87local0.loginToken != null || __s87local0.facebookUID != null)) {
          __dep_class_BasicModel.BasicModel.networkCookie.instanceId = __s87param0.instanceId;
          __dep_class_BasicModel.BasicModel.networkCookie.playerId = __s87param0.playerId;
          __dep_class_BasicModel.BasicModel.networkCookie.country = __s87param0.country;
          if (__s87param0.username != null && __s87param0.loginToken != null) {
            if (__s87param0.email != null) {
              __dep_class_BasicModel.BasicModel.networkCookie.email = __s87param0.email;
            }
            __dep_class_BasicModel.BasicModel.networkCookie.saveLoginData(__s87param0.username, __s87param0.loginToken);
          } else {
            __dep_class_BasicModel.BasicModel.networkCookie.facebookUID = __s87param0.facebookUID;
            __dep_class_BasicModel.BasicModel.networkCookie.facebookAccessToken = __s87param0.facebookAccessToken || "";
          }
          __s85param0("found cookies on integration page");
        } else {
          __s85param0("no valid cookie found on integration page");
        }
      }).catch(function (__s94param0) {
        __s0local0.warn(__s94param0);
        __s85param1(__s94param0);
      });
    });
  };
  BasicCacheBreakerSwf.prototype.initializeCampaignData = function () {
    this.env.initCampaignVars(new __dep_class_CampaignVarsVO.CampaignVarsVO(this.env.urlVariables.urlParams, __dep_export_CSSMouseCursor.getQualifiedClassName(this), __dep_class_CampaignVarsVO.CampaignVarsVO.SOURCE_URL_PARAMETER));
  };
  BasicCacheBreakerSwf.prototype.initializeEnvironmentProvider = function () {
    __dep_class_EnvironmentProvider.EnvironmentProvider.instance.clear();
    __dep_class_EnvironmentProvider.EnvironmentProvider.instance.globals = this.env;
    this.addGameSpecificEnvironments();
    if (this.customEnvironments) {
      for (var __s98local0 = 0; __s98local0 < this.customEnvironments.length; __s98local0++) {
        __dep_class_EnvironmentProvider.EnvironmentProvider.instance.add(this.customEnvironments[__s98local0]);
      }
    }
    __dep_class_EnvironmentProvider.EnvironmentProvider.instance.detect();
  };
  BasicCacheBreakerSwf.prototype.initTracking = function () {
    __dep_class_TrackingCache.TrackingCache.getInstance().init(this.env.gameId, this.env.networkId, this.env.referrer, this.env.accountId, __dep_export_CSSMouseCursor.Capabilities.language);
    __dep_class_TrackingCache.TrackingCache.getInstance().useTestValidationServer(__dep_export_paramToBool.paramToBool(this.env.urlVariables.urlParams.get("validateTrackingEvents")));
  };
  BasicCacheBreakerSwf.prototype.startWorldAssignment = function () {
    var __s105local0 = this;
    __s0local0.info("start World Assignment");
    var __s105local1 = this.createWorldAssignmentConfig();
    this._worldAssignment = new __dep_exact_96cf9add7e28ef3a.WorldAssignment();
    this._worldAssignment.initialize(__s105local1);
    this._worldAssignment.start(__dep_class_ClientFunnelTrackingController.ClientFunnelTrackingController.getInstance().trackState).then(function (__s107param0) {
      return __s105local0.onWorldAssignmentComplete(__s107param0);
    }).catch(function (__s109param0) {
      return __s105local0.onWorldAssignmentFail(__s109param0);
    });
    window.ggs.worldAssignment = this._worldAssignment;
  };
  BasicCacheBreakerSwf.prototype.createWorldAssignmentConfig = function () {
    __s0local0.debug("env.isTest " + this.env.isTest);
    var __s111local0 = new __dep_exact_96cf9add7e28ef3a.WorldAssignmentGlobals();
    __s111local0.isTestEnvironment = this.env.isTest;
    __s111local0.forceToShowTestServers = this.env.urlVariables.forceToShowTestServers;
    __s111local0.useDynamicWorldAssignment = this._useDynamicWorldAssignment;
    __s111local0.geoIPUrl = this.geoIPUrl;
    __s111local0.countriesConfigUrl = __dep_class_PathProvider.PathProvider.instance.countryConfigURL;
    __s111local0.networkConfigUrl = __dep_class_PathProvider.PathProvider.instance.networkConfigURL;
    __s111local0.branchesConfigUrl = __dep_class_PathProvider.PathProvider.instance.branchesConfigURL;
    __s111local0.versionUrl = __dep_class_PathProvider.PathProvider.instance.versionURL;
    __s111local0.zoneCapacityUrl = __dep_class_PathProvider.PathProvider.instance.zoneCapacitiesConfigURL;
    __s111local0.browserLanguage = __dep_export_CSSMouseCursor.Capabilities.language;
    __s111local0.timezoneOffset = __dep_class_TimezoneUtil.TimezoneUtil.getUTCTimezoneWithoutDST();
    __s111local0.countryCodeFromNetworkCookie = __dep_class_BasicModel.BasicModel.networkCookie.country;
    __s111local0.countryCodeFromQueryString = this.env.urlVariables.country;
    __s111local0.isHydraLogin = !!this.env.suk;
    __s111local0.fakeGeoIpResponse = null;
    __s111local0.alsoDetectUnavailableCountries = false;
    __s111local0.presetInstanceId = this.env.urlVariables.presetInstanceId;
    __s111local0.instanceIdFromNetworkCookie = __dep_class_BasicModel.BasicModel.networkCookie.instanceId;
    __s111local0.zoneIdFromNetworkCookie = parseFloat(__dep_class_BasicModel.BasicModel.networkCookie.zoneId);
    __s111local0.zoneIdFromFriendInviteCode = this.env.urlVariables.friendInviteZoneId;
    __s111local0.countryCodeFromFriendInviteCode = this.env.urlVariables.friendInviteInviterCountryCode;
    return __s111local0;
  };
  BasicCacheBreakerSwf.prototype.onWorldAssignmentComplete = function (__s113param0) {
    __s0local0.info("world assignment complete");
    __dep_class_BasicModel.BasicModel.networkCookie.instanceId = __s113param0.instanceId;
    __dep_class_BasicModel.BasicModel.networkCookie.zoneId = __s113param0.zoneId.toString();
    this.env.allowedfullscreen = this._worldAssignment.facade.networkSettings.allowedFullScreen;
    this.env.defaultInstanceId = this._worldAssignment.facade.networkSettings.defaultInstanceId;
    this.env.earnCredits = this._worldAssignment.facade.networkSettings.earnCredits;
    this.env.enableFeedMessages = this._worldAssignment.facade.networkSettings.enableFeedMessages;
    this.env.enableLonelyCow = this._worldAssignment.facade.networkSettings.enableLonelyCow;
    this.env.invitefriends = this._worldAssignment.facade.networkSettings.inviteFriends;
    this.env.maxUsernameLength = this._worldAssignment.facade.networkSettings.maxUsernameLength;
    this.env.hasNetworkBuddies = this._worldAssignment.facade.networkSettings.networkBuddies;
    this.env.networknameString = this._worldAssignment.facade.networkSettings.networkName;
    this.env.requestPayByJS = this._worldAssignment.facade.networkSettings.requestPayByJS;
    this.env.showVersion = this._worldAssignment.facade.networkSettings.showVersion;
    this.env.useexternallinks = this._worldAssignment.facade.networkSettings.useExternalLinks;
    this.env.loginIsKeyBased = this._worldAssignment.facade.networkSettings.useKeyBasedLogin;
    this.env.usePayment = this._worldAssignment.facade.networkSettings.usePayment;
    __dep_class_BasicModel.BasicModel.networkCookie.clientVersion = this.env.buildNumberGame;
    __s0local0.debug("build number  " + this.env.buildNumberGame + " /  " + this.env.versionInformation.buildNumberGame);
    __s0local0.debug("semver  " + this.env.gamePackageVersion + " / " + this.env.versionInformation.versionNumberGame);
    this.loadGame();
  };
  BasicCacheBreakerSwf.prototype.onWorldAssignmentFail = function (__s115param0) {
    var __s115local0 = __s115param0.id || __dep_exact_96cf9add7e28ef3a.WorldAssignmentErrorCodes.UNKNOWN_ERROR;
    var __s115local1 = __s115param0.message;
    __s0local0.error("WorldAssignment failed: " + __s115local1 + " (error id " + __s115local0 + ")");
    __dep_class_ExternalLog.ExternalLog.logger.log(new __dep_export_WorldAssingmentErrorFactory.WorldAssingmentErrorFactory(__s115local0, __s115local1));
  };
  BasicCacheBreakerSwf.prototype.loadGame = function () {
    __s0local0.info("LOAD Game.bundle.js");
    __dep_export_executeImpressionTrackingEvent.executeImpressionTrackingEvent(this.env);
    var __s117local0 = document.createElement("script");
    var __s117local1 = document.getElementById("Game");
    if (__s117local1) {
      __s117local0.src = __s117local1.getAttribute("href");
      __s117local0.onload = this.gameLoaded.bind(this);
      document.body.appendChild(__s117local0);
    } else {
      __s0local0.error("Unable to find the HTML link element with id 'Game'.");
      __dep_class_ExternalLog.ExternalLog.logger.log(new __dep_export_PageIntegrationErrorFactory.PageIntegrationErrorFactory(__dep_export_PageIntegrationErrorFactory.PageIntegrationErrorFactory.GAME_ELEMENT_MISSING, "Unable to find the HTML link element with id 'Game'."));
    }
  };
  BasicCacheBreakerSwf.prototype.gameLoaded = function () {
    __s0local0.info("Game.bundle.js WAS LOADED");
    __dep_class_ClientFunnelTrackingController.ClientFunnelTrackingController.getInstance().trackState(__dep_class_ClientFunnelGameStates.ClientFunnelGameStates.CLIENT_START);
  };
  BasicCacheBreakerSwf.prototype.addGameSpecificEnvironments = function () {};
  Object.defineProperty(BasicCacheBreakerSwf.prototype, "env", {
    get: function () {
      return __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicCacheBreakerSwf.prototype, "geoIPUrl", {
    get: function () {
      return __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://i2c.goodgamestudios.com";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicCacheBreakerSwf.prototype, "customEnvironments", {
    get: function () {
      return [];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicCacheBreakerSwf.prototype, "useDynamicWorldAssignment", {
    set: function (__s131param0) {
      this._useDynamicWorldAssignment = __s131param0;
      this._zoneCapacityLoaded = !__s131param0;
    },
    enumerable: true,
    configurable: true
  });
  return BasicCacheBreakerSwf;
}();
exports.BasicCacheBreakerSwf = __s0local1;
