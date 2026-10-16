Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_3 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstQuestCondition = require("gge-module:export_ClientConstQuestCondition");
var __dep_export_C2SSeasonJoinEventVO = require("gge-module:export_C2SSeasonJoinEventVO");
var __dep_export_CastleLayoutManagerEvent = require("gge-module:export_CastleLayoutManagerEvent");
var __dep_export_CastleDialogEvent = require("gge-module:export_CastleDialogEvent");
var __dep_export_CastleQuestConditionEvent = require("gge-module:export_CastleQuestConditionEvent");
var __dep_export_CastleQuestDataEvent = require("gge-module:export_CastleQuestDataEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastlePanelEvent = require("gge-module:export_CastlePanelEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleScreen = require("gge-module:export_CastleScreen");
var __s0local0 = createjs.Container;
var __s0local1 = createjs.Event;
var __s0local2 = createjs.MouseEvent;
var __s0local3 = createjs.Rectangle;
var __s0local4 = function (__s1param0) {
  function CastleSeasonMapScreen() {
    var __s3local0 = this;
    __s3local0._parallax = false;
    __s3local0._isDragging = false;
    __s3local0._parallaxSections = [];
    __s3local0.speedLeftRight = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, new __s0local0()) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSeasonMapScreen, __s1param0);
  CastleSeasonMapScreen.prototype.init = function () {
    if (__dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.hasFrame) {
      CastleSeasonMapScreen.MAP_WIDTH = 3150;
    } else {
      CastleSeasonMapScreen.MAP_WIDTH = 2769;
    }
    this.seasonMapRenderer = new __dep_export_CastleSeasonMapRenderer.CastleSeasonMapRenderer();
    __s1param0.prototype.init.call(this);
  };
  CastleSeasonMapScreen.prototype.show = function () {
    if (!__dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO || __dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.treasureMapAssetsLoaded()) {
      __s1param0.prototype.show.call(this);
      this.destroySeasonMap();
      this.drawBG();
      this._screenLayer = new __s0local0();
      this.screenDisp.addChild(this._screenLayer);
      this.loadScreenBG();
      this.seasonMapRenderer.init(this._mapLayer);
      if (__dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.hasFrame) {
        this.loadFrame();
      }
      this.updatePosition();
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SSeasonJoinEventVO.C2SSeasonJoinEventVO(this.treasureMapVO.mapID));
      this.checkHelpArrows();
    } else {
      __dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.loadTreasureMapAssets(this.bindFunction(this.show));
    }
  };
  CastleSeasonMapScreen.prototype.addEventListenerOnShow = function () {
    __s1param0.prototype.addEventListenerOnShow.call(this);
    this.disp.addEventListener(__s0local2.CLICK, this.bindFunction(this.onClick));
    this.disp.addEventListener(__s0local2.MOUSE_UP, this.bindFunction(this.onMouseUp));
    this.disp.addEventListener(__s0local2.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_PRIVATEEVENT, this.bindFunction(this.onRemoveEvent));
    __dep_export_CastleModel.CastleModel.questData.addEventListener(__dep_export_CastleQuestDataEvent.CastleQuestDataEvent.GET_QUESTLIST, this.bindFunction(this.onQuestsChanged));
    this.controller.addEventListener(__dep_export_CastleDialogEvent.CastleDialogEvent.CLOSE_QUESTINFO, this.bindFunction(this.checkHelpArrows));
    this.disp.addEventListener(__s0local1.ENTER_FRAME, this.bindFunction(this.onEnterFrame));
    this.controller.addEventListener(__dep_export_CastlePanelEvent.CastlePanelEvent.MOUSE_OVER_PANEL, this.bindFunction(this.onMouseOnPanel));
    this.controller.addEventListener(__dep_export_CastleQuestConditionEvent.CastleQuestConditionEvent.HIGHLIGHT_ON_MAP, this.bindFunction(this.onHighlightOnMap));
  };
  CastleSeasonMapScreen.prototype.onHighlightOnMap = function (__s16param0) {
    if (__s16param0.questCondition) {
      var __s16local0;
      switch (__s16param0.questCondition.conditionType) {
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_TREASURE_NODE:
          __s16local0 = this.treasureMapVO.getAvailableNodeIDs(function (__s20param0) {
            var __s20local0 = [];
            for (var __s20local1 = 1; __s20local1 < arguments.length; __s20local1++) {
              __s20local0[__s20local1 - 1] = arguments[__s20local1];
            }
            return __s16param0.questCondition.conditionData.indexOf(__s20param0.nodeID.toString()) > -1 && !__s20param0.isDefeated;
          });
          break;
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_REPAIR_TREASURE_BRIDGES:
          __s16local0 = this.treasureMapVO.getAvailableNodeIDs(function (__s24param0) {
            var __s24local0 = [];
            for (var __s24local1 = 1; __s24local1 < arguments.length; __s24local1++) {
              __s24local0[__s24local1 - 1] = arguments[__s24local1];
            }
            return [__dep_export_TMapNodeVO.TMapNodeVO.NODE_TYPE_BRIDGE].indexOf(__s24param0.nodeType) > -1 && !__s24param0.isDefeated;
          });
          break;
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_TREASURE_VILLAGES:
          __s16local0 = this.treasureMapVO.getAvailableNodeIDs(function (__s28param0) {
            var __s28local0 = [];
            for (var __s28local1 = 1; __s28local1 < arguments.length; __s28local1++) {
              __s28local0[__s28local1 - 1] = arguments[__s28local1];
            }
            return [__dep_export_TMapNodeVO.TMapNodeVO.NODE_TYPE_DUNGEON].indexOf(__s28param0.nodeType) > -1 && __s28param0.isVillage && !__s28param0.isDefeated;
          });
          break;
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_FINISHTREASUREDUNGEONS:
          __s16local0 = this.treasureMapVO.getAvailableNodeIDs(function (__s32param0) {
            var __s32local0 = [];
            for (var __s32local1 = 1; __s32local1 < arguments.length; __s32local1++) {
              __s32local0[__s32local1 - 1] = arguments[__s32local1];
            }
            return [__dep_export_TMapNodeVO.TMapNodeVO.NODE_TYPE_DUNGEON, __dep_export_TMapNodeVO.TMapNodeVO.NODE_TYPE_BRIDGEDUNGEON, __dep_export_TMapNodeVO.TMapNodeVO.NODE_TYPE_MORALBOOSTER].indexOf(__s32param0.nodeType) > -1 && !__s32param0.isVillage && !__s32param0.isDefeated && !__s32param0.isEndNode;
          });
          break;
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_COLLECT_SILVER_RUNES:
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_COLLECT_PEARL_RELICS:
          __s16local0 = this.treasureMapVO.getAvailableNodeIDs(function (__s36param0) {
            var __s36local0 = [];
            for (var __s36local1 = 1; __s36local1 < arguments.length; __s36local1++) {
              __s36local0[__s36local1 - 1] = arguments[__s36local1];
            }
            return [__dep_export_TMapNodeVO.TMapNodeVO.NODE_TYPE_DUNGEON, __dep_export_TMapNodeVO.TMapNodeVO.NODE_TYPE_BRIDGEDUNGEON, __dep_export_TMapNodeVO.TMapNodeVO.NODE_TYPE_MORALBOOSTER].indexOf(__s36param0.nodeType) > -1 && !__s36param0.isDefeated;
          });
      }
      if (__s16local0.length > 0) {
        this.centerDungeon(this.getFirstUnlockedNodeID(__s16local0));
        __dep_export_CastleModel.CastleModel.treasureMapData.setMapHighlights(this.treasureMapVO.mapID, __s16local0);
      }
    }
  };
  CastleSeasonMapScreen.prototype.getFirstUnlockedNodeID = function (__s41param0) {
    if (__s41param0 != null) {
      for (var __s41local0 = 0, __s41local1 = __s41param0; __s41local0 < __s41local1.length; __s41local0++) {
        var __s41local2 = __s41local1[__s41local0];
        if (__s41local2 !== undefined && this.treasureMapVO.getNodeById(__s41local2).isUnlocked) {
          return __s41local2;
        }
      }
    }
    return __dep_exact_f855840627e6e145.int(__s41param0[0]);
  };
  CastleSeasonMapScreen.prototype.centerDungeon = function (__s47param0) {
    var __s47local0 = this._mapLayer["node_" + this.treasureMapVO.getNodeById(__s47param0).pos];
    if (__s47local0) {
      this._screenLayer.x = this._screenLayer.stage.stageWidth / 2 - __s47local0.x * this._screenLayer.scaleX;
      this.checkDispBounds();
      this.onMouseMove();
    }
  };
  CastleSeasonMapScreen.prototype.onRemoveEvent = function (__s50param0) {
    if (__dep_exact_81dacdf05bd32292_3.instanceOfClass(__s50param0.specialEventVO, "ASeasonEventVO")) {
      this.gotoHomeCastle();
    }
  };
  CastleSeasonMapScreen.prototype.gotoHomeCastle = function () {
    this.layoutManager.nativeCursor.stopAllDrag();
    __dep_exact_9e901e8e2483a22f_1.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.JOIN_MAIN_CASTLE_COMMAND);
  };
  CastleSeasonMapScreen.prototype.hide = function () {
    if (this.treasureMapVO) {
      __dep_export_CastleModel.CastleModel.treasureMapData.clearMapHighlights(this.treasureMapVO.mapID);
    }
    this.destroySeasonMap();
    this.layoutManager.tooltipManager.hide();
    __s1param0.prototype.hide.call(this);
  };
  CastleSeasonMapScreen.prototype.removeEventListenerOnHide = function () {
    __s1param0.prototype.removeEventListenerOnHide.call(this);
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_PRIVATEEVENT, this.bindFunction(this.onRemoveEvent));
    __dep_export_CastleModel.CastleModel.questData.removeEventListener(__dep_export_CastleQuestDataEvent.CastleQuestDataEvent.GET_QUESTLIST, this.bindFunction(this.onQuestsChanged));
    this.controller.removeEventListener(__dep_export_CastleDialogEvent.CastleDialogEvent.CLOSE_QUESTINFO, this.bindFunction(this.checkHelpArrows));
    this.disp.removeEventListener(__s0local1.ENTER_FRAME, this.bindFunction(this.onEnterFrame));
    this.controller.removeEventListener(__dep_export_CastlePanelEvent.CastlePanelEvent.MOUSE_OVER_PANEL, this.bindFunction(this.onMouseOnPanel));
    this.controller.removeEventListener(__dep_export_CastleQuestConditionEvent.CastleQuestConditionEvent.HIGHLIGHT_ON_MAP, this.bindFunction(this.onHighlightOnMap));
  };
  CastleSeasonMapScreen.prototype.onMouseOnPanel = function (__s60param0) {
    this.layoutManager.nativeCursor.stopAllDrag();
    this.onMouseUp(null);
  };
  CastleSeasonMapScreen.prototype.onQuestsChanged = function (__s62param0) {
    this.checkHelpArrows();
  };
  CastleSeasonMapScreen.prototype.checkHelpArrows = function (__s64param0 = null) {
    if (__dep_export_CastleModel.CastleModel.questData.isQuestActive(1032)) ;else if (__dep_export_CastleModel.CastleModel.questData.isQuestActive(1037)) ;else if (__dep_export_CastleModel.CastleModel.questData.isQuestActive(1039)) {
      if (this.treasureMapVO && this.treasureMapVO.mapID == __dep_export_CastleModel.CastleModel.questData.getActiveQuestByID(1039).mapID) {
        this.treasureMapVO.getNodeById(125).hasCoolDown;
      }
    } else {
      __dep_export_CastleModel.CastleModel.questData.isQuestActive(1063);
    }
  };
  CastleSeasonMapScreen.prototype.destroySeasonMap = function () {
    this.seasonMapRenderer.destroy();
    if (this.screenDisp && this._screenLayer && this.screenDisp.contains(this._screenLayer)) {
      this.screenDisp.removeChild(this._screenLayer);
    }
    if (this.screenDisp && this.bg && this.screenDisp.contains(this.bg)) {
      this.screenDisp.removeChild(this.bg);
      this.bg = null;
    }
  };
  CastleSeasonMapScreen.prototype.loadScreenBG = function () {
    this._mapLayer = new (__dep_exact_81dacdf05bd32292_2.getDefinitionByName("SeasonMapBG_" + __dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.eventId))();
    if (__dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.hasFrame) {
      this._mapLayer.x = 192;
      this._mapLayer.y = 198;
    }
    this._screenLayer.addChild(this._mapLayer);
  };
  CastleSeasonMapScreen.prototype.loadFrame = function () {
    var __s76local0 = new (__dep_exact_81dacdf05bd32292_2.getDefinitionByName("Event" + __dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.eventId + "TreasuremapFrame"))();
    __s76local0.mouseEnabled = false;
    this._screenLayer.addChild(__s76local0);
  };
  Object.defineProperty(CastleSeasonMapScreen.prototype, "treasureMapVO", {
    get: function () {
      if (__dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO) {
        return __dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.treasureMapVO;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSeasonMapScreen.prototype, "screenDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleSeasonMapScreen.prototype.drawBG = function () {
    this.bg = new __s0local0();
    this.bg.graphics.beginFill(this.getBGColor(), 1);
    this.bg.graphics.drawRect(0, 0, 2, 2);
    this.bg.graphics.endFill();
    this.bg.setBounds(0, 0, 2, 2);
    this.bg.addEventListener(__s0local1.ADDED_TO_STAGE, this.bindFunction(this.onBGAddedToStage));
    this.screenDisp.addChildAt(this.bg, 0);
  };
  CastleSeasonMapScreen.prototype.getBGColor = function () {
    switch (__dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.eventId) {
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_CRUSADE_THORNKING:
        return 7634005;
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_CRUSADE_SEAQUEEN:
        return 1068930;
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_CRUSADE_UNDERWORLD:
        return 146505;
    }
  };
  CastleSeasonMapScreen.prototype.onBGAddedToStage = function (__s89param0) {
    this.bg.removeEventListener(__s0local1.ADDED_TO_STAGE, this.bindFunction(this.onBGAddedToStage));
    this.resizeBG();
  };
  CastleSeasonMapScreen.prototype.resizeBG = function () {
    if (this.bg) {
      this.bg.width = this.bg.stage.stageWidth / this.disp.scaleX;
      this.bg.height = this.bg.stage.stageHeight / this.disp.scaleY;
    }
  };
  CastleSeasonMapScreen.prototype.updatePosition = function () {
    this.resizeBG();
    var __s94local0 = this.disp.stage;
    if (this._screenLayer && __s94local0) {
      var __s94local1 = __s94local0.stageHeight / 600;
      __s94local1 = __dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.hasFrame ? Math.min(Math.max(__s94local1, 0.7), 1) : Math.max(__s94local1, 0.7);
      if (__dep_exact_81dacdf05bd32292.MobileHelper.isScreenTooSmall()) {
        __s94local1 = __dep_exact_81dacdf05bd32292.MobileHelper.isLandscape() ? 0.55 : 0.9;
      }
      this._screenLayer.x = 0;
      if (__dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.hasFrame) {
        this._screenLayer.y = (__s94local0.stageHeight - this._screenLayer.height) * 0.5;
      } else {
        this._screenLayer.y = 0;
      }
      this._screenLayer.scaleX = this._screenLayer.scaleY = __s94local1;
    }
  };
  CastleSeasonMapScreen.prototype.onEnterFrame = function (__s100param0) {
    this.checkDispBounds();
    if (!(this.disp.stage.focus instanceof __dep_exact_81dacdf05bd32292_1.TextField)) {
      if (__dep_exact_9e901e8e2483a22f_2.Input.instance.isKeyDown(__dep_exact_81dacdf05bd32292.Keyboard.RIGHT)) {
        this.speedLeftRight = __dep_exact_f855840627e6e145.int(Math.max(this.speedLeftRight - 3, -50));
      } else if (__dep_exact_9e901e8e2483a22f_2.Input.instance.isKeyDown(__dep_exact_81dacdf05bd32292.Keyboard.LEFT)) {
        this.speedLeftRight = __dep_exact_f855840627e6e145.int(Math.min(this.speedLeftRight + 3, 50));
      } else {
        this.speedLeftRight = __dep_exact_f855840627e6e145.int(this.speedLeftRight > 0 ? Math.max(this.speedLeftRight - 3, 0) : Math.min(this.speedLeftRight + 3, 0));
      }
      if (this.speedLeftRight != 0) {
        this._screenLayer.x += Math.min(50, this.speedLeftRight);
      }
      this.checkDispBounds();
    }
  };
  CastleSeasonMapScreen.prototype.onMouseDown = function (__s107param0) {
    var __s107local0 = this._screenLayer.stage.stageWidth - CastleSeasonMapScreen.MAP_WIDTH * this._screenLayer.scaleX;
    this._screenLayer.startDrag(false, new __s0local3(__s107local0, 0, Math.abs(__s107local0), 0));
    this._isDragging = true;
    this.layoutManager.nativeCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_DRAG);
    this.controller.addEventListener(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.SHOW_DIALOG, this.bindFunction(this.onNewScreen));
  };
  CastleSeasonMapScreen.prototype.onNewScreen = function (__s109param0) {
    this.controller.removeEventListener(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.SHOW_DIALOG, this.bindFunction(this.onNewScreen));
    this._screenLayer.stopDrag();
    this._isDragging = false;
  };
  CastleSeasonMapScreen.prototype.onMouseUp = function (__s111param0) {
    this._screenLayer.stopDrag();
    this._isDragging = false;
    this.layoutManager.nativeCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_ARROW);
  };
  CastleSeasonMapScreen.prototype.checkDispBounds = function () {
    this._screenLayer.x = Math.max(Math.min(0, this._screenLayer.x), this._screenLayer.stage.stageWidth - CastleSeasonMapScreen.MAP_WIDTH * this._screenLayer.scaleX);
    if (__dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO && __dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.hasFrame) {
      this._screenLayer.y = (this._screenLayer.stage.stageHeight - this._screenLayer.height) * 0.5;
    } else {
      this._screenLayer.y = 0;
    }
  };
  CastleSeasonMapScreen.prototype.onMouseMove = function (__s117param0 = null) {};
  CastleSeasonMapScreen.NAME = "CastleSeasonMapScreen";
  CastleSeasonMapScreen.MAP_WIDTH = 3150;
  return CastleSeasonMapScreen;
}(__dep_export_CastleScreen.CastleScreen);
exports.CastleSeasonMapScreen = __s0local4;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_TMapNodeVO = require("gge-module:export_TMapNodeVO");
var __dep_export_CastleSeasonMapRenderer = require("gge-module:export_CastleSeasonMapRenderer");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
