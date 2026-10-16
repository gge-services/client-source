Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_84d43d9c404bd4d8 = require("gge-module:exact_84d43d9c404bd4d8");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_4 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_5 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_6 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_7 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_8 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_9 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_10 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_11 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_12 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_13 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_14 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_c549e43d1112dfff = require("gge-module:exact_c549e43d1112dfff");
var __dep_exact_c549e43d1112dfff_1 = require("gge-module:exact_c549e43d1112dfff");
var __dep_exact_c549e43d1112dfff_2 = require("gge-module:exact_c549e43d1112dfff");
var __dep_export_CastleGame = require("gge-module:export_CastleGame");
var __dep_export_ClientConstReCaptcha = require("gge-module:export_ClientConstReCaptcha");
var __dep_export_CastleInitLoggerCommand = require("gge-module:export_CastleInitLoggerCommand");
var __dep_export_CastleInitServerListCommand = require("gge-module:export_CastleInitServerListCommand");
var __dep_export_AssetUrlConvertor = require("gge-module:export_AssetUrlConvertor");
var __dep_export_HelpshiftHelper = require("gge-module:export_HelpshiftHelper");
var __dep_export_fontConfigResolver = require("gge-module:export_fontConfigResolver");
var __dep_export_CastleStartscreenComponent = require("gge-module:export_CastleStartscreenComponent");
var __dep_export_CastleTextFieldFactory = require("gge-module:export_CastleTextFieldFactory");
var __dep_export_ModernStartscreenComponent = require("gge-module:export_ModernStartscreenComponent");
var __dep_export_PoolManager = require("gge-module:export_PoolManager");
var __dep_export_StartscreenHelper = require("gge-module:export_StartscreenHelper");
window.ggs.fontConfigResolver = __dep_export_fontConfigResolver.fontConfigResolver;
window.AssetURL = new __dep_export_AssetUrlConvertor.AssetUrlConvertor();
window.assetsPool = __dep_exact_9e901e8e2483a22f_13.assetsPool;
window.mapObjectsPool = __dep_export_PoolManager.mapObjectsPool;
var __s0local0 = function (__s1param0) {
  function CastleFrameOne() {
    var __s3local0 = __s1param0.call(this, "Castle") || this;
    __s3local0.name = __dep_exact_81dacdf05bd32292.GAME_STAGE;
    __s3local0.stage.snapToPixelEnabled = true;
    __s3local0.stage.enableDOMEvents(false);
    __s3local0.stage.canvas.width = window.innerWidth;
    __s3local0.stage.canvas.height = window.innerHeight;
    createjs.precacheModules(require);
    if (__dep_exact_9e901e8e2483a22f_8.EnvGlobalsHandler.globals.isTest) {
      __dep_exact_c549e43d1112dfff_1.cascadeLogLevelFor("CoreJS", __dep_exact_c549e43d1112dfff.LoggingLevel.DEBUG);
      __dep_exact_c549e43d1112dfff_1.cascadeLogLevelFor("CreateJs", __dep_exact_c549e43d1112dfff.LoggingLevel.NONE);
      __dep_exact_c549e43d1112dfff_1.cascadeLogLevelFor("WorldAssignment", __dep_exact_c549e43d1112dfff.LoggingLevel.DEBUG);
      __dep_exact_c549e43d1112dfff_1.cascadeLogLevelFor("CreateJs.TextFields", __dep_exact_c549e43d1112dfff.LoggingLevel.NONE);
      __dep_exact_c549e43d1112dfff_1.cascadeLogLevelFor("CoreJS.TextFields", __dep_exact_c549e43d1112dfff.LoggingLevel.NONE);
      __dep_exact_c549e43d1112dfff_1.cascadeLogLevelFor("TextFields", __dep_exact_c549e43d1112dfff.LoggingLevel.NONE);
      __dep_exact_c549e43d1112dfff_1.cascadeLogLevelFor("undefined", __dep_exact_c549e43d1112dfff.LoggingLevel.NONE);
      __dep_exact_c549e43d1112dfff_1.cascadeLogLevelFor("CoreJS.PerformanceMonitoring", __dep_exact_c549e43d1112dfff.LoggingLevel.DEBUG);
      __dep_exact_c549e43d1112dfff_2.getLogger("CoreJS.BasicToolTipManager").setLevel(__dep_exact_c549e43d1112dfff.LoggingLevel.NONE);
      __dep_exact_c549e43d1112dfff_2.getLogger("CoreJS.TextFields.BasicLanguageFontManager").setLevel(__dep_exact_c549e43d1112dfff.LoggingLevel.DEBUG);
      __dep_exact_c549e43d1112dfff_2.getLogger("CreateJs.ExternalInterface").setLevel(__dep_exact_c549e43d1112dfff.LoggingLevel.DEBUG);
      __dep_exact_c549e43d1112dfff_2.getLogger("CreateJs.StageExtension").setLevel(__dep_exact_c549e43d1112dfff.LoggingLevel.DEBUG);
      __dep_exact_c549e43d1112dfff_2.getLogger("CoreJS.ExternalInterface").setLevel(__dep_exact_c549e43d1112dfff.LoggingLevel.DEBUG);
      __dep_exact_c549e43d1112dfff_2.getLogger("GoodgameTextField").setLevel(__dep_exact_c549e43d1112dfff.LoggingLevel.NONE);
      __dep_exact_c549e43d1112dfff_2.getLogger("getDefinitionByName").setLevel(__dep_exact_c549e43d1112dfff.LoggingLevel.NONE);
      __dep_exact_c549e43d1112dfff_2.getLogger("CastleFrameOne").setLevel(__dep_exact_c549e43d1112dfff.LoggingLevel.DEBUG);
      __dep_exact_c549e43d1112dfff_2.getLogger("CastleGame").setLevel(__dep_exact_c549e43d1112dfff.LoggingLevel.DEBUG);
      __dep_exact_c549e43d1112dfff_2.getLogger("BasicFrameOne").setLevel(__dep_exact_c549e43d1112dfff.LoggingLevel.DEBUG);
      __dep_exact_c549e43d1112dfff_2.getLogger("L10N").setLevel(__dep_exact_c549e43d1112dfff.LoggingLevel.DEBUG);
      __dep_exact_c549e43d1112dfff_2.getLogger("DEPRECATED").setLevel(__dep_exact_c549e43d1112dfff.LoggingLevel.DEBUG);
      __dep_exact_c549e43d1112dfff_2.getLogger(__dep_exact_9e901e8e2483a22f_11.SMARTFOX_CLIENT).setLevel(__dep_exact_c549e43d1112dfff.LoggingLevel.DEBUG);
      __dep_exact_c549e43d1112dfff_2.getLogger("Connection").setLevel(__dep_exact_c549e43d1112dfff.LoggingLevel.DEBUG);
      __dep_exact_c549e43d1112dfff_2.getLogger("bugsnag").setLevel(__dep_exact_c549e43d1112dfff.LoggingLevel.NONE);
    }
    if (__dep_export_StartscreenHelper.StartscreenHelper.usesModernStartscreen()) {
      var __s3local1 = __dep_export_ClientConstReCaptcha.ClientConstReCaptcha.getSiteKey();
      var __s3local2 = `https://www.google.com/recaptcha/api.js?render=${__s3local1}`;
      var __s3local3 = document.createElement("script");
      __s3local3.setAttribute("src", __s3local2);
      __s3local3.setAttribute("type", "text/javascript");
      document.head.appendChild(__s3local3);
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleFrameOne, __s1param0);
  Object.defineProperty(CastleFrameOne.prototype, "mainGameClassName", {
    get: function () {
      return "com.goodgamestudios.castle.CastleGame";
    },
    set: function (__s9param0) {
      Object.getOwnPropertyDescriptor(__dep_exact_9e901e8e2483a22f_2.BasicFrameOne.prototype, "mainGameClassName").set.call(this, __s9param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleFrameOne.prototype.configureFontManager = function () {};
  CastleFrameOne.prototype.isAddedToStageDone = function () {
    __dep_exact_9e901e8e2483a22f_9.GoodgameBitmapEngine.instance.init(this.stage, false, __dep_exact_9e901e8e2483a22f_4.BasicModel.basicLoaderData.assetLoader);
    __dep_exact_9e901e8e2483a22f_10.PathProvider.instance.itemVersions = __dep_exact_84d43d9c404bd4d8.ItemVersions.instance;
    __dep_exact_9e901e8e2483a22f_10.PathProvider.instance.interfaceVersions = __dep_exact_84d43d9c404bd4d8.InterfaceVersions.instance;
    __dep_exact_9e901e8e2483a22f_12.UncaughtErrorEventHandler.init(this.loaderInfo, true);
    this.patchCanvasDrawImage();
    __s1param0.prototype.isAddedToStageDone.call(this);
  };
  CastleFrameOne.prototype.patchCanvasDrawImage = function () {
    try {
      var __s15local0 = CanvasRenderingContext2D.prototype.drawImage;
      CanvasRenderingContext2D.prototype.drawImage = function () {
        var __s18local0 = [];
        for (var __s18local1 = 0; __s18local1 < arguments.length; __s18local1++) {
          __s18local0[__s18local1] = arguments[__s18local1];
        }
        try {
          var __s18local2 = __s18local0[0];
          if (__s18local2 instanceof HTMLImageElement && (!__s18local2.complete || __s18local2.naturalWidth === 0)) {
            console.warn("Attempted to draw broken/unloaded image, skipping:", __s18local2.src);
            return;
          }
          __s15local0.apply(this, __s18local0);
        } catch (__s24local0) {
          console.warn("Error drawing image on canvas:", __s24local0);
        }
      };
    } catch (__s26local0) {
      console.warn("Could not patch canvas drawImage:", __s26local0);
    }
  };
  CastleFrameOne.prototype.initModule = function () {};
  Object.defineProperty(CastleFrameOne.prototype, "initLoggerCommandClass", {
    get: function () {
      return __dep_export_CastleInitLoggerCommand.CastleInitLoggerCommand;
    },
    set: function (__s32param0) {
      Object.getOwnPropertyDescriptor(__dep_exact_9e901e8e2483a22f_2.BasicFrameOne.prototype, "initLoggerCommandClass").set.call(this, __s32param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleFrameOne.prototype.initFontModel = function () {};
  CastleFrameOne.prototype.initTextFieldFactory = function (__s36param0) {
    __s36param0.textFieldFactory = new __dep_export_CastleTextFieldFactory.CastleTextFieldFactory();
  };
  CastleFrameOne.prototype.initPreClientCommands = function () {
    __dep_exact_9e901e8e2483a22f_7.CommandController.instance.registerCommand(__dep_exact_9e901e8e2483a22f_1.BasicController.COMMAND_INIT_SERVERLIST, __dep_export_CastleInitServerListCommand.CastleInitServerListCommand);
    __dep_exact_9e901e8e2483a22f_7.CommandController.instance.registerCommand(__dep_exact_9e901e8e2483a22f_1.BasicController.COMMAND_FACEBOOK_INITIALIZE, __dep_exact_9e901e8e2483a22f_3.BasicInitializeFacebookConnectCommand);
  };
  CastleFrameOne.prototype.loadAdditionalAssets = function () {
    __dep_exact_9e901e8e2483a22f_6.ClientFunnelTrackingController.getInstance().trackState(__dep_exact_9e901e8e2483a22f_5.ClientFunnelGameStates.ASSETS_START);
    __dep_exact_9e901e8e2483a22f_14.loadAssets(["Castlewall"], __dep_exact_9e901e8e2483a22f.AssetLoadingFlowType.SEQUENTIAL);
    __dep_exact_9e901e8e2483a22f_14.loadAssets(["EmpireWalkmaps", "QuestGiverSmall_5", "QuestGiverBig_5", "Equipment_BG", "FullSizeFemaleTutorialCharacter"], __dep_exact_9e901e8e2483a22f.AssetLoadingFlowType.PARALLEL);
  };
  CastleFrameOne.prototype.handleAssetLoaderComplete = function (__s42param0) {
    __dep_exact_9e901e8e2483a22f_6.ClientFunnelTrackingController.getInstance().trackState(__dep_exact_9e901e8e2483a22f_5.ClientFunnelGameStates.ASSETS_END);
    __s1param0.prototype.handleAssetLoaderComplete.call(this, __s42param0);
  };
  CastleFrameOne.prototype.createView = function () {
    var __s44local0 = this;
    var __s44local1 = __dep_export_StartscreenHelper.StartscreenHelper.usesModernStartscreen() ? "CastleStartscreen5" : "CastleStartscreen";
    __dep_exact_9e901e8e2483a22f_14.loadAssets([__s44local1, "CastleInterfaceElements_Shared", "CastleInterfaceElements", "CastleInterfaceElements_Icons", "CountryComponentFlags", "Placeholder"], __dep_exact_9e901e8e2483a22f.AssetLoadingFlowType.SEQUENTIAL).then(function (__s46param0) {
      __s44local0.assetLoaded();
    });
  };
  CastleFrameOne.prototype.assetLoaded = function () {
    var __s48local0 = this;
    requestAnimationFrame(function () {
      __s48local0.preloaderView = __dep_export_StartscreenHelper.StartscreenHelper.usesModernStartscreen() ? new __dep_export_ModernStartscreenComponent.ModernStartscreenComponent() : new __dep_export_CastleStartscreenComponent.CastleStartscreenComponent();
      __s48local0.preloaderView.startProgressBar();
      __s48local0.onViewLoaded();
      __s48local0.loadAssets();
      __dep_export_HelpshiftHelper.HelpshiftHelper.getInstance().hideChatWidget(false);
    });
  };
  CastleFrameOne.prototype.getMainGameClass = function () {
    return __dep_export_CastleGame.CastleGame;
  };
  return CastleFrameOne;
}(__dep_exact_9e901e8e2483a22f_2.BasicFrameOne);
exports.CastleFrameOne = __s0local0;
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "Stage");
clearInterval(window.fakeLoadingTimer);
delete window.fakeLoadingTimer;
window.setLoadingScreenProgress(77);
new __s0local0();
