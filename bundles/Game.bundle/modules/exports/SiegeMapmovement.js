Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleWorldmapEvent = require("gge-module:export_CastleWorldmapEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_ArmyMapmovement = require("gge-module:export_ArmyMapmovement");
var __s0local0 = createjs.Container;
var __s0local1 = createjs.Point;
var __s0local2 = function (__s1param0) {
  function SiegeMapmovement() {
    var __s3local0 = this;
    __s3local0._isWaiting = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SiegeMapmovement, __s1param0);
  Object.defineProperty(SiegeMapmovement.prototype, "arrowColor", {
    get: function () {
      return 153;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ArmyMapmovement.ArmyMapmovement.prototype, "arrowColor").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  SiegeMapmovement.prototype.initGraphics = function () {
    if (this.siegeMapmovementVO.movementProgress <= 1) {
      this._isWaiting = true;
      __dep_exact_9e901e8e2483a22f_3.debug("------------------------------ Siegemovement movementProgress <= 1 - drawing siege");
      this.drawSiege();
    } else {
      this._isWaiting = false;
      __dep_exact_9e901e8e2483a22f_3.debug("------------------------------ Siegemovement movementProgress > 1 - calling super.initGraphics()");
      __s1param0.prototype.initGraphics.call(this);
    }
  };
  SiegeMapmovement.prototype.drawMovementIcon = function () {
    this.drawSiege();
  };
  SiegeMapmovement.prototype.onUpdateProgress = function () {
    if (!this._isWaiting) {
      __s1param0.prototype.onUpdateProgress.call(this);
    }
  };
  SiegeMapmovement.prototype.drawSiege = function () {
    if (this._movementIconContainer) {
      __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this._movementIconContainer);
    } else {
      this.initMovementIconContainer();
    }
    if (this._arrowLayer) {
      this.objectLayer.removeChild(this._arrowLayer);
    }
    var __s18local0 = __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().worldmapScreen.renderer.camera.viewPort;
    var __s18local1 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("MapObjectSiege_Common", this.assetFileURL("MapObjectSiege_Common"), this.clipColor, 0, false, null, false, 1, false, false, true);
    this._movementIconContainer.addChild(__s18local1);
    var __s18local2 = this.areaToPixel(this.siegeMapmovementVO.targetAreaPos);
    this._movementIconContainer.x = __s18local2.x - 32 - __s18local0.x;
    this._movementIconContainer.y = __s18local2.y - 32 - __s18local0.y;
  };
  SiegeMapmovement.prototype.initMovementIconContainer = function () {
    if (this._movementIconContainer == null) {
      this._movementIconContainer = new __s0local0();
    }
    this.objectLayer.addChild(this._movementIconContainer);
    this._posOnBezier = new __s0local1();
    this._bezier.position(this._posOnBezier, 0);
    this._movementIconContainer.x = this._posOnBezier.x;
    this._movementIconContainer.y = this._posOnBezier.y;
  };
  SiegeMapmovement.prototype.onRollOver = function (__s26param0) {
    if (!this.hasRingMenu && this._isWaiting) {
      this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.INFOTOOLTIP, [true, this]));
    }
    __s1param0.prototype.onRollOver.call(this, __s26param0);
  };
  SiegeMapmovement.prototype.onRollOut = function (__s29param0) {
    this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.INFOTOOLTIP, [false]));
    __s1param0.prototype.onRollOut.call(this, __s29param0);
  };
  SiegeMapmovement.prototype.onMouseUp = function (__s31param0 = null) {
    if (__dep_export_CastleModel.CastleModel.userData.playerID == this.mapMovementVO.movementOwnerInfo.playerID) {
      this.showRingMenu();
    }
  };
  SiegeMapmovement.prototype.updateMovementPositionByViewport = function (__s34param0, __s34param1) {
    if (!__s34param0.equals(this.viewPointStart) || this.lastZoom != __s34param1) {
      this.lastZoom = __s34param1;
      this.viewPointStart.x = __s34param0.x;
      this.viewPointStart.y = __s34param0.y;
      var __s34local0 = this.areaToPixel(this.siegeMapmovementVO.targetAreaPos);
      __s34local0 = __s34local0.subtract(this.viewPointStart);
      this._movementIconContainer.x = __s34local0.x - 32;
      this._movementIconContainer.y = __s34local0.y - 32;
    }
  };
  Object.defineProperty(SiegeMapmovement.prototype, "siegeMapmovementVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SiegeMapmovement.prototype, "line1Content", {
    get: function () {
      if (this.ringMenuBlocksTooltip()) {
        return null;
      } else {
        return new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_CastleTitleSystemHelper.CastleTitleSystemHelper.getPlayerNameWithTitleFromPlayerInfo(this.siegeMapmovementVO.movementOwnerInfo));
      }
    },
    set: function (__s43param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ArmyMapmovement.ArmyMapmovement.prototype, "line1Content").set.call(this, __s43param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SiegeMapmovement.prototype, "line2Content", {
    get: function () {
      if (this.ringMenuBlocksTooltip()) {
        return null;
      } else {
        return new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_ASSIGN_COLON, ["resttime", __dep_exact_9e901e8e2483a22f_2.TimeStringHelper.getShortTimeStringBySeconds(this.siegeMapmovementVO.getTimeUntilWaitOverInSeconds())]);
      }
    },
    set: function (__s49param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ArmyMapmovement.ArmyMapmovement.prototype, "line2Content").set.call(this, __s49param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SiegeMapmovement.prototype, "line3Content", {
    get: function () {
      return null;
    },
    set: function (__s53param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ArmyMapmovement.ArmyMapmovement.prototype, "line3Content").set.call(this, __s53param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SiegeMapmovement.prototype, "isTimerToolTip", {
    get: function () {
      return !this.ringMenuBlocksTooltip();
    },
    set: function (__s57param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ArmyMapmovement.ArmyMapmovement.prototype, "isTimerToolTip").set.call(this, __s57param0);
    },
    enumerable: true,
    configurable: true
  });
  SiegeMapmovement.prototype.ringMenuBlocksTooltip = function () {
    var __s59local0 = this.siegeMapmovementVO.targetArea;
    var __s59local1 = __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().getIngameUIComponent(__dep_export_WorldMapCastleInfoMenu.WorldMapCastleInfoMenu);
    if (__dep_exact_81dacdf05bd32292_2.instanceOfClass(__s59local1, "WorldMapCastleInfoMenu")) {
      var __s59local2 = __dep_exact_81dacdf05bd32292.castAs(__s59local1, "WorldMapCastleInfoMenu");
      return !!__s59local2 && !!__s59local2.isVisible() && __s59local2.worldMapTarget.worldmapObjectVO.equalsOtherWMO(__s59local0.objectId, __s59local0.kingdomID);
    }
    return false;
  };
  Object.defineProperty(SiegeMapmovement.prototype, "toolTipPosition", {
    get: function () {
      var __s62local0 = __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().worldmapScreen.camera.viewPortZoom;
      var __s62local1 = this.movementIconContainer.getBounds(null);
      return new __s0local1((this.movementIconContainer.x + __s62local1.x + __s62local1.width / 2) * __s62local0, (this.movementIconContainer.y + __s62local1.y + __s62local1.height / 2) * __s62local0);
    },
    set: function (__s64param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ArmyMapmovement.ArmyMapmovement.prototype, "toolTipPosition").set.call(this, __s64param0);
    },
    enumerable: true,
    configurable: true
  });
  return SiegeMapmovement;
}(__dep_export_ArmyMapmovement.ArmyMapmovement);
exports.SiegeMapmovement = __s0local2;
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleTitleSystemHelper = require("gge-module:export_CastleTitleSystemHelper");
var __dep_export_WorldMapCastleInfoMenu = require("gge-module:export_WorldMapCastleInfoMenu");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local2, "IIngameUICapable", "IWorldmapTooltipData");
