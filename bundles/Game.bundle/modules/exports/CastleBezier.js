Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleBezier(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4, __s3param5) {
    this._x0 = 0;
    this._y0 = 0;
    this._x1 = 0;
    this._y1 = 0;
    this._x2 = 0;
    this._y2 = 0;
    this._x0 = __s3param0;
    this._y0 = __s3param1;
    this._x1 = __s3param2;
    this._y1 = __s3param3;
    this._x2 = __s3param4;
    this._y2 = __s3param5;
  }
  CastleBezier.prototype.position = function (__s5param0, __s5param1) {
    var __s5local0 = 1 - __s5param1;
    var __s5local1 = __s5local0 * __s5local0;
    var __s5local2 = __s5local0 * 2 * __s5param1;
    var __s5local3 = __s5param1 * __s5param1;
    __s5param0.x = __s5local1 * this._x0 + __s5local2 * this._x1 + __s5local3 * this._x2;
    __s5param0.y = __s5local1 * this._y0 + __s5local2 * this._y1 + __s5local3 * this._y2;
  };
  CastleBezier.prototype.slope = function (__s7param0, __s7param1) {
    var __s7local0 = (1 - __s7param1) * 2;
    var __s7local1 = __s7param1 * 2;
    __s7param0.x = __s7local0 * (this._x1 - this._x0) + __s7local1 * (this._x2 - this._x1);
    __s7param0.y = __s7local0 * (this._y1 - this._y0) + __s7local1 * (this._y2 - this._y1);
  };
  CastleBezier.prototype.speed = function (__s9param0) {
    var __s9local0 = (1 - __s9param0) * 2;
    var __s9local1 = __s9param0 * 2;
    var __s9local2 = __s9local0 * (this._x1 - this._x0) + __s9local1 * (this._x2 - this._x1);
    var __s9local3 = __s9local0 * (this._y1 - this._y0) + __s9local1 * (this._y2 - this._y1);
    return Math.sqrt(__s9local2 * __s9local2 + __s9local3 * __s9local3);
  };
  CastleBezier.prototype.angle = function (__s11param0) {
    var __s11local0 = (1 - __s11param0) * 2;
    var __s11local1 = __s11param0 * 2;
    var __s11local2 = __s11local0 * (this._x1 - this._x0) + __s11local1 * (this._x2 - this._x1);
    var __s11local3 = __s11local0 * (this._y1 - this._y0) + __s11local1 * (this._y2 - this._y1);
    return Math.atan2(__s11local3, __s11local2);
  };
  CastleBezier.prototype.draw = function (__s13param0) {
    __s13param0.moveTo(this._x0, this._y0);
    __s13param0.curveTo(this._x1, this._y1, this._x2, this._y2);
  };
  Object.defineProperty(CastleBezier.prototype, "x0", {
    get: function () {
      return this._x0;
    },
    set: function (__s17param0) {
      this._x0 = __s17param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBezier.prototype, "x2", {
    get: function () {
      return this._x2;
    },
    set: function (__s21param0) {
      this._x2 = __s21param0;
    },
    enumerable: true,
    configurable: true
  });
  return CastleBezier;
}();
exports.CastleBezier = __s0local0;
