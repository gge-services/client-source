Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_3 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstIsoChangeEventSkin = require("gge-module:export_ClientConstIsoChangeEventSkin");
var __dep_export_VisualMapObjectEvent = require("gge-module:export_VisualMapObjectEvent");
var __dep_export_ABGHelper = require("gge-module:export_ABGHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BitmapFilterHelper = require("gge-module:export_BitmapFilterHelper");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_VisualVOEvent = require("gge-module:export_VisualVOEvent");
var __dep_export_BasicMapobject = require("gge-module:export_BasicMapobject");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = createjs.TimerEvent;
var __s0local2 = createjs.Point;
var __s0local3 = createjs.Event;
var __s0local4 = function (__s1param0) {
  function InteractiveMapobject() {
    var __s3local0 = this;
    __s3local0._hasRingMenu = false;
    __s3local0.nameMCDeleted = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(InteractiveMapobject, __s1param0);
  InteractiveMapobject.prototype.initialize = function (__s5param0, __s5param1) {
    __s1param0.prototype.initialize.call(this, __s5param0, __s5param1);
    __s5param0.addEventListener(__dep_export_VisualVOEvent.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onVOChange));
  };
  InteractiveMapobject.prototype.getABGFlamesClip = function (__s7param0) {
    if (__dep_export_ABGHelper.ABGHelper.isOnABGServer) {
      var __s7local0 = __dep_export_ClientConstIsoChangeEventSkin.ClientConstIsoChangeEventSkin.getValidSkinSuffixForCurrentKingdom(true, false);
      var __s7local1 = __dep_export_WorldmapObjectIconHelper.WorldmapObjectIconHelper.FILE_NAME_FLAME_LAYERS_ABG_PREFIX + __s7local0;
      if (__dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.isItemAssetVersioned(__s7local1)) {
        return this.getAsExternalClip(__s7local1 + "_" + __s7param0, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s7local1));
      }
    }
    return null;
  };
  InteractiveMapobject.prototype.initVisualRep = function () {};
  InteractiveMapobject.prototype.clearObjectContainer = function () {
    if (this.objectContainer) {
      this.objectContainer.dispose();
      this.removeMouseListener();
      this.disp.removeChild(this.objectContainer.asDisplayObject());
      this.objectContainer = null;
    }
  };
  InteractiveMapobject.prototype.onChangeCrest = function (__s16param0) {
    this.initVisualRep();
  };
  Object.defineProperty(InteractiveMapobject.prototype, "worldmapObjectVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  InteractiveMapobject.prototype.remove = function () {
    this.onDCTimeOver();
    this.removeMouseListener();
    this.clearObjectContainer();
    __s1param0.prototype.remove.call(this);
  };
  InteractiveMapobject.prototype.removeForPool = function () {
    this.onDCTimeOver();
    this.removeMouseListener();
    this.objectContainer.scaleX = 1;
    this.objectContainer.scaleY = 1;
    this.disp.removeChild(this.objectContainer);
    if (this.objectContainer) {
      this.objectContainer.removeEventListener(__s0local3.COMPLETE, this.bindFunction(this.onAllClipsLoaded));
      if (this.flameClip) {
        this.objectContainer.removeItem(this.flameClip);
        this.flameClip = null;
      }
      this.objectContainer = null;
    }
    this.mapobjectVO.removeEventListener(__dep_export_VisualVOEvent.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onVOChange));
  };
  InteractiveMapobject.prototype.getFlamesClip = function () {
    return this.getAsExternalClip("FlamesLayer");
  };
  InteractiveMapobject.prototype.showFlames = function () {
    if (this.objectContainer) {
      this.flameClip = this.getFlamesClip();
      this.objectContainer.addItem(this.flameClip);
    }
  };
  InteractiveMapobject.prototype.assetFileURL = function (__s31param0) {
    return __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s31param0);
  };
  InteractiveMapobject.prototype.getAsExternalClip = function (__s33param0, __s33param1 = null) {
    __s33param1 ||= this.assetFileURL(__s33param0);
    return new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s33param0, __s33param1, null, 0, false);
  };
  InteractiveMapobject.prototype.showOwnerLines = function () {
    if (!this.worldmapRenderer.camera.isWorldDragging) {
      if (this.worldmapObjectVO.ownerInfo) {
        var __s35local0 = this.worldmapObjectVO.ownerInfo.getCastlePosListByKingdomID(__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID);
        for (var __s35local1 = 0; __s35local1 < this.worldmapObjectVO.customConnections.length; __s35local1++) {
          var __s35local2 = this.worldmapObjectVO.customConnections[__s35local1];
          if (__s35local2.kingdomId == __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID) {
            __s35local0.push(__s35local2);
          }
        }
        if (__s35local0.length > 1) {
          var __s35local3 = this.worldmapObjectVO.ownerInfo.getMainCastlePositionByKingdomID(__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID);
          this.worldmapRenderer.showLines(__s35local3, __s35local0, this.getOwnerLineColor());
          return;
        }
      }
      if (this.worldmapRenderer) {
        this.worldmapRenderer.hideLines();
      }
    }
  };
  InteractiveMapobject.prototype.hideOwnerLines = function () {
    if (this.worldmapRenderer) {
      this.worldmapRenderer.hideLines();
    }
  };
  InteractiveMapobject.prototype.getOwnerLineColor = function () {
    if (this.isOwnMapobject) {
      return 5551034;
    }
    if (__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == __dep_exact_26a421b704832cff_3.FactionConst.KINGDOM_ID) {
      return this.defaultLineColor();
    }
    if (__dep_export_CastleModel.CastleModel.userData.isUserInMyAlliance(this.worldmapObjectVO.ownerInfo)) {
      return 7714850;
    }
    if (!this.worldmapObjectVO.ownerInfo.isInAlliance) {
      return this.defaultLineColor();
    }
    switch (__dep_export_CastleModel.CastleModel.allianceData.getStatusByAlliance(this.worldmapObjectVO.ownerInfo.allianceID)) {
      case __dep_export_AllianceInfoVO.AllianceInfoVO.DIPLOMACY_IN_WAR:
        return 10360577;
      case __dep_export_AllianceInfoVO.AllianceInfoVO.DIPLOMACY_SOFT_ALLIED:
        return 9347503;
      case __dep_export_AllianceInfoVO.AllianceInfoVO.DIPLOMACY_REAL_ALLIED:
        return 15124482;
      default:
        return this.defaultLineColor();
    }
  };
  InteractiveMapobject.prototype.defaultLineColor = function () {
    switch (__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID) {
      case __dep_exact_26a421b704832cff.WorldIce.KINGDOM_ID:
        return 12889753;
      case __dep_exact_26a421b704832cff_1.WorldDessert.KINGDOM_ID:
        return 8877672;
    }
    return 15388850;
  };
  InteractiveMapobject.prototype.getGlowFilter = function () {
    if (__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == __dep_exact_26a421b704832cff.WorldIce.KINGDOM_ID) {
      return __dep_export_BitmapFilterHelper.BitmapFilterHelper.FILTER_GLOW_BLUE;
    } else {
      return __dep_export_BitmapFilterHelper.BitmapFilterHelper.FILTER_GLOW_STANDARD;
    }
  };
  Object.defineProperty(InteractiveMapobject.prototype, "isOwnMapobject", {
    get: function () {
      return !!this.worldmapObjectVO.ownerInfo && this.worldmapObjectVO.ownerInfo.playerID == __dep_export_CastleModel.CastleModel.userData.playerID;
    },
    enumerable: true,
    configurable: true
  });
  InteractiveMapobject.prototype.onVOChange = function (__s63param0) {
    this.initVisualRep();
    if (this.hasRingMenu && this.worldmapObjectVO.isVisibleOnMap) {
      this.showRingMenu();
    }
    if (this.infoComponent) {
      this.infoComponent.setVO(this.worldmapObjectVO);
    }
    this.disp.dispatchEvent(new __dep_export_VisualMapObjectEvent.VisualMapObjectEvent(__dep_export_VisualMapObjectEvent.VisualMapObjectEvent.VE_UPDATED, [this]));
  };
  InteractiveMapobject.prototype.addMouseListener = function () {
    if (this.objectContainer) {
      this.objectContainer.addEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onMouseUp));
      this.objectContainer.addEventListener(__s0local0.ROLL_OVER, this.bindFunction(this.onRollOver));
      this.objectContainer.addEventListener(__s0local0.ROLL_OUT, this.bindFunction(this.onRollOut));
      this.objectContainer.addEventListener(__s0local0.CLICK, this.bindFunction(this.onClickObject));
    }
  };
  InteractiveMapobject.prototype.removeMouseListener = function () {
    if (this.objectContainer) {
      this.objectContainer.removeEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onMouseUp));
      this.objectContainer.removeEventListener(__s0local0.ROLL_OVER, this.bindFunction(this.onRollOver));
      this.objectContainer.removeEventListener(__s0local0.ROLL_OUT, this.bindFunction(this.onRollOut));
      this.objectContainer.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onClickObject));
    }
  };
  InteractiveMapobject.prototype.onClickObject = function (__s73param0) {
    if (this._doubleClickTimer) {
      if (this._doubleClickTimer.running) {
        this.onDoubleClick();
        this.onDCTimeOver();
      }
    } else {
      this._doubleClickTimer = new __dep_exact_81dacdf05bd32292_1.Timer(250, 1);
      this._doubleClickTimer.addEventListener(__s0local1.TIMER, this.bindFunction(this.onDCTimeOver));
      this._doubleClickTimer.start();
    }
  };
  InteractiveMapobject.prototype.onDCTimeOver = function (__s78param0 = null) {
    if (this._doubleClickTimer) {
      this._doubleClickTimer.stop();
      this._doubleClickTimer.removeEventListener(__s0local1.TIMER, this.bindFunction(this.onDCTimeOver));
      this._doubleClickTimer = null;
    }
  };
  InteractiveMapobject.prototype.onDoubleClick = function () {};
  InteractiveMapobject.prototype.onMouseDown = function (__s83param0) {};
  InteractiveMapobject.prototype.onMouseUp = function (__s85param0) {
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().worldmapScreen.renderer.hideLines();
    this.showRingMenu();
    if (__dep_exact_81dacdf05bd32292.currentBrowserInfo.isTouchEvent(__s85param0)) {
      this.worldmapRenderer.camera.objectUnderMouse = this;
      this.worldmapRenderer.renderNavForMobile(true);
    }
  };
  InteractiveMapobject.prototype.showRingMenu = function () {};
  InteractiveMapobject.prototype.onRollOut = function (__s90param0) {
    this.removeGlow();
    this.worldmapRenderer.camera.objectUnderMouse = null;
  };
  InteractiveMapobject.prototype.onRollOver = function (__s92param0) {
    this.addGlow();
    this.worldmapRenderer.camera.objectUnderMouse = this;
  };
  InteractiveMapobject.prototype.addGlow = function () {
    if (this.objectContainer) {
      this.objectContainer.asDisplayObject().useFilters(this.getGlowFilter(), true, 1);
      window.renderStaticStageOnNextTick = true;
    }
  };
  InteractiveMapobject.prototype.removeGlow = function () {
    if (this.objectContainer && this.objectContainer.asDisplayObject().filters && this.objectContainer.asDisplayObject().filters.length > 0) {
      this.objectContainer.asDisplayObject().useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.NO_FILTER, true, 1);
      window.renderStaticStageOnNextTick = true;
    }
  };
  Object.defineProperty(InteractiveMapobject.prototype, "hasRingMenu", {
    get: function () {
      return this._hasRingMenu;
    },
    set: function (__s102param0) {
      this._hasRingMenu = __s102param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobject.prototype, "ignorePeaceProtection", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  InteractiveMapobject.prototype.getNameMC = function () {
    if (this.worldmapObjectVO && this.worldmapObjectVO.ownerInfo) {
      if (this.worldmapObjectVO.areaType == __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_CASTLE && this.worldmapObjectVO.ownerInfo.isRuin || this.worldmapObjectVO.areaType != __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_CASTLE && this.worldmapObjectVO.areaNameString == "" || this.nameMCDeleted) {
        if (this.infoComponent) {
          this.removeNameMC();
        }
        return null;
      } else if (this.infoComponent) {
        return this.infoComponent.nameMC;
      } else {
        this.infoComponent = new __dep_export_CastleMapobjectInfoComponent.CastleMapobjectInfoComponent(this.worldmapObjectVO);
        return this.infoComponent.nameMC;
      }
    } else {
      return null;
    }
  };
  InteractiveMapobject.prototype.removeNameMC = function () {
    if (this.infoComponent.nameMC.itxt_name) {
      this.textFieldManager.unregisterTextField(this.infoComponent.nameMC.castleName_txt);
      this.infoComponent.nameMC.itxt_name = null;
    }
    if (this.infoComponent.nameMC.parent) {
      this.infoComponent.nameMC.parent.removeChild(this.infoComponent.nameMC);
    }
    this.infoComponent.destroy();
    this.nameMCDeleted = true;
  };
  Object.defineProperty(InteractiveMapobject.prototype, "line1Content", {
    get: function () {
      return new __dep_exact_92d05af59ee2ff30.TextVO(this.worldmapObjectVO.areaNameString);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobject.prototype, "line2Content", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobject.prototype, "line3Content", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobject.prototype, "isTimerToolTip", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobject.prototype, "toolTipPosition", {
    get: function () {
      var __s126local0 = __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().worldmapScreen.camera.viewPortZoom;
      return new __s0local2(this.disp.x + __dep_export_ClientConstCastle.ClientConstCastle.MAPTILESIZE_X * 0.5 * __s126local0, this.disp.y + __dep_export_ClientConstCastle.ClientConstCastle.MAPTILESIZE_Y * 0.5 * __s126local0);
    },
    enumerable: true,
    configurable: true
  });
  InteractiveMapobject.prototype.getLevelString = function () {
    var __s128local0 = __dep_exact_92d05af59ee2ff30_1.Localize.text(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_ASSIGN_COLON, [__dep_exact_92d05af59ee2ff30_1.Localize.text("level"), this.worldmapObjectVO.ownerInfo.playerLevel]);
    var __s128local1 = __dep_exact_92d05af59ee2ff30_1.Localize.text(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_ASSIGN_COLON, [__dep_exact_92d05af59ee2ff30_1.Localize.text("legendLevel"), this.worldmapObjectVO.ownerInfo.playerLegendLevel]);
    if (this.worldmapObjectVO.ownerInfo.isLegend) {
      return __dep_exact_92d05af59ee2ff30_1.Localize.text(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_SIMPLE_COMP, [__s128local0, __s128local1]);
    } else {
      return __s128local0;
    }
  };
  InteractiveMapobject.prototype.getHonorLevelString = function () {
    var __s132local0 = __dep_exact_f855840627e6e145.int(this.worldmapObjectVO.ownerInfo.honor);
    if (this.worldmapObjectVO.isOwnMapobject) {
      __s132local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.userData.userHonor);
    }
    var __s132local1 = this.getLevelString();
    var __s132local2 = __dep_exact_92d05af59ee2ff30_1.Localize.text(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_ASSIGN_COLON, [__dep_exact_92d05af59ee2ff30_1.Localize.text("honor"), __s132local0]);
    return __dep_exact_92d05af59ee2ff30_1.Localize.text(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_SIMPLE_COMP, [__s132local1, __s132local2]);
  };
  InteractiveMapobject.prototype.getAllianceString = function () {
    if (this.worldmapObjectVO.ownerInfo.isInAlliance) {
      return this.worldmapObjectVO.ownerInfo.allianceName;
    } else {
      return "";
    }
  };
  Object.defineProperty(InteractiveMapobject.prototype, "clampToViewport", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  return InteractiveMapobject;
}(__dep_export_BasicMapobject.BasicMapobject);
exports.InteractiveMapobject = __s0local4;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local4, "IIngameUICapable", "IWorldMapObject", "IWorldmapTooltipData");
var __dep_export_AllianceInfoVO = require("gge-module:export_AllianceInfoVO");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_WorldmapObjectIconHelper = require("gge-module:export_WorldmapObjectIconHelper");
var __dep_export_CastleMapobjectInfoComponent = require("gge-module:export_CastleMapobjectInfoComponent");
