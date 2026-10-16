Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_SettingsEvent = require("gge-module:export_SettingsEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __dep_export_VisualMapElement = require("gge-module:export_VisualMapElement");
var __dep_export_CastleBezier = require("gge-module:export_CastleBezier");
var __s0local0 = createjs.Shape;
var __s0local1 = createjs.Container;
var __s0local2 = createjs.MouseEvent;
var __s0local3 = createjs.Point;
var __s0local4 = function (__s1param0) {
  function BasicMapmovement() {
    var __s3local0 = this;
    __s3local0.pointingRight = false;
    __s3local0.hasJumped = false;
    __s3local0.lastZoom = 0;
    __s3local0.graphicsInitialized = false;
    __s3local0.coordsRelativated = false;
    __s3local0._direction = 1;
    __s3local0.distanceType = BasicMapmovement.NORMALDISTANCE;
    __s3local0._lastAnimationUpdateTimeStamp = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).isMutable = true;
    __s3local0.style = new __dep_exact_9e901e8e2483a22f.ArrowStyle();
    __s3local0.style.shaftThickness = 20;
    __s3local0.style.headWidth = 35;
    __s3local0.style.headLength = 35;
    __s3local0.style.shaftPosition = 0;
    __s3local0.style.edgeControlPosition = 0.5;
    __s3local0.style.edgeControlSize = 0.5;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(BasicMapmovement, __s1param0);
  BasicMapmovement.prototype.initialize = function (__s5param0, __s5param1) {
    __s1param0.prototype.initialize.call(this, __s5param0, __s5param1);
    __dep_export_CastleModel.CastleModel.settingsData.addEventListener(__dep_export_SettingsEvent.SettingsEvent.WORLDMAPMOVEMNTS_VISIBILITY_CHANGED, this.bindFunction(this.onChangedVisible));
    __dep_export_CastleModel.CastleModel.settingsData.addEventListener(__dep_export_SettingsEvent.SettingsEvent.ARE_WORLDMAPMOVEMNTS_VISIBILITY_CHANGED, this.bindFunction(this.onChangedVisible));
    this.disp.addEventListener(__s0local2.MOUSE_OVER, this.bindFunction(this.doZSortForHoverMovement));
  };
  BasicMapmovement.prototype.doZSortForHoverMovement = function (__s7param0) {
    if (this.disp && this.disp.parent && this.disp.parent.getChildIndex(this.disp) != this.disp.parent.numChildren - 1) {
      this.disp.parent.setChildIndex(this.disp, this.disp.parent.numChildren - 1);
    }
  };
  BasicMapmovement.prototype.onChangedVisible = function (__s10param0) {
    this.disp.visible = __dep_export_CastleModel.CastleModel.settingsData.worldmapMovementsVisible;
    if (this.disp.visible && this.mapMovementVO.targetArea.areaType == __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_ARE_PORTAL && this.mapMovementVO.movementOwnerID != __dep_export_CastleModel.CastleModel.userData.playerID) {
      this.disp.visible = __dep_export_CastleModel.CastleModel.settingsData.worldmapAREMovementsVisible;
    }
  };
  BasicMapmovement.prototype.initVisualRep = function () {
    __s1param0.prototype.initVisualRep.call(this);
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.disp);
    this.setPositioning();
    this.calculateBezier();
    this.baseCampLayer = new __s0local1();
    this.disp.addChild(this.baseCampLayer);
    this.objectLayer = new __s0local1();
    this.disp.addChild(this.objectLayer);
    this.initGraphics();
    this.redrawGraphics();
    this.disp.visible = __dep_export_CastleModel.CastleModel.settingsData.worldmapMovementsVisible;
    if (this.disp.visible && this.mapMovementVO.targetArea.areaType == __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_ARE_PORTAL && this.mapMovementVO.movementOwnerID != __dep_export_CastleModel.CastleModel.userData.playerID) {
      this.disp.visible = __dep_export_CastleModel.CastleModel.settingsData.worldmapAREMovementsVisible;
    }
  };
  BasicMapmovement.prototype.update = function (__s16param0) {
    if (this._lastAnimationUpdateTimeStamp + BasicMapmovement.ANIMATION_UPDATE_INTERVAL + (this.worldmapRenderer.amountMovementsToRender >= BasicMapmovement.ANIMATION_RENDER_LIMIT ? (this.worldmapRenderer.amountMovementsToRender - BasicMapmovement.ANIMATION_RENDER_LIMIT) * BasicMapmovement.ANIMATION_ADDITIONAL_INTERVAL_FOR_ONE_MOVEMENT : 0) < __s16param0 && this.disp.visible) {
      this.onUpdateProgress();
      this._lastAnimationUpdateTimeStamp = __s16param0;
    }
  };
  BasicMapmovement.prototype.worldWidth = function () {
    return __dep_exact_f855840627e6e145.int(__dep_export_ClientConstCastle.ClientConstCastle.WORLDMAPSIZE_X * __dep_export_ClientConstCastle.ClientConstCastle.SECTORPIXELSIZE_X);
  };
  BasicMapmovement.prototype.onUpdateProgress = function () {
    if (this.disp.visible) {
      var __s21local0 = false;
      this._bezier.position(this._posOnBezier, this.mapMovementVO.movementProgress);
      var __s21local1 = Math.trunc(this._posOnBezier.x);
      var __s21local2 = Math.trunc(this._posOnBezier.y);
      if (Math.trunc(this._movementIconContainer.x) != __s21local1) {
        __s21local0 = true;
      }
      if (Math.trunc(this._movementIconContainer.y) != __s21local2) {
        __s21local0 = true;
      }
      this.setProgressLayerVisibility();
      if (__s21local0) {
        this._movementIconContainer.x = __s21local1;
        this._movementIconContainer.y = __s21local2;
        __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.snapToScreenPixels(this._movementIconContainer);
        this._arrowLayerGrowingMask.scaleX = this.mapMovementVO.movementProgress;
      }
    }
  };
  Object.defineProperty(BasicMapmovement.prototype, "isProgressLayerShown", {
    get: function () {
      return this.worldmapRenderer.amountMovementsToRender <= BasicMapmovement.ANIMATION_PROGRESS_LAYER_RENDER_LIMIT;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapmovement.prototype, "arrowColor", {
    get: function () {
      return 16750899;
    },
    enumerable: true,
    configurable: true
  });
  BasicMapmovement.prototype.initGraphics = function () {
    this._arrowLayer = new __s0local1();
    this._arrowLayer.mouseChildren = false;
    this._arrowLayerShadow = new __s0local0();
    this._arrowLayerGrowing = new __s0local0();
    this._arrowLayerGrowingMask = new __s0local0();
    this.setCorrectGeo();
    this._arrowLayer.addChild(this._arrowLayerShadow);
    this._arrowLayer.addChild(this._arrowLayerGrowing);
    this._arrowLayer.addChild(this._arrowLayerGrowingMask);
    this._arrowLayerGrowing.mask = this._arrowLayerGrowingMask;
    this.objectLayer.addChild(this._arrowLayer);
    this.drawMovementIcon();
    this.graphicsInitialized = true;
  };
  BasicMapmovement.prototype.setCorrectGeo = function () {
    var __s33local0 = __dep_exact_f855840627e6e145.int(this.pixelEndPos.x - this.pixelStartPos.x);
    var __s33local1 = __dep_exact_f855840627e6e145.int(this.pixelEndPos.y - this.pixelStartPos.y);
    var __s33local2 = __dep_exact_f855840627e6e145.int(Math.atan(__s33local1 / __s33local0) * (180 / Math.PI));
    var __s33local3 = 1;
    if (__s33local0 < 0) {
      __s33local3 = -1;
    }
    var __s33local4 = __dep_exact_f855840627e6e145.int(this.getDistance(this.pixelStartPos, this.pixelEndPos));
    this._posOnBezier = new __s0local3();
    this._bezier.position(this._posOnBezier, 1 - 60 / __s33local4);
    this._arrowLayerShadow.graphics.clear();
    this._arrowLayerGrowing.graphics.clear();
    this._arrowLayerShadow.graphics.beginFill(this.arrowColor, 0.4);
    this._arrowLayerGrowing.graphics.beginFill(this.arrowColor, 0.5);
    var __s33local5;
    var __s33local6 = new __s0local3();
    this._bezier.position(__s33local6, 0.5);
    __s33local6.x += __s33local1 > 0 ? this.style.shaftThickness : -this.style.shaftThickness;
    __s33local6.y -= this.style.shaftThickness;
    __s33local5 = __dep_exact_9e901e8e2483a22f_2.GraphicsUtil.drawArrowBezier(this._arrowLayerShadow.graphics, this.pixelStartPos, this.pixelEndPos, this.style);
    __s33local5 = __dep_exact_9e901e8e2483a22f_2.GraphicsUtil.getBoundsByPoints([__s33local5.topLeft, __s33local5.bottomRight, __s33local6]);
    this._arrowLayerShadow.setBounds(__s33local5.x, __s33local5.y, __s33local5.width, __s33local5.height);
    __dep_exact_9e901e8e2483a22f_2.GraphicsUtil.drawArrowBezier(this._arrowLayerGrowing.graphics, this.pixelStartPos, this.pixelEndPos, this.style);
    this._arrowLayerGrowing.setBounds(__s33local5.x, __s33local5.y, __s33local5.width, __s33local5.height);
    this._arrowLayerShadow.graphics.endFill();
    this._arrowLayerGrowing.graphics.endFill();
    this._arrowLayerShadow.graphics.lineStyle();
    this._arrowLayerGrowing.graphics.lineStyle();
    var __s33local7 = __dep_exact_f855840627e6e145.int(Math.sqrt(Math.pow(__s33local0, 2) + Math.pow(__s33local1, 2)));
    var __s33local8 = __dep_exact_f855840627e6e145.int(Math.max(__s33local7 * 0.2, 100));
    this.drawRectangle(this._arrowLayerGrowingMask, this.pixelStartPos, __s33local7, __s33local8);
    if (__s33local3 < 1) {
      __s33local2 -= 180;
    }
    this._arrowLayerGrowingMask.rotation = __s33local2;
  };
  BasicMapmovement.prototype.redrawGraphics = function () {
    if (this.graphicsInitialized) {
      this.setPositioning();
      this.calculateBezier();
      this.baseCampLayer.x = this.pixelStartPos.x - 32;
      this.baseCampLayer.y = this.pixelStartPos.y - 32;
      this.setCorrectGeo();
      this.onUpdateProgress();
      if (this._arrowLayer.filters && this._arrowLayer.filters.length > 0) {
        this._arrowLayer.doCache(0, 1);
      }
    }
  };
  BasicMapmovement.prototype.calculateBezier = function () {
    var __s41local0 = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstCastle.ClientConstCastle.WORLDMAPSIZE_X * __dep_export_ClientConstCastle.ClientConstCastle.SECTORPIXELSIZE_X);
    this.pointingRight = this.arrowPointsToTheRight();
    if (this.pointingRight && this.pixelStartPos.x > this.pixelEndPos.x) {
      this.pixelStartPos.x -= __s41local0;
      this.hasJumped = true;
    } else if (!this.pointingRight && this.pixelStartPos.x < this.pixelEndPos.x) {
      this.pixelEndPos.x -= __s41local0;
      this.hasJumped = true;
    } else {
      this.hasJumped = false;
    }
    this.curveControlPoint = this.getCurveControlPoint(this.pixelStartPos, this.pixelEndPos);
    this._bezier = new __dep_export_CastleBezier.CastleBezier(this.pixelStartPos.x, this.pixelStartPos.y, this.curveControlPoint.x, this.curveControlPoint.y, this.pixelEndPos.x, this.pixelEndPos.y);
    this._posOnBezier = new __s0local3();
  };
  BasicMapmovement.prototype.setPositioning = function () {
    this.pixelStartPos = this.areaToPixel(this.mapMovementVO.sourceAreaPos);
    this.pixelEndPos = this.areaToPixel(this.mapMovementVO.targetAreaPos);
    var __s46local0 = this.worldmapRenderer.camera.viewPort.clone();
    this.lastZoom = this.worldmapRenderer.camera.viewPortZoom;
    this.pixelStartPos = this.pixelStartPos.subtract(__s46local0);
    this.pixelEndPos = this.pixelEndPos.subtract(__s46local0);
    this.viewPointStart = __s46local0;
    this.clampXCoord(this.pixelStartPos);
    this.clampXCoord(this.pixelEndPos);
  };
  BasicMapmovement.prototype.arrowPointsToTheRight = function () {
    this.clampXCoord(this.pixelEndPos);
    this.clampXCoord(this.pixelStartPos);
    var __s48local0 = Math.abs(this.pixelEndPos.x - this.pixelStartPos.x);
    var __s48local1 = this.pixelStartPos.x < this.pixelEndPos.x;
    if (__s48local0 > this.worldWidth() / 2) {
      return !__s48local1;
    } else {
      return __s48local1;
    }
  };
  BasicMapmovement.prototype.clampXCoord = function (__s52param0) {
    var __s52local0 = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstCastle.ClientConstCastle.WORLDMAPSIZE_X * __dep_export_ClientConstCastle.ClientConstCastle.SECTORPIXELSIZE_X);
    if (__s52param0.x > __s52local0) {
      __s52param0.x -= __s52local0;
    }
    if (__s52param0.x < 0) {
      __s52param0.x += __s52local0;
    }
  };
  BasicMapmovement.prototype.initMovementIconContainer = function () {
    if (this._movementIconContainer == null) {
      this._movementIconContainer = new __s0local1();
      this.objectLayer.addChild(this._movementIconContainer);
    }
    this._posOnBezier = new __s0local3();
    if (this.mapMovementVO == null || this.mapMovementVO.movementProgress <= 0) {
      this._bezier.position(this._posOnBezier, 0);
    } else {
      this._bezier.position(this._posOnBezier, this.mapMovementVO.movementProgress);
      this.setProgressLayerVisibility();
      this._arrowLayerGrowingMask.scaleX = this.mapMovementVO.movementProgress;
    }
    this._movementIconContainer.x = __dep_exact_f855840627e6e145.int(this._posOnBezier.x);
    this._movementIconContainer.y = __dep_exact_f855840627e6e145.int(this._posOnBezier.y);
  };
  BasicMapmovement.prototype.setProgressLayerVisibility = function () {
    if (this.isProgressLayerShown) {
      if (!this._arrowLayerGrowing.visible) {
        this._arrowLayerGrowing.visible = true;
        this._arrowLayerGrowingMask.visible = true;
      }
    } else if (!this.isProgressLayerShown) {
      if (this._arrowLayerGrowing.visible) {
        this._arrowLayerGrowing.visible = false;
        this._arrowLayerGrowingMask.visible = false;
      }
    }
  };
  BasicMapmovement.prototype.drawMovementIcon = function () {};
  BasicMapmovement.prototype.drawRectangle = function (__s69param0, __s69param1, __s69param2, __s69param3) {
    __s69param0.x = __s69param1.x;
    __s69param0.y = __s69param1.y;
    var __s69local0 = __s69param0.graphics;
    __s69local0.clear();
    __s69local0.beginFill(16777215);
    __s69local0.drawRect(0, __s69param3 * -0.5, __s69param2, __s69param3);
    __s69local0.endFill();
  };
  BasicMapmovement.prototype.getDistance = function (__s71param0, __s71param1) {
    return __dep_exact_f855840627e6e145.int(__s0local3.distance(__s71param0, __s71param1));
  };
  BasicMapmovement.prototype.getCurveControlPoint = function (__s73param0, __s73param1) {
    var __s73local0 = 0;
    __s73local0 = __dep_exact_f855840627e6e145.int(__s0local3.distance(__s73param0, __s73param1)) < BasicMapmovement.ROUND_TO_LINEAR_ARROWRANGE_INPIXEL ? 0 : 0.1;
    var __s73local1 = __dep_exact_f855840627e6e145.int(__s73param1.x - __s73param0.x);
    var __s73local2 = __dep_exact_f855840627e6e145.int(__s73param1.y - __s73param0.y);
    var __s73local3 = __s73local1 / 2;
    var __s73local4 = __s73local2 / 2;
    if (__s73local1 < 0) {
      __s73local1 = -__s73local1;
      __s73local2 = -__s73local2;
      this._direction = 0;
    }
    var __s73local5 = __dep_exact_f855840627e6e145.int(__s73param0.x + __s73local3 + __s73local2 * __s73local0);
    var __s73local6 = __dep_exact_f855840627e6e145.int(__s73param0.y + __s73local4 - __s73local1 * __s73local0);
    return new __s0local3(__s73local5, __s73local6);
  };
  BasicMapmovement.prototype.areaToPixel = function (__s76param0) {
    return new __s0local3(__s76param0.x * __dep_export_ClientConstCastle.ClientConstCastle.MAPTILESIZE_X + __dep_export_ClientConstCastle.ClientConstCastle.MAPTILESIZE_X / 2, __s76param0.y * __dep_export_ClientConstCastle.ClientConstCastle.MAPTILESIZE_Y + __dep_export_ClientConstCastle.ClientConstCastle.MAPTILESIZE_Y / 2);
  };
  Object.defineProperty(BasicMapmovement.prototype, "movementIconContainer", {
    get: function () {
      return this._movementIconContainer;
    },
    enumerable: true,
    configurable: true
  });
  BasicMapmovement.prototype.remove = function () {
    __s1param0.prototype.remove.call(this);
    this.disp.removeEventListener(__s0local2.MOUSE_OVER, this.bindFunction(this.doZSortForHoverMovement));
    while (this.disp.numChildren > 0) {
      this.disp.removeChildAt(0);
    }
    __dep_export_CastleModel.CastleModel.settingsData.removeEventListener(__dep_export_SettingsEvent.SettingsEvent.WORLDMAPMOVEMNTS_VISIBILITY_CHANGED, this.bindFunction(this.onChangedVisible));
    __dep_export_CastleModel.CastleModel.settingsData.removeEventListener(__dep_export_SettingsEvent.SettingsEvent.ARE_WORLDMAPMOVEMNTS_VISIBILITY_CHANGED, this.bindFunction(this.onChangedVisible));
  };
  Object.defineProperty(BasicMapmovement.prototype, "direction", {
    get: function () {
      return this._direction;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapmovement.prototype, "mapMovementVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapmovement.prototype, "hasRingMenu", {
    get: function () {
      return false;
    },
    set: function (__s90param0) {},
    enumerable: true,
    configurable: true
  });
  BasicMapmovement.prototype.updateMovementPositionByViewport = function (__s92param0, __s92param1) {
    if (!__s92param0.equals(this.viewPointStart) || this.lastZoom != __s92param1) {
      this.lastZoom = __s92param1;
      this.viewPointStart = __s92param0;
      this.redrawGraphics();
    }
  };
  BasicMapmovement.prototype.assetFileURL = function (__s95param0) {
    return __dep_exact_9e901e8e2483a22f_1.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s95param0);
  };
  BasicMapmovement.__initialize_static_members = function () {
    BasicMapmovement.ANIMATION_UPDATE_INTERVAL = 175;
    BasicMapmovement.ANIMATION_ADDITIONAL_INTERVAL_FOR_ONE_MOVEMENT = 175;
    BasicMapmovement.ANIMATION_RENDER_LIMIT = 30;
    BasicMapmovement.ROUND_TO_LINEAR_ARROWRANGE_INPIXEL = 150;
    BasicMapmovement.ANIMATION_PROGRESS_LAYER_RENDER_LIMIT = 30;
    BasicMapmovement.NORMALDISTANCE = "no_loop";
  };
  return BasicMapmovement;
}(__dep_export_VisualMapElement.VisualMapElement);
exports.BasicMapmovement = __s0local4;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local4, "IIngameUICapable");
__s0local4.__initialize_static_members();
