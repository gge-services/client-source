var __s0local0 = createjs.Point;
createjs.Rectangle.prototype.containsPoint = function (__s1param0) {
  return __s1param0.x >= this.x && __s1param0.x < this.x + this.width && __s1param0.y >= this.y && __s1param0.y < this.y + this.height;
};
createjs.Rectangle.prototype.contains = function (__s3param0, __s3param1) {
  return __s3param0 >= this.x && __s3param0 < this.x + this.width && __s3param1 >= this.y && __s3param1 < this.y + this.height;
};
createjs.Rectangle.prototype.offset = function (__s5param0, __s5param1) {
  this.x += __s5param0;
  this.y += __s5param1;
};
createjs.Rectangle.prototype.offsetPoint = function (__s7param0) {
  this.offset(__s7param0.x, __s7param0.y);
};
createjs.Rectangle.prototype.inflate = function (__s9param0, __s9param1) {
  this.x -= __s9param0;
  this.width += __s9param0 * 2;
  this.y -= __s9param1;
  this.height += __s9param1 * 2;
};
createjs.Rectangle.prototype.inflatePoint = function (__s11param0) {
  this.inflate(__s11param0.x, __s11param0.y);
};
Object.defineProperty(createjs.Rectangle.prototype, "top", {
  get: function () {
    return this.y;
  },
  set: function (__s15param0) {
    this.height += this.y - __s15param0;
    this.y = __s15param0;
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(createjs.Rectangle.prototype, "bottom", {
  get: function () {
    return this.y + this.height;
  },
  set: function (__s19param0) {
    this.height = __s19param0 - this.y;
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(createjs.Rectangle.prototype, "left", {
  get: function () {
    return this.x;
  },
  set: function (__s23param0) {
    this.width += this.x - __s23param0;
    this.x = __s23param0;
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(createjs.Rectangle.prototype, "right", {
  get: function () {
    return this.x + this.width;
  },
  set: function (__s27param0) {
    this.width = __s27param0 - this.x;
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(createjs.Rectangle.prototype, "topLeft", {
  get: function () {
    return new __s0local0(this.x, this.y);
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(createjs.Rectangle.prototype, "size", {
  get: function () {
    return new __s0local0(this.width, this.height);
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(createjs.Rectangle.prototype, "bottomRight", {
  get: function () {
    return new __s0local0(this.x + this.width, this.y + this.height);
  },
  enumerable: true,
  configurable: true
});
