Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __dep_exact_8eeb45c41456dd39 = require("gge-module:exact_8eeb45c41456dd39");
var __s0local0 = createjs.Rectangle;
var __s0local1 = createjs.DisplayObject;
var __s0local2 = createjs.Point;
var __s0local3 = createjs.MovieClip;
var __s0local4 = createjs.Stage;
var __s0local5 = createjs.Container;
var __s0local6 = createjs.Shape;
var __dep_exact_d080a25fe68bd590 = require("gge-module:exact_d080a25fe68bd590");
__dep_export_LoggerConfigurator.getLogger(__dep_exact_d080a25fe68bd590.CREATEJS_UTILITIES_LOGGER);
Object.defineProperty(__s0local1.prototype, "transform", {
  get: function () {
    this._transform ||= new __dep_exact_8eeb45c41456dd39.Transform(this);
    return this._transform;
  },
  enumerable: true,
  configurable: true
});
__s0local1.prototype.transformRect = function (__s3param0, __s3param1) {
  var __s3local0 = [];
  var __s3local1 = [];
  __s3local0[0] = __s3param0.x;
  __s3local1[0] = __s3param0.y;
  __s3local0[1] = __s3local0[0] + __s3param0.width;
  __s3local1[1] = __s3local1[0];
  __s3local0[2] = __s3local0[1];
  __s3local1[2] = __s3local1[0] + __s3param0.height;
  __s3local0[3] = __s3local0[0];
  __s3local1[3] = __s3local1[2];
  var __s3local2 = Number.POSITIVE_INFINITY;
  var __s3local3 = Number.POSITIVE_INFINITY;
  var __s3local4 = Number.NEGATIVE_INFINITY;
  var __s3local5 = Number.NEGATIVE_INFINITY;
  var __s3local6 = new __s0local2();
  for (var __s3local7 = 0; __s3local7 < 4; __s3local7++) {
    this.localToLocal(__s3local0[__s3local7], __s3local1[__s3local7], __s3param1, __s3local6);
    var __s3local8 = __s3local6.x;
    var __s3local9 = __s3local6.y;
    if (__s3local8 < __s3local2) {
      __s3local2 = __s3local8;
    }
    if (__s3local8 > __s3local4) {
      __s3local4 = __s3local8;
    }
    if (__s3local9 < __s3local3) {
      __s3local3 = __s3local9;
    }
    if (__s3local9 > __s3local5) {
      __s3local5 = __s3local9;
    }
  }
  return new __s0local0(__s3local2, __s3local3, __s3local4 - __s3local2, __s3local5 - __s3local3);
};
var __s0local7 = __s0local1.prototype.getBounds;
__s0local1.prototype.getBounds = function (__s11param0) {
  var __s11local0 = __s0local7.apply(this);
  if (__s11local0) {
    if (__s11param0 && __s11param0 !== this) {
      return this.transformRect(__s11local0, __s11param0);
    } else {
      return __s11local0;
    }
  } else {
    return null;
  }
};
Object.defineProperty(__s0local1.prototype, "filters", {
  get: function () {
    return this._filters;
  },
  set: function (__s19param0) {
    this._filters = __s19param0;
  },
  enumerable: true,
  configurable: true
});
__s0local1.prototype.showFilter = function () {
  if (this.parent && this._filters && this._filters.length > 0) {
    var __s21local0 = this.getBounds();
    if (__s21local0 && __s21local0.width && __s21local0.height) {
      if (this.cacheCanvas) {
        this.updateCache();
      } else {
        this.cache(__s21local0.x, __s21local0.y, __s21local0.width, __s21local0.height, this.getDoCacheScale());
      }
    }
  }
};
__s0local1.prototype.removeFilter = function () {
  if (this.parent) {
    this.uncache();
  }
};
__s0local1.prototype.useFilters = function (__s30param0, __s30param1, __s30param2) {
  var __s30local0 = this;
  if (__s30param1 === undefined) {
    __s30param1 = false;
  }
  if (__s30param2 === undefined) {
    __s30param2 = NaN;
  }
  if (this.filters || __s30param0) {
    if (this.filters && __s30param0) {
      if (this.filters.length === 0 && __s30param0.length === 0) {
        return;
      }
      if (this.filters.length === __s30param0.length) {
        var __s30local1 = true;
        var __s30local2 = 0;
        for (__s30local2 = 0; __s30local2 < this.filters.length && (__s30local1 = __s30local1 && this.filters[__s30local2].equals(__s30param0[__s30local2])); __s30local2++);
        if (__s30local1 && this.cacheCanvas && this.cacheCanvas.width) {
          return;
        }
      }
    }
    this.filters = __s30param0;
    var __s30local3 = this.cacheCanvas != null;
    if (__s30param0 && __s30param0.length > 0) {
      var __s30local4 = this.getBounds();
      if (__s30local4 && __s30local4.width && __s30local4.height && (__s30local3 ? this.updateCache() : (isNaN(__s30param2) && (__s30param2 = this.getDoCacheScale()), this.cache(Math.floor(__s30local4.x), Math.floor(__s30local4.y), Math.ceil(__s30local4.width), Math.ceil(__s30local4.height), __s30param2)), !this._refToOnAddedClosure)) {
        function __s41local0() {
          if (!__s30local0.filters || !__s30local0.filters.length) {
            __s30local0.removeEventListener(createjs.Event.ADDED, __s41local0);
            __s30local0.uncache();
            __s30local0._refToOnAddedClosure = null;
            return;
          }
          if (__s30local0.cacheCanvas) {
            __s30local0.updateCache();
          } else {
            if (isNaN(__s30param2)) {
              __s30param2 = __s30local0.getDoCacheScale();
            }
            __s30local0.cache(Math.floor(__s30local4.x), Math.floor(__s30local4.y), Math.ceil(__s30local4.width), Math.ceil(__s30local4.height), __s30param2);
          }
        }
        this._refToOnAddedClosure = this.addEventListener(createjs.Event.ADDED, __s41local0);
      }
    } else {
      if (__s30param1 && __s30local3) {
        this.updateCache();
      } else {
        this.uncache();
      }
      if (this._refToOnAddedClosure) {
        this.off(createjs.Event.ADDED, this._refToOnAddedClosure);
        this._refToOnAddedClosure = null;
      }
    }
  }
};
Object.defineProperty(createjs.Bitmap.prototype, "_refToOnAddedClosure", {
  value: "",
  enumerable: true,
  configurable: true,
  writable: true
});
createjs.DisplayObject.prototype.getDoCacheScale = function () {
  var __s52local0 = 1;
  switch (createjs.DisplayObject.doCacheScalingMode) {
    case createjs.DisplayObject.DOCACHE_SCALING_MODE_BY_STAGE:
      var __s52local1 = this.stage ? this.stage : window ? window.gamestage : null;
      if (__s52local1) {
        __s52local0 = Math.ceil(__s52local1.scaleX);
      }
      break;
    case createjs.DisplayObject.DOCACHE_SCALING_MODE_BY_ALL_PARENTS:
      for (var __s52local2 = this.parent && this.parent.scaleX != undefined ? this.parent : null; __s52local2 != null;) {
        __s52local0 *= __s52local2.scaleX;
        __s52local2 = __s52local2.parent && __s52local2.parent.scaleX != undefined ? __s52local2.parent : null;
      }
      __s52local0 = Math.ceil(__s52local0);
  }
  return __s52local0;
};
__s0local1.prototype.updateCacheIfCached = function (__s58param0 = 1) {
  if (this.cacheCanvas) {
    this.doCache(0, __s58param0);
  }
};
createjs.DisplayObject.DOCACHE_SCALING_MODE_DEFAULT = 0;
createjs.DisplayObject.DOCACHE_SCALING_MODE_BY_STAGE = 1;
createjs.DisplayObject.DOCACHE_SCALING_MODE_BY_ALL_PARENTS = 2;
createjs.DisplayObject.doCacheScalingMode = 0;
createjs.DisplayObject.setDoCacheScalingMode = function (__s61param0 = createjs.DisplayObject.DOCACHE_SCALING_MODE_DEFAULT) {
  createjs.DisplayObject.doCacheScalingMode = __s61param0;
};
__s0local1.prototype.doCache = function (__s63param0 = 0, __s63param1 = NaN) {
  if (this.cacheCanvas) {
    this.uncache();
  }
  var __s63local0 = this.getBounds();
  if (isNaN(__s63param1)) {
    __s63param1 = this.getDoCacheScale();
  }
  if (__s63local0 && __s63local0.width && __s63local0.height) {
    if (__s63param0 !== 0) {
      __s63local0.x -= __s63param0;
      __s63local0.y -= __s63param0;
      __s63local0.width += __s63param0 * 2;
      __s63local0.height += __s63param0 * 2;
    }
    this.cache(Math.floor(__s63local0.x), Math.floor(__s63local0.y), Math.ceil(__s63local0.width), Math.ceil(__s63local0.height), __s63param1);
  }
};
__s0local1.prototype.getRect = function (__s69param0) {
  return this.getBounds(__s69param0);
};
var __s0local8 = __s0local1.prototype.globalToLocal;
__s0local1.prototype.globalToLocal = function (__s71param0, __s71param1, __s71param2) {
  if (__s71param0 instanceof __s0local2) {
    return __s0local8.apply(this, [__s71param0.x, __s71param0.y]);
  } else {
    return __s0local8.apply(this, [__s71param0, __s71param1, __s71param2]);
  }
};
var __s0local9 = __s0local1.prototype.localToGlobal;
__s0local1.prototype.localToGlobal = function (__s75param0, __s75param1, __s75param2) {
  if (__s75param0 instanceof __s0local2) {
    return __s0local9.apply(this, [__s75param0.x, __s75param0.y]);
  } else {
    return __s0local9.apply(this, [__s75param0, __s75param1, __s75param2]);
  }
};
__s0local1.prototype.getScale9GridDiff = function () {
  var __s79local0 = this.getBounds();
  var __s79local1 = this.__scale9Grid.left + __s79local0.width - this.__scale9Grid.right;
  var __s79local2 = this.__scale9Grid.top + __s79local0.height - this.__scale9Grid.bottom;
  var __s79local3 = {};
  if (this.width < __s79local1) {
    __s79local3.left = __s79local0.left;
    __s79local3.right = __s79local0.right;
  }
  if (this.height < __s79local2) {
    __s79local3.top = __s79local0.top;
    __s79local3.bottom = __s79local0.bottom;
  }
  return __s79local3;
};
__s0local1.prototype.adjustScale9Grid = function () {
  this.__scale9Grid ||= this.scale9Grid.clone();
  var __s83local0 = this.getScale9GridDiff();
  if (Object.keys(__s83local0).length) {
    this.scale9Grid = Object.assign(this.scale9Grid, __s83local0);
  } else {
    this.scale9Grid = this.__scale9Grid.clone();
  }
};
Object.defineProperty(__s0local1.prototype, "width", {
  get: function () {
    var __s87local0 = this.getBounds();
    if (__s87local0) {
      return Math.abs(__s87local0.width * this.scaleX);
    } else {
      return 0;
    }
  },
  set: function (__s91param0) {
    if (!(__s91param0 < 0)) {
      var __s91local0 = this.getBounds();
      if (!__s91local0) {
        throw new Error("Trying to change width while bounds are not defined");
      }
      if (__s91local0.width) {
        this.scaleX = __s91param0 / __s91local0.width;
      }
    }
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(__s0local1.prototype, "sliceCompensation", {
  get: function () {
    return this._sliceCompensation;
  },
  set: function (__s98param0) {
    this._sliceCompensation = __s98param0;
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(__s0local1.prototype, "height", {
  get: function () {
    var __s100local0 = this.getBounds();
    if (__s100local0) {
      return Math.abs(__s100local0.height * this.scaleY);
    } else {
      return 0;
    }
  },
  set: function (__s104param0) {
    if (!(__s104param0 < 0)) {
      var __s104local0 = this.getBounds();
      if (!__s104local0) {
        throw new Error("Trying to change height while bounds are not defined");
      }
      if (__s104local0.height) {
        this.scaleY = __s104param0 / __s104local0.height;
      }
    }
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(__s0local1.prototype, "scaleX", {
  get: function () {
    return this._scaleX;
  },
  set: function (__s111param0) {
    this._scaleX = __s111param0;
    if (this.scale9Grid) {
      this.adjustScale9Grid();
    }
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(__s0local1.prototype, "scaleY", {
  get: function () {
    return this._scaleY;
  },
  set: function (__s116param0) {
    this._scaleY = __s116param0;
    if (this.scale9Grid) {
      this.adjustScale9Grid();
    }
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(__s0local1.prototype, "usedAsMask", {
  get: function () {
    return this._usedAsMask !== undefined && this._usedAsMask;
  },
  set: function (__s121param0) {
    this._usedAsMask = __s121param0;
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(__s0local1.prototype, "mask", {
  get: function () {
    return this._mask;
  },
  set: function (__s125param0) {
    if (__s125param0) {
      if (__s125param0 !== this._mask) {
        __s125param0.visible = false;
        __s125param0._usedAsMask = true;
        if (this._mask) {
          this._mask._usedAsMask = false;
        }
        if (__s125param0 instanceof __s0local6) {
          this._mask = __s125param0;
        } else if (__s125param0.graphics && __s125param0.graphics.instructions.length > 0) {
          this._mask = __s125param0;
        } else if (__s125param0 instanceof __s0local3) {
          var __s125local0 = __s125param0._createMaskShape();
          if (this === __s125param0.parent) {
            __s125local0.x = this.x;
            __s125local0.y = this.y;
          }
          this._mask = __s125local0;
        } else if (__s125param0.getBounds) {
          var __s125local1 = function (__s135param0) {
            var __s135local0 = __s135param0.getBounds();
            var __s135local1 = new __s0local6();
            var __s135local2 = isNaN(__s135param0.useAsMaskCornerRadius) ? 7 : __s135param0.useAsMaskCornerRadius;
            __s135local1.setBounds(__s135local0.x, __s135local0.y, __s135param0.width, __s135param0.height);
            __s135local1.graphics.f("#000000").drawRoundRect(__s135local0.x + __s135param0.x, __s135local0.y + __s135param0.y, __s135param0.width, __s135param0.height, __s135local2);
            __s135local1.visible = false;
            __s135local1.usedAsMask = true;
            __s135local1.name = "fakeMask";
            return __s135local1;
          }(__s125param0);
          if (this === __s125param0.parent) {
            __s125local1.x = this.x;
            __s125local1.y = this.y;
          }
          this._mask = __s125local1;
        }
      }
    } else {
      this._mask = __s125param0;
    }
  },
  enumerable: true,
  configurable: true
});
__s0local1.prototype.removed = function () {
  this.dispatchEvent(new createjs.Event("removed", false, false));
  this.parent = null;
  this.childrenRemovedStage();
};
__s0local1.prototype.childrenRemovedStage = function () {
  if (this.children) {
    var __s141local0 = this.children;
    for (var __s141local1 = 0, __s141local2 = __s141local0.length; __s141local1 < __s141local2; __s141local1++) {
      if (__s141local0[__s141local1] != null && __s141local0[__s141local1].added) {
        __s141local0[__s141local1].childrenRemovedStage();
      }
    }
  }
  if (this._stage) {
    this.dispatchEvent(new createjs.Event(createjs.Event.REMOVED_FROM_STAGE, false, false));
    this._stage = null;
  }
};
__s0local1.prototype.added = function () {
  this.dispatchEvent(new createjs.Event(createjs.Event.ADDED, true, true));
  this.checkAddedStage();
  this.x = Math.round(this.x);
  this.y = Math.round(this.y);
};
var __s0local10 = __s0local1.prototype.addEventListener;
__s0local1.prototype.addEventListener = function (__s150param0, __s150param1, __s150param2) {
  return __s0local10.apply(this, [__s150param0, __s150param1, __s150param2]);
};
__s0local1.prototype.checkAddedStage = function () {
  var __s152local0 = this;
  var __s152local1 = this.stage;
  if (__s152local1) {
    this._stage = __s152local1;
    this.dispatchEvent(new createjs.Event(createjs.Event.ADDED_TO_STAGE, false, false));
  }
  if (!this._hasUncacheListener) {
    function __s155local0() {
      if (__s152local0.cacheCanvas) {
        __s152local0.uncache();
        if (__s152local0.filters && __s152local0.filters.length > 0) {
          __s152local0.filters = [];
        }
      }
      __s152local0.removeEventListener(createjs.Event.REMOVED_FROM_STAGE, __s155local0);
      __s152local0._hasUncacheListener = false;
    }
    this.addEventListener(createjs.Event.REMOVED_FROM_STAGE, __s155local0);
    this._hasUncacheListener = true;
  }
  if (this.children) {
    var __s152local2 = this.children;
    for (var __s152local3 = 0, __s152local4 = __s152local2.length; __s152local3 < __s152local4; __s152local3++) {
      if (__s152local2[__s152local3].added) {
        __s152local2[__s152local3].checkAddedStage();
      }
    }
  }
};
__s0local1.prototype.hitTestPoint = function (__s164param0, __s164param1, __s164param2 = false) {
  var __s164local0 = this.globalToLocal(new __s0local2(__s164param0, __s164param1));
  return this.hitTest(__s164local0.x, __s164local0.y);
};
__s0local1.prototype.hitTestObject = function (__s166param0) {
  var __s166local0 = this.localToGlobal(0, 0);
  var __s166local1 = new __s0local0(__s166local0.x, __s166local0.y, this.width, this.height);
  var __s166local2 = __s166param0.localToGlobal(0, 0);
  var __s166local3 = new __s0local0(__s166local2.x, __s166local2.y, __s166param0.width, __s166param0.height);
  return __s166local1.intersects(__s166local3);
};
__s0local1.prototype.getFilterBounds = function () {
  return this._getFilterBounds();
};
__s0local1.prototype.globalToLocal3D = function (__s170param0) {
  return null;
};
Object.defineProperty(__s0local1.prototype, "blendShader", {
  get: function () {
    throw new Error("blendShader has only setter");
  },
  set: function (__s174param0) {
    this._blendShader = __s174param0;
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(__s0local1.prototype, "root", {
  get: function () {
    return null;
  },
  set: function (__s178param0) {
    throw new Error("root has only getter");
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(__s0local1.prototype, "autoAlpha", {
  get: function () {
    return this.alpha;
  },
  set: function (__s182param0) {
    this.alpha = __s182param0;
    this.visible = !!__s182param0;
  },
  enumerable: true,
  configurable: true
});
__s0local1.prototype.countCachedCanvas = function (__s184param0 = {
  total: 0,
  underCacheTotal: 0
}, __s184param1 = false) {
  if (this.cacheCanvas) {
    __s184param0.total++;
    if ((!this.filters || this.filters.length === 0) && !!__s184param1) {
      __s184param0.underCacheTotal++;
    }
  }
  if (this instanceof __s0local5) {
    var __s184local0 = __s184param1 || !!this.cacheCanvas;
    for (var __s184local1 = 0; __s184local1 < this.children.length; __s184local1++) {
      this.children[__s184local1].countCachedCanvas(__s184param0, __s184local0);
    }
  }
  return __s184param0;
};
__s0local1.prototype.clearCacheUnderCache = function (__s191param0 = false) {
  var __s191local0 = __s191param0 || !!this.cacheCanvas;
  if (!!__s191param0 && (!this.filters || this.filters.length === 0) && !!this.cacheCanvas) {
    this.uncache();
  }
  if (this instanceof __s0local5) {
    for (var __s191local1 = 0; __s191local1 < this.children.length; __s191local1++) {
      this.children[__s191local1].clearCacheUnderCache(__s191local0);
    }
  }
};
var __s0local11 = __s0local1.prototype.uncache;
__s0local1.prototype.uncache = function () {
  if (this.cacheCanvas) {
    this.cacheCanvas.width = this.cacheCanvas.height = 0;
  }
  __s0local11.call(this);
};
__s0local1.prototype._applyFilters = function () {
  if (this.filters && this.filters.length !== 0 && this.cacheCanvas && !(this instanceof createjs.TextField)) {
    var __s200local0 = this.filters.length;
    var __s200local1 = this.getCanvasContext(this.cacheCanvas);
    var __s200local2 = this.cacheCanvas.width;
    var __s200local3 = this.cacheCanvas.height;
    __s200local1._filterOffsetX = this._filterOffsetX;
    __s200local1._filterOffsetY = this._filterOffsetY;
    __s200local1._cacheOffsetX = this._cacheOffsetX;
    __s200local1._cacheOffsetY = this._cacheOffsetY;
    try {
      if (this.allowFastGlow !== false) {
        __s200local1._doFastGlow = true;
        __s200local1._cacheScale = this._cacheScale;
      }
      for (var __s200local4 = 0; __s200local4 < __s200local0; __s200local4++) {
        this.filters[__s200local4].applyFilter(__s200local1, 0, 0, __s200local2, __s200local3);
      }
    } catch (__s207local0) {}
  }
};
Object.defineProperty(__s0local1.prototype, "showDebugBounds", {
  get: function () {
    return !!this._debugBoundsRectangle;
  },
  set: function (__s211param0) {
    if (__s211param0 && !this._debugBoundsRectangle) {
      if (!this.parent) {
        throw new Error("Can't show debug rectangle since parent is undefined");
      }
      var __s211local0 = this.getBounds();
      if (!__s211local0 || !__s211local0.width || !__s211local0.height) {
        throw new Error("Can't show debug rectangle since bounds is 0");
      }
      this._debugBoundsRectangle = new __s0local6();
      this._debugBoundsRectangle.name = (this.name || this.id) + "_debugBoundsRectangle";
      this._debugBoundsRectangle.graphics.beginStroke("#FF0000").drawRect(0, 0, __s211local0.width, __s211local0.height).mt(0, 0).bf("#0000FF").dc(0, 0, 5).ef().endStroke();
      this._debugBoundsRectangle.x = this.x;
      this._debugBoundsRectangle.y = this.y;
      this.parent.addChild(this._debugBoundsRectangle);
    } else if (!__s211param0 && this._debugBoundsRectangle) {
      this.parent.removeChild(this._debugBoundsRectangle);
      this._debugBoundsRectangle = null;
    }
  },
  enumerable: true,
  configurable: true
});
__s0local1.prototype.getConcatenatedMatrix = function (__s217param0) {
  var __s217local0 = this;
  var __s217local1 = this.getMatrix(__s217param0);
  for (this instanceof __s0local4 && __s217local1.scale(1 / this.scaleX, 1 / this.scaleY); __s217local0 = __s217local0.parent;) {
    if (!(__s217local0 instanceof __s0local4)) {
      __s217local1.prependMatrix(__s217local0.getMatrix(__s217local0._props.matrix));
    }
  }
  return __s217local1;
};
__s0local1.prototype.isInContainer = function (__s222param0) {
  for (var __s222local0 = this.parent; __s222local0;) {
    if (__s222local0 === __s222param0) {
      return true;
    }
    __s222local0 = __s222local0.parent;
  }
  return false;
};
createjs.DisplayObject.defaultCenterHittestArea = 0;
