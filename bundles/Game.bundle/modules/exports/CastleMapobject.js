Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CastleWorldmapEvent = require("gge-module:export_CastleWorldmapEvent");
var __dep_export_VisualMapObjectEvent = require("gge-module:export_VisualMapObjectEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_VisualVOEvent = require("gge-module:export_VisualVOEvent");
var __dep_export_InteractiveMapobject = require("gge-module:export_InteractiveMapobject");
var __s0local0 = createjs.Container;
var __s0local1 = function (__s1param0) {
  function CastleMapobject() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleMapobject, __s1param0);
  CastleMapobject.prototype.initVisualRep = function () {
    if (!this.disp) {
      this.disp = new __s0local0();
      this.mapobjectVO.addEventListener(__dep_export_VisualVOEvent.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onVOChange));
    }
    this.drawCastle();
    if (this.isOwnMapobject) {
      __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_AVATAR, this.bindFunction(this.onChangeCrest));
    }
  };
  CastleMapobject.prototype.onAreaUpdate = function (__s9param0) {
    if (this.castleMapObjectVO.isUseAbleForRelocation && __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().currentState == __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_WORLDMAP_RELOCATION) {
      this.initVisualRep();
    }
  };
  CastleMapobject.prototype.getFlamesClip = function () {
    var __s12local0 = this.getABGFlamesClip("Castle");
    if (__s12local0 && __s12local0.currentshownDisplayObject) {
      return __s12local0;
    } else {
      return __s1param0.prototype.getFlamesClip.call(this);
    }
  };
  CastleMapobject.prototype.drawCastle = function () {
    var __s16local0 = !!this.worldmapObjectVO && !!this.worldmapObjectVO.ownerInfo && this.castleMapObjectVO.isVisibleOnMap;
    var __s16local1 = this.castleMapObjectVO.isUseAbleForRelocation && __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().currentState == __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_WORLDMAP_RELOCATION;
    var __s16local2 = !this.worldmapObjectVO.ownerInfo && this.castleMapObjectVO.isOccupied;
    if (__s16local0 || __s16local1 || __s16local2) {
      this.clearObjectContainer();
      if (__s16local0) {
        if (this.worldmapObjectVO.ownerInfo.isRuin) {
          if (__s16local1) {
            this.objectContainer = new __dep_export_CastleDisplayObjectClipContainer.CastleDisplayObjectClipContainer();
            this.objectContainer.addItem(this.getAsExternalClip("RelocationRuin_Mapobject"));
          } else {
            this.objectContainer = this.worldmapObjectVO.getRuinContainer();
          }
        } else {
          this.objectContainer = this.castleMapObjectVO.getCastleContainer(true);
          if (this.worldmapObjectVO.remainingCooldownTimeInSeconds > 0) {
            this.showFlames();
          }
        }
      } else if (__s16local2) {
        this.objectContainer = new __dep_export_CastleDisplayObjectClipContainer.CastleDisplayObjectClipContainer();
        this.objectContainer.addItem(this.getAsExternalClip("RelocationSet_Mapobject"));
        var __s16local3 = this.worldmapObjectVO;
        var __s16local4 = __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnerInfoVO(__s16local3.occupierID);
        this.objectContainer.addItem(__s16local3.getAsExternalClip("Castle_Flag_Relocate", null, __s16local3.getClipColor(__s16local4)));
      } else if (__s16local1) {
        this.objectContainer = new __dep_export_CastleDisplayObjectClipContainer.CastleDisplayObjectClipContainer();
        this.objectContainer.addItem(this.castleMapObjectVO.getAsExternalClip("Relocation_Mapobject"));
      }
      this.addMouseListener();
      this.addObjectContainer();
      this.disp.dispatchEvent(new __dep_export_VisualMapObjectEvent.VisualMapObjectEvent(__dep_export_VisualMapObjectEvent.VisualMapObjectEvent.VE_UPDATED, [this]));
    }
  };
  CastleMapobject.prototype.remove = function () {
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_AVATAR, this.bindFunction(this.onChangeCrest));
    this.mapobjectVO.removeEventListener(__dep_export_VisualVOEvent.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onVOChange));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.UPDATE_AREA_INFO, this.bindFunction(this.onAreaUpdate));
    __s1param0.prototype.remove.call(this);
  };
  CastleMapobject.prototype.onMouseUp = function (__s29param0) {
    __s1param0.prototype.onMouseUp.call(this, __s29param0);
    this.showOwnerLines();
  };
  CastleMapobject.prototype.showRingMenu = function () {
    __dep_exact_9e901e8e2483a22f.info("showing menu");
    if (this.castleMapObjectVO.ownerInfo && !this.castleMapObjectVO.ownerInfo.isRuin) {
      this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.SHOW_MENU, [this, __dep_export_CastleWorldmapEvent.CastleWorldmapEvent.RINGMENU_CASTLEINFO]));
    } else if (this.castleMapObjectVO.ownerInfo) {
      if (this.castleMapObjectVO.ownerInfo.isRuin) {
        this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.CLICK_RUIN, [this, __dep_export_CastleWorldmapEvent.CastleWorldmapEvent.RINGMENU_CASTLEINFO]));
      }
    } else {
      this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.CLICK_RELOCATE_POSITION, [this, __dep_export_CastleWorldmapEvent.CastleWorldmapEvent.RINGMENU_CASTLEINFO]));
    }
    __dep_exact_9e901e8e2483a22f.info("trying to show ownerlines");
    this.showOwnerLines();
  };
  CastleMapobject.prototype.onRollOver = function (__s37param0) {
    if (!this.worldmapRenderer.camera.isWorldDragging) {
      if (!this.hasRingMenu) {
        this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.INFOTOOLTIP, [true, this]));
      }
      __s1param0.prototype.onRollOver.call(this, __s37param0);
    }
  };
  CastleMapobject.prototype.onRollOut = function (__s41param0) {
    this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.INFOTOOLTIP, [false]));
    __s1param0.prototype.onRollOut.call(this, __s41param0);
  };
  CastleMapobject.prototype.onDoubleClick = function () {
    if (!this.worldmapRenderer.camera.isLocked) {
      if (this.castleMapObjectVO.ownerInfo && !this.castleMapObjectVO.ownerInfo.isRuin) {
        this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.DOUBLE_CLICK_CASTLE, [this.mapobjectVO]));
      }
    }
  };
  Object.defineProperty(CastleMapobject.prototype, "castleMapObjectVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMapobject.prototype, "line1Content", {
    get: function () {
      var __s49local0 = this.castleMapObjectVO.ownerInfo;
      if (!__s49local0 && this.castleMapObjectVO.isOccupied) {
        var __s49local1 = __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnerInfoVO(this.castleMapObjectVO.occupierID);
        return new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_CastleTitleSystemHelper.CastleTitleSystemHelper.getPlayerNameWithTitleFromPlayerInfo(__s49local1));
      }
      if (!__s49local0 && this.castleMapObjectVO.isUseAbleForRelocation) {
        return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("relocate_freeWorldmapPosition_toolTip");
      } else if (__s49local0) {
        return new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_CastleTitleSystemHelper.CastleTitleSystemHelper.getPlayerNameWithTitleFromPlayerInfo(this.castleMapObjectVO.ownerInfo));
      } else {
        return null;
      }
    },
    set: function (__s55param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobject.InteractiveMapobject.prototype, "line1Content").set.call(this, __s55param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMapobject.prototype, "line2Content", {
    get: function () {
      var __s57local0 = this.castleMapObjectVO.ownerInfo;
      if (!__s57local0 && this.castleMapObjectVO.isOccupied) {
        var __s57local1 = __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnerInfoVO(this.castleMapObjectVO.occupierID);
        if (__s57local1.playerID != __dep_export_CastleModel.CastleModel.userData.playerID) {
          if (__s57local1.remainingRelocateDuration <= 0) {
            var __s57local2 = __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().worldmapScreen.renderer.camera.getAreaViewportRectangle();
            __dep_export_CastleModel.CastleModel.worldmapData.updateAreaRange(__s57local2.x, __s57local2.y, __s57local2.x + __s57local2.width, __s57local2.y + __s57local2.height);
          }
          return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_2.GenericTextIds.VALUE_SIMPLE_COMP, ["dialog_moveOverview_arival", __dep_exact_9e901e8e2483a22f_1.TimeStringHelper.getHoureMinuteSecondTimeString(__s57local1.remainingRelocateDuration)]);
        }
        return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_2.GenericTextIds.VALUE_SIMPLE_COMP, ["dialog_moveOverview_arival", __dep_exact_9e901e8e2483a22f_1.TimeStringHelper.getHoureMinuteSecondTimeString(__dep_export_CastleModel.CastleModel.userData.remainingRelocationDuration)]);
      }
      if (!__s57local0 && this.castleMapObjectVO.isUseAbleForRelocation) {
        return null;
      } else if (__s57local0) {
        if (__s57local0.isRuin) {
          return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("ruin");
        } else {
          return new __dep_exact_92d05af59ee2ff30.TextVO(this.getHonorLevelString());
        }
      } else {
        return null;
      }
    },
    set: function (__s67param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobject.InteractiveMapobject.prototype, "line2Content").set.call(this, __s67param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMapobject.prototype, "line3Content", {
    get: function () {
      var __s69local0 = this.castleMapObjectVO.ownerInfo;
      if (!__s69local0 && this.castleMapObjectVO.isOccupied) {
        var __s69local1 = __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnerInfoVO(this.castleMapObjectVO.occupierID);
        return new __dep_exact_92d05af59ee2ff30.TextVO(__s69local1.allianceName);
      }
      if (!__s69local0 && this.castleMapObjectVO.isUseAbleForRelocation) {
        return null;
      } else if (__s69local0 && this.getAllianceString() != "") {
        return new __dep_exact_92d05af59ee2ff30.TextVO(this.getAllianceString());
      } else {
        return null;
      }
    },
    set: function (__s75param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobject.InteractiveMapobject.prototype, "line3Content").set.call(this, __s75param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMapobject.prototype, "isTimerToolTip", {
    get: function () {
      return !this.castleMapObjectVO.ownerInfo && this.castleMapObjectVO.isOccupied;
    },
    set: function (__s79param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobject.InteractiveMapobject.prototype, "isTimerToolTip").set.call(this, __s79param0);
    },
    enumerable: true,
    configurable: true
  });
  return CastleMapobject;
}(__dep_export_InteractiveMapobject.InteractiveMapobject);
exports.CastleMapobject = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "IIngameUICapable", "IWorldMapObject", "IWorldmapTooltipData");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleTitleSystemHelper = require("gge-module:export_CastleTitleSystemHelper");
var __dep_export_CastleDisplayObjectClipContainer = require("gge-module:export_CastleDisplayObjectClipContainer");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "IIngameUICapable", "IWorldMapObject", "IWorldmapTooltipData");
