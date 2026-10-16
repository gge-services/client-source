Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleAllianceHelpRequestDataEvent = require("gge-module:export_CastleAllianceHelpRequestDataEvent");
var __dep_export_CastleLayoutManagerEvent = require("gge-module:export_CastleLayoutManagerEvent");
var __dep_export_CastleZoomEvent = require("gge-module:export_CastleZoomEvent");
var __dep_export_GFXEvent = require("gge-module:export_GFXEvent");
var __dep_export_CastleAllianceDataEvent = require("gge-module:export_CastleAllianceDataEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CastlePanelEvent = require("gge-module:export_CastlePanelEvent");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_IsoGridOriginEnum = require("gge-module:export_IsoGridOriginEnum");
var __dep_export_IsoRenderStrategyEnum = require("gge-module:export_IsoRenderStrategyEnum");
var __dep_export_IsoEvent = require("gge-module:export_IsoEvent");
var __s0local0 = createjs.Event;
var __s0local1 = createjs.MouseEvent;
var __s0local2 = createjs.Point;
var __s0local3 = function (__s1param0) {
  function IsoUpdaterView() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoUpdaterView, __s1param0);
  IsoUpdaterView.prototype.init = function () {
    this.removeEventListener();
    this.addEventListener();
    this.touchController = this.touchController || new __dep_export_CastleTouchZoomController.CastleTouchZoomController(this.isoRenderer.camera.zoomRel.bind(this.isoRenderer.camera, __dep_export_IsoViewCamera.IsoViewCamera.ZOOM_IN), this.isoRenderer.camera.zoomRel.bind(this.isoRenderer.camera, __dep_export_IsoViewCamera.IsoViewCamera.ZOOM_OUT));
  };
  IsoUpdaterView.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    this.removeEventListener();
  };
  IsoUpdaterView.prototype.addEventListener = function () {
    var __s9local0 = __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().gamestage;
    var __s9local1 = __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().bgStage;
    var __s9local2 = __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().staticStage;
    if (__s9local0) {
      __s9local0.addEventListener(__s0local1.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      __s9local1.addEventListener(__s0local1.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      __s9local0.addEventListener(__s0local1.MOUSE_UP, this.bindFunction(this.onMouseUp));
      __s9local1.addEventListener(__s0local1.MOUSE_UP, this.bindFunction(this.onMouseUp));
      __s9local2.addEventListener(__s0local1.MOUSE_UP, this.bindFunction(this.onMouseUp));
      window.addEventListener(__s0local0.RESIZE, this.bindFunction(this.onResize));
      __s9local0.addEventListener(__dep_exact_81dacdf05bd32292_1.KeyboardEvent.KEY_DOWN, this.bindFunction(this.onKeyDown));
      __s9local0.addEventListener(__dep_exact_81dacdf05bd32292_1.KeyboardEvent.KEY_UP, this.bindFunction(this.onKeyUp));
      __s9local0.addEventListener(__s0local0.ENTER_FRAME, this.bindFunction(this.onEnterFrame));
      __s9local0.addEventListener(__s0local1.MOUSE_MOVE, this.bindFunction(this.onMouseMove));
      __s9local1.addEventListener(__s0local1.MOUSE_MOVE, this.bindFunction(this.onMouseMove));
      if (__dep_exact_81dacdf05bd32292.currentBrowserInfo.isMobile) {
        __s9local2.addEventListener(__s0local1.DOUBLE_CLICK, this.bindFunction(this.onMobileDoubleClick));
      }
    }
    if (this.worldLayer) {
      this.worldLayer.mouseChildren = true;
      this.worldLayer.addEventListener(__s0local1.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
      __s9local1.addEventListener(__s0local1.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
      __s9local2.addEventListener(__s0local1.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
    }
    __dep_export_Iso.Iso.controller.keyWords.addEventListener();
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_IsoEvent.IsoEvent.ON_HIDE_RING_MENU, this.bindFunction(this.onRingMenuHidden));
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_CastlePanelEvent.CastlePanelEvent.MOUSE_OVER_PANEL, this.bindFunction(this.onMouseOverPanel));
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_CastlePanelEvent.CastlePanelEvent.MOUSE_OUT_PANEL, this.bindFunction(this.onMouseOutPanel));
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.SHOW_DIALOG, this.bindFunction(this.onDialogOpened));
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_CastleZoomEvent.CastleZoomEvent.ZOOM, this.bindFunction(this.onOptionPanelZoom));
    __dep_export_CastleModel.CastleModel.gfxData.addEventListener(__dep_export_GFXEvent.GFXEvent.ANIMATION_STATE_CHANGED, this.bindFunction(this.onAnimationOptionChanged));
    __dep_export_CastleModel.CastleModel.allianceData.addEventListener(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onMyAllianceInfoUpdated));
    __dep_export_CastleModel.CastleModel.allianceHelpRequestData.addEventListener(__dep_export_CastleAllianceHelpRequestDataEvent.CastleAllianceHelpRequestDataEvent.DATA_UPDATED, this.bindFunction(this.onAllianceHelpUpdated));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.onSpecialEventAdded));
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_AVATAR, this.bindFunction(this.onCrestColorUpdated));
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_IsoEvent.IsoEvent.ON_RENDER_STRATEGY_CHANGED, this.bindFunction(this.onRenderStrategyChanged));
  };
  IsoUpdaterView.prototype.removeEventListener = function () {
    var __s14local0 = __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().gamestage;
    var __s14local1 = __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().bgStage;
    var __s14local2 = __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().staticStage;
    if (__s14local0) {
      __s14local0.removeEventListener(__s0local1.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      __s14local1.removeEventListener(__s0local1.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      __s14local0.removeEventListener(__s0local1.MOUSE_UP, this.bindFunction(this.onMouseUp));
      __s14local1.removeEventListener(__s0local1.MOUSE_UP, this.bindFunction(this.onMouseUp));
      __s14local2.removeEventListener(__s0local1.MOUSE_UP, this.bindFunction(this.onMouseUp));
      window.removeEventListener(__s0local0.RESIZE, this.bindFunction(this.onResize));
      __s14local0.removeEventListener(__dep_exact_81dacdf05bd32292_1.KeyboardEvent.KEY_DOWN, this.bindFunction(this.onKeyDown));
      __s14local0.removeEventListener(__dep_exact_81dacdf05bd32292_1.KeyboardEvent.KEY_UP, this.bindFunction(this.onKeyUp));
      __s14local0.removeEventListener(__s0local1.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
      __s14local1.removeEventListener(__s0local1.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
      __s14local2.removeEventListener(__s0local1.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
      __s14local0.removeEventListener(__s0local0.ENTER_FRAME, this.bindFunction(this.onEnterFrame));
      __s14local0.removeEventListener(__s0local1.MOUSE_MOVE, this.bindFunction(this.onMouseMove));
      __s14local1.removeEventListener(__s0local1.MOUSE_MOVE, this.bindFunction(this.onMouseMove));
      if (__dep_exact_81dacdf05bd32292.currentBrowserInfo.isMobile) {
        __s14local2.removeEventListener(__s0local1.DOUBLE_CLICK, this.bindFunction(this.onMobileDoubleClick));
      }
    }
    if (this.worldLayer) {
      this.worldLayer.removeEventListener(__s0local1.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
      this.worldLayer.removeEventListener(__s0local1.MOUSE_MOVE, this.bindFunction(this.onMouseMove));
    }
    __dep_export_Iso.Iso.controller.keyWords.removeEventListener();
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_IsoEvent.IsoEvent.ON_HIDE_RING_MENU, this.bindFunction(this.onRingMenuHidden));
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_CastlePanelEvent.CastlePanelEvent.MOUSE_OVER_PANEL, this.bindFunction(this.onMouseOverPanel));
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_CastlePanelEvent.CastlePanelEvent.MOUSE_OUT_PANEL, this.bindFunction(this.onMouseOutPanel));
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.SHOW_DIALOG, this.bindFunction(this.onDialogOpened));
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_CastleZoomEvent.CastleZoomEvent.ZOOM, this.bindFunction(this.onOptionPanelZoom));
    __dep_export_CastleModel.CastleModel.gfxData.removeEventListener(__dep_export_GFXEvent.GFXEvent.ANIMATION_STATE_CHANGED, this.bindFunction(this.onAnimationOptionChanged));
    __dep_export_CastleModel.CastleModel.allianceData.removeEventListener(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onMyAllianceInfoUpdated));
    __dep_export_CastleModel.CastleModel.allianceHelpRequestData.removeEventListener(__dep_export_CastleAllianceHelpRequestDataEvent.CastleAllianceHelpRequestDataEvent.DATA_UPDATED, this.bindFunction(this.onAllianceHelpUpdated));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.onSpecialEventAdded));
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_AVATAR, this.bindFunction(this.onCrestColorUpdated));
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_IsoEvent.IsoEvent.ON_RENDER_STRATEGY_CHANGED, this.bindFunction(this.onRenderStrategyChanged));
  };
  IsoUpdaterView.prototype.updateOnTimer = function (__s19param0) {
    for (var __s19local0 = 0, __s19local1 = this.isoRenderer.objects.getCompleteObjectsList(); __s19local0 < __s19local1.length; __s19local0++) {
      __s19local1[__s19local0].update(__s19param0);
    }
  };
  IsoUpdaterView.prototype.switchBuildModeInOwnCastle = function (__s23param0) {
    if (__dep_export_IsoHelper.IsoHelper.view.isInIsoScreen) {
      if (this.isoRenderer.strategies.currentStrategy.isActive(__dep_export_IsoRenderStrategyEnum.IsoRenderStrategyEnum.BUILD_MODE) == __s23param0) {
        return;
      }
      if (__s23param0) {
        this.isoRenderer.strategies.switchTo(__dep_export_IsoRenderStrategyEnum.IsoRenderStrategyEnum.set_defaultBuildMode);
      } else {
        this.isoRenderer.strategies.switchToNormalMode();
      }
      __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().updateLayout();
    }
  };
  IsoUpdaterView.prototype.onEnterFrame = function (__s29param0) {
    if (this.dataUpdater && __dep_export_IsoHelper.IsoHelper.view.isInIsoScreen) {
      if (__dep_export_IsoConst.IsoConst.MOVEMENTS_ACTIVATED) {
        this.dataUpdater.movementUpdater.update(__dep_export_CachedTimer.CachedTimer.getCachedTimer());
        this.dataUpdater.triggerObjectsUpdate(__dep_export_IsoObjectGroupEnum.IsoObjectGroupEnum.MOVEMENTS);
      }
      this.dataUpdater.triggerObjectsUpdate(__dep_export_IsoObjectGroupEnum.IsoObjectGroupEnum.EFFECTS);
      this.handleKeyboardScroll();
    }
    this.isoRenderer.camera.updateShake();
    this.isoRenderer.camera.updateZoomAnim();
    __dep_export_Iso.Iso.controller.processor.executeQueue();
  };
  IsoUpdaterView.prototype.handleKeyboardScroll = function () {
    if (!__dep_export_CastleModel.CastleModel.tutorialData.isInTutorial() && (!document.activeElement || document.activeElement.className != "ggsTextField")) {
      var __s33local0 = __dep_exact_9e901e8e2483a22f.Input.instance;
      if (__s33local0) {
        var __s33local1 = 0;
        var __s33local2 = 0;
        if (__s33local0.isKeyDown(__dep_exact_81dacdf05bd32292_1.Keyboard.RIGHT) || __s33local0.isKeyDown(__dep_exact_81dacdf05bd32292_1.Keyboard.D)) {
          __s33local1 -= 15;
        } else if (__s33local0.isKeyDown(__dep_exact_81dacdf05bd32292_1.Keyboard.LEFT) || __s33local0.isKeyDown(__dep_exact_81dacdf05bd32292_1.Keyboard.A)) {
          __s33local1 += 15;
        }
        if (__s33local0.isKeyDown(__dep_exact_81dacdf05bd32292_1.Keyboard.DOWN) || __s33local0.isKeyDown(__dep_exact_81dacdf05bd32292_1.Keyboard.S)) {
          __s33local2 -= 15;
        } else if (__s33local0.isKeyDown(__dep_exact_81dacdf05bd32292_1.Keyboard.UP) || __s33local0.isKeyDown(__dep_exact_81dacdf05bd32292_1.Keyboard.W)) {
          __s33local2 += 15;
        }
        if (__s33local1 != 0 || __s33local2 != 0) {
          this.isoRenderer.camera.scrollRel(new __s0local2(__s33local1, __s33local2));
        }
      }
    }
  };
  IsoUpdaterView.prototype.onMouseDown = function (__s42param0) {
    if (this.isoRenderer.layers.isUnderBuildingLayer(__s42param0.target)) {
      this.isoRenderer.mouse.onMouseDownOnGround();
    }
    this.touchController.markTouchDownPoint(__s42param0);
  };
  IsoUpdaterView.prototype.onMouseUp = function (__s45param0) {
    if (this.isoRenderer.layers.isUnderBuildingLayer(__s45param0.target)) {
      this.isoRenderer.mouse.onMouseUpOnGround();
    }
    this.touchController.markTouchDownPoint(__s45param0, true);
  };
  IsoUpdaterView.prototype.onMobileDoubleClick = function () {
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().toggleFullscreen();
  };
  IsoUpdaterView.prototype.onMouseWheel = function (__s50param0) {
    var __s50local0 = this.isoRenderer.mouse.getMouseStagePos();
    if (__s50param0.delta < 0) {
      this.isoRenderer.camera.zoomRelToScreenPos(__dep_export_IsoViewCamera.IsoViewCamera.ZOOM_IN, __s50local0);
    } else if (__s50param0.delta > 0) {
      this.isoRenderer.camera.zoomRelToScreenPos(__dep_export_IsoViewCamera.IsoViewCamera.ZOOM_OUT, __s50local0);
    }
  };
  IsoUpdaterView.prototype.onMouseMove = function (__s54param0) {
    if (!this.touchController.shouldTouchMoveIgnored(__s54param0)) {
      if (!this.touchController.isMultiTouch(__s54param0)) {
        this.isoRenderer.mouse.onMouseMove();
      }
      this.touchController.handleTouchZoom(__s54param0);
    }
  };
  IsoUpdaterView.prototype.onResize = function (__s58param0) {
    this.isoRenderer.camera.onScreenResize();
  };
  IsoUpdaterView.prototype.onKeyDown = function (__s60param0) {};
  IsoUpdaterView.prototype.onKeyUp = function (__s62param0) {};
  IsoUpdaterView.prototype.onMouseOverPanel = function (__s64param0) {
    if (!__dep_export_IsoHelper.IsoHelper.view.isValidDragPanel(__s64param0.panel)) {
      this.isoRenderer.mouse.onMouseOverPanel();
    }
  };
  IsoUpdaterView.prototype.onMouseOutPanel = function (__s67param0) {
    if (!__dep_export_IsoHelper.IsoHelper.view.isValidDragPanel(__s67param0.panel)) {
      this.isoRenderer.mouse.onMouseOutPanel();
    }
  };
  IsoUpdaterView.prototype.onRingMenuHidden = function (__s70param0) {
    this.isoRenderer.mouse.deselectTarget();
  };
  IsoUpdaterView.prototype.onDialogOpened = function (__s72param0) {
    this.isoRenderer.mouse.onDialogOpened();
  };
  IsoUpdaterView.prototype.onAnimationOptionChanged = function (__s74param0) {
    if (__dep_export_IsoHelper.IsoHelper.view && (!__dep_export_IsoHelper.IsoHelper.view.areAnimationsActive && this.dataUpdater && this.dataUpdater.movementUpdater && this.dataUpdater.movementUpdater.despawnAllMovements(), this.isoRenderer && this.isoRenderer.objects)) {
      for (var __s74local0 = 0, __s74local1 = this.isoRenderer.objects.getCompleteObjectsList(); __s74local0 < __s74local1.length; __s74local0++) {
        var __s74local2 = __s74local1[__s74local0];
        if (__s74local2) {
          __s74local2.onAnimationOptionChanged(__s74param0);
        }
      }
    }
  };
  IsoUpdaterView.prototype.onMyAllianceInfoUpdated = function (__s80param0) {
    for (var __s80local0 = 0, __s80local1 = this.isoRenderer.objects.getCompleteObjectsList(); __s80local0 < __s80local1.length; __s80local0++) {
      __s80local1[__s80local0].onMyAllianceInfoUpdated(__s80param0);
    }
  };
  IsoUpdaterView.prototype.onAllianceHelpUpdated = function (__s84param0) {
    for (var __s84local0 = 0, __s84local1 = this.isoRenderer.objects.getCompleteObjectsList(); __s84local0 < __s84local1.length; __s84local0++) {
      var __s84local2 = __s84local1[__s84local0];
      var __s84local3 = __s84local2;
      if (__dep_exact_81dacdf05bd32292_2.instanceOfClass(__s84local2, "ABasicBuildingVE")) {
        __s84local3.onAllianceHelpUpdated(__s84param0);
      }
    }
  };
  IsoUpdaterView.prototype.onCrestColorUpdated = function (__s89param0) {
    for (var __s89local0 = 0, __s89local1 = this.isoRenderer.objects.getCompleteObjectsList(); __s89local0 < __s89local1.length; __s89local0++) {
      __s89local1[__s89local0].onCrestColorUpdated(__s89param0);
    }
  };
  IsoUpdaterView.prototype.onRenderStrategyChanged = function (__s93param0) {
    for (var __s93local0 = 0, __s93local1 = this.isoRenderer.objects.getCompleteObjectsList(); __s93local0 < __s93local1.length; __s93local0++) {
      __s93local1[__s93local0].onRenderStrategyChanged(__s93param0);
    }
  };
  IsoUpdaterView.prototype.onExpansion = function () {
    this.isoRenderer.mouse.deselectTarget();
    this.isoRenderer.mouse.unFocusTarget();
    this.isoRenderer.mouse.unHoverTarget();
    this.isoRenderer.camera.onExpansion();
    this.isoRenderer.objects.reset();
    this.isoRenderer.objects.setup();
    this.isoRenderer.objects.render(true);
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SShowConstructionListVO.C2SShowConstructionListVO());
  };
  IsoUpdaterView.prototype.onOptionPanelZoom = function (__s99param0) {
    switch (__s99param0.zoomType) {
      case __dep_export_CastleZoomEvent.CastleZoomEvent.ZOOM_IN:
        this.isoRenderer.camera.zoomRel(__dep_export_IsoViewCamera.IsoViewCamera.ZOOM_IN, false, true);
        break;
      case __dep_export_CastleZoomEvent.CastleZoomEvent.ZOOM_OUT:
        this.isoRenderer.camera.zoomRel(__dep_export_IsoViewCamera.IsoViewCamera.ZOOM_OUT, false, true);
    }
  };
  IsoUpdaterView.prototype.onSpecialEventAdded = function (__s102param0) {
    if (__s102param0.specialEventVO && __dep_export_IsoHelper.IsoHelper.view.isInIsoScreen && !__dep_export_CastleModel.CastleModel.tutorialData.isInTutorial() && __dep_export_CastleModel.CastleModel.userData.level > 1) {
      this.isoRenderer.camera.scrollToGridPos(__dep_export_Iso.Iso.data.grid.origins.getOriginPos(__dep_export_IsoGridOriginEnum.IsoGridOriginEnum.BOTTOM_CORNER).add(new __s0local2(5, 15)));
    }
    if (__dep_exact_81dacdf05bd32292_2.instanceOfClass(__s102param0.specialEventVO, "EventSkinEventVO") && __dep_export_IsoHelper.IsoHelper.view.isInIsoScreen) {
      __dep_export_Iso.Iso.data.updater.updateSurroundings();
    }
  };
  IsoUpdaterView.prototype.traceDebugInfo = function () {
    var __s106local0 = "";
    var __s106local1 = this.isoRenderer.mouse.getMouseScreenPos();
    var __s106local2 = this.isoRenderer.mouse.getMouseGridPos();
    var __s106local3 = this.isoRenderer.camera.getGridPosByScreenPos(__s106local1);
    var __s106local4 = this.isoRenderer.camera.getScreenPosByGridPos(__s106local3);
    __s106local0 += "MousePos: " + __s106local1.x + " | " + __s106local1.y + "\n";
    __s106local0 += "MouseGridPos: " + __s106local2.x + " | " + __s106local2.y + "\n";
    __s106local0 += "GridPos : " + __s106local3.x + " | " + __s106local3.y + "\n";
    __s106local0 += "ScreenPosFromGridPos : " + __s106local4.x + " | " + __s106local4.y;
    console.log(__s106local0);
  };
  Object.defineProperty(IsoUpdaterView.prototype, "dataUpdater", {
    get: function () {
      return this.isoRenderer.isoData.updater;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoUpdaterView.prototype, "isoRenderer", {
    get: function () {
      return __dep_export_Iso.Iso.renderer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoUpdaterView.prototype, "worldLayer", {
    get: function () {
      return this.isoRenderer.layers.renderTarget;
    },
    enumerable: true,
    configurable: true
  });
  return IsoUpdaterView;
}(__dep_export_CastleComponent.CastleComponent);
exports.IsoUpdaterView = __s0local3;
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_IsoConst = require("gge-module:export_IsoConst");
var __dep_export_IsoObjectGroupEnum = require("gge-module:export_IsoObjectGroupEnum");
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_IsoViewCamera = require("gge-module:export_IsoViewCamera");
var __dep_export_CastleTouchZoomController = require("gge-module:export_CastleTouchZoomController");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local3, "ICollectableRendererList");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_C2SShowConstructionListVO = require("gge-module:export_C2SShowConstructionListVO");
