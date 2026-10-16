Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.Container;
var __s0local1 = createjs.Point;
var __s0local2 = function () {
  function VisualMapElement() {
    this.deathTime = NaN;
    this.isDying = false;
    this._isMutable = false;
    this._hidden = false;
    this._lastUpdateTimestamp = NaN;
  }
  Object.defineProperty(VisualMapElement.prototype, "uiBounds", {
    get: function () {
      if (this.disp) {
        return this.disp.getBounds(null);
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VisualMapElement.prototype, "uiPos", {
    get: function () {
      if (this.disp) {
        return new __s0local1(this.disp.x, this.disp.y);
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VisualMapElement.prototype, "uiDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  VisualMapElement.prototype.initialize = function (__s15param0, __s15param1) {
    this.vo = __s15param0;
    this.worldmapRenderer = __s15param1;
    this._visClassName = this.name + "_" + this.group + "_" + this.type;
    this.deathTime = Number.MAX_VALUE;
    this.isDying = false;
    this.initVisualRep();
    if (this.disp) {
      this.visualX = this.initialX;
      this.visualY = this.initialY;
    }
  };
  VisualMapElement.prototype.initVisualRep = function () {
    if (this.disp == null) {
      this.disp = new __s0local0();
    }
  };
  VisualMapElement.prototype.show = function () {
    this._hidden = false;
    if (this.disp) {
      this.disp.visible = true;
    }
  };
  VisualMapElement.prototype.hide = function () {
    this._hidden = true;
    if (this.disp) {
      this.disp.visible = false;
    }
  };
  VisualMapElement.prototype.update = function (__s27param0) {
    this.updateVisualRep(__s27param0);
    this._lastUpdateTimestamp = __s27param0;
  };
  VisualMapElement.prototype.updateVisualRep = function (__s29param0) {};
  Object.defineProperty(VisualMapElement.prototype, "hidden", {
    get: function () {
      return this._hidden;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VisualMapElement.prototype, "initialX", {
    get: function () {
      return this.vo.x;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VisualMapElement.prototype, "initialY", {
    get: function () {
      return this.vo.y;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VisualMapElement.prototype, "visualX", {
    get: function () {
      return this.disp.x;
    },
    set: function (__s39param0) {
      this.disp.x = __s39param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VisualMapElement.prototype, "visualY", {
    get: function () {
      return this.disp.y;
    },
    set: function (__s43param0) {
      this.disp.y = __s43param0;
    },
    enumerable: true,
    configurable: true
  });
  VisualMapElement.prototype.die = function (__s45param0 = -1) {
    if (!this.isDying) {
      this.isDying = true;
      var __s45local0 = __dep_exact_f855840627e6e145.int(__dep_export_CachedTimer.CachedTimer.getCachedTimer());
      this.deathTime = __s45param0 < 0 ? __s45local0 : __s45param0;
      if (this.deathTime <= __s45local0) {
        this.hide();
      }
    }
  };
  VisualMapElement.prototype.isDead = function (__s49param0) {
    return __s49param0 > this.deathTime;
  };
  VisualMapElement.prototype.remove = function () {};
  Object.defineProperty(VisualMapElement.prototype, "x", {
    get: function () {
      return this.vo.x;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VisualMapElement.prototype, "y", {
    get: function () {
      return this.vo.y;
    },
    enumerable: true,
    configurable: true
  });
  VisualMapElement.prototype.addDispToLayer = function (__s57param0, __s57param1 = -1) {
    if (this.disp) {
      this._dispLayer = __s57param0;
      if (__s57param1 == -1) {
        this._dispLayer.addChild(this.disp);
      } else {
        this._dispLayer.addChildAt(this.disp, __s57param1);
      }
    }
  };
  VisualMapElement.prototype.removeDispFromWorld = function () {
    if (this.disp) {
      if (this._dispLayer) {
        this._dispLayer.removeChild(this.disp);
        this._dispLayer = null;
      }
      this.disp = null;
    }
  };
  VisualMapElement.prototype.addDispChild = function (__s66param0) {
    if (this.disp && __s66param0 && __s66param0.parent != this.disp) {
      this.disp.addChild(__s66param0);
    }
  };
  VisualMapElement.prototype.addDispChildAt = function (__s69param0, __s69param1) {
    if (this.disp && __s69param0 && __s69param0.parent != this.disp && __s69param1 <= this.disp.numChildren) {
      this.disp.addChildAt(__s69param0, __s69param1);
    }
  };
  VisualMapElement.prototype.removeDispChild = function (__s72param0) {
    if (this.disp && __s72param0 && __s72param0.parent == this.disp) {
      this.disp.removeChild(__s72param0);
    }
  };
  VisualMapElement.prototype.getDispChildAt = function (__s75param0) {
    if (this.disp && this.disp.numChildren > __s75param0) {
      return this.disp.getChildAt(__s75param0);
    } else {
      return null;
    }
  };
  VisualMapElement.prototype.removeDispChildAt = function (__s79param0) {
    if (this.disp && this.disp.numChildren > __s79param0) {
      this.disp.removeChildAt(__s79param0);
    }
  };
  VisualMapElement.prototype.toString = function () {
    return this.name + "_" + this.group + "_" + this.type;
  };
  Object.defineProperty(VisualMapElement.prototype, "isHidden", {
    get: function () {
      return this.disp.visible == 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VisualMapElement.prototype, "useBitmapCache", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VisualMapElement.prototype, "isMutable", {
    get: function () {
      return this._isMutable;
    },
    set: function (__s90param0) {
      this._isMutable = __s90param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VisualMapElement.prototype, "name", {
    get: function () {
      return this.vo.name;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VisualMapElement.prototype, "group", {
    get: function () {
      return this.vo.group;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VisualMapElement.prototype, "type", {
    get: function () {
      return this.vo.type;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VisualMapElement.prototype, "scale", {
    get: function () {
      if (this.disp) {
        return this.disp.scaleX;
      } else {
        return 0;
      }
    },
    set: function (__s102param0) {
      if (this.scale != __s102param0) {
        this.disp.scaleX = this.disp.scaleY = __s102param0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VisualMapElement.prototype, "alpha", {
    get: function () {
      if (this.disp) {
        return this.disp.alpha;
      } else {
        return 1;
      }
    },
    set: function (__s109param0) {
      if (this.disp) {
        this.disp.alpha = __s109param0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VisualMapElement.prototype, "cacheAsBitmap", {
    set: function (__s112param0) {
      if (this.disp) {
        this.disp.cacheAsBitmap = __s112param0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VisualMapElement.prototype, "filters", {
    get: function () {
      if (this.disp) {
        return this.disp.filters;
      } else {
        return null;
      }
    },
    set: function (__s119param0) {
      if (this.disp) {
        this.disp.useFilters(__s119param0);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VisualMapElement.prototype, "currentVisWidth", {
    get: function () {
      if (this.disp) {
        return this.disp.width;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VisualMapElement.prototype, "currentVisHeight", {
    get: function () {
      if (this.disp) {
        return this.disp.height;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VisualMapElement.prototype, "rotation", {
    get: function () {
      if (this.disp) {
        return this.disp.rotation;
      } else {
        return 0;
      }
    },
    set: function (__s134param0) {
      if (this.disp) {
        this.disp.rotation = __s134param0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VisualMapElement.prototype, "graphics", {
    get: function () {
      if (this.disp) {
        return this.disp.graphics;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VisualMapElement.prototype, "lastVisualUpdate", {
    get: function () {
      return this._lastUpdateTimestamp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VisualMapElement.prototype, "visClassName", {
    get: function () {
      return this.vo.getVisualClassName();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VisualMapElement.prototype, "objectID", {
    get: function () {
      return this.vo.objectId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VisualMapElement.prototype, "wodId", {
    get: function () {
      return this.vo.wodId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VisualMapElement.prototype, "visualVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return VisualMapElement;
}();
exports.VisualMapElement = __s0local2;
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
