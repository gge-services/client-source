Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_CommandController = require("gge-module:class_CommandController");
var __dep_class_BasicController = require("gge-module:class_BasicController");
var __dep_export_CSSMouseCursor = require("gge-module:export_CSSMouseCursor");
var __dep_class_EnvGlobalsHandler = require("gge-module:class_EnvGlobalsHandler");
var __dep_class_BasicModel = require("gge-module:class_BasicModel");
var __dep_exact_becd07da092f4a09 = require("gge-module:exact_becd07da092f4a09");
var __dep_exact_9036b0ddd67c3c6e = require("gge-module:exact_9036b0ddd67c3c6e");
var __dep_class_ClientFunnelTrackingController = require("gge-module:class_ClientFunnelTrackingController");
var __s0local0 = createjs.Ticker;
var __s0local1 = createjs.Container;
var __dep_class_BasicConstants = require("gge-module:class_BasicConstants");
var __s0local2 = function (__s1param0) {
  function BasicGame(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.preloaderView = __s3param0;
    __s3local0.initialized = new __dep_exact_becd07da092f4a09.Signal();
    __s3local0.initialized.addOnce(__s3local0.bindFunction(__s3local0.onGameInitialized));
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicGame, __s1param0);
  BasicGame.prototype.onGameInitialized = function () {
    __dep_exact_9036b0ddd67c3c6e.debug("Game initialization complete.");
    __dep_class_CommandController.CommandController.instance.executeCommand(__dep_class_BasicController.BasicController.COMMAND_CONNECT_TO_INSTANCEVO, __dep_class_BasicModel.BasicModel.instanceProxy.selectedInstanceVO);
  };
  BasicGame.prototype.onAddedToStage = function (__s7param0 = null) {
    __dep_export_CSSMouseCursor.KeyboardEventDispatcher.init(this.stage);
    __dep_export_CSSMouseCursor.MouseEventDispatcher.init();
    __dep_class_ClientFunnelTrackingController.ClientFunnelTrackingController.getInstance().stage = this.stage;
    var __s7local0 = this;
    window.addEventListener("resize", function () {
      __s7local0.onWindowResized();
    }, false);
    this.initialize();
    if (__dep_export_CSSMouseCursor.ExternalInterface.available) {
      __dep_export_CSSMouseCursor.ExternalInterface.call("ggsCxfOnGameAddedToStage");
    }
  };
  BasicGame.prototype.initialize = function () {
    this.onWindowResized();
    this.initializeTicker();
    this.registerCommands();
    this.initializeGame();
  };
  BasicGame.prototype.addGameSpecificEnvironments = function () {};
  Object.defineProperty(BasicGame.prototype, "customEnvironments", {
    get: function () {
      return [];
    },
    enumerable: true,
    configurable: true
  });
  BasicGame.prototype.onWindowResized = function () {
    if (!__dep_export_CSSMouseCursor.currentBrowserInfo.isMobile || !__dep_export_CSSMouseCursor.TextField.isMobileKeyboardShown) {
      if (this.stage) {
        this.stage.canvas.width = window.innerWidth;
        this.stage.canvas.height = window.innerHeight;
      }
    }
  };
  BasicGame.prototype.initializeTicker = function () {
    __s0local0.framerate = __dep_class_BasicConstants.BasicConstants.TARGET_FRAMERATE;
    __s0local0.addEventListener("tick", this.onTick.bind(this));
  };
  BasicGame.prototype.onTick = function (__s24param0) {
    if (!__s0local0.paused) {
      this.stage.update();
    }
  };
  BasicGame.prototype.registerCommands = function () {};
  BasicGame.prototype.initPreClientCommands = function () {};
  BasicGame.prototype.initializeGame = function () {};
  Object.defineProperty(BasicGame.prototype, "env", {
    get: function () {
      return __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  return BasicGame;
}(__s0local1);
exports.BasicGame = __s0local2;
