Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0;
var __s0local1;
var __s0local2;
var __s0local3;
var __s0local4;
var __s0local5;
var __dep_opaque_1bc5cb62fa0fa0642df721a1 = require("gge-module:opaque_1bc5cb62fa0fa0642df721a1");
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __dep_export_cacheModules = require("gge-module:export_cacheModules");
__dep_export_LoggerConfigurator.getLogger("createjs.ts Extensions");
createjs.precacheModules = __dep_export_cacheModules.cacheModules;
(__s0local0 = function (__s1param0) {
  function TimerEvent() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_opaque_1bc5cb62fa0fa0642df721a1.__extends(TimerEvent, __s1param0);
  return TimerEvent;
}(createjs.Event)).TIMER = "timer";
__s0local0.TIMER_COMPLETE = "timerComplete";
createjs.TimerEvent = __s0local0;
(__s0local1 = function (__s5param0) {
  function IOErrorEvent() {
    return __s5param0 !== null && __s5param0.apply(this, arguments) || this;
  }
  __dep_opaque_1bc5cb62fa0fa0642df721a1.__extends(IOErrorEvent, __s5param0);
  return IOErrorEvent;
}(createjs.Event)).IO_ERROR = "error";
createjs.IOErrorEvent = __s0local1;
(__s0local2 = function (__s9param0) {
  function SecurityErrorEvent() {
    return __s9param0 !== null && __s9param0.apply(this, arguments) || this;
  }
  __dep_opaque_1bc5cb62fa0fa0642df721a1.__extends(SecurityErrorEvent, __s9param0);
  return SecurityErrorEvent;
}(createjs.Event)).SECURITY_ERROR = "error";
createjs.SecurityErrorEvent = __s0local2;
Object.defineProperty(Error.prototype, "errorID", {
  configurable: false,
  enumerable: true,
  value: 0,
  writable: false
});
createjs.LoaderEvent = function (__s13param0) {
  function LoaderEvent() {
    return __s13param0 !== null && __s13param0.apply(this, arguments) || this;
  }
  __dep_opaque_1bc5cb62fa0fa0642df721a1.__extends(LoaderEvent, __s13param0);
  return LoaderEvent;
}(createjs.Event);
createjs.ProgressEvent.PROGRESS = "progress";
Object.defineProperty(createjs.Stage.prototype, "bytesTotal", {
  get: function () {
    return this.bytesTotal;
  },
  set: function (__s19param0) {
    this.bytesTotal = __s19param0;
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(createjs.Stage.prototype, "bytesLoaded", {
  get: function () {
    return this.bytesLoaded;
  },
  set: function (__s23param0) {
    this.bytesLoaded = __s23param0;
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(createjs.Stage.prototype, "quality", {
  get: function () {
    this.__quality ||= 1;
    return this.__quality;
  },
  set: function (__s27param0) {
    this.__quality = __s27param0;
  },
  enumerable: true,
  configurable: true
});
(__s0local3 = function (__s29param0) {
  function TextEvent(__s31param0, __s31param1 = false, __s31param2 = false, __s31param3 = "") {
    var __s31local0 = __s29param0.call(this, __s31param0, __s31param1, __s31param2) || this;
    __s31local0.text = "";
    __s31local0.text = __s31param3;
    return __s31local0;
  }
  __dep_opaque_1bc5cb62fa0fa0642df721a1.__extends(TextEvent, __s29param0);
  return TextEvent;
}(createjs.Event)).INPUT_TEXT = "input";
__s0local3.LINK = "link";
createjs.TextEvent = __s0local3;
(__s0local4 = function (__s33param0) {
  function FocusEvent() {
    return __s33param0 !== null && __s33param0.apply(this, arguments) || this;
  }
  __dep_opaque_1bc5cb62fa0fa0642df721a1.__extends(FocusEvent, __s33param0);
  return FocusEvent;
}(createjs.Event)).FOCUS_IN = "focusIn";
__s0local4.FOCUS_OUT = "focusOut";
__s0local4.KEY_FOCUS_CHANGE = "keyFocusChange";
createjs.FocusEvent = __s0local4;
(__s0local5 = function () {
  return function StageQuality() {};
}()).LOW = "low";
__s0local5.MEDIUM = "medium";
__s0local5.HIGH = "high";
__s0local5.BEST = "best";
createjs.StageQuality = __s0local5;
Object.defineProperty(createjs.Point.prototype, "length", {
  get: function () {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  },
  enumerable: true,
  configurable: true
});
createjs.Point.prototype.equals = function (__s43param0) {
  return this.x == __s43param0.x && this.y == __s43param0.y;
};
createjs.Point.prototype.add = function (__s45param0) {
  return new createjs.Point(this.x + __s45param0.x, this.y + __s45param0.y);
};
createjs.Point.prototype.offset = function (__s47param0, __s47param1) {
  return this.add(new createjs.Point(__s47param0, __s47param1));
};
createjs.Point.prototype.subtract = function (__s49param0) {
  return new createjs.Point(this.x - __s49param0.x, this.y - __s49param0.y);
};
createjs.Point.prototype.normalize = function (__s51param0) {
  if (this.x != 0 || this.y != 0) {
    var __s51local0 = __s51param0 / this.length;
    this.x *= __s51local0;
    this.y *= __s51local0;
  }
};
createjs.Point.interpolate = function (__s54param0, __s54param1, __s54param2) {
  var __s54local0 = 1 - __s54param2;
  return new createjs.Point(__s54param0.x * __s54param2 + __s54param1.x * __s54local0, __s54param0.y * __s54param2 + __s54param1.y * __s54local0);
};
createjs.Point.distance = function (__s56param0, __s56param1) {
  return Math.sqrt((__s56param0.x - __s56param1.x) * (__s56param0.x - __s56param1.x) + (__s56param0.y - __s56param1.y) * (__s56param0.y - __s56param1.y));
};
Object.defineProperty(createjs.Point.prototype, "right", {
  get: function () {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  },
  set: function (__s60param0) {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(createjs.Point.prototype, "right", {
  get: function () {
    return this.x + this.width;
  },
  set: function (__s64param0) {
    this.width = __s64param0 - this.x;
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(createjs.Point.prototype, "bottom", {
  get: function () {
    return this.y + this.height;
  },
  set: function (__s68param0) {
    this.height = __s68param0 - this.y;
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(createjs.Point.prototype, "left", {
  get: function () {
    return this.x;
  },
  set: function (__s72param0) {
    this.width += this.x - __s72param0;
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(createjs.Point.prototype, "top", {
  get: function () {
    return this.y;
  },
  set: function (__s76param0) {
    this.height += this.y - __s76param0;
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(createjs.Point.prototype, "topLeft", {
  get: function () {
    return new createjs.Point(this.left, this.top);
  },
  set: function (__s80param0) {
    this.top = __s80param0.y;
    this.left = __s80param0.x;
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(createjs.Point.prototype, "bottomRight", {
  get: function () {
    return new createjs.Point(this.right, this.bottom);
  },
  set: function (__s84param0) {
    this.bottom = __s84param0.y;
    this.right = __s84param0.x;
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(createjs.Stage.prototype, "stageWidth", {
  get: function () {
    if (this.canvas) {
      return Math.round(this.canvas.width / this.scaleX);
    } else {
      return 0;
    }
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(createjs.Stage.prototype, "stageHeight", {
  get: function () {
    if (this.canvas) {
      return Math.round(this.canvas.height / this.scaleY);
    } else {
      return 0;
    }
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(createjs.Stage.prototype, "color", {
  get: function () {
    this._color ||= "transparent";
    return this._color;
  },
  set: function (__s96param0) {
    this._color = __s96param0;
    this.canvas.style.backgroundColor = this._color;
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(createjs.MouseEvent.prototype, "relatedObject", {
  get: function () {
    return this.nativeEvent.relatedTarget;
  },
  set: function (__s100param0) {
    this.nativeEvent.relatedTarget = __s100param0;
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(createjs.Stage.prototype, "mouseX", {
  get: function () {
    return this._mouseX;
  },
  set: function (__s104param0) {
    this._mouseX = __s104param0;
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(createjs.Stage.prototype, "mouseY", {
  get: function () {
    return this._mouseY;
  },
  set: function (__s108param0) {
    this._mouseY = __s108param0;
  },
  enumerable: true,
  configurable: true
});
