Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_IntPoint = require("gge-module:class_IntPoint");
var __s0local0 = function () {
  function IntRectangle(__s3param0 = 0, __s3param1 = 0, __s3param2 = 0, __s3param3 = 0) {
    this.x = __s3param0;
    this.y = __s3param1;
    this.width = __s3param2;
    this.height = __s3param3;
  }
  IntRectangle.fromRectangle = function (__s5param0) {
    return new IntRectangle(__s5param0.x, __s5param0.y, __s5param0.width, __s5param0.height);
  };
  Object.defineProperty(IntRectangle.prototype, "bottom", {
    get: function () {
      return this.y + this.height;
    },
    set: function (__s9param0) {
      this.height += __s9param0 - this.bottom;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IntRectangle.prototype, "bottomRight", {
    get: function () {
      return new __dep_class_IntPoint.IntPoint(this.x + this.width, this.y + this.height);
    },
    set: function (__s13param0) {
      this.right = __s13param0.x;
      this.bottom = __s13param0.y;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IntRectangle.prototype, "left", {
    get: function () {
      return this.x;
    },
    set: function (__s17param0) {
      this.width -= __s17param0 - this.x;
      this.x = __s17param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IntRectangle.prototype, "right", {
    get: function () {
      return this.x + this.width;
    },
    set: function (__s21param0) {
      this.width += __s21param0 - this.right;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IntRectangle.prototype, "size", {
    get: function () {
      return new __dep_class_IntPoint.IntPoint(this.width, this.height);
    },
    set: function (__s25param0) {
      this.width = __s25param0.x;
      this.height = __s25param0.y;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IntRectangle.prototype, "top", {
    get: function () {
      return this.y;
    },
    set: function (__s29param0) {
      this.height -= __s29param0 - this.y;
      this.y = __s29param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IntRectangle.prototype, "topLeft", {
    get: function () {
      return new __dep_class_IntPoint.IntPoint(this.x, this.y);
    },
    set: function (__s33param0) {
      this.left = __s33param0.x;
      this.top = __s33param0.y;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IntRectangle.prototype, "center", {
    get: function () {
      return new __dep_class_IntPoint.IntPoint(this.left + (this.width >> 1), this.top + (this.height >> 1));
    },
    enumerable: true,
    configurable: true
  });
  IntRectangle.prototype.clone = function () {
    return new IntRectangle(this.x, this.y, this.width, this.height);
  };
  IntRectangle.prototype.contains = function (__s39param0, __s39param1) {
    return __s39param0 >= this.left && __s39param0 <= this.right && __s39param1 >= this.top && __s39param1 <= this.bottom;
  };
  IntRectangle.prototype.containsPoint = function (__s41param0) {
    return this.contains(__s41param0.x, __s41param0.y);
  };
  IntRectangle.prototype.containsRect = function (__s43param0) {
    return __s43param0.left >= this.left && __s43param0.right <= this.right && __s43param0.top >= this.top && __s43param0.bottom <= this.bottom;
  };
  IntRectangle.prototype.equals = function (__s45param0) {
    return __s45param0.x == this.x && __s45param0.y == this.y && __s45param0.width == this.width && __s45param0.height == this.height;
  };
  IntRectangle.prototype.intersection = function (__s47param0) {
    var __s47local0 = new IntRectangle();
    __s47local0.left = Math.max(this.left, __s47param0.left);
    __s47local0.right = Math.min(this.right, __s47param0.right);
    __s47local0.top = Math.max(this.top, __s47param0.top);
    __s47local0.bottom = Math.min(this.bottom, __s47param0.bottom);
    if (!(__s47local0.left < __s47local0.right) || !(__s47local0.top < __s47local0.bottom)) {
      __s47local0.setEmpty();
    }
    return __s47local0;
  };
  IntRectangle.prototype.intersects = function (__s50param0) {
    return !this.intersection(__s50param0).isEmpty();
  };
  IntRectangle.prototype.isEmpty = function () {
    return this.width == 0 || this.height == 0;
  };
  IntRectangle.prototype.offset = function (__s54param0, __s54param1) {
    this.x += __s54param0;
    this.y += __s54param1;
  };
  IntRectangle.prototype.offsetPoint = function (__s56param0) {
    this.offset(__s56param0.x, __s56param0.y);
  };
  IntRectangle.prototype.setEmpty = function () {
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
  };
  IntRectangle.prototype.toString = function () {
    return "IntRect (x:" + this.x + ", y:" + this.y + ", width:" + this.width + ", height:" + this.height + ")";
  };
  IntRectangle.prototype.union = function (__s62param0) {
    var __s62local0 = new IntRectangle();
    __s62local0.left = Math.min(this.left, __s62param0.left);
    __s62local0.right = Math.max(this.right, __s62param0.right);
    __s62local0.top = Math.min(this.top, __s62param0.top);
    __s62local0.bottom = Math.max(this.bottom, __s62param0.bottom);
    return __s62local0;
  };
  return IntRectangle;
}();
exports.IntRectangle = __s0local0;
