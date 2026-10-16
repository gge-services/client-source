Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __dep_export_VisualVOEvent = require("gge-module:export_VisualVOEvent");
var __dep_export_CastleWorldmapConst = require("gge-module:export_CastleWorldmapConst");
var __dep_export_VisualMapElement = require("gge-module:export_VisualMapElement");
var __s0local0 = createjs.Event;
var __dep_export_renderScheduler = require("gge-module:export_renderScheduler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __s0local1 = function (__s1param0) {
  function BasicMapobject() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(BasicMapobject, __s1param0);
  BasicMapobject.prototype.addObjectContainer = function () {
    if (this.objectContainer) {
      this.disp.addChild(this.objectContainer.asDisplayObject());
      this.objectContainer.asDisplayObject().scaleX = this.objectContainer.asDisplayObject().scaleY /= __dep_export_CastleWorldmapConst.CastleWorldmapConst.ZOOM_MAX;
      var __s5local0 = castAs(this.objectContainer, "CastleDisplayObjectClipContainer");
      if (__s5local0) {
        if (__s5local0.areAllClipsLoaded()) {
          this.onAllClipsLoaded(null);
        } else {
          __s5local0.addEventListener(__s0local0.COMPLETE, this.bindFunction(this.onAllClipsLoaded));
        }
      }
    }
  };
  BasicMapobject.prototype.onAllClipsLoaded = function (__s11param0) {
    var __s11local0 = this;
    if (this.objectContainer) {
      __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.uncacheSafe(this.objectContainer.asDisplayObject());
      __dep_export_renderScheduler.renderScheduler.addTask(function () {
        return !__s11local0.objectContainer || !__s11local0.objectContainer.asDisplayObject().stage || (__s11local0.objectContainer.asDisplayObject().doCache(BasicMapobject.ADDITIONAL_CACHE_SIZE, 1), __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().renderStaticStage(), false);
      });
      this.objectContainer.removeEventListener(__s0local0.COMPLETE, this.bindFunction(this.onAllClipsLoaded));
    }
  };
  BasicMapobject.prototype.onVOChange = function (__s16param0) {
    this.initVisualRep();
  };
  Object.defineProperty(BasicMapobject.prototype, "initialX", {
    get: function () {
      return this.vo.x * __dep_export_ClientConstCastle.ClientConstCastle.MAPTILESIZE_X;
    },
    set: function (__s20param0) {
      Object.getOwnPropertyDescriptor(__dep_export_VisualMapElement.VisualMapElement.prototype, "initialX").set.call(this, __s20param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapobject.prototype, "initialY", {
    get: function () {
      return this.vo.y * __dep_export_ClientConstCastle.ClientConstCastle.MAPTILESIZE_Y;
    },
    set: function (__s24param0) {
      Object.getOwnPropertyDescriptor(__dep_export_VisualMapElement.VisualMapElement.prototype, "initialY").set.call(this, __s24param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapobject.prototype, "mapobjectVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  BasicMapobject.prototype.remove = function () {
    if (this.objectContainer) {
      this.objectContainer.dispose();
      this.objectContainer.removeEventListener(__s0local0.COMPLETE, this.bindFunction(this.onAllClipsLoaded));
    }
    this.mapobjectVO.removeEventListener(__dep_export_VisualVOEvent.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onVOChange));
    __s1param0.prototype.remove.call(this);
  };
  Object.defineProperty(BasicMapobject.prototype, "hasRingMenu", {
    get: function () {
      return false;
    },
    set: function (__s33param0) {},
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapobject.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  BasicMapobject.ADDITIONAL_CACHE_SIZE = 6;
  return BasicMapobject;
}(__dep_export_VisualMapElement.VisualMapElement);
exports.BasicMapobject = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "IIngameUICapable");
