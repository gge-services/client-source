Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_ClientConstIsoChangeEventSkin = require("gge-module:export_ClientConstIsoChangeEventSkin");
var __dep_export_C2SRuinInfoVO = require("gge-module:export_C2SRuinInfoVO");
var __dep_export_CastleLayoutManagerEvent = require("gge-module:export_CastleLayoutManagerEvent");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_CastleDialogEvent = require("gge-module:export_CastleDialogEvent");
var __dep_export_CastleZoomEvent = require("gge-module:export_CastleZoomEvent");
var __dep_export_CastleArmyDataEvent = require("gge-module:export_CastleArmyDataEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastlePanelEvent = require("gge-module:export_CastlePanelEvent");
var __dep_export_CastleWorldmapScreenEvent = require("gge-module:export_CastleWorldmapScreenEvent");
var __dep_export_CastleWorldmapEvent = require("gge-module:export_CastleWorldmapEvent");
var __dep_export_KingdomEnum = require("gge-module:export_KingdomEnum");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_WorldmapEasterEggHelper = require("gge-module:export_WorldmapEasterEggHelper");
var __dep_export_WorldmapKeyWordManager = require("gge-module:export_WorldmapKeyWordManager");
var __dep_export_CastleRelocateDialogProperties = require("gge-module:export_CastleRelocateDialogProperties");
var __dep_export_CastleScreen = require("gge-module:export_CastleScreen");
var __s0local0 = createjs.Container;
var __s0local1 = function (__s1param0) {
  function CastleWorldMapScreen() {
    return __s1param0.call(this, new __s0local0()) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleWorldMapScreen, __s1param0);
  CastleWorldMapScreen.prototype.buildWorldMap = function () {
    this.removeWorldMap();
    var __s5local0 = __dep_export_ClientConstIsoChangeEventSkin.ClientConstIsoChangeEventSkin.getSkinnedBackgroundColor(false);
    if (this.renderer) {
      this.renderer.updateGlobalEventListener();
      this.renderer.bgLayer.visible = true;
    } else {
      this.renderer = new __dep_export_CastleWorldmapRenderer.CastleWorldmapRenderer(this.disp);
      this.camera = this.renderer.camera;
    }
    this.drawBackground(this.renderer.bgLayer, __s5local0 != __dep_export_ClientConstColor.ClientConstColor.USE_DEFAULT_COLOR ? __s5local0 : __dep_export_KingdomEnum.KingdomEnum.getTypeById(__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID).mapBackgroundColor);
    this.renderer.mode = __dep_export_CastleWorldmapRenderer.CastleWorldmapRenderer.RUNNING;
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.onNewEvent));
    this.controller.addEventListener(__dep_export_CastlePanelEvent.CastlePanelEvent.MOUSE_OVER_PANEL, this.bindFunction(this.onMouseOutOfWorldMap));
    this.controller.addEventListener(__dep_export_CastleDialogEvent.CastleDialogEvent.MOUSE_ON_DIALOG, this.bindFunction(this.onMouseOutOfWorldMap));
    this.controller.addEventListener(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.NEW_CAMERA_POSITION, this.bindFunction(this.onNewCameraPosition));
    this.controller.addEventListener(__dep_export_CastleArmyDataEvent.CastleArmyDataEvent.NEW_MOVEMENT, this.bindFunction(this.onNewMovement));
    this.controller.addEventListener(__dep_export_CastleArmyDataEvent.CastleArmyDataEvent.REMOVE_MOVEMENT, this.bindFunction(this.onRemoveMapMovement));
    this.controller.addEventListener(__dep_export_CastleZoomEvent.CastleZoomEvent.ZOOM, this.bindFunction(this.onZoom));
    this.renderer.addEventListener(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.SHOW_MENU, this.bindFunction(this.onShowMenu));
    this.renderer.addEventListener(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.CLICK_RUIN, this.bindFunction(this.onClickRuin));
    this.renderer.addEventListener(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.CLICK_RELOCATE_POSITION, this.bindFunction(this.onClickRelocatePostition));
    this.renderer.addEventListener(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.INFOTOOLTIP, this.bindFunction(this.onShowInfoToolTip));
    this.camera.addEventListener(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.WORLDMAP_CLICK, this.bindFunction(this.onWorldmapClick));
    this.renderer.addEventListener(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.DOUBLE_CLICK_CASTLE, this.bindFunction(this.onDoubleClickCastle));
    this.controller.addEventListener(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.CHANGE_DISPLAYSTATE, this.bindFunction(this.onLayoutStateChanged));
    this.layoutManager.nativeCursor.hideCustomCursor();
    this._keyWordManager ||= new __dep_export_WorldmapKeyWordManager.WorldmapKeyWordManager();
    this._keyWordManager.addEventListener();
    __dep_exact_9e901e8e2483a22f.info("[WorldMapRenderer]: dispatching load complete");
    this.controller.dispatchEvent(new __dep_export_CastleWorldmapScreenEvent.CastleWorldmapScreenEvent(__dep_export_CastleWorldmapScreenEvent.CastleWorldmapScreenEvent.WORLDMAP_LOADED));
  };
  CastleWorldMapScreen.prototype.onGAAArrived = function (__s9param0) {
    if (this._delayedRingMenuVO) {
      var __s9local0 = this._delayedRingMenuVO.absAreaPos;
      if (!this.containsPosition(__s9local0, __s9param0.params[0])) {
        return;
      }
      var __s9local1 = __dep_exact_81dacdf05bd32292_1.castAs(this.layoutManager.worldmapScreen.renderer.getVEforAreaXY(__s9local0.x, __s9local0.y, true), "InteractiveMapobject");
      if (__s9local1) {
        __s9local1.showRingMenu();
        this._delayedRingMenuVO = null;
        this.controller.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.GAA_ARRIVED, this.bindFunction(this.onGAAArrived));
      }
    }
  };
  CastleWorldMapScreen.prototype.containsPosition = function (__s14param0, __s14param1) {
    if (__s14param1 != null) {
      for (var __s14local0 = 0, __s14local1 = __s14param1; __s14local0 < __s14local1.length; __s14local0++) {
        var __s14local2 = __s14local1[__s14local0];
        if (__s14local2 !== undefined && __s14local2.equals(__s14param0)) {
          return true;
        }
      }
    }
    return false;
  };
  CastleWorldMapScreen.prototype.delayOpenRingMenu = function (__s20param0) {
    this._delayedRingMenuVO = __s20param0;
    this.controller.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.GAA_ARRIVED, this.bindFunction(this.onGAAArrived));
  };
  CastleWorldMapScreen.prototype.removeWorldMap = function () {
    if (this._keyWordManager) {
      this._keyWordManager.removeEventListener();
    }
    __dep_export_WorldmapEasterEggHelper.WorldmapEasterEggHelper.reset();
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.onNewEvent));
    this.controller.removeEventListener(__dep_export_CastlePanelEvent.CastlePanelEvent.MOUSE_OVER_PANEL, this.bindFunction(this.onMouseOutOfWorldMap));
    this.controller.removeEventListener(__dep_export_CastleDialogEvent.CastleDialogEvent.MOUSE_ON_DIALOG, this.bindFunction(this.onMouseOutOfWorldMap));
    this.controller.removeEventListener(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.NEW_CAMERA_POSITION, this.bindFunction(this.onNewCameraPosition));
    this.controller.removeEventListener(__dep_export_CastleArmyDataEvent.CastleArmyDataEvent.NEW_MOVEMENT, this.bindFunction(this.onNewMovement));
    this.controller.removeEventListener(__dep_export_CastleArmyDataEvent.CastleArmyDataEvent.REMOVE_MOVEMENT, this.bindFunction(this.onRemoveMapMovement));
    this.controller.removeEventListener(__dep_export_CastleZoomEvent.CastleZoomEvent.ZOOM, this.bindFunction(this.onZoom));
    if (this.renderer) {
      this.renderer.mode = __dep_export_CastleWorldmapRenderer.CastleWorldmapRenderer.PAUSE;
      this.renderer.bgLayer.visible = false;
    }
    if (this.renderer) {
      this.controller.removeEventListener(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.CHANGE_DISPLAYSTATE, this.bindFunction(this.onLayoutStateChanged));
      this.renderer.removeEventListener(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.SHOW_MENU, this.bindFunction(this.onShowMenu));
      this.renderer.removeEventListener(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.CLICK_RUIN, this.bindFunction(this.onClickRuin));
      this.renderer.removeEventListener(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.CLICK_RELOCATE_POSITION, this.bindFunction(this.onClickRelocatePostition));
      this.renderer.removeEventListener(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.INFOTOOLTIP, this.bindFunction(this.onShowInfoToolTip));
      this.camera.removeEventListener(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.WORLDMAP_CLICK, this.bindFunction(this.onWorldmapClick));
      this.renderer.removeEventListener(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.DOUBLE_CLICK_CASTLE, this.bindFunction(this.onDoubleClickCastle));
      this.controller.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.GAA_ARRIVED, this.bindFunction(this.onGAAArrived));
      this._delayedRingMenuVO = null;
    }
  };
  CastleWorldMapScreen.prototype.onZoom = function (__s27param0) {
    switch (__s27param0.zoomType) {
      case __dep_export_CastleZoomEvent.CastleZoomEvent.ZOOM_IN:
        this.camera.stepZoomIn();
        break;
      case __dep_export_CastleZoomEvent.CastleZoomEvent.ZOOM_OUT:
        this.camera.stepZoomOut();
    }
  };
  CastleWorldMapScreen.prototype.onNewMovement = function (__s30param0) {
    if (__s30param0.mapmovementVO.isVisibleOnWorldMap) {
      this.renderer.addMovement(__s30param0.mapmovementVO);
    }
  };
  CastleWorldMapScreen.prototype.onNewEvent = function (__s33param0) {
    this.renderer.invalidateMap();
  };
  CastleWorldMapScreen.prototype.onWorldmapClick = function (__s35param0) {
    if (!this.camera.isLocked) {
      this.layoutManager.hideAllIngameUIComponents();
      if (this.renderer) {
        this.renderer.hideLines();
      }
    }
  };
  CastleWorldMapScreen.prototype.onLayoutStateChanged = function (__s39param0) {
    this.layoutManager.worldmapScreen.camera.centerArea(this.layoutManager.worldmapScreen.camera.lastTarget);
  };
  CastleWorldMapScreen.prototype.onShowMenu = function (__s41param0) {
    var __s41local0;
    var __s41local1;
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s41param0.params[0], "BasicMapobject")) {
      __s41local0 = __s41param0.params.shift();
    } else {
      __s41local1 = __s41param0.params.shift();
    }
    if (!__s41local0 || !__dep_exact_81dacdf05bd32292.instanceOfClass(__s41local0.mapobjectVO, "ContainerBuilderMapobjectVO") || !__s41local0.mapobjectVO.underConstruction) {
      switch (__dep_exact_f855840627e6e145.int(__s41param0.params.shift())) {
        case __dep_export_CastleWorldmapEvent.CastleWorldmapEvent.RINGMENU_CASTLEINFO:
        case __dep_export_CastleWorldmapEvent.CastleWorldmapEvent.RINGMENU_OUTPOSTINFO:
        case __dep_export_CastleWorldmapEvent.CastleWorldmapEvent.RINGMENU_DUNGEONINFO:
          this.layoutManager.showIngameUIComponent(__dep_export_WorldMapCastleInfoMenu.WorldMapCastleInfoMenu, __s41local0);
          break;
        case __dep_export_CastleWorldmapEvent.CastleWorldmapEvent.RINGMENU_ARMYATTACK:
          this.layoutManager.showIngameUIComponent(__dep_export_WorldMapArmyAttackMenu.WorldMapArmyAttackMenu, __s41local1);
      }
      if (__s41local0) {
        this.controller.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.SHOW_PLAYER_INFO, [__s41local0]));
      }
    }
  };
  CastleWorldMapScreen.prototype.onClickRuin = function (__s48param0) {
    var __s48local0;
    if (this.layoutManager.currentState == __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_WORLDMAP_RELOCATION && __dep_exact_81dacdf05bd32292.instanceOfClass(__s48param0.params[0], "BasicMapobject")) {
      __s48local0 = __s48param0.params.shift();
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SRuinInfoVO.C2SRuinInfoVO(__s48local0.mapobjectVO.absAreaPosX, __s48local0.mapobjectVO.absAreaPosY));
    }
  };
  CastleWorldMapScreen.prototype.onClickRelocatePostition = function (__s51param0) {
    var __s51local0;
    if (this.layoutManager.currentState == __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_WORLDMAP_RELOCATION && __dep_exact_81dacdf05bd32292.instanceOfClass(__s51param0.params[0], "BasicMapobject")) {
      __s51local0 = __s51param0.params.shift();
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleRelocateDialog.CastleRelocateDialog, new __dep_export_CastleRelocateDialogProperties.CastleRelocateDialogProperties(__s51local0.mapobjectVO.absAreaPosX, __s51local0.mapobjectVO.absAreaPosY));
    }
  };
  CastleWorldMapScreen.prototype.onShowInfoToolTip = function (__s54param0) {
    if (__s54param0.params.shift()) {
      var __s54local0 = __s54param0.params.shift();
      this.layoutManager.showIngameUIComponent(__dep_export_WorldmapInfoTooltip.WorldmapInfoTooltip, __s54local0);
    } else {
      this.layoutManager.hideIngameUIComponent(__dep_export_WorldmapInfoTooltip.WorldmapInfoTooltip);
    }
  };
  CastleWorldMapScreen.prototype.onDoubleClickCastle = function (__s58param0) {
    var __s58local0 = __s58param0.params[0];
    if (__s58local0 && __s58local0.canBeVisited) {
      if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s58local0, "ContainerBuilderMapobjectVO") && __s58local0.underConstruction) {
        return;
      }
      __dep_exact_9e901e8e2483a22f_1.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.JOIN_AREA_AND_SAVE_POSITION_COMMAND, __s58local0);
    }
  };
  CastleWorldMapScreen.prototype.onNewCameraPosition = function (__s62param0) {
    var __s62local0 = __s62param0.params.shift();
    this.renderer.camera.centerArea(__s62local0);
  };
  CastleWorldMapScreen.prototype.onMouseOutOfWorldMap = function (__s64param0) {
    if (this.renderer.isNaviVisible) {
      this.renderer.hideNavi();
    }
  };
  CastleWorldMapScreen.prototype.hide = function () {
    this.removeWorldMap();
    __s1param0.prototype.hide.call(this);
  };
  CastleWorldMapScreen.prototype.destroy = function () {
    this.removeWorldMap();
    __s1param0.prototype.destroy.call(this);
  };
  CastleWorldMapScreen.prototype.onRemoveMapMovement = function (__s71param0) {
    var __s71local0 = __dep_exact_f855840627e6e145.int(__s71param0.mapmovementVO.objectId);
    this.renderer.removeMovement(__s71local0);
  };
  CastleWorldMapScreen.prototype.onResize = function (__s73param0) {
    __s1param0.prototype.onResize.call(this, __s73param0);
    if (this.renderer) {
      this.renderer.invalidateMap();
    }
  };
  CastleWorldMapScreen.NAME = "CastleWorldMapScreen";
  return CastleWorldMapScreen;
}(__dep_export_CastleScreen.CastleScreen);
exports.CastleWorldMapScreen = __s0local1;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleWorldmapRenderer = require("gge-module:export_CastleWorldmapRenderer");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleRelocateDialog = require("gge-module:export_CastleRelocateDialog");
var __dep_export_WorldmapInfoTooltip = require("gge-module:export_WorldmapInfoTooltip");
var __dep_export_WorldMapCastleInfoMenu = require("gge-module:export_WorldMapCastleInfoMenu");
var __dep_export_WorldMapArmyAttackMenu = require("gge-module:export_WorldMapArmyAttackMenu");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
