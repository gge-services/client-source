Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleWorldmapEvent = require("gge-module:export_CastleWorldmapEvent");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_MapHelper = require("gge-module:export_MapHelper");
var __dep_export_ArmyMapmovement = require("gge-module:export_ArmyMapmovement");
var __s0local0 = createjs.Container;
var __s0local1 = createjs.Point;
var __s0local2 = function (__s1param0) {
  function SupportDefenceMapmovement() {
    var __s3local0 = this;
    __s3local0._isWaiting = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SupportDefenceMapmovement, __s1param0);
  Object.defineProperty(SupportDefenceMapmovement.prototype, "arrowColor", {
    get: function () {
      return 153;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ArmyMapmovement.ArmyMapmovement.prototype, "arrowColor").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  SupportDefenceMapmovement.prototype.initGraphics = function () {
    if (this.supportdefenceMapmovementVO.movementProgress == 1) {
      this._isWaiting = true;
      this.drawCamp();
    } else {
      this._isWaiting = false;
      __s1param0.prototype.initGraphics.call(this);
    }
  };
  SupportDefenceMapmovement.prototype.onUpdateProgress = function () {
    if (!this._isWaiting) {
      __s1param0.prototype.onUpdateProgress.call(this);
    }
    if (this._isWaiting) {
      var __s13local0 = __dep_export_MapHelper.MapHelper.areaToPixelTopLeft(this.mapMovementVO.targetAreaPos);
      var __s13local1 = __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().worldmapScreen.renderer.camera.viewPort.clone();
      __s13local0 = __s13local0.subtract(__s13local1);
      this._movementIconContainer.x = __s13local0.x;
      this._movementIconContainer.y = __s13local0.y;
    }
  };
  SupportDefenceMapmovement.prototype.drawCamp = function () {
    if (this._movementIconContainer) {
      __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this._movementIconContainer);
    } else {
      this.initMovementIconContainer();
    }
    if (this._arrowLayer) {
      this.objectLayer.removeChild(this._arrowLayer);
    }
    var __s17local0 = "MapObjectCamp" + this.iArmyMapmovementVO.getArmySizeLevel() + __dep_export_ArmyMapmovement.ArmyMapmovement.CLIP_KINGDOM_AFFIX_SEPARATOR + "Common";
    var __s17local1 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s17local0, this.assetFileURL(__s17local0), this.clipColor, 0, false);
    this._movementIconContainer.addChild(__s17local1);
    var __s17local2 = __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().worldmapScreen.renderer;
    var __s17local3 = this.areaToPixel(this.mapMovementVO.targetAreaPos);
    var __s17local4 = __s17local2.camera.viewPort;
    __s17local3.x -= __s17local4.x;
    __s17local3.y -= __s17local4.y;
    this._movementIconContainer.x = __s17local3.x - 32;
    this._movementIconContainer.y = __s17local3.y - 32;
  };
  SupportDefenceMapmovement.prototype.initMovementIconContainer = function () {
    if (this._movementIconContainer == null) {
      this._movementIconContainer = new __s0local0();
    }
    this.objectLayer.addChild(this._movementIconContainer);
    this._posOnBezier = new __s0local1();
    this._bezier.position(this._posOnBezier, 0);
    this._movementIconContainer.x = this._posOnBezier.x;
    this._movementIconContainer.y = this._posOnBezier.y;
  };
  SupportDefenceMapmovement.prototype.onRollOver = function (__s25param0) {
    if (!this.hasRingMenu && this._isWaiting) {
      this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.INFOTOOLTIP, [true, this]));
    }
    __s1param0.prototype.onRollOver.call(this, __s25param0);
  };
  SupportDefenceMapmovement.prototype.onRollOut = function (__s28param0) {
    this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.INFOTOOLTIP, [false]));
    __s1param0.prototype.onRollOut.call(this, __s28param0);
  };
  Object.defineProperty(SupportDefenceMapmovement.prototype, "supportdefenceMapmovementVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  SupportDefenceMapmovement.prototype.updateMovementPositionByViewport = function (__s32param0, __s32param1) {
    if (this.supportdefenceMapmovementVO.movementProgress < 1) {
      __s1param0.prototype.updateMovementPositionByViewport.call(this, __s32param0, __s32param1);
    } else if (!__s32param0.equals(this.viewPointStart) || this.lastZoom != __s32param1) {
      this.lastZoom = __s32param1;
      this.viewPointStart.x = __s32param0.x;
      this.viewPointStart.y = __s32param0.y;
      var __s32local0 = this.areaToPixel(this.supportdefenceMapmovementVO.targetAreaPos);
      __s32local0 = __s32local0.subtract(this.viewPointStart);
      this._movementIconContainer.x = __s32local0.x - 32;
      this._movementIconContainer.y = __s32local0.y - 32;
    }
  };
  Object.defineProperty(SupportDefenceMapmovement.prototype, "line1Content", {
    get: function () {
      return new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("movementToolTip_supporting");
    },
    set: function (__s38param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ArmyMapmovement.ArmyMapmovement.prototype, "line1Content").set.call(this, __s38param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SupportDefenceMapmovement.prototype, "line2Content", {
    get: function () {
      return new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_ASSIGN_COLON, ["resttime", __dep_exact_9e901e8e2483a22f_2.TimeStringHelper.getShortTimeStringBySeconds(this.supportdefenceMapmovementVO.getTimeUntilWaitOverInSeconds())]);
    },
    set: function (__s42param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ArmyMapmovement.ArmyMapmovement.prototype, "line2Content").set.call(this, __s42param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SupportDefenceMapmovement.prototype, "line3Content", {
    get: function () {
      return null;
    },
    set: function (__s46param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ArmyMapmovement.ArmyMapmovement.prototype, "line3Content").set.call(this, __s46param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SupportDefenceMapmovement.prototype, "isTimerToolTip", {
    get: function () {
      return true;
    },
    set: function (__s50param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ArmyMapmovement.ArmyMapmovement.prototype, "isTimerToolTip").set.call(this, __s50param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SupportDefenceMapmovement.prototype, "toolTipPosition", {
    get: function () {
      var __s52local0 = __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().worldmapScreen.camera.viewPortZoom;
      var __s52local1 = this.movementIconContainer.getBounds(null);
      return new __s0local1((this.movementIconContainer.x + __s52local1.x + __s52local1.width / 2) * __s52local0, (this.movementIconContainer.y + __s52local1.y + __s52local1.height / 2) * __s52local0);
    },
    set: function (__s54param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ArmyMapmovement.ArmyMapmovement.prototype, "toolTipPosition").set.call(this, __s54param0);
    },
    enumerable: true,
    configurable: true
  });
  return SupportDefenceMapmovement;
}(__dep_export_ArmyMapmovement.ArmyMapmovement);
exports.SupportDefenceMapmovement = __s0local2;
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "IIngameUICapable", "IWorldmapTooltipData");
