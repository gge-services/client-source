Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __s0local0 = function () {
  function SomeDistributableItem() {
    this.timeOutID = 0;
  }
  SomeDistributableItem.prototype.clone = function () {
    return new SomeDistributableItem();
  };
  Object.defineProperty(SomeDistributableItem.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    set: function (__s9param0) {
      this._disp = __s9param0;
      if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this._disp, "MovieClip")) {
        this._disp.gotoAndStop(SomeDistributableItem.FRAME_DEFAULT);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SomeDistributableItem.prototype, "x", {
    get: function () {
      return this._disp.x;
    },
    set: function (__s14param0) {
      this._disp.x = __s14param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SomeDistributableItem.prototype, "y", {
    get: function () {
      return this._disp.y;
    },
    set: function (__s18param0) {
      this._disp.y = __s18param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SomeDistributableItem.prototype, "scaleX", {
    get: function () {
      return this._disp.scaleX;
    },
    set: function (__s22param0) {
      this._disp.scaleX = __s22param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SomeDistributableItem.prototype, "scaleY", {
    get: function () {
      return this._disp.scaleY;
    },
    set: function (__s26param0) {
      this._disp.scaleY = __s26param0;
    },
    enumerable: true,
    configurable: true
  });
  SomeDistributableItem.prototype.highlight = function (__s28param0, __s28param1) {
    if (__s28param0 >= 1 && __s28param0 <= this._disp.totalFrames) {
      if (__s28param1 > 0) {
        window.clearTimeout(this.timeOutID);
        this.timeOutID = __dep_exact_f855840627e6e145.int(window.setTimeout(this.bindFunction(this.doHighlight), __s28param1 * 1000, __s28param0));
      } else {
        this.doHighlight(__s28param0);
      }
    }
  };
  SomeDistributableItem.prototype.doHighlight = function (__s33param0) {
    this._disp.gotoAndStop(__s33param0);
  };
  SomeDistributableItem.prototype.dehighlight = function () {
    this._disp.gotoAndStop(SomeDistributableItem.FRAME_DEFAULT);
  };
  Object.defineProperty(SomeDistributableItem.prototype, "isHighlighted", {
    get: function () {
      return this._disp.currentFrame != SomeDistributableItem.FRAME_DEFAULT;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SomeDistributableItem.prototype, "highlightType", {
    get: function () {
      return this._disp.currentFrame;
    },
    enumerable: true,
    configurable: true
  });
  SomeDistributableItem.__initialize_static_members = function () {
    SomeDistributableItem.FRAME_DEFAULT = 1;
    SomeDistributableItem.FRAME_ANOUNCED_PROGRESS = 2;
    SomeDistributableItem.FRAME_PROGRESS = 3;
  };
  return SomeDistributableItem;
}();
exports.SomeDistributableItem = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IDistributableItem");
__s0local0.__initialize_static_members();
