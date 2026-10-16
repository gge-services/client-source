Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_definedMasks = require("gge-module:export_definedMasks");
var __dep_export_getDisplayObjectBounds = require("gge-module:export_getDisplayObjectBounds");
var __dep_export_getGraphicsInstructions = require("gge-module:export_getGraphicsInstructions");
var __s0local0 = createjs.MovieClip;
Object.defineProperty(createjs.MovieClip.prototype, "enabled", {
  get: function () {
    if (this.$enabled === undefined) {
      this.$enabled = true;
    }
    return this.$enabled;
  },
  set: function (__s4param0) {
    this.$enabled = __s4param0;
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(createjs.MovieClip.prototype, "framesLoaded", {
  get: function () {
    return this.totalFrames;
  },
  enumerable: true,
  configurable: true
});
createjs.MovieClip.prototype._getBounds = function (__s8param0, __s8param1, __s8param2 = false) {
  var __s8local0 = this.DisplayObject_getBounds();
  if (!__s8local0 && this.timeline.duration > 0) {
    this._updateTimeline(this.timeline.rawPosition);
    if (this.frameBounds) {
      __s8local0 = this._rectangle.copy(this.frameBounds[this.currentFrame]);
    }
  }
  if (__s8local0) {
    return this._transformBounds(__s8local0, __s8param0, __s8param1);
  }
  var __s8local1 = this._props.matrix;
  __s8local1 = __s8param1 ? __s8local1.identity() : this.getMatrix(__s8local1);
  if (__s8param0) {
    __s8local1.prependMatrix(__s8param0);
  }
  var __s8local2 = this.children.length;
  var __s8local3 = null;
  this.hitableChildCount = 0;
  var __s8local4 = __s8param2 && this.mouseChildren;
  for (var __s8local5 = 0; __s8local5 < __s8local2; __s8local5++) {
    var __s8local6 = this.children[__s8local5];
    if ((!__s8local4 || !!__s8local6.visible) && (!__s8local4 || !__s8local6.children || !!__s8local6.children.length) && (!__s8local4 || !!__s8local6.mouseEnabled)) {
      if (__s8local0 = __s8local6._getBounds(__s8local1, false, __s8local4)) {
        this.hitableChildCount++;
        if (__s8local3) {
          __s8local3.extend(__s8local0.x, __s8local0.y, __s8local0.width, __s8local0.height);
        } else {
          __s8local3 = __s8local0.clone();
        }
      }
    }
  }
  return __s8local3;
};
var __s0local1 = createjs.MovieClip.prototype._goto;
createjs.MovieClip.prototype._goto = function (__s20param0) {
  if (Number.isInteger(__s20param0) && __s20param0 > 0) {
    --__s20param0;
  }
  __s0local1.apply(this, [__s20param0]);
};
var __s0local2 = createjs.MovieClip.prototype.advance;
createjs.MovieClip.prototype.advance = function (__s23param0) {
  this.framerate ||= 24;
  var __s23local0 = this.currentFrame;
  if (this.visible && !this.paused && this.totalFrames > 1) {
    __s0local2.apply(this, [__s23param0]);
  }
  if (__s23local0 != this.currentFrame && this.framerate != 24) {
    for (var __s23local1 = 0; __s23local1 < this.numChildren; __s23local1++) {
      if (this.children[__s23local1] instanceof __s0local0) {
        this.children[__s23local1].framerate = this.framerate;
      }
    }
  }
};
createjs.MovieClip.prototype._defineMask = function () {
  if (!this._maskInstructions) {
    this._maskInstructions = {};
    this._maskShape = new createjs.Shape();
    this._maskBounds = {};
  }
};
createjs.MovieClip.prototype._addChildToMask = function (__s33param0) {
  var __s33local0 = __s33param0.constructor.__fname || __s33param0.constructor.name;
  if (__dep_export_definedMasks.definedMasks[__s33local0]) {
    this._maskInstructions[__s33local0] = __dep_export_definedMasks.definedMasks[__s33local0];
    this._maskBounds[__s33local0] = __dep_export_getDisplayObjectBounds.getDisplayObjectBounds(__s33param0);
    return;
  }
  if (this._maskInstructions) {
    this._maskInstructions[__s33param0.id] = __dep_export_getGraphicsInstructions.getGraphicsInstructions(__s33param0);
  }
  if (this._maskBounds) {
    this._maskBounds[__s33param0.id] = __dep_export_getDisplayObjectBounds.getDisplayObjectBounds(__s33param0);
  }
};
createjs.MovieClip.prototype._removeChildFromMask = function (__s38param0) {
  var __s38local0 = __s38param0.constructor.__fname || __s38param0.constructor.name;
  var __s38local1 = __dep_export_definedMasks.definedMasks[__s38local0] ? __s38local0 : __s38param0.id;
  if (this._maskInstructions) {
    delete this._maskInstructions[__s38local1];
  }
  if (this._maskInstructions) {
    delete this._maskBounds[__s38local1];
  }
};
createjs.MovieClip.prototype._generateShapeOfChildren = function () {
  var __s42local0 = this;
  this._clearMask();
  this.children.forEach(function (__s44param0) {
    __s42local0._addChildToMask(__s44param0);
  });
  return this;
};
createjs.MovieClip.prototype._updateMaskBounds = function () {
  var __s46local0;
  this._maskShape.setBounds(0, 0, 0, 0);
  for (var __s46local1 in this._maskBounds) {
    __s46local0 = this._maskBounds[__s46local1];
    this._maskShape.graphics.bounds.setValues(Math.min(this._maskShape.graphics.bounds.x, __s46local0.x), Math.min(this._maskShape.graphics.bounds.y, __s46local0.y), Math.max(this._maskShape.graphics.bounds.width, __s46local0.width), Math.max(this._maskShape.graphics.bounds.height, __s46local0.height));
  }
};
createjs.MovieClip.prototype._redrawMask = function () {
  var __s50local0;
  var __s50local1 = this;
  this._clearMask();
  if (this._maskInstructions && Object.keys(this._maskInstructions).length) {
    this._maskShape.graphics.f("red");
    for (var __s50local2 in this._maskInstructions) {
      if ((__s50local0 = this._maskInstructions[__s50local2]).p) {
        this._maskShape.graphics.p(__s50local0.p, __s50local0.x, __s50local0.y);
      } else if (__s50local0 instanceof Array) {
        __s50local0.forEach(function (__s57param0) {
          __s50local1._maskShape.graphics.append(__s57param0);
        });
      }
    }
    this._maskShape.x = this.x;
    this._maskShape.y = this.y;
  } else {
    this._maskShape.graphics.f("red").r(0, 0, 0, 0);
  }
  this._updateMaskBounds();
  return this._maskShape;
};
createjs.MovieClip.prototype._clearMask = function () {
  if (this._maskShape) {
    this._maskShape.graphics.clear();
  }
};
createjs.MovieClip.prototype._createMaskShape = function () {
  this._defineMask();
  this._generateShapeOfChildren();
  this._redrawMask();
  return this._maskShape;
};
Object.defineProperty(createjs.MovieClip.prototype, "maskShape", {
  configurable: true,
  enumerable: true,
  get: function () {
    return this._maskShape;
  },
  set: function (__s67param0) {
    throw new Error("Can't set maskShape of MovieClip");
  }
});
Object.defineProperty(createjs.MovieClip.prototype, "usedAsMask", {
  configurable: true,
  enumerable: true,
  get: function () {
    this._defineMask();
    return Boolean(this._usedAsMask);
  },
  set: function (__s71param0) {
    this._usedAsMask = __s71param0;
  }
});
createjs.MovieClip.prototype.addChild = function (__s73param0) {
  if (__s73param0 == null) {
    return __s73param0;
  }
  var __s73local0 = arguments.length;
  if (__s73local0 > 1) {
    for (var __s73local1 = 0; __s73local1 < __s73local0; __s73local1++) {
      this.addChild(arguments[__s73local1]);
    }
    return arguments[__s73local0 - 1];
  }
  if (__s73param0.parent) {
    var __s73local2 = createjs.indexOf(__s73param0.parent.children, __s73param0);
    if (__s73local2 > -1) {
      __s73param0.parent.children.splice(__s73local2, 1);
      __s73param0.parent = null;
    }
  }
  __s73param0.parent = this;
  this.children.push(__s73param0);
  __s73param0.added();
  if (this.usedAsMask) {
    this._addChildToMask(__s73param0);
    this._redrawMask();
  }
  return __s73param0;
};
createjs.MovieClip.prototype.addChildAt = function (__s82param0, __s82param1) {
  var __s82local0 = arguments.length;
  var __s82local1 = arguments[__s82local0 - 1];
  if (__s82local1 < 0 || __s82local1 > this.children.length) {
    return arguments[__s82local0 - 2];
  }
  if (__s82local0 > 2) {
    for (var __s82local2 = 0; __s82local2 < __s82local0 - 1; __s82local2++) {
      this.addChildAt(arguments[__s82local2], __s82local1 + __s82local2);
    }
    return arguments[__s82local0 - 2];
  }
  if (__s82param0.parent) {
    var __s82local3 = createjs.indexOf(__s82param0.parent.children, __s82param0);
    if (__s82local3 > -1) {
      __s82param0.parent.children.splice(__s82local3, 1);
      __s82param0.parent = null;
    }
  }
  __s82param0.parent = this;
  this.children.splice(__s82param1, 0, __s82param0);
  __s82param0.added();
  if (this.usedAsMask) {
    this._addChildToMask(__s82param0);
    this._redrawMask();
  }
  return __s82param0;
};
createjs.MovieClip.prototype.removeChildAt = function (__s91param0) {
  var __s91local0 = arguments.length;
  if (__s91local0 > 1) {
    var __s91local1 = [];
    for (var __s91local2 = 0; __s91local2 < __s91local0; __s91local2++) {
      __s91local1[__s91local2] = arguments[__s91local2];
    }
    __s91local1.sort(function (__s96param0, __s96param1) {
      return __s96param1 - __s96param0;
    });
    var __s91local3 = true;
    for (__s91local2 = 0; __s91local2 < __s91local0; __s91local2++) {
      __s91local3 = __s91local3 && this.removeChildAt(__s91local1[__s91local2]);
    }
    return __s91local3;
  }
  if (__s91param0 < 0 || __s91param0 > this.children.length - 1) {
    return false;
  }
  var __s91local4 = this.children[__s91param0];
  if (__s91local4) {
    if (this.usedAsMask) {
      this._removeChildFromMask(__s91local4);
      this._redrawMask();
    }
    __s91local4.removed();
  }
  this.children.splice(__s91param0, 1);
  return true;
};
