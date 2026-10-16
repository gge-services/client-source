Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __s0local0 = createjs.Point;
var __s0local1 = function () {
  function WorldmapObjectFlagHelper() {
    this._id = 0;
    this._busy = false;
    this._flagLoaded = false;
    this._castleMapObjectLoaded = false;
    this._shouldHandleInnerFlag = false;
    this._id = __dep_export_CachedTimer.CachedTimer.getCachedTimer();
  }
  WorldmapObjectFlagHelper.watchAndFix = function (__s5param0, __s5param1, __s5param2) {
    var __s5local0;
    if (__s5param2 === undefined) {
      __s5param2 = false;
    }
    WorldmapObjectFlagHelper._pool ||= [];
    if (WorldmapObjectFlagHelper._pool != null) {
      for (var __s5local1 = 0, __s5local2 = WorldmapObjectFlagHelper._pool; __s5local1 < __s5local2.length; __s5local1++) {
        var __s5local3 = __s5local2[__s5local1];
        if (__s5local3 !== undefined && __s5local3 && !__s5local3.isBusy) {
          __s5local0 = __s5local3;
          break;
        }
      }
    }
    if (!__s5local0) {
      __s5local0 = new WorldmapObjectFlagHelper();
      WorldmapObjectFlagHelper._pool.push(__s5local0);
    }
    __s5local0.align(__s5param0, __s5param1, __s5param2);
  };
  Object.defineProperty(WorldmapObjectFlagHelper.prototype, "isBusy", {
    get: function () {
      return this._busy;
    },
    enumerable: true,
    configurable: true
  });
  WorldmapObjectFlagHelper.prototype.align = function (__s15param0, __s15param1, __s15param2 = false) {
    this.resetAndRelease();
    this._shouldHandleInnerFlag = __s15param2;
    this._busy = true;
    this._flag = __s15param1;
    this._castleMapObject = __s15param0;
    if (this._flag && this._castleMapObject) {
      if (this._flag.isLoaded) {
        this.clipLoaded(this._flag);
      } else {
        this._flag.clipLoaded.add(this.bindFunction(this.clipLoaded));
      }
      if (this._castleMapObject.isLoaded) {
        this.clipLoaded(this._castleMapObject);
      } else {
        this._castleMapObject.clipLoaded.add(this.bindFunction(this.clipLoaded));
      }
    } else {
      this.resetAndRelease();
    }
  };
  WorldmapObjectFlagHelper.prototype.resetAndRelease = function () {
    if (this._flag) {
      this._flagLoaded = false;
      this._flag.clipLoaded.remove(this.bindFunction(this.clipLoaded));
    }
    if (this._castleMapObject) {
      this._castleMapObjectLoaded = false;
      this._castleMapObject.clipLoaded.remove(this.bindFunction(this.clipLoaded));
    }
    this._flag = this._castleMapObject = null;
    this._busy = false;
    this._shouldHandleInnerFlag = false;
  };
  Object.defineProperty(WorldmapObjectFlagHelper.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  WorldmapObjectFlagHelper.prototype.clipLoaded = function (__s29param0) {
    switch (__s29param0) {
      case this._flag:
        this._flagLoaded = true;
        break;
      case this._castleMapObject:
        this._castleMapObjectLoaded = true;
    }
    if (this._flagLoaded && this._castleMapObjectLoaded) {
      this.performFlagAlign();
    }
  };
  WorldmapObjectFlagHelper.prototype.performFlagAlign = function () {
    var __s33local0 = this._castleMapObject.currentshownDisplayObject;
    var __s33local1 = __s33local0.getChildByName("flag_placeholder");
    if (__s33local1) {
      var __s33local2 = this._flag.currentshownDisplayObject;
      var __s33local3 = __s33local2.getChildByName("flag0");
      if (this._shouldHandleInnerFlag) {
        __s33local2.x = __s33local1.x;
        __s33local2.y = __s33local1.y;
      } else if (__s33local3) {
        var __s33local4 = __s33local0.localToGlobal(new __s0local0(__s33local1.x, __s33local1.y));
        var __s33local5 = __s33local2.globalToLocal(__s33local4);
        __s33local3.x = __s33local5.x;
        __s33local3.y = __s33local5.y;
      }
    }
    __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.updateParentCache(__s33local2);
    this.resetAndRelease();
  };
  return WorldmapObjectFlagHelper;
}();
exports.WorldmapObjectFlagHelper = __s0local1;
