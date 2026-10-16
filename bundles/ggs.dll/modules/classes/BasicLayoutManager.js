Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_Stats = require("gge-module:class_Stats");
var __dep_class_CommonDialogNames = require("gge-module:class_CommonDialogNames");
var __dep_class_EnvGlobalsHandler = require("gge-module:class_EnvGlobalsHandler");
var __dep_class_BasicContextMenuController = require("gge-module:class_BasicContextMenuController");
var __dep_class_BasicStandardOkDialogProperties = require("gge-module:class_BasicStandardOkDialogProperties");
var __dep_class_BasicIdleScreen = require("gge-module:class_BasicIdleScreen");
var __dep_opaque_c83528567256175cfb346d7d = require("gge-module:opaque_c83528567256175cfb346d7d");
var __dep_export_CSSMouseCursor = require("gge-module:export_CSSMouseCursor");
var __s0local0 = createjs.StageQuality;
var __s0local1 = createjs.Event;
var __s0local2 = createjs.MouseEvent;
var __s0local3 = createjs.Container;
var __s0local4 = require("gge-module:export_LoggerConfigurator").getLogger("BasicLayoutManager");
var __s0local5 = function (__s1param0) {
  function BasicLayoutManager() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._initialized = false;
    if (BasicLayoutManager.layoutManager) {
      throw new Error("Calling constructor not allowed! Use getInstance instead.");
    }
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicLayoutManager, __s1param0);
  BasicLayoutManager.setLayoutManagerClass = function (__s6param0) {
    BasicLayoutManager.layoutManagerClass = __s6param0;
  };
  BasicLayoutManager.getInstance = function () {
    if (this.layoutManagerClass && !this.layoutManager) {
      try {
        BasicLayoutManager.layoutManager = new BasicLayoutManager.layoutManagerClass();
      } catch (__s12local0) {
        throw new Error("LayoutManagerClass is not extending BasicLayoutManager class! " + __s12local0.message);
      }
    }
    if (!BasicLayoutManager.layoutManager) {
      throw new Error("LayoutManager is not initialized!");
    }
    return BasicLayoutManager.layoutManager;
  };
  BasicLayoutManager.prototype.onMouseUp = function (__s15param0) {
    if (this.dragManager) {
      this.dragManager.stopDragging();
    }
  };
  BasicLayoutManager.prototype.initialize = function (__s18param0) {
    this.addEventListener(__s0local1.ADDED_TO_STAGE, this.bindFunction(this.onAddedToStage));
    this.addEventListener(__s0local1.ENTER_FRAME, this.bindFunction(this.onEnterFrame));
    while (this.numChildren > 0) {
      this.removeChildAt(0);
    }
    this.animatedFlashUIComponents = [];
    this.dialogs = new Map();
    this.panels = new Map();
    this.screens = new Map();
    this._currentState = 0;
    this.adminLayer = new __s0local3();
    this.screenLayer = new __s0local3();
    this.panelLayer = new __s0local3();
    this.dialogLayer = new __s0local3();
    this.tutorialLayer = new __s0local3();
    this.tooltipLayer = new __s0local3();
    this._mouseLayer = new __s0local3();
    this._mouseLayer.mouseChildren = false;
    this._mouseLayer.mouseEnabled = false;
    this.backgroundLayer = new __s0local3();
    this._backgroundComponent = __s18param0;
    if (this._backgroundComponent) {
      this._backgroundComponent.disp.mouseEnabled = true;
      this._backgroundComponent.disp.mouseChildren = true;
      this.backgroundLayer.addChild(this._backgroundComponent.disp);
      if (this._backgroundComponent.customCursor) {
        this.customCursor = this._backgroundComponent.customCursor;
        this._mouseLayer.addChild(this.customCursor.disp);
      }
    }
    this._initialized = true;
  };
  Object.defineProperty(BasicLayoutManager.prototype, "initialized", {
    get: function () {
      return this._initialized;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicLayoutManager.prototype, "state", {
    set: function (__s26param0) {
      switch (__s26param0) {
        case BasicLayoutManager.STATE_LOAD_ITEMS:
          this.hideAllDialogs();
          this.hideAllPanels();
          this.showBackgroundLayer();
          this._backgroundComponent.showProgressBar();
          BasicLayoutManager.gameState = BasicLayoutManager.STATE_LOAD_ITEMS;
          break;
        case BasicLayoutManager.STATE_CONNECT:
          this.hideAllDialogs();
          this.hideAllPanels();
          this.showBackgroundLayer();
          break;
        case BasicLayoutManager.STATE_LOGIN:
          this.hideAllPanels();
          this.showBackgroundLayer();
          BasicLayoutManager.gameState = BasicLayoutManager.STATE_LOGIN;
      }
    },
    enumerable: true,
    configurable: true
  });
  BasicLayoutManager.prototype.onEnterFrame = function (__s29param0) {
    for (var __s29local0 = 0, __s29local1 = this.animatedFlashUIComponents; __s29local0 < __s29local1.length; __s29local0++) {
      __s29local1[__s29local0].onEnterFrameUpdate();
    }
  };
  BasicLayoutManager.prototype.addAnimFlashUIComponent = function (__s33param0) {
    this.animatedFlashUIComponents.push(__s33param0);
  };
  BasicLayoutManager.prototype.removeAnimFlashUIComponent = function (__s35param0) {
    for (var __s35local0 = 0; __s35local0 < this.animatedFlashUIComponents.length; __s35local0++) {
      if (this.animatedFlashUIComponents[__s35local0] == __s35param0) {
        this.animatedFlashUIComponents.splice(__s35local0, 1);
      }
    }
  };
  BasicLayoutManager.prototype.onAddedToStage = function (__s40param0) {
    __s0local4.debug("basicLayoutManager.onAddedToStage");
    this.removeEventListener(__s0local1.ADDED_TO_STAGE, this.bindFunction(this.onAddedToStage));
    this.addEventListener(__s0local2.MOUSE_UP, this.bindFunction(this.onMouseUp));
  };
  BasicLayoutManager.prototype.changeQualityLevel = function (__s42param0) {
    switch (__s42param0) {
      default:
      case BasicLayoutManager.QUALITY_HIGH:
        BasicLayoutManager.layoutManager.stage.quality = __s0local0.BEST;
        break;
      case BasicLayoutManager.QUALITY_MEDIUM:
        BasicLayoutManager.layoutManager.stage.quality = __s0local0.MEDIUM;
        break;
      case BasicLayoutManager.QUALITY_LOW:
        BasicLayoutManager.layoutManager.stage.quality = __s0local0.LOW;
    }
  };
  BasicLayoutManager.prototype.getScreen = function (__s45param0) {
    if (__s45param0 in this.screens) {
      return this.screens.get(__s45param0);
    } else {
      return null;
    }
  };
  BasicLayoutManager.prototype.getPanel = function (__s49param0) {
    return this.panels.get(__s49param0) || null;
  };
  BasicLayoutManager.prototype.getDialog = function (__s51param0) {
    for (var __s51local0 = 0, __s51local1 = Array.from(this.dialogs.values()); __s51local0 < __s51local1.length; __s51local0++) {
      var __s51local2 = __s51local1[__s51local0];
      if (__s51local2 && this.isDialogKey(__s51local2, __s51param0)) {
        return __s51local2;
      }
    }
    return null;
  };
  BasicLayoutManager.prototype.showDialog = function (__s56param0, __s56param1, __s56param2, __s56param3) {
    var __s56local0;
    if (__s56param1 === undefined) {
      __s56param1 = null;
    }
    if (__s56param2 === undefined) {
      __s56param2 = null;
    }
    if (__s56param3 === undefined) {
      __s56param3 = null;
    }
    if (__s56param2 == null) {
      __s56param2 = this.dialogLayer;
    }
    if (!(__s56local0 = this.dialogs.get(__s56param0))) {
      __s56local0 = this.createFlashComponent(__s56param0);
      this.dialogs.set(__s56param0, __s56local0);
    }
    __s56local0.setProperties(__s56param1);
    if (__s56local0.disp.parent != __s56param2) {
      __s56param2.addChild(__s56local0.disp);
    }
    __s56param2.setChildIndex(__s56local0.disp, __s56param2.numChildren - 1);
    __s56local0.show();
  };
  BasicLayoutManager.prototype.showAdminDialog = function (__s64param0, __s64param1 = null) {
    this.showDialog(__s64param0, __s64param1, this.adminLayer);
  };
  BasicLayoutManager.prototype.hideAllDialogs = function () {
    for (var __s66local0 = 0, __s66local1 = Array.from(this.dialogs.values()); __s66local0 < __s66local1.length; __s66local0++) {
      var __s66local2 = __s66local1[__s66local0];
      if (__s66local2.isVisible()) {
        __s66local2.hide();
      }
    }
  };
  BasicLayoutManager.prototype.hideDialog = function (__s71param0) {
    for (var __s71local0 = 0, __s71local1 = Array.from(this.dialogs.values()); __s71local0 < __s71local1.length; __s71local0++) {
      var __s71local2 = __s71local1[__s71local0];
      if (__s71local2 && this.isDialogKey(__s71local2, __s71param0) && __s71local2.isVisible()) {
        __s71local2.hide();
      }
    }
  };
  BasicLayoutManager.prototype.clearDialog = function (__s76param0) {
    for (var __s76local0 = 0, __s76local1 = Array.from(this.dialogs.keys()); __s76local0 < __s76local1.length; __s76local0++) {
      var __s76local2 = __s76local1[__s76local0];
      if (this.dialogs.get(__s76local2) === __s76param0) {
        if (__s76param0.isVisible()) {
          __s76param0.hide();
        }
        __s76param0.destroy();
        if (__s76param0.disp && __s76param0.disp.parent === this.dialogLayer) {
          this.dialogLayer.removeChild(__s76param0.disp);
        }
        if (__s76param0.disp && __s76param0.disp.parent === this.adminLayer) {
          this.adminLayer.removeChild(__s76param0.disp);
        }
        this.dialogs.delete(__s76local2);
        break;
      }
    }
  };
  BasicLayoutManager.prototype.clearAllDialogs = function () {
    for (var __s84local0 = 0, __s84local1 = Array.from(this.dialogs.keys()); __s84local0 < __s84local1.length; __s84local0++) {
      var __s84local2 = __s84local1[__s84local0];
      var __s84local3 = this.dialogs.get(__s84local2);
      if (__s84local3) {
        __s84local3.hide();
        __s84local3.destroy();
        if (__s84local3.disp && __s84local3.disp.parent == this.dialogLayer) {
          this.dialogLayer.removeChild(__s84local3.disp);
        }
        if (__s84local3.disp && __s84local3.disp.parent == this.adminLayer) {
          this.adminLayer.removeChild(__s84local3.disp);
        }
        this.dialogs.delete(__s84local2);
      }
    }
    this.dialogs = new Map();
  };
  BasicLayoutManager.prototype.showScreen = function (__s91param0, __s91param1) {
    var __s91local0;
    if (__s91param1 === undefined) {
      __s91param1 = null;
    }
    if (this.screens.get(__s91param0)) {
      (__s91local0 = this.screens.get(__s91param0)).setProperties(__s91param1);
    } else {
      __s91local0 = this.createFlashComponent(__s91param0);
      this.screens.set(__s91param0, __s91local0);
      __s91local0.setProperties(__s91param1);
      this.screenLayer.addChild(__s91local0.disp);
    }
    __s91local0.show();
    return __s91local0;
  };
  BasicLayoutManager.prototype.hideScreen = function (__s96param0) {
    if (this.screens.get(__s96param0)) {
      this.screens.get(__s96param0).hide();
    }
  };
  BasicLayoutManager.prototype.hideAllScreens = function () {
    for (var __s99local0 = 0, __s99local1 = Array.from(this.screens.values()); __s99local0 < __s99local1.length; __s99local0++) {
      var __s99local2 = __s99local1[__s99local0];
      if (__s99local2.isVisible()) {
        __s99local2.hide();
      }
    }
  };
  BasicLayoutManager.prototype.onTopScreen = function (__s104param0) {
    var __s104local0;
    if (this.screens.get(__s104param0)) {
      __s104local0 = this.screens.get(__s104param0);
      this.screenLayer.setChildIndex(__s104local0.disp, this.screenLayer.numChildren - 1);
    }
  };
  BasicLayoutManager.prototype.createIdleLayer = function () {
    this.idleHolderLayer = new __s0local3();
    BasicLayoutManager.layoutManager.addChild(this.idleHolderLayer);
    this._idleScreen = new __dep_class_BasicIdleScreen.BasicIdleScreen(this.idleHolderLayer);
  };
  BasicLayoutManager.prototype.clearAllScreens = function () {
    for (var __s109local0 = 0, __s109local1 = Array.from(this.screens.values()); __s109local0 < __s109local1.length; __s109local0++) {
      var __s109local2 = __s109local1[__s109local0];
      __s109local2.hide();
      __s109local2.destroy();
      this.screenLayer.removeChild(__s109local2.disp);
    }
    this.screens = new Map();
  };
  BasicLayoutManager.prototype.showPanel = function (__s113param0, __s113param1, __s113param2) {
    var __s113local0;
    if (__s113param1 === undefined) {
      __s113param1 = null;
    }
    if (__s113param2 === undefined) {
      __s113param2 = false;
    }
    if (this.panels.get(__s113param0)) {
      (__s113local0 = this.panels.get(__s113param0)).setProperties(__s113param1);
      if (__s113param2) {
        this.panelLayer.setChildIndex(__s113local0.disp, this.panelLayer.numChildren - 1);
      }
    } else {
      (__s113local0 = this.createFlashComponent(__s113param0)).disp.visible = false;
      this.panels.set(__s113param0, __s113local0);
      __s113local0.setProperties(__s113param1);
      this.panelLayer.addChild(__s113local0.disp);
    }
    if (!__s113local0.isVisible()) {
      __s113local0.show();
    }
  };
  BasicLayoutManager.prototype.hidePanel = function (__s121param0) {
    var __s121local0;
    if (this.panels.get(__s121param0) && (__s121local0 = this.panels.get(__s121param0)).isVisible()) {
      __s121local0.hide();
    }
  };
  BasicLayoutManager.prototype.clearAllPanels = function () {
    for (var __s124local0 = 0, __s124local1 = Array.from(this.panels.values()); __s124local0 < __s124local1.length; __s124local0++) {
      var __s124local2 = __s124local1[__s124local0];
      __s124local2.hide();
      __s124local2.destroy();
      __s124local2.disp.parent.removeChild(__s124local2.disp);
    }
    this.panels = new Map();
  };
  BasicLayoutManager.prototype.hideAllPanels = function () {
    for (var __s128local0 = 0, __s128local1 = Array.from(this.panels.values()); __s128local0 < __s128local1.length; __s128local0++) {
      var __s128local2 = __s128local1[__s128local0];
      if (__s128local2.isVisible()) {
        __s128local2.hide();
      }
    }
  };
  BasicLayoutManager.prototype.lockPanel = function (__s133param0) {
    if (this.panels.get(__s133param0)) {
      this.panels.get(__s133param0).lockPanel();
    }
  };
  BasicLayoutManager.prototype.unLockPanel = function (__s136param0) {
    if (this.panels.get(__s136param0)) {
      this.panels.get(__s136param0).unLockPanel();
    }
  };
  BasicLayoutManager.prototype.existsDialog = function (__s139param0) {
    for (var __s139local0 = 0, __s139local1 = Array.from(this.dialogs.values()); __s139local0 < __s139local1.length; __s139local0++) {
      var __s139local2 = __s139local1[__s139local0];
      if (__s139local2 && __s139local2.constructor.name === __s139param0.name) {
        return true;
      }
    }
    return false;
  };
  BasicLayoutManager.prototype.isPanelVisible = function (__s144param0) {
    for (var __s144local0 = 0, __s144local1 = Array.from(this.panels.values()); __s144local0 < __s144local1.length; __s144local0++) {
      var __s144local2 = __s144local1[__s144local0];
      if (__s144local2 && __s144local2.constructor.name === __s144param0.name) {
        return __s144local2.isVisible();
      }
    }
    return false;
  };
  BasicLayoutManager.prototype.isPanelVisibleById = function (__s149param0) {
    var __s149local0 = this.getPanel(__s149param0);
    return __s149local0 && __s149local0.isVisible();
  };
  BasicLayoutManager.prototype.isDialogVisible = function (__s151param0) {
    for (var __s151local0 = 0, __s151local1 = Array.from(this.dialogs.values()); __s151local0 < __s151local1.length; __s151local0++) {
      var __s151local2 = __s151local1[__s151local0];
      if (__s151local2 && __s151local2.constructor.name === __s151param0.name) {
        return __s151local2.isVisible();
      }
    }
    return false;
  };
  Object.defineProperty(BasicLayoutManager.prototype, "numVisibleDialogs", {
    get: function () {
      var __s156local0 = 0;
      for (var __s156local1 = 0, __s156local2 = Array.from(this.dialogs.values()); __s156local1 < __s156local2.length; __s156local1++) {
        var __s156local3 = __s156local2[__s156local1];
        if (__s156local3 && __s156local3.isVisible()) {
          __s156local0++;
        }
      }
      return __s156local0;
    },
    enumerable: true,
    configurable: true
  });
  BasicLayoutManager.prototype.clearAllLayoutContent = function () {
    this.clearAllPanels();
    this.clearAllDialogs();
    this.clearAllScreens();
  };
  BasicLayoutManager.prototype.createFlashComponent = function (__s163param0) {
    return null;
  };
  BasicLayoutManager.prototype.checkWaitingAnimState = function (__s165param0) {
    for (var __s165local0 = 0, __s165local1 = Array.from(this.dialogs.values()); __s165local0 < __s165local1.length; __s165local0++) {
      __s165local1[__s165local0].checkWaitingAnimState(__s165param0);
    }
    for (var __s165local2 = 0, __s165local3 = Array.from(this.panels.values()); __s165local2 < __s165local3.length; __s165local2++) {
      __s165local3[__s165local2].checkWaitingAnimState(__s165param0);
    }
    for (var __s165local4 = 0, __s165local5 = Array.from(this.screens.values()); __s165local4 < __s165local5.length; __s165local4++) {
      __s165local5[__s165local4].checkWaitingAnimState(__s165param0);
    }
  };
  BasicLayoutManager.prototype.toggleFullscreen = function () {
    var __s173local0 = this.stage.canvas;
    var __s173local1 = window.document;
    __s173local1.addEventListener("fullscreenerror", function (__s175param0) {
      this.showDialog(__dep_class_CommonDialogNames.CommonDialogNames.StandardOkDialog_NAME, new __dep_class_BasicStandardOkDialogProperties.BasicStandardOkDialogProperties(__dep_opaque_c83528567256175cfb346d7d.Localize.text("fullscreenerror_msg_title"), __dep_opaque_c83528567256175cfb346d7d.Localize.text("fullscreenerror_msg_copy")));
    });
    if (!!__s173local1.fullscreenElement || !!__s173local1.webkitFullscreenElement || !!__s173local1.mozFullScreenElement || !!__s173local1.msFullscreenElement) {
      this.revertFullscreen();
    } else {
      __s173local0.requestFullscreen();
    }
  };
  BasicLayoutManager.prototype.isDocumentHidden = function () {
    var __s179local0 = window.document;
    return __s179local0.hidden || __s179local0.msHidden || __s179local0.webkitHidden;
  };
  BasicLayoutManager.prototype.revertFullscreen = function () {
    if (!this.isDocumentHidden()) {
      var __s181local0;
      var __s181local1 = window.document;
      var __s181local2 = !!__s181local1.fullscreenElement || !!__s181local1.webkitFullscreenElement || !!__s181local1.mozFullScreenElement || !!__s181local1.msFullscreenElement;
      try {
        if (__s181local2) {
          if (__s181local1.exitFullscreen) {
            __s181local0 = __s181local1.exitFullscreen();
          } else if (__s181local1.webkitExitFullscreen) {
            __s181local0 = __s181local1.webkitExitFullscreen();
          } else if (__s181local1.msExitFullscreen) {
            __s181local0 = __s181local1.msExitFullscreen();
          }
          if (__s181local0 && __s181local0.then) {
            __s181local0.catch(function (__s190param0) {
              __s0local4.warn("exitFullscreen fails: " + __s190param0);
            });
          }
        }
      } catch (__s192local0) {
        __s0local4.warn("exitFullscreen fails: " + __s192local0);
      }
    }
  };
  BasicLayoutManager.prototype.showFPS = function () {
    this.stats = new __dep_class_Stats.Stats();
    this.adminLayer.addChild(this.stats);
  };
  BasicLayoutManager.prototype.hideFPS = function () {
    this.adminLayer.removeChild(this.stats);
    this.stats = null;
  };
  BasicLayoutManager.prototype.isFPSshown = function () {
    return false;
  };
  BasicLayoutManager.prototype.toggleFPSvisibility = function () {
    if (this.isFPSshown()) {
      this.hideFPS();
    } else {
      this.showFPS();
    }
  };
  BasicLayoutManager.prototype.enableProgressbar = function () {
    this._backgroundComponent.progressBarEnabled = true;
  };
  BasicLayoutManager.prototype.disableProgressbar = function () {
    this._backgroundComponent.progressBarEnabled = false;
  };
  BasicLayoutManager.prototype.onEndProgressbar = function () {
    this._backgroundComponent.hideProgressBar();
  };
  BasicLayoutManager.prototype.onStartProgressbar = function () {
    this._backgroundComponent.show();
    this._backgroundComponent.showProgressBar();
  };
  Object.defineProperty(BasicLayoutManager.prototype, "inGameState", {
    get: function () {
      return this._currentState >= 10;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicLayoutManager.prototype, "outGameState", {
    get: function () {
      return this._currentState < 10;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicLayoutManager.prototype, "currentState", {
    get: function () {
      return this._currentState;
    },
    enumerable: true,
    configurable: true
  });
  BasicLayoutManager.prototype.showBackgroundLayer = function () {
    this._backgroundComponent.show();
  };
  BasicLayoutManager.prototype.showServerAndClientVersion = function () {
    this._backgroundComponent.showVersion();
    __dep_class_BasicContextMenuController.BasicContextMenuController.instance.refreshVersionInfo();
  };
  BasicLayoutManager.prototype.xmlVersionSelect = function (__s222param0) {};
  BasicLayoutManager.prototype.onVisitGGS = function (__s224param0) {};
  BasicLayoutManager.prototype.hideBackgroundLayer = function () {
    this._backgroundComponent.hide();
  };
  Object.defineProperty(BasicLayoutManager.prototype, "scaleFactor", {
    get: function () {
      return this._backgroundComponent.scaleFactor;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicLayoutManager.prototype, "gameNullPoint", {
    get: function () {
      return this._backgroundComponent.gameNullPoint;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicLayoutManager.prototype, "env", {
    get: function () {
      return __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicLayoutManager.prototype, "mouseLayer", {
    get: function () {
      return this._mouseLayer;
    },
    enumerable: true,
    configurable: true
  });
  BasicLayoutManager.prototype.isDialogKey = function (__s236param0, __s236param1) {
    return typeof __s236param1 == "string" && __s236param0.constructor.name === __s236param1 || __s236param1 instanceof Object && __dep_export_CSSMouseCursor.getQualifiedClassName(__s236param0) === __s236param1.name;
  };
  BasicLayoutManager.STATE_PRELOAD_INIT = -1;
  BasicLayoutManager.STATE_PRELOAD_CONNECTED = 0;
  BasicLayoutManager.STATE_CONNECT = 1;
  BasicLayoutManager.STATE_LOGIN = 2;
  BasicLayoutManager.STATE_AVATAR_CREATION = 3;
  BasicLayoutManager.STATE_LOAD_ITEMS = 4;
  BasicLayoutManager.STATE_REGISTRATION = 5;
  BasicLayoutManager.STATE_STARTSCREEN = 6;
  BasicLayoutManager.QUALITY_HIGH = 0;
  BasicLayoutManager.QUALITY_MEDIUM = 1;
  BasicLayoutManager.QUALITY_LOW = 2;
  BasicLayoutManager.gameState = 99;
  return BasicLayoutManager;
}(__s0local3);
exports.BasicLayoutManager = __s0local5;
