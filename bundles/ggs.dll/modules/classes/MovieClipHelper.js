Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_048b0d27b75c40dd = require("gge-module:exact_048b0d27b75c40dd");
var __dep_exact_39c566239c224ca4 = require("gge-module:exact_39c566239c224ca4");
var __s0local0 = createjs.Container;
var __s0local1 = createjs.MovieClip;
var __s0local2 = createjs.Event;
var __s0local3 = createjs.Rectangle;
var __dep_export_CSSMouseCursor = require("gge-module:export_CSSMouseCursor");
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __dep_class_AbstractDisplayObjectClip = require("gge-module:class_AbstractDisplayObjectClip");
var __s0local4 = __dep_export_LoggerConfigurator.getLogger("MovieClipHelper");
var __s0local5 = function () {
  function MovieClipHelper() {}
  MovieClipHelper.stopAllMovies = function (__s5param0) {
    if (__s5param0) {
      if (__s5param0 instanceof __s0local1) {
        __s5param0.stop();
      }
      for (var __s5local0 = 0; __s5local0 < __s5param0.numChildren; __s5local0++) {
        MovieClipHelper.stopAllMovies(__s5param0.getChildAt(__s5local0));
      }
    }
  };
  MovieClipHelper.stopAllMoviesGotoFrameOne = function (__s11param0) {
    if (__s11param0) {
      var __s11local0 = __s11param0;
      if (__s11local0 && __s11local0.totalFrames > 1) {
        __s11local0.gotoAndStop(1);
      }
      for (var __s11local1 = 0; __s11local1 < __s11param0.numChildren; __s11local1++) {
        if (__s11param0.getChildAt(__s11local1) instanceof __s0local1) {
          MovieClipHelper.stopAllMoviesGotoFrameOne(__s11param0.getChildAt(__s11local1));
        }
      }
    }
  };
  MovieClipHelper.playAllMovies = function (__s18param0) {
    if (__s18param0) {
      var __s18local0 = __s18param0;
      if (__s18local0 && __s18local0.totalFrames > 1) {
        __s18local0.play();
      }
      for (var __s18local1 = 0; __s18local1 < __s18param0.numChildren; __s18local1++) {
        if (__s18param0.getChildAt(__s18local1)) {
          MovieClipHelper.playAllMovies(__s18param0.getChildAt(__s18local1));
        }
      }
    }
  };
  MovieClipHelper.centerMovieClip = function (__s25param0, __s25param1, __s25param2, __s25param3 = true) {
    var __s25local0 = __s25param0.getBounds();
    var __s25local1 = __s25param0.scaleX;
    if (__s25param3) {
      __s25local1 = __s25param2 / __s25local0.width;
      if (__s25local0.height * __s25local1 > __s25param1) {
        __s25local1 = __s25param1 / __s25local0.height;
      }
    }
    __s25param0.x = -(__s25local0.width * __s25local1 / 2 + __s25local0.left * __s25local1);
    __s25param0.y = -(__s25local0.height * __s25local1 / 2 + __s25local0.top * __s25local1);
    __s25param0.scaleX = __s25param0.scaleY = __s25local1;
  };
  MovieClipHelper.isChildrenOf = function (__s29param0, __s29param1) {
    for (var __s29local0 = __s29param0, __s29local1 = false; !__s29local1 && __s29local0.parent;) {
      if (__s29local0.parent == __s29param1) {
        __s29local1 = true;
      } else {
        __s29local0 = __s29local0.parent;
      }
    }
    return __s29local1;
  };
  MovieClipHelper.clearMovieClip = function (__s35param0) {
    if (__s35param0) {
      while (__s35param0.numChildren > 0) {
        var __s35local0 = __s35param0.children[0];
        __s35param0.removeChildAt(0);
        if (__s35local0 instanceof __dep_class_AbstractDisplayObjectClip.AbstractDisplayObjectClip) {
          __s35local0.dispose();
        }
      }
    } else {
      __dep_exact_39c566239c224ca4.info("clearMovieClip called with null mc. Have a nice day debugging.");
    }
  };
  MovieClipHelper.replaceMovieClip = function (__s42param0, __s42param1 = null) {
    if (__s42param1) {
      if (__s42param0.numChildren > 0) {
        if (__s42param0.getChildAt(0) instanceof __s42param1 == 0) {
          MovieClipHelper.clearMovieClip(__s42param0);
          __s42param0.addChild(new __s42param1());
        }
      } else {
        __s42param0.addChild(new __s42param1());
      }
    } else {
      MovieClipHelper.clearMovieClip(__s42param0);
    }
  };
  MovieClipHelper.disableChildrenExceptList = function (__s49param0, __s49param1) {
    if (__s49param0) {
      for (var __s49local0 = 0; __s49local0 < __s49param0.numChildren; __s49local0++) {
        var __s49local1 = __s49param0.getChildAt(__s49local0);
        for (var __s49local2 = 0, __s49local3 = __s49param1; __s49local2 < __s49local3.length; __s49local2++) {
          var __s49local4 = __s49local3[__s49local2];
          __s49local1.mouseEnabled = __s49local1 == __s49local4 || (__s49local1.mouseChildren = false);
        }
      }
    }
  };
  MovieClipHelper.getMovieClipByClassName = function (__s56param0) {
    try {
      return new (__dep_export_CSSMouseCursor.getDefinitionByName(__s56param0))();
    } catch (__s59local0) {
      return null;
    }
  };
  MovieClipHelper.getSpriteByClassName = function (__s61param0) {
    try {
      return new (__dep_export_CSSMouseCursor.getDefinitionByName(__s61param0)())();
    } catch (__s64local0) {
      return null;
    }
  };
  MovieClipHelper.secureGoto = function (__s66param0, __s66param1, __s66param2 = false) {
    var __s66local0 = 1;
    if (__s66param1.constructor === Number) {
      __s66local0 = __s66param1;
      var __s66local1 = __s66param0.totalFrames;
      if (__s66local0 > __s66local1) {
        __s66local0 = __s66local1;
      } else if (__s66local0 <= 0) {
        __s66local0 = 1;
      }
    } else {
      __s0local4.error("MovieClipHelper.secureGoto: goto frame by label not implemented.");
    }
    if (__s66param2) {
      __s66param0.gotoAndPlay(__s66local0);
    } else {
      __s66param0.gotoAndStop(__s66local0);
    }
  };
  MovieClipHelper.getVisibleSize = function (__s74param0) {
    if (__s74param0.width > 0 && __s74param0.height > 0) {
      var __s74local0 = __s74param0.getBounds();
      return new __s0local3(__s74local0.x, __s74local0.y, Math.ceil(__s74local0.width), Math.ceil(__s74local0.height));
    }
    return new __s0local3(0, 0, 0, 0);
  };
  MovieClipHelper.scaleToFit = function (__s77param0, __s77param1, __s77param2) {
    var __s77local0 = Math.min(__s77param1 / (__s77param0.width / __s77param0.scaleX), __s77param2 / (__s77param0.height / __s77param0.scaleY));
    __s77param0.scaleX = __s77param0.scaleY = __s77local0;
  };
  MovieClipHelper.scaleDownToFit = function (__s79param0, __s79param1, __s79param2) {
    var __s79local0 = Math.min(__s79param1 / (__s79param0.width / __s79param0.scaleX), __s79param2 / (__s79param0.height / __s79param0.scaleY));
    if (__s79local0 < __s79param0.scaleX) {
      __s79param0.scaleX = __s79param0.scaleY = __s79local0;
    }
  };
  MovieClipHelper.watchAnimationEnd = function (__s82param0, __s82param1 = null) {
    __s82param0.addEventListener(__s0local2.ENTER_FRAME, this.bindFunction(function oef(__s84param0) {
      if (__s82param0.currentFrame == __s82param0.totalFrames) {
        __s82param0.removeEventListener(__s0local2.ENTER_FRAME, this.bindFunction(oef));
        __s82param0.stop();
        __s82param0.dispatchEvent(__s0local2.COMPLETE);
        if (__s82param1 instanceof Function) {
          __s82param1(__s82param0);
        }
      }
    }));
  };
  MovieClipHelper.dissolveDisplayObjectContainer = function (__s88param0) {
    if (__s88param0) {
      var __s88local0 = [];
      if (__s88param0 instanceof __s0local0) {
        for (var __s88local1 = __s88param0, __s88local2 = 0; __s88local2 < __s88local1.numChildren; __s88local2++) {
          var __s88local3 = __s88local1.getChildAt(__s88local2);
          if (__s88local3 instanceof __s0local0) {
            MovieClipHelper.dissolveDisplayObjectContainer(__s88local3);
          } else {
            __s88local0.push(__s88local3);
          }
        }
        while (__s88local1.numChildren > 0) {
          __s88local1.removeChildAt(0);
        }
        if (__s88local1.numChildren > 0) {
          __dep_exact_048b0d27b75c40dd.error("ERROR");
        }
      }
    }
  };
  return MovieClipHelper;
}();
exports.MovieClipHelper = __s0local5;
