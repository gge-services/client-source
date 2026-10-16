var __s0local0;
var __s0local1 = this && this.__extends || (__s0local0 = Object.setPrototypeOf || {
  __proto__: []
} instanceof Array && function (__s1param0, __s1param1) {
  __s1param0.__proto__ = __s1param1;
} || function (__s3param0, __s3param1) {
  for (var __s3local0 in __s3param1) {
    if (__s3param1.hasOwnProperty(__s3local0)) {
      __s3param0[__s3local0] = __s3param1[__s3local0];
    }
  }
}, function (__s8param0, __s8param1) {
  function __s8local0() {
    this.constructor = __s8param0;
  }
  __s0local0(__s8param0, __s8param1);
  __s8param0.prototype = __s8param1 === null ? Object.create(__s8param1) : (__s8local0.prototype = __s8param1.prototype, new __s8local0());
});
Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local2 = createjs.MovieClip;
var __s0local3 = createjs.DisplayObject;
var __s0local4 = createjs.Event;
var __s0local5 = function (__s12param0) {
  function BaseContentReplacer() {
    var __s14local0 = __s12param0.call(this) || this;
    __s14local0._preSizeWidth = 0;
    __s14local0._preSizeHeight = 0;
    __s14local0.addEventListener(__s0local4.ADDED_TO_STAGE, __s14local0.bindFunction(__s14local0.onAddedToStage), false, 0, true);
    return __s14local0;
  }
  __s0local1(BaseContentReplacer, __s12param0);
  BaseContentReplacer.prototype.onAddedToStage = function (__s16param0) {
    this.removeEventListener(__s0local4.ADDED_TO_STAGE, this.bindFunction(this.onAddedToStage), false);
    this.dispatchEvent(new __s0local4("EVENT_MC_REPLACER", true, false));
  };
  Object.defineProperty(BaseContentReplacer.prototype, "width", {
    get: function () {
      return Object.getOwnPropertyDescriptor(__s0local2.prototype, "width").get.call(this);
    },
    set: function (__s20param0) {
      var __s20local0 = __s20param0 || 0;
      Object.getOwnPropertyDescriptor(__s0local3.prototype, "width").set.call(this, __s20local0);
      if (Object.getOwnPropertyDescriptor(__s0local3.prototype, "width").get.call(this) == 0 && Object.getOwnPropertyDescriptor(__s0local3.prototype, "height").get.call(this) == 0) {
        this._preSizeWidth = __s20local0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BaseContentReplacer.prototype, "height", {
    get: function () {
      return Object.getOwnPropertyDescriptor(__s0local2.prototype, "height").get.call(this);
    },
    set: function (__s25param0) {
      var __s25local0 = __s25param0 || 0;
      Object.getOwnPropertyDescriptor(__s0local3.prototype, "height").set.call(this, __s25local0);
      if (Object.getOwnPropertyDescriptor(__s0local3.prototype, "width").get.call(this) == 0 && Object.getOwnPropertyDescriptor(__s0local3.prototype, "height").get.call(this) == 0) {
        this._preSizeHeight = __s25local0;
      }
    },
    enumerable: true,
    configurable: true
  });
  BaseContentReplacer.prototype.getOriginWidth = function () {
    throw new Error("Override With original Width from the flash asset");
  };
  BaseContentReplacer.prototype.getOriginHeight = function () {
    throw new Error("Override With original Height from the flash asset");
  };
  Object.defineProperty(BaseContentReplacer.prototype, "preSizeHeight", {
    get: function () {
      return this._preSizeHeight;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BaseContentReplacer.prototype, "preSizeWidth", {
    get: function () {
      return this._preSizeWidth;
    },
    enumerable: true,
    configurable: true
  });
  BaseContentReplacer.prototype.usePreSizes = function () {
    if (this._preSizeWidth != 0 && this._preSizeHeight != 0) {
      this.width = this._preSizeWidth;
      this.height = this._preSizeHeight;
      this._preSizeHeight = 0;
      this._preSizeWidth = 0;
    }
  };
  return BaseContentReplacer;
}(__s0local2);
exports.BaseContentReplacer = __s0local5;
