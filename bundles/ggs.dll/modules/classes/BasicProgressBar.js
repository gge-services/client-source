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
var __s0local3 = createjs.Shape;
var __s0local4 = function (__s12param0) {
  function BasicProgressBar(__s14param0 = null) {
    var __s14local0 = __s12param0.call(this) || this;
    __s14local0.scaleX_cached = 0;
    __s14local0.disp = __s14param0 ?? __s14local0;
    __s14local0.initProgressBar();
    __s14local0.disp.mask = null;
    return __s14local0;
  }
  __s0local1(BasicProgressBar, __s12param0);
  BasicProgressBar.prototype.initProgressBar = function () {
    this.scaleX = this.scaleX_cached;
  };
  Object.defineProperty(BasicProgressBar.prototype, "scaleX", {
    get: function () {
      if (this.disp.mask) {
        return this.disp.mask.scaleX;
      } else {
        return 1;
      }
    },
    set: function (__s22param0) {
      this.scaleX_cached = __s22param0;
      this.applyMask();
      if (this.disp) {
        this.disp.mask.scaleX = __s22param0;
      }
    },
    enumerable: true,
    configurable: true
  });
  BasicProgressBar.prototype.applyMask = function () {
    if (this.disp && !this.disp.mask) {
      this.maskMC = new __s0local3();
      this.maskMC.x = this.disp.x;
      this.maskMC.y = this.disp.y;
      var __s25local0 = this.disp.getBounds();
      this.maskMC.graphics.beginFill("#FF0000").drawRect(__s25local0.x, __s25local0.y, __s25local0.width, __s25local0.height);
      this.maskMC.rotation = this.disp.rotation;
      this.maskMC.setBounds(__s25local0.x, __s25local0.y, __s25local0.width, __s25local0.height);
      this.disp.addChild(this.maskMC);
      this.disp.mask = this.maskMC;
    }
  };
  BasicProgressBar.prototype.removeMaskMC = function () {
    if (this.maskMC) {
      this.disp.removeChild(this.maskMC);
      this.maskMC = null;
      this.disp.mask = null;
    }
  };
  return BasicProgressBar;
}(__s0local2);
exports.BasicProgressBar = __s0local4;
