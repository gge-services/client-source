Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.Rectangle;
var __s0local1 = createjs.MouseEvent;
var __dep_class_LoaderInfo = require("gge-module:class_LoaderInfo");
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __s0local2 = createjs.Container;
var __dep_export_objectsUnderPoint = require("gge-module:export_objectsUnderPoint");
var __s0local3 = createjs.Stage;
var __dep_exact_d080a25fe68bd590 = require("gge-module:exact_d080a25fe68bd590");
var __s0local4 = __dep_export_LoggerConfigurator.getLogger(__dep_exact_d080a25fe68bd590.CREATEJS_UTILITIES_LOGGER);
createjs.Container.prototype;
Object.defineProperty(createjs.Container.prototype, "shape", {
  get: function () {
    if (!this._newshape) {
      this._newshape = new createjs.Shape();
      this.addChild(this._newshape);
    }
    return this._newshape;
  },
  set: function (__s4param0) {
    throw new Error("Can't set shape of container");
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(createjs.Container.prototype, "graphics", {
  get: function () {
    return this.shape.graphics;
  },
  set: function (__s8param0) {
    this.shape.graphics = __s8param0;
  },
  enumerable: true,
  configurable: true
});
createjs.Container.prototype.addChild = function (__s10param0) {
  if (__s10param0 == null) {
    return __s10param0;
  }
  var __s10local0 = arguments.length;
  if (__s10local0 > 1) {
    for (var __s10local1 = 0; __s10local1 < __s10local0; __s10local1++) {
      this.addChild(arguments[__s10local1]);
    }
    return arguments[__s10local0 - 1];
  }
  if (__s10param0.parent) {
    var __s10local2 = createjs.indexOf(__s10param0.parent.children, __s10param0);
    if (__s10local2 > -1) {
      __s10param0.parent.children.splice(__s10local2, 1);
      __s10param0.parent = null;
    }
  }
  __s10param0.parent = this;
  this.children.push(__s10param0);
  __s10param0.added();
  return __s10param0;
};
createjs.Container.prototype.addChildAt = function (__s18param0, __s18param1) {
  var __s18local0 = arguments.length;
  var __s18local1 = arguments[__s18local0 - 1];
  if (__s18local1 < 0 || __s18local1 > this.children.length) {
    return arguments[__s18local0 - 2];
  }
  if (__s18local0 > 2) {
    for (var __s18local2 = 0; __s18local2 < __s18local0 - 1; __s18local2++) {
      this.addChildAt(arguments[__s18local2], __s18local1 + __s18local2);
    }
    return arguments[__s18local0 - 2];
  }
  if (__s18param0.parent) {
    var __s18local3 = createjs.indexOf(__s18param0.parent.children, __s18param0);
    if (__s18local3 > -1) {
      __s18param0.parent.children.splice(__s18local3, 1);
      __s18param0.parent = null;
    }
  }
  __s18param0.parent = this;
  this.children.splice(__s18param1, 0, __s18param0);
  __s18param0.added();
  return __s18param0;
};
createjs.Container.prototype.removeChildAt = function (__s26param0) {
  var __s26local0 = arguments.length;
  if (__s26local0 > 1) {
    var __s26local1 = [];
    for (var __s26local2 = 0; __s26local2 < __s26local0; __s26local2++) {
      __s26local1[__s26local2] = arguments[__s26local2];
    }
    __s26local1.sort(function (__s31param0, __s31param1) {
      return __s31param1 - __s31param0;
    });
    var __s26local3 = true;
    for (__s26local2 = 0; __s26local2 < __s26local0; __s26local2++) {
      __s26local3 = __s26local3 && this.removeChildAt(__s26local1[__s26local2]);
    }
    return __s26local3;
  }
  if (__s26param0 < 0 || __s26param0 > this.children.length - 1) {
    return false;
  }
  var __s26local4 = this.children[__s26param0];
  if (__s26local4) {
    __s26local4.removed();
  }
  this.children.splice(__s26param0, 1);
  return true;
};
Object.defineProperty(createjs.Container.prototype, "buttonMode", {
  value: false,
  enumerable: true,
  configurable: true,
  writable: true
});
Object.defineProperty(createjs.Container.prototype, "doubleClickEnabled", {
  value: false,
  enumerable: true,
  configurable: true,
  writable: true
});
Object.defineProperty(createjs.Container.prototype, "tabChildren", {
  value: true,
  enumerable: true,
  configurable: true,
  writable: true
});
Object.defineProperty(createjs.Container.prototype, "tabEnabled", {
  value: true,
  enumerable: true,
  configurable: true,
  writable: true
});
Object.defineProperty(createjs.Container.prototype, "tabIndex", {
  value: -1,
  enumerable: true,
  configurable: true,
  writable: true
});
Object.defineProperty(createjs.Container.prototype, "needsSoftKeyboard", {
  value: false,
  enumerable: true,
  configurable: true,
  writable: true
});
createjs.Container.prototype.dispatchEvent;
createjs.Container.prototype.dispatchEvent = function (__s37param0, __s37param1) {
  if (__s37param0 instanceof Event || __s37param0 instanceof Object) {
    if (__s37param0.type === "dblclick" && this.doubleClickEnabled === false) {
      return;
    }
  } else if (__s37param0 === "dblclick" && this.doubleClickEnabled === false) {
    return;
  }
  if (typeof __s37param0 == "string") {
    var __s37local0 = this._listeners;
    if (!__s37local0 || !__s37local0[__s37param0]) {
      return true;
    }
    __s37param0 = new createjs.Event(__s37param0);
  } else if (__s37param0.target && __s37param0.clone) {
    __s37param0 = __s37param0.clone();
  }
  try {
    __s37param0.target = __s37param1 || __s37param0.target || this;
  } catch (__s46local0) {}
  if (__s37param0.bubbles && !__s37param0.cancelBubble && this.parent) {
    for (var __s37local1 = this, __s37local2 = [__s37local1]; __s37local1.parent;) {
      __s37local2.push(__s37local1 = __s37local1.parent);
    }
    var __s37local3 = undefined;
    var __s37local4 = __s37local2.length;
    for (__s37local3 = __s37local4 - 1; __s37local3 >= 0 && !__s37param0.propagationStopped; __s37local3--) {
      __s37local2[__s37local3]._dispatchEvent(__s37param0, 1 + (__s37local3 === 0 ? 1 : 0));
    }
    for (__s37local3 = 1; __s37local3 < __s37local4 && !__s37param0.propagationStopped; __s37local3++) {
      __s37local2[__s37local3]._dispatchEvent(__s37param0, 3);
    }
  } else {
    this._dispatchEvent(__s37param0, 2);
  }
  return !__s37param0.defaultPrevented;
};
createjs.Container.prototype.areInaccessibleObjectsUnderPoint = function (__s56param0) {
  __s0local4.debug("Container.areInaccessibleObjectsUnderPoint not implemented yet");
  return false;
};
createjs.Container.prototype.stopAllMovieClips = function () {};
createjs.Container.prototype.requestSoftKeyboard = function () {
  return false;
};
createjs.Container.prototype.startTouchDrag = function (__s62param0, __s62param1 = false, __s62param2 = undefined) {};
createjs.Container.prototype.stopTouchDrag = function (__s64param0) {};
createjs.Container.prototype.removeChildren = function () {
  this.removeAllChildren();
};
Object.defineProperty(createjs.Container.prototype, "dropTarget", {
  get: function () {
    return null;
  },
  set: function (__s70param0) {
    throw new Error("dropTarget has only getter");
  },
  enumerable: true,
  configurable: true
});
createjs.Container.prototype.getBounds = function (__s72param0, __s72param1 = false) {
  var __s72local0 = this._getBounds(null, true, __s72param1);
  __s72local0 ||= new __s0local0(0, 0, 0, 0);
  if (__s72param0 && __s72param0 != this) {
    return this.transformRect(__s72local0, __s72param0);
  } else {
    return __s72local0;
  }
};
__s0local2.prototype._getBounds = function (__s76param0, __s76param1, __s76param2 = false) {
  var __s76local0 = this.DisplayObject_getBounds();
  if (__s76local0) {
    return this._transformBounds(__s76local0, __s76param0, __s76param1);
  }
  var __s76local1 = this._props.matrix;
  __s76local1 = __s76param1 ? __s76local1.identity() : this.getMatrix(__s76local1);
  if (__s76param0) {
    __s76local1.prependMatrix(__s76param0);
  }
  var __s76local2 = this.children.length;
  var __s76local3 = null;
  this.hitableChildCount = 0;
  var __s76local4 = __s76param2 && this.mouseChildren;
  for (var __s76local5 = 0; __s76local5 < __s76local2; __s76local5++) {
    var __s76local6 = this.children[__s76local5];
    if ((!__s76local4 || !!__s76local6.visible) && (!__s76local4 || !__s76local6.children || !!__s76local6.children.length) && (!__s76local4 || !!__s76local6.mouseEnabled)) {
      if (__s76local0 = __s76local6._getBounds(__s76local1, false, __s76local4)) {
        this.hitableChildCount++;
        if (__s76local3) {
          __s76local3.extend(__s76local0.x, __s76local0.y, __s76local0.width, __s76local0.height);
        } else {
          __s76local3 = __s76local0.clone();
        }
      }
    }
  }
  return __s76local3;
};
Object.defineProperty(createjs.Container.prototype, "useHandCursor", {
  get: function () {
    return this.cursor == "pointer";
  },
  set: function (__s88param0) {
    this.cursor = __s88param0 ? "pointer" : "default";
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(createjs.Container.prototype, "loaderInfo", {
  get: function () {
    return new __dep_class_LoaderInfo.LoaderInfo();
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(createjs.Container.prototype, "mouseX", {
  get: function () {
    if (this.stage) {
      var __s92local0 = this.getBounds(this.stage);
      var __s92local1 = 1;
      for (var __s92local2 = this.parent; __s92local2 && !(__s92local2 instanceof __s0local3);) {
        __s92local1 *= __s92local2.scaleX;
        __s92local2 = __s92local2.parent;
      }
      return (this.stage.mouseX - __s92local0.x) / __s92local1;
    }
    return 0;
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(createjs.Container.prototype, "mouseY", {
  get: function () {
    if (this.stage) {
      var __s97local0 = this.getBounds(this.stage);
      var __s97local1 = 1;
      for (var __s97local2 = this.parent; __s97local2 && !(__s97local2 instanceof __s0local3);) {
        __s97local1 *= __s97local2.scaleY;
        __s97local2 = __s97local2.parent;
      }
      return (this.stage.mouseY - __s97local0.y) / __s97local1;
    }
    return 0;
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(createjs.Container.prototype, "mousePos", {
  get: function () {
    if (this.stage) {
      return new createjs.Point(this.stage.mouseX - this.x, this.stage.mouseY - this.y);
    } else {
      return new createjs.Point(0, 0);
    }
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(createjs.Container.prototype, "centerPoint", {
  get: function () {
    return new createjs.Point(this.x + this.width / 2, this.y + this.height / 2);
  },
  enumerable: true,
  configurable: true
});
createjs.Container.prototype.startDrag = function (__s108param0, __s108param1) {
  var __s108local0 = this.x;
  var __s108local1 = this.y;
  var __s108local2 = null;
  this.on(__s0local1.PRESS_MOVE, function (__s110param0) {
    if (__s108local2 == null) {
      __s108local2 = {
        x: __s110param0.stageX,
        y: __s110param0.stageY
      };
    } else {
      var __s110local0 = __s108local2.x - __s110param0.stageX;
      var __s110local1 = -(__s108local2.y - __s110param0.stageY);
      __s110param0.currentTarget.x = Math.min(__s108param1.right, Math.max(__s108local0 - __s110local0, __s108param1.left));
      __s110param0.currentTarget.y = Math.min(__s108param1.bottom, Math.max(__s108local1 + __s110local1, __s108param1.top));
    }
  });
};
createjs.Container.prototype.startDragWithRotation = function (__s114param0, __s114param1) {
  var __s114local0 = __s114param0 ? this.centerPoint : this.mousePos;
  for (var __s114local1 = this.parent, __s114local2 = 0; __s114local1;) {
    __s114local2 += __s114local1.rotation;
    __s114local1 = __s114local1.parent;
  }
  var __s114local3 = __s114local2 / 180 * Math.PI;
  var __s114local4 = Math.sin(__s114local3);
  var __s114local5 = Math.cos(__s114local3);
  var __s114local6 = this.x;
  var __s114local7 = this.y;
  this.on(__s0local1.PRESS_MOVE, function (__s118param0) {
    var __s118local0 = __s118param0.stageX - __s114local0.x;
    var __s118local1 = -(__s118param0.stageY - __s114local0.y);
    var __s118local2 = ~~(__s118local0 * __s114local5 - __s118local1 * __s114local4);
    var __s118local3 = ~~(__s118local1 * __s114local5 + __s118local0 + __s114local4);
    __s118param0.target.x = Math.min(__s114param1.right, Math.max(__s114local6 + __s118local2, __s114param1.left));
    __s118param0.target.y = Math.min(__s114param1.bottom, Math.max(__s114local7 + __s118local3, __s114param1.top));
  });
};
createjs.Container.prototype.stopDrag = function () {
  this.removeAllEventListeners(__s0local1.PRESS_MOVE);
};
createjs.Container.prototype.uncacheAllChildren = function () {
  function __s122local0(__s124param0) {
    if (__s124param0) {
      for (var __s124local0 = 0; __s124local0 < __s124param0.numChildren; __s124local0++) {
        var __s124local1 = __s124param0.getChildAt(__s124local0);
        if (__s124local1.filters && __s124local1.filters.length > 0) {
          return;
        }
        if (__s124local1.cacheCanvas) {
          __s124local1.uncache();
        }
        __s124local1.x = Math.floor(__s124local1.x);
        __s124local1.y = Math.floor(__s124local1.y);
        if (__s124local1 instanceof createjs.Container) {
          __s122local0(__s124local1);
        }
      }
    }
  }
  __s122local0(this);
};
createjs.Container.prototype._getObjectsUnderPoint = function (__s132param0, __s132param1, __s132param2, __s132param3, __s132param4, __s132param5) {
  return __dep_export_objectsUnderPoint.objectsUnderPoint(this, createjs.DisplayObject._hitTestContext, __s132param0, __s132param1, __s132param2, __s132param3, __s132param4, __s132param5);
};
createjs.Container.prototype.__getObjectsUnderPoint = function (__s134param0, __s134param1, __s134param2, __s134param3, __s134param4, __s134param5, __s134param6) {
  return __dep_export_objectsUnderPoint.objectsUnderPoint(this, createjs.DisplayObject._hitTestContext, __s134param0, __s134param1, __s134param2, __s134param3, __s134param4, __s134param5, __s134param6);
};
createjs.Container.prototype._tick = function (__s136param0) {
  if (this.tickEnabled && this.visible) {
    if (this.tickChildren) {
      for (var __s136local0 = this.children.length - 1; __s136local0 >= 0; __s136local0--) {
        var __s136local1 = this.children[__s136local0];
        if (__s136local1.visible && __s136local1.tickEnabled && __s136local1._tick) {
          __s136local1._tick(__s136param0);
        }
      }
    }
    this.DisplayObject__tick(__s136param0);
  }
};
createjs.Container.prototype.changeTextFieldCacheScale = function (__s143param0) {
  if (this.children && this.children.length > 0) {
    this.children.forEach(function (__s146param0) {
      if (__s146param0 instanceof createjs.TextField) {
        __s146param0.defaultCacheScale = __s143param0;
      } else if (__s146param0 instanceof createjs.Container) {
        __s146param0.changeTextFieldCacheScale(__s143param0);
      }
    });
  }
};
createjs.Container.HIT_BOUNDS_CACHE_FREQUENCY = 333;
createjs.Container.prototype.getHitTestBounds = function (__s150param0, __s150param1) {
  if (__s150param0 - this.lastHitTestTime > createjs.Container.HIT_BOUNDS_CACHE_FREQUENCY || !this.lastHitTestBounds) {
    this.lastHitTestTime = __s150param0;
    if (this.parent && this.parent.hitableChildCount === 1 && this.parent.lastHitTestBounds) {
      if (!(this.children.length > 0) || !this.mouseEnabled) {
        return new __s0local0();
      }
      this.lastHitTestBounds = this.parent.lastHitTestBounds.clone();
    } else {
      this.lastHitTestBounds = this.getBounds(__s150param1, true);
    }
  }
  return this.lastHitTestBounds;
};
