Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_ba3768902da9162c = require("gge-module:exact_ba3768902da9162c");
var __s0local0 = createjs.Point;
var __s0local1 = function () {
  function Vector2D(__s3param0 = 0, __s3param1 = 0) {
    this.x = __s3param0;
    this.y = __s3param1;
    this._length = 0;
  }
  Object.defineProperty(Vector2D.prototype, "length", {
    get: function () {
      if (this._oldX != this.x || this._oldY != this.y) {
        this._oldX = this.x;
        this._oldY = this.y;
        this._length = Math.sqrt(this.x * this.x + this.y * this.y);
      }
      return this._length;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Vector2D.prototype, "lengthSq", {
    get: function () {
      return this.x * this.x + this.y * this.y;
    },
    enumerable: true,
    configurable: true
  });
  Vector2D.prototype.isZero = function () {
    return this.x == 0 || this.y == 0;
  };
  Vector2D.is2ndInFOVof1st = function (__s12param0, __s12param1, __s12param2, __s12param3) {
    var __s12local0 = __s12param3.copy();
    __s12local0.subtract(__s12param0);
    __s12local0.normalize();
    return __s12param1.dotOf(__s12local0) >= Math.cos(__s12param2 / 2);
  };
  Vector2D.pointToVector = function (__s14param0) {
    return new Vector2D(__s14param0.x, __s14param0.y);
  };
  Vector2D.rotToHeading = function (__s16param0) {
    return new Vector2D(Math.cos(__s16param0), Math.sin(__s16param0));
  };
  Vector2D.prototype.toString = function () {
    return "( " + this.x + ", " + this.y + " )";
  };
  Vector2D.prototype.toPoint = function () {
    return new __s0local0(this.x, this.y);
  };
  Vector2D.prototype.toRotation = function () {
    var __s22local0 = Math.atan(this.y / this.x);
    if (this.y < 0 && this.x > 0) {
      return __s22local0;
    } else if (this.y < 0 && this.x < 0 || this.y > 0 && this.x < 0) {
      return __s22local0 + 3.141592653589793;
    } else {
      return __s22local0 + 6.283185307179586;
    }
  };
  Vector2D.prototype.Set = function (__s27param0, __s27param1) {
    this.x = __s27param0;
    this.y = __s27param1;
  };
  Vector2D.prototype.copy = function () {
    var __s29local0 = new Vector2D(this.x, this.y);
    __s29local0._length = this._length;
    __s29local0._oldX = this.x;
    __s29local0._oldY = this.y;
    return __s29local0;
  };
  Vector2D.prototype.normalize = function () {
    if (this.length != 0) {
      this.x /= this._length;
      this.y /= this._length;
    }
  };
  Vector2D.prototype.reflect = function (__s34param0) {
    this.v1 = __s34param0.getReverse();
    this.v1.multiply(this.dotOf(__s34param0) * 2);
    this.addTo(this.v1);
  };
  Vector2D.prototype.addTo = function (__s36param0) {
    this.x += __s36param0.x;
    this.y += __s36param0.y;
  };
  Vector2D.prototype.subtract = function (__s38param0) {
    this.x -= __s38param0.x;
    this.y -= __s38param0.y;
  };
  Vector2D.prototype.multiply = function (__s40param0) {
    this.x *= __s40param0;
    this.y *= __s40param0;
  };
  Vector2D.prototype.divide = function (__s42param0) {
    if (__s42param0 == 0) {
      __dep_exact_ba3768902da9162c.warn("Illegal Divide by Zero!");
    } else {
      this.x /= __s42param0;
      this.y /= __s42param0;
    }
  };
  Vector2D.prototype.truncate = function (__s46param0) {
    if (this.lengthSq > __s46param0 * __s46param0) {
      this.normalize();
      this.multiply(__s46param0);
    }
  };
  Vector2D.prototype.wrapAround = function (__s49param0, __s49param1) {
    if (this.x > __s49param1.x) {
      this.x = __s49param0.x + (this.x - __s49param1.x);
    } else if (this.x < __s49param0.x) {
      this.x = __s49param1.x + this.x;
    }
    if (this.y < __s49param0.y) {
      this.y = __s49param1.y + this.y;
    } else if (this.y > __s49param1.y) {
      this.y = __s49param0.y + (this.y - __s49param1.y);
    }
  };
  Vector2D.prototype.addedTo = function (__s55param0) {
    return new Vector2D(this.x + __s55param0.x, this.y + __s55param0.y);
  };
  Vector2D.prototype.subtractedBy = function (__s57param0) {
    return new Vector2D(this.x - __s57param0.x, this.y - __s57param0.y);
  };
  Vector2D.prototype.multipliedBy = function (__s59param0) {
    return new Vector2D(this.x * __s59param0, this.y * __s59param0);
  };
  Vector2D.prototype.dividedBy = function (__s61param0) {
    if (__s61param0 == 0) {
      __dep_exact_ba3768902da9162c.warn("Illegal Divide by Zero!");
      return new Vector2D();
    } else {
      return new Vector2D(this.x / __s61param0, this.y / __s61param0);
    }
  };
  Vector2D.prototype.getNormalized = function () {
    if (this.length == 0) {
      return new Vector2D();
    } else {
      return new Vector2D(this.x / this._length, this.y / this._length);
    }
  };
  Vector2D.prototype.getReverse = function () {
    return new Vector2D(-this.x, -this.y);
  };
  Vector2D.prototype.sign = function (__s71param0) {
    if (this.y * __s71param0.x > this.x * __s71param0.y) {
      return -1;
    } else {
      return 1;
    }
  };
  Vector2D.prototype.isParallelTo = function (__s75param0) {
    this.v1 = this.copy();
    this.v1.normalize();
    this.v2 = __s75param0.copy();
    this.v2.normalize();
    return this.v1.x == this.v2.x && this.v1.y == this.v2.y || this.v1.x == -this.v2.x && this.v1.y == -this.v2.y;
  };
  Vector2D.prototype.getPerp = function () {
    return new Vector2D(-this.y, this.x);
  };
  Vector2D.prototype.dotOf = function (__s79param0) {
    return this.x * __s79param0.x + this.y * __s79param0.y;
  };
  Vector2D.prototype.crossOf = function (__s81param0) {
    return this.x * __s81param0.y - this.y * __s81param0.x;
  };
  Vector2D.prototype.angleTo = function (__s83param0) {
    return Math.acos(this.dotOf(__s83param0) / (this.length * __s83param0.length));
  };
  Vector2D.prototype.perpDotOf = function (__s85param0) {
    return this.getPerp().dotOf(__s85param0);
  };
  Vector2D.prototype.projectionOn = function (__s87param0) {
    this.v1 = __s87param0.copy();
    this.v1.multiply(this.dotOf(__s87param0) / __s87param0.dotOf(__s87param0));
    return this.v1;
  };
  Vector2D.prototype.distanceTo = function (__s89param0) {
    var __s89local0 = __s89param0.x - this.x;
    var __s89local1 = __s89param0.y - this.y;
    return Math.sqrt(__s89local1 * __s89local1 + __s89local0 * __s89local0);
  };
  Vector2D.prototype.distanceSqTo = function (__s91param0) {
    var __s91local0 = __s91param0.y - this.y;
    var __s91local1 = __s91param0.x - this.x;
    return __s91local1 * __s91local1 + __s91local0 * __s91local0;
  };
  Vector2D.prototype.isInsideRegion = function (__s93param0, __s93param1) {
    return !(this.x < __s93param0.x) && !(this.x > __s93param0.x + __s93param1.x) && !(this.y < __s93param0.y) && !(this.y > __s93param0.y + __s93param1.y);
  };
  return Vector2D;
}();
exports.Vector2D = __s0local1;
