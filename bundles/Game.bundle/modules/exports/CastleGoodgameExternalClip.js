Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __s0local0 = createjs.Event;
var __s0local1 = function (__s1param0) {
  function CastleGoodgameExternalClip(__s3param0, __s3param1, __s3param2 = null, __s3param3 = 24, __s3param4 = true, __s3param5 = null, __s3param6 = false, __s3param7 = 1, __s3param8 = false, __s3param9 = false, __s3param10 = false, __s3param11 = false) {
    var __s3local0 = this;
    __s3local0.counter = 0;
    __s3local0.useCustomFrameUpdate = false;
    __s3local0.allowCaching = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0, __s3param1, __s3param2, __s3param3, __s3param4, __s3param5, __s3param6, __s3param7, __s3param8, __s3param11) || this).allowCaching = __s3param10;
    __s3local0.checkRequest(__s3param0);
    __s3local0.checkRequest(__s3param1);
    __s3local0.swfSourcePath = __s3param1;
    __s3local0.useCustomFrameUpdate = __s3param9;
    if (__s3local0.isLoaded) {
      __s3local0.onLoadedAndInitialised(null);
    } else {
      __dep_exact_9e901e8e2483a22f_2.GoodgameBitmapEngine.bulkLoader.addEventListener(__dep_exact_9e901e8e2483a22f_1.BulkLoader.COMPLETE, __s3local0.bindFunction(__s3local0.onBulkLoaderComplete));
      __s3local0.clipLoaded.addOnceWithPriority(__s3local0.bindFunction(__s3local0.onLoadedAndInitialised), CastleGoodgameExternalClip.CLIP_LOADED_PRIORITY_STOP_ANIMATIONS);
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleGoodgameExternalClip, __s1param0);
  CastleGoodgameExternalClip.prototype.initCurrentClip = function (__s7param0) {
    if (__s7param0) {
      var __s7local0 = __s7param0.__fname || __s7param0.name;
      __dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.lastExternalClip = __s7local0;
    }
    try {
      __s1param0.prototype.initCurrentClip.call(this, __s7param0);
    } catch (__s11local0) {
      __s7local0 = __s7param0 ? __s7param0.__fname || __s7param0.name : "unknown";
      console.warn("Failed to initialize clip '" + __s7local0 + "': " + (__s11local0 && __s11local0.message ? __s11local0.message : __s11local0));
    }
  };
  CastleGoodgameExternalClip.prototype.jumpToFrame = function (__s13param0) {
    if (__s13param0 != this.currentFrame || this.useCustomFrameUpdate) {
      __s1param0.prototype.jumpToFrame.call(this, __s13param0);
      if (this.isLoaded && this.allowCaching) {
        this.updateCacheIfCached();
      }
    }
  };
  CastleGoodgameExternalClip.prototype.setAllowCaching = function (__s17param0) {
    this.allowCaching = __s17param0;
    if (this.isLoaded) {
      this.initCaching();
    }
  };
  CastleGoodgameExternalClip.prototype.onBulkLoaderComplete = function (__s20param0) {
    __dep_exact_9e901e8e2483a22f_2.GoodgameBitmapEngine.bulkLoader.removeEventListener(__dep_exact_9e901e8e2483a22f_1.BulkLoader.COMPLETE, this.bindFunction(this.onBulkLoaderComplete));
  };
  CastleGoodgameExternalClip.prototype.onLoadedAndInitialised = function (__s22param0) {
    var __s22local0 = this.running;
    __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.stopAllMovies(this);
    if (this.allowCaching) {
      this.initCaching();
    } else if (__s22local0) {
      this.play();
    }
  };
  CastleGoodgameExternalClip.prototype.initCaching = function () {
    this.doCache();
    if (this.cacheCanvas) {
      this.addEventListener(__s0local0.ADDED, this.bindFunction(this.updateCacheEventListener));
      this.addEventListener(__s0local0.REMOVED, this.bindFunction(this.updateCacheEventListener));
    }
  };
  CastleGoodgameExternalClip.prototype.updateCacheEventListener = function (__s29param0) {
    this.updateCacheIfCached();
  };
  CastleGoodgameExternalClip.prototype.checkRequest = function (__s31param0) {
    if (!__s31param0 || __s31param0.toLowerCase().indexOf(CastleGoodgameExternalClip.INVALID_SUBSTRING) != -1) {
      throw new Error("failed asset: " + __s31param0 + "\n" + new Error().stack);
    }
  };
  CastleGoodgameExternalClip.prototype.updateFrame = function (__s34param0) {
    if (!this._paused && this.useCustomFrameUpdate) {
      this.counter += __s34param0;
      var __s34local0 = __dep_exact_f855840627e6e145.int(this.currentFrame);
      if (this.counter > this.timePerFrame) {
        if (++__s34local0 > this._numFrames) {
          __s34local0 = 1;
        }
        this.counter = 0;
      }
      this.jumpToFrame(__s34local0);
    } else {
      __s1param0.prototype.updateFrame.call(this, __s34param0);
    }
  };
  CastleGoodgameExternalClip.prototype.gotoAndStop = function (__s40param0) {
    if (this.useCustomFrameUpdate) {
      this.stop();
      this._startFrame = __s40param0;
      this._endFrame = __s40param0;
      this.jumpToFrame(__s40param0);
    } else {
      __s1param0.prototype.gotoAndStop.call(this, __s40param0);
    }
  };
  CastleGoodgameExternalClip.prototype.doWhenLoaded = function (__s44param0) {
    if (this.isLoaded) {
      __s44param0(this);
    } else {
      this.clipLoaded.addOnce(__s44param0);
    }
  };
  CastleGoodgameExternalClip.prototype.play = function () {
    this._paused = false;
    __s1param0.prototype.play.call(this);
  };
  CastleGoodgameExternalClip.prototype.stop = function () {
    this._paused = true;
    __s1param0.prototype.stop.call(this);
  };
  CastleGoodgameExternalClip.prototype.dispose = function () {
    this.removeEventListener(__s0local0.ADDED, this.bindFunction(this.updateCacheEventListener));
    this.removeEventListener(__s0local0.REMOVED, this.bindFunction(this.updateCacheEventListener));
    __s1param0.prototype.dispose.call(this);
  };
  CastleGoodgameExternalClip.prototype.recolor = function () {
    var __s54local0 = this.currentDisplayObject;
    if (__s54local0 && this._clipColor && this._clipColor.length > 0) {
      for (var __s54local1 = 0, __s54local2 = this._clipColor; __s54local1 < __s54local2.length; __s54local1++) {
        __s54local2[__s54local1].colorClip(__s54local0);
      }
    }
  };
  CastleGoodgameExternalClip.__initialize_static_members = function () {
    CastleGoodgameExternalClip.INVALID_SUBSTRING = "null";
    CastleGoodgameExternalClip.CLIP_LOADED_PRIORITY_STOP_ANIMATIONS = 999;
  };
  return CastleGoodgameExternalClip;
}(__dep_exact_9e901e8e2483a22f_3.GoodgameDisplayObjectClipExternal);
exports.CastleGoodgameExternalClip = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "Container", "IGoodgameClip");
__s0local1.__initialize_static_members();
