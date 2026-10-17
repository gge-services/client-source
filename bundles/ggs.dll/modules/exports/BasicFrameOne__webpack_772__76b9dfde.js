// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 772
// Export: BasicFrameOne; preserved source: modules/webpack/classes/BasicFrameOne.js
// Original canonical SHA-256: 7a3d6f5a0073cc700d4c9db97729617184c8cce56fed7a16e103d4fdd3234ab1
var __s0local3 = function (__s1param0) {
  function BasicFrameOne(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.preloaderUpdateTimer = new __dep_export_CSSMouseCursor.Timer(100);
    __s0local2.debug("BasicFrameOne constructor");
    __s3local0.worldAssignemnt = window.ggs.worldAssignment;
    __dep_class_BasicModel.BasicModel.instanceProxy.setWorldAssignementFacade(__s3local0.worldAssignemnt.facade);
    __s0local2.debug(__s3local0.worldAssignemnt);
    __s3local0.onAddedToStage();
    __dep_class_PerformanceMonitoringService.PerformanceMonitoringService.getInstance().init(__dep_exact_9fb3e1d9bd3c12ef.PerformanceMonitoringEnvTypeEnum.Web, __s3local0);
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicFrameOne, __s1param0);
  BasicFrameOne.prototype.initLocalizationModule = function () {
    this.localizationModule = new __dep_opaque_c83528567256175cfb346d7d.LocalizationModule(new __dep_opaque_c83528567256175cfb346d7d.GlobalizeTextProcessor(__dep_class_PathProvider.PathProvider.instance.cldrConfigURL, false), true);
    this.localizationModule.initialize(new __dep_opaque_c83528567256175cfb346d7d.LanguageVO("DE", "de", this.env.neverUseAbbreviations, this.env.abbreviationThreshold, this.env.fractionalDigits, this.env.leadingZero, this.env.trailingZeros), {}, null, this.env.isTest || this.env.isLocal);
    this.localizationModule.localizationService.localizeReplacements = this.env.localizeReplacements;
    return this.localizationModule.setLanguageAsync(new __dep_opaque_c83528567256175cfb346d7d.LanguageVO(this.worldAssignemnt.facade.currentCountry.ggsCountryCode, this.worldAssignemnt.facade.currentCountry.ggsLanguageCode, this.env.neverUseAbbreviations, this.env.abbreviationThreshold, this.env.fractionalDigits, this.env.leadingZero, this.env.trailingZeros), {});
  };
  BasicFrameOne.prototype.onAddedToStage = function () {
    var __s7local0 = this;
    this.stage.enableMouseOver(12);
    this.stage.snapToPixelEnabled = true;
    this.registerCommands();
    __dep_class_CommandController.CommandController.instance.executeCommand(__dep_class_BasicController.BasicController.COMMAND_INIT_LOGGER, this.stage);
    this.isAddedToStage();
    this.initLocalizationModule().then(function () {
      __s7local0.initTextRendering();
      __s7local0.setVersionInfo();
      __dep_class_ClientFunnelTrackingController.ClientFunnelTrackingController.getInstance().trackState(__dep_class_ClientFunnelGameStates.ClientFunnelGameStates.FIRST_GAME_SCREEN);
      var __s9local0 = __dep_export_CSSMouseCursor.Capabilities.os;
      __dep_export_ASupportData.SupportUtil.initForWeb(__s7local0.env.referrer, __s7local0.env.gameId, __s7local0.env.sessionId, __s7local0.env.networkId, __dep_export_CSSMouseCursor.Capabilities.version, __s9local0);
      __dep_class_BasicModel.BasicModel.basicLoaderData = new __dep_class_BasicLoaderData.BasicLoaderData();
      __dep_class_BasicModel.BasicModel.basicLoaderData.appLoader.loadingQueueElementStarted.add(__s7local0.bindFunction(__s7local0.handleNewLoadingElementStarted));
      __dep_class_BasicModel.BasicModel.basicLoaderData.appLoader.loadingQueueElementFinished.add(__s7local0.bindFunction(__s7local0.handleLoadingElementFinished));
      __dep_class_BasicFacebookConnectCommand.BasicFacebookConnectCommand.gameID = __s7local0.env.gameId;
      __s7local0.isAddedToStageDone();
      __s7local0.loadVersion();
    }).catch(function (__s11param0) {
      __s0local2.debug("Error in Localization loader: " + __s11param0);
    });
  };
  BasicFrameOne.prototype.onFlushFailedAfterPending = function () {
    __dep_class_ExternalLog.ExternalLog.logger.log(new __dep_class_CookieLogLOFactory.CookieLogLOFactory(__dep_class_CookieLogLOFactory.CookieLogLOFactory.COOKIE_PENDING_FAILED));
  };
  BasicFrameOne.prototype.registerCommands = function () {
    __dep_class_CommandController.CommandController.instance.registerCommand(__dep_class_BasicController.BasicController.COMMAND_CONNECT_CLIENT, __dep_class_BasicConnectClientCommand.BasicConnectClientCommand);
    __dep_class_CommandController.CommandController.instance.registerCommand(__dep_class_BasicController.BasicController.COMMAND_INIT_LOGGER, this.initLoggerCommandClass);
    __dep_class_CommandController.CommandController.instance.registerCommand(__dep_class_BasicController.BasicController.COMMAND_TRACK_LOGIN, __dep_class_BasicSendClientLoginTrackingCommand.BasicSendClientLoginTrackingCommand);
    __dep_class_CommandController.CommandController.instance.registerCommand(__dep_class_BasicController.BasicController.COMMAND_RELOAD_NETWORK, __dep_class_BasicReloadNetworkCommand.BasicReloadNetworkCommand);
    __dep_class_CommandController.CommandController.instance.registerCommand(__dep_class_BasicController.BasicController.COMMAND_UPDATE_NETWORK, __dep_class_BasicNetworkUpdateCommand.BasicNetworkUpdateCommand);
    __dep_class_CommandController.CommandController.instance.registerCommand(__dep_class_BasicController.BasicController.COMMAND_IDENTITY_MANAGEMENT, __dep_class_BasicIdentityManagementCommand.BasicIdentityManagementCommand);
    __dep_class_CommandController.CommandController.instance.registerCommand(__dep_class_BasicController.BasicController.COMMAND_HANDLE_IDENTITY_MANAGEMENT_ERROR, __dep_class_BasicHandleIdentityManagementErrorCommand.BasicHandleIdentityManagementErrorCommand);
    __dep_class_CommandController.CommandController.instance.registerCommand(__dep_class_BasicController.BasicController.COMMAND_CHECK_AGE_GATE_ACTIVITY, __dep_class_BasicCheckAgeGateActivityCommand.BasicCheckAgeGateActivityCommand);
    __dep_class_CommandController.CommandController.instance.registerCommand(__dep_class_BasicController.BasicController.COMMAND_VALIDATE_AGE, __dep_class_BasicValidateAgeCommand.BasicValidateAgeCommand);
    __dep_class_CommandController.CommandController.instance.registerCommand(__dep_class_BasicController.BasicController.COMMAND_TRACK_REGISTRATION_DATA, __dep_class_BasicTrackRegistrationDataCommand.BasicTrackRegistrationDataCommand);
    __dep_class_CommandController.CommandController.instance.registerCommand(__dep_class_BasicController.BasicController.COMMAND_TRACK_PROFILING, __dep_class_BasicProfilingTrackingCommand.BasicProfilingTrackingCommand);
    __dep_class_CommandController.CommandController.instance.registerCommand(__dep_class_BasicController.BasicController.COMMAND_TRACK_WORLD_ASSIGNMENT, __dep_class_BasicWorldAssignmentTrackingCommand.BasicWorldAssignmentTrackingCommand, null, true);
    __dep_class_CommandController.CommandController.instance.registerCommand(__dep_class_BasicController.BasicController.COMMAND_TRACK_CONNECTION_TRACKING_EVENT, __dep_class_BasicConnectionTrackingCommand.BasicConnectionTrackingCommand);
    __dep_class_CommandController.CommandController.instance.registerCommand(__dep_class_BasicController.BasicController.COMMAND_TRACK_GAME_PAYMENT_SHOP_CLICK_EVENT, __dep_class_BasicPaymentShopClickTrackingCommand.BasicPaymentShopClickTrackingCommand);
    __dep_class_CommandController.CommandController.instance.registerCommand(__dep_class_BasicController.BasicController.COMMAND_TRACK_DESKTOP_DEVICE_INFORMATION_EVENT, __dep_class_BasicDesktopDeviceInformationTrackingCommand.BasicDesktopDeviceInformationTrackingCommand);
    __dep_class_CommandController.CommandController.instance.registerCommand(__dep_class_BasicController.BasicController.COMMAND_TRACK_BROWSER_STATE_EVENT, __dep_class_BrowserStateFullscreenTrackingCommand.BrowserStateFullscreenTrackingCommand);
    __dep_class_CommandController.CommandController.instance.registerCommand(__dep_class_BasicController.BasicController.COMMAND_VERIFY_TRACKING, __dep_class_BasicVerifyTrackingCommand.BasicVerifyTrackingCommand);
    __dep_class_CommandController.CommandController.instance.registerCommand(__dep_class_BasicController.BasicController.COMMAND_TRACK_INVITATION, __dep_class_BasicInvitationTrackingCommand.BasicInvitationTrackingCommand);
    __dep_class_CommandController.CommandController.instance.registerCommand(__dep_class_BasicController.BasicController.COMMAND_TRACK_FACEBOOK_CONNECTION, __dep_class_BasicFacebookConnectionTrackingCommand.BasicFacebookConnectionTrackingCommand);
    __dep_class_CommandController.CommandController.instance.registerCommand(__dep_class_BasicController.BasicController.COMMAND_TRACK_FACEBOOK_USERDATA, __dep_class_BasicFacebookUserDataTrackingCommand.BasicFacebookUserDataTrackingCommand);
    __dep_class_CommandController.CommandController.instance.registerCommand(__dep_class_BasicController.BasicController.COMMAND_TRACK_FACEBOOK_EMAIL, __dep_export_BasicFacebookUserEmailTrackingCommand.BasicFacebookUserEmailTrackingCommand);
    __dep_class_CommandController.CommandController.instance.registerCommand(__dep_class_BasicController.BasicController.COMMAND_CHANGE_LANGUAGE, __dep_class_BasicChangeLanguageCommand.BasicChangeLanguageCommand);
    __dep_class_CommandController.CommandController.instance.registerCommand(__dep_class_BasicController.BasicController.COMMAND_REPORT_SURVEY, __dep_class_BasicReportSurveyCommand.BasicReportSurveyCommand);
    __dep_class_CommandController.CommandController.instance.registerCommand(__dep_class_BasicController.BasicController.REQUEST_SOCIAL_LOGIN_KEYS, __dep_class_BasicRequestSocialLoginKeysCommand.BasicRequestSocialLoginKeysCommand);
    __dep_class_CommandController.CommandController.instance.registerCommand(__dep_class_BasicController.BasicController.CHOOSE_LOGIN_METHOD, __dep_class_ChooseLoginMethodCommand.ChooseLoginMethodCommand);
    __dep_class_CommandController.CommandController.instance.registerCommand(__dep_class_BasicController.BasicController.COMMAND_INIT_ZONE_CAPACITY, __dep_class_BasicInitZoneCapacityCommand.BasicInitZoneCapacityCommand);
    __dep_class_CommandController.CommandController.instance.registerCommand(__dep_class_BasicController.BasicController.GTM_CALL_GGS_TRACK_EVENT, __dep_class_GGSTrackEventCommand.GGSTrackEventCommand);
    __dep_class_CommandController.CommandController.instance.registerCommand(__dep_class_BasicController.BasicController.GAMESIGHT_CALL_GGS_TRACK_EVENT, __dep_export_GamesightTrackEventCommand.GamesightTrackEventCommand);
    __dep_class_CommandController.CommandController.instance.registerCommand(__dep_class_BasicController.BasicController.COMMAND_RELOAD_PAGE_WITH_ZONE_ID, __dep_class_BasicReloadPageWithZoneIdCommand.BasicReloadPageWithZoneIdCommand);
    this.initPreClientCommands();
  };
  BasicFrameOne.prototype.initPreClientCommands = function () {
    __dep_class_CommandController.CommandController.instance.registerCommand(__dep_class_BasicController.BasicController.COMMAND_FACEBOOK_INITIALIZE, __dep_class_BasicInitializeFacebookConnectCommand.BasicInitializeFacebookConnectCommand);
  };
  BasicFrameOne.prototype.setVersionInfo = function () {
    var __s19local0 = __dep_class_VersionInformation.VersionInformation.versionInstance;
    this.env.setVersionInformation(__s19local0);
  };
  BasicFrameOne.prototype.initTextRendering = function () {
    __dep_class_BasicModel.BasicModel.languageData = new __dep_class_BasicLanguageData.BasicLanguageData(__dep_class_VersionInformation.VersionInformation.versionInstance, __dep_class_PathProvider.PathProvider.instance, this.localizationModule);
    var __s21local0 = __dep_class_GoodgameTextFieldManager.GoodgameTextFieldManager.getInstance();
    __s21local0.languageData = __dep_class_BasicModel.BasicModel.languageData;
    this.initTextFieldBehaviours();
    this.initTextFieldFactory(__s21local0);
  };
  BasicFrameOne.prototype.initTextFieldBehaviours = function () {
    var __s23local0 = __dep_class_GoodgameTextFieldManager.GoodgameTextFieldManager.getInstance();
    __s23local0.mouseOverBehaviour = new __dep_class_BasicGGSTextFieldMouseOverBehaviour.BasicGGSTextFieldMouseOverBehaviour();
    __s23local0.mouseOutBehaviour = new __dep_class_BasicGGSTextFieldMouseOutBehaviour.BasicGGSTextFieldMouseOutBehaviour();
  };
  BasicFrameOne.prototype.initTextFieldFactory = function (__s25param0) {
    __s25param0.textFieldFactory = new __dep_class_GoodgameAdvancedTextFieldFactory.GoodgameAdvancedTextFieldFactory();
  };
  BasicFrameOne.prototype.isAddedToStage = function () {};
  BasicFrameOne.prototype.isAddedToStageDone = function () {};
  BasicFrameOne.prototype.loadVersion = function () {
    this.env.fallBackCDN = true;
    __dep_class_ConfigFilesVersionsModel.ConfigFilesVersionsModel.instance.loadVersionJson(__dep_class_PathProvider.PathProvider.instance.versionURL).then(this.bindFunction(this.onVersionsInitialized)).catch(function (__s33param0) {
      return __s0local2.warn("loadingVersionJSON failed " + __s33param0);
    });
  };
  BasicFrameOne.prototype.onVersionsInitialized = function () {
    this.env.fallBackCDN = false;
    this.loadItemVersionXML();
  };
  BasicFrameOne.prototype.loadItemVersionXML = function () {
    if (this.env.useItemXML) {
      __dep_class_BasicModel.BasicModel.basicLoaderData.appLoader.addXMLLoader(__dep_class_BasicConstants.BasicConstants.ITEM_XML_VERSION, __dep_class_PathProvider.PathProvider.instance.itemsVersionURL, __dep_export_CSSMouseCursor.URLLoaderDataFormat.TEXT, this.bindFunction(this.onVersionPropertiesLoaded));
    } else {
      this.onVersionPropertiesLoaded();
    }
  };
  BasicFrameOne.prototype.onVersionPropertiesLoaded = function () {
    this.createView();
    if (this.env.useItemXML) {
      var __s41local0 = __dep_class_BasicModel.BasicModel.basicLoaderData.appLoader.getLoaderData(__dep_class_BasicConstants.BasicConstants.ITEM_XML_VERSION).toString();
      __dep_class_BasicVersions.BasicVersions.itemXMLVersion = __s41local0.substr(__s41local0.indexOf("=") + 1).trim();
    }
    this.onLanguagePropertiesLoaded();
  };
  BasicFrameOne.prototype.onViewLoaded = function () {
    this.preloaderView.showProgressBar();
    this.addChildAt(this.preloaderView.disp, 0);
    this.preloaderUpdateTimer.addEventListener(__s0local1.TIMER, this.bindFunction(this.onUpdatePreloaderView));
    this.preloaderUpdateTimer.start();
    this.preloaderView.show();
    this.preloaderView.showVersion();
    this.preloaderView.updatePosition();
    this.preloaderView.setProgressbarUpdateMethod(true);
    this.showFirstScreen();
    if (this.env.useItemXML) {
      this.loadXMLs();
    } else {
      this.loadAssets();
    }
  };
  BasicFrameOne.prototype.onLanguagePropertiesLoaded = function () {
    this.loadLanguage();
  };
  BasicFrameOne.prototype.loadLanguage = function () {
    __dep_class_CommandController.CommandController.instance.executeCommand(__dep_class_BasicController.BasicController.COMMAND_CHECK_AGE_GATE_ACTIVITY, this.worldAssignemnt.facade.currentCountry);
    __dep_class_BasicModel.BasicModel.languageData.addEventListener(__dep_class_LanguageDataEvent.LanguageDataEvent.XML_LOAD_COMPLETE, this.bindFunction(this.onLanguageXMLComplete));
    this.env.currentCountryLanguageCode = this.worldAssignemnt.facade.currentCountry.ggsLanguageCode;
    this.env.currentCountryLanguageVersion = __dep_class_ConfigFilesVersionsModel.ConfigFilesVersionsModel.instance.languageVersion(this.env.currentCountryLanguageCode);
    __dep_class_BasicModel.BasicModel.languageData.loadLanguage(undefined, this.env.currentCountryLanguageCode);
    __dep_class_ClientFunnelTrackingController.ClientFunnelTrackingController.getInstance().trackState(__dep_class_ClientFunnelGameStates.ClientFunnelGameStates.LANG_XML_START);
  };
  BasicFrameOne.prototype.onLanguageXMLComplete = function (__s52param0) {
    __dep_class_ClientFunnelTrackingController.ClientFunnelTrackingController.getInstance().trackState(__dep_class_ClientFunnelGameStates.ClientFunnelGameStates.LANG_XML_END);
    __dep_class_BasicModel.BasicModel.languageData.removeEventListener(__dep_class_LanguageDataEvent.LanguageDataEvent.XML_LOAD_COMPLETE, this.bindFunction(this.onLanguageXMLComplete));
    __dep_class_BasicLanguageFontManager.BasicLanguageFontManager.getInstance().addEventListener(__dep_class_LanguageDataEvent.LanguageDataEvent.FONT_LOAD_COMPLETE, this.bindFunction(this.onFontsLoaded));
    __dep_class_BasicLanguageFontManager.BasicLanguageFontManager.getInstance().loadFontsByLanguage();
  };
  BasicFrameOne.prototype.onFontsLoaded = function (__s54param0) {
    __s0local2.debug("onFontsLoaded ", "::", __s54param0);
    __dep_class_BasicLanguageFontManager.BasicLanguageFontManager.getInstance().removeEventListener(__dep_class_LanguageDataEvent.LanguageDataEvent.FONT_LOAD_COMPLETE, this.bindFunction(this.onFontsLoaded));
    __s0local2.debug("useLegacyFontManagement -> Update all GoodgameTextFields");
    __dep_class_GoodgameTextFieldManager.GoodgameTextFieldManager.getInstance().updateTextInAllTextFields();
  };
  BasicFrameOne.prototype.showFirstScreen = function () {};
  BasicFrameOne.prototype.initFirstVisitScreen = function (__s58param0) {
    this.firstVisitSreen = __s58param0;
    this.firstVisitSreen.addEventListener(__dep_class_BasicFirstVisitEvent.BasicFirstVisitEvent.AVATARCREATION_FINISHED, this.bindFunction(this.onFirstVisitAvatarCreationFinished));
    this.addChild(this.firstVisitSreen.disp);
    this.setChildIndex(this.preloaderView.disp, 0);
    this.preloaderView.hideProgressBar();
    this.additionalFirstVisitScreenInitalization(__s58param0);
  };
  BasicFrameOne.prototype.additionalFirstVisitScreenInitalization = function (__s60param0) {};
  BasicFrameOne.prototype.onFirstVisitAvatarCreationFinished = function (__s62param0) {
    this.removeChild(this.firstVisitSreen.disp);
    this.firstVisitSreen.removeEventListener(__dep_class_BasicFirstVisitEvent.BasicFirstVisitEvent.AVATARCREATION_FINISHED, this.bindFunction(this.onFirstVisitAvatarCreationFinished));
    this.firstVisitSreen = null;
    this.preloaderView.showProgressBar();
  };
  BasicFrameOne.prototype.loadingQueueAppLoaderFinished = function (__s64param0 = "") {
    this.preloaderUpdateTimer.stop();
    this.preloaderUpdateTimer.removeEventListener(__s0local1.TIMER, this.bindFunction(this.onUpdatePreloaderView));
    if (this.preloaderView) {
      this.preloaderView.setProgressbarUpdateMethod(false);
    }
    __dep_class_ClientFunnelTrackingController.ClientFunnelTrackingController.getInstance().trackState(__dep_class_ClientFunnelGameStates.ClientFunnelGameStates.GAME_SWF_LOADED);
    this.checkForFirstVisitScreen();
  };
  BasicFrameOne.prototype.checkForFirstVisitScreen = function () {
    this.firstVisitSreen;
  };
  BasicFrameOne.prototype.isCookieEmpty = function (__s69param0) {
    for (var __s69local0 in __s69param0.data) {
      return false;
    }
    return true;
  };
  BasicFrameOne.prototype.createView = function () {};
  Object.defineProperty(BasicFrameOne.prototype, "mainGameClassName", {
    get: function () {
      return "com.goodgamestudios.basic.BasicGame";
    },
    enumerable: true,
    configurable: true
  });
  BasicFrameOne.prototype.onBulkLoaderProgress = function (__s77param0) {
    this.preloaderView.updateLoadingProgress(__s77param0.loaded / __s77param0.total * 100);
  };
  BasicFrameOne.prototype.handleNewLoadingElementStarted = function (__s79param0, __s79param1) {
    if (this.preloaderView && this.preloaderView.disp && this.preloaderView.disp.visible) {
      var __s79local0 = undefined;
      if (__s79param0 == __dep_class_BasicModel.BasicModel.basicLoaderData.appLoader.loaderID) {
        __s79local0 = __dep_class_BasicModel.BasicModel.basicLoaderData.appLoader.getLoaderObject(__s79param1);
      }
      if (__s79local0) {
        if (__s79local0.totalBytes > __dep_class_BasicConstants.BasicConstants.MAX_FILESIZE_REALTIMELOADING) {
          this.preloaderUpdateTimer.stop();
          this.preloaderUpdateTimer.removeEventListener(__s0local1.TIMER, this.bindFunction(this.onUpdatePreloaderView));
          this.preloaderView.startProgressBar();
          this.preloaderView.setProgressbarUpdateMethod(false);
        } else {
          this.preloaderView.stopProgressBar();
          if (!this.preloaderUpdateTimer.running) {
            this.preloaderUpdateTimer.addEventListener(__s0local1.TIMER, this.bindFunction(this.onUpdatePreloaderView));
            this.preloaderUpdateTimer.start();
          }
          this.preloaderView.setProgressbarUpdateMethod(true);
          this.preloaderView.updateLoadingText(__s79param1);
        }
      }
    }
  };
  BasicFrameOne.prototype.onUpdatePreloaderView = function (__s87param0) {
    if (__dep_class_BasicModel.BasicModel.basicLoaderData.appLoader.isLoading || __dep_class_BasicModel.BasicModel.basicLoaderData.assetLoader.isRunning) {
      var __s87local0 = 0;
      if (__dep_class_BasicModel.BasicModel.basicLoaderData.appLoader.isLoading) {
        __s87local0 = __dep_class_BasicModel.BasicModel.basicLoaderData.appLoader.getProgressOfActualSubloader();
      }
      if (this.preloaderView && this.preloaderView.disp && this.preloaderView.disp.visible && !this.preloaderView.progressBarEnabled) {
        this.preloaderView.updateLoadingProgress(Number(__s87local0 * 100));
      }
    }
  };
  BasicFrameOne.prototype.handleLoadingElementFinished = function (__s92param0, __s92param1) {
    if (this.preloaderView) {
      this.preloaderView.updateLoadingProgress(100);
    }
  };
  BasicFrameOne.prototype.goToSecondFrame = function (__s95param0 = null) {
    var __s95local0 = document.getElementById("loading");
    if (__s95local0) {
      __s95local0.remove();
    }
    document.getElementsByTagName("body")[0].style.backgroundImage = "none";
    var __s95local1 = this.getMainGameClass();
    if (__s95local1) {
      __dep_class_ClientFunnelTrackingController.ClientFunnelTrackingController.getInstance().trackState(__dep_class_ClientFunnelGameStates.ClientFunnelGameStates.GAME_SWF_LOADED);
      var __s95local2 = __dep_class_TrackingCache.TrackingCache.getInstance().getEvent(__dep_class_TrackingEventIds.TrackingEventIds.CONNECTION);
      __dep_class_BasicModel.BasicModel.basicLoaderData.downloadRateFrameOne = __dep_class_BasicModel.BasicModel.basicLoaderData.appLoader.calculateDataRate();
      if (__s95local2 != null) {
        __s95local2.downloadRate = __dep_class_BasicModel.BasicModel.basicLoaderData.downloadRateFrameOne;
      } else {
        __s0local2.error("cannot retrive ConnectionTrackingEvent");
      }
      var __s95local3 = new __s95local1(this.preloaderView);
      this.addChild(__s95local3);
      __s95local3.onAddedToStage();
    }
  };
  BasicFrameOne.prototype.getMainGameClass = function () {
    return null;
  };
  BasicFrameOne.prototype.loadXMLs = function () {
    __dep_class_ClientFunnelTrackingController.ClientFunnelTrackingController.getInstance().trackState(__dep_class_ClientFunnelGameStates.ClientFunnelGameStates.ITEM_XML_START);
    __dep_class_BasicModel.BasicModel.basicLoaderData.appLoader.addXMLLoader(__dep_class_BasicConstants.BasicConstants.ITEM_XML_LOADER, __dep_class_PathProvider.PathProvider.instance.itemsXMLURL, __dep_export_CSSMouseCursor.URLLoaderDataFormat.TEXT, this.bindFunction(this.itemXMLComplete));
  };
  BasicFrameOne.prototype.itemXMLComplete = function () {
    __dep_class_ClientFunnelTrackingController.ClientFunnelTrackingController.getInstance().trackState(__dep_class_ClientFunnelGameStates.ClientFunnelGameStates.ITEM_XML_END);
    this.goToSecondFrame();
  };
  BasicFrameOne.prototype.loadAssets = function () {
    __dep_class_BasicModel.BasicModel.basicLoaderData.assetLoader.addEventListener(__dep_class_BulkLoader.BulkLoader.COMPLETE, this.bindFunction(this.handleAssetLoaderComplete));
    __dep_class_ClientFunnelTrackingController.ClientFunnelTrackingController.getInstance().trackState(__dep_class_ClientFunnelGameStates.ClientFunnelGameStates.ASSETS_START);
    this.loadAdditionalAssets();
    for (var __s107local0 = 1; __s107local0 <= this.env.numOfItemLibs; __s107local0++) {
      __dep_class_BasicModel.BasicModel.basicLoaderData.assetLoader.add(__dep_class_PathProvider.PathProvider.instance.getItemSWFURL(__s107local0), {
        id: "itemLib" + __s107local0
      });
    }
    __dep_class_BasicModel.BasicModel.basicLoaderData.assetLoader.start();
  };
  BasicFrameOne.prototype.handleAssetLoaderComplete = function (__s111param0) {
    __dep_class_BasicModel.BasicModel.basicLoaderData.assetLoader.removeEventListener(__dep_class_BulkLoader.BulkLoader.COMPLETE, this.bindFunction(this.handleAssetLoaderComplete));
    __dep_class_BasicModel.BasicModel.basicLoaderData.assetLoader.removeEventListener(__dep_class_BulkLoader.BulkLoader.PROGRESS, this.bindFunction(this.onBulkLoaderProgress));
    __dep_class_ClientFunnelTrackingController.ClientFunnelTrackingController.getInstance().trackState(__dep_class_ClientFunnelGameStates.ClientFunnelGameStates.ASSETS_END);
    __dep_class_BasicModel.BasicModel.basicLoaderData.dispatchEvent(new __dep_class_BasicAssetsEvent.BasicAssetsEvent(__dep_class_BasicAssetsEvent.BasicAssetsEvent.ASSETS_COMPLETE));
    if (this.preloaderView) {
      this.preloaderView.setProgressbarUpdateMethod(false);
    }
  };
  BasicFrameOne.prototype.loadAdditionalAssets = function () {};
  BasicFrameOne.prototype.onExitFrame = function (__s116param0) {};
  Object.defineProperty(BasicFrameOne.prototype, "env", {
    get: function () {
      return __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  BasicFrameOne.VERSION = "$Id$";
  BasicFrameOne.NAME = "BasicFrameOne";
  return BasicFrameOne;
}(__s0local0);
exports.BasicFrameOne = __s0local3;
