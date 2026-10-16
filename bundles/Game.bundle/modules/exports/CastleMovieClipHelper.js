Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.BitmapData;
var __s0local1 = createjs.DisplayObject;
var __s0local2 = createjs.Container;
var __s0local3 = createjs.MovieClip;
var __s0local4 = createjs.Shape;
var __s0local5 = createjs.Point;
var __s0local6 = createjs.Rectangle;
var __s0local7 = function () {
  function CastleMovieClipHelper() {}
  CastleMovieClipHelper.disableChildrenExceptList = function (__s5param0, __s5param1) {
    if (__s5param0) {
      for (var __s5local0 = 0; __s5local0 < __s5param0.numChildren; __s5local0++) {
        var __s5local1 = __s5param0.getChildAt(__s5local0);
        if (__s5local1 && __s5param1.indexOf(__s5local1) == -1) {
          if (__s5local1 instanceof __s0local1) {
            __s5local1.mouseEnabled = false;
          }
          if (__s5local1 instanceof __s0local2) {
            __s5local1.mouseChildren = false;
          }
        }
      }
    }
  };
  CastleMovieClipHelper.iterateThroughMc = function (__s13param0, __s13param1) {
    var __s13local0;
    var __s13local1;
    for (var __s13local2 = __s13param1.split("."), __s13local3 = __s13param0, __s13local4 = 0; __s13local4 < __s13local2.length && __s13local3; ++__s13local4) {
      if (!((__s13local0 = __s13local3) instanceof __s0local2)) {
        __s13local3 = null;
        break;
      }
      __s13local3 = (__s13local1 = __s13local2[__s13local4]) == "parent" ? __s13local0.parent : __s13local0.getChildByName(__s13local1);
    }
    return __s13local3;
  };
  CastleMovieClipHelper.getVisibleBounds = function (__s18param0) {
    var __s18local0 = __s18param0.getBounds(null);
    var __s18local1 = new __dep_exact_81dacdf05bd32292_1.Matrix();
    __s18local1.translate(-__s18local0.x, -__s18local0.y);
    var __s18local2 = new __s0local0(Math.min(__s18local0.width, 2500), Math.min(__s18local0.height, 2500), true, 0);
    __s18param0.doCache();
    __s18local2.draw(__s18param0, __s18local1, null, null, new __s0local6(0, 0, __s18local0.width, __s18local0.height));
    var __s18local3 = __s18local2.getColorBoundsRect(4294967295, 0, false);
    __s18local2.dispose();
    CastleMovieClipHelper.uncacheSafe(__s18param0);
    __s18local3.x += __s18local0.x;
    __s18local3.y += __s18local0.y;
    return __s18local3;
  };
  CastleMovieClipHelper.stopAllMovies = function (__s20param0, __s20param1 = null, __s20param2 = false) {
    if (__s20param0) {
      var __s20local0 = __s20param0;
      if (__s20local0 instanceof __s0local3 && __s20local0.totalFrames > 1) {
        if (__s20param2) {
          __s20local0.gotoAndStop(__s20local0.totalFrames);
        } else if (__s20param1) {
          __s20local0.gotoAndStop(__s20param1);
        } else {
          __s20local0.stop();
        }
      } else {
        var __s20local1 = __s20param0;
        if (__s20local1 instanceof __dep_exact_9e901e8e2483a22f.AbstractGoodgameClip && __s20local1.numFrames > 1) {
          if (__s20param2) {
            __s20local1.gotoAndStop(__s20local0.totalFrames);
          } else if (__s20param1) {
            __s20local1.gotoAndStop(__s20param1);
          } else {
            __s20local1.stop();
          }
        }
      }
      for (var __s20local2 = 0; __s20local2 < __s20param0.numChildren; __s20local2++) {
        if (__s20param0.getChildAt(__s20local2) instanceof __s0local2) {
          CastleMovieClipHelper.stopAllMovies(__s20param0.getChildAt(__s20local2), __s20param1, __s20param2);
        }
      }
    }
  };
  CastleMovieClipHelper.getChildrenByName = function (__s35param0, __s35param1) {
    var __s35local0 = [];
    if (__s35param0 == null) {
      return __s35local0;
    }
    if (__s35param0.name == __s35param1) {
      __s35local0.push(__s35param0);
    }
    var __s35local1 = __s35param0;
    if (__s35local1 == null) {
      return __s35local0;
    }
    for (var __s35local2 = 0; __s35local2 < __s35local1.numChildren; ++__s35local2) {
      var __s35local3 = CastleMovieClipHelper.getChildrenByName(__s35local1.getChildAt(__s35local2), __s35param1);
      if (__s35local3 != null) {
        for (var __s35local4 = 0, __s35local5 = __s35local3; __s35local4 < __s35local5.length; __s35local4++) {
          var __s35local6 = __s35local5[__s35local4];
          if (__s35local6 !== undefined) {
            __s35local0.push(__s35local6);
          }
        }
      }
    }
    return __s35local0;
  };
  CastleMovieClipHelper.getChildrenByAnyName = function (__s46param0, __s46param1) {
    var __s46local0 = [];
    if (__s46param1 != null) {
      for (var __s46local1 = 0, __s46local2 = __s46param1; __s46local1 < __s46local2.length; __s46local1++) {
        var __s46local3 = __s46local2[__s46local1];
        if (__s46local3 !== undefined) {
          var __s46local4 = CastleMovieClipHelper.getChildrenByName(__s46param0, __s46local3);
          if (__s46local4 != null) {
            for (var __s46local5 = 0, __s46local6 = __s46local4; __s46local5 < __s46local6.length; __s46local5++) {
              var __s46local7 = __s46local6[__s46local5];
              if (__s46local7 !== undefined) {
                __s46local0.push(__s46local7);
              }
            }
          }
        }
      }
    }
    return __s46local0;
  };
  CastleMovieClipHelper.applyMask = function (__s56param0) {
    if (!__s56param0.mask) {
      var __s56local0 = __s56param0.visible;
      CastleMovieClipHelper.applyMaskFromMovieClip(__s56param0, __s56param0, __s56param0);
      __s56param0.visible = __s56local0;
      return __s56param0.mask;
    }
    return __s56param0.mask;
  };
  CastleMovieClipHelper.applyMaskFromMovieClip = function (__s59param0, __s59param1, __s59param2 = null) {
    if (__s59param0.mask && __s59param0.mask.parent) {
      __s59param0.mask.parent.removeChild(__s59param0.mask);
    }
    __s59param1.visible = false;
    var __s59local0 = new createjs.Shape();
    __s59local0.x = __s59param1.x;
    __s59local0.y = __s59param1.y;
    var __s59local1 = __s59param1.getBounds();
    __s59local0.graphics.beginFill("#FF0000").drawRect(__s59local1.x * __s59param1.scaleX, __s59local1.y * __s59param1.scaleY, __s59local1.width * __s59param1.scaleX, __s59local1.height * __s59param1.scaleY);
    __s59local0.setBounds(__s59local1.x * __s59param1.scaleX, __s59local1.y * __s59param1.scaleY, __s59local1.width * __s59param1.scaleX, __s59local1.height * __s59param1.scaleY);
    __s59param0.mask = __s59local0;
    if (__s59param2) {
      __s59param2.addChild(__s59local0);
    } else if (__s59param0.mask && __s59param0.mask.parent) {
      __s59param1.parent.addChild(__s59local0);
    }
    return __s59local0;
  };
  CastleMovieClipHelper.getFirstMovieClipParent = function (__s64param0) {
    for (var __s64local0 = __s64param0; __s64local0;) {
      if (__s64local0 instanceof __s0local2) {
        return __s64local0;
      }
      __s64local0 = __s64local0.parent;
    }
    return null;
  };
  CastleMovieClipHelper.createHitArea = function (__s69param0) {
    var __s69local0 = __s69param0.getBounds();
    var __s69local1 = new __s0local4();
    __s69local1.x = __s69local0.x;
    __s69local1.y = __s69local0.y;
    __s69local1.graphics.beginFill("#ff0000").drawRect(0, 0, __s69local0.width, __s69local0.height);
    __s69param0.hitArea = __s69local1;
  };
  CastleMovieClipHelper.updateParentCache = function (__s71param0) {
    for (var __s71local0 = __s71param0; __s71local0 && !__s71local0.cacheCanvas;) {
      __s71local0 = __s71local0.parent;
    }
    if (__s71local0) {
      try {
        if (__s71local0.cacheCanvas && __s71local0.cacheCanvas.width > 0 && __s71local0.cacheCanvas.height > 0) {
          if (__s71local0.cacheCanvas.getContext("2d")) {
            __s71local0.updateCacheIfCached(__s71local0._cacheScale || 1);
          }
        }
      } catch (__s79local0) {
        console.warn("Canvas in error state, clearing cache:", __s79local0);
        if (__s71local0.cacheCanvas) {
          __s71local0.uncache();
        }
      }
    }
  };
  CastleMovieClipHelper.getScaleAndCacheWithAntiAliasingOnLoaded = function (__s82param0, __s82param1, __s82param2 = -1, __s82param3 = true) {
    return function (__s84param0) {
      __s84param0.clipSizeComponent = null;
      CastleMovieClipHelper.scaleWithAntiAliasing(__s84param0, __s82param0, __s82param1, __s82param2, __s82param3);
    };
  };
  CastleMovieClipHelper.scaleWithAntiAliasing = function (__s86param0, __s86param1, __s86param2, __s86param3 = -1, __s86param4 = true) {
    if (__s86param0) {
      __s86param0.scaleX = __s86param0.scaleY = 1;
      CastleMovieClipHelper.uncacheSafe(__s86param0);
      var __s86local0 = __s86param0.getBounds();
      var __s86local1 = __s86param1 / __s86local0.width;
      if (__s86local0.height * __s86local1 > __s86param2) {
        __s86local1 = __s86param2 / __s86local0.height;
      }
      if (__s86param3 > -1) {
        __s86local1 = Math.min(__s86local1, __s86param3);
      }
      var __s86local2 = __s86param4 ? -(__s86local0.width * __s86local1 / 2 + __s86local0.left * __s86local1) : __s86param0.x;
      var __s86local3 = __s86param4 ? -(__s86local0.height * __s86local1 / 2 + __s86local0.top * __s86local1) : __s86param0.y;
      CastleMovieClipHelper.scaleAndCacheWithAntiAliasing(__s86param0, __s86local1);
      __s86param0.x = __s86local2;
      __s86param0.y = __s86local3;
    }
  };
  CastleMovieClipHelper.scaleAndCacheWithAntiAliasing = function (__s91param0, __s91param1) {
    var __s91local0;
    CastleMovieClipHelper.uncacheSafe(__s91param0);
    for (var __s91local1 = 0.5, __s91local2 = __s91param1 * CastleMovieClipHelper.getScreenScaleY(__s91param0); __s91local2 < __s91local1 * 0.75 && (__s91local0 = __s91param0.getBounds()).width && __s91local0.height;) {
      try {
        __s91param0.cache(Math.floor(__s91local0.x), Math.floor(__s91local0.y), Math.ceil(__s91local0.width), Math.ceil(__s91local0.height), __s91local1);
      } catch (__s96local0) {
        console.warn("Failed to cache display object during anti-aliasing:", __s96local0);
        break;
      }
      __s91local1 *= 0.5;
    }
    __s91param0.scaleX = __s91param0.scaleY = __s91param1;
    if (!__s91param0.cacheCanvas) {
      try {
        __s91param0.doCache();
      } catch (__s100local0) {
        console.warn("Failed to doCache on display object:", __s100local0);
      }
    }
    __s91param0.dispatchEvent(new createjs.Event(createjs.Event.ADDED, true, true));
  };
  CastleMovieClipHelper.getScreenScaleY = function (__s102param0) {
    var __s102local0 = __s102param0.scaleY;
    for (var __s102local1 = __s102param0.parent; __s102local1;) {
      __s102local0 *= __s102local1.scaleY;
      __s102local1 = __s102local1.parent;
    }
    return __s102local0;
  };
  CastleMovieClipHelper.snapToScreenPixels = function (__s106param0) {
    if (__s106param0.parent) {
      __s106param0.snapToPixel = false;
      var __s106local0 = __s106param0.parent.localToGlobal(new __s0local5(__s106param0.x, __s106param0.y));
      __s106local0.x = Math.trunc(__s106local0.x);
      __s106local0.y = Math.trunc(__s106local0.y);
      var __s106local1 = __s106param0.parent.globalToLocal(__s106local0);
      __s106param0.x = __s106local1.x;
      __s106param0.y = __s106local1.y;
    }
  };
  CastleMovieClipHelper.isDOPartOfDO = function (__s109param0, __s109param1) {
    return !!__s109param0 && (!!__s109param1.contains(__s109param0) || !!__s109param0.parent && !!(__s109param0.parent instanceof __s0local2) && this.isDOPartOfDO(__s109param0.parent, __s109param1));
  };
  CastleMovieClipHelper.uncacheSafe = function (__s111param0) {
    if (__s111param0 && __s111param0.cacheCanvas) {
      try {
        if (__dep_exact_81dacdf05bd32292.currentBrowserInfo.isSafari) {
          __s111param0.cacheCanvas.width = __s111param0.cacheCanvas.height = 1;
          var __s111local0 = __s111param0.cacheCanvas.getContext("2d");
          if (__s111local0) {
            __s111local0.clearRect(0, 0, 1, 1);
          }
        }
        __s111param0.uncache();
      } catch (__s117local0) {
        console.warn("Failed to uncache safely, forcing uncache:", __s117local0);
      }
    }
  };
  CastleMovieClipHelper.goAndPlayAllMovies = function (__s119param0, __s119param1, __s119param2, __s119param3) {
    if (__s119param0) {
      var __s119local0 = __s119param0;
      if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s119param0, "CastleGoodgameExternalClip")) {
        __s119param0.gotoAndPlay(__s119param1, __s119param2, __s119param3);
      } else if (__s119local0 && __s119local0.totalFrames > 1) {
        __s119local0.gotoAndPlay(__s119param1);
      }
      for (var __s119local1 = 0; __s119local1 < __s119param0.numChildren; __s119local1++) {
        if (__s119param0.getChildAt(__s119local1)) {
          CastleMovieClipHelper.goAndPlayAllMovies(__s119param0.getChildAt(__s119local1), __s119param1, __s119param2, __s119param3);
        }
      }
    }
  };
  return CastleMovieClipHelper;
}();
exports.CastleMovieClipHelper = __s0local7;
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
